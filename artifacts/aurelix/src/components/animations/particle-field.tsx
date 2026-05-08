import { useEffect, useRef } from 'react'

function withAlpha(color: string, alpha: number): string {
  const clamped = Math.max(0, Math.min(1, alpha))
  const normalized = color.trim()
  const rgbaMatch = normalized.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/)
  if (rgbaMatch) {
    return `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${clamped})`
  }
  return color
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  phase: number
  phaseSpeed: number
}

export function ParticleField({ 
  className = "",
  particleCount = 50,
  color = "rgba(212, 175, 55, 0.3)"
}: { 
  className?: string
  particleCount?: number
  color?: string 
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.004 + Math.random() * 0.012,
    }))

    const MAX_DIST = 160

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.phase += p.phaseSpeed

        if (p.x < 0) p.x = canvas.offsetWidth
        if (p.x > canvas.offsetWidth) p.x = 0
        if (p.y < 0) p.y = canvas.offsetHeight
        if (p.y > canvas.offsetHeight) p.y = 0

        const sinP = Math.sin(p.phase)
        const particleAlpha = p.opacity * (0.5 + 0.5 * Math.abs(sinP))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = withAlpha(color, particleAlpha)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = p.x - other.x
          const dy = p.y - other.y
          const distSq = dx * dx + dy * dy

          if (distSq >= MAX_DIST * MAX_DIST) continue

          const distance = Math.sqrt(distSq)
          const distanceFactor = 1 - distance / MAX_DIST

          const sinQ = Math.sin(other.phase)
          const phaseFactor = Math.max(0, sinP) * Math.max(0, sinQ)

          const lineAlpha = 0.55 * distanceFactor * phaseFactor

          if (lineAlpha < 0.005) continue

          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = withAlpha(color, lineAlpha)
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, color])

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}

import { useEffect, useRef } from 'react'

function withAlpha(r: number, g: number, b: number, alpha: number): string {
  return `rgba(${r},${g},${b},${Math.max(0, Math.min(1, alpha))})`
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  brightness: number
  phase: number
  phaseSpeed: number
  tier: 0 | 1 | 2
}

export function ParticleField({
  className = '',
  particleCount = 38,
  color = 'rgba(212, 175, 55',
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

    const R = 212, G = 175, B = 55

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const tiers: Array<0 | 1 | 2> = [0, 0, 0, 1, 1, 2]

    particlesRef.current = Array.from({ length: particleCount }, () => {
      const tier = tiers[Math.floor(Math.random() * tiers.length)]
      const size = tier === 2 ? 3.5 + Math.random() * 1.5
        : tier === 1 ? 1.8 + Math.random() * 1.0
        : 0.6 + Math.random() * 0.8

      return {
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size,
        brightness: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.003 + Math.random() * 0.009,
        tier,
      }
    })

    const MAX_DIST = 240
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const particles = particlesRef.current
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.phase += p.phaseSpeed
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        const sinP = Math.sin(p.phase)

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dSq = dx * dx + dy * dy
          if (dSq >= MAX_DIST_SQ) continue

          const dist = Math.sqrt(dSq)
          const distFactor = 1 - dist / MAX_DIST

          const sinQ = Math.sin(q.phase)
          const phaseStrength = Math.max(0, sinP) * Math.max(0, sinQ)

          const lineAlpha = 0.75 * distFactor * distFactor * phaseStrength
          if (lineAlpha < 0.01) continue

          const tierBoost = (p.tier + q.tier) / 4
          const finalAlpha = Math.min(0.9, lineAlpha + tierBoost * 0.1)

          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.strokeStyle = withAlpha(R, G, B, finalAlpha)
          ctx.lineWidth = 0.7
          ctx.stroke()

          if (p.tier === 2 || q.tier === 2) {
            const mx = (p.x + q.x) / 2
            const my = (p.y + q.y) / 2
            ctx.beginPath()
            ctx.arc(mx, my, 1.2, 0, Math.PI * 2)
            ctx.fillStyle = withAlpha(R, G, B, finalAlpha * 0.4)
            ctx.fill()
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const sinP = Math.sin(p.phase)
        const pulse = 0.6 + 0.4 * Math.abs(sinP)
        const alpha = p.brightness * pulse

        if (p.tier === 2) {
          ctx.save()
          ctx.shadowBlur = 14
          ctx.shadowColor = withAlpha(R, G, B, 0.8)
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = withAlpha(R, G, B, alpha)
          ctx.fill()
          ctx.restore()

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2)
          ctx.fillStyle = withAlpha(R, G, B, alpha * 0.12)
          ctx.fill()
        } else if (p.tier === 1) {
          ctx.save()
          ctx.shadowBlur = 7
          ctx.shadowColor = withAlpha(R, G, B, 0.5)
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = withAlpha(R, G, B, alpha * 0.9)
          ctx.fill()
          ctx.restore()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = withAlpha(R, G, B, alpha * 0.55)
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [particleCount, color])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}

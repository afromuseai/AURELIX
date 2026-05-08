import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  glow: boolean
}

export function ParticleField({
  className = '',
  particleCount = 28,
}: {
  className?: string
  particleCount?: number
  color?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    const init = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight

      dotsRef.current = Array.from({ length: particleCount }, () => {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.1 + Math.random() * 0.15
        const glow = Math.random() < 0.25
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: glow ? 2.5 + Math.random() : 1.0 + Math.random() * 0.8,
          glow,
        }
      })
    }

    init()
    window.addEventListener('resize', init)

    const MAX = 300

    const frame = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)
      const dots = dotsRef.current

      // Move
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = W
        if (d.x > W) d.x = 0
        if (d.y < 0) d.y = H
        if (d.y > H) d.y = 0
      }

      // Lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist >= MAX) continue
          const t = 1 - dist / MAX
          ctx.beginPath()
          ctx.moveTo(dots[i].x, dots[i].y)
          ctx.lineTo(dots[j].x, dots[j].y)
          ctx.strokeStyle = `rgba(212,175,55,${(t * t * 0.7).toFixed(3)})`
          ctx.lineWidth = 0.9
          ctx.stroke()
        }
      }

      // Dots
      for (const d of dots) {
        if (d.glow) {
          ctx.save()
          ctx.shadowBlur = 18
          ctx.shadowColor = 'rgba(212,175,55,1)'
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(230,195,75,0.95)'
          ctx.fill()
          ctx.restore()
          // halo
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(212,175,55,0.08)'
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(212,175,55,0.75)'
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    frame()
    return () => {
      window.removeEventListener('resize', init)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [particleCount])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}

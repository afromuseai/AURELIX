import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function ParticleField({
  className = '',
  particleCount = 24,
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
        const speed = 0.08 + Math.random() * 0.12
        const angle = Math.random() * Math.PI * 2
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: Math.random() < 0.2 ? 2.0 + Math.random() * 0.8 : 0.6 + Math.random() * 0.7,
        }
      })
    }

    init()
    window.addEventListener('resize', init)

    const MAX = 280

    const loop = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      const dots = dotsRef.current

      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = W
        if (d.x > W) d.x = 0
        if (d.y < 0) d.y = H
        if (d.y > H) d.y = 0
      }

      // Draw lines first (behind dots)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist >= MAX) continue

          const t = 1 - dist / MAX
          const alpha = t * t * 0.6

          ctx.beginPath()
          ctx.moveTo(dots[i].x, dots[i].y)
          ctx.lineTo(dots[j].x, dots[j].y)
          ctx.strokeStyle = `rgba(212,175,55,${alpha})`
          ctx.lineWidth = 0.75
          ctx.stroke()
        }
      }

      // Draw dots on top
      for (const d of dots) {
        const isLarge = d.r > 1.6

        if (isLarge) {
          ctx.save()
          ctx.shadowBlur = 10
          ctx.shadowColor = 'rgba(212,175,55,0.85)'
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(212,175,55,0.9)'
          ctx.fill()
          ctx.restore()
        } else {
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(212,175,55,0.65)'
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    loop()

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

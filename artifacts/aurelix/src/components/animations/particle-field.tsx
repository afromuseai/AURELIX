import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  opacity: number
}

export function ParticleField({
  className = '',
  particleCount = 22,
}: {
  className?: string
  particleCount?: number
  color?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight

    nodesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() < 0.25 ? 2.0 + Math.random() * 1.2 : 0.8 + Math.random() * 0.8,
      opacity: Math.random() * 0.5 + 0.5,
    }))

    const MAX = 380

    const draw = () => {
      const w = W(), h = H()
      ctx.clearRect(0, 0, w, h)

      const nodes = nodesRef.current

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0) n.x = w
        if (n.x > w) n.x = 0
        if (n.y < 0) n.y = h
        if (n.y > h) n.y = 0
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d >= MAX) continue

          const t = 1 - d / MAX
          const alpha = t * t * 0.65

          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(212,175,55,${alpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      for (const n of nodes) {
        const isLarge = n.r > 1.5

        if (isLarge) {
          ctx.save()
          ctx.shadowBlur = 10
          ctx.shadowColor = 'rgba(212,175,55,0.9)'
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212,175,55,${n.opacity})`
          ctx.fill()
          ctx.restore()

          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212,175,55,0.07)`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212,175,55,${n.opacity * 0.75})`
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
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

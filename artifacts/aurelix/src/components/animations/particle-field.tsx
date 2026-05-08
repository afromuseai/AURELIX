import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  r: number
  brightness: number
}

interface Edge {
  a: number
  b: number
  ax: number
  ay: number
  bx: number
  by: number
  switchEnd: 'a' | 'b' | null
  targetNode: number
  progress: number
  countdown: number
  period: number
}

const TRANSITION_FRAMES = 90
const R = 212, G = 175, B = 55

export function ParticleField({
  className = '',
  particleCount = 22,
}: {
  className?: string
  particleCount?: number
  color?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<{ nodes: Node[]; edges: Edge[] } | null>(null)
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    const setup = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)

      const W = canvas.offsetWidth
      const H = canvas.offsetHeight

      const nodes: Node[] = Array.from({ length: particleCount }, () => ({
        x: 0.05 * W + Math.random() * W * 0.9,
        y: 0.05 * H + Math.random() * H * 0.9,
        r: Math.random() < 0.2 ? 2.2 + Math.random() : 0.7 + Math.random() * 0.7,
        brightness: 0.5 + Math.random() * 0.5,
      }))

      const edgeCount = Math.round(particleCount * 0.6)
      const edges: Edge[] = []
      const used = new Set<string>()

      for (let i = 0; i < edgeCount; i++) {
        let a: number, b: number, key: string
        let tries = 0
        do {
          a = Math.floor(Math.random() * nodes.length)
          b = Math.floor(Math.random() * nodes.length)
          key = a < b ? `${a}-${b}` : `${b}-${a}`
          tries++
        } while ((a === b || used.has(key)) && tries < 30)
        used.add(key)

        const period = 160 + Math.floor(Math.random() * 280)
        edges.push({
          a, b,
          ax: nodes[a].x, ay: nodes[a].y,
          bx: nodes[b].x, by: nodes[b].y,
          switchEnd: null,
          targetNode: -1,
          progress: 0,
          countdown: Math.floor(Math.random() * period),
          period,
        })
      }

      stateRef.current = { nodes, edges }
    }

    setup()
    window.addEventListener('resize', setup)

    const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    const draw = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      const state = stateRef.current
      if (!state) { rafRef.current = requestAnimationFrame(draw); return }
      const { nodes, edges } = state

      for (const e of edges) {
        const na = nodes[e.a]
        const nb = nodes[e.b]

        if (e.switchEnd === null) {
          e.countdown--
          if (e.countdown <= 0) {
            e.switchEnd = Math.random() < 0.5 ? 'a' : 'b'
            let next: number
            do { next = Math.floor(Math.random() * nodes.length) }
            while (next === e.a || next === e.b)
            e.targetNode = next
            e.progress = 0
          }
        }

        if (e.switchEnd !== null) {
          e.progress += 1 / TRANSITION_FRAMES
          if (e.progress >= 1) {
            e.progress = 1
            if (e.switchEnd === 'a') {
              e.a = e.targetNode
              e.ax = nodes[e.a].x
              e.ay = nodes[e.a].y
            } else {
              e.b = e.targetNode
              e.bx = nodes[e.b].x
              e.by = nodes[e.b].y
            }
            e.switchEnd = null
            e.targetNode = -1
            e.countdown = e.period + Math.floor(Math.random() * 80 - 40)
          } else {
            const t = easeInOut(e.progress)
            const tn = nodes[e.targetNode]
            if (e.switchEnd === 'a') {
              e.ax = na.x + (tn.x - na.x) * t
              e.ay = na.y + (tn.y - na.y) * t
            } else {
              e.bx = nb.x + (tn.x - nb.x) * t
              e.by = nb.y + (tn.y - nb.y) * t
            }
          }
        } else {
          e.ax = na.x
          e.ay = na.y
          e.bx = nb.x
          e.by = nb.y
        }

        const inTransition = e.switchEnd !== null
        const alpha = inTransition
          ? 0.5 * (1 - Math.sin(e.progress * Math.PI) * 0.4)
          : 0.45

        ctx.beginPath()
        ctx.moveTo(e.ax, e.ay)
        ctx.lineTo(e.bx, e.by)
        ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`
        ctx.lineWidth = 0.75
        ctx.stroke()
      }

      for (const n of nodes) {
        const isLarge = n.r > 1.8
        if (isLarge) {
          ctx.save()
          ctx.shadowBlur = 12
          ctx.shadowColor = `rgba(${R},${G},${B},0.9)`
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${R},${G},${B},${n.brightness})`
          ctx.fill()
          ctx.restore()
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r * 2.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${R},${G},${B},0.06)`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${R},${G},${B},${n.brightness * 0.8})`
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setup)
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

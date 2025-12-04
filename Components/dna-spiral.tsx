"use client"

import { useEffect, useRef } from "react"

export function DNASpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 300

    let animationId: number

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(8, 12, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const rotation = (time * 0.001) % (Math.PI * 2)

      // Draw DNA double helix
      for (let i = 0; i < 100; i++) {
        const t = (i / 100 + rotation / (Math.PI * 2)) % 1
        const y = t * 200 - 100
        const radius = 50

        // First strand
        const x1 = centerX + Math.cos(t * Math.PI * 4 + rotation) * radius
        const y1 = centerY + y

        ctx.fillStyle = `hsla(280, 100%, 60%, ${0.8 - t})`
        ctx.beginPath()
        ctx.arc(x1, y1, 3, 0, Math.PI * 2)
        ctx.fill()

        // Second strand
        const x2 = centerX + Math.cos(t * Math.PI * 4 + rotation + Math.PI) * radius
        const y2 = centerY + y

        ctx.fillStyle = `hsla(320, 100%, 50%, ${0.8 - t})`
        ctx.beginPath()
        ctx.arc(x2, y2, 3, 0, Math.PI * 2)
        ctx.fill()

        // Connecting strands
        if (i % 5 === 0) {
          ctx.strokeStyle = `hsla(300, 80%, 55%, ${0.4 - t * 0.4})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-90" />
}

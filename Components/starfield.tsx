"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  vz: number
  size: number
  opacity: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Star[] = []

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 500,
        vz: 2 + Math.random() * 3,
        size: Math.random() * 2,
        opacity: Math.random() * 0.7 + 0.3,
      })
    }

    let animationId: number

    const draw = () => {
      ctx.fillStyle = "rgba(8, 12, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.z -= star.vz

        if (star.z <= 0) {
          star.z = 500
          star.x = Math.random() * canvas.width - canvas.width / 2
          star.y = Math.random() * canvas.height - canvas.height / 2
        }

        const k = 300 / star.z
        const x = star.x * k + canvas.width / 2
        const y = star.y * k + canvas.height / 2

        const brightness = 1 - star.z / 500
        ctx.fillStyle = `hsla(280, 100%, ${50 + brightness * 50}%, ${brightness * star.opacity})`
        ctx.beginPath()
        ctx.arc(x, y, star.size * brightness, 0, Math.PI * 2)
        ctx.fill()

        // Add glow
        if (brightness > 0.8) {
          ctx.strokeStyle = `hsla(280, 100%, 70%, ${(brightness - 0.8) * star.opacity * 2})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(x, y, star.size * brightness * 2, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
}

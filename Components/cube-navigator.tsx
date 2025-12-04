"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CosmicLayer } from "./cosmic-layer"
import { AdvertisingLayer } from "./advertising-layer"
import { DashboardLayer } from "./dashboard-layer"
import { EnergyMarquee } from "./energy-marquee"

export function CubeNavigator() {
  const [layer, setLayer] = useState<"outer" | "middle" | "inner">("outer")
  const [touchStart, setTouchStart] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") rotateLeft()
      if (e.key === "ArrowRight") rotateRight()
    }

    const handleMouseWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY < 0) rotateRight()
      if (e.deltaY > 0) rotateLeft()
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleMouseWheel, { passive: false })

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleMouseWheel)
    }
  }, [])

  const rotateLeft = () => {
    setLayer((prev) => {
      if (prev === "outer") return "middle"
      if (prev === "middle") return "inner"
      return "outer"
    })
  }

  const rotateRight = () => {
    setLayer((prev) => {
      if (prev === "inner") return "middle"
      if (prev === "middle") return "outer"
      return "inner"
    })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    if (touchStart - touchEnd > 50) rotateLeft()
    if (touchEnd - touchStart > 50) rotateRight()
  }

  const handleDoubleClick = () => {
    rotateRight()
  }

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("[data-interactive]")) return
    if (layer !== "inner") {
      setLayer("inner")
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-background overflow-hidden perspective"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <EnergyMarquee />

      {/* Navigation buttons */}
      <button
        onClick={rotateLeft}
        className="absolute bottom-8 left-8 z-50 bg-primary/20 hover:bg-primary/40 text-foreground p-3 rounded-full transition-colors border border-primary/50"
        data-interactive="true"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={rotateRight}
        className="absolute bottom-8 right-8 z-50 bg-primary/20 hover:bg-primary/40 text-foreground p-3 rounded-full transition-colors border border-primary/50"
        data-interactive="true"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Layer content with transition */}
      <div className="relative w-full h-full transition-all duration-1000">
        {layer === "outer" && <CosmicLayer />}
        {layer === "middle" && <AdvertisingLayer />}
        {layer === "inner" && <DashboardLayer />}
      </div>

      {/* Layer indicator */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40 bg-primary/20 text-foreground px-4 py-2 rounded-full text-sm border border-primary/50 backdrop-blur-sm">
        {layer === "outer" && "Cosmic Environment"}
        {layer === "middle" && "Advertising Layer"}
        {layer === "inner" && "Dashboard"}
      </div>
    </div>
  )
}

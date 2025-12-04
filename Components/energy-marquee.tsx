"use client"

export function EnergyMarquee() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-r from-primary/30 to-secondary/30 border-b border-primary/50 overflow-hidden backdrop-blur-sm">
      <div className="flex animate-pulse">
        <div className="flex items-center whitespace-nowrap py-3 px-8">
          <span className="text-foreground font-semibold mr-4">⚡ Energy Efficiency:</span>
          <span className="text-accent text-lg font-bold animate-pulse">68% Energy Saving</span>
          <span className="text-foreground/50 mx-4">•</span>
          <span className="text-foreground text-sm">Advanced power optimization for extended battery life</span>
        </div>
        <div className="flex items-center whitespace-nowrap py-3 px-8">
          <span className="text-foreground font-semibold mr-4">⚡ Energy Efficiency:</span>
          <span className="text-accent text-lg font-bold animate-pulse">68% Energy Saving</span>
          <span className="text-foreground/50 mx-4">•</span>
          <span className="text-foreground text-sm">Advanced power optimization for extended battery life</span>
        </div>
      </div>
    </div>
  )
}

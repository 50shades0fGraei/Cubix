"use client"

import { DNASpiral } from "./dna-spiral"
import { HardDrive, Package, Settings, BarChart3 } from "lucide-react"

export function DashboardLayer() {
  const widgets = [
    {
      icon: HardDrive,
      label: "Storage",
      value: "512GB",
      usage: 65,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Package,
      label: "Applications",
      value: "248",
      usage: 45,
      color: "from-green-500 to-green-600",
    },
    {
      icon: BarChart3,
      label: "Performance",
      value: "98%",
      usage: 98,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Settings,
      label: "System",
      value: "Optimal",
      usage: 92,
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-card/50 to-background flex items-center justify-center overflow-auto">
      {/* DNA Spiral in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 flex items-center justify-center">
          <div className="animate-dna-spiral">
            <DNASpiral />
          </div>
        </div>
      </div>

      {/* Widget grid around spiral */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl">
          {widgets.map((widget, i) => {
            const Icon = widget.icon
            return (
              <div
                key={i}
                className="bg-card/80 border border-border rounded-lg p-6 backdrop-blur-sm hover:border-primary/50 transition-all hover:bg-card/95 cursor-pointer"
                data-interactive="true"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-br ${widget.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-bold text-foreground">{widget.value}</span>
                </div>

                <h3 className="text-foreground font-semibold mb-3">{widget.label}</h3>

                {/* Progress bar */}
                <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${widget.color} h-full transition-all duration-500`}
                    style={{ width: `${widget.usage}%` }}
                  />
                </div>
                <p className="text-xs text-foreground/60 mt-2">{widget.usage}% utilized</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
    </div>
  )
}

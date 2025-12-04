"use client"

import { Starfield } from "./starfield"
import { Globe, Mail, Code2, Settings } from "lucide-react"

export function CosmicLayer() {
  const floatingApps = [
    { icon: Globe, label: "Browser", color: "from-blue-500 to-blue-600", delay: 0 },
    { icon: Mail, label: "Email", color: "from-purple-500 to-purple-600", delay: 1 },
    { icon: Code2, label: "IDE", color: "from-green-500 to-green-600", delay: 2 },
    { icon: Settings, label: "Settings", color: "from-pink-500 to-pink-600", delay: 3 },
  ]

  return (
    <div className="relative w-full h-full">
      <Starfield />

      {/* Floating application windows */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 absolute">
          {floatingApps.map((app, i) => {
            const Icon = app.icon
            return (
              <div key={i} className="animate-float" style={{ animationDelay: `${app.delay}s` }}>
                <div
                  className={`bg-gradient-to-br ${app.color} p-8 rounded-lg shadow-2xl border border-white/20 backdrop-blur-sm cursor-pointer hover:shadow-3xl transition-all hover:scale-110`}
                >
                  <Icon className="w-12 h-12 text-white mb-2" />
                  <p className="text-white text-xs font-semibold">{app.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Orbiting elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 border-2 border-primary/30 rounded-full animate-spin-y" />
        <div
          className="absolute w-64 h-64 border-2 border-secondary/30 rounded-full"
          style={{ animationName: "spin-y", animationDuration: "30s", animationDirection: "reverse" }}
        />
      </div>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-5xl font-bold text-foreground mb-4">Mobile Tesseract OSI</h1>
        <p className="text-xl text-foreground/70 max-w-md">Advanced Mobile Operating System</p>
      </div>
    </div>
  )
}

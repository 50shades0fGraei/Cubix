"use client"

export function AdvertisingLayer() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-background via-card to-background flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Revolutionary Technology
          </div>
        </div>

        <h2 className="text-6xl font-bold text-foreground mb-6 leading-tight">
          Experience{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Mobile Innovation
          </span>
        </h2>

        <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
          Mobile Tesseract OSI represents the future of mobile operating systems. Built with cutting-edge technology for
          unprecedented performance and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "68% Energy Saving", desc: "Advanced power management" },
            { title: "DNA Architecture", desc: "Intelligent system design" },
            { title: "4D Interface", desc: "Immersive user experience" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/60">{feature.desc}</p>
            </div>
          ))}
        </div>

        <button
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 mb-8"
          data-interactive="true"
        >
          Learn More
        </button>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/50shades0fGraei/mobile-tesseractOSI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors underline text-sm"
            data-interactive="true"
          >
            GitHub Repository
          </a>
          <span className="text-foreground/30">•</span>
          <a
            href="#"
            className="text-primary hover:text-secondary transition-colors underline text-sm"
            data-interactive="true"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  )
}

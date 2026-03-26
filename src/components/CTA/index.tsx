"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 lg:px-12 text-center overflow-hidden"
    >
      {/* Background smoke */}
      <div
        className="smoke absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-8 block">
          Let's Create Together
        </span>

        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Convinced we can create
          <br />
          something{" "}
          <em className="italic">extraordinary</em> to be?
        </h2>

        <p className="text-white/40 text-sm mb-12 max-w-md mx-auto leading-relaxed">
          Let's build a brand that makes people stop scrolling and start paying
          attention. Book your discovery call today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@meily.studio"
            className="px-10 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors"
          >
            Start a Project
          </a>
          <a
            href="#"
            className="px-10 py-4 border border-white/20 text-white/60 text-xs tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-all"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
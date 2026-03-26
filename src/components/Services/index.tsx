"use client";

import Image from "next/image";
import servicesPic from "@/assets/services.png";

const services = [
  {
    num: "S1",
    title: "Brand Identity",
    desc: "Complete visual identity systems: logo, color, typography, and brand guidelines that define who you are across every touchpoint.",
  },
  {
    num: "S2",
    title: "Brand Design",
    desc: "Strategic visual design that communicates your brand story. Collateral, social systems, and marketing materials built for impact.",
  },
  {
    num: "S3",
    title: "Package Design",
    desc: "Packaging that sells on shelf and online. Structural concepts, print-ready artwork, and material guidance included.",
  },
  {
    num: "S4",
    title: "Mockup Design",
    desc: "Photorealistic mockups that show your brand in context. Perfect for presentations, launches, and investor decks.",
  },
];

const tools = [
  "Figma",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "Blender",
  "Procreate",
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-12 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 block">
              # Design Services
            </span>
            <h2
              className="text-5xl md:text-6xl font-light leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services
            </h2>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Providing businesses obsessed with quality the identity and visual
              language they need to stand out and connect.
            </p>
            {/* Tool tags */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 border border-white/10 text-white/30 text-xs tracking-widest uppercase"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-black p-8 hover:bg-zinc-950 transition-colors duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-white/20 tracking-widest">
                  {service.num}
                </span>
                <svg
                  className="w-4 h-4 text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-300"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M8 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-light mb-3 text-white/80 group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom image + CTA */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="img-hover relative aspect-video bg-zinc-900 overflow-hidden">
            <Image
              src={servicesPic}
              alt="Services"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
              Ready to build something extraordinary? Let's start with a free
              discovery call to explore what's possible.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors"
            >
              Book a Call
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

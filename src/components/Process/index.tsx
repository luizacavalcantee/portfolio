"use client";

import Image from "next/image";
import processPic from "@/assets/process-pic.png";

const steps = [
  {
    num: "01",
    title: "Define Your Vision",
    desc: "We start with a deep discovery session to understand your brand, goals, audience, and competitive landscape. This shapes everything that follows.",
  },
  {
    num: "02",
    title: "Submit Your Request",
    desc: "Once we've aligned on direction, you submit your brief and assets. I'll ask the right questions to make sure nothing is left to chance.",
  },
  {
    num: "03",
    title: "Project Delivered",
    desc: "Refined, production-ready files delivered on time. Every asset meticulously crafted with the precision your brand deserves.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Image */}
        <div className="relative order-2 lg:order-1">
          <div className="img-hover relative aspect-[4/5] bg-zinc-900 overflow-hidden max-w-md">
            <Image
              src={processPic}
              alt="Design process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>

          {/* Floating tag */}
          <div className="absolute top-8 right-0 lg:-right-6 bg-zinc-900 border border-white/5 px-4 py-3">
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-1">
              Avg. Turnaround
            </p>
            <p
              className="text-xl font-light"
              style={{ fontFamily: "var(--font-display)" }}
            >
              7–14 days
            </p>
          </div>
        </div>

        {/* Right — Content */}
        <div className="order-1 lg:order-2">
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 block">
            # How It Works
          </span>

          <h2
            className="text-5xl md:text-6xl font-light leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Process
          </h2>

          <p className="text-white/40 text-sm mb-12 max-w-sm leading-relaxed">
            A refined, studio-grade workflow that inspires confidence at every
            step of the journey.
          </p>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group border-t border-white/5 py-6 hover:border-white/15 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-6">
                  <span className="text-white/20 text-xs tabular-nums mt-1 flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-white/80 group-hover:text-white mb-2 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/30 text-sm leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                  <svg
                    className="ml-auto w-4 h-4 text-white/10 group-hover:text-white/40 flex-shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-1"
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
              </div>
            ))}
            <div className="border-t border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

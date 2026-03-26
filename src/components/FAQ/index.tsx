"use client";

import Image from "next/image";
import { useState } from "react";
import answersPic from "@/assets/answers.png";

const faqs = [
  {
    q: "What do you provide in your packages?",
    a: "Each package includes strategy, concept development, full design execution, and production-ready file delivery in all required formats. Brand identity packages also include a comprehensive brand guidelines document.",
  },
  {
    q: "How long does a typical project take?",
    a: "Brand identity projects typically take 2–4 weeks. Packaging design takes 1–3 weeks. Timelines are always discussed and confirmed upfront before work begins.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Every project includes revision rounds as specified in your package. I work collaboratively to ensure the final result exceeds your expectations.",
  },
  {
    q: "Can I request something not on your services list?",
    a: "Absolutely. If you have a specific need, reach out and let's discuss. I take on select custom projects that align with my expertise.",
  },
  {
    q: "How do we start working together?",
    a: "Book a free 30-minute discovery call. We'll discuss your project, goals, and timeline, and I'll propose the right package and approach for you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — Image */}
        <div className="relative">
          <div className="img-hover relative aspect-square bg-zinc-900 overflow-hidden max-w-sm">
            <Image
              src={answersPic}
              alt="Answers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </div>

        {/* Right — FAQ */}
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 block">
            # FAQ
          </span>
          <h2
            className="text-5xl md:text-6xl font-light leading-tight mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Answers
          </h2>

          <div className="divide-y divide-white/5">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors pr-8">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-4 h-4 text-white/20 flex-shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-48 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-white/30 text-sm leading-relaxed">
                    {faq.a}
                  </p>
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

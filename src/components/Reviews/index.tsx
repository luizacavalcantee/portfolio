"use client";

import Image from "next/image";
import clientReviewPic from "@/assets/client-review.png";

const reviews = [
  {
    name: "June Lee",
    role: "Founder, Aura Studio",
    rating: 5,
    text: "Working with Meily was transformative. The brand identity she created is exactly what we envisioned — refined, modern, and deeply us. Delivered ahead of schedule.",
    initials: "JL",
  },
  {
    name: "Jona Carter",
    role: "Creative Director",
    rating: 5,
    text: "Exceptional attention to detail and a genuine understanding of brand strategy. The packaging design she produced elevated our product significantly.",
    initials: "JC",
  },
  {
    name: "Sofia Toms",
    role: "CEO, Noun Collective",
    rating: 5,
    text: "From first call to final delivery, the process was smooth and inspiring. Meily brings both creative vision and strategic thinking to every project.",
    initials: "ST",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-3 h-3 text-[#c8b89a]"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M6 1l1.236 3.789H11l-3.118 2.264 1.236 3.789L6 8.578l-3.118 2.264 1.236-3.789L1 4.789h3.764L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 block">
            # Client Reviews
          </span>
          <div className="flex items-end justify-between gap-8">
            <h2
              className="text-5xl md:text-6xl font-light leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Client Reviews
            </h2>
            <div className="hidden md:block min-w-[220px]">
              <div className="img-hover relative h-24 w-full overflow-hidden border border-white/10 mb-4">
                <Image
                  src={clientReviewPic}
                  alt="Client review"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <p className="text-sm text-white/40 mb-1">Overall Rating</p>
              <div className="flex items-center gap-2">
                <Stars count={5} />
                <span className="text-white/60 text-sm">5.0 / 5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-white/5 p-8 hover:border-white/10 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white/50 font-medium">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm text-white/80">{review.name}</p>
                  <p className="text-xs text-white/30">{review.role}</p>
                </div>
              </div>

              <Stars count={review.rating} />

              <p className="mt-4 text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

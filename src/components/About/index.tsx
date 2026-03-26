"use client";

import Image from "next/image";
import profilePic from "@/assets/profile-pic.png";

const skills = [
  "Brand Identity",
  "Visual Design",
  "Typography",
  "Art Direction",
  "Packaging",
  "Motion",
];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "96%" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 block">
            About
          </span>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet <em className="italic">Meily</em>
          </h2>

          <p className="text-white/50 leading-relaxed mb-6 text-sm max-w-md">
            I'm a brand designer passionate about creating visual identities
            that tell stories and leave lasting impressions. With a keen eye for
            detail and a love for craft, I help businesses communicate who they
            are.
          </p>

          <p className="text-white/40 leading-relaxed mb-10 text-sm max-w-md">
            From early strategy to final delivery, every project is a
            collaboration built on trust, curiosity, and a relentless pursuit of
            excellence.
          </p>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 border border-white/10 text-white/40 text-xs tracking-widest uppercase hover:border-white/30 hover:text-white/70 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-light mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-white/30 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative">
          <div className="img-hover relative aspect-[3/4] bg-zinc-900 overflow-hidden max-w-sm ml-auto">
            <Image
              src={profilePic}
              alt="Meily"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-8 -left-6 bg-black border border-white/10 px-5 py-4 max-w-[160px]">
            <p className="text-xs text-white/40 tracking-widest uppercase mb-1">
              Based in
            </p>
            <p className="text-sm text-white">Your City ✦</p>
          </div>
        </div>
      </div>
    </section>
  );
}

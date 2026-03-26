"use client";

const works = [
  { title: "Aura Brand Identity", category: "Branding", year: "2024" },
  { title: "Cares Packaging", category: "Packaging", year: "2024" },
  { title: "Noun Visual System", category: "Art Direction", year: "2023" },
  { title: "Studio Olive", category: "Brand Identity", year: "2023" },
];

export default function RecentWork() {
  return (
    <section className="py-8 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">Recent Work</span>
          <a
            href="#"
            className="text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors flex items-center gap-2"
          >
            View All
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Horizontal image strip */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="img-hover flex-shrink-0 relative bg-zinc-900 overflow-hidden group cursor-pointer"
              style={{ width: "260px", height: "180px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 transition-transform duration-700 group-hover:scale-105" />
              {/* <Image src={`/images/work-${i}.jpg`} alt={works[i-1].title} fill className="object-cover" /> */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs tracking-widest uppercase text-white/50">{works[i - 1].category}</p>
                <p className="text-sm text-white mt-0.5">{works[i - 1].title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider list view */}
        <div className="mt-12 divide-y divide-white/5">
          {works.map((work, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5 group cursor-pointer hover:pl-2 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="text-white/20 text-xs tabular-nums">0{i + 1}</span>
                <span className="text-white/80 group-hover:text-white transition-colors">{work.title}</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-xs tracking-widest uppercase text-white/30">{work.category}</span>
                <span className="text-xs text-white/20">{work.year}</span>
                <svg
                  className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
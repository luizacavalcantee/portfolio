"use client";

const stats = [
  { value: "180+", label: "Projects Completed" },
  { value: "96%", label: "Client Satisfaction" },
  { value: "15+", label: "Industries Served" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 lg:px-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <p
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white/80 group-hover:text-white transition-colors mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-white/30">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
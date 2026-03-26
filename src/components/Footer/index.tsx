"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p
          className="text-xl font-light tracking-wider"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ✦ Portfolio
        </p>

        <div className="flex items-center gap-8 text-xs tracking-widest uppercase text-white/30">
          {["Instagram", "Behance", "Dribbble", "LinkedIn"].map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
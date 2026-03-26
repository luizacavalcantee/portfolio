"use client";

import Image from "next/image";
import heroBackground from "@/assets/background.svg";
import MainButton from "@/components/MainButton";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6">
      <Image
        src={heroBackground}
        alt="Hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex-1 flex flex-col items-center justify-center mt-44 py-10">
          <h1 className="text-8xl text-white font-normal max-w-[900px] leading-[1.1] mb-6">
            Branding that you need Indeed
          </h1>
          <p className="text-base font-light text-white/65 max-w-[600px] mb-6">
            Elevate your brand with custom identity and package design. Showcase
            your story through bold visuals and strategic design solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MainButton />
            <MainButton label="See projects" href="#gallery" />
          </div>
        </div>

        <div className="mt-8 mb-14 w-full max-w-[620px] h-[38px] flex items-center justify-center">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <RecentWork />
      <Process />
      <Services />
      <Reviews />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
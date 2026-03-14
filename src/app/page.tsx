"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Helo } from "@/components/sections/Helo";
import { Merits } from "@/components/sections/Merits";
import { Flow } from "@/components/sections/Flow";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { QA } from "@/components/sections/QA";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { Access } from "@/components/sections/Access";
import { WhatIsLabriller } from "@/components/sections/WhatIsLabriller";
import { ComparisonTableNoScroll } from "@/components/sections/ComparisonTableNoScroll";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { PricingTable } from "@/components/sections/PricingTable";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-white selection:bg-gold/30 pb-16 md:pb-20 overflow-x-hidden">
      {/* Dynamic Background Fluid Orbs - Inspired by Variant 5 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
        <div 
          className="absolute rounded-full bg-parfait-blue/15 blur-[120px] w-[70vw] h-[70vw] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${10 + scrollY * 0.04}vw, ${-5 + scrollY * 0.01}vh)`,
            opacity: 0.5
          }}
        />
        <div 
          className="absolute rounded-full bg-gold/5 blur-[140px] w-[60vw] h-[60vw] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${-15 + scrollY * -0.02}vw, ${15 + scrollY * 0.03}vh)`,
            opacity: 0.3
          }}
        />
        {/* Additional slow orb for deeper sections */}
        <div 
          className="absolute rounded-full bg-parfait-blue/10 blur-[100px] w-[40vw] h-[40vw] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${scrollY * -0.01}vw, ${40 + scrollY * 0.02}vh)`,
            opacity: 0.4
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <Header />

        <Helo />

        <WhatIsLabriller />

        <Merits />

        <ComparisonTableNoScroll />

        <CaseStudies />

        <PricingTable />

        <Flow />

        <QA />

        <InstagramSection />

        <ClinicGallery />

        <Access />

        <Footer />
        <FloatingCTA />
      </div>
    </main>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
import defaultLayoutData from "../../../../current-layout-design.json";

// Registry of available components
const SECTION_REGISTRY: Record<string, React.ComponentType<any>> = {
  "helo": Helo,
  "what-is-labriller": WhatIsLabriller,
  "merits": Merits,
  "comparison-table": ComparisonTableNoScroll,
  "cases": CaseStudies,
  "pricing": PricingTable,
  "flow": Flow,
  "qa": QA,
  "instagram": InstagramSection,
  "clinic-gallery": ClinicGallery,
  "access": Access,
};

export default function DynamicPreviewPage() {
  const [sections, setSections] = useState(defaultLayoutData.sections);

  // In the future, this could fetch from a URL passed via query params
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const configUrl = params.get("configUrl");
  //   if (configUrl) {
  //     fetch(configUrl).then(res => res.json()).then(data => setSections(data.sections));
  //   }
  // }, []);

  return (
    <main className="relative min-h-screen bg-white">
      <div className="fixed top-4 left-4 z-[9999] bg-black/80 text-white px-3 py-1 rounded shadow-lg text-xs font-mono">
        🔄 Dynamic Layout Mode
      </div>
      
      <div className="relative z-10 w-full">
        <Header />

        {/* Dynamically render sections based on the JSON array */}
        {sections.map((section, index) => {
          const Component = SECTION_REGISTRY[section.id];
          if (!Component) {
            return (
              <div key={index} className="p-10 text-center border bg-red-50 text-red-500">
                Unknown Component ID: {section.id}
              </div>
            );
          }
          return <Component key={section.id} />;
        })}

        <Footer />
      </div>
    </main>
  );
}

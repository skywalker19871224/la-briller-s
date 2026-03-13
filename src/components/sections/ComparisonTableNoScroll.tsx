import React from "react";
import { TitleBand } from "@/components/ui/TitleBand";
import { brandColumns, featureRows } from "@/content/comparison";

// Mobile goal:
// - No horizontal scroll
// - Table edges align to viewport edges
// - Keep a table-like structure by tightening typography and allowing wrapping
export const ComparisonTableNoScroll = () => {
  return (
    <section className="bg-white" id="comparison-no-scroll">
      <TitleBand en="COMPARISON" ja="比較表" />

      <div className="section-py container mx-auto px-0 sm:px-6 max-w-6xl">
        <div className="overflow-hidden sm:rounded-3xl sm:border sm:border-parfait-blue/20 bg-white sm:shadow-[0_20px_50px_rgba(10,25,45,0.08)]">
          <table className="w-full table-fixed text-[11px] sm:text-sm md:text-base">
            <colgroup>
              <col className="w-[22%] sm:w-[24%]" />
              <col className="w-[26%] sm:w-[25%]" />
              <col className="w-[26%] sm:w-[25%]" />
              <col className="w-[26%] sm:w-[25%]" />
            </colgroup>
            <thead>
              <tr className="text-left">
                <th className="px-2.5 sm:px-4 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gray-500 border-b border-gray-200 bg-gray-50">
                  {/* empty corner */}
                </th>
                {brandColumns.map((brand) => (
                  <th
                    key={brand.key}
                    className={`px-2.5 sm:px-4 py-3 font-bold tracking-wide border-b border-gray-200 ${brand.headerClass}`}
                  >
                    <span className="block text-[12px] sm:text-sm md:text-base leading-tight">
                      {brand.label}
                    </span>
                    <span className="hidden sm:block text-[10px] text-white/80 tracking-normal">
                      {brand.tagline}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr
                   key={row.label}
                   className="border-b border-gray-100 last:border-b-0"
                >
                  <td className="px-2.5 sm:px-4 py-3 sm:py-4 font-bold text-gray-700 bg-gray-100 leading-tight">
                    {row.label}
                  </td>
                  {brandColumns.map((brand, idx) => (
                    <td
                       key={brand.key}
                       className={[
                         "px-2.5 sm:px-4 py-3 sm:py-4 text-gray-900 leading-snug whitespace-normal break-words",
                         idx === 0 ? "bg-[#E8F7F7]" : "bg-white",
                       ].join(" ")}
                    >
                      {row[brand.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

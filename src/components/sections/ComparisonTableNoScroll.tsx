import React from "react";
import { TitleBand } from "@/components/ui/TitleBand";
import { brandColumns, featureRows } from "@/content/comparison";

// Mobile goal:
// - No horizontal scroll
// - Table edges align to viewport edges
// - Keep a table-like structure by tightening typography and allowing wrapping
export const ComparisonTableNoScroll = () => {
  return (
    <section className="bg-transparent" id="comparison-no-scroll">
      <TitleBand en="COMPARISON" ja="比較表" />

      <div className="mt-5 pb-12 container mx-auto px-0 sm:px-6 max-w-6xl">
        <div className="overflow-hidden sm:rounded-3xl sm:border sm:border-parfait-blue/20 bg-white sm:shadow-[0_20px_50px_rgba(10,25,45,0.08)]">
          <table className="w-full table-fixed text-[11px] sm:text-sm md:text-base">
            <colgroup>
              <col className="w-[22%] sm:w-[24%]" />
              <col className="w-[26%] sm:w-[25%]" />
              <col className="w-[26%] sm:w-[25%]" />
              <col className="w-[26%] sm:w-[25%]" />
            </colgroup>
            <thead>
              <tr className="text-left font-bold">
                <th className="px-2 sm:px-4 py-3 border-b border-gray-200 bg-gray-50">
                  {/* corner */}
                </th>
                {brandColumns.map((brand, idx) => (
                  <th
                    key={brand.key}
                    className={`px-2 sm:px-4 py-3 border-b border-gray-200 relative ${brand.headerClass}`}
                  >
                    {idx === 0 && (
                      <div className="absolute top-0 left-0 w-full h-[4px] bg-white/30" />
                    )}
                    <div className="text-[12px] sm:text-sm md:text-base leading-tight">
                      {brand.label}
                    </div>
                    <div className="hidden sm:block text-[10px] opacity-80 font-normal tracking-tight">
                      {brand.tagline}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr key={row.label} className="border-b border-gray-100 last:border-b-0">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-gray-700 bg-gray-100 leading-tight">
                    {row.label}
                  </td>
                  {brandColumns.map((brand, idx) => {
                    // 1: 厚み, 2: 見た目, 3: 強度, 4: 歯を削る量 (index 3), 5: 治療回数, 6: 元の歯への復元
                    // インデックスは0開始なので、0, 1, 2, 5番目に表示する
                    const isTargetRow = [0, 1, 2, 5].includes(featureRows.indexOf(row));
                    
                    return (
                      <td
                         key={brand.key}
                         className={`px-2 sm:px-4 py-3 sm:py-4 text-gray-900 leading-snug break-words relative ${brand.cellClass} ${
                           idx === 0 ? "italic-shifter" : ""
                         }`}
                      >
                        {idx === 0 && isTargetRow && (
                          <div className="absolute top-1 right-1">
                            <span className="bg-[#3BADB0] text-white text-[7px] sm:text-[8px] px-1 py-0.5 rounded-sm font-bold uppercase tracking-tighter opacity-80">Best</span>
                          </div>
                        )}
                        {row[brand.key]}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 総括テキスト */}
        <div className="mt-8 md:mt-12 px-6 sm:px-0">
          <p className="text-[14px] sm:text-base md:text-lg leading-[1.8] sm:leading-loose text-gray-700 text-left sm:text-center max-w-4xl mx-auto break-keep">
            従来のベニアとの最大の違いは<span className="inline-block">「厚み」だけではありません。</span>
            <span className="inline-block font-bold bg-[linear-gradient(transparent_60%,#FFD1D1_60%)] pb-0.5">0.04mmという極薄</span>だからこそ、
            <span className="inline-block font-bold bg-[linear-gradient(transparent_60%,#FFD1D1_60%)] pb-0.5">歯を削らず、麻酔も使わず</span>、それでいて
            <span className="inline-block font-bold bg-[linear-gradient(transparent_60%,#FFD1D1_60%)] pb-0.5">ダイヤモンド級の強度</span>を実現できるのです。
            表参道のパルフェクリニックが、<span className="inline-block">自信を持ってこの一台を選んだ理由が</span>ここにあります。
          </p>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { pricingRows } from "@/content/pricing";

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold mb-8 text-gray-800 border-l-4 border-parfait-blue pl-4">{children}</h2>
);

export default function PricingVariantsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-32">
        <header className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Pricing Table Variants</h1>
          <p className="text-gray-500">料金表の「さりげないリッチさ」を追求した4案</p>
        </header>

        {/* Variant 1: Refined Minimal (Based on Current) */}
        <section>
          <Title>1. Refined Minimal - 今の良さを磨き上げる</Title>
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] pb-4">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-6 text-left text-xs font-bold text-gray-400 uppercase tracking-widest pl-10">TREATMENT</th>
                  <th className="px-6 py-6 text-right text-xs font-bold text-gray-400 uppercase tracking-widest pr-10">PRICE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {pricingRows.map((row) => (
                  <tr key={row.label} className="group hover:bg-parfait-blue/[0.01] transition-colors">
                    <td className="px-6 py-8 pl-10">
                      <div className="text-base font-bold text-gray-800">{row.label}</div>
                    </td>
                    <td className="px-6 py-8 text-right pr-10">
                      <div className="text-xl font-black text-parfait-blue tracking-tighter">
                        <span className="text-xs font-medium mr-1 uppercase">¥</span>
                        {row.price.replace('¥', '').split('（')[0]}
                        <span className="text-[10px] text-gray-400 font-medium ml-2 tracking-normal">
                          {row.price.includes('（') ? `（${row.price.split('（')[1]}` : ''}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Variant 2: Card Style (Editorial Grid) */}
        <section>
          <Title>2. Editorial Cards - 文字を主役にする</Title>
          <div className="grid gap-4">
            {pricingRows.map((row) => (
              <div key={row.label} className="bg-white p-6 rounded-2xl flex items-center justify-between border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-parfait-blue" />
                  <span className="text-base font-bold text-gray-700">{row.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 mr-2 uppercase font-medium">Starting at</span>
                  <span className="text-xl font-black text-gray-900 tracking-tight">{row.price.split('（')[0]}</span>
                  <p className="text-[10px] text-gray-400 mt-1">{row.price.split('（')[1] ? `（${row.price.split('（')[1]}` : '税込単価'}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Variant 3: Glassmorphism Border (Modern Elegant) */}
        <section>
          <Title>3. Glass Border - 透明感とラインの美</Title>
          <div className="bg-[#3BADB0]/5 p-px rounded-[32px] overflow-hidden">
            <div className="bg-white rounded-[31px] p-8 md:p-12 space-y-10">
                {pricingRows.map((row) => (
                  <div key={row.label} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-dashed border-gray-100 pb-10 last:border-0 last:pb-0">
                    <div>
                        <span className="inline-block px-3 py-1 bg-parfait-blue/10 text-parfait-blue text-[10px] font-bold rounded-full mb-2 uppercase tracking-widest">Esthetic Menu</span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{row.label}</h3>
                    </div>
                    <div className="md:text-right">
                        <div className="text-2xl md:text-3xl font-black text-gray-900 flex items-baseline md:justify-end gap-1">
                            <span className="text-xs font-medium text-parfait-blue italic">¥</span>
                            {row.price.replace('¥', '').split('（')[0]}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{row.price.split('（')[1] ? `（${row.price.split('（')[1]}` : ''}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Variant 4: Monotone Luxury (Apple Store Style) */}
        <section>
          <Title>4. Monotone Luxury - 余白の静寂</Title>
          <div className="space-y-16 py-10">
            {pricingRows.map((row) => (
              <div key={row.label} className="flex items-end justify-between border-b border-gray-900/10 pb-6">
                <div className="max-w-[60%]">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 tracking-tighter mb-2">{row.label}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        精密審美歯科の基準に基づき、天然歯を最大限に残すための高度な技術料が含まれます。
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-light text-gray-900 tracking-tighter">
                        {row.price.split('（')[0]}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">INC. TAX</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

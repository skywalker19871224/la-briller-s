"use client";

import React from "react";
import { brandColumns, featureRows } from "@/content/comparison";
import { Check, Star, Sparkles, Minus, X } from "lucide-react";

export default function ComparisonVariantPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-32">
        <header className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Comparison Table Variants</h1>
            <p className="text-gray-500">比較表の「ひんそ」を脱却する4つのプレミアム提案</p>
        </header>

        {/* Variant 1: Featured Pillar (Linear/Stripe Style) */}
        <section>
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">1</span>
            Featured Pillar - 主役の際立ち
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {brandColumns.map((brand, idx) => (
              <div 
                key={brand.key}
                className={`relative p-8 transition-all duration-500 ${
                  idx === 0 
                  ? "bg-white z-20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] ring-1 ring-parfait-blue/20 rounded-2xl scale-105" 
                  : "bg-transparent z-10 py-12"
                }`}
              >
                {idx === 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-parfait-blue text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    Recommended
                  </div>
                )}
                <div className="text-center mb-10">
                  <h3 className={`text-xl font-bold mb-2 ${idx === 0 ? "text-parfait-blue" : "text-gray-900"}`}>{brand.label}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{brand.tagline}</p>
                </div>
                <div className="space-y-8">
                  {featureRows.map((row) => (
                    <div key={row.label} className="border-b border-gray-100 pb-4 last:border-0 text-center">
                      <span className="block text-[10px] text-gray-400 uppercase tracking-tighter mb-2">{row.label}</span>
                      <span className={`text-base font-bold ${idx === 0 ? "text-gray-900" : "text-gray-500"}`}>
                        {row[brand.key]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Variant 2: Modern Editorial (Apple Inspired) */}
        <section>
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">2</span>
            Modern Editorial - 雑誌のような品格
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="py-10 text-left border-b border-gray-100">
                    <span className="text-4xl font-black text-gray-200 uppercase tracking-tighter">Compare</span>
                  </th>
                  {brandColumns.map((brand, idx) => (
                    <th key={brand.key} className="py-10 px-6 text-center border-b border-gray-100">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${idx === 0 ? "bg-parfait-blue text-white" : "bg-gray-100 text-gray-400"}`}>
                          {idx === 0 ? <Sparkles size={24} /> : <Minus size={24} />}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{brand.label}</h3>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.label}>
                    <td className="py-8 text-sm font-bold text-gray-400 border-b border-gray-50">{row.label}</td>
                    {brandColumns.map((brand, idx) => (
                      <td key={brand.key} className="py-8 px-6 text-center border-b border-gray-50">
                        <div className={`text-lg font-medium ${idx === 0 ? "text-parfait-blue" : "text-gray-900"}`}>
                          {row[brand.key] === "可能" ? <Check className="mx-auto text-green-500" /> : 
                           row[brand.key] === "難しい" ? <X className="mx-auto text-gray-300" /> : 
                           row[brand.key]}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Variant 3: Glassmorphism Card (HeroUI Style) */}
        <section>
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">3</span>
            Glass Card - 宝石のような透明感
          </h2>
          <div className="bg-gradient-to-tr from-[#3BADB0] to-[#E6F4F4] p-12 rounded-[40px] overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-[100px] rounded-full -mr-40 -mt-40" />
            <div className="relative overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr>
                    <th className="p-6 text-left opacity-60 font-medium">Features</th>
                    {brandColumns.map((brand, idx) => (
                      <th key={brand.key} className={`p-6 text-center transition-all ${idx === 0 ? "bg-white/20 backdrop-blur-xl rounded-t-3xl" : "opacity-80"}`}>
                        <div className="font-black text-xl tracking-tight">{brand.label}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {featureRows.map((row, rIdx) => (
                    <tr key={row.label}>
                      <td className="p-6 text-sm font-medium opacity-70">{row.label}</td>
                      {brandColumns.map((brand, idx) => (
                        <td key={brand.key} className={`p-6 text-center ${idx === 0 ? "bg-white/10 backdrop-blur-xl border-x border-white/10" : "opacity-80"} ${rIdx === featureRows.length - 1 && idx === 0 ? "rounded-b-3xl" : ""}`}>
                          <div className={`text-base font-bold ${idx === 0 ? "text-white" : ""}`}>
                            {row[brand.key]}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Variant 4: Data-Rich Dashboard (Linear Style) */}
        <section>
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">4</span>
            High-Density Glass - 精密な美学
          </h2>
          <div className="bg-[#0A192F] p-1 rounded-3xl shadow-2xl">
              <div className="bg-slate-900 overflow-hidden rounded-[22px]">
                <div className="grid grid-cols-4 border-b border-slate-800">
                    <div className="p-6 bg-slate-900 border-r border-slate-800"></div>
                    {brandColumns.map((brand, idx) => (
                        <div key={brand.key} className={`p-6 text-center border-r border-slate-800 last:border-r-0 ${idx === 0 ? "bg-parfait-blue/10" : ""}`}>
                            <div className={`text-[10px] uppercase tracking-widest mb-1 ${idx === 0 ? "text-parfait-blue" : "text-slate-500"}`}>Technology</div>
                            <div className="text-white font-black">{brand.label}</div>
                        </div>
                    ))}
                </div>
                {featureRows.map((row) => (
                    <div key={row.label} className="grid grid-cols-4 border-b border-slate-800 last:border-b-0 hover:bg-slate-800/50 transition-colors">
                        <div className="p-6 text-slate-400 text-xs font-bold flex items-center border-r border-slate-800">
                            {row.label}
                        </div>
                        {brandColumns.map((brand, idx) => (
                            <div key={brand.key} className={`p-6 text-center flex flex-col items-center justify-center border-r border-slate-800 last:border-r-0 ${idx === 0 ? "bg-parfait-blue/5" : ""}`}>
                                {row[brand.key] === "削らない" || row[brand.key] === "可能" ? (
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-parfait-blue shadow-[0_0_10px_rgba(59,173,176,1)]" />
                                        <span className="text-white font-bold text-sm tracking-tighter">{row[brand.key]}</span>
                                    </div>
                                ) : (
                                    <span className="text-slate-500 text-sm font-medium">{row[brand.key]}</span>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

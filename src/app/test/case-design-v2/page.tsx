"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { MoveLeft, MoveRight } from "lucide-react";

// ダミーデータ
const sampleItem = {
  category: "歯の隙間",
  title: "すきっ歯・ブラックトライアングルの改善",
  imageBefore: "/images/cases/case1-before.webp",
  imageAfter: "/images/cases/case1-after.webp",
};

export default function CaseDesignV2Page() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      {/* 戻るボタン */}
      <div className="p-6">
        <a href="/test" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-parfait-blue transition-colors">
          <MoveLeft size={14} /> BACK TO INDEX
        </a>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-2xl font-serif font-bold text-slate-800 mb-2">症例ラベル デザイン案</h1>
          <p className="text-sm text-slate-400">Before/After写真の上の「分類」デザイン集</p>
        </div>

        <div className="grid gap-20">
          
          {/* Pattern 1: Current Refined */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="bg-slate-100 text-[10px] font-bold px-2 py-0.5 rounded text-slate-500">Pattern 1</span>
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Current Refined (現行の洗練版)</h2>
            </div>
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black tracking-[0.3em] text-[#3BADB0] uppercase">
                  {sampleItem.category}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#3BADB0]/40 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-2 aspect-[3/2] bg-slate-100 rounded-xl overflow-hidden opacity-40">
                <div className="bg-slate-200 flex items-center justify-center text-[10px] text-slate-400">PHOTO</div>
                <div className="bg-slate-300 flex items-center justify-center text-[10px] text-slate-400">PHOTO</div>
              </div>
            </div>
          </section>

          {/* Pattern 2: Floating Badge */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="bg-slate-100 text-[10px] font-bold px-2 py-0.5 rounded text-slate-500">Pattern 2</span>
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Floating Glass (モダン・重なり)</h2>
            </div>
            <div className="max-w-md relative">
              <div className="grid grid-cols-2 gap-2 aspect-[3/2] bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-slate-200 border-r border-white/20"></div>
                <div className="bg-slate-300"></div>
              </div>
              {/* Floating Label */}
              <div className="absolute -top-3 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg shadow-slate-200/50 border border-slate-100">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#3BADB0]">
                  {sampleItem.category}
                </span>
              </div>
            </div>
          </section>

          {/* Pattern 3: Editorial Vertical */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="bg-slate-100 text-[10px] font-bold px-2 py-0.5 rounded text-slate-500">Pattern 3</span>
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Editorial Vertical (雑誌風・知性)</h2>
            </div>
            <div className="max-w-md flex flex-col gap-4">
              <div className="flex items-end gap-3 px-1">
                <div className="w-0.5 h-4 bg-[#3BADB0]/40"></div>
                <span className="text-sm font-serif italic text-slate-600 leading-none">
                   Classification: <span className="font-sans font-bold not-italic tracking-wider text-[#3BADB0] ml-1">{sampleItem.category}</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 aspect-[3/2] bg-slate-100 rounded-lg overflow-hidden grayscale">
                <div className="bg-slate-200"></div>
                <div className="bg-slate-300"></div>
              </div>
            </div>
          </section>

          {/* Pattern 4: Minimalist Frame */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="bg-slate-100 text-[10px] font-bold px-2 py-0.5 rounded text-slate-500">Pattern 4</span>
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Minimalist Frame (ミニマル・繊細)</h2>
            </div>
            <div className="max-w-md">
              <div className="mb-3 px-1 flex justify-between items-baseline">
                 <span className="text-[9px] font-black tracking-[0.4em] text-slate-300 uppercase italic">Case 01</span>
                 <span className="text-[11px] font-bold tracking-[0.2em] text-[#3BADB0]">{sampleItem.category}</span>
              </div>
              <div className="p-2 border border-slate-100 rounded-3xl">
                <div className="grid grid-cols-2 gap-1 aspect-[3/2] bg-slate-100 rounded-2xl overflow-hidden">
                  <div className="bg-slate-200"></div>
                  <div className="bg-slate-300"></div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

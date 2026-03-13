"use client";

import React from "react";

// 共通の上部テキスト
const TopSection = () => (
  <div className="text-center text-white relative z-10">
    <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/70 uppercase mb-2">
      WHAT IS LA BRILLER
    </p>
    <h2 className="text-3xl md:text-4xl font-light tracking-widest text-white mb-10">
      ラブリエとは
    </h2>
    <div className="w-12 h-px bg-white/30 mx-auto mb-8" />
    <p className="text-2xl md:text-3xl font-serif tracking-wider leading-[1.7] text-white mb-4">
      貼るだけで<br />理想の口元を叶える
    </p>
  </div>
);

// 共通の下部テキスト
const BottomDesc = () => (
  <div className="text-white/85 text-sm md:text-base leading-loose text-left md:text-center space-y-5 mt-10 max-w-lg mx-auto relative z-10">
    <p>LaBriller(ラブリエ)は、白く美しいセラミックのベニアを、付け爪をするように歯の表面に貼り付け、歯の形や色をキレイに見せることができる審美歯科治療法です。</p>
    <p>歯を一切削らず、強度に優れた極薄のセラミックを歯の表面に貼り付けることで、歯の見た目のお悩みを気軽に解決することができます。</p>
  </div>
);

// ============================================================
// 案1: Sharp Miter Corner（シャープな角落ち・マイター）
// ============================================================
const RedBandVariant1 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center">
      <TopSection />
      <div className="flex justify-center my-2">
        <div 
          className="bg-[#B91C1C] px-6 py-2 relative inline-block"
          style={{
            clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight px-4 shadow-sm">
            世界最薄ジルコニアベニア
          </h3>
        </div>
      </div>
      <BottomDesc />
    </div>
  </section>
);

// ============================================================
// 案2: Double Mitered Ribbon（上下の角を落とした宝石風カット）
// ============================================================
const RedBandVariant2 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center">
      <TopSection />
      <div className="flex justify-center my-2">
        <div 
          className="bg-[#B91C1C] px-8 py-2 relative inline-block border-x-2 border-white/20"
          style={{
            clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            世界最薄ジルコニアベニア
          </h3>
        </div>
      </div>
      <BottomDesc />
    </div>
  </section>
);

// ============================================================
// 案3: Inverted Miter / Notched（内側に食い込むマイターカット）
// ============================================================
const RedBandVariant3 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center">
      <TopSection />
      <div className="flex justify-center my-2">
        <div 
          className="bg-[#B91C1C] px-10 py-2 relative inline-block"
          style={{
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%, 12px 50%)',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            世界最薄ジルコニアベニア
          </h3>
        </div>
      </div>
      <BottomDesc />
    </div>
  </section>
);

// ============================================================
// 案4: Elegant Bevel Band（タイトな極細フレーム + マイター）
// ============================================================
const RedBandVariant4 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center">
      <TopSection />
      <div className="flex justify-center my-2">
        <div className="relative group">
          {/* 背後の装飾ライン */}
          <div className="absolute -inset-1 bg-white/20 blur-[1px] opacity-50" style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }} />
          {/* メインの帯 */}
          <div 
            className="bg-[#B91C1C] px-7 py-1.5 relative inline-block border-y border-white/10"
            style={{
              clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
            }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              世界最薄ジルコニアベニア
            </h3>
          </div>
        </div>
      </div>
      <BottomDesc />
    </div>
  </section>
);

export default function RedBandVariantsPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-20">
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-6 py-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">Red Band 形状特化案（マイター・タイトフィット）</h1>
        <p className="text-gray-500 text-sm mt-1">
          「世界最薄ジルコニアベニア」をより引き立てる帯の形状バリエーション
        </p>
      </div>

      <div className="space-y-16 mt-12">
        <div>
          <div className="px-6 pb-4 flex items-center justify-center gap-2">
            <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">案3-A</span>
            <span className="font-bold text-gray-800 italic">Sharp Slant Miter</span>
            <span className="text-gray-500 text-sm">— 平行四辺形風のマイター。スピード感とモダンさ</span>
          </div>
          <RedBandVariant1 />
        </div>

        <div>
          <div className="px-6 pb-4 flex items-center justify-center gap-2">
            <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">案3-B</span>
            <span className="font-bold text-gray-800 italic">Octagon Polish</span>
            <span className="text-gray-500 text-sm">— 四隅を落とした八角形風。宝石やラベルのような「品」</span>
          </div>
          <RedBandVariant2 />
        </div>

        <div>
          <div className="px-6 pb-4 flex items-center justify-center gap-2">
            <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">案3-C</span>
            <span className="font-bold text-gray-800 italic">Inverted Notch</span>
            <span className="text-gray-500 text-sm">— 両端が内側に食い込むリボン形状。古典的な「最高級」の記号</span>
          </div>
          <RedBandVariant3 />
        </div>

        <div>
          <div className="px-6 pb-4 flex items-center justify-center gap-2">
            <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">案3-D</span>
            <span className="font-bold text-gray-800 italic">Minimal Tight Bevel</span>
            <span className="text-gray-500 text-sm">— 最もタイトな幅 ＋ 絶妙なマイター。現代的なラグジュアリー</span>
          </div>
          <RedBandVariant4 />
        </div>
      </div>
    </main>
  );
}

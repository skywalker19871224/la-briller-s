"use client";

import React from "react";

// インバーテッド・ノッチ・リボン（共通）
const Ribbon = () => (
  <div className="flex justify-center relative z-10">
    <div 
        className="bg-[#B91C1C] px-8 md:px-12 py-2 md:py-3 relative inline-block"
        style={{
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%, 12px 50%)',
        }}
    >
        <h2 className="relative font-sans tracking-tight text-white text-xl md:text-2xl lg:text-3xl font-black drop-shadow-sm">
            世界最薄ジルコニアベニア
        </h2>
    </div>
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
// 案1: Vertical Stack (タイトな3行スタック)
// 上下の余白を極限まで詰め、3行で1つのメッセージとして構築。
// ============================================================
const StackVariant1 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center relative z-10">
      <div className="flex flex-col items-center">
        {/* 行1: ラブリエとは */}
        <span className="text-[10px] md:text-xs tracking-[0.6em] text-white/70 uppercase mb-2">
            WHAT IS LA BRILLER
        </span>
        <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white mb-6">
            ラブリエとは
        </h2>
        
        {/* 行2-3: 貼るだけで〜（フォントサイズ調整） */}
        <div className="space-y-1 mb-8">
            <p className="text-xl md:text-2xl font-serif italic tracking-widest text-white/90">
                貼るだけで
            </p>
            <p className="text-2xl md:text-3xl font-serif tracking-[0.15em] leading-tight text-white font-medium">
                理想の口元を叶える
            </p>
        </div>
      </div>
      
      <Ribbon />
      <BottomDesc />
    </div>
  </section>
);

// ============================================================
// 案2: Line Connected (ラインで繋ぐ一体感)
// 薄い縦線やドットを用いて、視線を3行に誘導し、間延びを「意図的な繋ぎ」に変える。
// ============================================================
const StackVariant2 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center relative z-10">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white mb-2">
            ラブリエとは
        </h2>
        {/* 繋ぎのライン */}
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent mb-4" />
        
        <div className="mb-8">
            <p className="text-lg md:text-xl font-serif italic tracking-[0.3em] text-white/80 mb-2">
                貼るだけで
            </p>
            <p className="text-2xl md:text-3xl font-serif tracking-[0.1em] text-white leading-none">
                理想の口元を叶える
            </p>
        </div>
      </div>
      
      <Ribbon />
      <BottomDesc />
    </div>
  </section>
);

// ============================================================
// 案3: Serif Focus Harmony (全行明朝による情緒的一体化)
// すべてを明朝ベースの強弱で構成し、雑誌のキャッチコピーのようなリズムを作る。
// ============================================================
const StackVariant3 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center relative z-10">
      {/* 3行を密接に配置 */}
      <div className="mb-10 text-white">
          <p className="text-sm md:text-base font-serif italic tracking-[0.4em] opacity-70 mb-1">
            What is La Briller
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest border-b border-white/20 pb-4 mb-6 inline-block">
            ラブリエとは
          </h2>
          <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-serif tracking-widest leading-none">
                貼るだけで
              </p>
              <p className="text-2xl md:text-3xl font-serif tracking-widest leading-none">
                理想の口元を叶える
              </p>
          </div>
      </div>
      
      <Ribbon />
      <BottomDesc />
    </div>
  </section>
);

// ============================================================
// 案4: Modern Minimal Stack (モダンな等間隔スタック)
// 余白を均等、かつタイトに。横線を排除して文字の塊感（ブロック感）を強調。
// ============================================================
const StackVariant4 = () => (
  <section className="relative bg-[#7AAEC8] py-16 px-6 overflow-hidden">
    <div className="container mx-auto max-w-2xl text-center relative z-10">
      {/* 行間を極限まで詰め、1つのブロックに見せる */}
      <div className="flex flex-col gap-2 mb-10 items-center">
          <span className="text-[10px] tracking-[0.8em] text-white/50 font-bold">ABOUT LA BRILLER</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[0.25em] text-white">ラブリエとは</h2>
          <div className="w-8 h-px bg-white/40 my-2" />
          <p className="text-xl md:text-2xl font-serif tracking-[0.1em] text-white/90">貼るだけで</p>
          <p className="text-2xl md:text-3xl font-serif tracking-[0.1em] text-white font-semibold">理想の口元を叶える</p>
      </div>
      
      <Ribbon />
      <BottomDesc />
    </div>
  </section>
);

export default function TextStackVariantsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-32">
      <div className="p-8 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800">3行スタック・配置比較案 × 4</h1>
        <p className="text-gray-600 mt-2">「ラブリエとは」「貼るだけで」「理想の口元〜」の3要素の間隔を詰め、一体感を高める提案です。</p>
      </div>

      <div className="space-y-px mt-12">
        {/* 案1 */}
        <div className="bg-white py-12">
          <div className="px-6 mb-4 flex items-center justify-center gap-2">
            <span className="bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase italic">Variant 1</span>
            <span className="font-bold text-gray-800">Tight Stack</span>
            <span className="text-gray-500 text-sm">— 余白を極限まで削削ぎ落とし、3つの言葉を1つのメッセージに凝縮</span>
          </div>
          <StackVariant1 />
        </div>

        {/* 案2 */}
        <div className="bg-white py-12">
          <div className="px-6 mb-4 flex items-center justify-center gap-2">
            <span className="bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase italic">Variant 2</span>
            <span className="font-bold text-gray-800">Line Connected</span>
            <span className="text-gray-500 text-sm">— 細い縦ラインで視線を誘導。間延びを「ストーリーの繋がり」に昇華</span>
          </div>
          <StackVariant2 />
        </div>

        {/* 案3 */}
        <div className="bg-white py-12">
          <div className="px-6 mb-4 flex items-center justify-center gap-2">
            <span className="bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase italic">Variant 3</span>
            <span className="font-bold text-gray-800">Serif Focus Harmony</span>
            <span className="text-gray-500 text-sm">— 明朝体系で統一し、全体を優雅な「一つの詩」のように見せる</span>
          </div>
          <StackVariant3 />
        </div>

        {/* 案4 */}
        <div className="bg-white py-12">
          <div className="px-6 mb-4 flex items-center justify-center gap-2">
            <span className="bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase italic">Variant 4</span>
            <span className="font-bold text-gray-800">Modern Minimal Block</span>
            <span className="text-gray-500 text-sm">— 装飾を削ぎ、文字のサイズ差とタイトな間隔だけで「塊感」を作る</span>
          </div>
          <StackVariant4 />
        </div>
      </div>
    </main>
  );
}

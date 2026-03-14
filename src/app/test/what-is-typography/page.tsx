"use client";

import React from "react";

// 共通コンポーネント: リボン
const Ribbon = () => (
  <div className="flex justify-center mb-10">
    <div 
        className="bg-[#B91C1C] px-8 md:px-12 py-2 md:py-3 relative inline-block text-white"
        style={{
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%, 12px 50%)',
        }}
    >
        <h2 className="text-xl md:text-2xl font-black tracking-tight drop-shadow-sm">
            世界最薄ジルコニアベニア
        </h2>
    </div>
  </div>
);

const Container = ({ title, children, theme }: { title: string, children: React.ReactNode, theme: string }) => (
  <div className="py-20 border-b border-gray-200 bg-white">
    <div className="container mx-auto px-6">
      <div className="mb-12 text-center text-gray-500 text-sm font-bold uppercase tracking-widest italic flex items-center justify-center gap-4">
        <span className="w-12 h-px bg-gray-200"></span>
        {title}
        <span className="w-12 h-px bg-gray-200"></span>
      </div>
      <div className={`rounded-[40px] px-6 py-20 text-center ${theme}`}>
        {children}
      </div>
    </div>
  </div>
);

export default function TypographyVariantsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="p-10 bg-white text-center border-b">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Typography Variations</h1>
        <p className="text-gray-500">「理想の口元を叶える」のフォントサイズとウェイトの比較</p>
      </div>

      {/* 案1: Dramatic Scale (力強い落差) */}
      <Container title="Variant 1: Dramatic Scale" theme="bg-parfait-blue text-white">
        <div className="flex flex-col items-center mb-10">
          <p className="text-xl md:text-2xl font-serif italic tracking-widest text-white/80 mb-2">貼るだけで</p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.1em] text-white font-black leading-tight drop-shadow-lg">
            理想の口元を叶える
          </p>
        </div>
        <Ribbon />
      </Container>

      {/* 案2: Elegant Serif (気品ある調和) */}
      <Container title="Variant 2: Elegant Serif" theme="bg-parfait-blue text-white">
        <div className="flex flex-col items-center mb-10">
          <p className="text-lg md:text-xl font-serif italic tracking-[0.4em] text-white/70 mb-4 uppercase">貼るだけで</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.2em] text-white font-medium leading-none">
            理想の口元を叶える
          </p>
          <div className="w-12 h-px bg-white/30 my-8"></div>
        </div>
        <Ribbon />
      </Container>

      {/* 案3: Modern Strong (現代的な強さ) */}
      <Container title="Variant 3: Modern Strong" theme="bg-parfait-blue text-white">
        <div className="flex flex-col items-center mb-10">
          <p className="text-xl font-serif italic tracking-widest text-white/90 mb-2">貼るだけで</p>
          <p className="text-4xl md:text-5xl lg:text-5xl font-sans tracking-tighter text-white font-black leading-[0.9] uppercase underline decoration-[#B91C1C]/50 decoration-4 underline-offset-[12px]">
            理想の口元を叶える
          </p>
        </div>
        <div className="mt-12">
            <Ribbon />
        </div>
      </Container>

      {/* 案4: Subtle Focus (繊細な対比) */}
      <Container title="Variant 4: Subtle Focus" theme="bg-parfait-blue text-white">
        <div className="flex flex-col items-center mb-10 space-y-4">
          <div className="px-4 py-1 border border-white/30 rounded-full text-[10px] tracking-[0.3em] uppercase">Special Care</div>
          <p className="text-lg md:text-xl font-serif italic text-white/80">貼るだけで</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-[0.3em] text-white font-light">
            理想の口元を <span className="font-black text-white decoration-parfait-blue decoration-2">叶える</span>
          </p>
        </div>
        <Ribbon />
      </Container>

    </main>
  );
}

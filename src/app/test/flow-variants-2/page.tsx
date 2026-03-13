"use client";

import { flowSteps } from "@/content/flow";
import { useEffect, useRef, useState } from "react";

// 共通: アニメーション
const useReveal = (length: number) => {
  const [visible, setVisible] = useState<boolean[]>(new Array(length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const obs = refs.current.map((ref, i) => {
      if (!ref) return null;
      const ob = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setTimeout(() => setVisible(p => { const n=[...p]; n[i]=true; return n; }), i * 120); ob.disconnect(); }
      }, { threshold: 0.1 });
      ob.observe(ref);
      return ob;
    });
    return () => obs.forEach(o => o?.disconnect());
  }, []);
  return { visible, refs };
};

// 共通: 逆三角形セパレータ
const TriangleSep = () => (
  <div className="flex justify-center h-6 items-center">
    <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
      <path d="M0 0H48L24 12L0 0Z" fill="#B4D7E2" className="opacity-70" />
    </svg>
  </div>
);

const OverhangV5 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative pt-4">
                <div className="inline-flex items-center bg-parfait-blue text-white px-5 py-1.5 rounded-t-xl gap-3 ml-2">
                    <span className="font-serif italic text-sm opacity-80">Step</span>
                    <span className="font-serif text-xl leading-none">{step.number}</span>
                    <span className="w-px h-3 bg-white/30" />
                    <span className="text-[9px] font-bold tracking-widest">{step.visit}</span>
                </div>
                <div className="bg-white border border-parfait-blue/15 rounded-2xl rounded-tl-none p-6 shadow-sm">
                    <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-2">
                        {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        {step.description}
                    </p>
                </div>
              </div>
            </div>
            {i < flowSteps.length - 1 && <TriangleSep />}
          </div>
        ))}
      </div>
    );
};

const OverhangV6 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative bg-parfait-blue/5 border border-parfait-blue/20 rounded-2xl p-6 pt-12">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-white shadow-md border border-parfait-blue/10 rotate-45 flex items-center justify-center">
                    <div className="-rotate-45 font-serif text-parfait-blue font-bold text-lg">
                        {step.number}
                    </div>
                </div>
                <div className="absolute top-4 right-6 text-[9px] font-bold tracking-widest text-parfait-blue/60 border border-parfait-blue/20 px-2 py-0.5 rounded-full">
                    {step.visit}
                </div>
                <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-2 pl-2">
                    <span className="text-[10px] text-parfait-blue font-serif italic block mb-0.5 opacity-60">Step {step.number}</span>
                    {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed pl-2">
                    {step.description}
                </p>
              </div>
            </div>
            {i < flowSteps.length - 1 && <TriangleSep />}
          </div>
        ))}
      </div>
    );
};

const OverhangV7 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative bg-white border border-parfait-blue/15 rounded-2xl p-7 pt-12">
                <div className="absolute -top-3 left-6">
                    <div className="absolute inset-0 border border-parfait-blue/40 translate-x-1 translate-y-1 rounded-sm" />
                    <div className="relative bg-white border border-parfait-blue px-3 py-1 flex items-baseline gap-2 rounded-sm shadow-sm">
                        <span className="font-serif italic text-[10px] text-parfait-blue">Step</span>
                        <span className="font-serif text-lg text-parfait-blue font-bold leading-none">{step.number}</span>
                        <span className="text-[8px] text-parfait-blue/70 font-bold ml-1">{step.visit}</span>
                    </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-3">
                    {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    {step.description}
                </p>
              </div>
            </div>
            {i < flowSteps.length - 1 && <TriangleSep />}
          </div>
        ))}
      </div>
    );
};

const OverhangV8 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative bg-parfait-white border border-parfait-blue/10 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10px] left-[-35px] w-[140%] h-8 bg-parfait-blue -rotate-45 flex items-center justify-center text-white shadow-md">
                        <span className="text-[10px] font-bold tracking-[0.2em] translate-y-1">STEP</span>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <div className="flex items-baseline justify-between mb-4 border-b border-parfait-blue/10 pb-2">
                        <div className="font-serif text-parfait-blue text-5xl font-black leading-none opacity-20 select-none">
                            {step.number}
                        </div>
                        <span className="bg-parfait-blue/10 text-parfait-blue text-[9px] font-bold tracking-widest px-2 py-0.5 rounded">
                            {step.visit}
                        </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-2">
                        {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        {step.description}
                    </p>
                </div>
              </div>
            </div>
            {i < flowSteps.length - 1 && <TriangleSep />}
          </div>
        ))}
      </div>
    );
};

export default function FlowVariants2Page() {
  const variants = [
    { label: '案B-5', name: 'Elegant Tab', desc: 'カード上端に「見出しタブ」として完全に一体化。構造的で美しいレイアウト。', Component: OverhangV5 },
    { label: '案B-6', name: 'Diamond Accent', desc: '宝石のカットを想起させるひし形のバッジ。ラグジュアリーな小道具のような質感。', Component: OverhangV6 },
    { label: '案B-7', name: 'Outline Offset', desc: '枠線がズレて重なるモダンなデザイン。建築の図面のような洗練された機能美。', Component: OverhangV7 },
    { label: '案B-8', name: 'Cinematic Sash', desc: '左上のコーナーを斜めに横切るサッシュ帯。プロダクトを包むパッケージのような特別感。', Component: OverhangV8 },
  ];

  return (
    <main className="min-h-screen bg-parfait-white pb-32">
      <div className="p-6 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm text-center">
        <h1 className="text-xl font-bold text-gray-800">Flow-Variants (B-5 to B-8)</h1>
        <div className="mt-2 flex justify-center gap-4">
            <a href="/test/flow-variants-1" className="text-gray-400 hover:text-parfait-blue transition-colors">← Part 1 (B1-4)</a>
            <span className="text-parfait-blue font-bold">Part 2 (B5-8)</span>
        </div>
      </div>

      {variants.map(({ label, name, desc, Component }) => (
        <div key={label} className="mt-12">
          <div className="flex flex-col items-center gap-1 px-6 mb-4 text-center">
            <div className="flex items-center gap-3">
              <span className="bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full">{label}</span>
              <span className="font-bold text-gray-800">{name}</span>
            </div>
            <p className="text-gray-500 text-sm max-w-md">{desc}</p>
          </div>
          <div className="bg-white border-y border-gray-200">
            <Component />
          </div>
        </div>
      ))}
    </main>
  );
}

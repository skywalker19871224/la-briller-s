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

const OverhangV1 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative bg-parfait-blue/5 border border-parfait-blue/20 rounded-2xl p-6 pt-10">
                <div className="absolute -top-3 left-4 flex items-center bg-white shadow-md border border-parfait-blue/10 rounded-full px-4 py-1.5 gap-3">
                    <div className="font-serif text-[#8E81AC] text-2xl leading-none flex items-baseline">
                        <span className="text-xs italic mr-1">Step</span>{step.number}
                    </div>
                    <div className="w-px h-3 bg-parfait-blue/20" />
                    <span className="text-parfait-blue text-[10px] font-bold tracking-widest leading-none">
                        {step.visit}
                    </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-2 pl-1">
                    {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed pl-1">
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

const OverhangV2 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative bg-white border border-parfait-blue/15 rounded-2xl p-6 pt-12 shadow-sm">
                <div className="absolute -top-4 left-6 flex flex-col items-center bg-parfait-blue/80 backdrop-blur-sm text-white px-5 py-2 rounded-lg shadow-lg">
                    <span className="text-[9px] font-bold tracking-[0.2em] opacity-80 mb-0.5">{step.visit}</span>
                    <div className="font-serif text-xl leading-none flex items-baseline">
                        <span className="text-[10px] italic mr-1 opacity-90">Step</span>{step.number}
                    </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-2 border-b border-parfait-blue/5 pb-2">
                    {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
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

const OverhangV3 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative bg-parfait-blue/5 border border-parfait-blue/20 rounded-xl p-6 pt-10">
                <div 
                    className="absolute -top-[1px] left-8 transform -translate-y-1/2 bg-[#B91C1C] text-white px-6 py-1.5 flex items-center gap-3"
                    style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%, 8px 50%)' }}
                >
                    <div className="font-serif text-lg leading-none flex items-baseline">
                        <span className="text-[9px] italic mr-1">Step</span>{step.number}
                    </div>
                    <span className="text-[9px] font-bold tracking-widest opacity-90">{step.visit}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-3 italic">
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

const OverhangV4 = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, i) => (
          <div key={step.number}>
            <div ref={el => { refs.current[i] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'none' : 'translateY(20px)' }}
            >
              <div className="relative bg-white border-t-2 border-parfait-blue/30 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] rounded-b-2xl p-6 pt-12">
                <div className="absolute top-0 left-6 bg-parfait-blue px-3 pb-3 pt-1 rounded-b-md text-white shadow-sm flex flex-col items-center">
                    <div className="font-serif text-2xl leading-none flex flex-col items-center">
                        <span className="text-[8px] uppercase tracking-tighter opacity-70 mb-0.5">Step</span>
                        <span>{step.number}</span>
                    </div>
                </div>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base md:text-lg font-bold text-labriller-blue flex-1 pr-4">
                        {step.title}
                    </h3>
                    <span className="text-[10px] text-parfait-blue font-bold border border-parfait-blue/30 px-2 py-0.5 rounded">
                        {step.visit}
                    </span>
                </div>
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

export default function FlowVariants1Page() {
  const variants = [
    { label: '案B-1', name: 'Capsule Badge', desc: 'Stepと来院を一つの楕円タグに集約。視認性が高く、かつ柔らかな印象。', Component: OverhangV1 },
    { label: '案B-2', name: 'Glass Floating', desc: 'La Brillerの透明感を取り入れた半透明タグ。モダンでシネマティックな風格。', Component: OverhangV2 },
    { label: '案B-3', name: 'Red Notch Tag', desc: '「ラブリエとは」と共通の赤いノッチ形状を流用。ブランドの一体感が最も出ます。', Component: OverhangV3 },
    { label: '案B-4', name: 'Classic Ribbon', desc: '垂直に垂れるリボン風。番号が最も強調され、ステップの区切りが明確になります。', Component: OverhangV4 },
  ];

  return (
    <main className="min-h-screen bg-parfait-white pb-32">
      <div className="p-6 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm text-center">
        <h1 className="text-xl font-bold text-gray-800">Flow-Variants (B-1 to B-4)</h1>
        <div className="mt-2 flex justify-center gap-4">
            <span className="text-parfait-blue font-bold">Part 1 (B1-4)</span>
            <a href="/test/flow-variants-2" className="text-gray-400 hover:text-parfait-blue transition-colors">Part 2 (B5-8) →</a>
        </div>
      </div>

      {variants.map(({ label, name, desc, Component }) => (
        <div key={label} className="mt-12">
          <div className="flex flex-col items-center gap-1 px-6 mb-4 text-center">
            <div className="flex items-center gap-3">
              <span className="bg-parfait-blue text-white text-xs font-bold px-3 py-1 rounded-full">{label}</span>
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

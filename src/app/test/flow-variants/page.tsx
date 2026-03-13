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

// ============================================================
// 実験案: Super Tight Layout (限界まで余白削減)
// 逆三角形をカード間にめり込ませ、スクロール量を最小化
// ============================================================
const SuperTightFlow = () => {
    const { visible, refs } = useReveal(flowSteps.length);
    return (
      <div className="py-10 container mx-auto px-4 max-w-lg">
        {flowSteps.map((step, index) => (
          <div key={step.number} className="relative">
            <div ref={el => { refs.current[index] = el; }}
              className="transition-all duration-700 ease-out"
              style={{ opacity: visible[index] ? 1 : 0, transform: visible[index] ? 'none' : 'translateY(20px)' }}
            >
              {/* カード上部の余白(pt)をさらに削減 */}
              <div className="relative pt-4">
                {/* Solid Blue Tab */}
                <div className="inline-flex items-center justify-center bg-parfait-blue text-white w-32 py-1.5 rounded-t-xl gap-1.5 ml-2 shadow-sm">
                    <span className="font-serif italic text-[10px] opacity-80 translate-y-[1px]">Step</span>
                    <span className="font-serif text-xl leading-none font-bold">{step.number}</span>
                </div>
                
                {/* Solid Blue Framework Card */}
                <div className="bg-white border border-parfait-blue rounded-2xl rounded-tl-none p-5 md:p-6 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-base md:text-lg font-bold text-labriller-blue">
                            {step.title}
                        </h3>
                        <span className="inline-block bg-parfait-blue/10 text-parfait-blue text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border border-parfait-blue/20">
                            {step.visit}
                        </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        {step.description}
                    </p>
                </div>
              </div>
            </div>
            
            {/* ステップ間: カードの外側にはっきりと配置 (-my-1〜2程度で隙間にフィット) */}
            {index < flowSteps.length - 1 && (
                <div className="flex justify-center -my-1.5 relative z-20 pointer-events-none">
                    <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="drop-shadow-sm">
                        <path d="M0 0H80L40 20L0 0Z" fill="#B4D7E2" className="opacity-90" />
                    </svg>
                </div>
            )}
          </div>
        ))}
      </div>
    );
};

export default function FlowSuperTightPage() {
  return (
    <main className="min-h-screen bg-parfait-white pb-32">
      <div className="p-6 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm text-center">
        <h1 className="text-xl font-bold text-gray-800">Flow Layout — Super Tight 実験</h1>
        <p className="text-gray-500 text-sm mt-1">限界まで余白を詰め、大型化した逆三角形を配置した最終形状案。</p>
      </div>

      <div className="mt-8">
        <div className="flex flex-col items-center gap-1 px-6 mb-4 text-center">
          <div className="flex items-center gap-3">
            <span className="bg-parfait-blue text-white text-xs font-bold px-3 py-1 rounded-full">究極案</span>
            <span className="font-bold text-gray-800">Super Tight Solid Frame</span>
          </div>
          <p className="text-gray-500 text-sm max-w-md">カード下端と次のタブの距離を最小化。逆三角形(80x20)をその隙間にジャストフィット配置。</p>
        </div>
        <div className="bg-white border-y border-gray-200">
          <SuperTightFlow />
        </div>
      </div>
    </main>
  );
}

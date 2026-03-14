"use client";

import React from "react";
import { TitleBand } from "@/components/ui/TitleBand";

const MOCK_STEP = {
    number: "1",
    visit: "初回：診察・プランニング",
    title: "カウンセリング・デザイン決定",
    description: "お口の状態を確認し、理想の歯並びや明るさをシミュレーション。あなたに最適な設計を行います。"
};

const CurrentFlowStructure = ({ title, cardBg, cardBorder }: { 
    title: string, 
    cardBg: string,
    cardBorder: string
}) => (
    <div className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-2xl text-left">
            <div className="mb-6 text-center">
                <span className="bg-gray-800 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">{title}</span>
            </div>
            
            <div className="relative">
                {/* Elegant Tab - 現在の本番そのまま (濃い青) */}
                <div className="inline-flex items-center justify-center bg-parfait-blue text-white w-28 py-1 rounded-t-lg gap-1 ml-2 shadow-sm">
                    <span className="font-serif italic text-[9px] opacity-80 translate-y-[1px]">Step</span>
                    <span className="font-serif text-lg leading-none font-bold">{MOCK_STEP.number}</span>
                </div>
                
                {/* Main Card - デザイン（構造・枠線）は変えず、背景色だけ変更 */}
                <div className={`${cardBg} ${cardBorder} border rounded-xl rounded-tl-none p-6 shadow-sm`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-labriller-blue leading-snug">
                            {MOCK_STEP.title}
                        </h3>
                        <span className="inline-block bg-parfait-blue/10 text-parfait-blue text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border border-parfait-blue/20">
                            {MOCK_STEP.visit}
                        </span>
                    </div>
                    <p className="text-base font-bold text-gray-600 leading-relaxed text-left">
                        {MOCK_STEP.description}
                    </p>
                </div>

                {/* Arrow - 現在の本番そのまま */}
                <div className="flex justify-center py-4 relative z-10 translate-y-2">
                    <svg width="96" height="32" viewBox="0 0 24 8" fill="none" className="drop-shadow-sm">
                        <path d="M0 0H24L12 8L0 0Z" fill="#7aaec8"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

export default function FlowInternalColorPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white p-10 text-center border-b">
                <h1 className="text-3xl font-black text-gray-900">Flow Card Internal Colors</h1>
                <p className="text-gray-500 mt-2">デザインは変えず、「カード内部」に色を乗せた比較</p>
            </div>

            {/* Pattern 1: Paled Blue (ブランドカラーの5%) */}
            <CurrentFlowStructure 
                title="Pattern 1: Paled Blue (5%)"
                cardBg="bg-[#f2f7f9]" // #7aaec8 の 5%
                cardBorder="border-parfait-blue/40"
            />

            {/* Pattern 2: Sky Tint (ブランドカラーの10%) */}
            <CurrentFlowStructure 
                title="Pattern 2: Sky Tint (10%)"
                cardBg="bg-[#e6f0f5]" // #7aaec8 の 10%
                cardBorder="border-parfait-blue/50"
            />

            {/* Pattern 3: Porcelain Grège (極薄グレージュ) */}
            <CurrentFlowStructure 
                title="Pattern 3: Porcelain Grège"
                cardBg="bg-[#F8F8F8]" 
                cardBorder="border-parfait-blue/30"
            />

            {/* Pattern 4: Radial Glow (5% to 10% gradation) */}
            <div className="py-12 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-2xl text-left">
                    <div className="mb-6 text-center">
                        <span className="bg-[#3BADB0] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Pattern 4: Radial Glow (Pro Max)</span>
                    </div>
                    
                    <div className="relative">
                        <div className="inline-flex items-center justify-center bg-parfait-blue text-white w-28 py-1 rounded-t-lg gap-1 ml-2 shadow-sm">
                            <span className="font-serif italic text-[9px] opacity-80 translate-y-[1px]">Step</span>
                            <span className="font-serif text-lg leading-none font-bold">{MOCK_STEP.number}</span>
                        </div>
                        
                        <div 
                            className="border border-parfait-blue/30 rounded-xl rounded-tl-none p-6 shadow-sm"
                            style={{
                                background: 'radial-gradient(circle at 30% 30%, #F2F7F9 0%, #E6F0F5 100%)'
                            }}
                        >
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-labriller-blue leading-snug">
                                    {MOCK_STEP.title}
                                </h3>
                                <span className="inline-block bg-parfait-blue/10 text-parfait-blue text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border border-parfait-blue/20">
                                    {MOCK_STEP.visit}
                                </span>
                            </div>
                            <p className="text-base font-bold text-gray-600 leading-relaxed text-left">
                                {MOCK_STEP.description}
                            </p>
                        </div>

                        <div className="flex justify-center py-4 relative z-10 translate-y-2">
                            <svg width="96" height="32" viewBox="0 0 24 8" fill="none" className="drop-shadow-sm">
                                <path d="M0 0H24L12 8L0 0Z" fill="#7aaec8"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-400 text-sm italic">現在の本番デザインをベースに、背景色のみを変化させています。</p>
            </div>
        </main>
    );
}

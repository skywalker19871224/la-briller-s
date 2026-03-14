"use client";

import React from "react";
import { TitleBand } from "@/components/ui/TitleBand";

const MOCK_STEP = {
    number: "1",
    visit: "初回：診察・プランニング",
    title: "カウンセリング・デザイン決定",
    description: "お口の状態を確認し、理想の歯並びや明るさをシミュレーション。あなたに最適な設計を行います。"
};

const FlowVariant = ({ title, tabClass, textClass, cardClass, arrowColor }: { 
    title: string, 
    tabClass: string, 
    textClass: string, 
    cardClass: string,
    arrowColor: string 
}) => (
    <div className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-2xl">
            <div className="mb-6 text-center">
                <span className="bg-gray-800 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">{title}</span>
            </div>
            
            <div className="relative">
                {/* Elegant Tab */}
                <div className={`inline-flex items-center justify-center w-28 py-1 rounded-t-lg gap-1 ml-2 shadow-sm ${tabClass}`}>
                    <span className={`font-serif italic text-[9px] opacity-80 translate-y-[1px] ${textClass}`}>Step</span>
                    <span className={`font-serif text-lg leading-none font-bold ${textClass}`}>{MOCK_STEP.number}</span>
                </div>
                
                {/* Main Card */}
                <div className={`bg-white border rounded-xl rounded-tl-none p-6 shadow-sm ${cardClass}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-800 leading-snug">
                            {MOCK_STEP.title}
                        </h3>
                        <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border border-gray-200">
                            {MOCK_STEP.visit}
                        </span>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                        {MOCK_STEP.description}
                    </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-4">
                    <svg width="96" height="32" viewBox="0 0 24 8" fill="none">
                        <path d="M0 0H24L12 8L0 0Z" fill={arrowColor}/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

export default function FlowTabVariantsPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white p-10 text-center border-b">
                <h1 className="text-3xl font-black text-gray-900">Treatment Flow Tab Variants</h1>
                <p className="text-gray-500 mt-2">タブの色を「薄く」した際のバリエーション比較</p>
            </div>

            {/* Pattern A: Paled Blue (フロスト・ブルー) */}
            <FlowVariant 
                title="Pattern A: Paled Blue"
                tabClass="bg-[#E6F0F5]" // 薄い水色
                textClass="text-[#7AAEC8]" // 文字はブランドカラー
                cardClass="border-[#E6F0F5]" // 枠線も薄く
                arrowColor="#E6F0F5"
            />

            {/* Pattern B: Soft Grège (グレージュ) */}
            <FlowVariant 
                title="Pattern B: Soft Grège"
                tabClass="bg-gray-100" // 薄いグレー
                textClass="text-gray-600" // 文字は少し濃いグレー
                cardClass="border-gray-100"
                arrowColor="#F3F4F6"
            />

            {/* Pattern C: Brand Tint (ブランドカラーの10%透過) */}
            <FlowVariant 
                title="Pattern C: Brand Tint"
                tabClass="bg-parfait-blue/10" // ブランドカラーの10%
                textClass="text-parfait-blue" 
                cardClass="border-parfait-blue/20"
                arrowColor="rgba(122, 174, 200, 0.2)"
            />

            {/* Pattern D: Minimal Contrast (カードと同色に近い白) */}
            <FlowVariant 
                title="Pattern D: Minimal Contrast"
                tabClass="bg-white border-t border-l border-r border-[#7AAEC8]/30" // 白タブ + 薄い枠線
                textClass="text-[#7AAEC8]"
                cardClass="border-[#7AAEC8]/30"
                arrowColor="rgba(122, 174, 200, 0.1)"
            />
        </main>
    );
}

"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import React, { useEffect, useRef, useState } from "react";

const LINES = [
  { top: '18%', speed: 1.3 },
  { top: '38%', speed: 0.7 },
  { top: '57%', speed: 1.0 },
  { top: '76%', speed: 0.5 },
];

export const WhatIsLabriller = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [progress, setProgress] = useState(0);

    // --- 【手動調整用】フォントサイズの設定 ---
    const fontSizeTop = "text-2xl md:text-3xl lg:text-4xl"; // 「貼るだけで〜」のサイズ
    const fontSizeBottom = "text-xl md:text-2xl lg:text-3xl"; // 「世界最薄〜」のサイズ
    const fontWeightBottom = "font-black"; // 文字の太さ (font-thin, font-light, font-normal, font-medium, font-bold, font-extrabold, font-black)
    const textColorBottom = "text-red-700"; // 文字の色 (text-red-600, text-rose-700, text-orange-600 など)
    const textEffectBottom = "drop-shadow-md"; // 文字の影 (drop-shadow-sm, drop-shadow-md, drop-shadow-lg, shadow-none)
    const descriptionSize = "text-base md:text-lg"; // 説明文のサイズ
    // ---------------------------------------

    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const total = window.innerHeight + rect.height;
            const p = (window.innerHeight - rect.top) / total;
            setProgress(Math.max(0, Math.min(1, p)));
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="what-is-labriller"
            className="relative py-16 md:py-24 bg-parfait-blue text-white text-center overflow-hidden"
        >
            {/* BrandMessageと同じ背景のアニメーションライン */}
            <div className="absolute inset-0 pointer-events-none">
                {LINES.map((line, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            top: line.top,
                            left: 0,
                            height: '1px',
                            width: '55%',
                            background:
                                'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.55), rgba(255,255,255,0.2), transparent)',
                            transform: `translateX(${-60 + progress * 220 * line.speed}%) skewX(-12deg)`,
                            willChange: 'transform',
                            opacity: 0.5 + progress * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                {/* Tight Stack Header */}
                <div className="flex flex-col items-center mb-8">
                    <span className="text-[10px] md:text-xs tracking-[0.6em] text-white/70 uppercase mb-2">
                        WHAT IS LA BRILLER
                    </span>
                    <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white mb-6">
                        ラブリエとは
                    </h2>
                    
                    <div className="space-y-1 mb-8">
                        <p className="text-xl md:text-2xl font-serif italic tracking-widest text-white/90">
                            貼るだけで
                        </p>
                        <p className="text-2xl md:text-3xl font-serif tracking-[0.15em] leading-tight text-white font-medium">
                            理想の口元を叶える
                        </p>
                    </div>
                </div>

                {/* Inverted Notch Ribbon */}
                <div className="flex justify-center mb-10">
                    <div className="relative group">
                        <div 
                            className="bg-[#B91C1C] px-8 md:px-12 py-2 md:py-3 relative inline-block"
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%, 12px 50%)',
                            }}
                        >
                            <h2 className={`relative font-sans tracking-tight text-white ${fontSizeBottom} ${fontWeightBottom} drop-shadow-sm`}>
                                世界最薄ジルコニアベニア
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Minimal Divider */}
                <div className="flex justify-center mb-10">
                    <div className="w-12 h-px bg-white/30 mx-auto" />
                </div>

                {/* Detailed Description */}
                <div className="max-w-3xl mx-auto">
                    <div className={`text-white/90 leading-loose md:leading-[2.2] text-left md:text-center space-y-6 ${descriptionSize}`}>
                        <p>
                            LaBriller(ラブリエ)は、白く美しいセラミックのベニアを、付け爪をするように歯の表面に貼り付け、歯の形や色をキレイに見せることができる審美歯科治療法です。
                        </p>
                        <p>
                            歯を一切削らず、強度に優れた極薄のセラミックを歯の表面に貼り付けることで、歯の見た目のお悩みを気軽に解決することができます。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

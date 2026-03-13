"use client";
import { TitleBand } from "@/components/ui/TitleBand";
import { flowSteps } from "@/content/flow";
import { useEffect, useRef, useState } from 'react';

export const Flow = () => {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(flowSteps.length).fill(false));
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            if (!ref) return null;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleItems(prev => {
                                const next = [...prev];
                                next[index] = true;
                                return next;
                            });
                        }, index * 120);
                        observer.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            observer.observe(ref);
            return observer;
        });

        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    return (
        <section className="bg-parfait-white">
            <TitleBand en="Treatment Flow" ja="治療の流れ" />

            {/* Steps */}
            <div className="py-12 md:py-16 container mx-auto px-6 max-w-2xl">
                <div className="relative">
                    {/* 縦の連結ライン */}
                    <div className="absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden sm:block" />

                    <div className="space-y-0">
                        {flowSteps.map((step, index) => (
                            <div key={step.number}>
                                <div
                                    ref={el => { itemRefs.current[index] = el; }}
                                    className="transition-all duration-700 ease-out"
                                    style={{
                                        opacity: visibleItems[index] ? 1 : 0,
                                        transform: visibleItems[index] ? 'translateY(0)' : 'translateY(24px)'
                                    }}
                                >
                                    <div className="flex gap-6 sm:gap-8 py-4">
                                        {/* ステップ番号 */}
                                        <div className="shrink-0 flex flex-col items-center">
                                            <div className="relative w-[5.5rem] text-center">
                                                {/* 来院バッジ */}
                                                <span className="inline-block bg-parfait-blue text-white text-[10px] tracking-wider px-2 py-0.5 rounded-full mb-1">
                                                    {step.visit}
                                                </span>
                                                <div className="font-serif leading-none text-[#8E81AC]/30 text-7xl select-none flex items-baseline justify-center tracking-tighter">
                                                    <span className="text-4xl italic mr-1">Step</span>
                                                    {step.number}
                                                </div>
                                            </div>
                                        </div>

                                        {/* コンテンツ */}
                                        <div className="flex-1 pt-6">
                                            {/* ゴールドライン */}
                                            <div className="w-10 h-px bg-gradient-to-r from-gold/60 to-transparent mb-3" />
                                            <h3 className="text-base md:text-lg font-bold text-labriller-blue mb-2 leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* ステップ間 区切り - 潰れた逆三角形のデザイン（比率維持で拡大 + マージン詰め） */}
                                {index < flowSteps.length - 1 && (
                                    <div className="relative h-6 flex items-center">
                                        {/* 縦のガイドライン */}
                                        <div className="absolute h-full w-px bg-gray-200 left-[2.75rem] hidden sm:block" />
                                        
                                        {/* 潰れた逆三角形 (比率4:1を維持して拡大: 48x12) */}
                                        <div className="absolute left-[2.75rem] -translate-x-1/2 hidden sm:block">
                                            <svg width="48" height="12" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                                                <path d="M0 0H48L24 12L0 0Z" fill="#B4D7E2"/>
                                            </svg>
                                        </div>
                                        
                                        {/* モバイル用（中央配置） */}
                                        <div className="w-full flex justify-center sm:hidden">
                                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                                                <path d="M0 0H40L20 10L0 0Z" fill="#B4D7E2"/>
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

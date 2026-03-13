"use client";

import { useEffect, useRef, useState } from 'react';

const steps = [
    {
        number: "01",
        visit: "初回",
        title: "カウンセリング・精密診査",
        description: "お悩みや理想の口元をお伺いし、ラブリエが適応可能か精密な診査を行います。治療計画と料金を明確にご提示します。"
    },
    {
        number: "02",
        visit: "初回",
        title: "型取り・色決め",
        description: "現在の歯型を採取し、作製するラブリエチップの色（白さ）や最終的な形を相談して決定します。必要に応じてわずかに歯の表面を整える場合があります。"
    },
    {
        number: "03",
        visit: "2回目",
        title: "装着（セット）",
        description: "完成したラブリエチップを歯の表面に専用の強力な接着剤で確実に装着します。"
    },
    {
        number: "04",
        visit: "最終",
        title: "確認・完了",
        description: "噛み合わせや見た目の最終チェックを行い、ご自宅でのケア方法をご説明して治療完了です。"
    }
];

export const Flow = () => {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(steps.length).fill(false));
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
            {/* Title Band — QAと同パターン */}
            <div className="bg-parfait-blue py-10 text-center text-white">
                <div className="container mx-auto px-6">
                    <p className="text-[10px] tracking-[0.5em] uppercase text-white/60 mb-2">Treatment Flow</p>
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wider">治療の流れ</h2>
                </div>
            </div>

            {/* Steps */}
            <div className="py-12 md:py-16 container mx-auto px-6 max-w-2xl">
                <div className="relative">
                    {/* 縦の連結ライン */}
                    <div className="absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden sm:block" />

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div key={step.number}>
                                <div
                                    ref={el => { itemRefs.current[index] = el; }}
                                    className="transition-all duration-700 ease-out"
                                    style={{
                                        opacity: visibleItems[index] ? 1 : 0,
                                        transform: visibleItems[index] ? 'translateY(0)' : 'translateY(24px)'
                                    }}
                                >
                                    <div className="flex gap-6 sm:gap-8 py-8">
                                        {/* ステップ番号 */}
                                        <div className="shrink-0 flex flex-col items-center">
                                            <div className="relative w-[5.5rem] text-center">
                                                {/* 来院バッジ */}
                                                <span className="inline-block bg-parfait-blue text-white text-[10px] tracking-wider px-2 py-0.5 rounded-full mb-1">
                                                    {step.visit}
                                                </span>
                                                {/* 大きな Step番号 */}
                                                <div className="font-serif leading-none text-parfait-blue/20 text-6xl select-none">
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

                                {/* ステップ間 区切り */}
                                {index < steps.length - 1 && (
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

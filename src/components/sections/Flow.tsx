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
            <div className="py-12 md:py-16 container mx-auto px-6 max-w-2xl text-left">
                <div className="space-y-2">
                    {flowSteps.map((step, index) => (
                        <div key={step.number}>
                            <div
                                ref={el => { itemRefs.current[index] = el; }}
                                className="transition-all duration-700 ease-out"
                                style={{
                                    opacity: visibleItems[index] ? 1 : 0,
                                    transform: visibleItems[index] ? 'translateY(0)' : 'translateY(16px)'
                                }}
                            >
                                <div className="relative pt-4">
                                    {/* Elegant Tab - Step number centered */}
                                    <div className="inline-flex items-center justify-center bg-parfait-blue text-white w-32 py-1.5 rounded-t-xl gap-1.5 ml-2 shadow-sm">
                                        <span className="font-serif italic text-[10px] opacity-80 translate-y-[1px]">Step</span>
                                        <span className="font-serif text-xl leading-none font-bold">{step.number}</span>
                                    </div>
                                    
                                    {/* Main Card - Solid Blue Frame */}
                                    <div className="bg-white border border-parfait-blue rounded-2xl rounded-tl-none p-6 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-base md:text-xl font-bold text-labriller-blue leading-snug">
                                                {step.title}
                                            </h3>
                                            {/* 来院バッジ - タイトルの後に配置 */}
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

                            {/* ステップ間 区切り - 逆三角形 (間に差し込む) */}
                            {index < flowSteps.length - 1 && (
                                <div className="flex justify-center py-2 relative z-10">
                                    <svg width="32" height="10" viewBox="0 0 32 10" fill="none" className="drop-shadow-sm">
                                        <path d="M0 0H32L16 10L0 0Z" fill="#7aaec8"/>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

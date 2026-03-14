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
        <section className="bg-transparent">
            <TitleBand en="Treatment Flow" ja="治療の流れ" />

            {/* Steps */}
            <div className="py-6 md:py-10 container mx-auto px-6 max-w-2xl text-left">
                <div className="space-y-0">
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
                                <div className="relative -mt-4">
                                    {/* Elegant Tab - Step number centered */}
                                    <div className="inline-flex items-center justify-center bg-parfait-blue text-white w-28 py-1 rounded-t-lg gap-1 ml-2 shadow-sm">
                                        <span className="font-serif italic text-[9px] opacity-80 translate-y-[1px]">Step</span>
                                        <span className="font-serif text-lg leading-none font-bold">{step.number}</span>
                                    </div>
                                    
                                    {/* Main Card - Solid Blue Frame */}
                                    <div 
                                        className="border border-parfait-blue rounded-xl rounded-tl-none p-4 md:p-6 shadow-[0_2px_12px_-8px_rgba(0,0,0,0.03)]"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, #F2F7F9 0%, #E6F0F5 100%)'
                                        }}
                                    >
                                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                            <h3 className="text-sm md:text-lg font-bold text-labriller-blue leading-snug">
                                                {step.title}
                                            </h3>
                                            {/* 来院バッジ - タイトルの後に配置 */}
                                            <span className="inline-block bg-parfait-blue/10 text-parfait-blue text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded border border-parfait-blue/20">
                                                {step.visit}
                                            </span>
                                        </div>
                                        <p className="text-sm md:text-base font-bold text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ステップ間 区切り - 逆三角形 (間に差し込む) */}
                            {index < flowSteps.length - 1 && (
                                <div className="flex justify-center py-0 relative z-10 translate-y-2">
                                    <svg width="96" height="32" viewBox="0 0 24 8" fill="none" className="drop-shadow-sm">
                                        <path d="M0 0H24L12 8L0 0Z" fill="#7aaec8"/>
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

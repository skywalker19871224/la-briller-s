"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { merits } from "@/content/merits";

export const Merits = () => {
    return (
        <section
            className="relative py-10 md:py-16 overflow-hidden bg-white"
            style={{
                backgroundImage: "url('/assets/textures/texture_bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Soft gradient overlay — 上部を薄くしてテクスチャを透かす */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-blue-50/40 to-white/95" />

            <div className="relative container mx-auto px-6">
                <SectionHeader
                    en="Features of La Briller"
                    ja="ラブリエの特徴"
                    theme="light"
                    enColor="text-parfait-blue/80"
                    className="mb-16 md:mb-20"
                />

                {/* Bubble Cloud Layout - Refined for balance */}
                <div className="relative max-w-[600px] mx-auto min-h-[600px] flex flex-col items-center">
                    {/* Top Row: 2 Bubbles */}
                    <div className="w-full flex justify-around mb-[-1.5rem] md:mb-[-2rem]">
                        <Bubble item={merits[0]} size="w-36 h-36 md:w-44 md:h-44" className="z-10" index={0} />
                        <Bubble item={merits[1]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 lg:translate-y-4" index={1} />
                    </div>

                    {/* Middle Row: 1 Main Bubble */}
                    <div className="z-20 mb-[-1.5rem] md:mb-[-2rem]">
                        <Bubble item={merits[2]} size="w-40 h-40 md:w-48 md:h-48" className="shadow-2xl" index={2} />
                    </div>

                    {/* Row 3: 2 Bubbles */}
                    <div className="w-full flex justify-between px-4 md:px-0 mb-[-1.5rem] md:mb-[-2rem]">
                        <Bubble item={merits[3]} size="w-36 h-36 md:w-44 md:h-44" className="z-10" index={3} />
                        <Bubble item={merits[4]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 translate-y-2" index={4} />
                    </div>

                    {/* Bottom Row: 1 Bubble */}
                    <div className="z-20">
                        <Bubble item={merits[5]} size="w-36 h-36 md:w-44 md:h-44" index={5} />
                    </div>

                    {/* Sparkle Decorations - Repositioned for balance */}
                    <div className="absolute top-1/4 left-0 md:-left-8 text-parfait-blue/30 animate-pulse pointer-events-none">
                        <Sparkles className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div className="absolute bottom-1/4 right-0 md:-right-8 text-parfait-blue/30 animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}>
                        <Sparkles className="w-8 h-8 md:w-10 md:h-10 rotate-12" />
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-16 text-center">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-parfait-blue to-transparent mx-auto mb-8" />
                    <p className="text-lg md:text-2xl font-bold text-gray-800 leading-[1.9]">
                        あなたの笑顔に、<br className="md:hidden" />
                        <span className="text-labriller-blue">自信と輝き</span>を。
                    </p>
                    <p className="text-lg md:text-3xl font-bold text-gray-900 leading-[1.9] mt-1">
                        今すぐ、<br className="md:hidden" />
                        <span className="text-labriller-blue">&ldquo;削らない選択&rdquo;</span>を。
                    </p>
                    <p className="text-xs md:text-base text-gray-500 mt-6 tracking-[0.25em]">
                        ラブリエで始める新しい審美ケア
                    </p>
                </div>
            </div>

            {/* Background Sparkles */}
            <div className="absolute bottom-20 left-10 opacity-20 transform -rotate-12">
                <Sparkles className="w-16 h-16 text-parfait-blue" />
            </div>
            <div className="absolute top-20 right-10 opacity-20 transform rotate-45">
                <Sparkles className="w-12 h-12 text-parfait-blue" />
            </div>
        </section>
    );
};

// Internal Bubble Component
// - 入場: IntersectionObserver で fade + scale in
// - 揺れ: スクロール量 × 個別位相のサイン波で上下にゆらゆら
const Bubble = ({ item, size, className, index }: { item: { id: number; title: React.ReactNode }; size: string; className?: string; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [wobble, setWobble] = useState(0);

    // 入場アニメーション
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // スクロール連動の揺れ（バブルごとに位相をずらす）
    useEffect(() => {
        const phase = (index / 6) * Math.PI * 2;
        const amplitude = 6 + (index % 3) * 2; // 6〜10px でバラつき
        const onScroll = () => {
            setWobble(Math.sin(window.scrollY * 0.006 + phase) * amplitude);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [index]);

    return (
        // 外側: スクロール揺れ（transition なし でスクロールに即追従）
        <div
            style={{
                transform: `translateY(${wobble}px)`,
                willChange: 'transform',
            }}
        >
            {/* 内側: 入場アニメーション */}
            <div
                ref={ref}
                style={{
                    transitionDelay: `${index * 80}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                    background: 'radial-gradient(110% 110% at 20% 10%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.1),
                        inset 0 1px 1px rgba(255, 255, 255, 0.4),
                        inset 0 -1px 4px rgba(0, 0, 0, 0.05)
                    `,
                }}
                className={`
                    ${size} ${className}
                    relative flex flex-col items-center justify-center rounded-full
                    p-4 text-center group
                    pointer-events-none select-none
                `}
            >
                {/* Visual Glass Shine / Reflection */}
                <div className="absolute top-0 right-0 left-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />
                
                <span
                    className="absolute top-6 left-1/2 -translate-x-1/2 text-[18px] md:text-[20px] text-parfait-blue/90"
                    style={{ fontFamily: "'Brush Script MT', cursive", fontStyle: 'italic' }}
                >
                    Merit {item.id}
                </span>
                <p className="text-[15px] md:text-[18px] font-bold text-gray-800 leading-tight mt-6 relative z-10">
                    {item.title}
                </p>
            </div>
        </div>
    );
};

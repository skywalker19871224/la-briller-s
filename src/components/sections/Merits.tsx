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
                backgroundPosition: "right center",
            }}
        >
            <div className="relative container mx-auto px-6">
                <SectionHeader
                    en="Features of La Briller"
                    ja="ラブリエの特徴"
                    theme="light"
                    enColor="text-parfait-blue/80"
                    className="mb-16 md:mb-20"
                />

                {/* Bubble Cloud Layout */}
                <div className="relative max-w-[500px] mx-auto min-h-[550px] md:min-h-[600px]">
                    {/* Row 1: Left & Right */}
                    <div className="flex justify-between px-2 md:px-0">
                        <Bubble item={merits[0]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 bg-cyan-50/70" index={0} />
                        <Bubble item={merits[1]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 mt-8 bg-cyan-50/70" index={1} />
                    </div>

                    {/* Row 2: Center */}
                    <div className="flex justify-center -mt-10">
                        <Bubble item={merits[2]} size="w-36 h-36 md:w-44 md:h-44" className="z-20 shadow-xl bg-cyan-50/80" index={2} />
                    </div>

                    {/* Row 3: Left & Right */}
                    <div className="flex justify-between px-2 md:px-0 -mt-10">
                        <Bubble item={merits[3]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 bg-cyan-50/70" index={3} />
                        <Bubble item={merits[4]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 mt-8 bg-cyan-50/70" index={4} />
                    </div>

                    {/* Row 4: Center */}
                    <div className="flex justify-center -mt-10">
                        <Bubble item={merits[5]} size="w-36 h-36 md:w-44 md:h-44" className="z-20 bg-cyan-50/80" index={5} />
                    </div>

                    {/* Sparkle Decorations */}
                    <div className="absolute top-1/4 -left-4 md:-left-10 text-parfait-blue/40 animate-pulse">
                        <Sparkles className="w-10 h-10" />
                    </div>
                    <div className="absolute bottom-1/3 -right-4 md:-right-10 text-parfait-blue/40 animate-pulse" style={{ animationDelay: '1.5s' }}>
                        <Sparkles className="w-8 h-8 rotate-12" />
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
                    transition: 'opacity 0.65s ease, transform 0.65s ease',
                    background: 'radial-gradient(ellipse at 38% 28%, rgba(255,255,255,0.82) 0%, rgba(230,244,255,0.55) 45%, rgba(190,225,250,0.38) 100%)',
                    boxShadow: '0 16px 48px rgba(90,150,210,0.30), 0 2px 8px rgba(130,190,240,0.18), inset 0 1.5px 3px rgba(255,255,255,0.95), inset 0 -1px 4px rgba(100,160,220,0.18)',
                    border: '1px solid rgba(255,255,255,0.78)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                }}
                className={`
                    ${size} ${className}
                    relative flex flex-col items-center justify-center rounded-full
                    p-4 text-center
                    pointer-events-none select-none
                `}
            >
                {/* トップハイライト（ガラスの光沢） */}
                <div
                    className="absolute rounded-full bg-white/60 blur-[2px]"
                    style={{ top: '16%', left: '50%', transform: 'translateX(-50%)', width: '38%', height: '4px' }}
                />
                <span
                    className="absolute top-6 left-1/2 -translate-x-1/2 text-[18px] md:text-[20px] text-[#FF6EB4]/90"
                    style={{ fontFamily: "'Brush Script MT', cursive", fontStyle: 'italic' }}
                >
                    Merit {item.id}
                </span>
                <p className="text-[15px] md:text-[18px] font-bold text-labriller-blue leading-tight mt-6">
                    {item.title}
                </p>
            </div>
        </div>
    );
};

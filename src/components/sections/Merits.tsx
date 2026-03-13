"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const merits = [
    { id: 1, title: <>歯を削らず、<br />貼るだけ</> },
    { id: 2, title: <>欠けや変形も、<br />隙間補正</> },
    { id: 3, title: <>通院 <span className="text-2xl font-bold">2</span> 回のみ</> },
    { id: 4, title: <>紙より薄い<br /><span className="text-[13px]">0.04mmのベニア</span></> },
    { id: 5, title: <>違和感ゼロの<br />美しさ</> },
    { id: 6, title: <>色選択<span className="text-xl">可能</span></> },
];

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
                    en="The 6 Advantages"
                    ja="ラブリエの特徴"
                    theme="light"
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
                    <div className="absolute top-1/4 -left-4 md:-left-10 text-gold/40 animate-pulse">
                        <Sparkles className="w-10 h-10" />
                    </div>
                    <div className="absolute bottom-1/3 -right-4 md:-right-10 text-gold/40 animate-pulse" style={{ animationDelay: '1.5s' }}>
                        <Sparkles className="w-8 h-8 rotate-12" />
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-16 text-center">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
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
                <Sparkles className="w-16 h-16 text-gold" />
            </div>
            <div className="absolute top-20 right-10 opacity-20 transform rotate-45">
                <Sparkles className="w-12 h-12 text-gold" />
            </div>
        </section>
    );
};

// Internal Bubble Component
// - 入場: IntersectionObserver で fade + scale in
// - 揺れ: スクロール量 × 個別位相のサイン波で上下にゆらゆら
const Bubble = ({ item, size, className, index }: { item: any; size: string; className?: string; index: number }) => {
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
                }}
                className={`
                    ${size} ${className}
                    relative flex flex-col items-center justify-center rounded-full
                    border border-white/60 shadow-[0_12px_40px_rgba(180,225,255,0.25)]
                    backdrop-blur-[3px] p-4 text-center
                    pointer-events-none select-none
                `}
            >
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

"use client";

import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface TitleBandProps {
  en: string;
  ja: React.ReactNode;
  className?: string;
  py?: string;
  description?: React.ReactNode;
}

export const TitleBand: React.FC<TitleBandProps> = ({
  en,
  ja,
  className,
  py = "py-6",
  description,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inViewAmount = window.innerHeight - rect.top;
      const totalScrollable = window.innerHeight + rect.height;
      // Calculate progress (0 to 1) while the element is in/near the viewport
      const percentage = Math.max(0, Math.min(1, inViewAmount / totalScrollable));
      setProgress(percentage);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${py} text-center text-white`}
      style={{
        // ユーザーが「クール」と感じた、中央がわずかに濃いめ（周辺が明るめ）のグラデーション
        background: 'radial-gradient(circle, #6C9BB5 0%, #7AAEC8 100%)'
      }}
    >
      {/* 案2: Elegant Glass Reflection (シネマティック白銀反射) */}
      <div 
        className="absolute top-0 bottom-0 w-[200%] pointer-events-none z-0"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.02) 60%, transparent 70%)',
          left: '-150%', // 十分に左から開始
          transform: `translateX(${progress * 200}%)`, // スクロール0.5の時にちょうど中央(50%)に来る計算
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          en={en}
          ja={ja}
          theme="dark"
          className={className ?? "mb-0"}
          description={description}
        />
      </div>
    </div>
  );
};

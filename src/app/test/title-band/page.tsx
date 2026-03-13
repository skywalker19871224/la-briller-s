"use client";

import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from "@/components/ui/SectionHeader";

// 共通プロップス
interface VariantProps {
  en: string;
  ja: string;
}

// -------------------------------------------------------------
// 案1：Subtle Gradient Parallax (オーロラ調パララックス)
// スクロールに合わせて背面のふんわりとしたグラデーション球体が上下・左右にわずかに動く
// -------------------------------------------------------------
const Variant1: React.FC<VariantProps> = ({ en, ja }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerPos = (rect.top + rect.bottom) / 2;
      const windowCenter = window.innerHeight / 2;
      // 画面中央からの距離に応じてオフセットを計算（パララックス効果）
      setOffsetY((centerPos - windowCenter) * 0.1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden bg-parfait-blue py-6 text-center text-white">
      {/* 動くオーロラグラデーション球体 */}
      <div 
        className="absolute top-1/2 left-1/4 w-[150%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_50%)] rounded-full blur-2xl opacity-70 pointer-events-none"
        style={{ transform: `translate(-50%, calc(-50% + ${offsetY}px))` }}
      />
      <div 
        className="absolute top-0 right-0 w-[100%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(180,215,226,0.2)_0%,_transparent_60%)] rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{ transform: `translateY(${-offsetY * 0.5}px)` }}
      />
      
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader en={en} ja={ja} theme="dark" className="mb-0" />
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 案2：Elegant Glass Reflection (シネマティック白銀反射)
// スクロール量に完全に連動し、斜めの白い光沢線がスイッと横切る
// -------------------------------------------------------------
const Variant2: React.FC<VariantProps> = ({ en, ja }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inViewAmount = window.innerHeight - rect.top;
      const totalScrollable = window.innerHeight + rect.height;
      // 0〜1 の間でスケール
      const percentage = Math.max(0, Math.min(1, inViewAmount / totalScrollable));
      setProgress(percentage);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden bg-parfait-blue py-6 text-center text-white">
      {/* 光の反射レイヤー (斜め) */}
      <div 
        className="absolute top-0 bottom-0 w-[200%] pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.02) 60%, transparent 70%)',
          left: '-150%',
          transform: `translateX(${progress * 200}%)`,
        }}
      />
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader en={en} ja={ja} theme="dark" className="mb-0" />
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 案3：Deep Slow Zoom (ラグジュアリー・ダイナミックズーム)
// スクロールに応じて背面のノイズ/ストライプテクスチャがジワリと拡大される
// -------------------------------------------------------------
const Variant3: React.FC<VariantProps> = ({ en, ja }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerPos = (rect.top + rect.bottom) / 2;
      const windowCenter = window.innerHeight / 2;
      
      // 中央に近いほど 1 になり、離れると 1.1 くらいまで拡大する設定
      const dist = Math.abs(centerPos - windowCenter);
      const newScale = 1 + (dist / window.innerHeight) * 0.15;
      
      setScale(newScale);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden bg-parfait-blue py-6 text-center text-white">
      {/* バックグラウンドにうっすらダイアゴナルストライプを引いて拡大 */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 20px)',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader en={en} ja={ja} theme="dark" className="mb-0" />
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 案4：Liquid Wave Depth (水面・アンビエントな波紋フロー)
// CSS変数をスクロールで回し、波打つようなX方向へのたおやかな動き
// -------------------------------------------------------------
const Variant4: React.FC<VariantProps> = ({ en, ja }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shiftX, setShiftX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShiftX(window.scrollY * 0.15); // スクロール量に比例して横シフト
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden bg-parfait-blue py-6 text-center text-white">
      {/* 優雅な曲線（SVGsを背景に配置してシフトさせる） */}
      <div 
        className="absolute -bottom-10 left-0 right-0 h-32 opacity-20 pointer-events-none w-[200%]"
        style={{
          transform: `translateX(${-shiftX}px)`,
          backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, transparent 60%)',
          backgroundSize: '800px 100%',
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-20 opacity-10 pointer-events-none w-[200%]"
        style={{
           transform: `translateX(${shiftX * 0.8}px)`, // 逆方向へふんわり
           backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, transparent 50%)',
           backgroundSize: '1000px 100%',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader en={en} ja={ja} theme="dark" className="mb-0" />
      </div>
    </div>
  );
};


export default function TitleBandAnimationTestPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-32">
      <div className="p-8 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">TitleBand スクロール連動エフェクト案（py-6基準）</h1>
        <p className="text-gray-600 mt-2">
          スクロールに連動して背景が動くエレガントな演出を4パターン用意しました。<br />
          ※ それぞれの帯の上下にはスクロール確認用にダミーの高さを設けています。ゆっくり上下にスクロールしてご確認ください。
        </p>
      </div>

      <div className="space-y-48 mt-24">
        {/* 案1 */}
        <section>
          <div className="px-6 mb-4">
            <h2 className="text-xl font-bold text-parfait-blue flex items-center gap-2">
              <span className="bg-parfait-blue text-white px-2 py-1 rounded text-sm">案1</span>
              Subtle Gradient Parallax（オーロラ調パララックス）
            </h2>
            <p className="text-gray-500 text-sm mt-1">背面の淡いハイライト球体が、スクロールに反応して上下にゆっくりと視差（パララックス）移動します。透明感があります。</p>
          </div>
          <Variant1 en="CASE STUDIES" ja="症例紹介" />
          <div className="h-48" /> {/* Spacer */}
        </section>

        {/* 案2 */}
        <section>
          <div className="px-6 mb-4">
            <h2 className="text-xl font-bold text-parfait-blue flex items-center gap-2">
              <span className="bg-parfait-blue text-white px-2 py-1 rounded text-sm">案2</span>
              Elegant Glass Reflection（シネマティック白銀反射）
            </h2>
            <p className="text-gray-500 text-sm mt-1">画面内に入ってから通り過ぎるまでのスクロール量に完全に連動し、斜めに入る上品な光沢線がスイッと横切ります。高級化粧品ブランドなどでよく見られる演出です。</p>
          </div>
          <Variant2 en="COMPARISON" ja="比較表" />
          <div className="h-48" /> {/* Spacer */}
        </section>

        {/* 案3 */}
        <section>
          <div className="px-6 mb-4">
            <h2 className="text-xl font-bold text-parfait-blue flex items-center gap-2">
              <span className="bg-parfait-blue text-white px-2 py-1 rounded text-sm">案3</span>
              Deep Slow Zoom（ラグジュアリーダイナミックズーム）
            </h2>
            <p className="text-gray-500 text-sm mt-1">極めて薄い上品な斜めストライプ柄が敷かれており、画面中央へ近づくにつれてジワリとスケール（拡大・縮小）します。奥行きと没入感が出ます。</p>
          </div>
          <Variant3 en="TREATMENT FLOW" ja="治療の流れ" />
          <div className="h-48" /> {/* Spacer */}
        </section>

        {/* 案4 */}
        <section>
          <div className="px-6 mb-4">
            <h2 className="text-xl font-bold text-parfait-blue flex items-center gap-2">
              <span className="bg-parfait-blue text-white px-2 py-1 rounded text-sm">案4</span>
              Ambient Light Flow（アンビエントな光のフロー）
            </h2>
            <p className="text-gray-500 text-sm mt-1">帯の上下に配置された柔らかい光のグラデーションが、スクロールに合わせて左右逆方向にスライドします。水面や光のゆらぎのような優雅さがあります。</p>
          </div>
          <Variant4 en="PRICING" ja="料金表" />
          <div className="h-48" /> {/* Spacer */}
        </section>
      </div>
      
      {/* 最下部の余白確保 */}
      <div className="h-screen flex items-end justify-center pb-10 text-gray-400">
        --- Scroll Demo End ---
      </div>
    </main>
  );
}

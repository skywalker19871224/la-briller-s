"use client";

import React from "react";
import Link from "next/link";
import { 
  Columns, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  Layout, 
  Image as ImageIcon,
  MessageSquare,
  Sparkles
} from "lucide-react";

const testPages = [
  { 
    title: "Comparison (4 Variants)", 
    href: "/test/comparison-variants", 
    icon: <Columns size={20} />, 
    desc: "比較表の4つのバリエーション提案" 
  },
  { 
    title: "Pricing (4 Variants)", 
    href: "/test/pricing-variants", 
    icon: <CreditCard size={20} />, 
    desc: "料金表のさりげないリッチ化案" 
  },
  { 
    title: "Treatment Flow", 
    href: "/test/flow-variants", 
    icon: <Zap size={20} />, 
    desc: "治療の流れのステップレイアウト案" 
  },
  { 
    title: "What is La Briller", 
    href: "/test/what-is-variants", 
    icon: <ShieldCheck size={20} />, 
    desc: "「ラブリエとは」のデザインバリエーション" 
  },
  { 
    title: "Case Studies V2", 
    href: "/test/case-design-v2", 
    icon: <ImageIcon size={20} />, 
    desc: "症例紹介のコンパクトバッジ案" 
  },
  { 
    title: "Background Effects", 
    href: "/test/bg-proposals", 
    icon: <Sparkles size={20} />, 
    desc: "ダイヤモンドのキラキラ演出案" 
  },
];

export default function TestHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-parfait-blue text-white rounded-2xl mb-6 shadow-lg shadow-parfait-blue/20">
                <Layout size={32} />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Design Proposals Hub</h1>
            <p className="text-gray-500 font-medium">Antigravity による「UI/UX Pro Max」の横展開一覧</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testPages.map((page) => (
            <Link 
              key={page.href} 
              href={page.href}
              className="group bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-parfait-blue flex items-center justify-center mb-6 group-hover:bg-parfait-blue group-hover:text-white transition-colors">
                    {page.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{page.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {page.desc}
                </p>
              </div>
              <div className="mt-8 flex items-center text-parfait-blue text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                詳細を見る <span className="ml-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t border-gray-200 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Project La Briller • Powered by Antigravity
            </p>
        </footer>
      </div>
    </div>
  );
}

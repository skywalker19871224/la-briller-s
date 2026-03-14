"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TitleBand } from "@/components/ui/TitleBand";
import { cn } from "@/lib/utils";

const qaData = [
    {
        question: "ラブリエとはどんな治療ですか？",
        answer: "ラブリエは、歯の表面に極薄のセラミック（ジルコニア）を貼る審美歯科治療です。歯をほとんど削らずに、歯の色や形を整えることができます。"
    },
    {
        question: "本当に歯を削らずに治療できますか？",
        answer: "多くのケースで歯をほとんど削らずに治療できます。ただし、歯並びや歯の状態によってはごくわずかな調整が必要になる場合があります。"
    },
    {
        question: "治療は何回くらい通院が必要ですか？",
        answer: "通常は2回程度の通院で治療が完了します。\n1回目：診察・型取り、2回目：装着です。"
    },
    {
        question: "ラブリエはどれくらいの強度がありますか？",
        answer: "(〜1000MPa）人の歯の約4倍の強度。人工ダイヤモンドに匹敵するジルコニアセラミックを採用しているため、強度と耐久性に優れています。"
    },
    {
        question: "どのくらい持ちますか？",
        answer: "適切なケアを行えば長期間使用することが可能です。ただし、噛み合わせや生活習慣によって耐久性は変わることがあります。"
    },
    {
        question: "痛みはありますか？",
        answer: "多くの場合、歯をほとんど削らないため麻酔が不要なケースが多く、痛みはほとんどありません。"
    },
    {
        question: "ホワイトニングとの違いは何ですか？",
        answer: "ホワイトニングは歯を白くする治療ですが、ラブリエは色だけでなく歯の形も整えることができる治療です。"
    }
];

export const QA = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-transparent">
            <TitleBand en="Support" ja="よくある質問" />

            <div className="pt-8 pb-12 container mx-auto px-6 max-w-4xl">

                <div className="space-y-0">
                    {qaData.map((item, index) => (
                        <div key={index} className="border-b border-gray-100">
                            <button
                                onClick={() => toggleOpen(index)}
                                className="w-full py-4 flex items-center justify-between text-left group"
                            >
                                <span className="text-base font-medium text-gray-900 group-hover:text-parfait-blue transition-colors">
                                    <span className="text-parfait-blue mr-3 font-serif italic text-lg">Q.</span>
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-parfait-blue" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-parfait-blue" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                )}
                            >
                                <div className="flex gap-4">
                                    <span className="text-rose-800 font-serif italic text-xl shrink-0">A.</span>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
interface BrandColumn {
  key: string;
  label: string;
  subLabel?: string;
  note?: string;
  isMain?: boolean;
}

const brandColumns: BrandColumn[] = [
  {
    key: "labriller",
    label: "La Briller",
    subLabel: "ラブリエ",
    note: "(マイクロ光造形法)",
    isMain: true,
  },
  { key: "super", label: "スーパーエナメル" },
  { key: "laminate", label: "ラミネートベニア" },
  { key: "ceramic", label: "セラミッククラウン" },
  { key: "lumineers", label: "ルミネアーズ" },
  { key: "hybrid", label: "ハイブリッドベニア" },
];

type BrandKey = (typeof brandColumns)[number]["key"];

const featureRows = [
  {
    label: "材質",
    values: {
      labriller: "ジルコニア",
      super: "e.max/VINTAGE",
      super_sub: "ジルコニア",
      laminate: "ポーレセン",
      ceramic: "ポーレセン",
      ceramic_sub: "ジルコニア",
      lumineers: "ニューセリネート",
      hybrid: "ハイブリッドレジン",
    } as Record<string, string>,
  },
  {
    label: "強度",
    values: {
      labriller: "高強度\n(~1000MPa)\n※人の歯の4倍の強度",
      super: "高強度ベニア\n(400MPa程度)",
      super_sub: "高強度ベニア\n(600MPa程度)",
      laminate: "やや弱い\n(100MPa程度)",
      ceramic: "フルカバーなので強い\n(400〜1200MPa程度)",
      lumineers: "強化型ベニア\n(260MPa程度)",
      hybrid: "経年的に劣化しやすい\n(200〜300MPa程度)",
    } as Record<string, string>,
  },
  {
    label: "厚み",
    values: {
      labriller: "0.04~0.08mm",
      super: "0.1〜0.5mm",
      laminate: "0.5~0.8mm",
      lumineers: "0.1〜0.5mm",
    } as Record<string, string>,
  },
  {
    label: "切削度",
    values: {
      labriller: "削らない",
      super: "削らない",
      laminate: "表層を削る",
      ceramic: "全周を削る",
      lumineers: "削らない",
      hybrid: "削らない",
    } as Record<string, string>,
  },
  {
    label: "形態修正",
    values: {
      labriller: "少し修正できる",
      super: "少し修正できる",
      laminate: "少し修正できる",
      ceramic: "かなり修正できる",
      lumineers: "少し修正できる",
      hybrid: "少し修正できる",
    } as Record<string, string>,
  },
];

export const ComparisonTable = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="comparison">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          en="Comparison"
          ja="ラブリエと他の審美治療の違い"
          theme="light"
          enColor="text-parfait-blue/80"
          className="mb-12 md:mb-16"
        />

        <div className="relative overflow-x-auto pb-4">
          <table className="w-full min-w-[1000px] border-separate border-spacing-x-2">
            <thead>
              <tr>
                <th className="w-[120px] bg-transparent"></th>
                {brandColumns.map((brand) => (
                  <th
                    key={brand.key}
                    className={`p-4 text-center rounded-t-2xl align-bottom ${
                      brand.isMain
                        ? "bg-[#6BA7B5] text-white"
                        : "bg-[#E0F3F5] text-gray-700"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center min-h-[80px]">
                      <span className="text-lg font-serif">{brand.label}</span>
                      {brand.subLabel && <span className="text-sm">{brand.subLabel}</span>}
                      {brand.note && <span className="text-[10px] opacity-80">{brand.note}</span>}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr key={row.label}>
                  {/* 行見出し */}
                  <td className="bg-[#D9DADD] text-[#1A2530] font-bold text-center py-6 px-4 rounded-sm">
                    {row.label}
                  </td>
                  {/* データセル */}
                  {brandColumns.map((brand) => {
                    const val = row.values[brand.key];
                    const subVal = row.values[`${brand.key}_sub`];
                    return (
                      <td
                        key={brand.key}
                        className={`text-center py-8 px-4 border-b border-gray-100 align-middle ${
                          brand.isMain ? "bg-white border-x-2 border-[#6BA7B5]/20 font-bold" : "bg-[#F8F9FA]/50"
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center whitespace-pre-wrap leading-relaxed text-[13px] md:text-sm text-gray-800">
                          {val ? (
                            <div className="flex items-center gap-4">
                              <span>{val}</span>
                              {subVal && <span className="text-gray-400">|</span>}
                              {subVal && <span>{subVal}</span>}
                            </div>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

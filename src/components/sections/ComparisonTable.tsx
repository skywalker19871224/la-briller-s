"use client";

const brandColumns = [
  {
    key: "labriller",
    label: "ラブリエ",
    headerClass: "bg-labriller-blue text-white",
    tagline: "極薄・削らない",
  },
  {
    key: "super",
    label: "スーパーエナメル",
    headerClass: "bg-parfait-cta-blue text-white",
    tagline: "高強度・審美",
  },
  {
    key: "conventional",
    label: "従来のラミネートベニア",
    headerClass: "bg-[#4A7AA3] text-white",
    tagline: "削る・重厚",
  },
] as const;

type BrandKey = (typeof brandColumns)[number]["key"];

type FeatureRow = {
  label: string;
} & Record<BrandKey, string>;

const featureRows: FeatureRow[] = [
  {
    label: "厚み",
    labriller: "約0.04〜0.08mm",
    super: "約0.1〜0.5mm",
    conventional: "約0.5〜0.8mm",
  },
  {
    label: "強度",
    labriller: "強い（〜1000MPa）人の歯",
    super: "強い（約360〜600MPa）",
    conventional: "やや弱い（約100〜160MPa）",
  },
  {
    label: "歯を削る量",
    labriller: "削らない",
    super: "削らない",
    conventional: "表面を削る",
  },
  {
    label: "治療回数",
    labriller: "約2回",
    super: "2〜3回",
    conventional: "2〜3回",
  },
  {
    label: "元の歯への復元",
    labriller: "可能",
    super: "可能",
    conventional: "難しい",
  },
];

export const ComparisonTable = () => {
  return (
    <section className="section-py bg-white" id="comparison">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mx-auto max-w-3xl space-y-4">
          <p className="text-[10px] tracking-[0.4em] uppercase text-parfait-blue/80">Comparison</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            ラブリエと他の審美治療の違い
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            厚み・強度・処置内容など、治療法ごとの特徴を項目別に比較できます。
          </p>
        </div>

        <div className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-parfait-blue/20 bg-white shadow-[0_20px_50px_rgba(10,25,45,0.08)]">
            <div className="-mx-6 overflow-x-auto px-6">
              <table className="w-full min-w-[640px] whitespace-nowrap text-sm md:text-base table-auto">
                <thead>
                  <tr className="text-left">
                    <th className="sticky left-0 z-20 px-4 py-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500 border-b border-gray-200 bg-gray-50">
                      項目
                    </th>
                    {brandColumns.map((brand) => (
                      <th
                        key={brand.key}
                        className={`px-4 py-3 font-bold text-sm tracking-wide ${brand.headerClass}`}
                      >
                        <span className="block text-lg">{brand.label}</span>
                        <span className="text-[11px] text-white/80 tracking-normal">{brand.tagline}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureRows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-gray-100 last:border-b-0 hover:bg-parfait-blue/5 transition-colors"
                    >
                      <td className="sticky left-0 z-10 px-4 py-4 text-sm font-semibold text-gray-600 bg-white/90">
                        {row.label}
                      </td>
                      {brandColumns.map((brand) => (
                        <td key={brand.key} className="px-4 py-4 text-sm text-gray-900">
                          {row[brand.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

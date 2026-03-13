import React from "react";
import { TitleBand } from "@/components/ui/TitleBand";
import { brandColumns, featureRows } from "@/content/comparison";

const PageHeader = () => {
  return (
    <div className="bg-white">
      <TitleBand en="COMPARISON VARIANTS" ja="比較表デザイン案（モバイル横スクロール無し）" />
      <div className="section-py container mx-auto px-6 max-w-5xl">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          4案ともスマホで横スクロールを発生させず、縦の情報設計で比較できる形にしています。
          本番LPの比較表は変更していません。
        </p>
      </div>
    </div>
  );
};

const VariantTitle = ({ label, note }: { label: string; note: string }) => {
  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
          {label}
        </h2>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-parfait-blue/70">
          mobile friendly
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{note}</p>
    </div>
  );
};

// Variant A: Feature cards, each card contains 3 brand rows (visual scanning: row-wise)
const VariantA = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <VariantTitle
          label="案A: 項目カード + ブランド3行（最も素直）"
          note="項目ごとに1カード。中はブランドが縦に3行並ぶので、スマホでも比較の視線移動が短い。"
        />
        <div className="grid gap-4 md:gap-6">
          {featureRows.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-parfait-blue/15 bg-white shadow-sm overflow-hidden"
            >
              <div className="px-5 py-4 bg-parfait-blue/5">
                <p className="text-sm font-bold text-gray-900 tracking-wide">
                  {row.label}
                </p>
              </div>
              <div className="divide-y divide-gray-100">
                {brandColumns.map((brand) => (
                  <div
                    key={brand.key}
                    className="flex items-start gap-4 px-5 py-4"
                  >
                    <div className="shrink-0">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${brand.headerClass}`}
                      >
                        {brand.label}
                      </span>
                      <div className="mt-1 text-[10px] text-gray-400">
                        {brand.tagline}
                      </div>
                    </div>
                    <div className="flex-1 text-sm md:text-base text-gray-800 leading-relaxed">
                      {row[brand.key]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Variant B: Brand cards, each contains a compact key/value list (brand-wise scanning)
const VariantB = () => {
  return (
    <section className="bg-parfait-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <VariantTitle
          label="案B: ブランドカード3枚（比較は“頭の中で”）"
          note="ブランド単位でまとまるので理解が速い。比較精度は落ちるが、ストレスなく読める。"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {brandColumns.map((brand) => (
            <article
              key={brand.key}
              className="rounded-2xl overflow-hidden border border-parfait-blue/15 bg-white shadow-sm"
            >
              <div className={`px-5 py-4 ${brand.headerClass}`}>
                <p className="text-base font-bold tracking-wide">
                  {brand.label}
                </p>
                <p className="text-[11px] text-white/80">{brand.tagline}</p>
              </div>
              <div className="px-5 py-4">
                <div className="grid gap-3">
                  {featureRows.map((row) => (
                    <div key={`${brand.key}-${row.label}`}>
                      <p className="text-[11px] text-gray-500">{row.label}</p>
                      <p className="text-sm font-semibold text-gray-800 leading-snug">
                        {row[brand.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Variant C: Grid that collapses into stacked rows (keeps a “table feel” without horizontal scroll)
// - Desktop: 4 columns (label + 3 brands)
// - Mobile: each feature becomes a 2x2-ish grid: label full width, then 3 values stacked with mini headers
const VariantC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <VariantTitle
          label="案C: “表っぽさ”を維持するレスポンシブグリッド"
          note="PCは表。スマホは項目ごとにブロック化して、各セルに小見出しを付ける。比較の視線移動が少ない。"
        />

        <div className="rounded-3xl border border-parfait-blue/15 bg-white shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-4">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-100 text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              項目
            </div>
            {brandColumns.map((brand) => (
              <div
                key={brand.key}
                className={`px-5 py-4 border-b border-gray-100 ${brand.headerClass}`}
              >
                <div className="text-sm font-bold">{brand.label}</div>
                <div className="text-[11px] text-white/80">{brand.tagline}</div>
              </div>
            ))}
          </div>

          <div className="divide-y divide-gray-100">
            {featureRows.map((row) => (
              <div key={row.label} className="p-5 md:p-0">
                <div className="md:hidden mb-3">
                  <p className="text-sm font-bold text-gray-900">{row.label}</p>
                </div>

                <div className="md:grid md:grid-cols-4">
                  <div className="hidden md:block px-5 py-5 bg-parfait-blue/5 text-sm font-bold text-gray-800">
                    {row.label}
                  </div>

                  {brandColumns.map((brand) => (
                    <div
                      key={`${row.label}-${brand.key}`}
                      className="md:px-5 md:py-5"
                    >
                      <div className="md:hidden mb-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${brand.headerClass}`}
                        >
                          {brand.label}
                        </span>
                      </div>
                      <div className="text-sm md:text-base text-gray-800 leading-relaxed">
                        {row[brand.key]}
                      </div>
                      <div className="md:hidden h-px bg-gray-100 my-3 last:hidden" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Variant D: Labriller-first emphasis (anchor brand) + competitors as secondary rows per feature
const VariantD = () => {
  const hero = brandColumns[0];
  const others = brandColumns.slice(1);

  return (
    <section className="bg-parfait-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <VariantTitle
          label="案D: ラブリエ主役（比較の結論が速い）"
          note="各項目でまずラブリエを強調表示し、その下に他2つを控えめに並べる。CV寄りの比較。"
        />

        <div className="grid gap-4 md:gap-6">
          {featureRows.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-parfait-blue/15 bg-white shadow-sm overflow-hidden"
            >
              <div className="px-5 py-4 bg-parfait-blue/5 flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-gray-900 tracking-wide">
                  {row.label}
                </p>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
                  focus
                </span>
              </div>

              <div className="px-5 py-4">
                <div className="rounded-xl p-4 border border-parfait-blue/20 bg-[#E8F7F7]">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${hero.headerClass}`}
                    >
                      {hero.label}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {hero.tagline}
                    </span>
                  </div>
                  <div className="mt-3 text-base font-semibold text-gray-900 leading-relaxed">
                    {row[hero.key]}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {others.map((brand) => (
                    <div
                      key={`${row.label}-${brand.key}`}
                      className="rounded-xl p-4 border border-gray-100 bg-white"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${brand.headerClass}`}
                        >
                          {brand.label}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {brand.tagline}
                        </span>
                      </div>
                      <div className="mt-3 text-sm md:text-base font-semibold text-gray-800 leading-relaxed">
                        {row[brand.key]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ComparisonVariantsPage() {
  return (
    <main className="min-h-screen bg-parfait-white">
      <PageHeader />

      <div className="pb-20 space-y-16">
        <VariantA />
        <VariantC />
        <VariantD />
        <VariantB />
      </div>
    </main>
  );
}


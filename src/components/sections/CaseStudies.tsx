import { TitleBand } from "@/components/ui/TitleBand";
import { cases, type CaseItem } from "@/content/cases";
import Image from "next/image";

const CaseCard = ({ item }: { item: CaseItem }) => {
  return (
    <div className="group w-full">
      {/* カテゴリラベル - Pattern 3: Editorial Vertical */}
      <div className="flex items-center gap-3 mb-4 px-1">
        <div className="w-0.5 h-[19px] bg-[#3BADB0]" />
        <span className="text-[17px] font-bold tracking-wider text-[#3BADB0] uppercase leading-none">
          {item.category}
        </span>
      </div>

      {/* Before / After 写真エリア */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
        {/* Before */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
          <div
            className="relative w-full"
            style={{ aspectRatio: item.aspectRatio ?? "3/2" }}
          >
            <Image
              src={item.imageBefore}
              alt={`${item.category} Before`}
              fill
              className="object-cover"
              style={{ objectPosition: item.positionBefore ?? "center" }}
            />
          </div>
          {/* before ラベル - よりコンパクトなデザインに */}
          <div className="absolute top-2 left-2 flex items-center bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
            <span className="text-white text-[8px] md:text-[9px] font-bold tracking-[0.15em] uppercase">before</span>
          </div>
        </div>

        {/* After */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
          <div
            className="relative w-full"
            style={{ aspectRatio: item.aspectRatio ?? "3/2" }}
          >
            <Image
              src={item.imageAfter}
              alt={`${item.category} After`}
              fill
              className="object-cover"
              style={{ objectPosition: item.positionAfter ?? "center" }}
            />
          </div>
          {/* after ラベル — コンパクトな浮遊デザイン */}
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-[#3BADB0]/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 shadow-sm">
            <span className="text-white text-[8px] md:text-[9px] font-bold tracking-[0.15em] uppercase">after</span>
            <span className="text-white/90 text-[8px] md:text-[9px]">✦</span>
          </div>
        </div>
      </div>

      {/* テキスト説明 */}
      <div className="px-1">
        <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm md:text-base font-bold text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export const CaseStudies = () => {
  return (
    <section className="bg-transparent" id="cases">
      <TitleBand en="CASE STUDIES" ja="症例紹介" />

      {/* Cases Grid */}
      <div className="section-py container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20">
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

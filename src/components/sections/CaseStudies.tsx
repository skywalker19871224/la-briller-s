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
          {/* before ラベル - 左端へ移動 */}
          <div className="absolute top-3 left-0 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-r-full">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">before</span>
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
          {/* after ラベル — サイトカラー水色 */}
          <div className="absolute top-3 left-0 flex items-center gap-1.5 bg-[#3BADB0] px-2.5 py-1 rounded-r-full">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">after</span>
            <span className="text-white/80 text-[9px]">✦</span>
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
    <section className="bg-white" id="cases">
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

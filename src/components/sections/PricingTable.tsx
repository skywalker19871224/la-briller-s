import { TitleBand } from "@/components/ui/TitleBand";
import { pricingRows } from "@/content/pricing";

export const PricingTable = () => {
  return (
    <section className="bg-transparent" id="pricing">
      <TitleBand en="Pricing" ja="料金表" />

      <div className="section-py container mx-auto px-4 md:px-6 max-w-4xl relative">
        {/* Decorative Background Glow for the table area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gold/5 blur-[80px] rounded-full pointer-events-none -z-10 md:hidden" />

        <div className="overflow-hidden rounded-2xl border border-parfait-blue/20 bg-white/80 backdrop-blur-sm shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)]">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-parfait-blue text-white">
                <th className="w-1/2 px-3 md:px-6 py-4 md:py-5 text-center text-sm md:text-base font-bold tracking-wider">
                  施術
                </th>
                <th className="w-1/2 px-3 md:px-6 py-4 md:py-5 text-center text-sm md:text-base font-bold tracking-wider border-l border-white/20">
                  料金
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => {
                // 価格文字列をパースして、税込表示などを分離する
                const priceMatch = row.price.match(/^(¥?[\d,]+)(.*)$/);
                const mainPrice = priceMatch ? priceMatch[1].replace('¥', '') : row.price;
                const subPrice = priceMatch ? priceMatch[2] : "";

                return (
                  <tr key={row.label} className="border-t border-parfait-blue/10 group hover:bg-parfait-blue/[0.02] transition-colors">
                    <td className="px-3 md:px-6 py-5 md:py-6 text-center">
                      <div className="text-sm md:text-base font-bold text-gray-800 leading-tight">
                        {row.label}
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-5 md:py-6 text-center border-l border-parfait-blue/10">
                      <div className="inline-flex flex-col items-center">
                        <div className="text-base md:text-lg font-black text-gray-900 tracking-tight">
                          <span className="text-[10px] md:text-xs font-medium mr-0.5">¥</span>
                          {mainPrice}
                        </div>
                        {subPrice && (
                          <div className="text-[9px] md:text-[10px] text-gray-500 font-medium mt-0.5 opacity-80">
                            {subPrice}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-[10px] md:text-xs text-gray-500 text-center leading-relaxed">
          ※セラミック治療は自由診療で、健康保険の適用外となります。
        </p>
      </div>
    </section>
  );
};

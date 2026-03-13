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
              {pricingRows.map((row) => (
                <tr key={row.label} className="border-t border-parfait-blue/10">
                  <td className="px-3 md:px-6 py-6 md:py-6 text-center text-base md:text-lg font-bold text-gray-800 leading-tight">
                    {row.label}
                  </td>
                  <td className="px-3 md:px-6 py-6 md:py-6 text-center text-base md:text-lg font-bold text-gray-800 border-l border-parfait-blue/10 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-normal mr-0.5">¥</span>
                    {row.price.replace('¥', '')}
                  </td>
                </tr>
              ))}
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

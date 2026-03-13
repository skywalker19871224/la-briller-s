import { TitleBand } from "@/components/ui/TitleBand";
import { pricingRows } from "@/content/pricing";

export const PricingTable = () => {
  return (
    <section className="bg-parfait-white" id="pricing">
      <TitleBand en="Pricing" ja="料金表" />

      <div className="section-py container mx-auto px-6 max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-parfait-blue/25 bg-white shadow-sm">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-parfait-blue text-white">
                <th className="w-1/2 px-4 md:px-6 py-4 md:py-5 text-center text-sm md:text-base font-bold tracking-wider">
                  施術
                </th>
                <th className="w-1/2 px-4 md:px-6 py-4 md:py-5 text-center text-sm md:text-base font-bold tracking-wider border-l border-white/30">
                  料金
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.label} className="border-t border-parfait-blue/20">
                  <td className="px-4 md:px-6 py-5 md:py-6 text-center text-base md:text-lg font-semibold text-gray-800 whitespace-normal break-words">
                    {row.label}
                  </td>
                  <td className="px-4 md:px-6 py-5 md:py-6 text-center text-base md:text-lg font-semibold text-gray-800 border-l border-parfait-blue/20 whitespace-nowrap">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-[10px] md:text-xs text-gray-400 text-center leading-relaxed">
          ※セラミック治療は自由診療で、健康保険の適用外となります。
        </p>
      </div>
    </section>
  );
};

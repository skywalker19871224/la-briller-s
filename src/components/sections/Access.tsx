import React from 'react';

export const Access = () => {
    return (
        <section className="bg-[#E6EDF2] py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <img
                        src="/assets/images/prfaitclinic_logo_yoko2-2.webp"
                        alt="Parfait Clinic Logo"
                        className="h-20 md:h-32 object-contain"
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-start mt-8">

                    {/* Left Column: Table + Info */}
                    <div className="w-full lg:w-1/2">

                        {/* Schedule Table */}
                        <div className="overflow-x-auto shadow-sm shadow-black/5 rounded-sm">
                            <table className="w-full text-center border-collapse bg-white" style={{ minWidth: '320px' }}>
                                <thead>
                                    <tr className="bg-[#88AFC6] text-gray-800 font-medium">
                                        <th className="px-2 py-2 border-r border-white/50 text-xs md:text-sm whitespace-nowrap">時間</th>
                                        <th className="px-2 py-2 border-r border-white/50 text-xs md:text-sm">月</th>
                                        <th className="px-2 py-2 border-r border-white/50 text-xs md:text-sm">火</th>
                                        <th className="px-2 py-2 border-r border-white/50 text-xs md:text-sm">水</th>
                                        <th className="px-2 py-2 border-r border-white/50 text-xs md:text-sm">木</th>
                                        <th className="px-2 py-2 border-r border-white/50 text-xs md:text-sm">金</th>
                                        <th className="px-2 py-2 border-r border-white/50 text-xs md:text-sm">土</th>
                                        <th className="px-2 py-2 text-xs md:text-sm">日</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-800">
                                    <tr className="border-b border-gray-100">
                                        <td className="px-2 py-2 border-r border-gray-100 text-[11px] md:text-sm whitespace-nowrap text-gray-600">9:00–13:00</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 text-xs md:text-sm text-gray-400">休</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-2 py-2 border-r border-gray-100 text-[11px] md:text-sm whitespace-nowrap text-gray-600">14:30–20:00</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm text-gray-400">–</td>
                                        <td className="px-2 py-2 text-xs md:text-sm text-gray-400">休</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 border-r border-gray-100 text-[11px] md:text-sm whitespace-nowrap text-gray-600">14:00–18:00</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm text-gray-400">–</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm text-gray-400">–</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm text-gray-400">–</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm text-gray-400">–</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm text-gray-400">–</td>
                                        <td className="px-2 py-2 border-r border-gray-100 text-xs md:text-sm">●</td>
                                        <td className="px-2 py-2 text-xs md:text-sm text-gray-400">休</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Clinic Info */}
                        <div className="mt-8 text-center lg:text-left text-gray-800 space-y-3">
                            <h3 className="text-lg md:text-2xl font-bold tracking-wide leading-snug">
                                パルフェクリニック<br className="md:hidden" />・医科歯科
                            </h3>
                            <p className="text-xs md:text-sm text-gray-500 tracking-wide">
                                医科 ／ 歯科 ／ 矯正歯科 ／ 口腔外科 ／ 小児歯科
                            </p>
                            <div className="pt-2 space-y-1 text-sm md:text-base text-gray-700 leading-relaxed">
                                <p>〒107-0061 東京都港区北青山3丁目11番7号 Aoビル3F</p>
                                <p className="text-xs md:text-sm text-gray-500">
                                    東京メトロ銀座線・半蔵門線・千代田線「表参道駅」B2出口より徒歩1分
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-[420px] shadow-md border-4 border-white rounded-sm overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3241.5!2d139.710655!3d35.663812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5a6e0b0001%3A0x3059b3f3b1e0a5f0!2z44OR44Or44OV44Kn44Kv44Oq44OL44OD44Kv44O75Yy756eR5q2v56eR!5e0!3m2!1sja!2sJP!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="パルフェクリニック・医科歯科 地図"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

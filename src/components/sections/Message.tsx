import { Card, CardContent } from "@/components/ui/card";

export const Message = () => {
    return (
        <section className="py-32 bg-parfait-white border-y border-gold/10">
            <div className="container mx-auto px-6">
                <Card className="rounded-none border-none shadow-none bg-transparent overflow-hidden">
                    <CardContent className="p-0 flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 aspect-square bg-slate-200">
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                                [ doctor_image.webp ]
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="h-[1px] w-8 bg-gold" />
                                <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase italic">Produce Philosophy</span>
                            </div>
                            <h2 className="text-4xl font-serif mb-8 italic">「妥協しない。それがパルフェの矜持です」</h2>
                            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                                <p>
                                    私たちがLa Brillerをプロジェクトのパートナーに選んだ理由はただ一つ、その「狂気的とも言える技術への執着」です。
                                </p>
                                <p>
                                    審美歯科において、0.1mmの差は天と地の差を生みます。La Brillerが持つ世界最高峰の技術を、パルフェクリニックの最高のホスピタリティに乗せて皆様にお届けします。
                                </p>
                                <p className="pt-4 text-foreground font-serif text-xl">
                                    パルフェクリニック 総院長<br />
                                    <span className="text-sm text-gold tracking-widest mt-1 block">DR. PHILOSOPHY</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

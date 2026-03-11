import Link from "next/link";

const sections = [
    { id: "helo", name: "Hero Section", note: "最新のキャッチコピーとグラスモルフィズムボタンの適用済み" },
    { id: "brand-message", name: "Brand Message", note: "両ブランドの信頼性を伝えるミニマルなメッセージ" },
    { id: "merits", name: "Merits Section", note: "ゴシック体への変更とスクロールアニメーションの調整済み" },
    { id: "instagram", name: "Instagram Section", note: "下部余白の削減と詳細ページへの導線確保" },
    { id: "qa", name: "QA Section", note: "コンバージョンに向けた不安解消項目" },
    { id: "clinic-gallery", name: "Clinic Gallery", note: "iPhoneでも滑らかなループを実現するAntigravity Gallery" },
    { id: "access", name: "Access Section", note: "アイシーブルーの背景と正統なロゴ配置の完了" },
];

export default function TestIndex() {
    return (
        <div className="min-h-screen bg-slate-50 p-8 font-sans">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12 border-b border-slate-200 pb-6">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Developer Index</h1>
                    <p className="text-slate-500 text-sm">各セクションの単体プレビューと実装メモ</p>
                </header>

                <nav className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                        <Link
                            href="/"
                            className="text-sm font-medium text-parfait-blue hover:underline flex items-center gap-2"
                        >
                            ← 本番ページ全体を見る
                        </Link>
                    </div>

                    <ul className="grid gap-4">
                        {sections.map((section) => (
                            <li key={section.id} className="group">
                                <Link href={`/test/${section.id}`}>
                                    <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-parfait-blue transition-all duration-200">
                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-lg font-bold text-slate-800 group-hover:text-parfait-blue">
                                                {section.name}
                                            </h2>
                                            <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded">
                                                /test/{section.id}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {section.note}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <footer className="mt-20 pt-8 border-t border-slate-200 text-center">
                    <p className="text-xs text-slate-400">Produced by Antigravity AI Engineer</p>
                </footer>
            </div>
        </div>
    );
}

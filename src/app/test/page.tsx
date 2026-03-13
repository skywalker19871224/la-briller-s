"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Edit2, 
  Check, 
  RotateCcw, 
  Copy, 
  ExternalLink, 
  GripVertical,
  Trash2,
  Plus
} from "lucide-react";
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// デフォルト設定
const DEFAULT_SECTIONS = [
  { id: "helo", name: "hero = ヒーローセクション", note: "最新のキャッチコピーとグラスモルフィズムボタン" },
  { id: "brand-message", name: "brand-message = ブランドメッセージ", note: "両ブランドの信頼性を伝えるミニマルなメッセージ" },
  { id: "what-is-labriller", name: "what-is-labriller = ラブリエとは", note: "赤字の強調コピー「世界最薄ジルコニアベニア」" },
  { id: "merits", name: "merits = メリット", note: "ジルコニアベニアの強度や削らない利点" },
  { id: "comparison-table", name: "comparison-table = 比較表", note: "他治療との比較テーブル（新規追加）" },
  { id: "instagram", name: "instagram = 症例", note: "Instagramと連動した症例グリッド" },
  { id: "flow", name: "flow = 治療の流れ", note: "ステップ1〜の流れ（新規追加）" },
  { id: "qa", name: "qa = よくある質問", note: "「ラブリエ」専用のQ&A（更新済み）" },
  { id: "clinic-gallery", name: "clinic-gallery = クリニックギャラリー", note: "院内風景のオートスルーギャラリー" },
  { id: "access", name: "access = アクセス・医院案内", note: "アイシーブルーの背景と地図・診療時間" },
];

// 個別の並び替え可能アイテムコンポーネント
const SortableItem = ({ section, editingId, setEditingId, handleRename, itemsCount }: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 0,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className={`group bg-white border border-slate-200 rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300 relative ${isDragging ? 'shadow-2xl ring-2 ring-blue-400' : ''}`}
    >
      <div className="flex items-center gap-3">
        {/* ドラッグハンドル */}
        <div 
          {...attributes} 
          {...listeners} 
          className="cursor-grab active:cursor-grabbing p-1 text-slate-300 hover:text-slate-600 transition-colors"
        >
          <GripVertical size={20} />
        </div>

        <div className="flex-1 flex items-center justify-between min-w-0">
          <div className="flex-1 min-w-0 mr-4">
            {editingId === section.id ? (
              <div className="flex items-center gap-2">
                <input 
                  autoFocus
                  className="text-sm font-bold text-slate-800 border-b border-blue-500 bg-blue-50/50 px-2 py-1 outline-none w-full max-w-md"
                  value={section.name}
                  onChange={(e) => handleRename(section.id, e.target.value)}
                  onBlur={() => setEditingId(null)}
                  onKeyDown={(e) => e.key === 'Enter' && setEditingId(null)}
                />
                <button onClick={() => setEditingId(null)} className="text-blue-500">
                  <Check size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setEditingId(section.id)}>
                <h2 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 truncate">
                  {section.name}
                </h2>
                <Edit2 size={12} className="text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">ID: {section.id}</span>
              <span className="text-[8px] text-slate-300">|</span>
              <span className="text-[8px] text-slate-400 truncate max-w-[200px]">{section.note}</span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <Link 
              href={`/test/${section.id}`}
              className="text-[9px] font-black tracking-widest uppercase bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-400 px-3 py-1.5 rounded-lg border border-slate-100 transition-all flex items-center gap-1.5"
            >
              Preview
              <ExternalLink size={10} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestIndex() {
    const [sections, setSections] = useState(DEFAULT_SECTIONS);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    // DND用のセンサー設定
    const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 5, // 5px動かしたらドラッグ開始
        },
      }),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );

    // マウント時にLocalStorageから読み込み
    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("labriller-sections-v3");
        if (saved) {
            try {
                setSections(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load sections", e);
            }
        }
    }, []);

    const [syncing, setSyncing] = useState(false);

    // デバイスのディスク（ファイル）に同期
    const syncToDisk = async (data: typeof sections) => {
        setSyncing(true);
        try {
            await fetch('/api/sync-config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    updatedAt: new Date().toISOString(),
                    sections: data
                }),
            });
        } catch (e) {
            console.error("Sync to disk failed", e);
        } finally {
            setTimeout(() => setSyncing(false), 800);
        }
    };

    const saveToLocal = (newSections: typeof sections) => {
        setSections(newSections);
        localStorage.setItem("labriller-sections-v3", JSON.stringify(newSections));
        syncToDisk(newSections); // ファイルにも保存
    };

    const handleRename = (id: string, newName: string) => {
        const updated = sections.map(s => s.id === id ? { ...s, name: newName } : s);
        saveToLocal(updated);
    };

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;
      
      if (over && active.id !== over.id) {
        setSections((items) => {
          const oldIndex = items.findIndex(i => i.id === active.id);
          const newIndex = items.findIndex(i => i.id === over.id);
          const newOrder = arrayMove(items, oldIndex, newIndex);
          localStorage.setItem("labriller-sections-v3", JSON.stringify(newOrder));
          syncToDisk(newOrder); // ドラッグ終了時にファイルへ保存
          return newOrder;
        });
      }
    };

    const resetDefaults = () => {
        if (confirm("並び順と名称を初期設定に戻しますか？")) {
            saveToLocal(DEFAULT_SECTIONS);
        }
    };

    const copyFinalConfig = () => {
        const config = {
          order: sections.map(s => s.id),
          labels: sections.reduce((acc, s) => ({ ...acc, [s.id]: s.name }), {})
        };
        const code = `// 最新の構成指示\nconst order = ${JSON.stringify(config.order, null, 2)};\nconst labels = ${JSON.stringify(config.labels, null, 2)};`;
        navigator.clipboard.writeText(code);
        alert("構成プラン（並び順 ＋ 名称）をコピーしました！Antigravityに貼り付けて「この順番と名前でページを再構成して」と送ってください。");
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#FDFDFD] p-4 md:p-8 font-sans text-slate-900 selection:bg-blue-100">
            <div className="max-w-3xl mx-auto">
                <header className="mb-8 flex items-end justify-between border-b border-slate-100 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                             <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                                <span className="text-white text-[10px] font-black italic">L</span>
                             </div>
                             <h1 className="text-xl font-black italic tracking-tight">Configuration Builder</h1>
                             {syncing && (
                                <span className="bg-green-500 w-2 h-2 rounded-full animate-ping ml-2" />
                             )}
                        </div>
                        <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">Drag to reorder / Click to rename</p>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={resetDefaults}
                            className="p-2 text-slate-300 hover:text-slate-500 hover:bg-slate-50 rounded-lg transition-all"
                            title="リセット"
                        >
                            <RotateCcw size={16} />
                        </button>
                        <button 
                            onClick={copyFinalConfig}
                            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-[9px] font-black hover:bg-slate-800 transition-all shadow-md active:scale-95"
                        >
                            <Copy size={12} />
                            構成をコピー
                        </button>
                    </div>
                </header>

                <nav className="space-y-3">
                    <div className="flex justify-between items-center px-1 mb-4">
                        <Link 
                            href="/" 
                            className="text-[9px] font-black text-slate-300 hover:text-slate-900 transition-colors flex items-center gap-1.5 uppercase tracking-[0.2em]"
                        >
                            <ExternalLink size={10} />
                            View Site
                        </Link>
                        <span className="text-[8px] text-slate-200 font-bold uppercase tracking-widest">
                            Local Editor v3.0
                        </span>
                    </div>

                    <DndContext 
                      sensors={sensors}
                      collisionDetection={closestCenter}
                      onDragEnd={handleDragEnd}
                    >
                      <SortableContext 
                        items={sections.map(s => s.id)}
                        strategy={verticalListSortingStrategy}
                      >
                        <div className="space-y-2">
                          {sections.map((section) => (
                            <SortableItem 
                              key={section.id} 
                              section={section}
                              editingId={editingId}
                              setEditingId={setEditingId}
                              handleRename={handleRename}
                              itemsCount={sections.length}
                            />
                          ))}
                        </div>
                      </SortableContext>
                    </DndContext>
                </nav>

                <div className="mt-12 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Usage Tip</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    並び順を入れ替えてから「構成をコピー」し、そのまま私に送信してください。<br />
                    その順番通りに本番ページ（page.tsx）のセクションを再配置します。
                  </p>
                </div>
            </div>
        </div>
    );
}

export type CaseItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  positionBefore?: string;
  positionAfter?: string;
  aspectRatio?: string;
};

export const cases: CaseItem[] = [
  {
    id: "case1",
    category: "歯の隙間",
    title: "すきっ歯・ブラックトライアングルの改善",
    description:
      "前歯の目立つ隙間を、歯を削らずにラブリエチップで自然に埋めました。短期間でスマイルラインが整い、口元の印象が大きく変わります。",
    imageBefore: "/images/cases/case1-before.webp",
    imageAfter: "/images/cases/case1-after.webp",
    positionBefore: "center 40%",
    positionAfter: "center 40%",
    aspectRatio: "3/2",
  },
  {
    id: "case2",
    category: "歯の色調",
    title: "黄ばみ・変色歯のトーンアップ",
    description:
      "ホワイトニングでは改善が難しい強い黄ばみや変色を、極薄チップでカバー。天然歯のような透明感のある理想の白さを実現しました。",
    imageBefore: "/images/cases/case2-before.webp",
    imageAfter: "/images/cases/case2-after.webp",
    positionBefore: "center 45%",
    positionAfter: "center 45%",
    aspectRatio: "3/2",
  },
  {
    id: "case3",
    category: "歯肉の悩み",
    title: "歯肉退縮による隙間の解消",
    description:
      "歯槽膿漏の影響や加齢で広がってしまった歯の根元の隙間を、自歯を削ることなく整えました。健康的で若々しい、自信の持てる笑顔へ導きます。",
    imageBefore: "/images/cases/case3-before.webp",
    imageAfter: "/images/cases/case3-after.webp",
    positionBefore: "center center",
    positionAfter: "center center",
    aspectRatio: "3/2",
  },
  {
    id: "case4",
    category: "歯の長さ",
    title: "不揃いな歯並び・スマイルラインの構築",
    description:
      "欠けたり磨り減って短くなった歯の長さを微調整し、左右対称で美しい並びを再現。顔立ちまで華やかに見える理想のボリュームを叶えました。",
    imageBefore: "/images/cases/case4-before.webp",
    imageAfter: "/images/cases/case4-after.webp",
    positionBefore: "center 42%",
    positionAfter: "center 42%",
    aspectRatio: "3/2",
  },
];

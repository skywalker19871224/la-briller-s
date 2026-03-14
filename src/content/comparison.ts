export const brandColumns = [
  {
    key: "labriller",
    label: "ラブリエ",
    headerClass: "bg-[#3BADB0] text-white",
    tagline: "極薄・削らない",
    cellClass: "bg-[#E8F7F7] text-gray-900",
  },
  {
    key: "super",
    label: "スーパーエナメル",
    headerClass: "bg-gray-100 text-gray-500",
    tagline: "高強度・審美",
    cellClass: "bg-white text-gray-900",
  },
  {
    key: "conventional",
    label: "従来のラミネートベニア",
    headerClass: "bg-gray-100 text-gray-500",
    tagline: "削る・重厚",
    cellClass: "bg-white text-gray-900",
  },
] as const;

export type BrandKey = (typeof brandColumns)[number]["key"];

export type FeatureRow = {
  label: string;
} & Record<BrandKey, string>;

export const featureRows: FeatureRow[] = [
  {
    label: "厚み",
    labriller: "約0.04〜0.08mm",
    super: "約0.1〜0.5mm",
    conventional: "約0.5〜0.8mm",
  },
  {
    label: "見た目",
    labriller: "究極の自然（0.04mm）",
    super: "自然（やや厚みあり）",
    conventional: "人工的な厚み",
  },
  {
    label: "強度",
    labriller: "強い（〜1000MPa）人の歯",
    super: "強い（約360〜600MPa）",
    conventional: "やや弱い（約100〜160MPa）",
  },
  {
    label: "歯を削る量",
    labriller: "削らない",
    super: "削らない",
    conventional: "表面を削る",
  },
  {
    label: "治療回数",
    labriller: "約2回",
    super: "2〜3回",
    conventional: "2〜3回",
  },
  {
    label: "麻酔",
    labriller: "完全不要",
    super: "ほぼ不要",
    conventional: "必要",
  },
  {
    label: "元の歯への復元",
    labriller: "可能",
    super: "可能",
    conventional: "難しい",
  },
];

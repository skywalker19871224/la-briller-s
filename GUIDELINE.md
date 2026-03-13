# La Briller 開発ガイドライン (Agent用)

このドキュメントは、複数のエージェントが並行してセクション開発を行うための共通ルールです。
開発を開始する前に必ずこの内容を理解し、遵守してください。

## 🏛 基本方針
- **静的サイト書き出し (Static Export)**: `output: 'export'` 設定のため、サーバーサイド機能（`getServerSideProps`、API Routeなど）は使用禁止です。
- **モバイルファースト**: モバイルでのスクロール量と視認性を最優先します。

## 🎨 デザインシステム
既存の `tailwind.config.ts` に定義されたブランドカラーを必ず使用してください。

### カラーパレット
- **メイン**: `bg-parfait-blue` (#7aaec8) - ブランドリボン、アクセント用
- **背景**: `bg-parfait-white` (#FCFCFC) - ページ全体の基本背景
- **テキスト**: 主に `text-gray-800` (本文), `text-gray-900` (見出し)
- **アクセント**: `text-gold` (#D4AF37) - プレミアム感の演出用

### セクションの共通ルール
- **垂直余白 (Padding)**: 
  - モバイル: `py-12` 〜 `py-16`
  - デスクトップ: `py-20` 〜 `py-24`
- **境界線**: セクションの区切りには `border-t border-gray-100` を推奨。
- **見出しスタイル**: 
  - `font-serif` (明朝体系) を見出しに使用し、高級感を出す。
  - 必要に応じて「ブランドリボン（水色のタイトル帯）」を使用する。

## 📂 ファイル操作・命名規則
- **セクションファイル**: `src/components/sections/[SectionName].tsx`
- **画像アセット**: 
  - `public/assets/images/[section-name]-[image-name].png`
  - 他のセクションと競合しないよう、必ずセクション名をプレフィックスに付ける。
- **画像生成**: `generate_image` ツールを使用し、プロンプトには "High-end", "Luxury", "Minimalist", "Professional lighting" などのキーワードを添えること。

## ⚠️ 競合回避ルール (重要)
1. **`src/app/page.tsx` の編集**:
   - インポートと配置は、他のエージェントとの衝突を避けるため、慎重に行うこと。
   - 変更前に必ず `view_file` で最新の状態を確認すること。
2. **Shadcn UI の追加**:
   - `npx shadcn-ui@latest add [component]` を実行する際は、他のエージェントが同時に実行していないか注意する（不安な場合は実行前に確認）。
3. **グローバルCSS**:
   - `src/app/globals.css` への追記は原則禁止。ユーティリティクラスで対応すること。

## 🚀 デプロイ
- デプロイ先: Cloudflare Pages (`la-briller`)
- リポジトリ名: `la-briller`（`skywalker19871224/la-briller`）
- **本番ブランチ**: `main`（Cloudflareのプロダクション設定）
- 出力ディレクトリ: `out`
- コマンド: `npm run build && npx wrangler pages deploy out --project-name la-briller`
- **※ 開発中はローカル（localhost:3000）での確認を優先し、頻繁なデプロイは避けること。**

---
このガイドラインに従い、一貫性のあるプレミアムな体験を構築してください。

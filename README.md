# Parfait Clinic x La Briller: Celebrity Collaboration Project

**💎 [パルフェクリニック 公式サイト](https://parfait-clinic.com/)**

## 📑 LP構成案
本ランディングページは、以下の主要セクションで構成されています。

1. **Helo (題名: `Helo`)**
   - 「精密が描く、究極の美。」。セレブリティのための審美歯科を視覚的に訴求。
2. **Concept Statement (題名: `Brand Message`)**
   - 「美しさは、確かな信頼から生まれる。」。両ブランドが交わる意義をミニマルに宣言。
3. **The 6 Advantages (題名: `Merits`)**
   - 削らない、隙間補正、通院2回など、具体的メリットを和紙テクスチャ背景で提示。
4. **FAQ (題名: `QA`)**
   - 保証や痛みなど、コンバージョン直前の不安を解消するQ&A。
5. **Access & Information (題名: `Access`)**
   - 地図、住所、診療スケジュールなどの実務的な医院案内。

## 🌟 プロジェクト概要
本作は、**パルフェクリニック（母体）の公式ウェブサイト内における「特別ページ」**としてのランディングページ構築プロジェクトです。
パルフェクリニックのサイトトーンを完全に継承しつつ、同クリニックが技術パートナーとして迎え入れた「La Briller（ラブリエ）」を紹介する特設コンテンツとなります。

## 🏛 Parfait Clinic: Brand Identity & Tone
パルフェクリニックの「最高のおもてなし」と「完璧（Parfaite）」の追求をベースとします。
[Official Site: https://parfait-clinic.com/](https://parfait-clinic.com/)

### 最優先事項：サイトトーンの継承
このページはパルフェクリニックの一部であるため、**本家サイトの「ヘッダー」および「フッター」を完全に再現**し、ユーザーが「パルフェクリニックのサイト内にいる」という安心感を保てるようにします。

### 詳細カラーチャート (Official Theme)
- **Primary Blue (Logo/Nav):** `#7aaec8` (パルフェブルー。清潔感と信頼)
- **Light Background Blue:** `#E6F2F5` (セクション背景などで多用される淡い青)
- **Table Header Blue:** `#7EADC4` (診療時間表などのヘッダー色)
- **CTA Colors (Bottom Bar):**
  - 電話: `#2F5672` (Deep Blue)
  - 問い合わせ: `#333333` (Charcoal)
  - Web予約: `#C8461F` (Premium Orange)
  - LINE予約: `#3CB34A` (LINE Green)

### サイト要件：ナビゲーション構造
パルフェクリニック本家の構成を忠実に再現します。詳細は [parfait_menu_structure.md](./parfait_menu_structure.md) を参照。

- **グローバルナビ**: ホーム, 初診の方, 診療のご案内, 医院のご案内, 治療例, 歯科コラム, 料金表
- **ドロワーメニュー**: 上記メニューに加え、電話・WEB予約のCTAを内包
- **フッター**: リスクと副作用, 薬機法, プライバシーポリシーの法的リンクを配置

### 施設情報・アクセス
- **所在地:** 〒107-0061 東京都港区北青山3丁目11番7号 Aoビル3F
- **アクセス:** 東京メトロ銀座線/半蔵門線/千代田線「表参道駅」B2出口より徒歩1分
- **クリニックの特徴:** バリアフリー設計、完全個室診療室、医科歯科連携。

## 🎨 デザインコード (Visual Identity)

### 共通コンポーネント
- **Header:** パルフェクリニック本家のヘッダーを完全再現（ロゴ、ナビゲーション、予約ボタン等）。
- **Footer:** パルフェクリニック本家のフッターを完全再現。

### 特設コンテンツ領域 (La Briller Section)
- **Typography:** 
  - 見出し: 明朝体（Noto Serif JP） - パルフェの優雅さと信頼。
  - 本文: ゴシック体（Noto Sans JP） - ラブリエの精密さとテクノロジー。
- **Colors:**
  - `Parfait White` (#FCFCFC)
  - `Parfait Blue` (#7aaec8)
  - `La Briller Blue` (#005BAC)
  - `Champagne Gold` (#D4AF37)
- **Accents:** 大胆な余白（サヴィル・ロウの仕立て）、セクションを区切るゴールドの細線。

## 🛠 技術スタック (Tech Stack)
- **Framework:** Next.js 16 (App Router / Turbopack)
- **Core Library:** React 19
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn UI (Radix UI) & Custom Web Components (Vanilla JS)
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages (Wrangler / Auto Push)

## 📐 サイト構造 & ビジュアル計画 (Structure & Visuals)
- **Header & Footer:** パルフェクリニック本家のものを再現
- **Main Content (LP領域):**
  - `Hero Section`: `hero.jpg` (信頼感のある院内風景) 共同プロジェクト宣言
  - `Features`: `feature1.png` (最新設備), `feature2.png` (バリアフリー)
  - `Message`: 「なぜ、パルフェがラブリエを選んだのか」院長の想いを綴るセクション

## ⚡ 実行ルール (Execution Rules)
1. **完全自律:** 全てのファイル作成、フォルダ構築、`npm install` はユーザーの確認なしで実行。
2. **プレースホルダー戦略:** 画像ファイルが存在しない場合も、適切なサイズと `object-cover` を設定した `div` で代用。
3. **AI Bridge:** `alt` 属性には、後で画像生成AIで使うための詳細なビジュアル説明を記述。
4. **Git Workflow:** コーディング作業完了後、10回に1度の頻度でGitコミット＆GitHubプッシュを実行。

---
Produced by **Antigravity**

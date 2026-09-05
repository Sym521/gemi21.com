# AGENTS.md

このファイルは、このリポジトリで作業するコーディングエージェント向けの指示です。リポジトリ全体に適用します。より深い階層に別の `AGENTS.md` がある場合は、そちらの指示を優先してください。

## プロジェクト概要

- `gemi21.com` の個人サイト。Next.js App Router、React、TypeScript、Tailwind CSS を使用しています。
- ブログ記事は `post/*.mdx`、静的ファイルは `public/` に置きます。
- OpenNext を介して Cloudflare Workers にデプロイします。
- パッケージマネージャーは pnpm 11.x です。`pnpm-lock.yaml` を正として扱い、別形式のロックファイルを追加しないでください。

## 主なディレクトリ

- `app/`: ページ、レイアウト、Route Handler、ページ専用コンポーネント
- `app/_components/`: サイト内で使うコンポーネント
- `components/ui/`: 共通 UI コンポーネント
- `lib/`: API クライアントや共通ユーティリティ
- `post/`: MDX ブログ記事
- `public/`: 画像、アイコンなどの静的アセット

## 開発コマンド

```bash
pnpm dev              # Turbopack を使った開発サーバー
pnpm build            # 本番用 Next.js ビルド
pnpm lint             # app/ を Biome で検査・自動修正
pnpm format           # app/ を Biome で整形
pnpm check            # app/ を Biome で検査・自動修正
pnpm opennext:build   # Cloudflare 用ビルド
```

`lint`、`format`、`check` はファイルを書き換えるため、実行後は必ず差分を確認してください。`app/` 外の TypeScript/JavaScript を変更した場合は、必要に応じて `pnpm exec biome check <path>` で対象も検査してください。

## 実装方針

- TypeScript の strict 設定を維持し、安易に `any` や型チェックの抑制を追加しないでください。
- import では既存の `@/*` エイリアスを利用できます。
- App Router の Server Component を既定とし、状態、イベント、ブラウザー API が必要な場合だけ `"use client"` を追加してください。
- 既存のデザイン、レスポンシブ対応、フォント、Tailwind のユーティリティ構成に合わせてください。
- 共通化できる UI は既存コンポーネントを再利用し、ページ固有の小さな実装を過剰に抽象化しないでください。
- API Route では入力値と外部 API の失敗を処理し、秘密情報や外部 API の詳細なレスポンスをクライアントへ漏らさないでください。
- 既存ファイルの日本語テキストと改行コードを保持し、文字化けを起こす一括変換を避けてください。

## ブログ記事

- 新しい記事は `post/<slug>.mdx` として追加します。ファイル名が `/Blog/<slug>` の URL になります。
- 一覧表示のため、各記事から次の形の `postData` を export してください。

```tsx
export const postData = {
 title: "記事タイトル",
 description: "記事の概要",
 date: "YYYY/MM/DD",
};
```

- 記事内画像は `public/images/` に置き、MDX からは `/images/...` で参照してください。

## 環境変数とデプロイ

- `.env*`、トークン、資格情報をコミットしないでください。
- Spotify 連携では `SPOTIFY_CLIENT_ID`、`SPOTIFY_CLIENT_SECRET`、`SPOTIFY_REFRESH_TOKEN` を使用します。
- 認証では本番環境に `AUTH_SECRET` が必要です。開発用フォールバックを本番用の秘密情報として扱わないでください。
- Cloudflare の設定を変更するときは `wrangler.jsonc`、`open-next.config.ts`、`next.config.mjs` の整合性を保ってください。明示的な依頼なしにデプロイは実行しないでください。

## 検証と変更範囲

- 変更は依頼に必要な最小範囲に限定し、無関係な整形やリファクタリングを混ぜないでください。
- 最低限、変更箇所に対する Biome の検査を行ってください。ページ、ルーティング、設定、依存関係に影響する変更では `pnpm build` も実行してください。
- UI を変更した場合は、狭い画面と広い画面の両方で表示崩れや横スクロールがないことを確認してください。
- 現在、自動テスト用スクリプトはありません。テストを追加した場合は、実行方法も `package.json` とこのファイルに追記してください。
- ユーザーの既存変更を保持してください。破壊的な Git 操作や、依頼されていないファイルの削除は行わないでください。

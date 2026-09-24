# gemi21.com

Astro、React Islands、TypeScript、Tailwind CSSで構築し、Cloudflare Workersへデプロイする個人サイトです。Astroの開発・ビルド基盤にはViteを使用しています。

## 必要な環境

- Node.js 22.13以上
- pnpm 11.25.0（`package.json`の`packageManager`で固定）

```bash
corepack enable
pnpm install
```

## 開発と検証

```bash
pnpm dev       # Astro + Viteの開発サーバー
pnpm check     # Astroの型検査とBiome検査
pnpm build     # Cloudflare向け本番ビルド
pnpm preview   # 本番ビルドのローカル確認
```

開発サーバーは通常 [http://localhost:4321](http://localhost:4321) で起動します。

## コンテンツ

ブログ記事は`src/content/blog/<slug>.mdx`に置き、YAML frontmatterで`title`、`description`、`date`を指定します。静的アセットは`public/`に置きます。

## Cloudflare

Spotify連携には`SPOTIFY_CLIENT_ID`、`SPOTIFY_CLIENT_SECRET`、`SPOTIFY_REFRESH_TOKEN`が必要です。デプロイは、明示的に必要な場合のみ`pnpm deploy`で実行してください。

# Mehmet's Notes — Digital Garden

A personal digital garden for Mehmet Hekimoğlu, built with [Quartz v4](https://quartz.jzhao.xyz/).

Live at: **https://mehmethekim.github.io/blog**

## Local Development

```bash
npm install
npx quartz build --serve
```

Then open http://localhost:8080.

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions.

**One-time setup required:**
1. Go to repo Settings → Pages → set Source to **GitHub Actions**
2. Enable **Enforce HTTPS**

The site will be available at `https://mehmethekim.github.io/blog` automatically.

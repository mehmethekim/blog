# hekimoglu.io — Digital Garden

A personal digital garden for Mehmet Hekimoğlu, built with [Quartz v4](https://quartz.jzhao.xyz/).

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
2. Add custom domain `hekimoglu.io` in Settings → Pages → Custom domain
3. Enable **Enforce HTTPS** once GitHub verifies the domain
4. At your DNS registrar, add GitHub Pages A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

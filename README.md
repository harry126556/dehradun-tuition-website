# Aarohan Academy — Tuition Website Demo

A premium Next.js static website designed as a sales demo for tuition/coaching owners in Dehradun and nearby cities.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for Cloudflare

This project uses `output: "export"` in `next.config.mjs`, so it generates a static `out/` folder.

```bash
npm run build
```

### Cloudflare Pages via GitHub

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, connect the GitHub repo.
3. Framework preset: **Next.js (Static HTML Export)** if shown.
4. Build command: `npm run build`
5. Build output directory: `out`
6. Deploy.

## Customize for a client

The main page is `app/page.tsx`.
Change:
- Academy name
- Phone / Instagram
- Address
- Classes and subjects
- Testimonials
- Faculty name
- Hero copy

Replace the demo visual styling in `app/page.css` if you want to add real client photos.

## Important

This is a **sales demo**. Replace all sample claims, reviews, names, numbers and contact details before presenting it as a real academy website.
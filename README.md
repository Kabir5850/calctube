# Calctube — Free Online Calculator Hub

A fast, accurate, SEO/AEO-optimized calculator hub built with Astro + React.

**Live URL:** https://calctube.com (after deployment)

---

## What's in this repo

```
calctube/
├── public/                          # Static assets
│   ├── robots.txt                   # AI-bot allowed (GPTBot, PerplexityBot, etc.)
│   ├── favicon.svg
│   └── _headers                     # Cloudflare Pages security + cache headers
├── src/
│   ├── components/
│   │   ├── calculators/
│   │   │   └── MortgageCalculator.tsx   # ⭐ Working React calculator template
│   │   └── ui/
│   │       └── Breadcrumbs.astro
│   ├── layouts/
│   │   └── BaseLayout.astro         # Shared layout with full SEO/JSON-LD
│   ├── lib/
│   │   └── seo.ts                   # Schema builders (WebApp, FAQ, Breadcrumb, Org)
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── finance/
│   │   │   ├── index.astro          # Finance category landing
│   │   │   └── mortgage-calculator.astro   # ⭐ Working calculator page
│   │   └── legal/
│   │       ├── privacy.astro
│   │       ├── terms.astro
│   │       └── cookies.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs                 # Astro + Sitemap + Tailwind
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Local setup (one time)

### Prerequisites
- **Node.js 20+** — install from https://nodejs.org
- **pnpm** — install with `npm install -g pnpm` (faster than npm)
- A code editor (VS Code recommended) with Astro extension

### Install + run
```bash
cd "Claude Backend/calctube"
pnpm install
pnpm dev
```

Open http://localhost:4321 in your browser. You should see the homepage with a working
mortgage calculator at `/finance/mortgage-calculator/`.

---

## Deploy to Cloudflare Pages (production)

### Step 1: Register the domain
1. Go to https://dash.cloudflare.com → Domain Registration
2. Search `calctube.com`
3. Register (~$10.44/yr at-cost pricing)

### Step 2: Push the code to GitHub
```bash
cd "Claude Backend/calctube"
git init
git add .
git commit -m "Initial calctube setup"
gh repo create calctube --private --source=. --remote=origin --push
# OR manually create a repo on github.com and:
# git remote add origin https://github.com/YOUR-USERNAME/calctube.git
# git push -u origin main
```

### Step 3: Create the Cloudflare Pages project
1. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Authorize GitHub, select the `calctube` repo
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Environment variables (Production): `NODE_VERSION=20`
4. Click **Save and Deploy** — first build takes ~2 minutes

### Step 4: Connect the custom domain
1. In the Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `calctube.com` and `www.calctube.com`
3. Cloudflare auto-configures DNS — done in ~30 seconds

### Step 5: Enable IndexNow (critical for AEO)
1. Cloudflare Dashboard → Domain → **Crawler Hints** → **Enable**
2. This auto-pings Bing/Yandex IndexNow on every URL change — ChatGPT Search uses Bing's index, so this is the highest-leverage AEO step in 2026.

### Step 6: Submit to Search Console
1. **Google Search Console** — https://search.google.com/search-console
   - Add property `calctube.com` (Domain property, verify via DNS TXT)
   - Submit sitemap: `https://calctube.com/sitemap-index.xml`
2. **Bing Webmaster Tools** — https://www.bing.com/webmasters
   - Add site, verify via meta tag or DNS
   - Submit sitemap

### Step 7: Enable Cloudflare Web Analytics (free, cookieless)
1. Cloudflare Dashboard → **Analytics & Logs** → **Web Analytics** → **Add a site**
2. Add `calctube.com`, copy the beacon snippet
3. Paste the snippet into `src/layouts/BaseLayout.astro` `<head>` (before closing `</head>`)

### Step 8: Set up Google Analytics 4 (optional but recommended)
1. https://analytics.google.com → Create property → "calctube"
2. Copy the measurement ID (`G-XXXXXXXXXX`)
3. Add the GA4 snippet to `src/layouts/BaseLayout.astro`

### Step 9: Apply for AdSense (~week 3)
Once you have 20+ calculators live and ~500 visits/day:
1. https://www.google.com/adsense — apply
2. Add the AdSense snippet to `BaseLayout.astro`
3. Approval typically takes 1–2 weeks

---

## Adding a new calculator (template workflow)

To add a new calculator (e.g., loan calculator):

1. **Create the React component**: `src/components/calculators/LoanCalculator.tsx`
   - Use `MortgageCalculator.tsx` as a starting template
   - Calculation logic should be in a pure function above the component
   - Use `useMemo` for derived values

2. **Create the Astro page**: `src/pages/finance/loan-calculator.astro`
   - Use `mortgage-calculator.astro` as the template
   - Update the `meta`, `faqs`, `breadcrumbs`, and explainer content

3. **Add to category landing** in `src/pages/finance/index.astro`

4. **Add to homepage** in `src/pages/index.astro` if it's a top-tier calc

5. **Test locally**: `pnpm dev`

6. **Push to GitHub** → Cloudflare auto-deploys

---

## Content checklist for every new calculator page

- [ ] H1 with primary keyword + benefit
- [ ] 40–60 word "Quick answer" paragraph immediately under H1
- [ ] Calculator widget visible above-the-fold
- [ ] "How to use this calculator" section
- [ ] "How the math works" section with formula
- [ ] 1–3 worked examples with real numbers
- [ ] FAQ section (5–10 Q&As)
- [ ] "Related calculators" section with 4+ internal links
- [ ] `Last tested: YYYY-MM-DD` stamp visible
- [ ] All 4 JSON-LD blocks: WebApplication + FAQPage + BreadcrumbList + (Org from layout)
- [ ] Mobile-tested
- [ ] PageSpeed Insights score ≥ 90 mobile

---

## SEO/AEO checklist (one-time setup)

- [x] robots.txt allows GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended
- [x] Sitemap auto-generated via @astrojs/sitemap
- [x] Canonical URLs on every page
- [x] Open Graph + Twitter Card tags
- [x] JSON-LD: Organization, WebSite, BreadcrumbList, WebApplication, FAQPage
- [ ] Bing IndexNow enabled (Cloudflare Crawler Hints)
- [ ] Google Search Console verified + sitemap submitted
- [ ] Bing Webmaster Tools verified + sitemap submitted
- [ ] Wikidata entry for "Calctube" (do after launch)
- [ ] LinkedIn Organization page
- [ ] Crunchbase listing
- [ ] X/Twitter handle reserved
- [ ] Pinterest handle reserved

---

## Growth roadmap

| Phase | Timeline | Goal |
|---|---|---|
| Phase 1 | Months 1–3 | 30 calculators + 100 pages |
| Phase 2 | Months 4–6 | 200 pages + AdSense approved |
| Phase 3 | Months 7–9 | 300 pages + Mediavine eligible |
| Phase 4 | Months 10–12 | 500 pages + first $1k/mo |
| Phase 5 | Months 13–24 | 1,000+ pages + $10–50k/mo |

---

## Tech stack reference

- **Astro 5** — static site generation, near-zero JS
- **React 18** — for interactive calculators (islands)
- **Tailwind CSS 3** — utility-first styling
- **TypeScript** — type safety
- **Cloudflare Pages** — hosting (free, unlimited bandwidth)
- **Cloudflare Images** — image optimization (when needed)
- **PostHog / GA4** — analytics
- **Pagefind** — site search (add when 50+ calculators live)

---

## Support / contact

- Bug reports: bugs@calctube.com
- Feature requests: ideas@calctube.com
- General: hello@calctube.com

# DEZO | Commercial Website & Growth Suite

Full-stack clone and production-grade implementation of the **DEZO** website (`https://dezo.in`), engineered with modern React, TypeScript, Tailwind CSS, and a real-time HTTP/TLS probing engine.

- **Live URL**: [https://tarikk786786.github.io/dezo-website/](https://tarikk786786.github.io/dezo-website/)
- **GitHub Repository**: [https://github.com/tarikk786786/dezo-website](https://github.com/tarikk786786/dezo-website)

---

## 🚀 Features & Capabilities

### 1. **Complete Page Architecture**
- **Home (`/`)**: Hero section, live proof production client ticker, "Why We Exist", 5 capability cards (Build, Grow, Advertise, Sell, Brand), The DEZO Engine (8 connected steps interactive stepper), Selected Work previews, interactive "What are you trying to grow?" commercial stack selector, Operating Model 6 stages, transparent pricing tiers, and The DEZO Standard promise.
- **Growth Lab (`/growth-lab`, `/tools`, `/lab`)**: Dedicated diagnostic hub with all 11 tools and individual tool permalinks.
- **Services Hub (`/services`) & Detail Pages (`/services/:slug`)**:
  - `web-development`: Next.js & Shopify storefronts with sub-second LCP.
  - `growth-systems`: Server-Side CAPI, tracking pipelines, and attribution.
  - `seo`: Technical SEO, local search, schema graphs, and organic reach.
  - `branding`: Commercial positioning, visual identity, and packaging.
  - `amazon`: A9/A10 indexing, A+ content, Sponsored Ads, and Buy Box ops.
  - `flipkart`: Catalog completeness, F-Assured readiness, and PLA promotions.
  - `paid-ads`: Meta & Google Ads performance marketing.
  - `social`: Short-form video production and founder brand playbooks.
- **Work Archive (`/work`)**: Case study portfolio (Yasana Beauty Rituals, Shree Ayurved, The Paan Luxe, Sonvica Sarees, Nilkanth Paints, Great India Public School) with dynamic tag filtering.
- **Pricing (`/pricing`)**: START, GROW, SCALE, and CUSTOM transparent packages with deliverables and FAQs.
- **About (`/about`)**: Company story, Founder Tarik Islam, engineering philosophy, and studio location.
- **Standard (`/promise`)**: The DEZO Standard guarantee system.
- **Start a Project (`/start-a-project`)**: Multi-step project inquiry intake with WhatsApp prefilled direct communication.
- **Contact (`/contact`)**: Studio address, phone (+91 9114411026), email, and contact form.
- **Legal Compliance (`/privacy`, `/terms`, `/disclaimer`)**: Complete compliance documents.

---

### 2. **All 11 DEZO LAB Diagnostic Tools Included**
1. **SEO Audit** (`/tools/seo`): HTTP response status, canonical tags, title length checks, JSON-LD structured data, and robots meta.
2. **Page Speed** (`/tools/page-speed`): TTFB measurement via live probe, mobile viewport check, HTML payload sampling, and server stack detection.
3. **Accessibility** (`/tools/accessibility`): Document title announcement, viewport zoomability, contrast heuristics, and 44x44px touch targets.
4. **Shopify Audit** (`/tools/shopify`): Shopify header detection, checkout HTTPS trust, third-party script bloat risks, and CDN image optimization.
5. **Security & Headers** (`/tools/security`): TLS enforcement, Strict-Transport-Security (HSTS), Content-Security-Policy (CSP), X-Frame-Options clickjack protection, and MIME sniffing prevention.
6. **CRO Checklist** (`/tools/cro`): Cash on Delivery (COD) trust, pin-code delivery clarity, mobile sticky Add-to-Cart, and returns window exposure.
7. **Keyword Opportunity** (`/tools/keywords`): Seed search intent clustering, commercial modifier analysis, long-tail phrasing, and heuristic difficulty.
8. **Local SEO** (`/tools/local-seo`): Odisha & Indian city geo-keywords, NAP consistency review, and LocalBusiness JSON-LD schema verification.
9. **Brand Health** (`/tools/brand`): Domain consistency, channel pricing/creative parity, and verified social proof.
10. **Amazon Listing DEMO** (`/tools/amazon`): ASIN parser, 180-200 character title capacity check, and gallery depth targeting 7 images + video.
11. **Flipkart Catalog DEMO** (`/tools/flipkart`): Flipkart URL validation, F-Assured 2-day delivery eligibility check, and attribute completeness.

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Design Tokens (Warm `#F5F3EE` background, `#0B0B0A` text, `#B08D57` champagne gold accent)
- **Typography**: DM Sans (Sans), Instrument Serif (Display), JetBrains Mono (Monospace)
- **Icons**: Lucide Icons
- **Routing**: React Router DOM v7
- **Probe Backend**: Built-in Vite middleware plugin (`vite.config.ts`) for development + standalone Node server (`server.js`) for production.

---

## 💻 Running the Website

### Option 1: Double-Click Launcher (Recommended)
Double-click `Run-DezoWebsite.bat` in the root of `MY TOOLS`. It will automatically launch the server on `http://localhost:8000` and open your browser!

### Option 2: Development Mode (Hot Reload)
```bash
cd apps/dezo_website
npm run dev
```
Runs Vite on `http://localhost:5173`.

### Option 3: Production Server
```bash
cd apps/dezo_website
npm run build
npm start
```
Runs on `http://localhost:8000`.

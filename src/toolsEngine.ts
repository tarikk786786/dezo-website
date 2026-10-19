export type ToolKey = 
  | 'seo' 
  | 'page-speed' 
  | 'accessibility' 
  | 'shopify' 
  | 'security' 
  | 'cro' 
  | 'keywords' 
  | 'local-seo' 
  | 'brand' 
  | 'amazon' 
  | 'flipkart'
  | 'backlinks';

export interface ToolMeta {
  name: string;
  badge?: string;
  placeholder: string;
  example: string;
  description: string;
  subheading?: string;
}

export const TOOL_DEFINITIONS: Record<ToolKey, ToolMeta> = {
  seo: {
    name: "SEO Audit",
    placeholder: "Enter your website URL",
    example: "https://dezo.in",
    description: "Titles, indexing signals, and crawl basics from a public check.",
    subheading: "Index & crawl readiness"
  },
  'page-speed': {
    name: "Page Speed",
    placeholder: "Enter a page URL",
    example: "https://dezo.in",
    description: "Load signals: response time, page weight, and mobile basics.",
    subheading: "Core Web Vitals oriented"
  },
  accessibility: {
    name: "Accessibility",
    placeholder: "Enter website URL",
    example: "https://dezo.in",
    description: "Title, viewport, and accessibility cues for a follow-up review.",
    subheading: "WCAG-oriented checks"
  },
  shopify: {
    name: "Shopify Audit",
    placeholder: "Enter your store URL",
    example: "https://www.shopify.com",
    description: "Storefront health, HTTPS, and common storefront issues.",
    subheading: "Storefront health"
  },
  security: {
    name: "Security & Headers",
    placeholder: "Enter domain or URL",
    example: "https://dezo.in",
    description: "HTTPS and public security header checks — safe and anonymous.",
    subheading: "TLS & header posture"
  },
  cro: {
    name: "CRO Checklist",
    placeholder: "Enter store, product, or checkout URL",
    example: "https://example.com/cart",
    description: "Conversion basics: trust, shipping clarity, and mobile CTAs.",
    subheading: "Checkout trust & friction"
  },
  keywords: {
    name: "Keyword Opportunity",
    placeholder: "Enter a seed keyword (e.g. sambalpuri saree online)",
    example: "sambalpuri saree online",
    description: "India-intent clusters from your keyword — not Google Planner volumes.",
    subheading: "India intent clustering"
  },
  'local-seo': {
    name: "Local SEO",
    placeholder: "Business + city (e.g. dental clinic bhubaneswar)",
    example: "dental clinic bhubaneswar",
    description: "Local search readiness for Odisha and India businesses.",
    subheading: "Odisha & India local"
  },
  brand: {
    name: "Brand Health",
    placeholder: "Brand name or domain",
    example: "dezo.in",
    description: "Naming consistency and channel presence checks.",
    subheading: "Cross-channel footprint"
  },
  amazon: {
    name: "Amazon Listing",
    badge: "DEMO",
    placeholder: "Amazon product URL or ASIN",
    example: "https://www.amazon.in/dp/B0EXAMPLE01",
    description: "Demo checklist from the listing URL — not connected to Amazon APIs.",
    subheading: "Listing completeness checklist"
  },
  flipkart: {
    name: "Flipkart Catalog",
    badge: "DEMO",
    placeholder: "Flipkart product URL",
    example: "https://www.flipkart.com",
    description: "Demo checklist from the product URL — not connected to Flipkart APIs.",
    subheading: "F-Assured readiness checklist"
  },
  backlinks: {
    name: "Backlinks Generator",
    badge: "NEW",
    placeholder: "Enter website domain or page URL",
    example: "dezo.in",
    description: "Generate 150+ high-authority directory profiles, SEO audit anchors, and indexing submissions.",
    subheading: "150+ High-DA Submissions & Pings"
  }
};

export type FindingStatus = 'good' | 'warning' | 'critical' | 'info';
export type FindingPriority = 'P0 - Immediate' | 'P1 - High' | 'P2 - Moderate' | 'P3 - Minor';

export interface Finding {
  id: string;
  metric: string;
  status: FindingStatus;
  scoreImpact: number;
  title: string;
  observation: string;
  evidence?: string;
  whyItMatters: string;
  howToFix: string;
  priority: FindingPriority;
}

export interface CategoryScore {
  name: string;
  score: number;
  weight: number;
  status: 'optimal' | 'needs_work' | 'poor';
}

export interface AuditReport {
  reportId: string;
  targetInput: string;
  targetType: string;
  timestamp: string;
  overallScore: number;
  ratingTier: 'Excellent' | 'Good' | 'Needs Improvement' | 'Critical Issues Detected';
  categoryScores: CategoryScore[];
  summary: string;
  topPriorityFixes: string[];
  findings: Finding[];
  deterministicChecksPassed: number;
  totalChecksConducted: number;
  aiStrategicOverview: {
    growthBottleneck: string;
    commercialOpportunity: string;
    estimatedRevenueImpact: string;
  };
}

const BLOCKED_HOSTS = new Set([
  'localhost', '127.0.0.1', '0.0.0.0', '::1', 'ip6-localhost'
]);

const BLOCKED_PREFIXES = [
  '10.', '192.168.', '172.16.', '172.17.', '172.18.', '172.19.',
  '172.20.', '172.21.', '172.22.', '172.23.', '172.24.', '172.25.',
  '172.26.', '172.27.', '172.28.', '172.29.', '172.30.', '172.31.',
  '169.254.', 'fc00:', 'fe80:'
];

function sanitizeInput(input: string): { isValid: boolean; errorMessage?: string; sanitizedUrl?: string; isDomainOrKeyword?: boolean } {
  const trimmed = input.trim();
  if (!trimmed || trimmed.length < 2) {
    return { isValid: false, errorMessage: "Input cannot be empty." };
  }
  if (!trimmed.includes(".") && !trimmed.includes("/")) {
    return { isValid: true, isDomainOrKeyword: true, sanitizedUrl: trimmed };
  }

  let testUrl = trimmed;
  if (!testUrl.startsWith("http://") && !testUrl.startsWith("https://")) {
    testUrl = `https://${testUrl}`;
  }

  try {
    const urlObj = new URL(testUrl);
    if (urlObj.protocol !== "http:" && urlObj.protocol !== "https:") {
      return { isValid: false, errorMessage: "Only HTTP and HTTPS protocols are permitted." };
    }
    const host = urlObj.hostname.toLowerCase();
    if (BLOCKED_HOSTS.has(host)) {
      return { isValid: false, errorMessage: "Internal and loopback addresses cannot be scanned." };
    }
    for (const prefix of BLOCKED_PREFIXES) {
      if (host.startsWith(prefix)) {
        return { isValid: false, errorMessage: "Scanning private or local networks is blocked." };
      }
    }
    if (urlObj.port && urlObj.port !== "80" && urlObj.port !== "443") {
      return { isValid: false, errorMessage: "Only standard web ports (80, 443) are allowed." };
    }
    return { isValid: true, sanitizedUrl: urlObj.toString(), isDomainOrKeyword: false };
  } catch {
    return { isValid: true, sanitizedUrl: trimmed, isDomainOrKeyword: true };
  }
}

async function probeUrl(url: string) {
  try {
    const res = await fetch('/api/tools/probe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function runDiagnostic(rawInput: string, tool: ToolKey = 'seo'): Promise<AuditReport> {
  const parsed = sanitizeInput(rawInput);
  if (!parsed.isValid) {
    throw new Error(parsed.errorMessage || "Invalid input.");
  }

  const target = parsed.sanitizedUrl || rawInput;
  const isUrlScan = !parsed.isDomainOrKeyword && ['seo', 'page-speed', 'accessibility', 'shopify', 'security', 'cro', 'brand'].includes(tool);
  const probeData = isUrlScan ? await probeUrl(target) : null;

  let findings: Finding[] = [];

  switch (tool) {
    case 'seo': {
      const list: Finding[] = [];
      const titleLen = probeData?.title?.length ?? 0;

      if (probeData?.ok) {
        list.push({
          id: "seo_http_status",
          metric: "HTTP Status",
          status: probeData.status && probeData.status < 400 ? "good" : "critical",
          scoreImpact: probeData.status && probeData.status < 400 ? 0 : -18,
          title: probeData.status && probeData.status < 400 ? `Responded ${probeData.status}` : `Unhealthy status ${probeData.status || "unknown"}`,
          observation: `Public probe reached ${probeData.finalUrl || target} with status ${probeData.status}.`,
          whyItMatters: "Crawl and conversion both fail if the primary URL is unreachable.",
          howToFix: "Resolve redirects/errors so the canonical marketing URL returns 200.",
          priority: probeData.status && probeData.status < 400 ? "P3 - Minor" : "P0 - Immediate"
        });
      }

      list.push({
        id: "seo_canonical",
        metric: "Canonical Tag",
        status: probeData?.hasCanonical ? "good" : "warning",
        scoreImpact: probeData?.hasCanonical ? 0 : -7,
        title: probeData?.hasCanonical ? "Canonical tag detected" : "Canonical tag not detected in sample",
        observation: probeData?.hasCanonical ? 'HTML sample includes a rel="canonical" declaration.' : 'No rel="canonical" found in the sampled HTML head.',
        whyItMatters: "Canonicals protect index equity across tracking parameters.",
        howToFix: "Add a self-referential canonical in the document head.",
        priority: probeData?.hasCanonical ? "P3 - Minor" : "P1 - High"
      });

      if (probeData?.title) {
        list.push({
          id: "seo_title_length",
          metric: "Title Tag",
          status: titleLen > 60 || titleLen < 12 ? "warning" : "good",
          scoreImpact: titleLen > 60 || titleLen < 12 ? -6 : 0,
          title: `Title length ${titleLen} characters`,
          observation: `Observed title: “${probeData.title}”.`,
          evidence: probeData.title,
          whyItMatters: "Mobile SERPs truncate long titles and bury brand/intent.",
          howToFix: "Keep primary titles near 50–60 characters with the intent keyword early.",
          priority: "P1 - High"
        });
      } else {
        list.push({
          id: "seo_title_missing",
          metric: "Title Tag",
          status: "critical",
          scoreImpact: -12,
          title: "Title tag not observed",
          observation: "Probe could not extract a <title> from the HTML sample.",
          whyItMatters: "Missing titles destroy CTR and ranking clarity.",
          howToFix: "Ensure every indexable page emits a unique title tag.",
          priority: "P0 - Immediate"
        });
      }

      list.push({
        id: "seo_schema",
        metric: "Schema.org JSON-LD",
        status: probeData?.hasJsonLd ? "good" : "warning",
        scoreImpact: probeData?.hasJsonLd ? 0 : -8,
        title: probeData?.hasJsonLd ? "JSON-LD structured data present" : "No JSON-LD detected in sample",
        observation: probeData?.hasJsonLd ? "application/ld+json script detected in HTML sample." : "No JSON-LD block found in the sampled HTML.",
        whyItMatters: "Structured data unlocks rich results and clearer entity understanding.",
        howToFix: "Add Organization/WebSite/Product/FAQ JSON-LD where commercially relevant.",
        priority: probeData?.hasJsonLd ? "P3 - Minor" : "P0 - Immediate"
      });

      list.push({
        id: "seo_robots_meta",
        metric: "Robots Meta",
        status: "info",
        scoreImpact: 0,
        title: probeData?.hasRobotsMeta ? "Robots meta present" : "No robots meta in sample",
        observation: probeData?.hasRobotsMeta ? "A robots meta tag was observed — verify it does not block indexing unintentionally." : "No robots meta tag in sample (often fine if robots.txt is correct).",
        whyItMatters: "Accidental noindex is a common silent traffic killer.",
        howToFix: "Confirm indexable templates are not emitting noindex.",
        priority: "P2 - Moderate"
      });

      findings = list;
      break;
    }

    case 'page-speed': {
      const list: Finding[] = [];
      const ttfb = probeData?.ttfbMs;

      list.push({
        id: "perf_ttfb",
        metric: "Time to First Byte (probe)",
        status: ttfb ? (ttfb < 800 ? "good" : ttfb < 1800 ? "warning" : "critical") : "warning",
        scoreImpact: ttfb ? (ttfb < 800 ? 0 : ttfb < 1800 ? -7 : -14) : -5,
        title: ttfb ? `Probe TTFB ≈ ${ttfb}ms` : "TTFB unavailable",
        observation: ttfb ? `Server responded to DEZO probe in ${ttfb}ms (includes network from this region).` : "Could not measure TTFB from probe.",
        whyItMatters: "Slow origins cascade into poor LCP and bounce on Indian 4G.",
        howToFix: "Use edge caching, optimize SSR/TTFB, and compress HTML.",
        priority: ttfb && ttfb >= 1800 ? "P0 - Immediate" : "P1 - High"
      });

      list.push({
        id: "perf_viewport",
        metric: "Mobile Viewport",
        status: probeData?.hasViewport ? "good" : "warning",
        scoreImpact: probeData?.hasViewport ? 0 : -6,
        title: probeData?.hasViewport ? "Viewport meta present" : "Viewport meta missing in sample",
        observation: probeData?.hasViewport ? "Mobile viewport declaration detected." : "No viewport meta in HTML sample — mobile layout risk.",
        whyItMatters: "Missing viewport breaks mobile CWV and usability.",
        howToFix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">.',
        priority: "P1 - High"
      });

      const htmlBytes = probeData?.htmlBytesSampled || 0;
      list.push({
        id: "perf_payload_sample",
        metric: "HTML Sample Size",
        status: htmlBytes > 120000 ? "warning" : "good",
        scoreImpact: htmlBytes > 120000 ? -5 : 0,
        title: `HTML sample ${htmlBytes} bytes`,
        observation: "Sampled first HTML chunk size as a proxy for document weight.",
        whyItMatters: "Heavy first documents delay parsing on mid-range Android devices.",
        howToFix: "Defer non-critical scripts and reduce SSR HTML bloat.",
        priority: "P2 - Moderate"
      });

      list.push({
        id: "perf_tech",
        metric: "Tech Fingerprint",
        status: "info",
        scoreImpact: 0,
        title: probeData?.server ? `Server: ${probeData.server}` : "Server header not exposed",
        observation: probeData?.headers?.["x-powered-by"] ? `x-powered-by: ${probeData.headers["x-powered-by"]}` : (probeData?.headers?.["x-shopid"] ? "Shopify storefront signals detected." : "Limited public tech headers exposed (often intentional)."),
        whyItMatters: "Stack fingerprints inform performance and security hardening plans.",
        howToFix: "Keep public headers minimal; optimize the actual delivery path.",
        priority: "P3 - Minor"
      });

      findings = list;
      break;
    }

    case 'accessibility': {
      findings = [
        {
          id: "a11y_title",
          metric: "Document Title",
          status: probeData?.title ? "good" : "warning",
          scoreImpact: probeData?.title ? 0 : -6,
          title: probeData?.title ? "Page has a document title" : "Document title missing",
          observation: probeData?.title || "Screen readers announce the title first.",
          whyItMatters: "Titles orient assistive-tech users and improve SEO clarity.",
          howToFix: "Provide unique, descriptive titles per page.",
          priority: "P1 - High"
        },
        {
          id: "a11y_viewport",
          metric: "Zoom / Viewport",
          status: probeData?.hasViewport ? "good" : "warning",
          scoreImpact: probeData?.hasViewport ? 0 : -5,
          title: "Viewport configuration",
          observation: "Confirm maximum-scale is not locked; sampled HTML only checks presence.",
          whyItMatters: "Locked zoom fails WCAG and alienates low-vision users.",
          howToFix: "Allow user zoom; avoid user-scalable=no.",
          priority: "P1 - High"
        },
        {
          id: "a11y_contrast",
          metric: "Contrast Heuristic",
          status: "info",
          scoreImpact: -2,
          title: "Manual contrast review recommended",
          observation: "Automated full-page contrast requires authorized crawl depth; run axe/Lighthouse on staging.",
          whyItMatters: "Low contrast kills readability on bright outdoor mobile use in India.",
          howToFix: "Target WCAG 2.1 AA 4.5:1 for body text; 3:1 for large text.",
          priority: "P2 - Moderate"
        },
        {
          id: "a11y_touch",
          metric: "Touch Targets",
          status: "info",
          scoreImpact: -2,
          title: "Verify 44×44px interactive targets",
          observation: "Public HTML sample cannot measure computed hit areas reliably.",
          whyItMatters: "Small CTAs drive mobile mis-taps and cart abandonment.",
          howToFix: "Ensure primary buttons and nav links meet 44×44px minimum.",
          priority: "P2 - Moderate"
        }
      ];
      break;
    }

    case 'shopify': {
      const isShopify = /myshopify\.com|cdn\.shopify|x-shopid|x-shopify/i.test(target) || 
        !!probeData?.headers?.["x-shopid"] || 
        !!probeData?.headers?.["x-shopify-stage"] || 
        /shopify/i.test(probeData?.server || "");

      findings = [
        {
          id: "shopify_detect",
          metric: "Shopify Signal",
          status: isShopify ? "good" : "warning",
          scoreImpact: isShopify ? 0 : -4,
          title: isShopify ? "Shopify fingerprints observed" : "Shopify not clearly detected",
          observation: isShopify ? "Public headers/URL patterns suggest a Shopify storefront." : "No strong Shopify header/URL signal — audit still runs storefront heuristics.",
          whyItMatters: "Confirms the right engine path for theme/app remediation.",
          howToFix: "If this is Shopify, share the live myshopify or custom domain.",
          priority: "P2 - Moderate"
        },
        {
          id: "shopify_https",
          metric: "Checkout Trust",
          status: target.startsWith("https") ? "good" : "critical",
          scoreImpact: target.startsWith("https") ? 0 : -16,
          title: "HTTPS storefront",
          observation: "Checkout and payment trust require TLS on every commercial URL.",
          whyItMatters: "Browsers and Indian payment gateways punish mixed content.",
          howToFix: "Force HTTPS redirects and secure cookies.",
          priority: "P0 - Immediate"
        },
        {
          id: "shopify_scripts",
          metric: "App Script Risk",
          status: "warning",
          scoreImpact: -8,
          title: "Audit third-party app embeds",
          observation: "Public HTML sampling cannot enumerate all app embeds; treat script bloat as a default risk on mature Shopify shops.",
          whyItMatters: "Abandoned apps are a top LCP/checkout killer.",
          howToFix: "Remove unused app embeds; defer non-critical scripts in theme.liquid.",
          priority: "P0 - Immediate"
        },
        {
          id: "shopify_cdn",
          metric: "Image CDN",
          status: "info",
          scoreImpact: 0,
          title: "Prefer Shopify CDN responsive images",
          observation: "Use width/format parameters and modern formats for catalog media.",
          whyItMatters: "Image weight dominates mobile ecommerce CWV.",
          howToFix: "Serve WebP/AVIF via CDN transforms; lazy-load below-fold media.",
          priority: "P2 - Moderate"
        }
      ];
      break;
    }

    case 'security': {
      const hsts = !!probeData?.headers?.["strict-transport-security"];
      const csp = !!probeData?.headers?.["content-security-policy"];
      const xframe = !!probeData?.headers?.["x-frame-options"];
      const nosniff = !!probeData?.headers?.["x-content-type-options"];

      findings = [
        {
          id: "sec_https",
          metric: "HTTPS",
          status: target.startsWith("https") ? "good" : "critical",
          scoreImpact: target.startsWith("https") ? 0 : -20,
          title: target.startsWith("https") ? "HTTPS URL" : "Non-HTTPS URL",
          observation: `Target protocol evaluated from input: ${target.split(":")[0]}`,
          whyItMatters: "TLS is table stakes for SEO, ads, and payments.",
          howToFix: "Redirect all HTTP to HTTPS and renew certificates automatically.",
          priority: "P0 - Immediate"
        },
        {
          id: "sec_hsts",
          metric: "HSTS",
          status: hsts ? "good" : "warning",
          scoreImpact: hsts ? 0 : -7,
          title: hsts ? "Strict-Transport-Security present" : "HSTS header missing",
          observation: hsts ? probeData.headers["strict-transport-security"] : "No HSTS header observed on probe response.",
          whyItMatters: "HSTS prevents SSL stripping after first visit.",
          howToFix: "Add Strict-Transport-Security with a long max-age; preload when ready.",
          priority: "P1 - High"
        },
        {
          id: "sec_csp",
          metric: "CSP",
          status: csp ? "good" : "warning",
          scoreImpact: csp ? 0 : -5,
          title: csp ? "Content-Security-Policy present" : "CSP not observed",
          observation: csp ? "CSP header returned by origin." : "No CSP header in probe response.",
          whyItMatters: "CSP reduces XSS blast radius on marketing and storefront pages.",
          howToFix: "Start with report-only CSP, then enforce script sources.",
          priority: "P2 - Moderate"
        },
        {
          id: "sec_clickjack",
          metric: "Frame Protection",
          status: xframe || csp ? "good" : "warning",
          scoreImpact: xframe || csp ? 0 : -4,
          title: xframe ? "X-Frame-Options present" : "Frame busting not clearly configured",
          observation: xframe ? probeData.headers["x-frame-options"] : "Consider X-Frame-Options or CSP frame-ancestors.",
          whyItMatters: "Clickjacking can hijack checkout and lead forms.",
          howToFix: "Set X-Frame-Options: DENY/SAMEORIGIN or CSP frame-ancestors.",
          priority: "P2 - Moderate"
        },
        {
          id: "sec_mime",
          metric: "MIME Sniffing",
          status: nosniff ? "good" : "info",
          scoreImpact: nosniff ? 0 : -2,
          title: nosniff ? "X-Content-Type-Options nosniff" : "Consider nosniff",
          observation: nosniff ? probeData.headers["x-content-type-options"] : "Header not observed.",
          whyItMatters: "Blocks MIME confusion attacks on static assets.",
          howToFix: "Add X-Content-Type-Options: nosniff.",
          priority: "P3 - Minor"
        }
      ];
      break;
    }

    case 'cro': {
      const lowerUrl = target.toLowerCase();
      const isCart = /cart|checkout|bag|basket/.test(lowerUrl);

      findings = [
        {
          id: "cro_cod",
          metric: "COD Trust",
          status: "warning",
          scoreImpact: -6,
          title: "Surface Cash on Delivery assurances",
          observation: "Indian D2C conversion often hinges on visible COD / UPI trust near ATC and checkout.",
          whyItMatters: "Hidden payment options increase bounce on first-time buyers.",
          howToFix: "Show COD/UPI/Razorpay trust near sticky ATC on mobile.",
          priority: "P1 - High"
        },
        {
          id: "cro_shipping",
          metric: "Shipping Clarity",
          status: "warning",
          scoreImpact: -5,
          title: "Make delivery windows explicit",
          observation: "Ambiguous shipping timelines are a top cart abandon reason.",
          whyItMatters: "Buyers need pin-code level expectation setting.",
          howToFix: "Add estimated delivery / pin-code checker before payment.",
          priority: "P1 - High"
        },
        {
          id: "cro_cta",
          metric: "Primary CTA",
          status: isCart ? "info" : "warning",
          scoreImpact: isCart ? -1 : -4,
          title: isCart ? "Checkout URL provided" : "Audit ATC contrast & stickiness",
          observation: isCart ? "You pointed at a cart/checkout URL — validate step count and trust badges there." : "Product/collection pages need sticky high-contrast mobile CTAs.",
          whyItMatters: "Weak CTAs kill conversion even with good traffic.",
          howToFix: "Use sticky ATC, 44px targets, and clear primary color hierarchy.",
          priority: "P1 - High"
        },
        {
          id: "cro_returns",
          metric: "Returns Policy",
          status: "info",
          scoreImpact: -2,
          title: "Expose returns/replacement window",
          observation: "Policy clarity reduces post-click anxiety for first-time Indian shoppers.",
          whyItMatters: "Return ambiguity suppresses AOV and conversion.",
          howToFix: "Put return window near price and checkout summary.",
          priority: "P2 - Moderate"
        }
      ];
      break;
    }

    case 'keywords': {
      const tokens = target.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const hasCommercial = /(buy|price|online|shop|best|near me|odisha|bhubaneswar|india|saree|oil|clinic)/i.test(target);
      const isLongTail = tokens.length >= 3;
      
      let hash = 0;
      for (let i = 0; i < target.length; i++) {
        hash = (31 * hash + target.charCodeAt(i)) >>> 0;
      }
      const difficulty = 35 + (hash % 45);

      findings = [
        {
          id: "kw_intent",
          metric: "Search Intent",
          status: hasCommercial ? "good" : "warning",
          scoreImpact: hasCommercial ? 0 : -5,
          title: hasCommercial ? "Commercial / local intent signals" : "Informational-leaning seed",
          observation: `Seed “${target}” classified with ${hasCommercial ? "commercial" : "weaker commercial"} modifiers.`,
          whyItMatters: "Commercial modifiers convert better for ads and marketplace SEO.",
          howToFix: "Add buyer modifiers (buy, price, online, near me, city).",
          priority: "P1 - High"
        },
        {
          id: "kw_longtail",
          metric: "Long-tail Shape",
          status: isLongTail ? "good" : "warning",
          scoreImpact: isLongTail ? 0 : -4,
          title: isLongTail ? "Long-tail phrase" : "Short head term",
          observation: `${tokens.length} tokens — ${isLongTail ? "good specificity" : "likely high competition head term"}.`,
          whyItMatters: "Long-tails win faster rankings for Odisha/India niche brands.",
          howToFix: "Expand into 3–6 word phrases with product + benefit + geo.",
          priority: "P2 - Moderate"
        },
        {
          id: "kw_difficulty",
          metric: "Relative Difficulty (heuristic)",
          status: difficulty > 70 ? "warning" : "info",
          scoreImpact: difficulty > 70 ? -4 : 0,
          title: `Heuristic difficulty ~${difficulty}/100`,
          observation: "Client-side estimate only — not Google Ads Keyword Planner volume. Use for prioritization, not spend decisions.",
          whyItMatters: "Prevents chasing unwinnable head terms early.",
          howToFix: "Cluster into supporting long-tails and marketplace query variants.",
          priority: "P2 - Moderate"
        },
        {
          id: "kw_geo",
          metric: "India / Odisha Geo",
          status: /(odisha|bhubaneswar|cuttack|india|near me)/i.test(target) ? "good" : "info",
          scoreImpact: /(odisha|bhubaneswar|cuttack|india|near me)/i.test(target) ? 0 : -2,
          title: "Geographic modifier check",
          observation: "Local modifiers help regional acquisition and GBP alignment.",
          whyItMatters: "DEZO Odisha clients win with hyperlocal intent.",
          howToFix: "Add city/state modifiers where service area is local.",
          priority: "P3 - Minor"
        }
      ];
      break;
    }

    case 'local-seo': {
      const hasGeo = /(bhubaneswar|cuttack|rourkela|odisha|india)/i.test(target);
      findings = [
        {
          id: "local_geo",
          metric: "Geo Keywords",
          status: hasGeo ? "good" : "warning",
          scoreImpact: hasGeo ? 0 : -6,
          title: hasGeo ? "Geo terms present" : "Add city / Odisha modifiers",
          observation: `Input: “${target}”`,
          whyItMatters: "Local pack visibility needs explicit geo language.",
          howToFix: "Include primary city + Odisha in titles, GBP, and on-page copy.",
          priority: "P1 - High"
        },
        {
          id: "local_nap",
          metric: "NAP Consistency",
          status: "info",
          scoreImpact: -2,
          title: "Verify NAP across citations",
          observation: "Public tool cannot read GBP privately — confirm Name/Address/Phone consistency.",
          whyItMatters: "NAP mismatches suppress Maps ranking.",
          howToFix: "Standardize NAP on site footer, GBP, and directories.",
          priority: "P1 - High"
        },
        {
          id: "local_schema",
          metric: "LocalBusiness Schema",
          status: "warning",
          scoreImpact: -5,
          title: "Implement LocalBusiness JSON-LD",
          observation: "Local entities convert better with structured address/geo/openingHours.",
          whyItMatters: "Helps Google understand service area and store identity.",
          howToFix: "Add LocalBusiness schema with geo coordinates where accurate.",
          priority: "P1 - High"
        }
      ];
      break;
    }

    case 'brand': {
      const isDomain = target.includes(".");
      findings = [
        {
          id: "brand_domain",
          metric: "Domain Clarity",
          status: isDomain ? "good" : "info",
          scoreImpact: isDomain ? 0 : -2,
          title: isDomain ? "Domain-style input" : "Brand name input",
          observation: `Evaluating footprint heuristics for “${target}”.`,
          whyItMatters: "Consistent naming across web + marketplaces builds trust.",
          howToFix: "Align brand string on Shopify, Amazon Brand Store, and social handles.",
          priority: "P2 - Moderate"
        },
        {
          id: "brand_parity",
          metric: "Channel Parity",
          status: "warning",
          scoreImpact: -4,
          title: "Check pricing & creative parity",
          observation: "Public demo flags parity as a recurring D2C ↔ marketplace risk.",
          whyItMatters: "Price mismatches destroy ROAS and Buy Box confidence.",
          howToFix: "Sync offers and hero creative across web and marketplaces.",
          priority: "P1 - High"
        },
        {
          id: "brand_proof",
          metric: "Social Proof Links",
          status: "info",
          scoreImpact: -2,
          title: "Link reviews & press",
          observation: "Brand sites should surface verifiable reviews and marketplace ratings.",
          whyItMatters: "Proof reduces first-purchase anxiety.",
          howToFix: "Feature third-party reviews and marketplace star ratings honestly.",
          priority: "P2 - Moderate"
        }
      ];
      break;
    }

    case 'amazon': {
      const asinMatch = target.match(/(?:dp|gp\/product|asin=)\/?([A-Z0-9]{10})/i);
      const asin = asinMatch ? asinMatch[1].toUpperCase() : null;

      findings = [
        {
          id: "amz_mode",
          metric: "Data Mode",
          status: "info",
          scoreImpact: 0,
          title: "Public demo heuristics (not SP-API)",
          observation: "This engine does not call Amazon Selling Partner API. Findings are checklist heuristics from the URL/ASIN shape.",
          whyItMatters: "Honest scoping prevents fake marketplace API claims.",
          howToFix: "Connect authorized SP-API later for live SQP and Buy Box telemetry.",
          priority: "P3 - Minor"
        },
        {
          id: "amz_asin",
          metric: "ASIN Detection",
          status: asin ? "good" : "warning",
          scoreImpact: asin ? 0 : -5,
          title: asin ? `ASIN detected: ${asin}` : "ASIN not detected in input",
          observation: asin ? `Parsed ASIN ${asin} from the provided URL/text.` : "Provide an amazon.in product URL or 10-character ASIN for tighter demo scoring.",
          whyItMatters: "ASIN is the unit of marketplace optimization.",
          howToFix: "Paste a full amazon.in/dp/ASIN link.",
          priority: "P1 - High"
        },
        {
          id: "amz_title",
          metric: "Title Capacity",
          status: "warning",
          scoreImpact: -8,
          title: "Utilize near-full title length",
          observation: "Demo checklist: most under-indexed listings leave title capacity unused.",
          whyItMatters: "A9/A10 still heavily weights title tokens.",
          howToFix: "Expand toward 180–195 characters with high-intent Indian queries.",
          priority: "P0 - Immediate"
        },
        {
          id: "amz_images",
          metric: "Gallery Depth",
          status: "warning",
          scoreImpact: -6,
          title: "Target 7 images + video",
          observation: "Demo benchmark vs typical bestsellers.",
          whyItMatters: "Image depth correlates with conversion and rank.",
          howToFix: "Add infographic, size guide, and lifestyle frames.",
          priority: "P1 - High"
        }
      ];
      break;
    }

    case 'flipkart': {
      const isFkUrl = /flipkart\.|\/p\/itm/i.test(target);
      findings = [
        {
          id: "fk_mode",
          metric: "Data Mode",
          status: "info",
          scoreImpact: 0,
          title: "Public demo heuristics (not seller API)",
          observation: "No Flipkart seller API connection. This is a readiness checklist for catalog quality.",
          whyItMatters: "Keeps marketplace claims honest until authorized integrations exist.",
          howToFix: "Add Flipkart seller API adapters in a later Growth OS phase.",
          priority: "P3 - Minor"
        },
        {
          id: "fk_url",
          metric: "Listing URL",
          status: isFkUrl ? "good" : "warning",
          scoreImpact: isFkUrl ? 0 : -4,
          title: isFkUrl ? "Flipkart URL pattern detected" : "Paste a Flipkart product URL",
          observation: `Input: “${target.slice(0, 120)}”`,
          whyItMatters: "Correct URL targeting improves remediation specificity.",
          howToFix: "Use the public product page URL from flipkart.com.",
          priority: "P2 - Moderate"
        },
        {
          id: "fk_assured",
          metric: "F-Assured Readiness",
          status: "warning",
          scoreImpact: -8,
          title: "Check F-Assured delivery eligibility",
          observation: "Demo flag: Tier-2 delivery speed and FC placement usually gate the badge.",
          whyItMatters: "F-Assured listings earn disproportionate impression share.",
          howToFix: "Improve regional fulfillment so major pins hit 2-day windows.",
          priority: "P0 - Immediate"
        },
        {
          id: "fk_attrs",
          metric: "Attribute Completeness",
          status: "warning",
          scoreImpact: -5,
          title: "Complete mandatory + optional attributes",
          observation: "Sparse attributes suppress browse-node ranking.",
          whyItMatters: "Catalog quality is a ranking and conversion lever.",
          howToFix: "Fill material, size, care, and regional attributes thoroughly.",
          priority: "P1 - High"
        }
      ];
      break;
    }
  }

  // Calculate scores
  const scoreDeductions = findings.reduce((acc, item) => acc + (item.scoreImpact || 0), 0);
  const overallScore = Math.max(28, Math.min(98, 92 + scoreDeductions));

  const ratingTier: AuditReport['ratingTier'] = 
    overallScore >= 88 ? "Excellent" : 
    overallScore < 65 ? "Critical Issues Detected" : 
    overallScore < 78 ? "Needs Improvement" : "Good";

  const categoryScores: CategoryScore[] = [
    { name: "Primary Engine", score: overallScore, weight: 45, status: overallScore >= 85 ? 'optimal' : overallScore >= 70 ? 'needs_work' : 'poor' },
    { name: "Evidence Quality", score: probeData?.ok ? 88 : (['keywords', 'amazon', 'flipkart'].includes(tool) ? 72 : 70), weight: 25, status: (probeData?.ok ? 88 : 72) >= 85 ? 'optimal' : 'needs_work' },
    { name: "Commercial Impact", score: Math.max(55, overallScore - 6), weight: 30, status: Math.max(55, overallScore - 6) >= 85 ? 'optimal' : 'needs_work' }
  ];

  const priorityIssues = findings.filter(f => f.status === 'critical' || f.status === 'warning');

  const targetType = 
    tool === 'amazon' ? 'amazon_product' :
    tool === 'flipkart' ? 'flipkart_product' :
    tool === 'shopify' ? 'shopify_store' :
    tool === 'keywords' || tool === 'local-seo' ? (parsed.isDomainOrKeyword ? 'keyword' : 'local_business') : 'website';

  const modeNotice = 
    tool === 'amazon' || tool === 'flipkart' ? ' Demo mode — no marketplace seller APIs connected.' :
    probeData?.ok ? ' Public probe evidence included.' :
    isUrlScan ? ' Probe limited — heuristic findings still returned.' : ' Client-side heuristic analysis.';

  return {
    reportId: `dezo-rep-${Math.random().toString(36).substring(2, 9)}`,
    targetInput: target,
    targetType,
    timestamp: new Date().toISOString(),
    overallScore,
    ratingTier,
    categoryScores,
    summary: `${TOOL_DEFINITIONS[tool].name} engine finished ${findings.length} checks.${modeNotice} Found ${priorityIssues.length} priority issues.`,
    topPriorityFixes: priorityIssues.map(i => i.howToFix).slice(0, 4),
    findings,
    deterministicChecksPassed: findings.filter(f => f.status === 'good').length,
    totalChecksConducted: findings.length,
    aiStrategicOverview: {
      growthBottleneck: priorityIssues[0]?.title || "No critical bottleneck flagged in this pass.",
      commercialOpportunity: "Resolve P0/P1 findings first, then re-run the same engine to track score movement.",
      estimatedRevenueImpact: tool === 'keywords' 
        ? "Use clusters to brief content/ads — not as paid-media volume truth." 
        : "Prioritized fixes typically unlock measurable CTR/CVR gains within a sprint."
    }
  };
}

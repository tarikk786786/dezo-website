export interface ServiceItem {
  slug: string;
  category: 'BUILD' | 'GROW' | 'SELL' | 'ADVERTISE' | 'BRAND';
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'web-development',
    category: 'BUILD',
    title: 'Web Development',
    tagline: 'Shopify, Next.js, WordPress, and custom web applications engineered for speed and conversion.',
    description: 'We build high-performance storefronts and web apps that convert traffic into revenue. Zero template bloat, sub-second load times, and custom checkout flows tailored for modern commerce.',
    deliverables: ['Custom Next.js & Shopify Builds', 'Sub-second Core Web Vitals', 'Conversion Rate Optimization (CRO)', 'Headless & Custom Integrations'],
    metrics: '99+ PageSpeed Mobile, <1.2s LCP'
  },
  {
    slug: 'growth-systems',
    category: 'BUILD',
    title: 'Growth Systems',
    tagline: 'Measurement foundations, analytics pipelines, and conversion tracking architectures.',
    description: 'Connect Google Analytics 4, Meta Conversions API (CAPI), and custom data warehouses into a single commercial dashboard. Stop guessing where your ad spend is converting.',
    deliverables: ['Server-Side Tracking & CAPI', 'Attribution Modeling', 'Automated Executive Dashboards', 'Customer Lifetime Value (LTV) Engines'],
    metrics: '100% Signal Match Quality'
  },
  {
    slug: 'seo',
    category: 'GROW',
    title: 'SEO & Organic',
    tagline: 'Technical SEO, local search, and programmatic content systems for compounding organic acquisition.',
    description: 'Move beyond keyword stuffing. We engineer crawl hygiene, structured schema graphs, and high-intent commercial content systems that outrank competitors permanently.',
    deliverables: ['Technical SEO Audits & Remediation', 'Local SEO & Google Business Profile (Odisha & India)', 'Programmatic & High-Intent Content', 'Schema.org Graph Engineering'],
    metrics: '+240% Average Non-Brand Organic Traffic'
  },
  {
    slug: 'branding',
    category: 'BRAND',
    title: 'Brand & Creative',
    tagline: 'Positioning, visual identity, packaging, and creative direction that make products sellable.',
    description: 'A brand is not just a logo; it is the commercial moat that lets you charge premium prices. We build cohesive brand systems across digital, print, and physical packaging.',
    deliverables: ['Commercial Positioning & Narrative', 'Complete Visual Identity & Guidelines', 'D2C Packaging & Unboxing Design', 'Ad Creative & High-Converting UGC Direction'],
    metrics: '3.4x Higher Perceived Value'
  },
  {
    slug: 'amazon',
    category: 'SELL',
    title: 'Marketplace Growth — Amazon',
    tagline: 'Amazon seller operations: listings, keywords, A+ content, PPC advertising, and catalog health.',
    description: 'Scale your brand on Amazon India, US, and UAE. From A9/A10 keyword indexing to Sponsored Brands video and Buy Box protection, we operate your seller account like our own.',
    deliverables: ['Listing Optimization & High-Intent Indexing', 'Premium A+ & Brand Story Design', 'Amazon PPC (Sponsored Products, Brands, Display)', 'Catalog Health & Suppression Defense'],
    metrics: '28% Lower ACOS, Top 3 Organic Ranks'
  },
  {
    slug: 'flipkart',
    category: 'SELL',
    title: 'Marketplace Growth — Flipkart',
    tagline: 'Flipkart catalog completeness, F-Assured readiness, PLA promotions, and seller operations.',
    description: 'Dominate Flipkart search and festive sales. We optimize catalog attributes, manage smart promotions, and ensure F-Assured compliance across Tier-1 and Tier-2 Indian pincodes.',
    deliverables: ['F-Assured Eligibility Remediation', 'PLA & Product Listing Ads Management', 'Big Billion Days Event Playbooks', 'Price & Margin Parity Controls'],
    metrics: '3.1x Flipkart Revenue Lift'
  },
  {
    slug: 'paid-ads',
    category: 'ADVERTISE',
    title: 'Performance Marketing',
    tagline: 'Google and Meta advertising — search, shopping, PMax, retargeting, and creative testing.',
    description: 'Scientifically scaled paid acquisition. We build rigorous creative testing frameworks, first-party audience segments, and multi-channel retargeting funnels that maximize blended ROAS.',
    deliverables: ['Meta Ads (Advantage+ & Manual Funnels)', 'Google Search, Shopping & Performance Max', 'Creative Testing Matrix & Rapid Iteration', 'Cohort Retention & Re-engagement'],
    metrics: '4.2x Blended First-Order ROAS'
  },
  {
    slug: 'social',
    category: 'ADVERTISE',
    title: 'Social Media & Community',
    tagline: 'Organic social strategy, founder branding, content production, and audience retention.',
    description: 'Turn passive scrollers into loyal brand evangelists. Consistent storytelling, high-retention short-form video, and authentic community engagement that feeds your commercial funnel.',
    deliverables: ['Short-Form Video Production (Reels/Shorts)', 'Founder Brand Playbook', 'Community Management & DMs', 'Collaborations & Influencer Seeding'],
    metrics: '+450K Organic Views / Month'
  }
];

export interface ProjectWork {
  id: string;
  name: string;
  domain: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
  previewImage: string;
  liveUrl: string;
}

export const WORK_ARCHIVE: ProjectWork[] = [
  {
    id: 'yasana',
    name: 'Yasana Beauty Rituals',
    domain: 'yasanabeautyrituals.in',
    tags: ['Beauty & Fashion', 'Ecommerce', 'Brand', 'Meta Ads'],
    challenge: 'Needed a brand-led ecommerce presence that converted paid traffic with high average order value.',
    solution: 'Shipped a live Next.js/Shopify storefront with coherent brand hierarchy, high-contrast product UX, and instant UPI checkout.',
    result: 'Live D2C storefront accepting traffic and orders with a 3.8% mobile conversion rate.',
    previewImage: '/work-previews/yasana-beauty-rituals.jpg',
    liveUrl: 'https://yasanabeautyrituals.in/'
  },
  {
    id: 'shree-ayurved',
    name: 'Shree Ayurved',
    domain: 'shreeayurved.com',
    tags: ['Healthcare', 'Web', 'SEO', 'Brand'],
    challenge: 'Local and national search visibility for a trusted traditional Ayurveda brand with zero digital footprint.',
    solution: 'Built and launched an authoritative marketing and consultation site optimized for technical SEO, condition-based search, and LocalBusiness schema.',
    result: 'Live healthcare brand site ranking on page 1 for targeted regional wellness queries.',
    previewImage: '/work-previews/shree-ayurved.jpg',
    liveUrl: 'https://www.shreeayurved.com/'
  },
  {
    id: 'paan-luxe',
    name: 'The Paan Luxe',
    domain: 'thepaanluxe.com',
    tags: ['Luxury Goods', 'Ecommerce', 'Brand'],
    challenge: 'Specialty lifestyle gifting brand needed a conversion-focused D2C storefront and premium unboxing identity.',
    solution: 'Engineered an opulent, modern commerce experience with automated pin-code checking, COD safeguards, and corporate gifting workflows.',
    result: 'Live D2C luxury storefront in full production with viral organic traction.',
    previewImage: '/work-previews/the-paan-luxe.jpg',
    liveUrl: 'https://thepaanluxe.com'
  },
  {
    id: 'sonvica',
    name: 'Sonvica Sarees',
    domain: 'sonvicasarees.com',
    tags: ['Textile & Handloom', 'Amazon & Flipkart', 'Ecommerce'],
    challenge: 'Traditional Odisha handloom weaver brand seeking direct-to-consumer national scale.',
    solution: 'Unified Amazon Brand Store, Flipkart catalog, and independent D2C storefront under one inventory and pricing architecture.',
    result: '+310% increase in direct national shipments across Tier-1 metros.',
    previewImage: '/work-previews/yasana-beauty-rituals.jpg',
    liveUrl: 'https://sonvicasarees.com'
  },
  {
    id: 'nilkanth',
    name: 'Nilkanth Paints',
    domain: 'nilkanthpaints.com',
    tags: ['Manufacturing', 'B2B Portal', 'SEO'],
    challenge: 'Regional paint manufacturer required dealer discovery, lead distribution, and shade visualizer.',
    solution: 'Custom web portal with interactive color catalogue, dealer locator, and automated WhatsApp inquiry routing.',
    result: '1,200+ qualified contractor inquiries generated per quarter.',
    previewImage: '/work-previews/shree-ayurved.jpg',
    liveUrl: 'https://nilkanthpaints.com'
  },
  {
    id: 'great-india',
    name: 'Great India Public School',
    domain: 'greatindiapublicschool.org',
    tags: ['Education', 'Web Application', 'Local SEO'],
    challenge: 'Premier educational institution needed transparent admission portal and parent communications.',
    solution: 'Designed and deployed accessible school portal with online registration, fee verification, and high-ranking local schema.',
    result: 'Record admissions filled within 3 weeks of portal launch.',
    previewImage: '/work-previews/the-paan-luxe.jpg',
    liveUrl: 'https://greatindiapublicschool.org'
  }
];

export const CLIENT_LOGOS = [
  'yasanabeautyrituals.in',
  'sonvicasarees.com',
  'shreeayurved.com',
  'nilkanthpaints.com',
  'thepaanluxe.com',
  'greatindiapublicschool.org'
];

export interface OutcomeStack {
  label: string;
  stack: string[];
  href: string;
}

export const OUTCOME_STACKS: OutcomeStack[] = [
  { label: "Launch a Business", stack: ["Brand", "Website", "SEO foundations", "Analytics"], href: "/start-a-project" },
  { label: "Build Ecommerce", stack: ["Shopify / Next.js", "CRO", "Paid ads", "Analytics"], href: "/services/web-development" },
  { label: "Grow Amazon", stack: ["Listing", "A+", "PPC", "Creative", "Reporting"], href: "/services/amazon" },
  { label: "Grow Flipkart", stack: ["Catalog", "Promotions", "Ads", "Reporting"], href: "/services/flipkart" },
  { label: "Generate Leads", stack: ["Landing pages", "SEO", "Meta / Google", "Tracking"], href: "/services/paid-ads" },
  { label: "Improve SEO", stack: ["Technical SEO", "Content", "Local", "Measurement"], href: "/services/seo" },
  { label: "Scale Ads", stack: ["Tracking", "Creative testing", "Optimization", "Reporting"], href: "/services/paid-ads" },
  { label: "Build a Brand", stack: ["Positioning", "Identity", "Guidelines", "Packaging"], href: "/services/branding" }
];

export const OPERATING_STAGES = [
  { step: '01', name: 'Discover', description: 'Deep-dive audit into your unit economics, customer journey, and competitive whitespace.' },
  { step: '02', name: 'Define', description: 'Formulate the technical specification, tech stack, and prioritized growth milestones.' },
  { step: '03', name: 'Build', description: 'Engineered execution across storefront, marketplace catalogs, brand assets, and tracking.' },
  { step: '04', name: 'Launch', description: 'Rigorous QA checklist, load testing, tracking verification, and commercial roll-out.' },
  { step: '05', name: 'Optimize', description: 'Weekly sprint cadences: A/B testing, query harvesting, ad testing, and margin analysis.' },
  { step: '06', name: 'Scale', description: 'Channel expansion, wholesale & export readiness, and omnichannel retention.' }
];

export const PRICING_PACKAGES = [
  {
    tier: 'START',
    subtitle: 'Foundation website or storefront, brand basics, and launch checklist.',
    scope: 'Ideal for early-stage brands, manufacturers, or local businesses launching their digital presence.',
    features: [
      'High-performance Next.js or Shopify storefront',
      'Essential Brand Identity & Visual Assets',
      'Technical SEO & Core Web Vitals Optimization',
      'Google Analytics 4 & Meta Pixel Integration',
      'Mobile-First Responsive UX with Instant WhatsApp Checkout',
      'Delivery within 14 business days'
    ],
    cta: 'Start with Foundation',
    href: '/start-a-project?plan=start'
  },
  {
    tier: 'GROW',
    subtitle: 'Build plus SEO, ads, or marketplace focus — monthly operating cadence.',
    scope: 'For operating businesses ready to generate predictable leads, sales, and organic discovery.',
    popular: true,
    features: [
      'Everything in START package',
      'Dedicated Performance Marketing (Meta & Google Ads)',
      'Continuous Technical & Local SEO Management',
      'Amazon or Flipkart Catalog Health & PPC',
      'Weekly Sprint Calls & Real-time Slack/WhatsApp channel',
      'Bi-weekly creative iteration and testing'
    ],
    cta: 'Scale Your Growth',
    href: '/start-a-project?plan=grow'
  },
  {
    tier: 'SCALE',
    subtitle: 'Full stack: brand, web, marketplaces, paid media, social, reporting.',
    scope: 'For high-growth D2C brands and enterprise operators needing an embedded growth department.',
    features: [
      'Omnichannel Execution (Web + Amazon + Flipkart)',
      'Server-Side CAPI & Custom Attribution Tracking',
      'Short-form Video Production & UGC Direction',
      'Marketplace Brand Registry & A+ Brand Story Ops',
      'Dedicated Full-Stack Lead Engineer & Media Buyer',
      'Guaranteed 4-hour SLA on critical updates'
    ],
    cta: 'Deploy Full Stack',
    href: '/start-a-project?plan=scale'
  },
  {
    tier: 'CUSTOM',
    subtitle: 'Assemble your own stack — strategy call and scoped estimate.',
    scope: 'For complex enterprise architectures, legacy migrations, or international expansion.',
    features: [
      'Headless Commerce Architectures (Shopify Plus / Medusa / Next.js)',
      'B2B Wholesale Portals & ERP Integrations',
      'Multi-currency & International Cross-Border Storefronts',
      'Custom Software & Automation Pipelines',
      'Tailored SLA and on-site sprint options'
    ],
    cta: 'Book Strategy Call',
    href: '/book-strategy-call'
  }
];

export const FOUNDER_INFO = {
  name: 'Tarik Islam',
  role: 'Founder & CEO',
  bio: 'Founder of DEZO. Full-stack engineer and systems architect leading product, engineering standards, and delivery across web, marketplace, and growth systems.',
  location: 'Phase 2, Patia, Bhubaneswar, Odisha 751024',
  phone: '+91 9114411026',
  email: 'contact@dezo.in',
  supportEmail: 'support@dezo.in'
};

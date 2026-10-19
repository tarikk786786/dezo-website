import React from 'react';

export const PrivacyPage: React.FC = () => (
  <div className="w-full py-20 bg-white">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
        COMPLIANCE
      </span>
      <h1 className="font-display text-4xl sm:text-5xl text-[#0B0B0A] mb-8">Privacy Policy</h1>
      <div className="prose text-sm text-[#555451] space-y-6 leading-relaxed">
        <p>Last updated: October 2026. DEZO ("we", "our", or "us") respects your privacy and is committed to protecting your personal data.</p>
        <h3 className="text-base font-semibold text-[#0B0B0A]">1. Diagnostic Tools Data</h3>
        <p>When you use the public DEZO LAB diagnostic scanner, we fetch public HTTP headers and meta tags of the submitted URL. We do not store private credentials, cookies, or internal system configurations.</p>
        <h3 className="text-base font-semibold text-[#0B0B0A]">2. Client Inquiries</h3>
        <p>Contact information submitted through our intake forms is used exclusively for project scoping, communication, and commercial agreements. We do not sell or lease client data to third parties.</p>
        <h3 className="text-base font-semibold text-[#0B0B0A]">3. Data Security</h3>
        <p>All communication is encrypted using industry-standard TLS protocols. For questions, contact support@dezo.in.</p>
      </div>
    </div>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="w-full py-20 bg-white">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
        LEGAL
      </span>
      <h1 className="font-display text-4xl sm:text-5xl text-[#0B0B0A] mb-8">Terms of Service</h1>
      <div className="prose text-sm text-[#555451] space-y-6 leading-relaxed">
        <p>Last updated: October 2026. Welcome to DEZO. By accessing dezo.in or engaging our services, you agree to these terms.</p>
        <h3 className="text-base font-semibold text-[#0B0B0A]">1. Engagement Scope</h3>
        <p>All services are governed by written milestone agreements and statements of work. We deliver technical execution, digital storefronts, marketing management, and brand systems according to agreed specifications.</p>
        <h3 className="text-base font-semibold text-[#0B0B0A]">2. Intellectual Property</h3>
        <p>Upon full milestone payment, all custom code, graphic design assets, and brand collateral created specifically for the client become the exclusive property of the client.</p>
        <h3 className="text-base font-semibold text-[#0B0B0A]">3. Public Tools Use</h3>
        <p>The DEZO LAB public diagnostic tools are provided free for evaluation and benchmarking purposes without warranty of any kind.</p>
      </div>
    </div>
  </div>
);

export const DisclaimerPage: React.FC = () => (
  <div className="w-full py-20 bg-white">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
        TRANSPARENCY
      </span>
      <h1 className="font-display text-4xl sm:text-5xl text-[#0B0B0A] mb-8">Disclaimer</h1>
      <div className="prose text-sm text-[#555451] space-y-6 leading-relaxed">
        <h3 className="text-base font-semibold text-[#0B0B0A]">Marketplace Demo Tools</h3>
        <p>The Amazon and Flipkart diagnostic tools in DEZO LAB are public checklist heuristics derived from public product page structures and best practices. They do not connect directly to private Amazon SP-APIs or Flipkart seller accounts.</p>
        <h3 className="text-base font-semibold text-[#0B0B0A]">Commercial Guarantees</h3>
        <p>As detailed in The DEZO Standard, we guarantee deliverables, engineering quality, speed, and attribution accuracy. We do not guarantee outcomes controlled by external algorithms, third-party auction volatility, or competitive market shocks.</p>
      </div>
    </div>
  </div>
);

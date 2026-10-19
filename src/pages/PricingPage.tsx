import React from 'react';
import { PRICING_PACKAGES } from '../siteData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              PRICING & ENGAGEMENT
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              Transparent Commercial Packages
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              Predictable scoping, documented deliverables, and measurable milestones. Scoped after a short diagnostic—no inflated vanity pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-8 bg-[#F5F3EE] rounded-md border flex flex-col justify-between ${
                  pkg.popular ? 'border-[#B08D57] shadow-md relative' : 'border-[#0B0B0A]/10'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="absolute -top-3 right-6 px-3 py-0.5 bg-[#B08D57] text-white text-[10px] font-mono uppercase tracking-wider rounded-xs font-bold">
                      RECOMMENDED
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-medium text-[#0B0B0A] mb-2">{pkg.tier}</h3>
                  <p className="text-xs text-[#555451] leading-relaxed mb-4">{pkg.subtitle}</p>
                  <p className="text-xs font-mono text-[#8C8B87] pb-4 border-b border-[#0B0B0A]/10 mb-6">{pkg.scope}</p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#0B0B0A]">
                        <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={pkg.href}
                  className={`w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                    pkg.popular
                      ? 'bg-[#0B0B0A] text-white hover:bg-[#555451]'
                      : 'bg-white text-[#0B0B0A] border border-[#0B0B0A]/20 hover:border-[#0B0B0A]'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing FAQ */}
          <div className="mt-20 max-w-3xl mx-auto pt-16 border-t border-[#0B0B0A]/10">
            <h3 className="font-display text-3xl text-center text-[#0B0B0A] mb-10">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6 text-sm text-[#555451]">
              <div className="p-6 bg-[#F5F3EE] rounded-sm">
                <h4 className="font-semibold text-[#0B0B0A] mb-2">How do billing and payment milestones work?</h4>
                <p>Fixed-scope build projects are structured in two milestones: 50% deposit upon kickoff and 50% upon final QA deployment. Ongoing monthly growth sprints are invoiced on the 1st of each calendar month.</p>
              </div>
              <div className="p-6 bg-[#F5F3EE] rounded-sm">
                <h4 className="font-semibold text-[#0B0B0A] mb-2">Can we assemble custom capabilities?</h4>
                <p>Yes. If you only require Amazon seller operations + Meta ads, or custom Next.js engineering without branding, we provide itemized custom engagements under the CUSTOM tier.</p>
              </div>
              <div className="p-6 bg-[#F5F3EE] rounded-sm">
                <h4 className="font-semibold text-[#0B0B0A] mb-2">Do you require long-term lock-in contracts?</h4>
                <p>No. Build engagements conclude upon verified launch. Ongoing growth partnerships operate on flexible 30-day rolling sprint terms with no hostage data or lock-in.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

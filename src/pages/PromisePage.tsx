import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PromisePage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              THE DEZO STANDARD
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              We Guarantee What We Control.
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              Agency contracts are frequently plagued by vague promises and vanity metrics. The DEZO Standard is our formal commitment to radical transparency and implementation accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* What We Guarantee */}
            <div className="p-8 bg-[#F5F3EE] rounded-lg border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h2 className="font-display text-2xl text-[#0B0B0A]">What We Explicitly Guarantee</h2>
              </div>
              <ul className="space-y-4 text-sm text-[#0B0B0A]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Defined Scope & Deadlines: </strong>Milestones and delivery dates are contractually documented with sprint tracking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Engineering Rigor: </strong>100% clean, documented code, &lt;1.2s Core Web Vitals, and strict accessibility standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Attribution Accuracy: </strong>Server-side CAPI and event verification before a single ad dollar is scaled.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ownership & Portability: </strong>You own 100% of all code, creative assets, ad accounts, and data pipelines.</span>
                </li>
              </ul>
            </div>

            {/* What We Do Not Fake Guarantee */}
            <div className="p-8 bg-[#F5F3EE] rounded-lg border border-[#0B0B0A]/10">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-6 h-6 text-[#B08D57]" />
                <h2 className="font-display text-2xl text-[#0B0B0A]">What Honest Operators Do Not Guarantee</h2>
              </div>
              <ul className="space-y-4 text-sm text-[#555451]">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Uncontrollable Ad Auction Volatility: </strong>We do not guarantee static CPMs or ROAS in holiday auction spikes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Arbitrary Search Algorithm Updates: </strong>We guarantee technical compliance and quality content, not Google core update immunity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Flawed Product-Market Fit: </strong>Traffic can be engineered; unit economics and product quality must be commercially viable.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B0B0A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#555451] transition-colors"
            >
              Start With The DEZO Standard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

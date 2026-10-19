import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, ArrowRight, CheckCircle2, Sparkles, Shield, 
  TrendingUp, Layers, Compass, Globe, ShoppingBag, BarChart3, ChevronRight
} from 'lucide-react';
import { 
  SERVICES, 
  WORK_ARCHIVE, 
  CLIENT_LOGOS, 
  OUTCOME_STACKS, 
  OPERATING_STAGES, 
  PRICING_PACKAGES, 
  FOUNDER_INFO 
} from '../siteData';
import { GrowthLab } from '../components/GrowthLab';

export const HomePage: React.FC = () => {
  const [selectedOutcomeIndex, setSelectedOutcomeIndex] = useState(0);
  const [activeEngineStep, setActiveEngineStep] = useState(0);

  const engineSteps = [
    { num: '01', name: 'Brand', desc: 'Positioning & identity', href: '/services/branding' },
    { num: '02', name: 'Website', desc: 'Storefront & applications', href: '/services/web-development' },
    { num: '03', name: 'SEO', desc: 'Organic discovery', href: '/services/seo' },
    { num: '04', name: 'Ads', desc: 'Meta & Google', href: '/services/paid-ads' },
    { num: '05', name: 'Marketplace', desc: 'Amazon & Flipkart', href: '/services/amazon' },
    { num: '06', name: 'Conversion', desc: 'CRO & UX architecture', href: '/services/web-development' },
    { num: '07', name: 'Analytics', desc: 'Measurement & CAPI', href: '/services/growth-systems' },
    { num: '08', name: 'Scale', desc: 'Operate & optimize', href: '/promise' }
  ];

  const activeOutcome = OUTCOME_STACKS[selectedOutcomeIndex];

  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative w-full pt-16 sm:pt-24 pb-20 lg:pb-32 overflow-hidden border-b border-[#0B0B0A]/10 bg-[#F5F3EE]">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white border border-[#0B0B0A]/10 rounded-full text-xs font-mono tracking-wider text-[#0B0B0A] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" />
              <span>INTRODUCING DEZO</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#0B0B0A] leading-[1.08] mb-6">
              BUILD. MARKET. GROW.
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#555451] max-w-3xl font-normal leading-relaxed mb-10">
              One commercial system for websites, marketplaces, advertising, SEO and brand—built for businesses ready to scale.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/start-a-project"
                className="px-6 sm:px-8 py-3.5 bg-[#0B0B0A] hover:bg-[#555451] text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-sm flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="px-6 sm:px-8 py-3.5 bg-transparent border border-[#0B0B0A]/20 hover:border-[#0B0B0A] text-[#0B0B0A] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
              >
                View Our Work
              </Link>
            </div>

            <div className="text-xs font-mono text-[#8C8B87] tracking-wider">
              Founding studio · Bhubaneswar, Odisha · Delivery across India
            </div>
          </div>

        </div>
      </section>

      {/* Live Proof Bar */}
      <section className="w-full py-6 bg-white border-b border-[#0B0B0A]/10 overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B08D57] font-semibold shrink-0">
              LIVE PROOF · SELECTED PRODUCTION SITES
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#555451]">
              {CLIENT_LOGOS.map((client, idx) => (
                <span key={idx} className="hover:text-[#0B0B0A] transition-colors cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="w-full py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-3">
                WHY WE EXIST
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0B0B0A] leading-tight">
                ONE PARTNER. EVERY DIGITAL TOUCHPOINT.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-[#555451] leading-relaxed">
              <p>
                Most businesses assemble freelancers and agencies in pieces: one for the website, another for Amazon ads, a freelancer for SEO, and someone else for packaging.
              </p>
              <p className="text-[#0B0B0A] font-medium">
                The result is disconnected data, finger-pointing, and wasted marketing spend. DEZO ships the full stack—web, marketplaces, ads, SEO, and brand—as one connected operating system.
              </p>
            </div>
          </div>

          {/* 5 Operating Capabilities Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'BUILD', subtitle: 'Websites, ecommerce, applications', link: '/services/web-development' },
              { title: 'GROW', subtitle: 'SEO, content, organic acquisition', link: '/services/seo' },
              { title: 'ADVERTISE', subtitle: 'Google, Meta, retargeting', link: '/services/paid-ads' },
              { title: 'SELL', subtitle: 'Amazon, Flipkart, ecommerce', link: '/services/amazon' },
              { title: 'BRAND', subtitle: 'Identity, creative, social, content', link: '/services/branding' }
            ].map((cap, idx) => (
              <Link
                key={idx}
                to={cap.link}
                className="group p-6 bg-white border border-[#0B0B0A]/10 rounded-sm hover:border-[#B08D57] transition-all hover:shadow-xs flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <h3 className="font-display text-2xl text-[#0B0B0A] group-hover:text-[#B08D57] transition-colors mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#555451] leading-normal">{cap.subtitle}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-mono text-[#8C8B87] group-hover:text-[#0B0B0A]">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The DEZO Engine: 8 Connected Steps */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-3">
              PRODUCT · THE DEZO ENGINE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0B0B0A] uppercase mb-4">
              Everything connected
            </h2>
            <p className="text-base text-[#555451] leading-relaxed">
              Brand → website → SEO & ads → Amazon / Flipkart → conversion → analytics → scale. The operating system behind every DEZO engagement—not a stack of disconnected vendors.
            </p>
            <div className="mt-4 font-mono text-xs text-[#8C8B87]">
              Focus · <span className="font-semibold text-[#0B0B0A]">{engineSteps[activeEngineStep].name}</span> — {engineSteps[activeEngineStep].desc}
            </div>
          </div>

          {/* 8 Columns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border border-[#0B0B0A]/10 divide-x divide-y lg:divide-y-0 divide-[#0B0B0A]/10">
            {engineSteps.map((step, idx) => {
              const isActive = activeEngineStep === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveEngineStep(idx)}
                  className={`p-5 min-h-[180px] flex flex-col justify-between transition-colors relative cursor-pointer ${
                    isActive ? 'bg-[#F0EDE5]' : 'bg-transparent hover:bg-[#F5F3EE]'
                  }`}
                >
                  <span className="font-mono text-xs text-[#8C8B87]">{step.num}</span>
                  <div>
                    <h3 className="font-display text-xl text-[#0B0B0A] leading-tight block mb-1">
                      {step.name}
                    </h3>
                    <span className={`text-[11px] text-[#555451] block transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    }`}>
                      {step.desc}
                    </span>
                  </div>
                  {isActive && (
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#B08D57]" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Selected Work Archive */}
      <section className="w-full py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
                SELECTED WORK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0B0B0A]">
                Evidence over decoration
              </h2>
              <p className="text-sm text-[#555451] mt-2">
                Large project stories with live production previews.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0A] hover:text-[#B08D57] transition-colors"
            >
              <span>View all work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {WORK_ARCHIVE.slice(0, 3).map((work) => (
              <div
                key={work.id}
                className="group bg-white border border-[#0B0B0A]/10 rounded-md overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-[#EFECE5]">
                    <img
                      src={work.previewImage}
                      alt={work.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-1 text-[10px] font-mono uppercase text-[#8C8B87] mb-3">
                      {work.tags.join(' · ')}
                    </div>
                    <h3 className="font-display text-2xl font-normal text-[#0B0B0A] mb-1">
                      {work.name}
                    </h3>
                    <p className="font-mono text-xs text-[#B08D57] mb-4">{work.domain}</p>

                    <div className="space-y-2 text-xs text-[#555451]">
                      <p><strong className="text-[#0B0B0A]">Challenge. </strong>{work.challenge}</p>
                      <p><strong className="text-[#0B0B0A]">What we did. </strong>{work.solution}</p>
                      <p><strong className="text-[#0B0B0A]">Result. </strong>{work.result}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0B0B0A] hover:text-[#B08D57] transition-colors"
                  >
                    <span>Visit live site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Embedded DEZO LAB Diagnostic Scanner */}
      <GrowthLab />

      {/* Interactive Outcome Selector ("What are you trying to grow?") */}
      <section className="w-full py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              START HERE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0B0B0A] mb-3">
              What are you trying to grow?
            </h2>
            <p className="text-base text-[#555451]">
              Pick the outcome. We assemble the stack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Outcome Buttons List */}
            <div className="lg:col-span-5 flex flex-col border-y border-[#0B0B0A]/10 divide-y divide-[#0B0B0A]/10 bg-white rounded-md">
              {OUTCOME_STACKS.map((item, idx) => {
                const isSelected = selectedOutcomeIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedOutcomeIndex(idx)}
                    className={`w-full text-left px-5 py-4 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected 
                        ? 'text-[#0B0B0A] bg-[#F5F3EE] font-semibold' 
                        : 'text-[#555451] hover:text-[#0B0B0A] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isSelected && <ChevronRight className="w-4 h-4 text-[#B08D57]" />}
                  </button>
                );
              })}
            </div>

            {/* Recommended Stack Box */}
            <div className="lg:col-span-7 bg-white p-8 rounded-md border border-[#0B0B0A]/10 flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08D57] font-semibold block mb-3">
                  RECOMMENDED COMMERCIAL STACK
                </span>
                <h3 className="font-display text-3xl text-[#0B0B0A] mb-6">
                  {activeOutcome.label}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-[#0B0B0A] mb-8">
                  {activeOutcome.stack.map((item, i) => (
                    <React.Fragment key={i}>
                      <span className="px-3 py-1.5 bg-[#F5F3EE] rounded-xs border border-[#0B0B0A]/5 font-medium">
                        {item}
                      </span>
                      {i < activeOutcome.stack.length - 1 && (
                        <span className="text-[#8C8B87]">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  to={activeOutcome.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B0B0A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#555451] transition-colors"
                >
                  <span>Build my growth plan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Operating Model Cadence */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              OPERATING MODEL
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0B0B0A] mb-3">
              How DEZO runs
            </h2>
            <p className="text-base text-[#555451]">
              A clear cadence from discovery to ongoing optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {OPERATING_STAGES.map((st, idx) => (
              <div key={idx} className="p-6 bg-[#F5F3EE] rounded-sm border border-[#0B0B0A]/5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#B08D57] font-semibold">{st.step}</span>
                  <h3 className="font-display text-2xl text-[#0B0B0A] mt-2 mb-2">{st.name}</h3>
                  <p className="text-xs text-[#555451] leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="w-full py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
                PRICING & ENGAGEMENT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0B0B0A]">
                Transparent engagement models
              </h2>
              <p className="text-sm text-[#555451] mt-2">
                Exact rates after a short diagnostic—no vanity numbers.
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0A] hover:text-[#B08D57] transition-colors"
            >
              <span>Full pricing details</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 bg-white rounded-md border flex flex-col justify-between ${
                  pkg.popular ? 'border-[#B08D57] shadow-sm relative' : 'border-[#0B0B0A]/10'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="absolute -top-3 right-6 px-2.5 py-0.5 bg-[#B08D57] text-white text-[10px] font-mono uppercase tracking-wider rounded-xs">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-medium text-[#0B0B0A] mb-2">{pkg.tier}</h3>
                  <p className="text-xs text-[#555451] leading-relaxed mb-6">{pkg.subtitle}</p>

                  <div className="pt-4 border-t border-[#0B0B0A]/5 space-y-2.5 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#0B0B0A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={pkg.href}
                  className={`w-full py-3 text-center text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                    pkg.popular
                      ? 'bg-[#0B0B0A] text-white hover:bg-[#555451]'
                      : 'bg-[#F5F3EE] text-[#0B0B0A] hover:bg-[#EAE7DF]'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The DEZO Standard */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
                THE DEZO STANDARD
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0B0B0A] mb-6">
                We guarantee what we control.
              </h2>
              <p className="text-base sm:text-lg text-[#555451] leading-relaxed mb-8">
                Defined scope, documented deliverables, quality assurance, transparent reporting, implementation accountability and clear communication. We do not guarantee outcomes controlled by algorithms, auctions, marketplaces or market conditions.
              </p>
              <Link
                to="/promise"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0A] hover:text-[#B08D57] transition-colors"
              >
                <span>Read the full promise system</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 bg-[#F5F3EE] p-8 rounded-lg border border-[#0B0B0A]/10 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0B0B0A] text-sm mb-1">Commercial Thinking</h4>
                  <p className="text-[#555451]">Every build and campaign is framed around the business outcome it must support.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-[#0B0B0A]/5">
                <Layers className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0B0B0A] text-sm mb-1">Technical Execution</h4>
                  <p className="text-[#555451]">Engineering standards, measurement foundations and QA before scale.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-[#0B0B0A]/5">
                <TrendingUp className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0B0B0A] text-sm mb-1">Long-term Partnership</h4>
                  <p className="text-[#555451]">One operating cadence across web, growth and marketplace—not vendor churn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / About Section */}
      <section className="w-full py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              FOUNDING LEADERSHIP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B0B0A] mb-4">
              {FOUNDER_INFO.name}
            </h2>
            <p className="font-mono text-sm text-[#B08D57] mb-6">{FOUNDER_INFO.role}</p>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed mb-8">
              {FOUNDER_INFO.bio}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#555451]">
              <span>📍 {FOUNDER_INFO.location}</span>
              <a href={`tel:${FOUNDER_INFO.phone}`} className="hover:text-[#0B0B0A]">📞 {FOUNDER_INFO.phone}</a>
              <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:text-[#0B0B0A]">✉️ {FOUNDER_INFO.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="w-full py-24 lg:py-32 bg-[#0B0B0A] text-[#F5F3EE]">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-3">
              GET STARTED WITH DEZO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
              Ready to build or grow?
            </h2>
            <p className="text-lg text-[#F5F3EE]/70 leading-relaxed mb-10">
              Tell us what you're launching, what isn't working, and where you want to go next. We'll reply with a clear next step.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/start-a-project"
                className="px-8 py-4 bg-[#F5F3EE] hover:bg-white text-[#0B0B0A] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/growth-lab"
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
              >
                Free site check
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

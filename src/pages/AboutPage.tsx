import React from 'react';
import { FOUNDER_INFO } from '../siteData';
import { ArrowUpRight, ShieldCheck, Terminal, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              ABOUT DEZO
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              A Serious Company for Brands That Sell
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              Founded in Bhubaneswar, Odisha. Built to replace fragmented agency stacks with unified commercial digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-base text-[#555451] leading-relaxed">
              <h2 className="font-display text-3xl text-[#0B0B0A]">
                The Story Behind DEZO
              </h2>
              <p>
                In 2026, modern brands face a multi-channel operational crisis. To sell products successfully in India and abroad, a company needs a fast storefront, high-converting Meta and Google ads, technical SEO, an optimized Amazon & Flipkart seller catalog, and consistent brand packaging.
              </p>
              <p>
                Ordinarily, this forces founders to hire 4 to 5 separate agencies or freelance contractors. The result is fragmented messaging, incompatible tracking pipelines, and endless finger-pointing whenever sales dip.
              </p>
              <p className="text-[#0B0B0A] font-medium">
                DEZO was built as an integrated growth engine. We combine engineering rigor, commercial systems architecture, and relentless execution under one roof.
              </p>

              <div className="pt-8 border-t border-[#0B0B0A]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-[#F5F3EE] rounded-sm">
                  <Terminal className="w-5 h-5 text-[#B08D57] mb-3" />
                  <h3 className="font-semibold text-[#0B0B0A] text-sm mb-1">Code & Infrastructure</h3>
                  <p className="text-xs text-[#555451]">We write bespoke code, minimize app bloat, and engineer sub-second load times.</p>
                </div>
                <div className="p-5 bg-[#F5F3EE] rounded-sm">
                  <Award className="w-5 h-5 text-[#B08D57] mb-3" />
                  <h3 className="font-semibold text-[#0B0B0A] text-sm mb-1">Commercial Integrity</h3>
                  <p className="text-xs text-[#555451]">We guarantee what we control: scope, speed, tracking, and deliverables accountability.</p>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="lg:col-span-5 bg-[#F5F3EE] p-8 rounded-lg border border-[#0B0B0A]/10 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#B08D57] font-bold block mb-1">
                  FOUNDING LEADERSHIP
                </span>
                <h3 className="font-display text-3xl text-[#0B0B0A]">{FOUNDER_INFO.name}</h3>
                <p className="text-xs font-mono text-[#8C8B87]">{FOUNDER_INFO.role}</p>
              </div>

              <p className="text-sm text-[#555451] leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              <div className="pt-4 border-t border-[#0B0B0A]/10 space-y-2 text-xs font-mono text-[#555451]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B08D57]" />
                  <span>{FOUNDER_INFO.location}</span>
                </div>
                <div>📞 {FOUNDER_INFO.phone}</div>
                <div>✉️ {FOUNDER_INFO.email}</div>
              </div>

              <div className="pt-4">
                <Link
                  to="/start-a-project"
                  className="w-full py-3 bg-[#0B0B0A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#555451] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Work Directly with Tarik</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

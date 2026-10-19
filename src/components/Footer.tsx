import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { FOUNDER_INFO } from '../siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#0B0B0A]/10 bg-[#F5F3EE] pt-16 pb-12 text-[#0B0B0A]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#0B0B0A]/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 group mb-6">
                <span className="font-display text-3xl font-medium tracking-tight text-[#0B0B0A] group-hover:text-[#B08D57] transition-colors">
                  DEZO
                </span>
                <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
              </Link>
              <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#B08D57] mb-3">
                Introducing DEZO
              </p>
              <p className="text-base text-[#555451] max-w-md leading-relaxed mb-6 font-normal">
                A new growth company for brands ready to sell seriously. Websites, ecommerce, marketplaces, advertising, SEO, social and brand—connected into one commercial system.
              </p>
              <p className="text-xs font-mono text-[#8C8B87]">
                Founded in India. Built for businesses everywhere.
              </p>
            </div>

            {/* Founder badge */}
            <div className="mt-8 pt-6 border-t border-[#0B0B0A]/5">
              <span className="text-[10px] font-mono uppercase text-[#8C8B87] tracking-wider block mb-1">
                Founder & Systems Architect
              </span>
              <p className="text-sm font-medium text-[#0B0B0A]">
                {FOUNDER_INFO.name} <span className="text-[#8C8B87] font-normal">— {FOUNDER_INFO.role}</span>
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B0B0A] mb-5">
              Product & Systems
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#555451]">
              <li>
                <Link to="/services/web-development" className="hover:text-[#0B0B0A] transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services/paid-ads" className="hover:text-[#0B0B0A] transition-colors">Performance Marketing</Link>
              </li>
              <li>
                <Link to="/services/amazon" className="hover:text-[#0B0B0A] transition-colors">Marketplace Growth</Link>
              </li>
              <li>
                <Link to="/services/seo" className="hover:text-[#0B0B0A] transition-colors">SEO & Organic</Link>
              </li>
              <li>
                <Link to="/services/branding" className="hover:text-[#0B0B0A] transition-colors">Brand & Creative</Link>
              </li>
              <li>
                <Link to="/growth-lab" className="hover:text-[#0B0B0A] transition-colors flex items-center gap-1.5 font-medium text-[#B08D57]">
                  <span>DEZO LAB</span>
                  <span className="text-[9px] px-1 bg-[#B08D57]/20 rounded-xs">FREE</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#0B0B0A] transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B0B0A] mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#555451]">
              <li>
                <Link to="/work" className="hover:text-[#0B0B0A] transition-colors">Work Archive</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0B0B0A] transition-colors">About DEZO</Link>
              </li>
              <li>
                <Link to="/promise" className="hover:text-[#0B0B0A] transition-colors">DEZO Standard</Link>
              </li>
              <li>
                <Link to="/locations/bhubaneswar" className="hover:text-[#0B0B0A] transition-colors">Bhubaneswar Studio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0B0B0A] transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/start-a-project" className="hover:text-[#0B0B0A] transition-colors font-medium text-[#0B0B0A]">Get Started</Link>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B0B0A] mb-5">
              Studio
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#555451]">
              <a href={`tel:${FOUNDER_INFO.phone}`} className="flex items-center gap-2 hover:text-[#0B0B0A] transition-colors">
                <Phone className="w-4 h-4 text-[#B08D57]" />
                <span>{FOUNDER_INFO.phone}</span>
              </a>
              <a href={`mailto:${FOUNDER_INFO.email}`} className="flex items-center gap-2 hover:text-[#0B0B0A] transition-colors">
                <Mail className="w-4 h-4 text-[#B08D57]" />
                <span>{FOUNDER_INFO.email}</span>
              </a>
              <a href={`mailto:${FOUNDER_INFO.supportEmail}`} className="flex items-center gap-2 hover:text-[#0B0B0A] transition-colors">
                <Mail className="w-4 h-4 text-[#B08D57]" />
                <span>{FOUNDER_INFO.supportEmail}</span>
              </a>
              <div className="flex items-start gap-2 pt-2 text-xs leading-relaxed text-[#8C8B87]">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span>{FOUNDER_INFO.location}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0B0B0A]/5">
              <Link
                to="/book-strategy-call"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0A] hover:text-[#B08D57] transition-colors"
              >
                <span>Book 30-Min Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C8B87]">
          <div>
            © 2026 DEZO · Founding studio, India. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#0B0B0A] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[#0B0B0A] transition-colors">Terms</Link>
            <Link to="/disclaimer" className="hover:text-[#0B0B0A] transition-colors">Disclaimer</Link>
            <span className="text-[#B08D57]">dezo.in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

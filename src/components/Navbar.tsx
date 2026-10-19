import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#0B0B0A]/10 shadow-xs' : 'bg-[#F5F3EE] border-b border-[#0B0B0A]/5'}`}>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 select-none" aria-label="DEZO homepage">
            <span className="font-display text-2xl sm:text-3xl tracking-tight text-[#0B0B0A] font-medium group-hover:text-[#B08D57] transition-colors">
              DEZO
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#0B0B0A]/80 tracking-wide uppercase">
            
            {/* Services with dropdown */}
            <div 
              className="relative py-2 group"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link to="/services" className="flex items-center gap-1 hover:text-[#0B0B0A] transition-colors">
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full -left-4 w-72 rounded-lg bg-[#FFFFFF] p-3 shadow-xl border border-[#0B0B0A]/10 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#8C8B87] px-3 py-1">Capabilities</div>
                  <Link to="/services/web-development" className="block px-3 py-2 rounded-md hover:bg-[#F5F3EE] transition-colors">
                    <div className="text-xs font-semibold text-[#0B0B0A]">Web Development</div>
                    <div className="text-[11px] text-[#555451] font-normal normal-case">Shopify & Next.js storefronts</div>
                  </Link>
                  <Link to="/services/growth-systems" className="block px-3 py-2 rounded-md hover:bg-[#F5F3EE] transition-colors">
                    <div className="text-xs font-semibold text-[#0B0B0A]">Growth Systems</div>
                    <div className="text-[11px] text-[#555451] font-normal normal-case">Attribution & analytics architecture</div>
                  </Link>
                  <Link to="/services/seo" className="block px-3 py-2 rounded-md hover:bg-[#F5F3EE] transition-colors">
                    <div className="text-xs font-semibold text-[#0B0B0A]">SEO & Organic</div>
                    <div className="text-[11px] text-[#555451] font-normal normal-case">Technical & local organic reach</div>
                  </Link>
                  <Link to="/services/branding" className="block px-3 py-2 rounded-md hover:bg-[#F5F3EE] transition-colors">
                    <div className="text-xs font-semibold text-[#0B0B0A]">Brand & Creative</div>
                    <div className="text-[11px] text-[#555451] font-normal normal-case">Identity, naming & packaging</div>
                  </Link>
                  <Link to="/services/amazon" className="block px-3 py-2 rounded-md hover:bg-[#F5F3EE] transition-colors">
                    <div className="text-xs font-semibold text-[#0B0B0A]">Marketplace Amazon</div>
                    <div className="text-[11px] text-[#555451] font-normal normal-case">Catalog indexing & PPC ads</div>
                  </Link>
                  <Link to="/services/flipkart" className="block px-3 py-2 rounded-md hover:bg-[#F5F3EE] transition-colors">
                    <div className="text-xs font-semibold text-[#0B0B0A]">Marketplace Flipkart</div>
                    <div className="text-[11px] text-[#555451] font-normal normal-case">F-Assured & seller ops</div>
                  </Link>
                  <Link to="/services/paid-ads" className="block px-3 py-2 rounded-md hover:bg-[#F5F3EE] transition-colors">
                    <div className="text-xs font-semibold text-[#0B0B0A]">Performance Marketing</div>
                    <div className="text-[11px] text-[#555451] font-normal normal-case">Meta & Google Ads scaling</div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/work" className="hover:text-[#0B0B0A] transition-colors">Work</Link>
            
            {/* Lab highlight link */}
            <Link to="/growth-lab" className="flex items-center gap-1.5 hover:text-[#0B0B0A] transition-colors">
              <span>Lab</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#B08D57]/15 text-[#B08D57] font-mono font-bold tracking-tight">11 TOOLS</span>
            </Link>

            <Link to="/pricing" className="hover:text-[#0B0B0A] transition-colors">Pricing</Link>
            <Link to="/about" className="hover:text-[#0B0B0A] transition-colors">About</Link>
            <Link to="/promise" className="hover:text-[#0B0B0A] transition-colors">Standard</Link>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/growth-lab"
              className="text-xs font-medium uppercase tracking-wider text-[#0B0B0A]/70 hover:text-[#0B0B0A] px-3 py-1.5 transition-colors"
            >
              Run Audit
            </Link>
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-wider bg-[#0B0B0A] text-[#F5F3EE] hover:bg-[#555451] transition-colors rounded-sm"
            >
              <span>Get started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button 
            type="button"
            className="lg:hidden p-2 text-[#0B0B0A] hover:bg-[#0B0B0A]/5 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#F5F3EE] border-t border-[#0B0B0A]/10 p-6 overflow-y-auto z-40 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4 text-base font-medium">
            <div className="text-[11px] font-mono uppercase text-[#8C8B87] tracking-widest pt-2">Menu</div>
            <Link to="/" className="py-2 border-b border-[#0B0B0A]/5 text-[#0B0B0A]">Home</Link>
            <Link to="/services" className="py-2 border-b border-[#0B0B0A]/5 text-[#0B0B0A]">Services Hub</Link>
            <div className="pl-4 flex flex-col gap-2 text-sm text-[#555451]">
              <Link to="/services/web-development">• Web Development</Link>
              <Link to="/services/growth-systems">• Growth Systems</Link>
              <Link to="/services/seo">• SEO & Organic</Link>
              <Link to="/services/branding">• Brand & Creative</Link>
              <Link to="/services/amazon">• Amazon Growth</Link>
              <Link to="/services/flipkart">• Flipkart Operations</Link>
              <Link to="/services/paid-ads">• Performance Ads</Link>
            </div>
            <Link to="/work" className="py-2 border-b border-[#0B0B0A]/5 text-[#0B0B0A]">Selected Work</Link>
            <Link to="/growth-lab" className="py-2 border-b border-[#0B0B0A]/5 flex items-center justify-between text-[#0B0B0A]">
              <span>DEZO Lab (11 Tools)</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#B08D57]/20 text-[#B08D57] font-mono">FREE SCANS</span>
            </Link>
            <Link to="/pricing" className="py-2 border-b border-[#0B0B0A]/5 text-[#0B0B0A]">Pricing & Packages</Link>
            <Link to="/about" className="py-2 border-b border-[#0B0B0A]/5 text-[#0B0B0A]">About Tarik Islam & DEZO</Link>
            <Link to="/promise" className="py-2 border-b border-[#0B0B0A]/5 text-[#0B0B0A]">The DEZO Standard</Link>
            <Link to="/contact" className="py-2 border-b border-[#0B0B0A]/5 text-[#0B0B0A]">Contact Studio</Link>

            <div className="pt-6">
              <Link
                to="/start-a-project"
                className="w-full py-3.5 flex items-center justify-center gap-2 bg-[#0B0B0A] text-[#F5F3EE] uppercase tracking-wider text-xs font-semibold rounded-sm shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

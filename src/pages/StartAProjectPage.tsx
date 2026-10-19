import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FOUNDER_INFO } from '../siteData';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export const StartAProjectPage: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const initialDomain = query.get('domain') || '';
  const initialService = query.get('service') || '';
  const initialPlan = query.get('plan') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    websiteUrl: initialDomain,
    service: initialService || (initialPlan ? `Plan: ${initialPlan.toUpperCase()}` : ''),
    budget: '',
    timeline: 'Within 2-4 weeks',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textMessage = 
      `*New Project Inquiry for DEZO Team* 👋\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🏢 *Business:* ${formData.businessName || 'N/A'}\n` +
      `🌐 *Website/Domain:* ${formData.websiteUrl || 'N/A'}\n` +
      `🛠️ *Service Required:* ${formData.service || 'Full Stack Growth'}\n` +
      `💰 *Estimated Budget:* ${formData.budget || 'To be discussed'}\n` +
      `⏱️ *Timeline:* ${formData.timeline}\n\n` +
      `💬 *Project Scope/Notes:*\n${formData.message || 'Ready to discuss next steps.'}\n\n` +
      `— Sent via DEZO Website Inquiry`;

    const whatsappUrl = `https://wa.me/919114411026?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              COMMERCIAL INTAKE
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              Start a Project
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              Tell us what you are launching, what isn't converting, and where you need to scale next. We review every brief within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-[#F5F3EE] p-8 sm:p-12 rounded-lg border border-[#0B0B0A]/10">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl text-[#0B0B0A]">Inquiry Transmitted</h3>
                <p className="text-sm text-[#555451] max-w-md mx-auto">
                  Your project brief has been formatted and opened in WhatsApp. You can also chat directly with Tarik Islam (+91 9114411026).
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-semibold text-[#0B0B0A] underline uppercase tracking-wider"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tarik Islam"
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Phone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9114411026"
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="founder@yourbrand.in"
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Acme D2C"
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Website / Amazon URL
                    </label>
                    <input
                      type="text"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://yourbrand.in"
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    >
                      <option value="">Select Service...</option>
                      <option value="Web Development & CRO">Web Development & Storefront CRO</option>
                      <option value="Performance Marketing (Meta/Google)">Performance Marketing (Meta/Google Ads)</option>
                      <option value="Amazon & Flipkart Scaling">Marketplace Scaling (Amazon/Flipkart)</option>
                      <option value="Technical & Local SEO">Technical & Local SEO</option>
                      <option value="Brand & Packaging">Brand Identity & Packaging</option>
                      <option value="Full Stack Commercial Operating System">Full Stack Operating System</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    >
                      <option value="">Select Range...</option>
                      <option value="₹50,000 – ₹1.5 Lakh">₹50,000 – ₹1.5 Lakh (Start tier)</option>
                      <option value="₹1.5 Lakh – ₹4 Lakh">₹1.5 Lakh – ₹4 Lakh (Grow tier)</option>
                      <option value="₹4 Lakh – ₹10 Lakh+">₹4 Lakh – ₹10 Lakh+ (Scale / Custom)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    >
                      <option value="Immediate (Next 7-14 days)">Immediate (Next 7-14 days)</option>
                      <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                      <option value="Next quarter">Next quarter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-2">
                    Project Goals / Bottlenecks
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what is currently holding back growth or what you need to ship..."
                    className="w-full p-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-[#0B0B0A] hover:bg-[#555451] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#B08D57]" />
                  <span>Submit & Connect with Founder on WhatsApp</span>
                </button>

              </form>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

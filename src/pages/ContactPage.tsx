import React, { useState } from 'react';
import { FOUNDER_INFO } from '../siteData';
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi DEZO Team!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    window.open(`https://wa.me/919114411026?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="w-full">
      <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              STUDIO CONTACT
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              Direct Contact
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              We respond to inquiries within 12 business hours. Call, message, or visit our founding studio in Patia, Bhubaneswar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-display text-2xl text-[#0B0B0A] mb-4">Founding Studio</h3>
                <div className="space-y-4 text-sm text-[#555451]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B0B0A] block">Physical Studio Address:</strong>
                      <span>{FOUNDER_INFO.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B0B0A] block">Direct Phone & WhatsApp:</strong>
                      <a href={`tel:${FOUNDER_INFO.phone}`} className="hover:text-[#0B0B0A] font-mono">{FOUNDER_INFO.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B0B0A] block">Commercial Inquiries:</strong>
                      <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:text-[#0B0B0A]">{FOUNDER_INFO.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B0B0A] block">Operating Hours:</strong>
                      <span>Monday – Saturday: 9:30 AM – 7:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#F5F3EE] rounded-sm border border-[#0B0B0A]/10">
                <span className="text-[10px] font-mono uppercase text-[#B08D57] font-bold block mb-1">FOUNDER</span>
                <p className="font-semibold text-[#0B0B0A]">{FOUNDER_INFO.name} — {FOUNDER_INFO.role}</p>
                <p className="text-xs text-[#555451] mt-2 leading-relaxed">
                  Available for strategic consultations on ecommerce architecture, Amazon Buy Box defense, and paid media funnels.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-[#F5F3EE] p-8 sm:p-10 rounded-lg border border-[#0B0B0A]/10">
              <h3 className="font-display text-2xl text-[#0B0B0A] mb-2">Send a Message</h3>
              <p className="text-xs text-[#555451] mb-6">Connect immediately with our team via WhatsApp.</p>

              {sent ? (
                <div className="py-12 text-center">
                  <h4 className="font-display text-2xl text-[#0B0B0A] mb-2">Message Dispatched!</h4>
                  <p className="text-xs text-[#555451]">Opening WhatsApp conversation with Tarik Islam.</p>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 px-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#0B0B0A] mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-4 bg-white border border-[#0B0B0A]/15 text-sm rounded-sm focus:border-[#B08D57] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#0B0B0A] hover:bg-[#555451] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                  >
                    Send to Studio WhatsApp
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

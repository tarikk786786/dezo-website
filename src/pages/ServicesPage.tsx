import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, ServiceItem } from '../siteData';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();

  // If slug is provided, show detail page
  if (slug) {
    const service = SERVICES.find(s => s.slug === slug);
    if (!service) {
      return (
        <div className="py-24 text-center">
          <h2 className="text-2xl font-bold">Service Not Found</h2>
          <Link to="/services" className="text-[#B08D57] underline mt-4 inline-block">Back to Services</Link>
        </div>
      );
    }

    return (
      <div className="w-full">
        {/* Service Hero */}
        <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
                SERVICE · {service.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#555451] leading-relaxed mb-8">
                {service.tagline}
              </p>
              <Link
                to={`/start-a-project?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B0B0A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#555451] transition-colors"
              >
                <span>Engage for {service.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl text-[#0B0B0A] mb-6">
                  Commercial Architecture & Implementation
                </h2>
                <p className="text-base text-[#555451] leading-relaxed mb-8">
                  {service.description}
                </p>

                <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-[#0B0B0A] mb-4">
                  Standard Deliverables
                </h3>
                <div className="space-y-3 mb-10">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[#F5F3EE] rounded-sm text-sm text-[#0B0B0A]">
                      <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F5F3EE] p-8 rounded-lg border border-[#0B0B0A]/10 h-fit space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8C8B87] block mb-1">Target Benchmark</span>
                  <p className="font-display text-2xl text-[#0B0B0A]">{service.metrics}</p>
                </div>
                <div className="pt-4 border-t border-[#0B0B0A]/10">
                  <span className="text-[10px] font-mono uppercase text-[#8C8B87] block mb-2">Related Capabilities</span>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.filter(s => s.slug !== service.slug).slice(0, 4).map(s => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="text-xs px-2.5 py-1 bg-white border border-[#0B0B0A]/10 rounded-sm hover:border-[#B08D57] transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Otherwise, show main services index
  return (
    <div className="w-full">
      <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              FIVE CONNECTED CAPABILITIES
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              What DEZO Operates
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              No fragmented agencies. No finger pointing. Websites, ecommerce, marketplaces, advertising, SEO and brand—connected into one commercial system.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((serv) => (
              <div
                key={serv.slug}
                className="p-6 bg-[#F5F3EE] rounded-sm border border-[#0B0B0A]/10 hover:border-[#B08D57] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B08D57] block mb-2">
                    {serv.category}
                  </span>
                  <h3 className="font-display text-2xl text-[#0B0B0A] mb-3">{serv.title}</h3>
                  <p className="text-xs text-[#555451] leading-relaxed mb-6">{serv.tagline}</p>
                </div>

                <div className="pt-4 border-t border-[#0B0B0A]/5">
                  <Link
                    to={`/services/${serv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0B0A] hover:text-[#B08D57] transition-colors"
                  >
                    <span>View Capability Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

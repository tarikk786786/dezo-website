import React, { useState } from 'react';
import { WORK_ARCHIVE } from '../siteData';
import { ArrowUpRight } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Ecommerce', 'Healthcare', 'Brand', 'Amazon & Flipkart', 'Education'];

  const filtered = WORK_ARCHIVE.filter(item => {
    if (activeFilter === 'All') return true;
    return item.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <div className="w-full">
      <section className="py-20 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              PORTFOLIO & CASE STUDIES
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              Selected Work Archive
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              Real storefronts, live digital infrastructure, and commercial execution for ambitious Indian brands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                  activeFilter === cat 
                    ? 'bg-[#0B0B0A] text-white' 
                    : 'bg-[#F5F3EE] text-[#555451] hover:text-[#0B0B0A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((work) => (
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

                    <div className="space-y-2.5 text-xs text-[#555451]">
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
    </div>
  );
};

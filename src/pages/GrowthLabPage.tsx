import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOOL_DEFINITIONS, ToolKey } from '../toolsEngine';
import { GrowthLab } from '../components/GrowthLab';
import { ArrowUpRight } from 'lucide-react';

export const GrowthLabPage: React.FC = () => {
  const { toolKey } = useParams<{ toolKey?: string }>();
  const activeTool: ToolKey = (toolKey && toolKey in TOOL_DEFINITIONS) ? (toolKey as ToolKey) : 'seo';

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="w-full pt-16 pb-8 bg-[#F5F3EE] border-b border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] block mb-2">
              DEZO LAB ENGINE
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0B0A] mb-4">
              Diagnostic & Audit Suite
            </h1>
            <p className="text-base sm:text-lg text-[#555451] leading-relaxed">
              Real-time HTTP/TLS probing, Core Web Vitals diagnostics, Schema verification, and marketplace readiness scoring. 100% free, safe, and anonymous.
            </p>
          </div>
        </div>
      </section>

      {/* Main GrowthLab Scanner */}
      <GrowthLab initialTool={activeTool} standalone />

      {/* Directory of dedicated tool pages */}
      <section className="w-full py-16 bg-white border-t border-[#0B0B0A]/10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="font-display text-2xl font-normal text-[#0B0B0A] mb-2">
              Browse Dedicated Tool Endpoints
            </h3>
            <p className="text-xs text-[#555451]">
              Each diagnostic can be run on its own permalink.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(TOOL_DEFINITIONS) as ToolKey[]).map((key) => {
              const def = TOOL_DEFINITIONS[key];
              return (
                <Link
                  key={key}
                  to={`/tools/${key}`}
                  className="p-5 bg-[#F5F3EE] rounded-sm border border-[#0B0B0A]/5 hover:border-[#B08D57] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-[#0B0B0A]">{def.name}</span>
                      {def.badge && (
                        <span className="text-[9px] px-1 bg-[#B08D57]/20 text-[#B08D57] font-mono font-bold rounded-xs">
                          {def.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#555451] line-clamp-2">{def.description}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-mono text-[#B08D57]">
                    <span>Open tool</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

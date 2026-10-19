import React, { useState } from 'react';
import { 
  TOOL_DEFINITIONS, 
  ToolKey, 
  runDiagnostic, 
  AuditReport, 
  Finding 
} from '../toolsEngine';
import { 
  Search, CheckCircle2, AlertTriangle, AlertCircle, Info, 
  ArrowRight, MessageCircle, RefreshCw, Sparkles, ShieldCheck, Zap
} from 'lucide-react';

interface GrowthLabProps {
  initialTool?: ToolKey;
  standalone?: boolean;
}

export const GrowthLab: React.FC<GrowthLabProps> = ({ initialTool = 'seo', standalone = false }) => {
  const [activeTool, setActiveTool] = useState<ToolKey>(initialTool);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<AuditReport | null>(null);
  const [filterState, setFilterState] = useState<'all' | 'critical' | 'warning' | 'good'>('all');
  const [errorMessage, setErrorMessage] = useState('');

  const toolDef = TOOL_DEFINITIONS[activeTool];

  const handleSelectTool = (key: ToolKey) => {
    setActiveTool(key);
    setReport(null);
    setErrorMessage('');
    setInputValue('');
  };

  const handleTryExample = () => {
    setInputValue(toolDef.example);
    setErrorMessage('');
  };

  const handleRunAudit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    setIsLoading(true);
    setErrorMessage('');
    try {
      const res = await runDiagnostic(inputValue, activeTool);
      setReport(res);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to analyze target. Please verify format.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredFindings = report?.findings.filter(f => {
    if (filterState === 'all') return true;
    return f.status === filterState;
  }) || [];

  const counts = {
    all: report?.findings.length || 0,
    critical: report?.findings.filter(f => f.status === 'critical').length || 0,
    warning: report?.findings.filter(f => f.status === 'warning').length || 0,
    good: report?.findings.filter(f => f.status === 'good').length || 0
  };

  return (
    <section className={`w-full py-12 lg:py-20 ${standalone ? 'bg-[#F5F3EE]' : 'bg-[#FFFFFF] border-y border-[#0B0B0A]/10'}`}>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#B08D57] mb-2">
            DEZO LAB · PUBLIC DIAGNOSTICS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#0B0B0A] leading-tight mb-4">
            Check your site in minutes
          </h2>
          <p className="text-base sm:text-lg text-[#555451] leading-relaxed font-normal">
            Free public checks for your website, store, and marketplace footprint. Marketplace tools stay labeled DEMO — we never invent seller metrics.
          </p>
        </div>

        {/* 11 Tool Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#0B0B0A]/10">
          {(Object.keys(TOOL_DEFINITIONS) as ToolKey[]).map((key) => {
            const def = TOOL_DEFINITIONS[key];
            const isActive = activeTool === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelectTool(key)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium tracking-wide rounded-sm transition-all duration-150 cursor-pointer ${
                  isActive 
                    ? 'bg-[#0B0B0A] text-[#F5F3EE] shadow-xs' 
                    : 'bg-[#F5F3EE] text-[#555451] hover:text-[#0B0B0A] hover:bg-[#EFECE5] border border-[#0B0B0A]/5'
                }`}
              >
                <span>{def.name}</span>
                {def.badge && (
                  <span className={`text-[9px] px-1 py-0.2 rounded-xs font-mono font-bold ${
                    isActive ? 'bg-[#B08D57] text-[#0B0B0A]' : 'bg-[#0B0B0A]/10 text-[#8C8B87]'
                  }`}>
                    {def.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Tool Input Box */}
        {!report ? (
          <div className="max-w-3xl bg-[#F5F3EE] p-6 sm:p-8 rounded-lg border border-[#0B0B0A]/10 mb-12">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-[#0B0B0A]">{toolDef.name}</h3>
              <span className="text-[11px] font-mono text-[#8C8B87] uppercase tracking-wider">
                Safe public scan · no login
              </span>
            </div>
            
            <p className="text-sm text-[#555451] mb-6">
              {toolDef.description}
            </p>

            <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={toolDef.placeholder}
                  className="w-full h-12 px-4 bg-white border border-[#0B0B0A]/15 text-[#0B0B0A] text-sm rounded-sm focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] font-mono placeholder:text-[#8C8B87]"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="h-12 px-7 bg-[#0B0B0A] hover:bg-[#555451] text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#B08D57]" />
                    <span>Probing...</span>
                  </>
                ) : (
                  <>
                    <span>Analyze</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 flex items-center justify-between text-xs text-[#8C8B87]">
              <span>Example: <code className="text-[#0B0B0A] font-mono">{toolDef.example}</code></span>
              <button
                type="button"
                onClick={handleTryExample}
                className="text-[#B08D57] hover:underline font-medium cursor-pointer"
              >
                Try example →
              </button>
            </div>

            {errorMessage && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
        ) : (
          /* Report Results View */
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Stats Banner */}
            <div className="p-6 sm:p-8 bg-[#F5F3EE] rounded-lg border border-[#0B0B0A]/10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#0B0B0A]/10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#B08D57]/20 text-[#B08D57] font-semibold">
                      DEZO GROWTH REPORT
                    </span>
                    <span className="text-xs font-mono text-[#8C8B87]">ID: {report.reportId}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0B0B0A] break-all">{report.targetInput}</h3>
                  <p className="text-xs font-mono text-[#555451] mt-1">{report.summary}</p>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="font-display text-5xl font-bold text-[#0B0B0A]">{report.overallScore}</span>
                      <span className="text-sm font-mono text-[#8C8B87]">/100</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C8B87] mt-1">Growth Score</div>
                  </div>

                  <div className="h-12 w-px bg-[#0B0B0A]/10" />

                  <div>
                    <span className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider ${
                      report.overallScore >= 88 ? 'bg-emerald-100 text-emerald-800' :
                      report.overallScore >= 75 ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {report.ratingTier}
                    </span>
                    <div className="text-[10px] font-mono text-[#555451] mt-1">
                      {report.deterministicChecksPassed}/{report.totalChecksConducted} passed
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Breakdown Bars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {report.categoryScores.map((cat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-sm border border-[#0B0B0A]/5">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="font-semibold text-[#0B0B0A]">{cat.name}</span>
                      <span className="font-mono font-bold text-[#B08D57]">{cat.score}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F5F3EE] rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          cat.score >= 80 ? 'bg-emerald-500' : cat.score >= 65 ? 'bg-[#B08D57]' : 'bg-amber-500'
                        }`} 
                        style={{ width: `${cat.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Bottleneck Assessment */}
            <div className="p-6 sm:p-8 bg-white rounded-lg border border-[#0B0B0A]/10 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#B08D57]" />
                <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-[#B08D57]">
                  DEZO GROWTH OS — STRATEGIC BOTTLENECK ASSESSMENT
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-xs text-[#8C8B87] font-medium mb-1">Primary Revenue Bottleneck:</div>
                  <div className="font-semibold text-[#0B0B0A]">{report.aiStrategicOverview.growthBottleneck}</div>
                </div>
                <div>
                  <div className="text-xs text-[#8C8B87] font-medium mb-1">Commercial Opportunity:</div>
                  <div className="text-[#555451]">{report.aiStrategicOverview.commercialOpportunity}</div>
                </div>
                <div>
                  <div className="text-xs text-[#8C8B87] font-medium mb-1">Estimated Commercial Impact:</div>
                  <div className="text-[#555451]">{report.aiStrategicOverview.estimatedRevenueImpact}</div>
                </div>
              </div>
            </div>

            {/* Diagnostic Findings */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#0B0B0A]">
                    Diagnostic Findings & Actionable Fixes ({report.findings.length})
                  </h4>
                  <p className="text-xs text-[#8C8B87]">Sorted by priority — urgent issues at top</p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setFilterState('all')}
                    className={`px-3 py-1 text-xs rounded-sm font-medium ${filterState === 'all' ? 'bg-[#0B0B0A] text-white' : 'bg-[#F5F3EE] text-[#555451]'}`}
                  >
                    All ({counts.all})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterState('critical')}
                    className={`px-3 py-1 text-xs rounded-sm font-medium ${filterState === 'critical' ? 'bg-red-700 text-white' : 'bg-[#F5F3EE] text-[#555451]'}`}
                  >
                    Critical ({counts.critical})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterState('warning')}
                    className={`px-3 py-1 text-xs rounded-sm font-medium ${filterState === 'warning' ? 'bg-amber-600 text-white' : 'bg-[#F5F3EE] text-[#555451]'}`}
                  >
                    Warnings ({counts.warning})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterState('good')}
                    className={`px-3 py-1 text-xs rounded-sm font-medium ${filterState === 'good' ? 'bg-emerald-700 text-white' : 'bg-[#F5F3EE] text-[#555451]'}`}
                  >
                    Passed ({counts.good})
                  </button>
                </div>
              </div>

              {/* Findings List */}
              <div className="space-y-3">
                {filteredFindings.map((finding) => (
                  <div key={finding.id} className="p-4 sm:p-5 bg-white rounded-md border border-[#0B0B0A]/10 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-xs font-bold ${
                          finding.status === 'good' ? 'bg-emerald-100 text-emerald-800' :
                          finding.status === 'critical' ? 'bg-red-100 text-red-800' :
                          finding.status === 'warning' ? 'bg-amber-100 text-amber-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {finding.status}
                        </span>
                        <span className="font-mono text-xs text-[#8C8B87]">{finding.metric}</span>
                        <span className="font-semibold text-[#0B0B0A]">{finding.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8C8B87] self-start sm:self-auto">
                        {finding.priority}
                      </span>
                    </div>

                    <p className="text-xs text-[#555451] mb-2">{finding.observation}</p>

                    <div className="mt-3 pt-3 border-t border-[#0B0B0A]/5 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="font-semibold text-[#0B0B0A]">Why it matters: </span>
                        <span className="text-[#555451]">{finding.whyItMatters}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#B08D57]">How to fix: </span>
                        <span className="text-[#0B0B0A] font-medium">{finding.howToFix}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Box: Sprint Request + WhatsApp */}
            <div className="p-6 sm:p-8 bg-[#F5F3EE] rounded-lg border border-[#B08D57]/30">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#B08D57] font-semibold mb-2">
                READY TO IMPLEMENT THESE GROWTH FIXES?
              </p>
              <h4 className="font-display text-2xl font-normal text-[#0B0B0A] mb-3">
                Want the DEZO Engineering Team to Implement These Fixes For You?
              </h4>
              <p className="text-sm text-[#555451] max-w-2xl leading-relaxed mb-6">
                From fixing Shopify app bloat and Schema.org rich snippets to scaling Amazon Buy Box rank and Meta Ads ROAS, our Bhubaneswar studio deploys verified fixes within 14 days.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`/start-a-project?ref=tools_audit&domain=${encodeURIComponent(report.targetInput)}`}
                  className="px-6 py-3 bg-[#0B0B0A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#555451] transition-colors"
                >
                  Request Growth Sprint for this Website
                </a>

                <a
                  href={`https://wa.me/919114411026?text=${encodeURIComponent(
                    `Hi DEZO! I just ran a Tools Lab scan for ${report.targetInput} (Score: ${report.overallScore}/100, Report ID: ${report.reportId}). I'd like to discuss the priority fixes.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss on WhatsApp (+91 9114411026)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setReport(null)}
                  className="px-4 py-3 text-xs font-medium text-[#555451] hover:text-[#0B0B0A] transition-colors cursor-pointer"
                >
                  Run another audit
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

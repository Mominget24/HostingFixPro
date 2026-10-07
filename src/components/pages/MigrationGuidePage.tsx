import React, { useState } from 'react';
import { PageId } from '../../types';
import { migrationStepsList, migrationChecklistItems, migrationFaqs } from '../../data/migrationData';
import { 
  CheckSquare, 
  Square, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Printer, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  Copy, 
  Check, 
  ArrowRight
} from 'lucide-react';
import migrationVisual from '../../assets/images/migration_guide_workflow_1791370318731.jpg';

interface MigrationGuidePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: () => void;
}

export const MigrationGuidePage: React.FC<MigrationGuidePageProps> = ({ onNavigate, onOpenDeal }) => {
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState<number | null>(null);

  const toggleCheck = (id: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / migrationChecklistItems.length) * 100);

  const handleCopyCode = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-16 pb-20">
      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Zero Downtime Blueprint
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
                How To Migrate Your Website to Hostinger (Step-by-Step, 2026)
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A production-tested master guide to moving your WordPress database, media uploads, and corporate domain email without a single second of visitor downtime.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#interactive-checklist"
                  className="px-5 py-3 bg-white text-slate-900 font-bold rounded-xl text-sm hover:bg-slate-100 transition-colors"
                >
                  Jump to Interactive Checklist
                </a>
                <button
                  onClick={onOpenDeal}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center gap-1.5 transition-colors"
                >
                  <span>Step 1: Start Hostinger Account</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800">
                <img
                  src={migrationVisual}
                  alt="Website migration workflow dashboard"
                  className="w-full h-64 object-cover object-center opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-800/90 border-t border-slate-700 text-xs text-slate-300 flex items-center justify-between">
                  <span>Standard Migration Time: 25–40 Mins</span>
                  <span className="text-emerald-400 font-semibold">100% Zero Downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TABLE OF CONTENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
            Quick Navigation (Jump Links)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {migrationStepsList.map((step) => (
              <a
                key={step.id}
                href={`#step-${step.id}`}
                className="text-slate-700 hover:text-sky-600 transition-colors flex items-center gap-2 py-1 font-medium"
              >
                <span className="text-xs font-mono text-slate-400">Step {step.id}:</span>
                <span className="truncate">{step.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP DETAILED WALKTHROUGH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {migrationStepsList.map((step) => (
          <div 
            key={step.id} 
            id={`step-${step.id}`}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                {step.phase}
              </span>
              <span className="text-xs font-mono text-slate-400">Step {step.id} of 6</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                {step.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Warning callout if present */}
            {step.warning && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed font-medium">
                  <strong>Important Caution:</strong> {step.warning}
                </div>
              </div>
            )}

            {/* Actionable Tips */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Action Checklist for this Step:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {step.keyTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code / Command Snippet */}
            {step.commandSnippet && (
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 text-slate-200 text-xs">
                <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5" /> Terminal / DNS Record
                  </span>
                  <button
                    onClick={() => handleCopyCode(step.id, step.commandSnippet!)}
                    className="text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                  >
                    {copiedSnippet === step.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-sky-300">
                  {step.commandSnippet}
                </pre>
              </div>
            )}

            {/* Inline Affiliate CTA after step 2 */}
            {step.id === 2 && (
              <div className="pt-2">
                <button
                  onClick={onOpenDeal}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Start your Hostinger account here (Up to 75% Off)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* INTERACTIVE MIGRATION CHECKLIST TOOL (PRINTABLE) */}
      <section id="interactive-checklist" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Interactive Tool
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
                Migration Checklist (Live Progress Tracker)
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Tick each milestone as you perform your live migration to guarantee zero lost files or emails.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Checklist</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-700">Migration Readiness Progress</span>
              <span className="font-mono text-sky-600">{completedCount} of {migrationChecklistItems.length} completed ({progressPercent}%)</span>
            </div>
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {migrationChecklistItems.map((item) => {
              const isChecked = !!completedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-200 text-slate-900'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <button 
                    type="button" 
                    className="mt-0.5 text-emerald-600 focus:outline-none"
                    aria-label={`Toggle ${item.label}`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  <div className="text-xs sm:text-sm">
                    <span className={`block ${isChecked ? 'line-through text-slate-500' : 'font-medium'}`}>
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO FAQ ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Common Website Migration Questions
          </h2>
        </div>

        <div className="space-y-3">
          {migrationFaqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-sky-600 transition-colors text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* HANDS ON ASSISTANCE CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Need hands-on help? I can migrate your site for you.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              If your database is large or you have complex WooCommerce custom tables, send me a message. I configure hosting for clients regularly and provide free migration guidance.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm whitespace-nowrap transition-colors flex items-center gap-2"
          >
            <span>Request Migration Support</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

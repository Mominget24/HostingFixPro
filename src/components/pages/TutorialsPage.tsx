import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  ArrowUpRight, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Server, 
  Search, 
  Sliders, 
  Layout, 
  ExternalLink,
  Code2,
  Copy,
  Check,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { HOSTINGER_AFFILIATE_URL, HOSTINGER_COUPON_CODE, copyAffiliateCoupon } from '../../config/affiliates';

interface TutorialsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: string, customUrl?: string) => void;
}

export const TutorialsPage: React.FC<TutorialsPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    await copyAffiliateCoupon(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const steps = [
    {
      id: 1,
      title: 'Choose & Register a Domain',
      tagline: 'Claim your custom .com or .net with zero hidden fees',
      timeEstimate: '2 mins',
      badge: 'Step 1'
    },
    {
      id: 2,
      title: 'Set Up WordPress on Hostinger',
      tagline: 'Automated 1-click install with LiteSpeed & Free SSL',
      timeEstimate: '3 mins',
      badge: 'Step 2'
    },
    {
      id: 3,
      title: 'Launch a Fast Website',
      tagline: 'Theme selection, cache tuning & going live to the world',
      timeEstimate: '5 mins',
      badge: 'Step 3'
    }
  ];

  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Header Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200/80 rounded-md px-3 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Complete Beginner-to-Production Walkthrough</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Step-by-Step Tutorials: Launch Your Website
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Follow this verified production workflow to register a domain, configure high-performance LiteSpeed cloud hosting, and publish a secure WordPress website without paying agency fees.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-5 rounded-2xl text-left border transition-all relative overflow-hidden ${
                activeStep === s.id
                  ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-500/20'
                  : 'bg-slate-50 hover:bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                  activeStep === s.id ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {s.badge}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                  <Zap className="w-3 h-3 text-amber-500" />
                  {s.timeEstimate}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-snug">{s.tagline}</p>
            </button>
          ))}
        </div>
      </section>

      {/* STEP 1: DOMAIN TUTORIAL */}
      {activeStep === 1 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">Tutorial 01</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  How to Choose & Register the Right Domain
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Secure a memorable brand name without paying exorbitant renewal fees or separate WHOIS privacy upsells.
                </p>
              </div>
              <button
                onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-sm flex items-center gap-2 self-start md:self-auto shrink-0 transition-colors"
              >
                <span>Claim Free Domain on Hostinger</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Practical Guide Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Pick the Right Extension (.com vs Others)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Always target a <strong>.com</strong> extension first if your audience is international or commercial. For country-specific businesses, consider your national TLD (.bd, .uk, .ca). Avoid gimmick TLDs like .biz or .club which trigger email spam filters.
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Best practice: 2-3 syllables maximum
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Never use hyphens (-) or numbers (2)
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Get It 100% Free for Year 1</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Instead of paying $14.99 - $19.99 separately at a registrar, Hostinger bundles a <strong>free 1-year domain</strong> (.com, .net, .org, .xyz) when purchasing the Premium ($2.99/mo) or Business ($3.99/mo) plan with annual billing.
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-slate-500">Standalone Registrar:</span>
                    <span className="text-rose-600 font-bold">$18.99/yr</span>
                  </div>
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-slate-500">With Hostinger Plan:</span>
                    <span className="text-emerald-600 font-bold">$0.00 (Free)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Always Ensure WHOIS Privacy Is Free</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unscrupulous registrars charge $9.99 to $14.99/year to hide your personal phone and home address from public WHOIS records. Hostinger automatically provides <strong>free lifetime WHOIS privacy protection</strong>.
                </p>
                <div className="bg-emerald-50 border border-emerald-200/80 p-3 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Your phone, physical address, and email remain hidden from spammers.</span>
                </div>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-sky-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-sky-400 font-bold font-mono">Recommended Coupon</span>
                <h4 className="text-xl font-bold">Apply Code: {HOSTINGER_COUPON_CODE} at Hostinger Checkout</h4>
                <p className="text-sm text-slate-300">
                  Unlocks maximum 75% tier savings, 3 bonus months, and free domain registration.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleCopy(HOSTINGER_COUPON_CODE)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copiedCode === HOSTINGER_COUPON_CODE ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Go to Hostinger</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 2: WORDPRESS SETUP TUTORIAL */}
      {activeStep === 2 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">Tutorial 02</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  How to Set Up WordPress on Hostinger in Under 4 Minutes
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Step-by-step visual walkthrough using Hostinger's modern hPanel, LiteSpeed engine, and automated SSL.
                </p>
              </div>
              <button
                onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-sm flex items-center gap-2 self-start md:self-auto shrink-0 transition-colors"
              >
                <span>Launch on Hostinger</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Workflow steps */}
            <div className="space-y-6">
              {/* Walkthrough Item 1 */}
              <div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    A
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      Access hPanel and Click 'Auto Installer' &rarr; 'WordPress'
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      After claiming your plan, log into your Hostinger control panel (hPanel). Under the <strong>Websites</strong> tab, click <strong>Create or Migrate Website</strong>, select <strong>WordPress</strong>, and set your administrative login credentials.
                    </p>
                    <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono space-y-1 border border-slate-800">
                      <div className="text-slate-400">// Recommended Production Settings:</div>
                      <div>PHP Version: <span className="text-sky-400">8.2 or 8.3 (Latest stable)</span></div>
                      <div>Web Server: <span className="text-emerald-400">LiteSpeed Enterprise</span></div>
                      <div>Database: <span className="text-amber-400">MariaDB 10.11+</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Walkthrough Item 2 */}
              <div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    B
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      Enable Unlimited Free Let's Encrypt SSL
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Hostinger automatically provisions a Let's Encrypt Wildcard SSL certificate. In hPanel, verify that <strong>Force HTTPS</strong> is toggled to ON. This encrypts all visitor traffic, credit cards, and form submissions with 256-bit AES encryption.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                      <Lock className="w-4 h-4 text-emerald-600" />
                      <span>SSL auto-renews every 90 days forever at zero cost. Never pay $80/year to GoDaddy.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Walkthrough Item 3 */}
              <div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    C
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      Configure LiteSpeed Cache for Instant 200ms Page Loads
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Unlike standard Apache hosts where you need heavy caching plugins, Hostinger includes the native <strong>LiteSpeed Cache for WordPress (LSCache)</strong>.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                        <span className="font-semibold text-slate-900 block mb-1">Server-Level Page Cache:</span>
                        <span className="text-slate-600">Serves static HTML instantly without querying PHP or MariaDB.</span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                        <span className="font-semibold text-slate-900 block mb-1">Lossless Image Optimization:</span>
                        <span className="text-slate-600">Converts heavy JPGs and PNGs to next-gen WebP format automatically.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 3: LAUNCH SIMPLE SITE TUTORIAL */}
      {activeStep === 3 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">Tutorial 03</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  How to Launch a Simple, Fast Website
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Select a lightweight modern theme, set up essential plugins, and launch your site with top-tier performance.
                </p>
              </div>
              <button
                onClick={() => onNavigate('use-cases')}
                className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl text-sm shadow-sm flex items-center gap-2 self-start md:self-auto shrink-0 transition-colors"
              >
                <span>Browse Website Templates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-sky-700 font-bold">
                  <Layout className="w-5 h-5" />
                  <span>1. Choose a Featherweight Theme</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Avoid bloated, multi-purpose themes that bundle 40 plugins. Instead, install one of these battle-tested themes:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900">Astra</span>
                      <span className="text-slate-500 block text-[11px]">Under 50 KB base size &middot; 100+ starter sites</span>
                    </div>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Recommended</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900">GeneratePress</span>
                      <span className="text-slate-500 block text-[11px]">Engineered for pure speed and clean semantic HTML</span>
                    </div>
                    <span className="text-slate-600 font-medium">Developer Pick</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900">Kadence</span>
                      <span className="text-slate-500 block text-[11px]">Best native block builder & responsive header builder</span>
                    </div>
                    <span className="text-slate-600 font-medium">Modern Block UI</span>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-sky-700 font-bold">
                  <FileCheck2 className="w-5 h-5" />
                  <span>2. The 4 Essential Plugins Only</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  More plugins equal slower page loads and security vulnerabilities. Restrict your initial install to these four:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="font-bold text-slate-900">1. LiteSpeed Cache:</span>
                    <span className="text-slate-600 ml-1">Pre-installed with Hostinger, delivers sub-second page delivery.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="font-bold text-slate-900">2. Rank Math SEO or SEOPress:</span>
                    <span className="text-slate-600 ml-1">Lightweight schema, sitemaps, and meta tags for Google indexing.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="font-bold text-slate-900">3. Wordfence or Hostinger Security:</span>
                    <span className="text-slate-600 ml-1">Brute-force protection and two-factor admin authentication (2FA).</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="font-bold text-slate-900">4. WPCode (Snippet Manager):</span>
                    <span className="text-slate-600 ml-1">Inject Google Analytics / Meta Pixels without editing theme files.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Readiness Scorecard */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Pre-Launch Checklist (Done in 5 Minutes)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block mb-1">Permalinks</span>
                  <span className="font-semibold text-white">Set to /%postname%/ for clean SEO URLs</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block mb-1">Search Visibility</span>
                  <span className="font-semibold text-white">Uncheck 'Discourage search engines'</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block mb-1">Admin Email</span>
                  <span className="font-semibold text-white">Set to your personal or work email address</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block mb-1">Automated Backups</span>
                  <span className="font-semibold text-emerald-400">Enabled on Hostinger hPanel</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next Actions CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-600 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl font-bold font-display">
              Ready to Build? Grab Hostinger with Verified Discount
            </h2>
            <p className="text-sky-100 text-sm leading-relaxed">
              Use code <strong className="text-white underline">{HOSTINGER_COUPON_CODE}</strong> for up to 75% off, free domain registration, free unlimited SSL, and 30-day money-back guarantee.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base shrink-0"
            >
              <span>Get Started Now</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('reviews')}
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Read Honest Reviews</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

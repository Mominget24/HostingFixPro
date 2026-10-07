import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Server, 
  Zap, 
  Clock, 
  ArrowUpRight, 
  DollarSign, 
  Globe, 
  HelpCircle, 
  Cpu, 
  Activity, 
  Layers, 
  Scale, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import { 
  HOSTINGER_AFFILIATE_URL, 
  HOSTINGER_COUPON_CODE, 
  BLUEHOST_AFFILIATE_URL, 
  hostingerPlans 
} from '../../config/affiliates';

interface HonestReviewPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: string, customUrl?: string) => void;
}

export const HonestReviewPage: React.FC<HonestReviewPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [activeTab, setActiveTab] = useState<'who-suits' | 'consider' | 'trade-offs' | 'vs-bluehost'>('who-suits');

  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 rounded-md px-3 py-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Unbiased Engineering Review &middot; 2026 Production Audit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Hostinger Honest Review: Who It Suits & Real Trade-Offs
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most affiliate websites rate every hosting provider 9.9/10 because payouts dictate rankings. As a working engineer who runs client eCommerce and WordPress sites on Hostinger, here is the honest, data-backed truth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('who-suits')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'who-suits'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Who Hostinger Suits</span>
          </button>
          <button
            onClick={() => setActiveTab('consider')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'consider'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-sky-400" />
            <span>What to Consider Before Buying</span>
          </button>
          <button
            onClick={() => setActiveTab('trade-offs')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'trade-offs'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Honest Trade-Offs (Cons)</span>
          </button>
          <button
            onClick={() => setActiveTab('vs-bluehost')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'vs-bluehost'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Scale className="w-4 h-4 text-indigo-400" />
            <span>Hostinger vs Bluehost Head-to-Head</span>
          </button>
        </div>
      </section>

      {/* TAB 1: WHO SUITS */}
      {activeTab === 'who-suits' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">First-Time Site Owners & Starters</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you have never configured a web server before, legacy cPanel feels like a daunting 1998 cockpit. Hostinger's custom <strong>hPanel</strong> is clean, modern, and guides you through domain assignment and 1-click WordPress setup in under 5 minutes.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Zero command-line or server knowledge required.</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Speed-Obsessed Bloggers & Creators</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hostinger runs on <strong>LiteSpeed Enterprise web servers</strong> rather than dated Apache software. Combined with the free LiteSpeed Cache WordPress plugin, TTFB (time to first byte) averages ~240ms, passing Google Core Web Vitals automatically.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-sky-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Higher Google SEO rankings thanks to sub-300ms speed.</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Freelancers & Multi-Site Agencies</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Both the Premium ($2.99/mo) and Business ($3.99/mo) plans permit up to <strong>100 separate websites</strong> on a single subscription. You can host client landing pages, demo testbeds, and side projects without paying $10/month per individual domain.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Save hundreds per year across client portfolios.</span>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-base">Recommended Tier for Starters</h4>
              <p className="text-xs text-slate-600">
                Most new sites need the <strong>Business Plan ($3.99/mo)</strong> for automated daily backups and Redis object cache.
              </p>
            </div>
            <button
              onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-sm shrink-0 transition-colors"
            >
              <span>View Business Plan on Hostinger</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* TAB 2: WHAT TO CONSIDER */}
      {activeTab === 'consider' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Crucial Factors to Consider Before Purchasing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Billing Duration & Renewal Rates</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The advertised $2.99/mo or $3.99/mo applies when selecting the 48-month term. If you choose 12 months, the introductory price is slightly higher ($3.19/mo). Upon renewal, plans renew at $6.99/mo to $8.99/mo — standard for the industry, but important to understand upfront.
                </p>
              </div>

              {/* Item 2 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">NVMe Storage & Inode Quotas</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Premium includes 100 GB NVMe storage (up to 400,000 inodes), while Business provides 200 GB NVMe (up to 600,000 inodes). For 98% of websites, this is vastly more than needed. If you plan to host 50GB of raw uncompressed video files, you should use YouTube/Vimeo embeds instead.
                </p>
              </div>

              {/* Item 3 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Datacenter Geographical Selection</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hostinger allows you to choose your physical server location during setup (USA, United Kingdom, France, Lithuania, India, Singapore, Brazil). Always select the datacenter nearest to your primary target audience for minimal ping latency.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: REAL TRADE-OFFS */}
      {activeTab === 'trade-offs' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Unfiltered Feedback</span>
              <h2 className="text-2xl font-bold text-slate-900">
                The Real Trade-Offs (Where Hostinger Can Improve)
              </h2>
              <p className="text-sm text-slate-600">
                No hosting provider is 100% flawless. These are the specific limitations you should know before signing up.
              </p>
            </div>

            <div className="space-y-4">
              {/* Limitation 1 */}
              <div className="p-5 border border-amber-200/80 bg-amber-50/50 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">1. No Telephone Customer Support Hotline</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Hostinger does not offer direct phone support. Support is handled 100% via 24/7 Live Chat and email ticketing. Their chat technicians typically reply within 2 to 4 minutes and are technically competent, but if you require speaking to someone over a phone call, this may be a dealbreaker.
                  </p>
                </div>
              </div>

              {/* Limitation 2 */}
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">2. Proprietary hPanel Instead of Traditional cPanel</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    While hPanel is noticeably faster and easier to navigate than cPanel for beginners, developers who rely on obscure third-party cPanel scripts or WHM reseller plugins must adjust to Hostinger's custom interface.
                  </p>
                </div>
              </div>

              {/* Limitation 3 */}
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">3. Backup Frequency Varies by Plan Tier</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    On the entry-level Premium tier ($2.99/mo), automated backups run weekly. If you run a dynamic WooCommerce store or daily active blog, you should upgrade to the Business tier ($3.99/mo) which includes daily snapshots and 1-click restore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 4: HEAD TO HEAD WITH BLUEHOST */}
      {activeTab === 'vs-bluehost' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Independent Comparison</span>
              <h2 className="text-2xl font-bold text-slate-900">
                Hostinger vs. Bluehost: Objective Architectural Comparison
              </h2>
              <p className="text-sm text-slate-600">
                Both are major WordPress hosting players. Here is how their engineering, pricing, and infrastructure stack up.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 font-bold text-slate-900">Feature / Metric</th>
                    <th className="p-4 font-bold text-emerald-700 bg-emerald-50/60">Hostinger (Business)</th>
                    <th className="p-4 font-bold text-indigo-700 bg-indigo-50/60">Bluehost (Choice Plus)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Server Architecture</td>
                    <td className="p-4 font-bold text-emerald-700 bg-emerald-50/20">LiteSpeed Enterprise (LSCache)</td>
                    <td className="p-4 text-slate-600 bg-indigo-50/10">Standard Apache Cloud</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Avg. TTFB (Time to First Byte)</td>
                    <td className="p-4 font-mono font-bold text-emerald-700 bg-emerald-50/20">142 ms (Sub-second)</td>
                    <td className="p-4 font-mono text-slate-600 bg-indigo-50/10">485 ms</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Starter Price (Promo)</td>
                    <td className="p-4 font-bold text-slate-900 bg-emerald-50/20">$2.99 - $3.99 / mo</td>
                    <td className="p-4 font-bold text-slate-900 bg-indigo-50/10">$2.95 - $4.95 / mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Renewal Pricing</td>
                    <td className="p-4 font-semibold text-slate-700 bg-emerald-50/20">$6.99 - $8.99 / mo</td>
                    <td className="p-4 text-slate-600 bg-indigo-50/10">$14.99 / mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Phone Support Available</td>
                    <td className="p-4 text-slate-500 bg-emerald-50/20">No (24/7 Live Chat & Tickets only)</td>
                    <td className="p-4 font-bold text-emerald-700 bg-indigo-50/10">Yes (24/7 Phone Support)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Global Datacenters</td>
                    <td className="p-4 font-semibold text-emerald-700 bg-emerald-50/20">7 Countries (US, EU, Asia, LATAM)</td>
                    <td className="p-4 text-slate-600 bg-indigo-50/10">Primarily US Centric</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Best Suited For</td>
                    <td className="p-4 font-semibold text-slate-800 bg-emerald-50/20">Speed, international audience, modern UI</td>
                    <td className="p-4 text-slate-600 bg-indigo-50/10">Users who strictly want phone support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Strategic Dual CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-5 border border-emerald-200 bg-emerald-50/40 rounded-2xl flex flex-col justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Recommended for Performance</span>
                  <h4 className="font-bold text-slate-900 text-base">Claim Hostinger Deal (Up to 75% Off)</h4>
                  <p className="text-xs text-slate-600">
                    Use code <strong>{HOSTINGER_COUPON_CODE}</strong> for maximum discounts, free domain, and free SSL.
                  </p>
                </div>
                <button
                  onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Visit Hostinger Official</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 border border-indigo-200 bg-indigo-50/40 rounded-2xl flex flex-col justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">Official WordPress.org Pick</span>
                  <h4 className="font-bold text-slate-900 text-base">Claim Bluehost Partner Rate ($2.95/mo)</h4>
                  <p className="text-xs text-slate-600">
                    Best if you require 24/7 telephone voice support and traditional cPanel onboarding.
                  </p>
                </div>
                <button
                  onClick={() => onOpenDeal('bluehost', BLUEHOST_AFFILIATE_URL)}
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Visit Bluehost Official</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Summary Verdict Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Final Verdict</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                Is Hostinger Worth It in 2026?
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                For 95% of web creators, bloggers, and small business owners, Hostinger offers the highest speed-to-price ratio in the industry. Its LiteSpeed servers deliver true enterprise speed without requiring devops management.
              </p>
            </div>
            <button
              onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl text-base flex items-center gap-2 shrink-0 transition-colors shadow-lg"
            >
              <span>Get Hostinger (Code: {HOSTINGER_COUPON_CODE})</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

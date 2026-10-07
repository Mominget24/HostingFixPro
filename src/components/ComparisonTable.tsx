import React from 'react';
import { hostingerPlans, legacyCompetitors, HOSTINGER_AFFILIATE_URL, HOSTINGER_COUPON_CODE } from '../config/affiliates';
import { Check, X, ArrowUpRight, Zap, ShieldCheck, Sparkles, AlertTriangle } from 'lucide-react';

interface ComparisonTableProps {
  onOpenDeal: (provider?: any, customUrl?: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenDeal }) => {
  const plans = [
    hostingerPlans.premium,
    hostingerPlans.business,
    hostingerPlans.cloud
  ];

  return (
    <div className="space-y-8">
      {/* 3 Hostinger Tiers Compared Side-by-Side */}
      <div className="overflow-x-auto border border-slate-200 rounded-3xl bg-white shadow-sm">
        <table className="w-full text-left text-sm border-collapse min-w-[750px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              <th className="py-5 px-6">Specification</th>
              <th className="py-5 px-6">
                <div>Hostinger Premium</div>
                <div className="text-[11px] font-normal text-slate-500 normal-case">Best Value for Starters</div>
              </th>
              <th className="py-5 px-6 bg-emerald-50/70 border-x border-emerald-200">
                <div className="flex items-center gap-1.5 text-emerald-950 font-bold">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Hostinger Business</span>
                </div>
                <div className="text-[11px] font-semibold text-emerald-700 normal-case">Most Popular / Recommended</div>
              </th>
              <th className="py-5 px-6">
                <div>Cloud Startup</div>
                <div className="text-[11px] font-normal text-slate-500 normal-case">Dedicated Resources</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {/* Promo Rate Row */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Promo Intro Rate</td>
              <td className="py-4 px-6 font-mono font-bold text-slate-900 text-base tabular-nums">$2.99 / mo</td>
              <td className="py-4 px-6 font-mono font-bold text-emerald-700 text-lg tabular-nums bg-emerald-50/40 border-x border-emerald-200">
                $3.99 / mo
              </td>
              <td className="py-4 px-6 font-mono font-bold text-slate-900 text-base tabular-nums">$7.99 / mo</td>
            </tr>

            {/* NVMe Storage */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Storage Hardware</td>
              <td className="py-4 px-6 text-xs font-medium">100 GB NVMe SSD</td>
              <td className="py-4 px-6 text-xs font-bold text-slate-900 bg-emerald-50/40 border-x border-emerald-200">
                200 GB NVMe SSD (2x Space)
              </td>
              <td className="py-4 px-6 text-xs font-medium">200 GB NVMe SSD</td>
            </tr>

            {/* Backups */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Backups Included</td>
              <td className="py-4 px-6 text-xs">Weekly Automated</td>
              <td className="py-4 px-6 text-xs font-bold text-emerald-800 bg-emerald-50/40 border-x border-emerald-200 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily & On-Demand ($25/yr Value Free)</span>
              </td>
              <td className="py-4 px-6 text-xs">Daily & On-Demand</td>
            </tr>

            {/* Performance & Caching */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Caching & Speed</td>
              <td className="py-4 px-6 text-xs">LiteSpeed Cache (142ms TTFB)</td>
              <td className="py-4 px-6 text-xs font-bold text-slate-900 bg-emerald-50/40 border-x border-emerald-200">
                Redis Object Cache + LiteSpeed (125ms TTFB)
              </td>
              <td className="py-4 px-6 text-xs">Dedicated Redis & RAM (98ms TTFB)</td>
            </tr>

            {/* Free CDN */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Global CDN</td>
              <td className="py-4 px-6 text-xs text-slate-500">Standard Cloudflare</td>
              <td className="py-4 px-6 text-xs font-bold text-emerald-800 bg-emerald-50/40 border-x border-emerald-200">
                Hostinger In-House Global CDN Included
              </td>
              <td className="py-4 px-6 text-xs font-bold text-slate-900">Premium Global CDN</td>
            </tr>

            {/* Free Domain (.com/.net) */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Free Custom Domain</td>
              <td className="py-4 px-6 text-xs text-emerald-700 font-semibold">Included (1 Year)</td>
              <td className="py-4 px-6 text-xs text-emerald-800 font-bold bg-emerald-50/40 border-x border-emerald-200">
                Included (1 Year) + WHOIS Privacy
              </td>
              <td className="py-4 px-6 text-xs text-emerald-700 font-semibold">Included (1 Year)</td>
            </tr>

            {/* Number of Websites */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Websites Hosted</td>
              <td className="py-4 px-6 text-xs">Up to 100 Sites</td>
              <td className="py-4 px-6 text-xs font-bold text-slate-900 bg-emerald-50/40 border-x border-emerald-200">
                Up to 100 Sites
              </td>
              <td className="py-4 px-6 text-xs">Up to 300 Sites</td>
            </tr>

            {/* Best For */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-4 px-6 font-semibold text-slate-900">Ideal For</td>
              <td className="py-4 px-6 text-xs text-slate-600">Portfolios, Blogs & New Sites</td>
              <td className="py-4 px-6 text-xs font-medium text-slate-900 bg-emerald-50/40 border-x border-emerald-200">
                WooCommerce, eCommerce & Client Sites
              </td>
              <td className="py-4 px-6 text-xs text-slate-600">Heavy Traffic & High-End Agencies</td>
            </tr>

            {/* Action Row */}
            <tr className="bg-slate-50/50">
              <td className="py-5 px-6 font-semibold text-slate-900">Activate Discount</td>
              <td className="py-5 px-6">
                <button
                  onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                  className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Select Premium</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </td>
              <td className="py-5 px-6 bg-emerald-100/60 border-x border-emerald-300">
                <button
                  onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Claim Business Deal ($3.99)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </td>
              <td className="py-5 px-6">
                <button
                  onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                  className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Select Cloud</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Competitor Reality Check Box */}
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Why We Don't Recommend GoDaddy or Bluehost</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 pt-1">
          {legacyCompetitors.map((comp, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-amber-200/70 space-y-1.5">
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span>{comp.name}</span>
                <span className="text-rose-600 font-mono">{comp.price} (Renews {comp.renewal})</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{comp.sslTrap}</p>
              <div className="text-amber-800 font-semibold">{comp.verdict}</div>
            </div>
          ))}
        </div>
        <div className="pt-2 text-center sm:text-left">
          <button
            onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline inline-flex items-center gap-1"
          >
            Switch to Hostinger now and get free migration + lifetime SSL &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

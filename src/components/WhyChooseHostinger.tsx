import React, { useState } from 'react';
import { 
  Headphones, 
  Zap, 
  DollarSign, 
  ShieldCheck, 
  Globe2, 
  RefreshCw, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Tag, 
  CheckCircle2, 
  Clock, 
  Server
} from 'lucide-react';
import { affiliateProviders, copyAffiliateCoupon } from '../config/affiliates';

interface WhyChooseHostingerProps {
  onOpenDeal: (provider?: 'hostinger' | 'namecheap' | 'contabo', customUrl?: string) => void;
}

export const WhyChooseHostinger: React.FC<WhyChooseHostingerProps> = ({ onOpenDeal }) => {
  const [copied, setCopied] = useState(false);
  const hostinger = affiliateProviders.hostinger;
  const coupon = hostinger.couponCode || 'XV5MARCWR0H8';

  const handleCopyCode = async () => {
    await copyAffiliateCoupon(coupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const benefits = [
    {
      icon: <Headphones className="w-6 h-6 text-sky-600" />,
      title: '24/7 Fast Live Support (Under 3 Min Response)',
      badge: 'Human Tech Engineers',
      description: 'Never wait on 30-minute phone hold like GoDaddy. Hostinger provides round-the-clock live chat with real WordPress and server engineers who troubleshoot SSL, DNS, and database issues in real time.',
      metric: '< 3 Min Avg Reply',
      metricLabel: 'Weekend & Night Support'
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: 'Free 1-Click Zero-Downtime Migration',
      badge: 'Automated Bot & Team',
      description: 'Moving from an existing host? Hostinger’s automated migration tool transfers your WordPress database, plugins, and media in 20 to 40 minutes with zero visitor downtime. No technical skills required.',
      metric: '100% Free',
      metricLabel: 'Unlimited Sites Transferred'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-amber-600" />,
      title: 'Industry-Best Price-to-Performance Ratio',
      badge: 'LiteSpeed + NVMe SSD',
      description: 'Most hosts charging $10–$15/month still run slow Apache web servers. Hostinger delivers ultra-fast LiteSpeed Enterprise servers with NVMe SSDs starting at just $2.99/month (approx. 350 BDT).',
      metric: '142ms TTFB',
      metricLabel: 'Sub-Second Loading'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: 'Zero Hidden Fees & Lifetime Free SSL',
      badge: 'Transparent Billing',
      description: 'Unlike legacy hosts that lure you in and bill $79.99/year for SSL and $15/year for domain privacy, Hostinger includes unlimited lifetime Let’s Encrypt SSL and free WHOIS privacy permanently.',
      metric: '$80/Yr Saved',
      metricLabel: 'Per Domain on SSL Alone'
    },
    {
      icon: <Globe2 className="w-6 h-6 text-teal-600" />,
      title: '8 Global Datacenters (Asia, Europe, Americas)',
      badge: 'Localized Latency',
      description: 'Select server locations in Singapore, India, the USA, the UK, Germany, France, or Brazil. Visitors in South Asia and Bangladesh enjoy blazing 25ms–45ms ping from Singapore/India nodes.',
      metric: '8 Locations',
      metricLabel: 'Choose Nearest Datacenter'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-rose-600" />,
      title: 'Risk-Free 30-Day Money-Back Guarantee',
      badge: '100% Peace of Mind',
      description: 'Try the service with complete confidence. If your website doesn’t load faster or if you change your mind for any reason, request a full 100% refund with one click in your dashboard.',
      metric: '30 Days',
      metricLabel: 'No Questions Asked'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-xs space-y-12">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full inline-block">
          Why Hostinger Beats Every Competitor
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display">
          Everything New Website Owners Need to Launch with Confidence
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          I've migrated dozens of production client websites over 5+ years. Here is why Hostinger is the only web host I deploy for new small business owners and freelancers in 2026.
        </p>
      </div>

      {/* 6 Key Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {benefits.map((b, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {b.icon}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100/80 px-2.5 py-0.5 rounded-full">
                  {b.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-sky-700 transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>

            {/* Proof Metric Strip */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-slate-900 text-sm tabular-nums">
                {b.metric}
              </span>
              <span className="text-slate-500 text-[11px]">
                {b.metricLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* High-Intent Conversion Banner */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Verified Partner Promotion Active
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Claim Up to 75% Off + 3 Months Free & Free Domain
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Lock in the developer discount starting at $2.99/month. Includes free custom domain (.com), unlimited lifetime SSL, LiteSpeed caching, and free migration assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Coupon Code Pill */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase tracking-wide">
                  Partner Coupon Code:
                </span>
                <span className="font-mono font-bold text-amber-300 text-sm">
                  {coupon}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="px-2.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-[11px] font-semibold flex items-center gap-1 transition-colors"
                title="Copy coupon code"
              >
                {copied ? (
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

            {/* Direct CTA */}
            <button
              onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <span>Activate Hostinger Deal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

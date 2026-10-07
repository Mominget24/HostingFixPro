import React from 'react';
import { PageId } from '../../types';
import { 
  ShieldCheck, 
  Server, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  ArrowUpRight, 
  Mail, 
  ExternalLink,
  Award
} from 'lucide-react';
import founderAvatar from '../../assets/images/founder_web_engineer_1791370332984.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDeal }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Founder & Infrastructure Architect
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            About HostingFixPro & Our Testing Mission
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Why we built an independent web hosting benchmark lab to protect small businesses, creators, and freelancers from predatory renewal fees and misleading reviews.
          </p>
        </div>
      </section>

      {/* FOUNDER PROFILE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-sky-500/20 shadow-md">
              <img
                src={founderAvatar}
                alt="Founder and web infrastructure engineer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-4">
              Muktar Chowdhury
            </h3>
            <p className="text-xs text-sky-700 font-semibold mt-0.5">
              Full-Stack Developer & E-Commerce Architect
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
              <span>5+ Years Production Experience</span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              "I build and maintain live eCommerce websites. This site shares what actually works in production."
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Hi, I'm Muktar. Over the last 5+ years, I've developed, scaled, and managed custom web applications and live WooCommerce stores. In 2021, I grew frustrated with traditional review sites that consistently ranked slow, overpriced web hosts as #1 simply because those hosts paid the highest affiliate payouts.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When I migrated my production clients to modern LiteSpeed cloud hosting on Hostinger, page speeds improved by up to 2.4 seconds, customer checkouts sped up, and hosting renewal invoices dropped by over 60%. I created HostingFixPro to share verified benchmarks, zero-downtime migration steps, and transparent pricing math so you never get trapped by surprise $80/year SSL fees or slow servers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact for Free Setup Guidance</span>
              </button>
              <button
                onClick={onOpenDeal}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
              >
                <span>Check Verified Hostinger Deals</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES & TESTING PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Our Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            The HostingFixPro Testing Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">1. Self-Funded Server Nodes</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We purchase our own hosting accounts using standard customer signups. We never accept free accounts, VIP corporate reviewer staging nodes, or special server prioritization from hosting companies.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">2. Real Traffic Concurrency</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We test actual WordPress installations with plugins, database tables, and image galleries rather than blank HTML pages. We ping servers from multiple continents to verify global latency.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">3. Transparent FTC Disclosures</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We earn referral commissions when readers buy through our links, but our ratings are never for sale. If a host has high renewal markups (like GoDaddy) or slow TTFB, we state it clearly and unapologetically.
            </p>
          </div>
        </div>
      </section>

      {/* FTC AFFILIATE ETHICS STATEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Affiliate Disclosure & Ethics Commitment
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-display">
            How This Site Is Monetized & Why You Can Trust Our Data
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            HostingFixPro participates in verified partner affiliate programs with Hostinger, Namecheap, and other web infrastructure providers. When you click our partner links and purchase hosting or a domain, we may receive compensation. This does not cost you a single extra penny; in fact, our partner links and coupon codes (e.g., <code>HOSTINGFIXPRO</code>) typically provide up to 75% off standard rates plus free extra months.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Affiliate partnerships fund our independent testing lab, uptime ping monitors, and free tools. However, commission rates never dictate our reviews. We recommend Hostinger because it consistently outperforms rivals on LiteSpeed hardware and price integrity.
          </p>
        </div>
      </section>
    </div>
  );
};

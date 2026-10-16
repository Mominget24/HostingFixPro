import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Server, 
  ArrowUpRight, 
  Search, 
  ShieldCheck, 
  Clock, 
  Activity, 
  Layers, 
  Gauge, 
  RotateCw, 
  BarChart3, 
  UserCheck, 
  FileText,
  Tag,
  Copy,
  Check,
  Cpu,
  Globe,
  Award,
  Sparkles,
  BookOpen,
  Layout,
  Scale,
  Palette,
  Store,
  ChevronRight
} from 'lucide-react';
import heroImage from '../../assets/images/hero_server_infrastructure_1791370307218.jpg';
import templateShowcase from '../../assets/images/website_templates_showcase_1791384998861.jpg';
import { affiliateProviders, copyAffiliateCoupon } from '../../config/affiliates';
import { ComparisonTable } from '../ComparisonTable';
import { WhyChooseHostinger } from '../WhyChooseHostinger';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: 'hostinger' | 'bluehost' | 'namecheap' | 'contabo' | string, customUrl?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDeal }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const hostinger = affiliateProviders.hostinger;
  const contabo = affiliateProviders.contabo;
  const namecheap = affiliateProviders.namecheap;

  const handleCopyCode = async (code: string) => {
    await copyAffiliateCoupon(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION - Strictly aligned with Hostinger Platform Guidelines */}
      <section className="relative pt-12 md:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200/80 rounded-md px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Beginner to Production Walkthrough (2026 Edition)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] font-display text-balance">
                Start Your First Website with Confidence
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                A clear, hands-on engineering guide to choosing your domain, configuring LiteSpeed cloud hosting on Hostinger, and launching a secure, blazing-fast website — without surprise renewal hikes.
              </p>

              {/* Two Big CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
                  className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 text-base active:scale-[0.98]"
                >
                  <span>Claim Hostinger Deal (Up to 75% Off + Free Domain)</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('tutorials')}
                  className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <span>Getting Started Tutorials</span>
                </button>
              </div>

              {/* Trust Badges Row */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Hostinger Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Farhan Momen (5+ Yrs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>LiteSpeed Enterprise</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>142ms Real TTFB</span>
                </div>
              </div>
            </div>

            {/* Right Column Visual / Live Templates Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group">
                <img
                  src={templateShowcase}
                  alt="Modern website templates showcase for portfolio, blog and business"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                
                {/* Floating Metric Callouts */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl text-slate-900">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Modern Production Templates
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Free with Hostinger
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                    <div>
                      <div className="text-xl font-bold font-mono text-slate-900 tabular-nums">142ms</div>
                      <div className="text-[11px] text-slate-500">TTFB Load</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold font-mono text-sky-600 tabular-nums">100/100</div>
                      <div className="text-[11px] text-slate-500">Mobile Speed</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold font-mono text-emerald-600 tabular-nums">$2.99</div>
                      <div className="text-[11px] text-slate-500">Starting/Mo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STEP-BY-STEP GETTING STARTED GUIDE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 font-mono">
            Structured Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
            A Clear Guide to Getting Started
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Building your first website doesn't need to be overwhelming. Follow these 4 concrete steps to go from zero to a live, secure website today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Choose Your Domain</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pick a memorable .com or .net name. When you sign up for Hostinger Premium or Business, you get your domain registration 100% free for the first year with free WHOIS privacy.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tutorials')}
              className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Domain tutorial</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Select Hosting Tier</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose between <strong>Hostinger Premium</strong> ($2.99/mo for portfolios and blogs) or <strong>Hostinger Business</strong> ($3.99/mo for WooCommerce and automated daily backups).
              </p>
            </div>
            <button
              onClick={() => onNavigate('comparisons')}
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Compare plans</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-lg">1-Click WordPress & SSL</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Log into hPanel and hit the 1-click Auto Installer. Hostinger provisions WordPress, configures the LiteSpeed Cache engine, and issues an automated Let's Encrypt SSL certificate.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tutorials')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>WordPress setup guide</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Pick a Template & Launch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select from hundreds of designer website templates tailored for blogs, personal portfolios, or eCommerce stores. Add your copy and images, and publish in under an hour.
              </p>
            </div>
            <button
              onClick={() => onNavigate('use-cases')}
              className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Explore template guides</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 3 CORE GUIDELINE HUBS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hub 1: Tutorials */}
          <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-200/80 rounded-3xl p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Practical Tutorials</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step master guides: How to choose a domain without hidden charges, configure LiteSpeed caching, and launch a fast WordPress website.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tutorials')}
              className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Open Tutorials Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hub 2: Use Cases */}
          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200/80 rounded-3xl p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Use-Case Guides</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailored architectural setups and template recommendations specifically for personal blogs, creative portfolios, and small business stores.
              </p>
            </div>
            <button
              onClick={() => onNavigate('use-cases')}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Explore Use Cases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hub 3: Honest Reviews */}
          <div className="bg-gradient-to-br from-slate-100 to-white border border-slate-300 rounded-3xl p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Honest Reviews</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-hype assessment: who Hostinger suits, what to consider regarding renewal prices, honest trade-offs, and head-to-head comparison with Bluehost.
              </p>
            </div>
            <button
              onClick={() => onNavigate('reviews')}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Read Honest Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= REQUIREMENT 02: HIGH-CONVERTING FEATURED OFFER CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Hand-Picked Infrastructure Deals
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-display">
            Featured Partner Offers & Exclusive Discounts
          </h2>
          <p className="text-slate-600 text-sm">
            Tested in production. Click through our verified links to claim developer-tier discounts and stack coupon codes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          {/* HOSTINGER TIER 1: PREMIUM */}
          <div className="lg:col-span-1 rounded-3xl bg-white border border-slate-200 p-8 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                Best Value for Starters
              </span>
              <span className="text-xs font-bold text-slate-500">Up to 75% Off</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-slate-900">
                Hostinger Premium
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The perfect entry plan for personal portfolios, standard blogs, and new brochure websites. Includes a free custom domain.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">$2.99</span>
                  <span className="text-xs text-slate-500">/ mo + 3 Mo Free</span>
                </div>
                <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200">
                  <span>Stack Partner Code:</span>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(hostinger.couponCode || 'XV5MARCWR0H8')}
                    className="font-mono font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-300"
                  >
                    <span>{hostinger.couponCode}</span>
                    {copiedCode === hostinger.couponCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </button>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>100 GB Ultra-Fast NVMe SSD</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Custom Domain (.com) for 1 Year</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unlimited Lifetime Free SSL Certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Host up to 100 Websites on One Account</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
                className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>Select Premium Plan ($2.99)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-500 mt-2">
                30-day money-back guarantee
              </div>
            </div>
          </div>

          {/* HOSTINGER TIER 2: BUSINESS (MARQUEE ELEVATED HIGHEST CONVERTING CARD) */}
          <div className="lg:col-span-1 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-8 border-2 border-emerald-500 shadow-2xl relative flex flex-col justify-between space-y-6 ring-4 ring-emerald-500/15 -translate-y-1 lg:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 flex items-center gap-1">
                <Zap className="w-3 h-3 fill-slate-950" /> #1 Most Popular · Developer Choice
              </span>
              <span className="text-xs font-bold text-emerald-400">Recommended</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-white">
                Hostinger Business
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Supercharged for WooCommerce, eCommerce checkout speed, and dynamic WordPress databases with built-in daily backups.
              </p>

              <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-emerald-400 tabular-nums">$3.99</span>
                  <span className="text-xs text-slate-400">/ mo + 3 Mo Free</span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-700">
                  <span>Stack Partner Coupon:</span>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(hostinger.couponCode || 'XV5MARCWR0H8')}
                    className="font-mono font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-700"
                  >
                    <span>{hostinger.couponCode}</span>
                    {copiedCode === hostinger.couponCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </button>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>200 GB NVMe Storage</strong> (Double Space)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Automated Daily Backups</strong> ($25/yr Value Free)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Redis Object Cache</strong> for 3x Faster Queries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Global CDN & Staging Tool Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Domain (.com) + Unlimited Free Lifetime SSL</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
                className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Get Business Deal ($3.99/mo)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-2">
                100% risk-free 30-day money-back guarantee
              </div>
            </div>
          </div>

          {/* HOSTINGER TIER 3: CLOUD STARTUP */}
          <div className="lg:col-span-1 rounded-3xl bg-white border border-slate-200 p-8 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-50 text-sky-800">
                Maximum Cloud Power
              </span>
              <span className="text-xs font-bold text-sky-600">Dedicated IP</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-slate-900">
                Cloud Startup
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated server resources with zero noisy neighbors. Built for high-traffic e-commerce and scaling agencies.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">$7.99</span>
                  <span className="text-xs text-slate-500">/ mo (Dedicated Cloud)</span>
                </div>
                <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200">
                  <span>Stack Partner Code:</span>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(hostinger.couponCode || 'XV5MARCWR0H8')}
                    className="font-mono font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-300"
                  >
                    <span>{hostinger.couponCode}</span>
                    {copiedCode === hostinger.couponCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </button>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Dedicated Resources: 3 GB RAM & 2 CPU</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated IP Address Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Host up to 300 High-Traffic Websites</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Priority VIP 24/7 Developer Support</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
                className="w-full py-4 px-6 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>Select Cloud Startup ($7.99)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-500 mt-2">
                20x resource allocation vs shared
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Alternative Partner Card: Bluehost */}
        <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-white rounded-2xl border border-blue-200/80 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-xs">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-slate-900 font-display">
                  Prefer Official WordPress.org Endorsed Hosting?
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                  Verified Referral Partner
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                If your company prioritizes WordPress.org's historic #1 recommended provider with 1-click guided onboarding and 24/7 phone assistance, activate our verified Bluehost partner rate at <strong>$2.95/month</strong> with a free custom domain.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenDeal('bluehost')}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all whitespace-nowrap shadow-xs active:scale-[0.98] shrink-0"
          >
            <span>Claim Bluehost Deal ($2.95/mo)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ================= REQUIREMENT 04: REUSABLE COMPARISON TABLE INJECTED ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Live Hardware Benchmarks
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Side-by-Side Hosting Specifications
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Compare Hostinger, Namecheap, Contabo, and legacy competitors across server response, disk hardware, and renewal costs.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('hostinger-vs-godaddy')}
              className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
            >
              <span>Hostinger vs GoDaddy (2025 Review) →</span>
            </button>
            <button
              onClick={() => onNavigate('comparisons')}
              className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
            >
              <span>View All Benchmarks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reusable Comparison Table Component */}
        <ComparisonTable onOpenDeal={onOpenDeal} />
      </section>

      {/* WHY CHOOSE HOSTINGER - TAILORED FOR NEW CUSTOMERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyChooseHostinger onOpenDeal={onOpenDeal} />
      </section>

      {/* WHY CHOOSE US (3-COLUMN GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Engineered For Small Businesses & Freelancers
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-display">
            Why Follow Our Hosting Setup?
          </h2>
          <p className="text-slate-600 text-sm">
            Most hosting review sites are run by affiliate content farms. We are active developers testing real production client workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-sky-300 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Maintained by a Web Developer
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              I build and maintain live eCommerce stores and client applications daily. You get hosting blueprints and server setups proven in production, not hypothetical theory.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-emerald-300 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <RotateCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Free Migration Guidance
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Moving away from slow or expensive legacy hosting? Follow our interactive 6-stage step-by-step migration guide to move files, database, and emails with zero downtime.
            </p>
            <div>
              <button
                onClick={() => onNavigate('migration-guide')}
                className="text-emerald-700 font-semibold text-xs inline-flex items-center gap-1 hover:underline"
              >
                Open Migration Checklist <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-indigo-300 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              No Fluff Reviews & Cost Truths
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We expose the 3-year renewal traps, calculate real cost multipliers, and publish actual PageSpeed and TTFB measurements from independent server pings.
            </p>
            <div>
              <button
                onClick={() => onNavigate('comparisons')}
                className="text-indigo-700 font-semibold text-xs inline-flex items-center gap-1 hover:underline"
              >
                See Head-to-Head Tests <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COMPARISON TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Most Popular Showdown (2026 Benchmark)
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Hostinger vs GoDaddy — See Who Actually Wins
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                GoDaddy still dominates TV commercials, but when tested side-by-side with LiteSpeed servers, Hostinger delivers 3.4x faster loading speeds, includes free SSL for life, and prevents GoDaddy's infamous $79/year renewal shock.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('comparisons')}
                  className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl transition-all flex items-center gap-2 text-sm"
                >
                  <span>Read Full Comparison</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 text-sm"
                >
                  <span>Get Hostinger Deal ($2.99/mo)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick score card */}
            <div className="lg:col-span-4 bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-700 text-sm">
                <span className="text-slate-400">Winner:</span>
                <span className="font-bold text-emerald-400">Hostinger (Decisive)</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">TTFB (Response):</span>
                <span className="font-mono tabular-nums text-white">142ms vs 486ms</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Free Lifetime SSL:</span>
                <span className="text-white">Included vs $79.99/yr</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Web Server:</span>
                <span className="text-white">LiteSpeed vs Apache</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION (3-STEP PROCESS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Simple 3-Step Setup
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-display">
            How to Launch Your Website With Us
          </h2>
          <p className="text-slate-600 text-sm">
            We make web hosting setup straightforward, transparent, and completely headache-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 space-y-3 relative">
            <div className="text-3xl font-bold text-slate-300 font-mono">01</div>
            <h3 className="text-lg font-bold text-slate-900">
              Choose Your Plan
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Use our honest comparisons and interactive cost calculator to select the exact hosting plan suited to your traffic and budget.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 space-y-3 relative">
            <div className="text-3xl font-bold text-slate-300 font-mono">02</div>
            <h3 className="text-lg font-bold text-slate-900">
              Buy Through My Link
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unlock up to 75% off + 3 bonus months with code <code className="text-emerald-700 font-bold">{hostinger.couponCode}</code> at zero extra cost to you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 space-y-3 relative">
            <div className="text-3xl font-bold text-slate-300 font-mono">03</div>
            <h3 className="text-lg font-bold text-slate-900">
              I'll Help You Setup
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Use our step-by-step zero-downtime migration protocols, or send us a message through our Contact page for hands-on configuration help.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL HIGH CONVERSION CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 to-indigo-700 rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl space-y-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
              Ready to Launch Fast? Check Today's Best Hosting Deals
            </h2>
            <p className="text-sky-100 text-base sm:text-lg leading-relaxed">
              Get high-speed NVMe storage, free custom domain, automated backups, and 24/7 developer-friendly support starting at just $2.99/month.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-base"
            >
              <span>View Hostinger Special Offers</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('tools')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-base"
            >
              <Search className="w-4 h-4" />
              <span>Search for Your Domain</span>
            </button>
          </div>

          <div className="text-xs text-sky-200 pt-2">
            30-day money-back guarantee · Instant setup · Verified coupon code {hostinger.couponCode} applied
          </div>
        </div>
      </section>
    </div>
  );
};

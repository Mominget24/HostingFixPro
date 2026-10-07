import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  BookOpen, 
  Briefcase, 
  Gauge, 
  ShieldCheck, 
  Zap, 
  Server, 
  ExternalLink,
  Sliders,
  Check,
  Layout,
  Palette,
  Store,
  FileText
} from 'lucide-react';
import templateShowcase from '../../assets/images/website_templates_showcase_1791384998861.jpg';
import { HOSTINGER_AFFILIATE_URL, HOSTINGER_COUPON_CODE, hostingerPlans } from '../../config/affiliates';

interface UseCasesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: string, customUrl?: string) => void;
}

export const UseCasesPage: React.FC<UseCasesPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'portfolios' | 'small-biz'>('blogs');

  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200/80 rounded-md px-3 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Production Architecture Tailored to Your Model</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Hosting Guides by Use-Case: Blogs, Portfolios & Small Business
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A photographer's portfolio needs lightning-fast image compression; an eCommerce store needs transactional database concurrency; a news blog needs server-side page caching. Here is how to configure each on Hostinger.
          </p>
        </div>

        {/* Visual Showcase Banner */}
        <div className="mt-10 relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg group">
          <img 
            src={templateShowcase} 
            alt="Showcase of Modern Website Templates for Portfolios, Blogs and eCommerce" 
            className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">Modern Layout Blueprints</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display mt-1">
              Production-Grade Templates Ready in 1-Click
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mt-1 leading-relaxed">
              Included free with Hostinger: Access over 150+ pre-built designer templates for Astra, Kadence, and WordPress block builder with zero extra licensing costs.
            </p>
          </div>
        </div>

        {/* Use-Case Selector Tabs */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`p-5 rounded-2xl text-left border transition-all flex items-start gap-4 ${
              activeTab === 'blogs'
                ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-500/20'
                : 'bg-slate-50 hover:bg-white border-slate-200'
            }`}
          >
            <div className={`p-3 rounded-xl ${activeTab === 'blogs' ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">High-Traffic Blogs</h3>
              <p className="text-xs text-slate-500 mt-0.5">Content, SEO & AdSense</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('portfolios')}
            className={`p-5 rounded-2xl text-left border transition-all flex items-start gap-4 ${
              activeTab === 'portfolios'
                ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-500/20'
                : 'bg-slate-50 hover:bg-white border-slate-200'
            }`}
          >
            <div className={`p-3 rounded-xl ${activeTab === 'portfolios' ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Portfolios & Creatives</h3>
              <p className="text-xs text-slate-500 mt-0.5">Media delivery & custom email</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('small-biz')}
            className={`p-5 rounded-2xl text-left border transition-all flex items-start gap-4 ${
              activeTab === 'small-biz'
                ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-500/20'
                : 'bg-slate-50 hover:bg-white border-slate-200'
            }`}
          >
            <div className={`p-3 rounded-xl ${activeTab === 'small-biz' ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Small Business & Store</h3>
              <p className="text-xs text-slate-500 mt-0.5">WooCommerce & Daily Backups</p>
            </div>
          </button>
        </div>
      </section>

      {/* USE CASE 1: BLOGS */}
      {activeTab === 'blogs' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Use Case 01</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Architecting a High-Traffic WordPress Blog
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Blogging requires rock-solid uptime, instant mobile loading, and Core Web Vitals optimization so your content ranks at the top of Google Search.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center shrink-0">
                <span className="text-[11px] uppercase font-bold text-slate-500 block">Recommended Plan</span>
                <span className="text-lg font-bold text-slate-900 block">Hostinger Business</span>
                <span className="text-xs font-semibold text-emerald-600">$3.99/mo (75% Off)</span>
              </div>
            </div>

            {/* Architecture Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">LiteSpeed Server-Side Caching</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When a viral article attracts 10,000 visitors at once, standard servers crash. LiteSpeed serves static HTML snapshots directly from RAM memory, maintaining 0.2s load times under heavy traffic spikes.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Built-In Global CDN</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hostinger's in-house CDN distributes your blog images, CSS, and fonts across 60+ edge points globally, ensuring readers in London, New York, or Dhaka experience identical instant speed.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">AdSense & Affiliate Optimization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  JavaScript ad tags (Google AdSense, Mediavine) slow down normal websites. With LiteSpeed's lazy-load JS feature, ad scripts are deferred until visitor scroll, protecting your Google PageSpeed scores.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-600">
                Includes free domain (.com), free SSL, and automated staging environment.
              </div>
              <button
                onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Launch Your Blog with Hostinger Business</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* USE CASE 2: PORTFOLIOS */}
      {activeTab === 'portfolios' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Use Case 02</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Building a Creative Portfolio & Freelance Showcase
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Designers, developers, and consultants need a sleek, professional showcase that positions them as high-value experts and captures client leads effortlessly.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center shrink-0">
                <span className="text-[11px] uppercase font-bold text-slate-500 block">Recommended Plan</span>
                <span className="text-lg font-bold text-slate-900 block">Hostinger Premium</span>
                <span className="text-xs font-semibold text-emerald-600">$2.99/mo (Lowest Cost)</span>
              </div>
            </div>

            {/* Architecture Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Automatic WebP Media Delivery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-res UI mockups, photographs, and case study hero graphics are automatically compressed to WebP on the server fly, preserving crisp detail without ballooning file sizes.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Free Custom Business Email</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sending proposals from a generic @gmail.com address costs you credibility. Hostinger includes up to 100 free professional email addresses (e.g. <code>contact@yourname.com</code>) with webmail and mobile IMAP sync.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Host up to 100 Portfolios & Demos</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  As your freelance business expands, you can spin up separate subdomains and production demo URLs for clients (e.g., <code>demo.youragency.com</code>) at zero additional subscription fees.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-600">
                Includes free 1-year custom domain registration and unlimited SSL certificates.
              </div>
              <button
                onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Launch Your Portfolio on Hostinger Premium</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* USE CASE 3: SMALL BUSINESS & ECOMMERCE */}
      {activeTab === 'small-biz' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Use Case 03</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Launching a Small Business & WooCommerce Store
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Commercial transactions require zero downtime, robust cart performance, strict TLS encryption, and automated daily backups to protect buyer records.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center shrink-0">
                <span className="text-[11px] uppercase font-bold text-slate-500 block">Recommended Plan</span>
                <span className="text-lg font-bold text-slate-900 block">Hostinger Business / Cloud</span>
                <span className="text-xs font-semibold text-emerald-600">$3.99 - $7.99/mo</span>
              </div>
            </div>

            {/* Architecture Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Redis Object Cache for Instant Carts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unlike blog posts, shopping carts and checkout pages cannot be statically cached. Hostinger Business provides Redis in-memory caching to execute MySQL queries 3x faster, eliminating checkout abandonment.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Automated Daily Backups & 1-Click Restore</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If a bad plugin update breaks your payment gateway at midnight, you can roll back to that morning's snapshot with a single click. Daily backups are stored securely on independent offsite servers.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">1-Click WordPress Staging Sandbox</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Never test new designs, payment processors, or inventory plugins on your live customer-facing store. Clone your site to a secure staging sandbox with one click, test thoroughly, and push live safely.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-600">
                Backed by 99.9% uptime SLA, DDoS protection, and 30-day money-back guarantee.
              </div>
              <button
                onClick={() => onOpenDeal('hostinger', HOSTINGER_AFFILIATE_URL)}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Start Your Store with Hostinger Business</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Cross Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
            <h4 className="font-bold text-slate-900 text-lg">Need Step-by-Step Installation?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Check out our complete setup tutorial covering domain registration, LiteSpeed config, and launching WordPress in 4 minutes.
            </p>
            <button
              onClick={() => onNavigate('tutorials')}
              className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 pt-1"
            >
              <span>View Tutorials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
            <h4 className="font-bold text-slate-900 text-lg">Compare All Hostinger Tiers</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Read our transparent side-by-side analysis of Premium vs Business vs Cloud Startup with renewal pricing math.
            </p>
            <button
              onClick={() => onNavigate('comparisons')}
              className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 pt-1"
            >
              <span>View Comparison Table</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
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
  Award,
  Globe,
  Sparkles,
  Megaphone,
  Video,
  Share2,
  Code2,
  Camera,
  Upload,
  UserCheck,
  Trash2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('farhan_momen_real_photo');
      if (saved) {
        setCustomAvatar(saved);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('Please choose an image under 8MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCustomAvatar(result);
        try {
          localStorage.setItem('farhan_momen_real_photo', result);
        } catch {
          // ignore
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setCustomAvatar(null);
    try {
      localStorage.removeItem('farhan_momen_real_photo');
    } catch {
      // ignore
    }
  };

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
            {/* Real Avatar Display with Uploader */}
            <div className="relative group">
              <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-sky-500/30 shadow-md bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-white relative">
                {customAvatar ? (
                  <img
                    src={customAvatar}
                    alt="Farhan Momen - Founder & Web Specialist"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <div className="w-20 h-20 rounded-full bg-sky-600/30 border border-sky-400/40 flex items-center justify-center text-3xl font-extrabold text-sky-300 font-display tracking-wider shadow-inner">
                      FM
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Farhan Momen</div>
                      <div className="text-[11px] text-sky-400 font-medium">Verified Publisher</div>
                    </div>
                  </div>
                )}

                {/* Upload overlay trigger button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer p-4 text-center backdrop-blur-xs"
                  title="Upload your real photo"
                >
                  <Camera className="w-6 h-6 text-sky-400" />
                  <span className="text-xs font-semibold text-white">
                    {customAvatar ? 'Change Real Photo' : 'Upload Your Real Photo'}
                  </span>
                  <span className="text-[10px] text-slate-300">Click to upload JPG / PNG</span>
                </button>
              </div>

              {/* Status pill below avatar */}
              <div className="absolute -bottom-3 inset-x-0 flex justify-center">
                {customAvatar ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs">
                    <UserCheck className="w-3 h-3 text-emerald-600" /> Real Author Photo
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-100 text-sky-800 border border-sky-200 shadow-xs">
                    <ShieldCheck className="w-3 h-3 text-sky-600" /> Verified Author
                  </span>
                )}
              </div>
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Photo Action Links */}
            <div className="mt-5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-xs text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{customAvatar ? 'Update Photo' : 'Upload Real Photo'}</span>
              </button>
              {customAvatar && (
                <>
                  <span className="text-slate-300">·</span>
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="text-xs text-red-500 hover:text-red-700 inline-flex items-center gap-0.5 hover:underline cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </>
              )}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              Farhan Momen
            </h3>
            <p className="text-xs text-sky-700 font-semibold mt-0.5">
              Full-Stack Developer, AI Vibe Coder & Digital Growth Strategist
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
              <span className="bg-slate-100 px-2.5 py-1 rounded-full font-medium">5+ Years Production Experience</span>
            </div>

            {/* Core Competencies Badges */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-4 pt-3 border-t border-slate-100 max-w-xs">
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200">
                <Globe className="w-3 h-3 text-sky-600" /> WordPress & WooCommerce
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200">
                <Code2 className="w-3 h-3 text-purple-600" /> AI Vibe Coding
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Megaphone className="w-3 h-3 text-emerald-600" /> Digital Marketing & Facebook Ads
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                <Share2 className="w-3 h-3 text-amber-600" /> Social Media Post Design
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200">
                <Video className="w-3 h-3 text-indigo-600" /> AI Video Creation
              </span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              "I build and maintain live eCommerce websites. This site shares what actually works in production."
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Hi, I'm Farhan Momen. Over the last 5+ years, I've developed, scaled, and managed custom web applications and live WooCommerce stores. In 2021, I grew frustrated with traditional review sites that consistently ranked slow, overpriced web hosts as #1 simply because those hosts paid the highest affiliate payouts.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When I migrated my production clients to modern LiteSpeed cloud hosting on Hostinger, page speeds improved by up to 2.4 seconds, customer checkouts sped up, and hosting renewal invoices dropped by over 60%. I created HostingFixPro to share verified benchmarks, zero-downtime migration steps, and transparent pricing math so you never get trapped by surprise $80/year SSL fees or slow servers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Farhan for Setup Guidance</span>
              </button>
              <button
                onClick={onOpenDeal}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
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

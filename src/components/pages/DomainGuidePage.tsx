import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  Globe, 
  ShieldCheck, 
  Check, 
  X, 
  ArrowUpRight, 
  ExternalLink, 
  ArrowRight, 
  Server, 
  FileCode, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface DomainGuidePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: 'Hostinger' | 'Namecheap', customUrl?: string) => void;
}

export const DomainGuidePage: React.FC<DomainGuidePageProps> = ({ onNavigate, onOpenDeal }) => {
  const [selectedTld, setSelectedTld] = useState<string>('com');

  const registrarComparison = [
    {
      name: 'Hostinger (Recommended)',
      firstYear: 'FREE ($0.00 with hosting)',
      renewal: '$15.99',
      whoisPrivacy: 'Free for Life',
      hiddenFees: 'None',
      dnsSpeed: 'Fast (Cloudflare Global DNS)',
      rating: '#1 Best Choice (Domain Included Free)',
      isHostinger: true,
      link: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8'
    },
    {
      name: 'Namecheap',
      firstYear: '$10.48',
      renewal: '$14.98',
      whoisPrivacy: 'Free for Life',
      hiddenFees: 'None',
      dnsSpeed: 'Very Fast',
      rating: 'Good standalone registrar, but no free bundle',
      isHostinger: false,
      link: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8'
    },
    {
      name: 'Porkbun',
      firstYear: '$10.37',
      renewal: '$11.08',
      whoisPrivacy: 'Free for Life',
      hiddenFees: 'None',
      dnsSpeed: 'Fast',
      rating: 'Cheaper renewals, but zero free hosting bundle',
      isHostinger: false,
      link: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8'
    },
    {
      name: 'GoDaddy',
      firstYear: '$2.99 – $12.99',
      renewal: '$22.99 – $24.99',
      whoisPrivacy: 'Basic free, $14.99/yr Full',
      hiddenFees: 'High renewal markup & upsells',
      rating: 'Avoid (Expensive Renewals)',
      isHostinger: false,
      link: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Domain Architecture & Strategy
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Domain Names Made Simple — Choose, Buy & Connect (No Confusion)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Everything you need to know about purchasing web addresses, avoiding registrar renewal traps, configuring DNS records, and connecting external domains to your hosting.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenDeal('Hostinger')}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Claim Free Domain with Hostinger (Code: XV5MARCWR0H8)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tools')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm flex items-center gap-2 border border-white/20 transition-colors"
            >
              <span>Search Availability in Free Domain Tool</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1 & 2: WHAT IS A DOMAIN & TLDs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              1. What Is a Domain Name?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Think of web hosting as the physical apartment where your website files, images, and database live. The <strong>domain name</strong> is the street address (e.g., <code>yourcompany.com</code>) that visitors type into their browser GPS to arrive at your server.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Without a domain name, people would have to memorize an ugly numerical IP address like <code>195.35.48.112</code>. When someone visits your domain, the global Domain Name System (DNS) translates that name into your host’s IP address in milliseconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              2. Top-Level Domains (TLDs) Explained
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="p-2.5 rounded-lg bg-slate-50 flex items-center justify-between">
                <div><strong>.com</strong> — Commercial standard. First choice for 95% of businesses worldwide.</div>
                <span className="text-xs text-emerald-700 font-bold">Universal</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 flex items-center justify-between">
                <div><strong>.net / .org</strong> — Network infrastructure or non-profit organizations.</div>
                <span className="text-xs text-slate-500 font-bold">Trusted</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 flex items-center justify-between">
                <div><strong>.io / .ai / .co</strong> — Tech startups, software tools, SaaS products.</div>
                <span className="text-xs text-sky-700 font-bold">Tech Trend</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 flex items-center justify-between">
                <div><strong>.in / .bd / .uk</strong> — Country-code TLDs (ccTLD) for targeted local markets.</div>
                <span className="text-xs text-amber-700 font-bold">Geo-Target</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: 7 GOLDEN RULES FOR CHOOSING A DOMAIN */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Naming Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
              How to Choose a Great Domain Name (7 Golden Rules)
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Avoid naming blunders that can cost you thousands in future re-branding or lost customer referrals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {[
              {
                title: '1. Pass the Radio Test',
                desc: 'If you say your domain over the phone or in a podcast, can people spell it correctly without asking "is that with a C or a K?"'
              },
              {
                title: '2. Absolutely No Hyphens',
                desc: 'Domains like "best-web-host-deals.com" look spammy, trigger security caution in visitors, and are impossible to type on mobile.'
              },
              {
                title: '3. Keep Under 15 Characters',
                desc: 'Shorter names have higher recall. Aim for 2 to 3 syllables maximum (e.g., Stripe, Shopify, Hostinger).'
              },
              {
                title: '4. Prioritize .com First',
                desc: 'If the .com is owned by a parked broker, try a natural prefix (e.g., "get[name].com", "use[name].com") before settling for obscure extensions.'
              },
              {
                title: '5. Avoid Trademark Infringements',
                desc: 'Never include trademarked words like "WordPress", "Apple", or "Facebook" in your domain name or you risk UDRP domain forfeiture.'
              },
              {
                title: '6. Check Social Handles First',
                desc: 'Before purchasing, verify if Twitter/X, Instagram, and LinkedIn handles are open or available with matching names.'
              }
            ].map((rule, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">{rule.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: REGISTRAR COMPARISON TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Price & Privacy Showdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
              Best Places to Buy Domains: Namecheap vs GoDaddy vs Porkbun
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Comparing upfront pricing, renewal inflation, and WHOIS Privacy protection.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 uppercase">
                  <th className="py-3.5 px-4">Registrar</th>
                  <th className="py-3.5 px-4">1st Year .com</th>
                  <th className="py-3.5 px-4">Renewal .com</th>
                  <th className="py-3.5 px-4">WHOIS Privacy</th>
                  <th className="py-3.5 px-4">Hidden Upsells</th>
                  <th className="py-3.5 px-4">Verdict</th>
                  <th className="py-3.5 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {registrarComparison.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{r.name}</td>
                    <td className="py-3.5 px-4 font-mono font-medium text-slate-900">{r.firstYear}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">{r.renewal}</td>
                    <td className="py-3.5 px-4 text-emerald-700 font-medium">{r.whoisPrivacy}</td>
                    <td className="py-3.5 px-4 text-slate-600">{r.hiddenFees}</td>
                    <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">{r.rating}</td>
                    <td className="py-3.5 px-4">
                      {r.isHostinger ? (
                        <button
                          onClick={() => onOpenDeal('Hostinger')}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
                        >
                          Claim Free Domain
                        </button>
                      ) : (
                        <button
                          onClick={() => onOpenDeal('Hostinger')}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors whitespace-nowrap"
                        >
                          Get Free on Hostinger <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 6: HOW TO CONNECT DOMAIN TO HOSTING */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Technical Tutorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
              How to Connect an External Domain to Web Hosting
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Did you buy your domain on Namecheap and your hosting on Hostinger? Here are the two clean methods to link them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Method A: Nameservers */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                Method A: Change Nameservers (Easiest)
              </span>
              <h3 className="font-bold text-slate-900 text-base">Point to Hostinger Nameservers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Log into your domain registrar (Namecheap/GoDaddy) &rarr; Manage Domain &rarr; Custom DNS, and enter:
              </p>
              <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-sky-800 space-y-1">
                <div>ns1.dns-parking.com</div>
                <div>ns2.dns-parking.com</div>
              </div>
              <p className="text-[11px] text-slate-500">
                This delegates all DNS records directly to your Hostinger hPanel dashboard.
              </p>
            </div>

            {/* Method B: A-Record */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Method B: Point A Record (Recommended for Email Users)
              </span>
              <h3 className="font-bold text-slate-900 text-base">Keep Existing DNS & Change A-Record</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you already use Google Workspace or Office 365, keep your registrar's nameservers and only edit the web root records:
              </p>
              <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-slate-800 space-y-1">
                <div>Type: A | Host: @ | Value: [Your Hostinger IP]</div>
                <div>Type: CNAME | Host: www | Value: yourdomain.com</div>
              </div>
              <p className="text-[11px] text-slate-500">
                Guarantees zero email disruption because MX records are left untouched.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7: WHY DOMAIN PRIVACY MATTERS */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Identity Protection
          </div>
          <h3 className="text-2xl font-bold font-display text-white">
            Why Free WHOIS Privacy is Non-Negotiable
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            When you register a domain name, ICANN mandates that your legal name, physical home address, personal phone number, and email address be recorded in a public database. Spammers and telemarketers scrape this database 24/7.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            Without WHOIS Privacy, you will receive dozens of spam robocalls and fake "Your domain is about to expire" phishing invoices within 48 hours of purchase. <strong>Both Namecheap and Hostinger include WHOIS Privacy 100% free for life.</strong> Never pay GoDaddy's $14.99/year fee for basic privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { PageId } from '../../types';
import { comparisonsList, budgetHostingShowdown, featureMatrix } from '../../data/comparisonsData';
import { 
  Check, 
  X, 
  ArrowUpRight, 
  ShieldCheck, 
  Gauge, 
  Clock, 
  Activity, 
  CheckCircle2, 
  HelpCircle, 
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface ComparisonsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: string, customUrl?: string) => void;
}

export const ComparisonsPage: React.FC<ComparisonsPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [selectedTerm, setSelectedTerm] = useState<'1yr' | '4yr'>('4yr');

  return (
    <div className="space-y-16 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Independent Benchmark Lab
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Hosting Comparisons — Real Speed Tests, Honest Reviews
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            I test every host myself with live websites. No fake benchmarks, no sponsored rankings — just verified TTFB server response speeds, actual PageSpeed scores, and true renewal prices.
          </p>
        </div>
      </section>

      {/* COMPARISON CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* CARD 1: PRIMARY MONEY PAGE - HOSTINGER VS GODADDY */}
        {comparisonsList.map((comp) => (
          <div 
            key={comp.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-colors"
          >
            <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Head-to-Head Benchmark
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-display">
                  {comp.name} vs {comp.rivalName}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {comp.tagline}
                </p>
              </div>

              {/* Winner Pill / Badge */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 flex items-center gap-2 self-start md:self-auto">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Verified Winner</div>
                  <div className="text-sm font-bold text-emerald-900">{comp.winner}</div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Speed & Price Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hostinger Side */}
                <div className="bg-sky-50/50 rounded-xl p-6 border border-sky-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-lg">{comp.name}</span>
                    <span className="text-xs font-bold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded">Our Pick</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm pt-2">
                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <div className="text-xs text-slate-500">Google PageSpeed</div>
                      <div className="text-2xl font-bold font-mono text-emerald-600 tabular-nums">{comp.speedScore}/100</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <div className="text-xs text-slate-500">Response (TTFB)</div>
                      <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">{comp.ttfbMs} ms</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <div className="text-xs text-slate-500">Intro Rate</div>
                      <div className="text-xl font-bold font-mono text-slate-900 tabular-nums">{comp.pricePerMo}/mo</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <div className="text-xs text-slate-500">Renewal Rate</div>
                      <div className="text-xl font-bold font-mono text-slate-700 tabular-nums">{comp.renewalPerMo}/mo</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <div><strong>Server:</strong> {comp.serverType}</div>
                    <div><strong>Free SSL:</strong> Lifetime Free Unlimited</div>
                    <div><strong>Best For:</strong> {comp.bestFor}</div>
                  </div>

                  <button
                    onClick={() => onOpenDeal('hostinger', comp.hostingerAffiliateUrl)}
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <span>Get Hostinger Deal ({comp.pricePerMo})</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Rival Side */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-lg">{comp.rivalName}</span>
                    <span className="text-xs text-slate-500">
                      {comp.id === 'hostinger-vs-bluehost' ? 'Official WP Partner' : 'Competitor'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm pt-2">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs text-slate-500">Google PageSpeed</div>
                      <div className="text-2xl font-bold font-mono text-amber-600 tabular-nums">{comp.rivalSpeedScore}/100</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs text-slate-500">Response (TTFB)</div>
                      <div className="text-2xl font-bold font-mono text-slate-700 tabular-nums">{comp.rivalTtfbMs} ms</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs text-slate-500">Intro Rate</div>
                      <div className="text-xl font-bold font-mono text-slate-900 tabular-nums">{comp.rivalPricePerMo}/mo</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-xs text-slate-500">Renewal Rate</div>
                      <div className="text-xl font-bold font-mono text-rose-600 tabular-nums">{comp.rivalRenewalPerMo}/mo</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <div><strong>Server:</strong> {comp.rivalServerType}</div>
                    <div><strong>Free SSL:</strong> {comp.rivalFreeSsl ? 'Included' : 'Paid ($79.99/yr extra)'}</div>
                    <div><strong>Best For:</strong> {comp.rivalBestFor}</div>
                  </div>

                  {comp.id === 'hostinger-vs-bluehost' ? (
                    <button
                      onClick={() => onOpenDeal('bluehost', comp.rivalAffiliateUrl)}
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <span>Get Bluehost Partner Deal ({comp.rivalPricePerMo}/mo)</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenDeal('hostinger')}
                      className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-300 flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Switch from {comp.rivalName} to Hostinger</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                    </button>
                  )}
                </div>
              </div>

              {/* Analysis & Verdict */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Engineering Verdict & Real World Testing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {comp.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-900">What we loved:</span>
                    {comp.pros.map((p, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-900">Things to keep in mind:</span>
                    {comp.cons.map((c, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* COMPARISON 3: BUDGET HOSTING SHOWDOWN UNDER $3/MONTH */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Low Budget Category
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Best Budget Hosting Under $3/Month
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Comparing the three most popular entry-level options on real hardware performance and renewal costs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {budgetHostingShowdown.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 border flex flex-col justify-between space-y-4 ${
                  idx === 0
                    ? 'border-sky-300 bg-sky-50/30 ring-2 ring-sky-500/20'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{item.highlight}</span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      ★ {item.rating}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>

                  <div className="py-2 border-y border-slate-100">
                    <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
                      {item.introPrice}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Renews at {item.renewalPrice}
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.storage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.websites}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>TTFB: {item.ttfb}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Free Domain: {item.freeDomain}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>SSL: {item.freeSsl}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  {item.name.includes('Hostinger') ? (
                    <button
                      onClick={() => onOpenDeal('hostinger', item.dealUrl)}
                      className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Get Hostinger Deal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : item.name.includes('Bluehost') ? (
                    <button
                      onClick={() => onOpenDeal('bluehost', item.dealUrl)}
                      className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Get Bluehost Deal ($2.95)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenDeal('hostinger')}
                      className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-300 text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Why Hostinger Beats {item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FULL FEATURE COMPARISON MATRIX */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Technical Audit
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              Feature-by-Feature Comparison Matrix
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Side-by-side technical capabilities audited across the 4 most commonly compared hosting providers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 uppercase">
                  <th className="py-3.5 px-4">Capability</th>
                  <th className="py-3.5 px-4 text-sky-700 font-bold bg-sky-50/50">Hostinger</th>
                  <th className="py-3.5 px-4">GoDaddy</th>
                  <th className="py-3.5 px-4">Bluehost</th>
                  <th className="py-3.5 px-4">Namecheap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {featureMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="py-3.5 px-4 font-semibold text-sky-800 bg-sky-50/30">{row.hostinger}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.godaddy}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.bluehost}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.namecheap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* HOW I TEST SECTION (BUILDS TRUST) */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              How We Test Web Hosts (Our Testing Protocol)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never rate a host based on marketing copy or sponsor checks. Every provider listed above undergoes our 4-point verification method:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="space-y-2">
              <div className="text-sky-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> 1. Real Uptime Ping
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated 60-second pings from Ashburn (US-East), Frankfurt (EU), and Singapore over a 12-month period to catch micro-outages.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Gauge className="w-4 h-4" /> 2. Google PageSpeed
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Testing standard WordPress WooCommerce sites under simulated 3G and 4G mobile bandwidth to verify Core Web Vitals compliance.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-indigo-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 3. Support Response
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secret shopper inquiries submitted at 2 AM on weekends testing technical depth on SSL errors and DNS issues.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-amber-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" /> 4. Pricing Verification
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We purchase actual accounts with real credit cards to discover auto-renew fees, SSL charges, and checkout surprises.
              </p>
            </div>
          </div>
        </div>

        {/* CTA TO TOOLS / QUIZ */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-display">
              Still unsure which plan matches your project?
            </h4>
            <p className="text-sm text-slate-300">
              Take our interactive 30-second hosting selector quiz to get an instant recommendation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('tools')}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-sm whitespace-nowrap transition-colors"
          >
            Launch 30-Second Quiz →
          </button>
        </div>
      </div>
    </div>
  );
};

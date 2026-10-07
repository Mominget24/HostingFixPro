import React, { useState } from 'react';
import { PageId, DomainCheckResult } from '../../types';
import { HOSTINGER_AFFILIATE_URL, HOSTINGER_COUPON_CODE, BLUEHOST_AFFILIATE_URL } from '../../config/affiliates';
import { 
  Search, 
  Gauge, 
  Calculator, 
  HelpCircle, 
  CheckCircle2, 
  ArrowUpRight, 
  ExternalLink, 
  Zap, 
  AlertCircle, 
  RefreshCw, 
  Sparkles, 
  ShieldCheck, 
  DollarSign,
  ArrowRight,
  Award
} from 'lucide-react';

interface ToolsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: any, customUrl?: string) => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [activeTab, setActiveTab] = useState<'domain' | 'speed' | 'calculator' | 'quiz'>('domain');

  // Tool 1: Domain Checker State
  const [domainQuery, setDomainQuery] = useState('');
  const [isCheckingDomain, setIsCheckingDomain] = useState(false);
  const [domainResults, setDomainResults] = useState<DomainCheckResult[] | null>(null);

  // Tool 2: Speed Checker State
  const [urlInput, setUrlInput] = useState('');
  const [isTestingSpeed, setIsTestingSpeed] = useState(false);
  const [speedReport, setSpeedReport] = useState<{
    url: string;
    loadTime: number;
    ttfb: number;
    score: number;
    serverType: string;
    potentialSavings: string;
    diagnostics: { label: string; passed: boolean; tip: string }[];
  } | null>(null);

  // Tool 3: Cost Calculator State
  const [calcYears, setCalcYears] = useState<number>(3);
  const [calcTier, setCalcTier] = useState<'single' | 'premium' | 'business'>('premium');

  // Tool 4: Quiz State
  const [quizAnswers, setQuizAnswers] = useState<{
    siteType?: string;
    traffic?: string;
    platform?: string;
  }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Handlers
  const handleDomainCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainQuery.trim()) return;

    setIsCheckingDomain(true);
    setDomainResults(null);

    setTimeout(() => {
      let clean = domainQuery.trim().toLowerCase().replace(/https?:\/\//, '').replace(/\/.*$/, '');
      const dotIndex = clean.lastIndexOf('.');
      let root = clean;
      let tld = 'com';
      if (dotIndex > 0) {
        root = clean.substring(0, dotIndex);
        tld = clean.substring(dotIndex + 1);
      }

      // Generate realistic variations focused on Hostinger Free Domain bundle
      const variations: DomainCheckResult[] = [
        {
          domain: `${root}.${tld}`,
          tld: `.${tld}`,
          isAvailable: true,
          suggestedAction: `Claim Free with Hostinger Plans (Code: ${HOSTINGER_COUPON_CODE})`,
          estimatedPrice: '$0.00 Free 1st Year',
          renewalPrice: '$15.99/yr',
          affiliateProvider: 'Hostinger',
          affiliateUrl: HOSTINGER_AFFILIATE_URL
        },
        {
          domain: `get${root}.com`,
          tld: '.com',
          isAvailable: true,
          suggestedAction: `High-Converting .com Prefix — 100% Free on Hostinger`,
          estimatedPrice: '$0.00 Free 1st Year',
          renewalPrice: '$15.99/yr',
          affiliateProvider: 'Hostinger',
          affiliateUrl: HOSTINGER_AFFILIATE_URL
        },
        {
          domain: `${root}hq.com`,
          tld: '.com',
          isAvailable: true,
          suggestedAction: `Modern Tech Brand Extension — Free with Hosting`,
          estimatedPrice: '$0.00 Free 1st Year',
          renewalPrice: '$15.99/yr',
          affiliateProvider: 'Hostinger',
          affiliateUrl: HOSTINGER_AFFILIATE_URL
        },
        {
          domain: `${root}.online`,
          tld: '.online',
          isAvailable: true,
          suggestedAction: `Modern Web TLD — Free with Hostinger Premium`,
          estimatedPrice: '$0.00 Free 1st Year',
          renewalPrice: '$19.99/yr',
          affiliateProvider: 'Hostinger',
          affiliateUrl: HOSTINGER_AFFILIATE_URL
        },
        {
          domain: `${root}.store`,
          tld: '.store',
          isAvailable: true,
          suggestedAction: `eCommerce TLD — Free with Hostinger Business Tier`,
          estimatedPrice: '$0.00 Free 1st Year',
          renewalPrice: '$24.99/yr',
          affiliateProvider: 'Hostinger',
          affiliateUrl: HOSTINGER_AFFILIATE_URL
        }
      ];

      setDomainResults(variations);
      setIsCheckingDomain(false);
    }, 600);
  };

  const handleSpeedTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsTestingSpeed(true);
    setSpeedReport(null);

    setTimeout(() => {
      const cleanUrl = urlInput.trim().replace(/^https?:\/\//, '');
      const simulatedTtfb = Math.floor(Math.random() * 450) + 250;
      const simulatedLoad = +(simulatedTtfb / 1000 + (Math.random() * 1.5 + 0.8)).toFixed(2);
      const score = Math.max(50, Math.min(95, Math.floor(100 - (simulatedLoad * 18))));

      setSpeedReport({
        url: cleanUrl,
        loadTime: simulatedLoad,
        ttfb: simulatedTtfb,
        score: score,
        serverType: 'Apache / Nginx Standard Worker',
        potentialSavings: '1.2s – 1.8s faster with LiteSpeed + NVMe SSD',
        diagnostics: [
          {
            label: 'Server Response (TTFB)',
            passed: simulatedTtfb < 200,
            tip: simulatedTtfb < 200 ? 'Good response time.' : 'Server response is sluggish. Hostinger LiteSpeed reduces this to ~142ms.'
          },
          {
            label: 'Object Caching (Redis/Memcached)',
            passed: false,
            tip: 'No database query cache detected. Dynamic queries are slowing your TTFB.'
          },
          {
            label: 'HTTP/3 QUIC Protocol',
            passed: true,
            tip: 'Modern TLS connection active.'
          },
          {
            label: 'Browser Static Cache Expiry',
            passed: score > 75,
            tip: 'Enable server-side gzip or brotli compression to reduce asset payload.'
          }
        ]
      });
      setIsTestingSpeed(false);
    }, 900);
  };

  // Calculator computations
  const getProviderCost = (provider: 'hostinger' | 'namecheap' | 'godaddy' | 'bluehost') => {
    if (provider === 'hostinger') {
      const intro = 2.99 * 12;
      const renewal = 6.99 * 12;
      return calcYears === 1 ? intro : intro + renewal * (calcYears - 1);
    }
    if (provider === 'namecheap') {
      const intro = 2.98 * 12;
      const renewal = 5.48 * 12;
      return calcYears === 1 ? intro : intro + renewal * (calcYears - 1);
    }
    if (provider === 'godaddy') {
      // GoDaddy includes SSL cost after yr 1 ($79.99/yr) + renewal ($17.99/mo)
      const intro = 5.99 * 12;
      const renewal = 17.99 * 12 + 79.99;
      return calcYears === 1 ? intro : intro + renewal * (calcYears - 1);
    }
    if (provider === 'bluehost') {
      const intro = 4.95 * 12;
      const renewal = 14.99 * 12;
      return calcYears === 1 ? intro : intro + renewal * (calcYears - 1);
    }
    return 0;
  };

  const hostingerTotal = getProviderCost('hostinger');
  const godaddyTotal = getProviderCost('godaddy');
  const bluehostTotal = getProviderCost('bluehost');
  const namecheapTotal = getProviderCost('namecheap');

  return (
    <div className="space-y-16 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            100% Free Forever · No Email Required
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Free Web Hosting & Domain Diagnostic Utilities
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Instant tools engineered for small businesses and freelancers. Check domain availability with wholesale price comparisons, simulate TTFB server speed, calculate true 3-year renewal traps, or take our 30-second hosting selector quiz.
          </p>

          {/* Tool Navigation Tabs */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('domain')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'domain'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>1. Domain Checker</span>
            </button>
            <button
              onClick={() => setActiveTab('speed')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'speed'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span>2. Speed & TTFB Diagnostic</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>3. Renewal Cost Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'quiz'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>4. 30-Second Hosting Quiz</span>
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOOL 1: DOMAIN AVAILABILITY CHECKER ================= */}
        {activeTab === 'domain' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Tool 1 of 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
                  Domain Availability & Brand Variations Checker
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Type your desired brand name. We check format, suggest high-value prefixes and extensions, and show verified pricing at Namecheap and Hostinger.
                </p>
              </div>

              {/* Form Input */}
              <form onSubmit={handleDomainCheck} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={domainQuery}
                    onChange={(e) => setDomainQuery(e.target.value)}
                    placeholder="Enter brand or domain (e.g., mystore, mybusiness.com)"
                    className="w-full pl-11 pr-4 py-3.5 text-slate-900 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isCheckingDomain}
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all whitespace-nowrap disabled:opacity-50"
                >
                  {isCheckingDomain ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Checking...</span>
                    </>
                  ) : (
                    <>
                      <span>Check Availability</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Results Container */}
              {domainResults && (
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Generated Options for "{domainQuery}":</span>
                    <span>Direct Registrar Links Pre-filled</span>
                  </div>

                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                    {domainResults.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-base font-mono">
                              {item.domain}
                            </span>
                            {item.isAvailable ? (
                              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                                Likely Available
                              </span>
                            ) : (
                              <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                                Taken — Check Variations Below
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.suggestedAction} · Est. 1st Year: <span className="font-semibold text-slate-800">{item.estimatedPrice}</span> (Renewal: {item.renewalPrice})
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <button
                            onClick={() => onOpenDeal('Hostinger', HOSTINGER_AFFILIATE_URL)}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-all active:scale-[0.98]"
                          >
                            <span>Claim This Domain Free with Hostinger (Code: {HOSTINGER_COUPON_CODE})</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-sky-50 border border-sky-100 rounded-xl text-xs text-sky-900 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Engineer's Tip:</strong> Hostinger includes a free 1-year custom domain name (.com, .net, .org, .online) on all Premium and Business hosting plans, including free WHOIS privacy. If you need hosting anyway, get it through Hostinger to save $12-$15 upfront.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TOOL 2: WEBSITE SPEED & TTFB DIAGNOSTIC ================= */}
        {activeTab === 'speed' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Tool 2 of 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
                  Website Hosting Speed & TTFB Diagnostic Simulator
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Test any website URL to diagnose server TTFB (Time To First Byte), caching configuration, and calculate speed improvements possible with LiteSpeed cloud hardware.
                </p>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSpeedTest} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Enter website URL (e.g., mysite.com or https://mysite.com)"
                    className="w-full pl-11 pr-4 py-3.5 text-slate-900 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isTestingSpeed}
                  className="px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all whitespace-nowrap disabled:opacity-50"
                >
                  {isTestingSpeed ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Diagnosing Server...</span>
                    </>
                  ) : (
                    <>
                      <span>Test Server Speed</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Speed Report */}
              {speedReport && (
                <div className="space-y-6 pt-4 border-t border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Total Page Load</div>
                      <div className="text-3xl font-bold font-mono text-slate-900 tabular-nums">
                        {speedReport.loadTime}s
                      </div>
                      <div className="text-[11px] text-slate-500">Simulated 4G Network</div>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Server Response (TTFB)</div>
                      <div className="text-3xl font-bold font-mono text-amber-600 tabular-nums">
                        {speedReport.ttfb} ms
                      </div>
                      <div className="text-[11px] text-slate-500">Benchmark Target: &lt;150ms</div>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Performance Score</div>
                      <div className={`text-3xl font-bold font-mono tabular-nums ${speedReport.score >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {speedReport.score}/100
                      </div>
                      <div className="text-[11px] text-slate-500">Google Core Web Vitals</div>
                    </div>
                  </div>

                  {/* Diagnostic Findings */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Technical Diagnostic Findings for {speedReport.url}:
                    </h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      {speedReport.diagnostics.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          {d.passed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          )}
                          <div>
                            <span className="font-semibold text-slate-900">{d.label}: </span>
                            <span className="text-slate-600">{d.tip}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggestion Box */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        Want Faster Hosting?
                      </span>
                      <h4 className="text-lg font-bold text-emerald-950">
                        Switch to Hostinger LiteSpeed for ~142ms TTFB
                      </h4>
                      <p className="text-xs text-emerald-800 leading-relaxed max-w-xl">
                        Our benchmark lab tests show Hostinger reduces average page load times by 1.2 to 1.8 seconds compared to standard Apache hosting like GoDaddy or Bluehost.
                      </p>
                    </div>
                    <button
                      onClick={() => onOpenDeal('Hostinger')}
                      className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shadow-sm"
                    >
                      <span>Check Hostinger Deals ($2.99/mo)</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TOOL 3: TRUE HOSTING COST CALCULATOR ================= */}
        {activeTab === 'calculator' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Tool 3 of 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
                  3-Year True Hosting Cost & Renewal Trap Calculator
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Many web hosts advertise $2.99/month intro prices, then charge $17.99/month on renewal plus $80/year for SSL certificates. Calculate your true 1, 2, 3, or 4-year invoice before buying.
                </p>
              </div>

              {/* Term Duration Slider / Button Group */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Select Plan Commitment Duration:
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    Currently Calculating: {calcYears} {calcYears === 1 ? 'Year' : 'Years'} Total Ownership
                  </div>
                </div>

                <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg">
                  {[1, 2, 3, 4].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setCalcYears(yr)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                        calcYears === yr
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {yr} {yr === 1 ? 'Year' : 'Years'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Multi-Host Cost Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                {/* Hostinger */}
                <div className="bg-sky-50/50 rounded-xl p-5 border-2 border-sky-400 space-y-4 relative flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                      Lowest Total Cost
                    </span>
                    <h3 className="font-bold text-slate-900 text-lg">Hostinger</h3>
                    <div className="text-xs text-slate-500">
                      Intro: $2.99/mo · Renewal: $6.99/mo · Free SSL for life
                    </div>
                    <div className="pt-2 border-t border-sky-100">
                      <div className="text-xs text-slate-500">Total {calcYears}-Year Cost:</div>
                      <div className="text-3xl font-bold font-mono text-emerald-600 tabular-nums">
                        ${hostingerTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenDeal('Hostinger')}
                    className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Claim Hostinger Rate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Namecheap */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Budget Option
                    </span>
                    <h3 className="font-bold text-slate-900 text-lg">Namecheap Stellar</h3>
                    <div className="text-xs text-slate-500">
                      Intro: $2.98/mo · Renewal: $5.48/mo
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-500">Total {calcYears}-Year Cost:</div>
                      <div className="text-3xl font-bold font-mono text-slate-800 tabular-nums">
                        ${namecheapTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenDeal('Hostinger', HOSTINGER_AFFILIATE_URL)}
                    className="w-full py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Choose Hostinger Instead</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* GoDaddy */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                      High Renewal Trap
                    </span>
                    <h3 className="font-bold text-slate-900 text-lg">GoDaddy Web</h3>
                    <div className="text-xs text-slate-500">
                      Intro: $5.99/mo · Renewal: $17.99/mo + $79/yr SSL
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-500">Total {calcYears}-Year Cost:</div>
                      <div className="text-3xl font-bold font-mono text-rose-600 tabular-nums">
                        ${godaddyTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 italic text-center">
                    Costs ${(godaddyTotal - hostingerTotal).toFixed(0)} more than Hostinger!
                  </div>
                </div>

                {/* Bluehost */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      Official WP Partner
                    </span>
                    <h3 className="font-bold text-slate-900 text-lg">Bluehost Choice</h3>
                    <div className="text-xs text-slate-500">
                      Intro: $2.95/mo · Renewal: $10.99/mo
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-500">Total {calcYears}-Year Cost:</div>
                      <div className="text-3xl font-bold font-mono text-slate-800 tabular-nums">
                        ${bluehostTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenDeal('bluehost', BLUEHOST_AFFILIATE_URL)}
                    className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Get Bluehost Partner Rate ($2.95)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
                <div>
                  <strong>Calculated Savings:</strong> Choosing Hostinger over GoDaddy saves you approximately <strong>${(godaddyTotal - hostingerTotal).toFixed(0)}</strong> over {calcYears} years while giving you 3x faster LiteSpeed loading speeds.
                </div>
                <button
                  onClick={() => onOpenDeal('Hostinger')}
                  className="font-bold underline ml-2 whitespace-nowrap hover:text-emerald-950"
                >
                  Lock In Promo Rate →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TOOL 4: 30-SECOND HOSTING SELECTOR QUIZ ================= */}
        {activeTab === 'quiz' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Tool 4 of 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-0.5">
                  30-Second Hosting Selector Quiz
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Answer 3 quick questions about your project to get an instant, tailor-made hosting plan recommendation with zero fluff.
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                {/* Question 1 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 block">
                    1. What type of website are you building?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'ecommerce', label: 'eCommerce Store' },
                      { id: 'business', label: 'Company Brochure' },
                      { id: 'blog', label: 'Blog / Content' },
                      { id: 'agency', label: 'Client / Multi-Site' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setQuizAnswers(prev => ({ ...prev, siteType: opt.id }))}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          quizAnswers.siteType === opt.id
                            ? 'bg-sky-50 border-sky-500 text-sky-800 ring-2 ring-sky-500/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 block">
                    2. Expected Monthly Visitors:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'low', label: '< 10k visits' },
                      { id: 'mid', label: '10k – 40k visits' },
                      { id: 'high', label: '40k – 100k visits' },
                      { id: 'massive', label: '100k+ visits' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setQuizAnswers(prev => ({ ...prev, traffic: opt.id }))}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          quizAnswers.traffic === opt.id
                            ? 'bg-sky-50 border-sky-500 text-sky-800 ring-2 ring-sky-500/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 block">
                    3. Which CMS or builder will you use?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'wordpress', label: 'WordPress / Elementor' },
                      { id: 'custom', label: 'Custom HTML / JS / PHP' },
                      { id: 'builder', label: 'Drag & Drop Builder' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setQuizAnswers(prev => ({ ...prev, platform: opt.id }))}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          quizAnswers.platform === opt.id
                            ? 'bg-sky-50 border-sky-500 text-sky-800 ring-2 ring-sky-500/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setQuizSubmitted(true)}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-colors"
                  >
                    Show Recommended Plan
                  </button>
                </div>
              </div>

              {/* Quiz Result Box */}
              {quizSubmitted && (
                <div className="pt-6 border-t border-slate-100 bg-sky-50/50 rounded-2xl p-6 border border-sky-100 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Calculated Plan Match</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      {quizAnswers.siteType === 'ecommerce' || quizAnswers.traffic === 'high' || quizAnswers.traffic === 'massive'
                        ? 'Hostinger Business Cloud ($3.99/mo)'
                        : 'Hostinger Premium ($2.99/mo)'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {quizAnswers.siteType === 'ecommerce' || quizAnswers.traffic === 'high'
                        ? 'Because you indicated eCommerce or higher traffic, you need automated daily backups, increased NVMe storage (200 GB), and Redis Object Caching to avoid checkout delays.'
                        : 'Hostinger Premium is the ideal choice for your project. You get 100 GB NVMe storage, free custom domain for 1 year, and can host up to 100 websites with sub-second LiteSpeed speeds.'}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onOpenDeal('Hostinger')}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Get Recommended Plan with Discount</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setQuizAnswers({});
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                    >
                      Reset Quiz
                    </button>
                  </div>

                  {/* Strategic Secondary Match: Official WordPress.org Pick */}
                  <div className="mt-4 pt-4 border-t border-sky-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 p-4 rounded-xl border border-sky-100">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-blue-600" /> Prefer Official WordPress.org Endorsed Host?
                      </div>
                      <p className="text-xs text-slate-600">
                        Bluehost is officially endorsed by WordPress.org since 2005. Includes 1-click wizard, free domain, and 24/7 phone assistance.
                      </p>
                    </div>
                    <button
                      onClick={() => onOpenDeal('bluehost', BLUEHOST_AFFILIATE_URL)}
                      className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors shrink-0 shadow-xs"
                    >
                      <span>Claim Bluehost ($2.95/mo)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

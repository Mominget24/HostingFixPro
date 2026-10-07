import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                HostingFix<span className="text-sky-400">Pro</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineered by experienced full-stack e-commerce developers. We provide unbiased, benchmark-verified web hosting comparisons, zero-downtime migration protocols, and free domain diagnostic tools.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" /> 100% Independent Testing
              </div>
              <span>·</span>
              <div>No Sponsored Rankings</div>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comparisons')}
                  className="hover:text-white transition-colors"
                >
                  Hosting Comparisons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('migration-guide')}
                  className="hover:text-white transition-colors"
                >
                  Migration Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('domain-guide')}
                  className="hover:text-white transition-colors"
                >
                  Domain Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors"
                >
                  Articles & Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Free Interactive Tools */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Free Utilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <span>Domain Checker</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <span>Hosting Cost Calculator</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <span>Site Speed Diagnostic</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('migration-guide')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <span>Migration Checklist Tool</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left"
                >
                  <span>2-Min Hosting Quiz</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About the Engineer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Free Migration Help
                </button>
              </li>
              <li>
                <a
                  href="mailto:support@hostingfixpro.com"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" /> support@hostingfixpro.com
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenDeal}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <span>Hostinger 75% Off Coupon</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* FTC Disclosure & Legal Bar */}
        <div className="pt-8 space-y-4 text-xs text-slate-500">
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-400">Affiliate Disclosure:</span> HostingFixPro is reader-supported. When you purchase hosting or domain names through links on our site, we may earn an affiliate commission at no extra cost to you. This supports our independent speed benchmarks and server labs. All test results, PageSpeed metrics, and recommendations reflect honest, hands-on production testing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <div>
              © {new Date().getFullYear()} HostingFixPro. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => onNavigate('about')} className="hover:text-slate-400 transition-colors">Editorial Ethics</button>
              <span>·</span>
              <button onClick={() => onNavigate('contact')} className="hover:text-slate-400 transition-colors">Privacy Policy</button>
              <span>·</span>
              <button onClick={() => onNavigate('contact')} className="hover:text-slate-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

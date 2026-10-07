import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Zap, Copy, Check, Tag } from 'lucide-react';
import { affiliateProviders, copyAffiliateCoupon } from '../config/affiliates';

interface AffiliateStickyBarProps {
  onOpenDeal: (provider?: 'hostinger' | 'namecheap' | 'contabo', customUrl?: string) => void;
}

export const AffiliateStickyBar: React.FC<AffiliateStickyBarProps> = ({ onOpenDeal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  const hostinger = affiliateProviders.hostinger;

  useEffect(() => {
    // Check if user previously dismissed in this session
    const dismissed = sessionStorage.getItem('hfp_sticky_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show after slight delay or scroll to be non-intrusive
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('hfp_sticky_dismissed', 'true');
  };

  const handleCopyCode = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hostinger.couponCode) {
      await copyAffiliateCoupon(hostinger.couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-700/80 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5"
      role="region"
      aria-label="Exclusive Hosting Deal Announcement"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Deal text & highlights */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/30">
            <Zap className="w-4 h-4 text-amber-300" />
          </div>

          <div className="truncate">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight truncate">
                Hostinger Exclusive Partner Deal
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                Up to 75% Off + 3 Months Free
              </span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300 flex items-center gap-2 truncate">
              <span>Starts at $2.99/mo with Free Domain</span>
              <span className="hidden sm:inline text-slate-500">·</span>
              <span className="hidden sm:inline text-slate-400">Extra savings with code:</span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 font-mono font-bold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700"
                title="Click to copy coupon code"
              >
                <Tag className="w-3 h-3 text-amber-400" />
                <span>{hostinger.couponCode}</span>
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Action Button & Dismiss */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onOpenDeal('hostinger', hostinger.affiliateUrl)}
            className="px-3.5 sm:px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all whitespace-nowrap active:scale-[0.98]"
          >
            <span>Get Exclusive Hosting Deal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleDismiss}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Dismiss sticky offer bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

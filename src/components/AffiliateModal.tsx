import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, ShieldCheck, Zap, Tag } from 'lucide-react';
import { affiliateProviders, copyAffiliateCoupon } from '../config/affiliates';

interface AffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
  provider?: 'hostinger' | 'namecheap' | 'contabo' | 'Hostinger' | 'Namecheap';
  customUrl?: string;
}

export const AffiliateModal: React.FC<AffiliateModalProps> = ({
  isOpen,
  onClose,
  provider = 'hostinger',
  customUrl,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const normalizedProviderKey = (provider?.toLowerCase() || 'hostinger') as keyof typeof affiliateProviders;
  const providerData = affiliateProviders[normalizedProviderKey] || affiliateProviders.hostinger;

  const coupon = providerData.couponCode || 'XV5MARCWR0H8';

  const handleCopy = async () => {
    await copyAffiliateCoupon(coupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const targetUrl = customUrl || providerData.affiliateUrl;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header accent strip */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-base font-display">
              Verified {providerData.name} Partner Deal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Limited-Time Developer Discount
            </span>
            <h4 className="text-xl font-bold text-slate-900 mt-1">
              {providerData.discountText}
            </h4>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              {normalizedProviderKey === 'hostinger' 
                ? 'Activating the highest verified discount tier for Hostinger LiteSpeed Cloud & WordPress hosting plans.'
                : normalizedProviderKey === 'contabo'
                ? 'High-performance German Cloud VPS with 8 GB RAM and dedicated resources.'
                : 'Register your custom domain with free lifetime WHOIS Privacy protection.'}
            </p>
          </div>

          {/* Exclusive Coupon Code Box */}
          {providerData.couponCode && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Tag className="w-3.5 h-3.5 text-sky-600" /> Verified Partner Coupon Code:
                </div>
                <div className="text-lg font-mono font-bold text-slate-900 tracking-wider mt-0.5">
                  {coupon}
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 transition-colors shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Included Features List */}
          <div className="space-y-2 text-xs text-slate-600">
            {providerData.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-center flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
            >
              <span>Continue to {providerData.name} with Deal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 text-center py-1 transition-colors"
            >
              Back to HostingFixPro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

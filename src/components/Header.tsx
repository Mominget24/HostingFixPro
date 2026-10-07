import React, { useState } from 'react';
import { PageId } from '../types';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDeal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenDeal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'reviews', label: 'Honest Review' },
    { id: 'comparisons', label: 'Comparisons' },
    { id: 'tools', label: 'Free Tools' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 text-sky-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> Verified Benchmark Lab:
        </span>
        <span className="text-slate-300">
          Q1 2026 Hostinger Special Offer — Up to 75% Off + 3 Months Free & Lifetime Free SSL.
        </span>
        <button 
          onClick={onOpenDeal}
          className="text-white underline underline-offset-2 hover:text-sky-300 font-medium ml-1 transition-colors"
        >
          Claim Deal
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold tracking-tight text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-1.5 font-display"
          >
            <span>HostingFix<span className="text-sky-600">Pro</span></span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 relative ${
                  currentPage === item.id
                    ? 'text-sky-600 font-semibold'
                    : 'hover:text-slate-900'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDeal}
              className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Check Hostinger Deals</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                currentPage === item.id
                  ? 'bg-sky-50 text-sky-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                onOpenDeal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-center font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-1.5"
            >
              <span>View Today's Best Hosting Deals</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

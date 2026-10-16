import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AffiliateModal } from './components/AffiliateModal';
import { AffiliateStickyBar } from './components/AffiliateStickyBar';
import { HomePage } from './components/pages/HomePage';
import { ComparisonsPage } from './components/pages/ComparisonsPage';
import { MigrationGuidePage } from './components/pages/MigrationGuidePage';
import { ToolsPage } from './components/pages/ToolsPage';
import { DomainGuidePage } from './components/pages/DomainGuidePage';
import { BlogPage } from './components/pages/BlogPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { TutorialsPage } from './components/pages/TutorialsPage';
import { HonestReviewPage } from './components/pages/HonestReviewPage';
import { UseCasesPage } from './components/pages/UseCasesPage';
import { HostingerVsGoDaddyPage } from './components/pages/HostingerVsGoDaddyPage';
import { affiliateProviders, trackAffiliateClick } from './config/affiliates';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    provider?: 'hostinger' | 'bluehost' | 'namecheap' | 'contabo' | string;
    customUrl?: string;
  }>({
    isOpen: false,
    provider: 'hostinger',
    customUrl: affiliateProviders.hostinger.affiliateUrl
  });

  // Sync hash routing on initial load and hash change
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '');
      const hash = (rawHash === 'honest-reviews' ? 'reviews' : rawHash) as PageId;
      const validPages: PageId[] = [
        'home', 
        'tutorials',
        'reviews',
        'use-cases',
        'comparisons', 
        'hostinger-vs-godaddy',
        'migration-guide', 
        'tools', 
        'domain-guide', 
        'blog', 
        'about', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageId | 'honest-reviews') => {
    const targetPage: PageId = page === 'honest-reviews' ? 'reviews' : page;
    setCurrentPage(targetPage);
    window.location.hash = targetPage === 'home' ? '' : targetPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDeal = (
    provider: 'hostinger' | 'bluehost' | 'namecheap' | 'contabo' | string = 'hostinger', 
    customUrl?: string
  ) => {
    const norm = (provider?.toLowerCase() || 'hostinger');
    const matchedProvider = affiliateProviders[norm] || affiliateProviders.hostinger;
    const targetUrl = customUrl || matchedProvider.affiliateUrl;
    trackAffiliateClick(norm, currentPage, targetUrl);

    setModalState({
      isOpen: true,
      provider: norm,
      customUrl: targetUrl
    });
  };

  const handleCloseDeal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white pb-14 sm:pb-16">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDeal={() => handleOpenDeal('hostinger')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'tutorials' && (
          <TutorialsPage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'reviews' && (
          <HonestReviewPage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'use-cases' && (
          <UseCasesPage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'comparisons' && (
          <ComparisonsPage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'hostinger-vs-godaddy' && (
          <HostingerVsGoDaddyPage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'migration-guide' && (
          <MigrationGuidePage 
            onNavigate={handleNavigate} 
            onOpenDeal={() => handleOpenDeal('hostinger')} 
          />
        )}
        {currentPage === 'tools' && (
          <ToolsPage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'domain-guide' && (
          <DomainGuidePage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'blog' && (
          <BlogPage 
            onNavigate={handleNavigate} 
            onOpenDeal={handleOpenDeal} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenDeal={() => handleOpenDeal('hostinger')} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
            onOpenDeal={() => handleOpenDeal('hostinger')} 
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDeal={handleOpenDeal}
      />

      {/* Requirement 01: Affiliate Sticky Bottom Bar */}
      <AffiliateStickyBar onOpenDeal={handleOpenDeal} />

      {/* Verified Affiliate Modal */}
      <AffiliateModal
        isOpen={modalState.isOpen}
        onClose={handleCloseDeal}
        provider={modalState.provider}
        customUrl={modalState.customUrl}
      />
    </div>
  );
}

export type PageId = 
  | 'home' 
  | 'tutorials'
  | 'reviews'
  | 'use-cases'
  | 'comparisons' 
  | 'hostinger-vs-godaddy'
  | 'migration-guide' 
  | 'tools' 
  | 'domain-guide' 
  | 'blog' 
  | 'about' 
  | 'contact';

export interface HostComparison {
  id: string;
  name: string;
  rivalName: string;
  tagline: string;
  winner: string;
  winnerReason: string;
  speedScore: number;
  rivalSpeedScore: number;
  ttfbMs: number;
  rivalTtfbMs: number;
  pricePerMo: string;
  rivalPricePerMo: string;
  renewalPerMo: string;
  rivalRenewalPerMo: string;
  bestFor: string;
  rivalBestFor: string;
  serverType: string;
  rivalServerType: string;
  freeDomain: boolean;
  rivalFreeDomain: boolean;
  freeSsl: boolean;
  rivalFreeSsl: boolean;
  hostingerAffiliateUrl: string;
  rivalAffiliateUrl: string;
  summary: string;
  pros: string[];
  cons: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Review' | 'Comparison' | 'Tutorial' | 'Performance' | 'Deals';
  readTime: string;
  publishedDate: string;
  excerpt: string;
  keyTakeaway: string;
  content: string[];
  couponCode?: string;
  recommendedHost: string;
  affiliateUrl: string;
}

export interface MigrationStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  commandSnippet?: string;
  keyTips: string[];
  warning?: string;
}

export interface DomainCheckResult {
  domain: string;
  tld: string;
  isAvailable: boolean;
  suggestedAction: string;
  estimatedPrice: string;
  renewalPrice: string;
  affiliateProvider: 'Namecheap' | 'Hostinger';
  affiliateUrl: string;
}

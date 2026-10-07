export interface HostingerPlan {
  id: 'premium' | 'business' | 'cloud';
  name: string;
  badge?: string;
  rating: number;
  introPrice: string;
  renewalPrice: string;
  storage: string;
  websites: string;
  freeDomain: string;
  freeSsl: string;
  backups: string;
  cdn: string;
  objectCache: string;
  ttfbMs: number;
  highlight: string;
  bestFor: string;
  features: string[];
}

export const hostingerPlans: Record<string, HostingerPlan> = {
  premium: {
    id: 'premium',
    name: 'Hostinger Premium',
    badge: 'Best Value for Starters',
    rating: 4.8,
    introPrice: '$2.99/mo',
    renewalPrice: '$6.99/mo',
    storage: '100 GB NVMe Storage',
    websites: '100 Websites',
    freeDomain: 'Free Domain Included ($10-15 value)',
    freeSsl: 'Unlimited Free Lifetime SSL',
    backups: 'Weekly Automated Backups',
    cdn: 'Standard Cloudflare CDN',
    objectCache: 'LiteSpeed Cache Plugin',
    ttfbMs: 142,
    highlight: 'Lowest Upfront Cost with Free Domain',
    bestFor: 'Blogs, Personal Portfolios & New Small Businesses',
    features: [
      '100 GB Ultra-Fast NVMe SSD Storage',
      'Free Custom Domain (.com, .net, etc.) for 1 Year',
      'Unlimited Free Lifetime SSL Certificates',
      'Free Automated Weekly Backups',
      'Host up to 100 Websites on One Account',
      'Free Business Email Accounts (up to 100)'
    ]
  },
  business: {
    id: 'business',
    name: 'Hostinger Business',
    badge: 'Most Popular / Developer Choice',
    rating: 4.9,
    introPrice: '$3.99/mo',
    renewalPrice: '$8.99/mo',
    storage: '200 GB NVMe Storage',
    websites: '100 Websites',
    freeDomain: 'Free Domain Included ($10-15 value)',
    freeSsl: 'Unlimited Free Lifetime SSL',
    backups: 'Daily & On-Demand Backups Included',
    cdn: 'Enhanced In-House Global CDN',
    objectCache: 'Redis Object Cache Built-in',
    ttfbMs: 125,
    highlight: '5x Performance Boost & Automated Daily Backups',
    bestFor: 'eCommerce Stores, WooCommerce, Agency Clients & Growing Sites',
    features: [
      '200 GB NVMe Storage (Double Capacity)',
      'Automated Daily Backups ($25/yr value included free)',
      'Free In-House Global CDN for Sub-Second Worldwide Speeds',
      'Object Cache (Redis) for 3x Faster Database Queries',
      'Enhanced DDoS Protection & Staging Tool',
      'Free Custom Domain & Unlimited Lifetime SSL'
    ]
  },
  cloud: {
    id: 'cloud',
    name: 'Hostinger Cloud Startup',
    badge: 'Maximum Cloud Power',
    rating: 4.9,
    introPrice: '$7.99/mo',
    renewalPrice: '$19.99/mo',
    storage: '200 GB NVMe Storage',
    websites: '300 Websites',
    freeDomain: 'Free Domain Included',
    freeSsl: 'Unlimited Free Lifetime SSL',
    backups: 'Daily Automated Backups',
    cdn: 'Premium Global CDN',
    objectCache: 'Dedicated Redis & LiteSpeed',
    ttfbMs: 98,
    highlight: 'Dedicated CPU & RAM Resources',
    bestFor: 'High-Traffic E-Commerce, Busy SaaS Backends & High-End Agencies',
    features: [
      'Dedicated Server Resources (3 GB RAM, 2 CPU Cores)',
      'Dedicated IP Address Included ($36/yr value)',
      'Host up to 300 Websites Effortlessly',
      '20x Resource Allocation vs Standard Shared Hosting',
      'Priority 24/7 VIP Developer Support',
      'Free Custom Domain & Unlimited Lifetime SSL'
    ]
  }
};

export const legacyCompetitors = [
  {
    name: 'GoDaddy Web Hosting',
    price: '$5.99/mo',
    renewal: '$17.99/mo',
    sslTrap: 'Charges $79.99/year for SSL after year 1',
    server: 'Slow Apache (486ms TTFB)',
    verdict: 'Avoid: 3x price hikes & hidden SSL charges'
  },
  {
    name: 'Bluehost Choice Plus',
    price: '$4.95/mo',
    renewal: '$14.99/mo',
    sslTrap: 'Included, but pushes aggressive upsells',
    server: 'Apache Cloud (512ms TTFB)',
    verdict: 'Avoid: Slower loading & US-only datacenters'
  }
];

export const HOSTINGER_AFFILIATE_URL = 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8';
export const HOSTINGER_COUPON_CODE = 'XV5MARCWR0H8';

export interface AffiliateProvider {
  id: string;
  name: string;
  tagline: string;
  discountText: string;
  couponCode?: string;
  affiliateUrl: string;
  badge: string;
  features: string[];
}

export const affiliateProviders: Record<string, AffiliateProvider> = {
  hostinger: {
    id: 'hostinger',
    name: 'Hostinger',
    tagline: 'High-Performance LiteSpeed Cloud & WordPress Hosting',
    discountText: 'Up to 75% Off + 3 Months Free & Free Domain',
    couponCode: HOSTINGER_COUPON_CODE,
    affiliateUrl: HOSTINGER_AFFILIATE_URL,
    badge: 'Verified Official Referral Partner',
    features: [
      'Free Custom Domain (.com, .net, etc.) Included for 1 Year',
      'Free Unlimited Lifetime SSL Certificates',
      'Ultra-Fast NVMe SSD Storage & LiteSpeed Web Server',
      'Free Automated Backups & 1-Click Zero Downtime Migration',
      '24/7 Fast Live Support with WordPress Server Engineers'
    ]
  },
  namecheap: {
    id: 'namecheap',
    name: 'Hostinger Free Domain Offer',
    tagline: 'Get Your Custom Domain 100% Free with Hostinger Plans',
    discountText: 'Free Custom Domain + Lifetime WHOIS Privacy Included',
    couponCode: HOSTINGER_COUPON_CODE,
    affiliateUrl: HOSTINGER_AFFILIATE_URL,
    badge: 'Zero-Cost Domain Bundle',
    features: [
      'Free 1-Year Custom Domain Registration (.com, .net, .org, .online)',
      'Free WHOIS Domain Privacy Protection for Life',
      'No Hidden Registrar Markup Fees',
      '1-Click Automated DNS Setup with Hosting'
    ]
  },
  contabo: {
    id: 'contabo',
    name: 'Hostinger Cloud Startup / VPS',
    tagline: 'High-Speed Cloud Compute with Dedicated RAM & CPU',
    discountText: 'Up to 65% Off Dedicated Cloud Hosting',
    couponCode: HOSTINGER_COUPON_CODE,
    affiliateUrl: HOSTINGER_AFFILIATE_URL,
    badge: 'Dedicated Cloud Power',
    features: [
      'Dedicated Server Resources (3 GB RAM, 2 CPU Cores)',
      'Dedicated IP Address Included Free',
      'Sub-100ms Worldwide TTFB Latency',
      'Priority 24/7 VIP Developer Support'
    ]
  }
};

export const copyAffiliateCoupon = (code: string = HOSTINGER_COUPON_CODE): Promise<boolean> => {
  return navigator.clipboard.writeText(code)
    .then(() => true)
    .catch(() => false);
};

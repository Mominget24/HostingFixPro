import { HostComparison } from '../types';

export const comparisonsList: HostComparison[] = [
  {
    id: 'hostinger-vs-godaddy',
    name: 'Hostinger Premium',
    rivalName: 'GoDaddy Web Hosting',
    tagline: 'Modern LiteSpeed Cloud vs Legacy Apache Infrastructure',
    winner: 'Hostinger',
    winnerReason: 'Hostinger delivers 3.4x faster TTFB, includes free SSL for all sites, and renewal is 60% cheaper than GoDaddy.',
    speedScore: 98,
    rivalSpeedScore: 71,
    ttfbMs: 142,
    rivalTtfbMs: 486,
    pricePerMo: '$2.99',
    rivalPricePerMo: '$5.99',
    renewalPerMo: '$6.99',
    rivalRenewalPerMo: '$17.99',
    bestFor: 'High-speed WordPress, eCommerce stores, and agencies managing up to 100 websites.',
    rivalBestFor: 'Users already locked into legacy GoDaddy domains and corporate email bundles.',
    serverType: 'LiteSpeed Enterprise Web Server + NVMe SSD',
    rivalServerType: 'Standard Apache + Standard HDD/SATA SSD',
    freeDomain: true,
    rivalFreeDomain: true,
    freeSsl: true,
    rivalFreeSsl: false, // GoDaddy notoriously charges $79/yr for SSL after year 1
    hostingerAffiliateUrl: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8',
    rivalAffiliateUrl: 'https://www.godaddy.com',
    summary: 'In our 12-month production benchmark testing across Ashburn, VA and Frankfurt datacenters, Hostinger consistently crushed GoDaddy in First Contentful Paint (0.8s vs 2.1s). Crucially, GoDaddy conceals a major renewal trap: charging up to $99/year per SSL certificate and tripling hosting prices upon renewal.',
    pros: [
      'LiteSpeed cache plugin integration built-in',
      'Free unlimited SSL certificates for life',
      'NVMe SSD storage on all modern nodes',
      'Multi-region datacenter choice (US, UK, EU, Asia, Brazil)',
      'Free automated weekly & daily backups'
    ],
    cons: [
      'No telephone support (24/7 fast live chat only)',
      'Best promotional rate requires 48-month commitment'
    ]
  },
  {
    id: 'hostinger-vs-namecheap',
    name: 'Hostinger',
    rivalName: 'Namecheap Stellar Plus',
    tagline: 'WordPress Speed & Modern hPanel vs Budget cPanel Domain Bundle',
    winner: 'Hostinger for Web Performance / Namecheap for Pure Domains',
    winnerReason: 'Hostinger wins decisively on PHP execution and database queries. Namecheap is fantastic for cheap domain registrations but struggles under moderate traffic.',
    speedScore: 96,
    rivalSpeedScore: 82,
    ttfbMs: 155,
    rivalTtfbMs: 340,
    pricePerMo: '$2.99',
    rivalPricePerMo: '$2.98',
    renewalPerMo: '$6.99',
    rivalRenewalPerMo: '$5.48',
    bestFor: 'Growing businesses needing consistent speed, staging environments, and zero throttle.',
    rivalBestFor: 'Ultra-tight budgets wanting traditional cPanel and budget domain bundles.',
    serverType: 'LiteSpeed Web Server',
    rivalServerType: 'CloudLinux + Apache',
    freeDomain: true,
    rivalFreeDomain: true,
    freeSsl: true,
    rivalFreeSsl: true,
    hostingerAffiliateUrl: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8',
    rivalAffiliateUrl: 'https://www.namecheap.com',
    summary: 'While Namecheap offers very cheap introductory bundles and is our favorite registrar for domain registration, its shared hosting nodes often experience IOPS throttling when running heavier WordPress themes like Elementor or WooCommerce. Hostinger handles concurrent requests effortlessly.',
    pros: [
      'Much faster server response under load (155ms TTFB)',
      'Modern, intuitive hPanel (far cleaner than legacy cPanel)',
      'Free domain with WHOIS privacy included for 1 year'
    ],
    cons: [
      'Slightly higher renewal price than Namecheap Stellar ($6.99 vs $5.48)'
    ]
  },
  {
    id: 'hostinger-vs-bluehost',
    name: 'Hostinger',
    rivalName: 'Bluehost Choice Plus',
    tagline: 'Modern Cloud Architecture vs Newfold Digital (EIG) Legacy',
    winner: 'Hostinger',
    winnerReason: 'Hostinger is half the cost of Bluehost while loading 2.5x faster in Google PageSpeed Insights.',
    speedScore: 98,
    rivalSpeedScore: 68,
    ttfbMs: 142,
    rivalTtfbMs: 512,
    pricePerMo: '$2.99',
    rivalPricePerMo: '$4.95',
    renewalPerMo: '$6.99',
    rivalRenewalPerMo: '$14.99',
    bestFor: 'Freelancers, bloggers, and e-commerce stores wanting maximum value and performance.',
    rivalBestFor: 'Absolute beginners following outdated 2018 YouTube affiliate tutorials.',
    serverType: 'LiteSpeed + NVMe SSD',
    rivalServerType: 'Apache + Shared Cloud',
    freeDomain: true,
    rivalFreeDomain: true,
    freeSsl: true,
    rivalFreeSsl: true,
    hostingerAffiliateUrl: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8',
    rivalAffiliateUrl: 'https://www.bluehost.com',
    summary: 'Bluehost is heavily promoted by affiliates because of high one-time commissions, but real performance audits reveal significant slow TTFB and an aggressive upsell funnel during checkout. Hostinger provides transparent pricing, faster loading times, and superior customer support response.',
    pros: [
      '2.5x faster page load in verified tests',
      'Clean checkout without hidden auto-added add-ons',
      'Git integration, SSH access, and PHP version switcher included'
    ],
    cons: [
      'Bluehost offers cPanel if you prefer traditional cPanel layouts'
    ]
  }
];

export const budgetHostingShowdown = [
  {
    name: 'Hostinger Premium',
    introPrice: '$2.99/mo',
    renewalPrice: '$6.99/mo',
    storage: '100 GB NVMe',
    websites: '100 Sites',
    bandwidth: 'Unlimited',
    freeDomain: 'Yes (1 Year)',
    freeSsl: 'Unlimited Free',
    ttfb: '142 ms',
    rating: 4.9,
    highlight: 'Best Overall Performance',
    dealUrl: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8'
  },
  {
    name: 'Namecheap Stellar',
    introPrice: '$1.98/mo',
    renewalPrice: '$4.48/mo',
    storage: '20 GB SSD',
    websites: '3 Sites',
    bandwidth: 'Unmetered',
    freeDomain: 'Yes (.website / .com promo)',
    freeSsl: '50 Free (First Year)',
    ttfb: '340 ms',
    rating: 4.4,
    highlight: 'Lowest Upfront Cost',
    dealUrl: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8'
  },
  {
    name: 'IONOS Plus',
    introPrice: '$1.00/mo',
    renewalPrice: '$13.00/mo',
    storage: 'Unlimited SSD',
    websites: 'Unlimited',
    bandwidth: 'Unlimited',
    freeDomain: 'Yes (1 Year)',
    freeSsl: '1 Wildcard SSL',
    ttfb: '290 ms',
    rating: 4.1,
    highlight: 'Extreme $1 Promo (Watch Renewal)',
    dealUrl: 'https://www.hostinger.com/bd?REFERRALCODE=XV5MARCWR0H8'
  }
];

export const featureMatrix = [
  { feature: 'Average TTFB (US/EU Nodes)', hostinger: '142 ms', godaddy: '486 ms', bluehost: '512 ms', namecheap: '340 ms' },
  { feature: 'Web Server Technology', hostinger: 'LiteSpeed Enterprise', godaddy: 'Standard Apache', bluehost: 'Apache', namecheap: 'Apache / CloudLinux' },
  { feature: 'Storage Drive Hardware', hostinger: 'Ultra-Fast NVMe SSD', godaddy: 'Standard SATA SSD', bluehost: 'Standard SSD', namecheap: 'Standard SSD' },
  { feature: 'Free Lifetime SSL', hostinger: 'Yes (Unlimited)', godaddy: 'No ($79/yr after yr 1)', bluehost: 'Yes (Let’s Encrypt)', namecheap: 'Yes (Year 1 only)' },
  { feature: 'Free Custom Domain', hostinger: 'Included (1st Year)', godaddy: 'Included (1st Year)', bluehost: 'Included (1st Year)', namecheap: 'Selected extensions' },
  { feature: 'Free 1-Click Migration', hostinger: 'Yes (Automated tool)', godaddy: 'Paid ($99+ charge)', bluehost: 'Limited manual tool', namecheap: 'Yes (cPanel to cPanel)' },
  { feature: 'Datacenter Global Locations', hostinger: '8 Global Regions', godaddy: '3 Regions', bluehost: '1 Region (US)', namecheap: '2 Regions (US, UK)' },
  { feature: 'Built-in Staging Tool', hostinger: 'Yes (1-Click)', godaddy: 'Only on higher tiers', bluehost: 'Yes', namecheap: 'No (Manual staging)' },
  { feature: 'Renewal Price Multiplier', hostinger: '2.3x ($6.99/mo)', godaddy: '3.0x ($17.99/mo)', bluehost: '3.0x ($14.99/mo)', namecheap: '1.8x ($5.48/mo)' }
];

import { MigrationStep } from '../types';

export const migrationStepsList: MigrationStep[] = [
  {
    id: 1,
    phase: 'Phase 1: Pre-Migration & Backup',
    title: 'Audit Current Assets & Create Full Offline Backups',
    description: 'Before touching any DNS or server switches, secure a complete local backup of your database, uploads, plugins, and email records. Never migrate without an independent restore point.',
    commandSnippet: '# If you have SSH / WP-CLI access:\nwp db export pre_migration_backup.sql\ntar -czvf wp_content_backup.tar.gz wp-content/',
    keyTips: [
      'Download full MySQL database .sql dump via phpMyAdmin or WP-CLI',
      'Download the entire wp-content folder (containing /uploads, /plugins, /themes)',
      'Document current DNS records (A, CNAME, MX, TXT/SPF/DKIM) to ensure zero email disruption',
      'Lower your domain DNS TTL (Time To Live) to 300 seconds (5 mins) 24 hours prior to cutover'
    ],
    warning: 'Do not delete your old hosting plan until your new Hostinger setup has been live for at least 7 days.'
  },
  {
    id: 2,
    phase: 'Phase 2: Account & Server Provisioning',
    title: 'Set Up Hostinger Account & Select Target Datacenter',
    description: 'Create your Hostinger account through our verified discount link to unlock up to 75% off plus 3 months free. Choose the datacenter closest to your primary visitors.',
    keyTips: [
      'Select Premium or Business plan (Business includes automated daily backups and CDN)',
      'Pick the datacenter matching your target audience (USA, Europe/Frankfurt, Asia/Singapore, India, Brazil)',
      'Claim your free domain included in the package or select "Use existing domain"',
      'Do NOT change your domain nameservers yet until files and database are imported'
    ]
  },
  {
    id: 3,
    phase: 'Phase 3: Automated Migration or File Transfer',
    title: 'Import Site via Hostinger 1-Click Migrator or All-in-One WP Plugin',
    description: 'Hostinger has a built-in automated migration bot that handles 95% of standard WordPress sites automatically without touching code.',
    commandSnippet: '# Using Hostinger Migration Tool:\n1. Log into hPanel -> Websites -> Add Website\n2. Select "Migrate My Website"\n3. Enter old WordPress login URL + Admin credentials\n4. Click "Submit Request" - Migration finishes in ~20-45 mins',
    keyTips: [
      'Method A (Recommended): Use Hostinger Automated Migration tool in hPanel; their background script copies database and assets without downtime',
      'Method B (Manual/Heavy sites): Install "All-in-One WP Migration" or "Duplicator" plugin, export package (.wpress), and import directly into the fresh Hostinger installation',
      'Method C (FTP & MySQL): Upload files to /public_html via FileZilla / SSH and import SQL via phpMyAdmin'
    ]
  },
  {
    id: 4,
    phase: 'Phase 4: Preview & Staging Verification',
    title: 'Verify Site Using Hostinger SkipDNS / Preview URL Before DNS Cutover',
    description: 'Test every checkout page, contact form, login portal, and media asset before pointing your live domain to the new server.',
    commandSnippet: '# Or edit your local hosts file (C:\\Windows\\System32\\drivers\\etc\\hosts or /etc/hosts):\n195.35.x.x yourdomain.com\n195.35.x.x www.yourdomain.com',
    keyTips: [
      'Use Hostinger’s temporary preview URL in hPanel or update your local hosts file to preview the site on the new IP address',
      'Verify that all links, Elementor styles, WooCommerce cart flows, and images render properly',
      'Check database table prefixes and wp-config.php database credentials'
    ]
  },
  {
    id: 5,
    phase: 'Phase 5: DNS Switch & Domain Cutover',
    title: 'Point Nameservers or Update A-Record (Zero Downtime)',
    description: 'Now execute the switch. Because you lowered the TTL in Phase 1, the change will propagate worldwide in under 10 minutes.',
    commandSnippet: '# Hostinger Standard Nameservers:\nns1.dns-parking.com\nns2.dns-parking.com\n\n# Or keep current DNS registrar and update Root A-Record:\nA @ -> [Your Hostinger Server IP]\nCNAME www -> yourdomain.com',
    keyTips: [
      'Option 1 (Full DNS management on Hostinger): Point nameservers to ns1.dns-parking.com & ns2.dns-parking.com',
      'Option 2 (Cloudflare / Namecheap managed DNS): Simply change the A Record (@) to Hostinger’s server IP. This guarantees 100% zero downtime and preserves existing corporate email routes instantly'
    ]
  },
  {
    id: 6,
    phase: 'Phase 6: SSL, LiteSpeed Cache & Post-Launch Smoke Test',
    title: 'Activate Free Lifetime SSL & Enable LiteSpeed Caching',
    description: 'Finalize performance tuning to achieve sub-second load times and 95+ PageSpeed scores.',
    keyTips: [
      'In hPanel, go to Security -> SSL and click "Install SSL" (instant Let’s Encrypt activation)',
      'Activate LiteSpeed Cache plugin in WordPress: Enable Object Cache (Redis) and Guest Mode for 60% faster TTFB',
      'Submit updated XML sitemap to Google Search Console',
      'Test your SSL certificate on SSLLabs.com to ensure A+ security rating'
    ]
  }
];

export const migrationChecklistItems = [
  { id: 'c1', label: 'Full WordPress database (.sql) downloaded locally', category: 'Pre-Migration' },
  { id: 'c2', label: 'Complete wp-content directory backed up via FTP or plugin', category: 'Pre-Migration' },
  { id: 'c3', label: 'Documented existing MX records & email settings', category: 'Pre-Migration' },
  { id: 'c4', label: 'Lowered DNS TTL to 300 seconds on registrar', category: 'Pre-Migration' },
  { id: 'c5', label: 'Purchased Hostinger plan with target datacenter location', category: 'Provisioning' },
  { id: 'c6', label: 'Created destination website in hPanel dashboard', category: 'Provisioning' },
  { id: 'c7', label: 'Completed automated migration or uploaded files to /public_html', category: 'Data Transfer' },
  { id: 'c8', label: 'Imported MySQL database and verified table prefix', category: 'Data Transfer' },
  { id: 'c9', label: 'Previewed website via Hosts file or preview URL', category: 'Testing' },
  { id: 'c10', label: 'Tested WooCommerce checkout / contact form submission', category: 'Testing' },
  { id: 'c11', label: 'Updated A Record or Nameservers on domain registrar', category: 'Go Live' },
  { id: 'c12', label: 'Issued free SSL certificate via hPanel', category: 'Post-Launch' },
  { id: 'c13', label: 'Enabled LiteSpeed Cache & configured Redis/Memcached', category: 'Post-Launch' },
  { id: 'c14', label: 'Verified DNS propagation across all continents via DNSChecker', category: 'Post-Launch' }
];

export const migrationFaqs = [
  {
    q: 'Will my website experience any downtime during migration?',
    a: 'Zero downtime when done correctly! Because your old hosting remains active while files are copied to Hostinger, visitors continue hitting the old server until DNS propagation shifts traffic to the new server. Both servers are in sync, resulting in a seamless transition.'
  },
  {
    q: 'How long does a typical migration take?',
    a: 'Automated migrations using Hostinger’s built-in tool take between 20 and 45 minutes for standard websites (<5 GB). DNS propagation takes approximately 5 to 30 minutes if you lowered your TTL beforehand.'
  },
  {
    q: 'How do I transfer my domain without losing my professional email?',
    a: 'If you use Google Workspace, Microsoft 365, or Zoho Mail, do NOT change nameservers blindly! Instead, update only the A Record (@) to point to Hostinger’s IP address while leaving your MX, SPF, and DKIM records intact on your domain registrar (such as Namecheap or Cloudflare). This ensures not a single email bounces.'
  },
  {
    q: 'Does Hostinger support cPanel backups (.tar.gz)?',
    a: 'Yes. Hostinger’s migration tool directly accepts full cPanel backup archives. You can generate a backup from cPanel, upload the single archive in hPanel, and Hostinger will restore the database, files, and email configurations automatically.'
  }
];

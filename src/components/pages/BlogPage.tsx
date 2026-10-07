import React, { useState } from 'react';
import { PageId, BlogPost } from '../../types';
import { blogArticles } from '../../data/blogData';
import { BLUEHOST_AFFILIATE_URL, HOSTINGER_AFFILIATE_URL } from '../../config/affiliates';
import { 
  Search, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Tag, 
  Check, 
  Copy, 
  X, 
  Share2, 
  BookmarkCheck,
  Award
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: (provider?: any, customUrl?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = ['All', 'Review', 'Comparison', 'Tutorial', 'Performance', 'Deals'];

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Developer Knowledge Base & Benchmarks
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Hosting & Domain Guides for Small Businesses
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            In-depth engineering reviews, real TTFB performance benchmarks, migration walkthroughs, and discount strategies based on 5+ years of live eCommerce production management.
          </p>

          {/* Search bar & filter tabs */}
          <div className="pt-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800 rounded-xl border border-slate-700/80">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                {/* Zero-Pill Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-sky-700 font-semibold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 
                  onClick={() => setActiveArticle(post)}
                  className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer leading-snug font-display"
                >
                  {post.title}
                </h2>

                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Key takeaway callout box */}
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 space-y-1">
                  <span className="font-semibold text-slate-900 block">Key Takeaway:</span>
                  <p className="line-clamp-2 text-slate-600">{post.keyTakeaway}</p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {post.couponCode && (
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    Code: {post.couponCode}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-900">No articles match your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or select "All" categories.</p>
          </div>
        )}
      </section>

      {/* FULL ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-sky-600">{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display leading-tight">
                  {activeArticle.title}
                </h1>
                <div className="text-xs text-slate-500">
                  Published {activeArticle.publishedDate} by Senior Web Infrastructure Engineer
                </div>
              </div>

              {/* Key takeaway highlight box */}
              <div className="p-4 bg-sky-50 border border-sky-100 rounded-xl space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
                  <BookmarkCheck className="w-4 h-4 text-sky-600" /> Executive Takeaway
                </div>
                <p className="text-xs sm:text-sm text-sky-950 font-medium leading-relaxed">
                  {activeArticle.keyTakeaway}
                </p>
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Recommended Deal Action Box inside article */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Recommended Hardware
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">
                      {activeArticle.recommendedHost}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Up to 75% Off + 3 Months Free & Lifetime Free SSL.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveArticle(null);
                        onOpenDeal('Hostinger', activeArticle.affiliateUrl);
                      }}
                      className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm"
                    >
                      <span>Claim Hostinger Deal</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {activeArticle.slug === 'hostinger-vs-bluehost-speed' && (
                      <button
                        onClick={() => {
                          setActiveArticle(null);
                          onOpenDeal('bluehost', BLUEHOST_AFFILIATE_URL);
                        }}
                        className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm"
                      >
                        <span>Claim Bluehost Deal ($2.95)</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {activeArticle.couponCode && (
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Coupon code at checkout:</span>
                    <button
                      onClick={() => handleCopyCode(activeArticle.couponCode!)}
                      className="font-mono font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1"
                    >
                      <span>{activeArticle.couponCode}</span>
                      {copiedCode === activeArticle.couponCode ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

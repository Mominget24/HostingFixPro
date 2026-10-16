import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDeal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenDeal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    serviceType: 'migration-help',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant form submission & state save
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Developer Direct Contact & Consultation
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Get in Touch · Free Hosting Setup & Migration Help
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Need guidance migrating away from an expensive host? Have questions about DNS propagation or LiteSpeed cache? Send a direct message and I’ll help you configure it properly.
          </p>
        </div>
      </section>

      {/* FORM & SIDEBAR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Message Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name}</strong>. I review inquiries personally and will respond to <code>{formData.email}</code> within 12–24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        websiteUrl: '',
                        serviceType: 'migration-help',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-sky-600 hover:text-sky-700 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    Send a Direct Message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the details below. We never share or spam your email address.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Current Website URL (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="e.g. mycurrentsite.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      How Can I Help You?
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                    >
                      <option value="migration-help">Free Migration Assistance</option>
                      <option value="hosting-recommendation">Hosting Plan Recommendation</option>
                      <option value="ecommerce-setup">Custom Web & eCommerce Setup</option>
                      <option value="general-question">General Question / Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Message / Current Hosting Situation *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your current site, host, or the issue you're trying to solve..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-xs"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Direct Communications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                I check all technical inquiries personally. For immediate business email:
              </p>
              <div className="pt-2 space-y-3 text-sm">
                <a
                  href="mailto:support@hostmarc.com"
                  className="flex items-center gap-2.5 text-sky-700 hover:text-sky-800 font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@hostmarc.com</span>
                </a>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Response Time: Typically within 12–24 hours</span>
                </div>
              </div>
            </div>

            {/* Freelance & Custom Setup Pipeline Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                Available for Client Engagements
              </span>
              <h4 className="text-base font-bold text-slate-900">
                Custom Web Development & Production Deployments
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In addition to free migration guidance, I accept a limited number of freelance web development projects each month: custom WooCommerce stores, Next.js applications, speed optimizations, and database scaling.
              </p>
            </div>

            {/* Immediate Hostinger Deal Reminder */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-md">
              <h4 className="text-base font-bold">
                Ready to setup your Hostinger account now?
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Activate the 75% discount + 3 bonus months and start your zero-downtime migration right away.
              </p>
              <button
                onClick={onOpenDeal}
                className="w-full py-2.5 px-4 bg-white text-emerald-900 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-50 transition-colors shadow-xs"
              >
                <span>Claim Hostinger Partner Deal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

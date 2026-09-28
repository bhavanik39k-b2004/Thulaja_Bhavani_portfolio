import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection({ onViewResume, showToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`${fieldName} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.');
      return;
    }

    setIsSending(true);

    // Prepare mailto link with encoded subject and body as seamless direct dispatch
    const subjectEncoded = encodeURIComponent(`Portfolio Inquiry from ${formData.name}: ${formData.subject || 'Opportunity'}`);
    const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      showToast('Opening default email client...');
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setSentSuccess(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-10 border-t border-slate-800/60 light:border-slate-200">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600">
          <Mail className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xs text-slate-400 light:text-slate-500">
            Open for Data Science, ML & Software Engineering opportunities
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Contact Details & Actions */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 light:bg-emerald-50 light:text-emerald-700 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available Immediately</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
              Let's Connect & Collaborate
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              I am actively seeking internships and graduate entry-level roles across Data Science, Business Analytics, Machine Learning, and Software Development. Reach out directly via email or phone.
            </p>
          </div>

          {/* Contact Methods Cards */}
          <div className="space-y-3 pt-2">
            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    Email Address
                  </div>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-xs sm:text-sm font-bold text-slate-200 light:text-slate-800 hover:text-indigo-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 ml-2">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                  className="p-2 rounded-lg bg-slate-800/60 light:bg-slate-200 text-slate-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors"
                  title="Open Mail Client"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mobile Card */}
            <div className="p-4 rounded-2xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 light:bg-emerald-50 light:text-emerald-600 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    Phone / WhatsApp
                  </div>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`} 
                    className="text-xs sm:text-sm font-bold text-slate-200 light:text-slate-800 hover:text-emerald-400 transition-colors truncate block font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 ml-2">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                  className="p-2 rounded-lg bg-slate-800/60 light:bg-slate-200 text-slate-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'Phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white transition-colors"
                  title="Call Directly"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 light:bg-cyan-50 light:text-cyan-600 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                  Location
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 light:text-slate-800">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-600/20 hover:scale-[1.02] transition-transform"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-bold transition-all hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Quick Message Dispatch Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-100 light:text-slate-900">
                Send a Direct Message
              </h3>
              <span className="text-xs text-slate-400 light:text-slate-500">
                Prompt Response
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                    Your Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter or Hiring Manager"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-100 light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                    Your Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-100 light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                  Subject / Opportunity Type
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Data Science Intern / Graduate Engineer Interview"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-100 light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Bhavani, we reviewed your Data Science portfolio and would like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-100 light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Dispatching...</span>
                    </>
                  ) : sentSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Opening Email Client...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onViewResume}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 text-slate-300 light:text-slate-700 text-xs font-semibold border border-slate-700/60 light:border-slate-200 transition-all"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  <span>Download Resume PDF</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  FileBadge, 
  Calendar, 
  Building2, 
  Search, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Filter
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function CertificationsSection() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const years = ['All', '2026', '2025'];

  const filteredCerts = CERTIFICATIONS_DATA.filter((cert) => {
    const matchesYear = selectedYear === 'All' || cert.year === selectedYear;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <section id="certifications" className="py-10 border-t border-slate-800/60 light:border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600">
            <FileBadge className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
              Certifications & Industry Credentials
            </h2>
            <p className="text-xs text-slate-400 light:text-slate-500">
              Verified technical credentials & industry simulation programs from resume
            </p>
          </div>
        </div>

        {/* Year Filter & Search Bar */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <div className="flex items-center bg-slate-900/60 light:bg-slate-100 p-1 rounded-xl border border-slate-800 light:border-slate-200">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === year
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 light:text-slate-600 hover:text-slate-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certs..."
              className="w-36 sm:w-44 pl-8 pr-2.5 py-1.5 rounded-xl text-xs bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCerts.map((cert) => {
          return (
            <div
              key={cert.id}
              className="glass-panel glass-panel-interactive rounded-2xl p-5 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Credential Tag & Year */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 border border-indigo-500/20">
                    {cert.credentialTag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400 light:text-slate-500">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm sm:text-base text-slate-100 light:text-slate-900 group-hover:text-indigo-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="mt-2.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-indigo-400 light:text-indigo-600 font-medium">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 light:text-slate-500">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 light:text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Resume Certified</span>
                </span>
                <span className="text-[10px] text-slate-400 light:text-slate-500 font-mono">
                  {cert.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCerts.length === 0 && (
        <div className="text-center py-12 glass-panel rounded-2xl">
          <p className="text-slate-400 text-sm">No certifications found matching your filters.</p>
        </div>
      )}
    </section>
  );
}

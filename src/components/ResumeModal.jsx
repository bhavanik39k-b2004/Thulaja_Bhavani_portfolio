import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  FileBadge, 
  FolderGit2, 
  Sparkles,
  Info
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  SKILLS_DATA, 
  PROJECTS_DATA, 
  CERTIFICATIONS_DATA, 
  SOFT_SKILLS_DATA 
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, showToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Direct link to the generated resume PDF
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = "Kuruva_Thulaja_Bhavani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Resume PDF downloaded!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel bg-[#0B0F19] light:bg-white rounded-3xl border border-slate-700/80 light:border-slate-300 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-sm font-bold text-slate-100 light:text-slate-900">
              Curriculum Vitae / Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 text-slate-300 light:text-slate-700 text-xs font-semibold transition-all"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition-all"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 light:bg-slate-100 text-slate-400 hover:text-white transition-all ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS-Formatted Clean Printable Resume Sheet */}
        <div className="bg-slate-950/80 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 rounded-2xl p-6 sm:p-10 font-sans text-slate-200 light:text-slate-800 space-y-6 print:bg-white print:text-black print:p-0 print:border-none">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-800 light:border-slate-300 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white light:text-slate-900">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-indigo-400 light:text-indigo-700">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 light:text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 light:text-indigo-700 border-b border-slate-800 light:border-slate-300 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 light:text-indigo-700 border-b border-slate-800 light:border-slate-300 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-slate-100 light:text-slate-900">{edu.institution}</div>
                    <div className="text-slate-300 light:text-slate-700">{edu.degree}</div>
                  </div>
                  <div className="text-left sm:text-right mt-0.5 sm:mt-0 font-medium">
                    <span className="font-mono text-emerald-400 light:text-emerald-700 font-bold">{edu.score}</span>
                    <span className="text-slate-400 light:text-slate-500 text-xs ml-1.5">({edu.period})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 light:text-indigo-700 border-b border-slate-800 light:border-slate-300 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-slate-200 light:text-slate-800">Frontend: </span>
                <span className="text-slate-300 light:text-slate-600">HTML, CSS</span>
              </div>
              <div>
                <span className="font-bold text-slate-200 light:text-slate-800">Backend: </span>
                <span className="text-slate-300 light:text-slate-600">Java, Python, C</span>
              </div>
              <div>
                <span className="font-bold text-slate-200 light:text-slate-800">Database: </span>
                <span className="text-slate-300 light:text-slate-600">MySQL</span>
              </div>
              <div>
                <span className="font-bold text-slate-200 light:text-slate-800">Core Domains: </span>
                <span className="text-slate-300 light:text-slate-600">Machine Learning (Basics), Data Science Fundamentals</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 light:text-indigo-700 border-b border-slate-800 light:border-slate-300 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-100 light:text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-indigo-400 light:text-indigo-700 font-mono text-xs">Technology: {proj.technology}</span>
                  </div>
                  <p className="text-slate-300 light:text-slate-700 leading-relaxed text-xs">
                    {proj.shortDescription}
                  </p>
                  <p className="text-slate-400 light:text-slate-500 text-[11px]">
                    <span className="font-semibold text-slate-300 light:text-slate-700">Highlights: </span>
                    {proj.highlights.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 light:text-indigo-700 border-b border-slate-800 light:border-slate-300 pb-1 mb-3">
              Certifications
            </h2>
            <ul className="space-y-1 text-xs text-slate-300 light:text-slate-700 list-disc list-inside">
              {CERTIFICATIONS_DATA.map((c) => (
                <li key={c.id}>
                  <span className="font-bold text-slate-200 light:text-slate-800">{c.title}</span> — {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 light:text-indigo-700 border-b border-slate-800 light:border-slate-300 pb-1 mb-2">
              Soft Skills
            </h2>
            <p className="text-xs text-slate-300 light:text-slate-700">
              {SOFT_SKILLS_DATA.map(s => s.name).join(' • ')}
            </p>
          </div>

        </div>

        {/* Note on Resume File Location */}
        <div className="mt-4 p-3 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs text-slate-400 light:text-slate-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>PDF location: <code className="text-indigo-300 font-mono">public/assets/resume.pdf</code></span>
          </div>
          <button
            onClick={handleDownload}
            className="text-indigo-400 hover:underline font-semibold"
          >
            Direct Download
          </button>
        </div>

      </div>
    </div>
  );
}

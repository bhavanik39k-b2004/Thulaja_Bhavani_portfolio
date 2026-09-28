import React, { useState } from 'react';
import { 
  Home, 
  User, 
  GraduationCap, 
  Cpu, 
  FolderGit2, 
  FileBadge, 
  Mail, 
  Download, 
  Sun, 
  Moon, 
  MapPin, 
  Phone,
  Sparkles,
  ExternalLink,
  Check,
  Copy
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Sidebar({ activeSection, setActiveSection, darkMode, setDarkMode, onViewResume, showToast }) {
  const [copiedField, setCopiedField] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Certifications', icon: FileBadge },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`${fieldName} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 xl:w-80 h-screen sticky top-0 bg-[#0A0D14]/90 light:bg-white/90 backdrop-blur-xl border-r border-slate-800/80 light:border-slate-200 z-40 p-6 overflow-y-auto">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center pb-6 border-b border-slate-800/60 light:border-slate-200">
        <div className="relative group cursor-pointer" onClick={() => scrollTo('about')}>
          <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-indigo-500/40 light:ring-indigo-600/40 shadow-xl group-hover:ring-indigo-400 transition-all duration-300 transform group-hover:scale-105">
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // Fallback to local image directly if needed
                e.target.onerror = null;
                e.target.src = "/IMG-20260927-WA0004.jpg";
              }}
            />
          </div>
          {/* Status Indicator */}
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-900 p-1 rounded-full ring-4 ring-[#0A0D14] light:ring-white" title="Actively Seeking Opportunities">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute inset-1" />
            <div className="w-3 h-3 rounded-full bg-emerald-300 relative" />
          </div>
        </div>

        <h1 className="mt-4 font-bold text-lg text-slate-100 light:text-slate-900 tracking-tight leading-snug">
          {PERSONAL_INFO.name}
        </h1>
        
        <p className="text-xs font-medium text-indigo-400 light:text-indigo-600 mt-1">
          Data Science & Engineering Student
        </p>

        <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-indigo-500/10 text-indigo-300 light:bg-indigo-50 light:text-indigo-700 border border-indigo-500/20">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          <span>Final-Year B.Tech</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 space-y-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 light:text-slate-400 px-3 mb-2">
          Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group text-left ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/25'
                  : 'text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900 hover:bg-slate-800/50 light:hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                <span>{item.label}</span>
              </div>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Quick Contact & Actions */}
      <div className="pt-4 border-t border-slate-800/60 light:border-slate-200 space-y-3">
        {/* Quick Contact Micro-card */}
        <div className="bg-slate-900/50 light:bg-slate-50 rounded-xl p-3 border border-slate-800/80 light:border-slate-200 text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400 light:text-slate-500">
            <span className="flex items-center gap-1.5 truncate">
              <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </span>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
              className="p-1 hover:text-white transition-colors text-slate-400"
              title="Copy Email"
            >
              {copiedField === 'Email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          <div className="flex items-center justify-between text-slate-400 light:text-slate-500">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{PERSONAL_INFO.phone}</span>
            </span>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
              className="p-1 hover:text-white transition-colors text-slate-400"
              title="Copy Phone"
            >
              {copiedField === 'Phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onViewResume}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 light:text-indigo-700 light:bg-indigo-50 border border-indigo-500/30 transition-all hover:scale-[1.02]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800/60 light:bg-slate-100 hover:bg-slate-700/60 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-200 transition-all"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Home, 
  User, 
  GraduationCap, 
  Cpu, 
  FolderGit2, 
  FileBadge, 
  Mail, 
  Download,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function MobileHeader({ activeSection, setActiveSection, darkMode, setDarkMode, onViewResume }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Certifications', icon: FileBadge },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-[#0A0D14]/95 light:bg-white/95 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Brand / Mini profile */}
        <div className="flex items-center gap-3" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-indigo-500/30">
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/IMG-20260927-WA0004.jpg";
              }}
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-100 light:text-slate-900 leading-none">
              {PERSONAL_INFO.nickname}
            </h1>
            <p className="text-[11px] text-indigo-400 light:text-indigo-600 mt-0.5">
              Data Science & Eng.
            </p>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-800/60 light:bg-slate-100 text-slate-200 light:text-slate-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[60px] bg-[#0A0D14]/98 light:bg-white/98 backdrop-blur-2xl border-b border-slate-800 light:border-slate-200 p-5 shadow-2xl transition-all animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              onViewResume();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-semibold shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>View & Download Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}

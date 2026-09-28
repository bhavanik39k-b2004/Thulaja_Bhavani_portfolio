import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Download, 
  GraduationCap, 
  Award, 
  FolderGit2, 
  FileBadge, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp,
  BrainCircuit,
  Eye
} from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS } from '../data/portfolioData';

export default function HeroSection({ onViewResume }) {
  // Animated counters
  const [counts, setCounts] = useState({
    percentage: 0,
    projects: 0,
    certifications: 0,
  });

  useEffect(() => {
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        percentage: Number((82.5 * ease).toFixed(1)),
        projects: Math.round(2 * ease),
        certifications: Math.round(6 * ease),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-12 overflow-hidden">
      {/* Background glowing ambient orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Greeting, Headline, Intro & CTA */}
        <div className="lg:col-span-8 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-8 xl:p-10 relative overflow-hidden">
          {/* Subtle top decoration badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 light:bg-indigo-50 light:text-indigo-700 border border-indigo-500/25">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Available for Technical Roles & Internships</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-100 light:text-slate-900 leading-tight">
              Hi, I'm <span className="text-gradient-primary">{PERSONAL_INFO.nickname}</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-semibold text-slate-300 light:text-slate-700 mt-2">
              Final-Year B.Tech Data Science & Engineering Student
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 light:bg-white hover:bg-slate-700/80 light:hover:bg-slate-50 text-slate-200 light:text-slate-800 text-sm font-semibold border border-slate-700/60 light:border-slate-200 shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Contact Me</span>
            </button>

            <button
              onClick={onViewResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500/10 light:bg-indigo-50 hover:bg-indigo-500/20 text-indigo-300 light:text-indigo-700 text-sm font-semibold border border-indigo-500/20 transition-all duration-200 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Small Profile Card */}
        <div className="lg:col-span-4 flex flex-col justify-between glass-panel rounded-3xl p-6 relative overflow-hidden group">
          <div className="relative">
            {/* Profile Photo with Glow Ring */}
            <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-indigo-500/30 light:ring-indigo-600/20 shadow-2xl group-hover:ring-indigo-500/60 transition-all duration-500">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/IMG-20260927-WA0004.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>

            <div className="text-center mt-4">
              <h2 className="font-bold text-base text-slate-100 light:text-slate-900">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-xs text-indigo-400 light:text-indigo-600 font-medium mt-0.5">
                {PERSONAL_INFO.institution}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-2.5 pt-4 border-t border-slate-800/60 light:border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-300 light:text-slate-600 px-1">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>Specialization</span>
              </span>
              <span className="font-medium text-slate-200 light:text-slate-800">Data Science & Eng.</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 light:text-slate-600 px-1">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Academic Score</span>
              </span>
              <span className="font-semibold text-emerald-400 light:text-emerald-600">82.5% Aggregate</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 light:text-slate-600 px-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Status</span>
              </span>
              <span className="font-medium text-slate-200 light:text-slate-800">Final Year (Pursuing)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Statistics Area - STRICTLY from resume with subtle counter animation */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: B.Tech Final Year */}
        <div className="glass-panel glass-panel-interactive rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
              Final Year
            </div>
            <div className="text-xs font-medium text-slate-400 light:text-slate-600 mt-0.5">
              B.Tech Data Science
            </div>
          </div>
        </div>

        {/* Stat 2: 82.5% B.Tech Percentage */}
        <div className="glass-panel glass-panel-interactive rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 light:bg-cyan-50 light:text-cyan-600 shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 light:text-cyan-600 tracking-tight font-mono">
              {counts.percentage}%
            </div>
            <div className="text-xs font-medium text-slate-400 light:text-slate-600 mt-0.5">
              B.Tech Aggregate Score
            </div>
          </div>
        </div>

        {/* Stat 3: 2 Mini Projects */}
        <div className="glass-panel glass-panel-interactive rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 light:bg-emerald-50 light:text-emerald-600 shrink-0">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight font-mono">
              {counts.projects} Projects
            </div>
            <div className="text-xs font-medium text-slate-400 light:text-slate-600 mt-0.5">
              Power BI & Web Gallery
            </div>
          </div>
        </div>

        {/* Stat 4: 6 Certifications */}
        <div className="glass-panel glass-panel-interactive rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 light:bg-purple-50 light:text-purple-600 shrink-0">
            <FileBadge className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-purple-400 light:text-purple-600 tracking-tight font-mono">
              {counts.certifications} Credentials
            </div>
            <div className="text-xs font-medium text-slate-400 light:text-slate-600 mt-0.5">
              Technical Certifications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

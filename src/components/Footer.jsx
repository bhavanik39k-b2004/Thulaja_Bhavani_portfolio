import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 py-8 border-t border-slate-800/80 light:border-slate-200 text-center text-xs text-slate-400 light:text-slate-600">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200 light:text-slate-800">
            {PERSONAL_INFO.name}
          </span>
          <span>•</span>
          <span>B.Tech Data Science & Engineering</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400 light:text-slate-500">
          <span>Crafted for technical recruitment & professional showcase</span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 inline" />
        </div>

        <div>
          <span>© {currentYear} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

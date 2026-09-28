import React from 'react';
import { 
  User, 
  Sparkles, 
  Target, 
  BookOpen, 
  LineChart, 
  Brain, 
  Cpu, 
  BarChart3, 
  Code2, 
  Building2,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, INTERESTS_AND_LEARNING } from '../data/portfolioData';

const iconMap = {
  LineChart,
  Brain,
  Cpu,
  BarChart3,
  Code2,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-10 border-t border-slate-800/60 light:border-slate-200">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="text-xs text-slate-400 light:text-slate-500">
            Professional objective, academic background & key interests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Career Objective & Profile Statement */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 light:text-indigo-600">
              <Target className="w-4 h-4" />
              <span>Career Objective & Vision</span>
            </div>

            <p className="text-slate-200 light:text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              "{PERSONAL_INFO.summary}"
            </p>

            <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
              As a dedicated final-year undergraduate in Data Science & Engineering at St. John's College of Engineering and Technology, I have structured my academic journey around quantitative reasoning, data transformation pipelines, and algorithmic fundamentals.
            </p>

            <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
              I am focused on bridging analytical models with actionable, human-centered interfaces—from interactive Power BI dashboards to responsive web systems.
            </p>
          </div>

          {/* Key Foundations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/60 light:border-slate-200">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 light:bg-slate-50 border border-slate-800/70 light:border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-slate-200 light:text-slate-800">Academic Standing</div>
                <div className="text-slate-400 light:text-slate-500 mt-0.5">82.5% B.Tech aggregate in Data Science</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 light:bg-slate-50 border border-slate-800/70 light:border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-slate-200 light:text-slate-800">Applied Practice</div>
                <div className="text-slate-400 light:text-slate-500 mt-0.5">Hands-on in Power BI & Web Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Currently Learning & Core Interests */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 light:text-indigo-600">
                <Compass className="w-4 h-4" />
                <span>Core Focus & Interests</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 light:bg-indigo-50 light:text-indigo-700 font-medium">
                Resume Aligned
              </span>
            </div>

            <div className="space-y-3">
              {INTERESTS_AND_LEARNING.map((item, idx) => {
                const Icon = iconMap[item.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-900/50 light:bg-slate-50 border border-slate-800/70 light:border-slate-200 hover:border-indigo-500/30 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs font-bold text-slate-200 light:text-slate-800">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-slate-400 light:text-slate-500 pl-8 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

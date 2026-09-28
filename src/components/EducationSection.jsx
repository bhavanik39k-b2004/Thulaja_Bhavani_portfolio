import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState(EDUCATION_DATA[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="py-10 border-t border-slate-800/60 light:border-slate-200">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-xs text-slate-400 light:text-slate-500">
            Interactive academic journey & verified milestones
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/20 light:border-indigo-300/40 ml-3 sm:ml-4 space-y-8">
        {EDUCATION_DATA.map((item, idx) => {
          const isExpanded = expandedId === item.id;
          const isCurrent = idx === 0;

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Node Icon */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCurrent
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/20 shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800 light:bg-slate-200 text-slate-400 light:text-slate-600 ring-4 ring-[#0A0D14] light:ring-white group-hover:bg-indigo-500 group-hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              {/* Education Card */}
              <div 
                onClick={() => toggleExpand(item.id)}
                className={`glass-panel rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                  isExpanded 
                    ? 'border-indigo-500/40 shadow-xl shadow-indigo-900/10' 
                    : 'hover:border-slate-700/80 light:hover:border-slate-300'
                }`}
              >
                {/* Card Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-indigo-400 light:text-indigo-600 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 light:bg-emerald-50 light:text-emerald-700 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Pursuing
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-100 light:text-slate-900 mt-1">
                      {item.institution}
                    </h3>

                    <p className="text-sm font-semibold text-slate-300 light:text-slate-700 mt-0.5">
                      {item.degree}
                    </p>
                  </div>

                  {/* Score & Toggle Pill */}
                  <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                    <div className="px-3 py-1.5 rounded-xl bg-indigo-500/10 light:bg-indigo-50 border border-indigo-500/20 text-right">
                      <div className="text-[10px] font-medium text-slate-400 light:text-slate-500 uppercase tracking-wider">
                        {item.scoreType}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-indigo-400 light:text-indigo-600 font-mono">
                        {item.score}
                      </div>
                    </div>

                    <button 
                      className="p-1.5 rounded-lg bg-slate-800/60 light:bg-slate-100 text-slate-400 hover:text-white transition-colors"
                      aria-label="Expand education details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Subtitle Highlight */}
                <p className="mt-3 text-xs sm:text-sm text-slate-400 light:text-slate-600">
                  {item.highlight}
                </p>

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-800/60 light:border-slate-200 animate-in fade-in duration-200">
                    <div className="text-xs font-semibold text-slate-300 light:text-slate-700 mb-2">
                      Key Highlights & Coursework:
                    </div>
                    <ul className="space-y-1.5">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-400 light:text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

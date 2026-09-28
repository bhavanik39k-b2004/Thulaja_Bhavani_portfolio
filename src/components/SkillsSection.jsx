import React, { useState } from 'react';
import { 
  Cpu, 
  FileCode2, 
  Palette, 
  Coffee, 
  Terminal, 
  Database, 
  Brain, 
  LineChart, 
  Lightbulb, 
  Repeat, 
  Users2, 
  FileCheck, 
  MessageSquare,
  Sparkles,
  Layers,
  Search
} from 'lucide-react';
import { 
  SKILL_CATEGORIES, 
  SKILLS_DATA, 
  SOFT_SKILLS_DATA 
} from '../data/portfolioData';

const skillIcons = {
  FileCode2,
  Palette,
  Coffee,
  Terminal,
  Cpu,
  Database,
  Brain,
  LineChart,
};

const softIcons = {
  Lightbulb,
  Repeat,
  Users2,
  FileCheck,
  MessageSquare,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-10 border-t border-slate-800/60 light:border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
              Technical & Core Skills
            </h2>
            <p className="text-xs text-slate-400 light:text-slate-500">
              Categorized technologies, engineering stacks & practical foundations
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-56">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {SKILL_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/50 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/80 light:border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => {
          const IconComponent = skillIcons[skill.icon] || Cpu;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-interactive rounded-2xl p-4 sm:p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-100 light:text-slate-900">
                        {skill.name}
                      </h3>
                      <div className="text-[11px] text-slate-400 light:text-slate-500">
                        {skill.categoryName}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/50 light:border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-800/60 light:bg-slate-200 text-slate-300 light:text-slate-700">
                  {skill.level}
                </span>
                <span className="text-[10px] text-indigo-400/80 light:text-indigo-600 font-medium">
                  Resume Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 glass-panel rounded-2xl">
          <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}"</p>
        </div>
      )}

      {/* Soft Skills Section */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 tracking-tight">
            Soft Skills & Professional Attributes
          </h3>
          <span className="text-xs text-slate-400 light:text-slate-500 ml-2">
            (From Resume)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
          {SOFT_SKILLS_DATA.map((soft, idx) => {
            const SoftIcon = softIcons[soft.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-interactive rounded-2xl p-4 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <SoftIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-100 light:text-slate-900 mb-1.5">
                    {soft.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 light:text-slate-600 leading-relaxed">
                    {soft.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/40 light:border-slate-200">
                  <span className="text-[10px] font-semibold text-emerald-400 light:text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Key Attribute
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

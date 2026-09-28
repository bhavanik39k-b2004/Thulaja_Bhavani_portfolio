import React, { useState } from 'react';
import { 
  FolderGit2, 
  BarChart3, 
  Layout, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  SlidersHorizontal, 
  Eye, 
  DollarSign, 
  TrendingUp, 
  Package, 
  Star, 
  ShoppingCart,
  Info
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-10 border-t border-slate-800/60 light:border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs text-slate-400 light:text-slate-500">
              Interactive analytics and web development implementations
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 light:bg-emerald-50 light:text-emerald-700 border border-emerald-500/20 self-start sm:self-center">
          <Sparkles className="w-3.5 h-3.5" />
          <span>2 Projects from Resume</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project) => {
          const isPowerBI = project.id === 'chocolate-sales-dashboard';

          return (
            <div
              key={project.id}
              className="glass-panel rounded-3xl p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Visual Thumbnail Representation */}
                <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-950 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 mb-5 p-4 flex flex-col justify-between group-hover:border-indigo-500/30 transition-all">
                  
                  {isPowerBI ? (
                    // Analytics Inspired Visual Mockup
                    <div className="h-full flex flex-col justify-between">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-amber-400" />
                          <span className="text-xs font-bold text-slate-200 light:text-slate-800">
                            Chocolate Sales BI Dashboard
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Power BI Model
                        </span>
                      </div>

                      {/* Mock Chart & KPI Grid inside thumbnail */}
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <div className="p-2 rounded-lg bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200">
                          <div className="text-[9px] text-slate-400">Total Sales</div>
                          <div className="text-xs font-bold text-emerald-400 font-mono">$2.84M</div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200">
                          <div className="text-[9px] text-slate-400">Profit Margin</div>
                          <div className="text-xs font-bold text-indigo-400 font-mono">29.6%</div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200">
                          <div className="text-[9px] text-slate-400">Total Units</div>
                          <div className="text-xs font-bold text-cyan-400 font-mono">450K</div>
                        </div>
                      </div>

                      {/* Mini Bar Visualization */}
                      <div className="space-y-1.5 bg-slate-900/60 light:bg-white/80 p-2.5 rounded-lg border border-slate-800/80 light:border-slate-200">
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>Regional Performance</span>
                          <span className="text-indigo-400">NA / EU / APAC</span>
                        </div>
                        <div className="flex items-center gap-1.5 h-3">
                          <div className="h-full bg-indigo-500 rounded" style={{ width: '45%' }} title="North America" />
                          <div className="h-full bg-cyan-400 rounded" style={{ width: '32%' }} title="Europe" />
                          <div className="h-full bg-emerald-400 rounded" style={{ width: '23%' }} title="APAC" />
                        </div>
                      </div>

                      {/* Representation disclaimer tag */}
                      <div className="flex items-center gap-1 text-[9px] text-slate-400 light:text-slate-500 pt-1">
                        <Info className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                        <span className="truncate">Portfolio visual representation of Power BI metrics</span>
                      </div>
                    </div>
                  ) : (
                    // E-Commerce Gallery Visual Mockup
                    <div className="h-full flex flex-col justify-between">
                      {/* Mock E-Commerce Nav */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 light:border-slate-200">
                        <div className="flex items-center gap-2">
                          <Layout className="w-4 h-4 text-indigo-400" />
                          <span className="text-xs font-bold text-slate-200 light:text-slate-800">
                            E-Commerce Product Gallery
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                          <ShoppingCart className="w-3 h-3" />
                          <span>Flexbox UI</span>
                        </div>
                      </div>

                      {/* Mock Gallery Cards Row */}
                      <div className="grid grid-cols-2 gap-2 my-2">
                        <div className="p-2 rounded-lg bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200">
                          <div className="w-full h-8 rounded bg-indigo-950/40 light:bg-slate-200 flex items-center justify-center mb-1.5">
                            <Package className="w-4 h-4 text-indigo-400" />
                          </div>
                          <div className="text-[10px] font-bold text-slate-200 light:text-slate-800 truncate">Dark Truffles</div>
                          <div className="text-[9px] text-emerald-400 font-mono">$12.50</div>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200">
                          <div className="w-full h-8 rounded bg-cyan-950/40 light:bg-slate-200 flex items-center justify-center mb-1.5">
                            <Package className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div className="text-[10px] font-bold text-slate-200 light:text-slate-800 truncate">Hazelnut Bar</div>
                          <div className="text-[9px] text-emerald-400 font-mono">$15.00</div>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Flexbox • Hover Effects • Shadows</span>
                        <span className="text-indigo-400 font-semibold">HTML5 & CSS3</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Open Interactive Deep Dive</span>
                    </button>
                  </div>
                </div>

                {/* Tech Badge & Title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 border border-indigo-500/20">
                    {project.technology}
                  </span>
                  <span className="text-xs text-slate-400 light:text-slate-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Features Pill List */}
                <div className="mt-4 pt-4 border-t border-slate-800/60 light:border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider mb-2">
                    Key Project Highlights:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Details Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between">
                <span className="text-xs text-indigo-400 font-medium">
                  {isPowerBI ? 'Includes BI KPI Simulator' : 'Includes Gallery Demo'}
                </span>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

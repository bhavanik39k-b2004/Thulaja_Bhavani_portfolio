import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  BarChart3, 
  SlidersHorizontal, 
  ShoppingCart, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Package, 
  Globe, 
  Info,
  Check,
  Star,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Power BI Simulation State
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedQuarter, setSelectedQuarter] = useState('Full Year');

  // E-Commerce Simulation State
  const [cartCount, setCartCount] = useState(0);
  const [addedItem, setAddedItem] = useState(null);

  // Mock regional data for Power BI simulation
  const regionData = {
    All: { revenue: '$2.84M', profit: '$840K', margin: '29.6%', units: '450K', topProduct: 'Dark Cocoa 85%' },
    'North America': { revenue: '$1.12M', profit: '$345K', margin: '30.8%', units: '180K', topProduct: 'Almond Truffle' },
    Europe: { revenue: '$980K', profit: '$305K', margin: '31.1%', units: '155K', topProduct: 'Dark Cocoa 85%' },
    'Asia-Pacific': { revenue: '$540K', profit: '$142K', margin: '26.3%', units: '85K', topProduct: 'Matcha Chocolate' },
    LATAM: { revenue: '$200K', profit: '$48K', margin: '24.0%', units: '30K', topProduct: 'Caramel Crunch' },
  };

  const currentStats = regionData[selectedRegion] || regionData.All;

  const mockProducts = [
    { id: 1, name: 'Artisan Dark Chocolate 85%', price: '$12.50', rating: 4.9, category: 'Dark', badge: 'Best Seller' },
    { id: 2, name: 'Roasted Hazelnut Truffles', price: '$15.00', rating: 4.8, category: 'Truffles', badge: 'Popular' },
    { id: 3, name: 'Single-Origin Cocoa Powder', price: '$9.90', rating: 4.7, category: 'Bakery', badge: 'Pure' },
  ];

  const handleAddToCart = (id) => {
    setCartCount(prev => prev + 1);
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel bg-[#0D121F] light:bg-white rounded-3xl border border-slate-700/80 light:border-slate-300 shadow-2xl p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 light:bg-slate-100 text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-slate-700 transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 border border-indigo-500/30">
              {project.technology}
            </span>
            <span className="text-xs text-slate-400 light:text-slate-500 font-medium">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            {project.title}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Interactive Demonstration Section */}
        <div className="mt-8 pt-6 border-t border-slate-800 light:border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <h3 className="text-base font-bold text-slate-100 light:text-slate-900">
                Interactive Technical Demonstration
              </h3>
            </div>
            {project.isMockVisualization && (
              <span className="text-[11px] text-amber-400/90 font-medium flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <Info className="w-3 h-3" />
                Portfolio visual representation
              </span>
            )}
          </div>

          {/* PROJECT 1: POWER BI ANALYTICS SIMULATOR */}
          {project.id === 'chocolate-sales-dashboard' && (
            <div className="bg-[#090D16] light:bg-slate-50 rounded-2xl p-5 border border-slate-800 light:border-slate-200 space-y-5">
              {/* Slicers Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800/80 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-slate-300 light:text-slate-700">Region Slicer:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['All', 'North America', 'Europe', 'Asia-Pacific', 'LATAM'].map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        selectedRegion === reg
                          ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                          : 'bg-slate-800/60 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-white'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* KPI Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/40 light:bg-white border border-slate-800/60 light:border-slate-200">
                  <div className="text-[11px] text-slate-400 light:text-slate-500 font-medium">Total Revenue</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-100 light:text-slate-900 mt-0.5 font-mono">
                    {currentStats.revenue}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-0.5 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+12.4% vs prev period</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 light:bg-white border border-slate-800/60 light:border-slate-200">
                  <div className="text-[11px] text-slate-400 light:text-slate-500 font-medium">Gross Profit</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 light:text-emerald-600 mt-0.5 font-mono">
                    {currentStats.profit}
                  </div>
                  <div className="text-[10px] text-slate-400 light:text-slate-500 mt-1">
                    Margin: <span className="font-semibold text-slate-200 light:text-slate-700">{currentStats.margin}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 light:bg-white border border-slate-800/60 light:border-slate-200">
                  <div className="text-[11px] text-slate-400 light:text-slate-500 font-medium">Units Sold</div>
                  <div className="text-lg sm:text-xl font-bold text-cyan-400 light:text-cyan-600 mt-0.5 font-mono">
                    {currentStats.units}
                  </div>
                  <div className="text-[10px] text-slate-400 light:text-slate-500 mt-1">Across 14 SKUs</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 light:bg-white border border-slate-800/60 light:border-slate-200">
                  <div className="text-[11px] text-slate-400 light:text-slate-500 font-medium">Top Product</div>
                  <div className="text-xs sm:text-sm font-bold text-purple-400 light:text-purple-600 mt-1 truncate">
                    {currentStats.topProduct}
                  </div>
                  <div className="text-[10px] text-slate-400 light:text-slate-500 mt-1">Highest margin tier</div>
                </div>
              </div>

              {/* Chart Visual Simulation */}
              <div className="p-4 rounded-xl bg-slate-900/40 light:bg-white border border-slate-800/60 light:border-slate-200">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 light:text-slate-700 mb-3">
                  <span>Product Sales Volume Breakdown ({selectedRegion})</span>
                  <span className="text-[11px] text-indigo-400">Power BI Drill-Down</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-400 light:text-slate-600 mb-1 text-[11px]">
                      <span>Dark Chocolate 85% & 70%</span>
                      <span>42%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 light:bg-slate-200 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: '42%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 light:text-slate-600 mb-1 text-[11px]">
                      <span>Hazelnut & Almond Truffles</span>
                      <span>33%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 light:bg-slate-200 overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full transition-all duration-500" style={{ width: '33%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 light:text-slate-600 mb-1 text-[11px]">
                      <span>Artisan Cocoa Powder & Bakery</span>
                      <span>25%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 light:bg-slate-200 overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full transition-all duration-500" style={{ width: '25%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT 2: E-COMMERCE PRODUCT GALLERY SIMULATOR */}
          {project.id === 'ecommerce-gallery' && (
            <div className="bg-[#090D16] light:bg-slate-50 rounded-2xl p-5 border border-slate-800 light:border-slate-200 space-y-5">
              {/* Top Navigation Bar Simulation */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800/80 light:border-slate-200">
                <div className="font-bold text-xs sm:text-sm text-slate-200 light:text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span>ChocoStore Gallery (HTML & CSS Showcase)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-sm">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Cart: {cartCount} items</span>
                  </div>
                </div>
              </div>

              {/* Flexbox Product Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {mockProducts.map((prod) => (
                  <div 
                    key={prod.id}
                    className="p-4 rounded-xl bg-slate-900/50 light:bg-white border border-slate-800/70 light:border-slate-200 hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600 border border-indigo-500/20">
                          {prod.badge}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{prod.rating}</span>
                        </div>
                      </div>

                      {/* Mock Image Box */}
                      <div className="w-full h-24 rounded-lg bg-gradient-to-br from-indigo-950/40 to-slate-800/50 light:from-slate-100 light:to-slate-200 flex items-center justify-center text-slate-400 mb-3 group-hover:scale-[1.02] transition-transform">
                        <Package className="w-8 h-8 text-indigo-400/60" />
                      </div>

                      <h4 className="text-xs font-bold text-slate-100 light:text-slate-900 group-hover:text-indigo-300 transition-colors">
                        {prod.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 light:text-slate-500 mt-1">
                        Category: {prod.category}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-800/50 light:border-slate-200 flex items-center justify-between">
                      <span className="text-sm font-bold text-emerald-400 light:text-emerald-600 font-mono">
                        {prod.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(prod.id)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1 transition-all"
                      >
                        {addedItem === prod.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-300" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3 h-3" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-400 light:text-slate-500 text-center italic">
                Showcasing Flexbox alignment, CSS hover states, box shadows, and button micro-interactions.
              </div>
            </div>
          )}
        </div>

        {/* Highlights Pills List */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider mb-2.5">
            Key Resume Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/70 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-700/60 light:border-slate-200"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{highlight}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Deep Dive Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {project.deepDive.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/40 light:bg-slate-50 border border-slate-800/80 light:border-slate-200"
            >
              <h5 className="text-xs font-bold text-indigo-400 light:text-indigo-600 mb-1">
                {item.title}
              </h5>
              <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer Note */}
        <div className="mt-6 pt-4 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 light:text-slate-500">
          <span>Student Project Showcase • Final Year Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}

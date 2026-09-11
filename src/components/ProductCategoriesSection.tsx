import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, X, Check, Filter } from 'lucide-react';
import { AKLA_CATEGORIES, AklaCategory } from '../data/aklaCategories';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface ProductCategoriesSectionProps {
  onSelectProduct?: (product: Product) => void;
  onRequestQuoteForCategory?: (categoryName: string) => void;
  onOpenGeneralQuote: () => void;
}

type FilterTab = 'ALL' | 'STAPLES' | 'OILS' | 'PERISHABLES' | 'SNACKS';

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onSelectProduct,
  onRequestQuoteForCategory,
  onOpenGeneralQuote,
}) => {
  const [activeCategoryModal, setActiveCategoryModal] = useState<AklaCategory | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterTab>('ALL');

  const filterMapping: Record<FilterTab, (cat: AklaCategory) => boolean> = {
    ALL: () => true,
    STAPLES: (cat) => ['grains-cereals-legumes', 'flour', 'sugar'].includes(cat.id),
    OILS: (cat) => ['ghee-vegetable-oil', 'eggs-dairy'].includes(cat.id),
    PERISHABLES: (cat) => ['fresh-fruits-vegetables', 'fish-seafood'].includes(cat.id),
    SNACKS: (cat) => ['dried-fruits-vegetables', 'beverages-juices', 'canned-packaged-snacks'].includes(cat.id),
  };

  const filteredCategories = AKLA_CATEGORIES.filter(filterMapping[activeFilter]);

  const getCommoditiesForCategory = (catId: string) => {
    if (catId === 'grains-cereals-legumes') {
      return PRODUCTS.filter(p => p.category === 'rice-grains' || p.category === 'pulses-legumes');
    }
    if (catId === 'ghee-vegetable-oil') {
      return PRODUCTS.filter(p => p.category === 'edible-oils');
    }
    if (catId === 'dried-fruits-vegetables') {
      return PRODUCTS.filter(p => p.category === 'spices-herbs');
    }
    return [];
  };

  const filterTabs: { id: FilterTab; label: string; count: number }[] = [
    { id: 'ALL', label: 'All Categories', count: 10 },
    { id: 'STAPLES', label: 'Grains & Staples', count: 3 },
    { id: 'OILS', label: 'Oils & Dairy', count: 2 },
    { id: 'PERISHABLES', label: 'Fresh & Seafood', count: 2 },
    { id: 'SNACKS', label: 'Spices & Packaged', count: 3 },
  ];

  return (
    <section id="products" className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0F172A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#C89B3C]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1380px] w-[92%] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center gap-2 text-[#C89B3C] font-black tracking-[2.5px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#FFF8EB] border border-[#F5D061]/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>OUR COMMODITY CATALOG</span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] tracking-tight font-heading font-black text-[#133E72]">
            Explore Our <span className="text-gold-gradient">Product Categories</span>
          </h2>
          <p className="text-base sm:text-[17px] text-[#475569] leading-relaxed mx-auto max-w-[680px]">
            A diverse portfolio of certified food commodities designed to support wholesale importers, retail supermarket chains, commercial bakeries, and GCC export partners.
          </p>

          {/* Interactive Animated Filter Tabs */}
          <div className="pt-4 flex items-center justify-center gap-2 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeFilter === tab.id
                    ? 'text-white border-[#133E72] bg-[#133E72] shadow-md scale-105'
                    : 'text-[#64748B] border-[#E2E8F0] bg-white hover:border-[#C89B3C] hover:text-[#133E72]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeFilter === tab.id ? 'bg-[#C89B3C] text-[#071A2F] font-black' : 'bg-[#F1F5F9] text-[#64748B]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 10 Clean Luxury Category Cards Grid with layout motion */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((cat, idx) => (
              <motion.div
                layout
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.015 }}
                onClick={() => setActiveCategoryModal(cat)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_4px_20px_rgba(19,62,114,0.06)] hover:shadow-[0_20px_45px_rgba(200,155,60,0.18)] transition-all duration-300 hover:border-[#C89B3C] cursor-pointer group flex flex-col justify-between relative luxury-sheen"
              >
                {/* Animated Image Container */}
                <div className="h-44 relative overflow-hidden bg-slate-900 group-hover:shadow-inner">
                  <motion.img 
                    src={cat.image} 
                    alt={cat.name} 
                    animate={{ 
                      scale: [1, 1.08, 1],
                      y: [0, -4, 0]
                    }}
                    transition={{
                      duration: 7 + (idx % 3) * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: (idx * 0.35) % 2
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Living Specular Light Sheen Animation across picture */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                    animate={{ x: ['-200%', '220%'] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 3.5 + (idx % 4) * 1.5,
                      ease: 'easeInOut',
                      delay: (idx * 0.45) % 3
                    }}
                  />

                  {/* Corner Warm Golden Glow Pulse */}
                  <motion.div 
                    animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                    className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#E3BC63]/25 rounded-full filter blur-lg pointer-events-none"
                  />

                  {/* Floating Animated Top Badge */}
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                    className="absolute top-3 left-3 bg-[#133E72]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider text-[#FDE68A] border border-[#C89B3C]/50 shadow-md"
                  >
                    {cat.num}
                  </motion.div>

                  {/* Floating Animated Category Icon */}
                  <motion.div 
                    animate={{ y: [0, -3, 0], rotate: [-2, 3, -2] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.25 }}
                    className="absolute top-3 right-3 text-lg bg-white/95 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:scale-115 transition-transform"
                  >
                    {cat.icon}
                  </motion.div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-[17px] font-bold text-[#133E72] leading-snug group-hover:text-[#C89B3C] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="text-[11px] text-[#C89B3C] font-arabic font-semibold" dir="rtl">
                      {cat.arabicName}
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-[#64748B] line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] font-bold text-[#C89B3C] group-hover:text-[#B8860B]">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner in Rich Royal Navy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#133E72] via-[#164D87] to-[#10355E] border border-[#C89B3C]/45 shadow-[0_15px_40px_rgba(19,62,114,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 text-white luxury-sheen"
        >
          <div>
            <h4 className="font-heading font-black text-xl sm:text-2xl text-white">
              Need Full Specifications or Container Pricing for Specific Commodities?
            </h4>
            <p className="text-sm text-[#CBD5E1] mt-1.5 max-w-2xl">
              We stock certified Basmati rice, pulses, whole spices, bakery flour, and edible oils in DIP Dubai for immediate commercial dispatch.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenGeneralQuote}
            className="shrink-0 px-8 py-4 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E3BC63] text-[#071A2F] rounded-full font-black text-xs uppercase tracking-wider transition-all shadow-[0_6px_25px_rgba(200,155,60,0.35)] hover:-translate-y-0.5 cursor-pointer"
          >
            REQUEST SPECIFICATION SHEET
          </button>
        </motion.div>

      </div>

      {/* Category Detail Modal */}
      <AnimatePresence>
        {activeCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] relative text-[#0F172A]"
            >
              {/* Modal Header in Royal Navy */}
              <div className="relative h-48 bg-[#133E72] text-white p-6 flex flex-col justify-end overflow-hidden">
                <motion.div 
                  animate={{ scale: [1, 1.08, 1], y: [0, -6, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url("${activeCategoryModal.image}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#133E72] via-[#133E72]/70 to-transparent" />
                
                <button
                  onClick={() => setActiveCategoryModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-[#E3BC63] hover:text-[#071A2F] transition-colors cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10 space-y-1">
                  <div className="text-[#FDE68A] text-xs font-black tracking-widest uppercase">
                    Category {activeCategoryModal.num}
                  </div>
                  <h3 className="font-heading text-2xl font-black text-white">
                    {activeCategoryModal.name}
                  </h3>
                  <div className="text-xs text-[#E3BC63] font-arabic" dir="rtl">
                    {activeCategoryModal.arabicName}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] mb-1.5">
                    Category Overview
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {activeCategoryModal.description}
                  </p>
                </div>

                {activeCategoryModal.itemsSample && activeCategoryModal.itemsSample.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] mb-2.5">
                      Key Items &amp; Available Lines
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {activeCategoryModal.itemsSample.map((item, idx) => (
                        <div key={idx} className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#1E293B] flex items-center gap-2">
                          <span className="text-[#C89B3C]">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Commodities if available */}
                {getCommoditiesForCategory(activeCategoryModal.id).length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] mb-2.5">
                      DIP Dubai Ready Stock Commodities
                    </h4>
                    <div className="space-y-2">
                      {getCommoditiesForCategory(activeCategoryModal.id).slice(0, 3).map((prod) => (
                        <div key={prod.id} className="p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between text-xs hover:border-[#C89B3C] transition-colors">
                          <div>
                            <strong className="text-[#0B2545] block font-bold text-[13px]">{prod.name}</strong>
                            <span className="text-[#64748B]">Origin: {prod.origin} &bull; {prod.packagingOptions?.[0] || 'Export Grade'}</span>
                          </div>
                          {onSelectProduct && (
                            <button
                              type="button"
                              onClick={() => {
                                setActiveCategoryModal(null);
                                onSelectProduct(prod);
                              }}
                              className="px-3 py-1.5 text-[11px] font-bold text-[#071A2F] bg-gradient-to-r from-[#F5D061] to-[#C89B3C] rounded-full cursor-pointer hover:scale-105 transition-transform"
                            >
                              Details &rarr;
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Actions */}
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveCategoryModal(null)}
                    className="px-5 py-2.5 text-xs font-bold text-[#64748B] hover:text-[#0B2545] cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const catName = activeCategoryModal.name;
                      setActiveCategoryModal(null);
                      if (onRequestQuoteForCategory) {
                        onRequestQuoteForCategory(catName);
                      } else {
                        onOpenGeneralQuote();
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-md hover:scale-105 cursor-pointer"
                  >
                    Request Quote For This Category
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

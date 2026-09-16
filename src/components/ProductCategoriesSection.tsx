import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  X, 
  Check, 
  Globe, 
  PackageCheck, 
  Upload, 
  Image as ImageIcon, 
  RefreshCw,
  Edit3,
  Camera
} from 'lucide-react';
import { AKLA_CATEGORIES, AklaCategory } from '../data/aklaCategories';
import { Product } from '../types';
import { useSiteEditor } from '../context/SiteEditorContext';
import { EditableText } from './editor/EditableText';

interface ProductCategoriesSectionProps {
  onSelectProduct?: (product: Product) => void;
  onRequestQuoteForCategory?: (categoryName: string) => void;
  onOpenGeneralQuote: () => void;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onRequestQuoteForCategory,
  onOpenGeneralQuote,
}) => {
  const { content, updateCategory, isEditMode, openImagePicker, setActivePanel } = useSiteEditor();
  const [activeCategoryModal, setActiveCategoryModal] = useState<AklaCategory | null>(null);
  const [uploadToast, setUploadToast] = useState<string | null>(null);

  // Use categories from content context (which can be edited and persisted)
  const categoriesList = content.categories && content.categories.length > 0 
    ? content.categories 
    : AKLA_CATEGORIES;

  const handleFileUpload = (catId: string, file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        updateCategory(catId, { image: dataUrl });

        // Trigger brief success notification
        setUploadToast('Photo updated successfully for ' + (catId === 'meat-seafood' ? 'Meat & Seafood' : catId));
        setTimeout(() => setUploadToast(null), 3500);

        // Sync to server so it saves into public/
        fetch('/api/upload-category-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filename: catId === 'meat-seafood' ? '1789572800511.png' : `${catId}.png`,
            base64: dataUrl,
          }),
        }).catch(() => {});
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="products" className="scroll-mt-24 py-14 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0F172A] relative">
      <div className="max-w-[1340px] w-[92%] mx-auto space-y-9">
        
        {/* ========================================================================= */}
        {/* 1. EXECUTIVE HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-[800px] mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#C89B3C] font-black tracking-[2px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#FFF8EB] border border-[#F5D061]/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <EditableText path="categoriesHeader.badge" defaultText="COMMODITY CATEGORIES" as="span" />
          </div>

          <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] leading-tight font-heading font-black text-[#1B5699]">
            <EditableText path="categoriesHeader.title" defaultText="Explore Our Product Categories" as="span" />
          </h2>

          <EditableText 
            path="categoriesHeader.description" 
            defaultText="Certified wholesale food commodities supplied in bulk and commercial packaging for GCC supermarkets, distributors, catering corporations, and institutional food processors." 
            as="p" 
            multiline 
            className="text-sm sm:text-[15px] text-[#475569] leading-relaxed max-w-[660px] mx-auto block" 
          />
        </div>

        {/* ========================================================================= */}
        {/* 2. 10 CORE CATEGORY CARDS GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {categoriesList.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategoryModal(cat)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#C89B3C] transition-all duration-200 cursor-pointer flex flex-col justify-between group relative"
            >
              {/* Category Image */}
              <div className="h-44 relative overflow-hidden bg-slate-100">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  onError={(e) => {
                    if (cat.fallbackImage && e.currentTarget.src !== cat.fallbackImage) {
                      e.currentTarget.src = cat.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E35]/75 via-transparent to-transparent" />

                {/* Upload / Replace Photo Button */}
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className={`absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 ${isEditMode ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-200`}
                >
                  <button
                    type="button"
                    onClick={() => openImagePicker(cat.id, cat.image, cat.name)}
                    className="px-2 py-1 bg-[#0A1E35]/85 hover:bg-[#1B5699] text-white text-[10px] font-bold rounded-md flex items-center gap-1 backdrop-blur-xs cursor-pointer border border-[#C89B3C]/50 shadow-xs"
                    title="Change Photo via Gallery / Link / Computer"
                  >
                    <Camera className="w-2.5 h-2.5 text-[#FDE68A]" />
                    <span>Photo</span>
                  </button>

                  <label 
                    className="px-2 py-1 bg-black/60 hover:bg-[#1B5699] text-white text-[10px] font-bold rounded-md flex items-center gap-1 backdrop-blur-xs cursor-pointer border border-white/20 shadow-xs"
                    title="Quick upload from device"
                  >
                    <Upload className="w-2.5 h-2.5 text-[#FDE68A]" />
                    <span>Upload</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(cat.id, file);
                      }}
                    />
                  </label>
                </div>

                {/* Arabic name on image for elegance */}
                <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white/95 text-[11px] font-arabic font-semibold drop-shadow-sm truncate" dir="rtl">
                  {cat.arabicName}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-heading text-[15px] font-bold text-[#1B5699] leading-snug group-hover:text-[#C89B3C] transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    {isEditMode && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePanel('cms');
                        }}
                        className="text-[#C89B3C] hover:text-[#0A1E35] p-1"
                        title="Edit text in Content Manager"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </h3>
                  
                  <p className="text-xs leading-relaxed text-[#64748B] line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Key items preview pills */}
                {cat.itemsSample && cat.itemsSample.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cat.itemsSample.slice(0, 2).map((item, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-medium bg-[#F1F5F9] text-[#475569] px-2 py-0.5 rounded-md truncate max-w-full"
                      >
                        {item.split('(')[0].trim()}
                      </span>
                    ))}
                    {cat.itemsSample.length > 2 && (
                      <span className="text-[10px] font-semibold text-[#C89B3C] px-1 py-0.5">
                        +{cat.itemsSample.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] font-bold text-[#C89B3C] group-hover:text-[#B8860B]">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM PROFESSIONAL ACTION BANNER */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1B5699] via-[#2167B4] to-[#133A6B] border border-[#C89B3C]/40 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-white">
              Direct Mill Sourcing &amp; GCC Commercial Supply
            </h4>
            <p className="text-xs text-[#CBD5E1]">
              Full container load (FCL) and prompt institutional warehouse supply managed directly from our Al Quoz office in Dubai.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenGeneralQuote}
            className="shrink-0 px-6 py-3 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] font-black text-xs uppercase tracking-wider rounded-xl hover:from-[#FFF0BE] hover:to-[#E3BC63] transition-colors cursor-pointer shadow-xs"
          >
            Request Catalog &amp; Quote
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. ATTRACTIVE & PROFESSIONAL SPECIFICATION MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeCategoryModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto"
            onClick={() => setActiveCategoryModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-white w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] relative text-[#0F172A] max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-36 bg-[#1B5699] text-white p-5 flex flex-col justify-end overflow-hidden shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-35 transition-all duration-300"
                  style={{ backgroundImage: `url("${activeCategoryModal.image}")` }}
                />
                <button
                  onClick={() => setActiveCategoryModal(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="relative z-10">
                  <span className="text-[#FDE68A] text-[10px] font-bold uppercase tracking-wider">
                    Category {activeCategoryModal.num} &bull; Product Line
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white leading-tight flex items-center gap-2">
                    <span>{activeCategoryModal.icon}</span>
                    <span>{activeCategoryModal.name}</span>
                  </h3>
                  <span className="text-xs text-[#F5D061] font-arabic block mt-0.5" dir="rtl">
                    {activeCategoryModal.arabicName}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs sm:text-sm">
                {/* Photo Update Bar */}
                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-[#C89B3C] shrink-0" />
                    <div>
                      <p className="font-bold text-[#0F172A] text-xs">Category Display Photo</p>
                      <p className="text-[11px] text-[#64748B]">
                        Click to change or upload new high-resolution photo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => openImagePicker(activeCategoryModal.id, activeCategoryModal.image, activeCategoryModal.name)}
                      className="px-3 py-1.5 bg-[#1B5699] hover:bg-[#133A6B] text-white rounded-lg font-bold text-[11px] flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#FDE68A]" />
                      <span>Change Photo</span>
                    </button>
                    <label className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-[11px] flex items-center gap-1 cursor-pointer transition-colors border border-slate-300">
                      <span>Browse file</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(activeCategoryModal.id, file);
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C89B3C] mb-1">
                    Category Scope &amp; Quality
                  </h4>
                  <p className="text-[#475569] leading-relaxed">
                    {activeCategoryModal.description}
                  </p>
                </div>

                {/* Origins & Packaging */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCategoryModal.keyOrigins && (
                    <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1B5699] uppercase">
                        <Globe className="w-3.5 h-3.5 text-[#C89B3C]" />
                        <span>Key Origins</span>
                      </div>
                      <p className="text-xs text-[#475569]">
                        {activeCategoryModal.keyOrigins}
                      </p>
                    </div>
                  )}

                  {activeCategoryModal.packagingTypes && (
                    <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1B5699] uppercase">
                        <PackageCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
                        <span>Wholesale Packaging</span>
                      </div>
                      <p className="text-xs text-[#475569]">
                        {activeCategoryModal.packagingTypes}
                      </p>
                    </div>
                  )}
                </div>

                {activeCategoryModal.itemsSample && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C89B3C] mb-2">
                      Available Trade Lines &amp; Specifications
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {activeCategoryModal.itemsSample.map((item, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#334155] flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveCategoryModal(null)}
                  className="px-4 py-2 text-xs font-bold text-[#64748B] hover:text-[#1B5699] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const name = activeCategoryModal.name;
                    setActiveCategoryModal(null);
                    onRequestQuoteForCategory ? onRequestQuoteForCategory(name) : onOpenGeneralQuote();
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] rounded-lg text-xs font-black uppercase tracking-wider cursor-pointer hover:from-[#FFF0BE] hover:to-[#E3BC63]"
                >
                  Request Quote for Category
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Upload confirmation toast */}
      <AnimatePresence>
        {uploadToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0F2847] text-white px-4 py-3 rounded-xl shadow-2xl border border-[#C89B3C] flex items-center gap-2.5 text-xs font-bold"
          >
            <Check className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>{uploadToast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

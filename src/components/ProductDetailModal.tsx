import React from 'react';
import { 
  X, 
  Check, 
  FileText, 
  MessageSquare,
  Layers,
  FileCheck,
  Globe2,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (p: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  const whatsappUrl = `https://wa.me/971508421973?text=${encodeURIComponent(
    `Hello Akla Foodstuff Trading, I am interested in receiving a wholesale quote for ${product.name} (Origin: ${product.origin}). Please share current pricing and availability in Dubai.`
  )}`;

  // Normalize specifications from product.specs
  const specs = product.specs || (product as any).specifications || {};
  const specEntries = Object.entries(specs);

  const specLabels: Record<string, string> = {
    grainLength: 'Grain Length',
    moisture: 'Moisture',
    purity: 'Purity Level',
    brokenRatio: 'Broken Ratio',
    color: 'Color / Appearance',
    admixture: 'Foreign Matter / Admixture',
    processing: 'Milling & Processing',
    freeFattyAcids: 'Free Fatty Acids (FFA)',
    temperature: 'Storage Temperature',
    slaughterMethod: 'Slaughter Method',
    freezingMethod: 'Freezing Process',
    certification: 'Certifications',
    cutStyle: 'Cut / Trimming Style',
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="relative w-full sm:max-w-2xl bg-white text-[#0F172A] rounded-t-3xl sm:rounded-2xl shadow-[0_25px_60px_rgba(27,86,153,0.35)] border border-[#E2E8F0] overflow-hidden max-h-[92vh] sm:max-h-[88vh] flex flex-col my-0 sm:my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Swipe Bar Indicator */}
        <div className="pt-2.5 pb-1 bg-gradient-to-r from-[#1B5699] to-[#144275] sm:hidden flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-white/30" />
        </div>

        {/* Modal Header in Royal Navy */}
        <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4.5 bg-gradient-to-r from-[#1B5699] to-[#144275] text-white shrink-0 border-b border-[#2662A6]">
          <div className="min-w-0 pr-3">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FDE68A]">
              <Sparkles className="w-3 h-3 text-[#E3BC63] shrink-0" />
              <span className="truncate">Wholesale Commodity Specifications</span>
            </div>
            <h3 className="font-heading text-lg sm:text-2xl font-black text-white mt-0.5 truncate">{product.name}</h3>
            <p className="text-xs text-[#E3BC63] font-arabic font-semibold" dir="rtl">{product.arabicName}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 overscroll-contain">
          {/* Main Graphic & High Level Metrics */}
          <div className="grid sm:grid-cols-12 gap-4 sm:gap-5 items-start">
            <div className="sm:col-span-5 h-44 sm:h-52 rounded-xl overflow-hidden relative shadow-sm border border-[#E2E8F0] bg-slate-900 shrink-0">
              <motion.img 
                src={product.image} 
                alt={product.name} 
                animate={{ scale: [1, 1.06, 1], y: [0, -2, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
              />
              <div className="absolute top-2.5 left-2.5 bg-[#1B5699]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#FDE68A] border border-[#C89B3C]/50 max-w-[85%] truncate">
                {product.grade}
              </div>
              {product.stockStatus && (
                <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-emerald-400 border border-emerald-500/40">
                  {product.stockStatus}
                </div>
              )}
            </div>

            <div className="sm:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#F8FAFC] p-2.5 sm:p-3 rounded-xl border border-[#E2E8F0] min-w-0">
                  <span className="text-[#64748B] block text-[9px] sm:text-[10px] uppercase font-bold truncate">Country of Origin</span>
                  <span className="font-bold text-[#1B5699] flex items-center gap-1 mt-0.5 text-xs sm:text-sm truncate">
                    <Globe2 className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                    <span className="truncate">{product.origin}</span>
                  </span>
                </div>
                <div className="bg-[#F8FAFC] p-2.5 sm:p-3 rounded-xl border border-[#E2E8F0] min-w-0">
                  <span className="text-[#64748B] block text-[9px] sm:text-[10px] uppercase font-bold truncate">Minimum Order Qty</span>
                  <span className="font-bold text-[#B8860B] mt-0.5 block text-xs sm:text-sm truncate">{product.moq}</span>
                </div>
              </div>

              {product.shelfLife && (
                <div className="text-[11px] text-[#64748B] flex items-center gap-2">
                  <span className="font-semibold text-[#1B5699]">Shelf Life:</span>
                  <span>{product.shelfLife}</span>
                  {product.hsCode && (
                    <>
                      <span className="text-[#CBD5E1]">&bull;</span>
                      <span className="font-mono text-[10px] bg-[#F1F5F9] px-1.5 py-0.5 rounded text-[#475569] border border-[#E2E8F0]">
                        HS {product.hsCode}
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Key Specifications (Laboratory & Physical Parameters) */}
          {specEntries.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] flex items-center gap-1.5 mb-2.5">
                <FileCheck className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span>Laboratory &amp; Physical Parameters</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {specEntries.map(([key, value]) => {
                  const label = specLabels[key] || key.replace(/([A-Z])/g, ' $1');
                  return (
                    <div key={key} className="bg-[#F8FAFC] p-2 sm:p-2.5 rounded-xl border border-[#E2E8F0] min-w-0">
                      <span className="text-[#64748B] capitalize block text-[10px] font-medium truncate" title={label}>
                        {label}
                      </span>
                      <span className="font-bold text-[#1B5699] mt-0.5 block text-xs break-words">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Packaging Options */}
          {product.packagingOptions && product.packagingOptions.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] flex items-center gap-1.5 mb-2">
                <Layers className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span>Available Export &amp; Retail Packaging</span>
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {product.packagingOptions.map((opt, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#F8FAFC] text-[#1E293B] text-[11px] sm:text-xs font-medium border border-[#E2E8F0] flex items-center gap-1.5 max-w-full break-words"
                  >
                    <Check className="w-3 h-3 text-[#C89B3C] shrink-0" />
                    <span>{opt}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {product.certifications && (
            <div className="pt-2 border-t border-[#E2E8F0] space-y-1.5">
              <span className="text-[11px] font-bold text-[#64748B] block">Quality &amp; Regulatory Compliance:</span>
              <div className="flex gap-1.5 flex-wrap">
                {product.certifications.map((cert, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-[#FFF8EB] text-[#C89B3C] border border-[#F5D061]/60 text-[10px] font-bold flex items-center gap-1">
                    <span>✓</span>
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions: Mobile Optimized */}
        <div className="shrink-0 p-3 sm:p-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-98 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white shrink-0" />
            <span>Inquire on WhatsApp</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="hidden sm:inline-block px-4 py-2.5 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#1B5699] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] text-xs font-black uppercase tracking-wider shadow-md hover:from-[#FFF0BE] hover:to-[#E3BC63] active:scale-98 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#071A2F] shrink-0" />
              <span>Request Wholesale Quote</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
        className="relative w-full max-w-2xl bg-white text-[#0F172A] rounded-2xl shadow-[0_25px_60px_rgba(19,62,114,0.25)] border border-[#E2E8F0] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header in Royal Navy */}
        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#133E72] to-[#10355E] text-white">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FDE68A]">
              <Sparkles className="w-3 h-3 text-[#E3BC63]" />
              <span>Technical Commodity Specification</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white mt-0.5">{product.name}</h3>
            <p className="text-xs text-[#E3BC63] font-arabic font-semibold" dir="rtl">{product.arabicName}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Graphic & High Level Metrics */}
          <div className="grid sm:grid-cols-12 gap-5 items-center">
            <div className="sm:col-span-5 h-48 rounded-xl overflow-hidden relative shadow-sm border border-[#E2E8F0] bg-slate-900">
              <motion.img 
                src={product.image} 
                alt={product.name} 
                animate={{ scale: [1, 1.08, 1], y: [0, -3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
              />
              <div className="absolute top-2.5 left-2.5 bg-[#133E72]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#FDE68A] border border-[#C89B3C]/50">
                {product.grade}
              </div>
            </div>

            <div className="sm:col-span-7 space-y-3">
              <p className="text-sm text-[#475569] leading-relaxed">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                  <span className="text-[#64748B] block text-[10px] uppercase font-bold">Country of Origin</span>
                  <span className="font-bold text-[#133E72] flex items-center gap-1 mt-0.5">
                    <Globe2 className="w-3.5 h-3.5 text-[#C89B3C]" />
                    {product.origin}
                  </span>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                  <span className="text-[#64748B] block text-[10px] uppercase font-bold">Minimum Order Qty</span>
                  <span className="font-bold text-[#B8860B] mt-0.5 block">{product.moq}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] flex items-center gap-1.5 mb-2.5">
                <FileCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Laboratory &amp; Physical Parameters</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                    <span className="text-[#64748B] capitalize block text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-bold text-[#0B2545] mt-0.5 block">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Packaging Options */}
          {product.packagingOptions && product.packagingOptions.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C] flex items-center gap-1.5 mb-2">
                <Layers className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Available Export &amp; Retail Packaging</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.packagingOptions.map((opt, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] text-[#1E293B] text-xs font-medium border border-[#E2E8F0] flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#C89B3C]" />
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {product.certifications && (
            <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8F0]">
              <span className="text-[11px] font-bold text-[#64748B]">Quality Compliance:</span>
              <div className="flex gap-1.5 flex-wrap">
                {product.certifications.map((cert, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#FFF8EB] text-[#C89B3C] border border-[#F5D061]/60 text-[10px] font-bold">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-5 border-t border-[#E2E8F0] bg-[#F8FAFC]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1f9d55] hover:bg-[#25b362] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Inquire on WhatsApp</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-3 rounded-full text-xs font-bold text-[#64748B] hover:text-[#0B2545] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#071A2F]" />
              <span>Request Formal Proforma</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck, Sparkles, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/companyInfo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

const POPULAR_COMMODITIES = [
  '1121 Basmati Rice',
  'Halal Chicken (Griller/IQF)',
  'Halal Frozen Beef & Lamb',
  'Pure Sunflower Oil',
  'Refined Sugar (ICUMSA 45)',
  'Wheat Flour',
  'Pulses & Lentils',
  'Other Commodity',
];

const VOLUME_PRESETS = [
  '1 FCL 20ft (25 MT)',
  '2 - 5 FCLs (50-125 MT)',
  'Bulk Vessel (250+ MT)',
  'Trial Pallet (1-5 MT)',
];

const DESTINATION_PRESETS = [
  'Dubai / Jebel Ali Port',
  'UAE Mainland Warehouse',
  'GCC Export (Saudi / Oman / Qatar)',
  'Other Global Port',
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
}) => {
  const [commodity, setCommodity] = useState(selectedProduct ? selectedProduct.name : '1121 Basmati Rice');
  const [isCustomCommodity, setIsCustomCommodity] = useState(false);
  const [quantity, setQuantity] = useState('1 FCL 20ft (25 MT)');
  const [destination, setDestination] = useState('Dubai / Jebel Ali Port');
  const [buyerName, setBuyerName] = useState('');
  const [phone, setPhone] = useState('');
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if product changes
  useEffect(() => {
    if (selectedProduct) {
      setCommodity(selectedProduct.name);
      setIsCustomCommodity(!POPULAR_COMMODITIES.includes(selectedProduct.name));
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsappUrl = () => {
    const text = `Hello Akla Foodstuff Trading LLC,\n\nI would like to request an official wholesale quote:\n- Commodity: ${commodity}\n- Quantity: ${quantity}\n- Delivery Port: ${destination}\n- Contact: ${buyerName || 'Procurement Buyer'}\n- Phone/WhatsApp: ${phone || 'Provided via Web'}${company ? `\n- Company: ${company}` : ''}${email ? `\n- Email: ${email}` : ''}${notes ? `\n- Notes: ${notes}` : ''}\n\nPlease share current CIF/FOB proforma terms and dispatch schedule.`;
    return `https://wa.me/971508421973?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
        className="bg-white rounded-t-3xl sm:rounded-2xl max-w-lg w-full shadow-[0_25px_60px_rgba(27,86,153,0.28)] border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh] text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Swipe Bar Handle */}
        <div className="sm:hidden w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2" />

        {/* Modal Header in Royal Navy */}
        <div className="bg-gradient-to-r from-[#1B5699] via-[#2167B4] to-[#174D89] text-white px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-1.5 text-[#FDE68A] text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Direct Dubai Trade Desk RFP</span>
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-black mt-0.5">
              Request Wholesale Quote
            </h3>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable & Optimized */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 overscroll-contain">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-[#1f9d55]/15 text-[#1f9d55] border border-[#1f9d55]/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-heading text-xl font-black text-[#1B5699]">
                Quote Request Received
              </h4>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1B5699]">{buyerName || 'Buyer'}</strong>. Your inquiry for <strong className="text-[#1B5699]">{commodity} ({quantity})</strong> has been routed to our Dubai trade desk. A broker will respond within 2 to 4 hours.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1f9d55] hover:bg-[#25b362] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-transform hover:scale-102 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Directly on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#475569] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form id="quote-form" onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* WhatsApp 1-Tap Fast-Track Option */}
              <div className="bg-[#F0FDF4] border border-[#86EFAC]/80 rounded-xl p-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1f9d55] text-white flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#166534] uppercase tracking-wide">
                      Instant WhatsApp Quote
                    </div>
                    <div className="text-[11px] text-[#15803D]">
                      Skip forms &amp; chat directly with a broker
                    </div>
                  </div>
                </div>
                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#1f9d55] hover:bg-[#16a34a] text-white text-[11px] font-black rounded-lg uppercase tracking-wider transition-colors shrink-0 shadow-xs"
                >
                  Open Chat
                </a>
              </div>

              {/* 1. Quick Commodity Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#334155]">
                  Select Food Commodity *
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_COMMODITIES.map((item) => {
                    const isSelected = commodity === item && !isCustomCommodity;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          if (item === 'Other Commodity') {
                            setIsCustomCommodity(true);
                            setCommodity('');
                          } else {
                            setIsCustomCommodity(false);
                            setCommodity(item);
                          }
                        }}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                          (isSelected || (item === 'Other Commodity' && isCustomCommodity))
                            ? 'bg-[#1B5699] text-white border-[#1B5699] font-bold shadow-2xs'
                            : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#C89B3C]'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
                {isCustomCommodity && (
                  <input
                    type="text"
                    required
                    placeholder="Enter commodity name (e.g. Cardamom, Desi Ghee)"
                    value={commodity}
                    onChange={(e) => setCommodity(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-base sm:text-xs text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                )}
              </div>

              {/* 2. Volume Preset Pills */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#334155]">
                  Required Volume *
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {VOLUME_PRESETS.map((vol) => (
                    <button
                      key={vol}
                      type="button"
                      onClick={() => setQuantity(vol)}
                      className={`px-2.5 py-2 rounded-lg text-xs text-left transition-all border cursor-pointer ${
                        quantity === vol
                          ? 'bg-[#FFF8EB] border-[#C89B3C] text-[#071A2F] font-bold shadow-2xs'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1]'
                      }`}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Contact & Phone (Compact 2-Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#334155]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mansoor"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-base sm:text-xs text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#334155]">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-base sm:text-xs text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              {/* 4. Destination Preset Chips */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#334155]">
                  Destination Port or Delivery Area
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {DESTINATION_PRESETS.map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => setDestination(dest)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer border ${
                        destination === dest
                          ? 'bg-[#1B5699] text-white border-[#1B5699] font-bold'
                          : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#C89B3C]'
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Collapsible Optional Specifications (Company, Email, Notes) */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowOptionalFields(!showOptionalFields)}
                  className="flex items-center gap-1.5 text-xs text-[#1B5699] hover:text-[#C89B3C] font-bold cursor-pointer transition-colors"
                >
                  <span>{showOptionalFields ? 'Hide' : '+ Add'} Company Name, Email &amp; Packaging Notes (Optional)</span>
                  {showOptionalFields ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <AnimatePresence>
                  {showOptionalFields && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3 pt-2.5 overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="block text-xs font-semibold text-[#475569]">Company Name</label>
                          <input
                            type="text"
                            placeholder="Trading / Supermarket firm"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-base sm:text-xs text-[#0F172A] focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="block text-xs font-semibold text-[#475569]">Corporate Email</label>
                          <input
                            type="email"
                            placeholder="purchasing@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-base sm:text-xs text-[#0F172A] focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-[#475569]">Packaging or Lab Specifications</label>
                        <textarea
                          rows={2}
                          placeholder="e.g. 25kg PP bags with private brand stencil, SGS inspection needed."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-base sm:text-xs text-[#0F172A] focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          )}
        </div>

        {/* Modal Sticky Footer with Submit Button */}
        {!isSubmitted && (
          <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
            <div className="text-[11px] text-[#64748B] hidden sm:block">
              Average response time: &lt; 2 hrs
            </div>
            <button
              type="submit"
              form="quote-form"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#F5D061] via-[#E3BC63] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E3BC63] text-[#071A2F] text-xs font-black uppercase tracking-wider shadow-md hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Transmit Official Request</span>
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
};


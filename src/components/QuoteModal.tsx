import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/companyInfo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
}) => {
  const [commodity, setCommodity] = useState(selectedProduct ? selectedProduct.name : '1121 Steam Basmati Rice');
  const [quantity, setQuantity] = useState('1 FCL 20ft (approx. 25 MT)');
  const [destination, setDestination] = useState('Dubai / UAE Mainland');
  const [buyerName, setBuyerName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if product changes
  useEffect(() => {
    if (selectedProduct) {
      setCommodity(selectedProduct.name);
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsappUrl = () => {
    const text = `Hello Akla Foodstuff Trading LLC,\n\nI would like to request a wholesale quote:\n- Commodity: ${commodity}\n- Quantity: ${quantity}\n- Delivery Destination: ${destination}\n- Company: ${company || 'N/A'}\n- Contact: ${buyerName || 'N/A'}\n- Notes: ${notes || 'None'}\n\nPlease share current proforma terms and dispatch timeline.`;
    return `https://wa.me/971508421973?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
        className="bg-white rounded-2xl max-w-xl w-full shadow-[0_25px_60px_rgba(19,62,114,0.25)] border border-[#E2E8F0] overflow-hidden relative text-[#0F172A]"
      >
        {/* Modal Header in Royal Navy */}
        <div className="bg-gradient-to-r from-[#133E72] to-[#10355E] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#FDE68A] text-[10px] font-bold uppercase tracking-widest mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Official Commercial RFP Portal</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-black">
              Request Wholesale Proforma
            </h3>
            <p className="text-xs text-[#CBD5E1] mt-1">
              Akla Foodstuff Trading LLC &bull; Direct Jebel Ali Port / DIP Stock
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#1f9d55]/15 text-[#1f9d55] border border-[#1f9d55]/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#0B2545]">
                RFP Successfully Transmitted
              </h4>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto leading-relaxed">
                Thank you. Your request for <strong className="text-[#0B2545]">{commodity}</strong> has been assigned to a senior commodity broker. You will receive CIF / FOB pricing with lab specs within 4 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1f9d55] hover:bg-[#25b362] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-transform hover:scale-105 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Notify via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#475569] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="font-bold text-[#334155]">Commodity Line</label>
                  <input
                    type="text"
                    required
                    value={commodity}
                    onChange={(e) => setCommodity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#334155]">Required Volume</label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden cursor-pointer"
                  >
                    <option>1 FCL 20ft (approx. 25 MT)</option>
                    <option>2 - 5 FCLs (approx. 50 - 125 MT)</option>
                    <option>Bulk Vessel Consignment (500+ MT)</option>
                    <option>Trial Commercial Pallet (1 - 5 MT)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#334155]">Destination Port or Inco-Term</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CIF Jebel Ali Port, FOB Mumbai, or Dubai Mainland Warehouse"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="font-bold text-[#334155]">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Procurement Officer / Trader"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#334155]">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Trading Firm / Supermarket Chain"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="font-bold text-[#334155]">Direct WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 --- ----"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#334155]">Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="purchasing@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#334155]">Packaging or Quality Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. 25kg Non-Woven bags with buyer brand stencil, SGS inspection certificate needed."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-medium focus:border-[#C89B3C] focus:bg-white focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F5D061] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E3BC63] text-[#071A2F] text-xs font-black uppercase tracking-wider shadow-md hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Official Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

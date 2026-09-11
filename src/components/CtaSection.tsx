import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Clock } from 'lucide-react';

interface CtaSectionProps {
  onOpenQuote: () => void;
  onNavigateContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenQuote,
  onNavigateContact,
}) => {
  return (
    <section 
      className="py-28 text-white text-center relative overflow-hidden bg-cover bg-center border-y border-[#C89B3C]/40 luxury-sheen"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(19,62,114,0.94) 0%, rgba(22,78,136,0.90) 50%, rgba(16,53,94,0.96) 100%), url("https://images.unsplash.com/photo-1566576912327-7d3c7b4c5f0c?auto=format&fit=crop&w=1800&q=85")`
      }}
    >
      {/* Ambient gold glow pulsing */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#E3BC63]/15 rounded-full filter blur-[120px] pointer-events-none" 
      />

      <div className="max-w-[1000px] w-[92%] mx-auto relative z-10 space-y-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#E3BC63] font-black tracking-[2.5px] text-xs uppercase px-4 py-1.5 rounded-full bg-[#E3BC63]/15 border border-[#E3BC63]/40 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E3BC63]" />
          <span>START A COMMERCIAL PARTNERSHIP</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.08] font-heading font-black text-white max-w-[850px] mx-auto"
        >
          Looking for a Reliable <span className="text-gold-gradient-light">Food Supply Partner?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-[18px] text-[#CBD5E1] max-w-[650px] mx-auto leading-relaxed pb-2"
        >
          Tell us what commodities or packaged lines you require and our Dubai trade desk will calculate prompt vessel or road freight CIF/FOB pricing.
        </motion.p>

        {/* 2 Quick confidence points */}
        <div className="flex items-center justify-center gap-6 text-xs text-[#FDE68A] font-semibold pb-2">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>24-Hour Proforma Response</span>
          </span>
          <span className="text-white/30">&bull;</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Proforma with HS Codes</span>
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E3BC63] text-[#071A2F] rounded-full font-black text-xs tracking-wider uppercase transition-all shadow-[0_6px_25px_rgba(200,155,60,0.4)] cursor-pointer group"
          >
            <span>REQUEST A FORMAL QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#071A2F] group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0B2545]/80 hover:bg-[#C89B3C]/20 border border-[#C89B3C]/75 hover:border-[#E3BC63] text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all backdrop-blur-md cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#E3BC63]" />
            <span>CONTACT OUR TRADE DESK</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Shield, 
  Globe, 
  Truck, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onOpenQuote,
}) => {
  // Generate ambient floating golden sparkles
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 3,
    }));
    setParticles(p);
  }, []);

  // Animation variants for hero text and components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[860px] lg:min-h-[940px] xl:min-h-[980px] w-full text-white overflow-hidden flex flex-col justify-between select-none bg-[#0B213D]"
    >
      {/* ========================================================================= */}
      {/* 1. LUXURIOUS BACKGROUND WITH MARITIME & AGRO IMAGERY AND LIGHTING */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Ocean Cargo Shipping Imagery */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=90")`,
            filter: 'brightness(0.55) contrast(1.15) saturate(1.15)',
          }}
        />

        {/* Port logistics & container ship subtle overlay with blend */}
        <div 
          className="absolute right-0 bottom-10 w-[65%] h-[75%] bg-contain bg-no-repeat bg-right-bottom opacity-40 hidden md:block"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80")`,
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
          }}
        />

        {/* Rich food commodities & harvest grains spread blend on bottom right */}
        <div 
          className="absolute right-0 bottom-0 w-full lg:w-[60%] xl:w-[55%] h-[380px] sm:h-[460px] lg:h-[520px] bg-cover bg-no-repeat bg-bottom z-10 opacity-70 transition-all duration-700 pointer-events-none"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1800&q=85")`,
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Royal Navy Vignette and atmospheric depth gradient for razor-sharp text contrast */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 20% 35%, rgba(11, 33, 61, 0.65) 0%, rgba(13, 38, 70, 0.88) 55%, rgba(9, 25, 46, 0.98) 100%),
                         linear-gradient(180deg, rgba(11, 33, 61, 0.80) 0%, rgba(16, 52, 94, 0.35) 45%, rgba(9, 25, 46, 0.98) 100%)`
          }}
        />

        {/* Subtle Anamorphic Horizon Lens Ray */}
        <div className="absolute top-[32%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E3BC63]/30 to-transparent z-10 pointer-events-none" />

        {/* Ambient floating golden dust particles / sparkles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.85, 0],
              y: [-20, -130],
              x: [0, (p.id % 2 === 0 ? 25 : -25)],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full pointer-events-none z-10"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: '#FDE68A',
              boxShadow: '0 0 10px #E3BC63, 0 0 20px rgba(227,188,99,0.5)',
            }}
          />
        ))}
      </div>

      {/* Floating Interactive Live Cards (Desktop Right) */}
      <div className="hidden xl:flex flex-col gap-4 absolute right-12 top-36 z-20 pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className="bg-[#123E6D]/95 backdrop-blur-xl border border-[#C89B3C]/50 px-5 py-3.5 rounded-2xl shadow-[0_15px_35px_rgba(19,62,114,0.45)] flex items-center gap-3.5 cursor-pointer group animate-float luxury-sheen"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F5D061] to-[#C89B3C] text-[#071A2F] flex items-center justify-center font-black shadow-md group-hover:rotate-6 transition-transform">
            <Sparkles className="w-5 h-5 text-[#071A2F]" />
          </div>
          <div>
            <div className="text-[11px] font-black text-[#FDE68A] uppercase tracking-wider">
              Direct Mill Procurement
            </div>
            <div className="text-xs text-white/95 font-bold flex items-center gap-1">
              <AnimatedCounter to={100} suffix="%" duration={1800} />
              <span>Quality Inspected</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className="bg-[#123E6D]/95 backdrop-blur-xl border border-[#C89B3C]/50 px-5 py-3.5 rounded-2xl shadow-[0_15px_35px_rgba(19,62,114,0.45)] flex items-center gap-3.5 cursor-pointer group animate-float-reverse luxury-sheen"
        >
          <div className="w-11 h-11 rounded-xl bg-[#184D87] border border-[#C89B3C]/40 text-[#E3BC63] flex items-center justify-center font-black shadow-md group-hover:rotate-6 transition-transform">
            <Truck className="w-5 h-5 text-[#E3BC63]" />
          </div>
          <div>
            <div className="text-[11px] font-black text-[#FDE68A] uppercase tracking-wider">Fast-Track Logistics</div>
            <div className="text-xs text-white/95 font-bold flex items-center gap-1">
              <span>Jebel Ali Berth &bull;</span>
              <AnimatedCounter to={48} suffix="h" duration={1500} />
              <span>Transit</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 3. HERO CONTENT: ANIMATED MAIN HEADLINES, HIGHLIGHTS, INTRO & CONTROLS */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-28 pb-16 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[800px]"
        >
          {/* Main Hero Headline with Smooth Staggered Entrance & Gold Shimmer */}
          <motion.h1 
            variants={itemVariants}
            className="text-[44px] sm:text-[62px] lg:text-[76px] xl:text-[84px] leading-[1.04] font-heading font-black tracking-tight text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Trusted Partner in
            </motion.span>
            <motion.span 
              className="block text-gold-gradient animate-gold-shimmer drop-shadow-[0_4px_30px_rgba(227,188,99,0.55)]"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Global Food Trading
            </motion.span>
          </motion.h1>

          {/* Three Sub-Bullet Strengths with Gold Separators & Micro-Animations */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center flex-wrap gap-2 sm:gap-3 text-sm sm:text-base lg:text-[17px] font-bold text-white/95 mb-6"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-white drop-shadow-sm flex items-center gap-1.5 cursor-default transition-transform"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FDE68A]" />
              <span>Quality Products</span>
            </motion.span>
            <span className="text-[#E3BC63] font-black">|</span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-white drop-shadow-sm flex items-center gap-1.5 cursor-default transition-transform"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FDE68A]" />
              <span>Competitive Prices</span>
            </motion.span>
            <span className="text-[#E3BC63] font-black">|</span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-white drop-shadow-sm flex items-center gap-1.5 cursor-default transition-transform"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FDE68A]" />
              <span>Reliable Supply</span>
            </motion.span>
          </motion.div>

          {/* Description with high-contrast text */}
          <motion.p 
            variants={itemVariants}
            className="text-[15.5px] sm:text-[17px] text-[#DCE5F0] leading-relaxed max-w-[640px] mb-8 font-normal drop-shadow-md"
          >
            Akla Foodstuff Trading LLC is a Dubai-based food trading company specializing in wholesale and retail distribution of high-quality food products for local and international markets.
          </motion.p>

          {/* Dual Action Buttons with hover shine and physics */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 flex-wrap"
          >
            {/* Primary Gold Pill Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onExploreCatalog}
              className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F5D061] via-[#E3BC63] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E5AC2E] text-[#071A2F] rounded-full font-black text-sm tracking-wide transition-all shadow-[0_10px_30px_rgba(200,155,60,0.45)] hover:shadow-[0_14px_40px_rgba(227,188,99,0.65)] cursor-pointer group"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 text-[#071A2F] group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Dark/Gold Outline Pill Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#071728]/85 hover:bg-[#C89B3C]/20 border border-[#C89B3C]/80 hover:border-[#E3BC63] text-white rounded-full font-bold text-sm tracking-wide transition-all backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#E3BC63]" />
              <span>Request a Quote</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 4. LUXURIOUS BOTTOM BAR WITH GOLD SILK RIBBON WAVE & 4 PILLARS */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full mt-auto">
        {/* Flowing Golden Silk Ribbon SVG Wave across the top of bottom bar */}
        <div className="w-full overflow-hidden leading-none -mb-[1px]">
          <svg 
            viewBox="0 0 1440 48" 
            fill="none" 
            className="w-full h-8 sm:h-12 preserve-3d animate-ribbon"
          >
            <defs>
              <linearGradient id="ribbonGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#F5D061" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#E3BC63" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#AA771C" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <path
              d="M0,24 C320,44 480,2 800,28 C1120,52 1280,10 1440,24 L1440,48 L0,48 Z"
              fill="#10355E"
            />
            <path
              d="M0,20 C320,40 480,0 800,24 C1120,48 1280,6 1440,20"
              stroke="url(#ribbonGold)"
              strokeWidth="2.5"
              fill="none"
              className="drop-shadow-[0_0_12px_rgba(227,188,99,0.7)]"
            />
          </svg>
        </div>

        {/* Bottom Bar Content Canvas in Vibrant Royal Navy */}
        <div className="bg-gradient-to-r from-[#10355E] via-[#133E72] to-[#10355E] backdrop-blur-2xl border-t border-[#C89B3C]/40 py-5 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1440px] mx-auto">
            {/* 4 Pillars with Custom Gold Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
              
              {/* 1. Premium Quality Products */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#123864] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v10" />
                    <path d="M9 10l3-3 3 3" />
                    <path d="M9 14l3 3 3-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    Premium Quality
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    Products
                  </p>
                </div>
              </motion.div>

              {/* 2. Wholesale & Retail Supply */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#123864] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <Truck className="w-5 h-5 text-[#E3BC63]" />
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    Wholesale &amp; Retail
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    Supply
                  </p>
                </div>
              </motion.div>

              {/* 3. Global Import & Export Network */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#123864] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <Globe className="w-5 h-5 text-[#E3BC63]" />
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    Global Import &amp; Export
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    Network
                  </p>
                </div>
              </motion.div>

              {/* 4. Trusted by Businesses Worldwide */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#123864] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <Shield className="w-5 h-5 text-[#E3BC63]" />
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    Trusted by Businesses
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    Worldwide
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

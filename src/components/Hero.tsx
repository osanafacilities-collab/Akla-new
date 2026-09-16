import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Shield, 
  Globe, 
  Truck, 
  Sparkles, 
  CheckCircle2,
  Camera,
  Upload
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { useSiteEditor } from '../context/SiteEditorContext';
import { EditableText } from './editor/EditableText';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onOpenQuote,
}) => {
  const { content, isEditMode, openImagePicker } = useSiteEditor();
  const { animations } = content;

  // Generate ambient floating golden sparkles
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    if (!animations.particles) {
      setParticles([]);
      return;
    }
    const p = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 3,
    }));
    setParticles(p);
  }, [animations.particles]);

  // Duration multiplier based on animation speed
  const speedDuration = !animations.enabled 
    ? 0 
    : animations.speed === 'slow' 
      ? 1.2 
      : animations.speed === 'fast' 
        ? 0.35 
        : 0.8;

  // Animation variants for hero text and components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animations.enabled ? 0.14 : 0,
        delayChildren: animations.enabled ? 0.1 : 0,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: animations.enabled ? 28 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: speedDuration, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[860px] lg:min-h-[940px] xl:min-h-[980px] w-full text-white overflow-hidden flex flex-col justify-between select-none bg-[#133A6B]"
    >
      {/* ========================================================================= */}
      {/* 1. HOMEPAGE BACKGROUND WITH CONTAINER SHIP AT SUNSET (hero-dubai-trade.jpg) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dubai Maritime Cargo Shipping at Sunset Background */}
        <div 
          className="absolute inset-0 bg-cover transition-all duration-1000 scale-100"
          style={{
            backgroundImage: `url("${content.hero.bgImage || '/hero-dubai-trade.jpg'}"), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=90")`,
            backgroundPosition: 'center 35%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.72) contrast(1.12) saturate(1.15)',
          }}
        />

        {/* Dynamic Maritime Golden Hour Ambient Glow & Text Contrast Protection */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, rgba(7, 26, 47, 0.90) 0%, rgba(19, 58, 107, 0.72) 42%, rgba(7, 26, 47, 0.35) 75%, rgba(7, 26, 47, 0.60) 100%),
                         linear-gradient(180deg, rgba(7, 26, 47, 0.55) 0%, transparent 45%, rgba(7, 26, 47, 0.90) 100%)`
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

      {/* Edit Mode Hero Background Button */}
      {isEditMode && (
        <button
          type="button"
          onClick={() => openImagePicker('hero.bgImage', content.hero.bgImage || '/hero-dubai-trade.jpg', 'Hero Background Photo')}
          className="absolute top-6 right-6 z-30 px-3.5 py-2 bg-[#071A2F]/95 hover:bg-[#1B5699] text-[#FDE68A] border border-[#C89B3C] rounded-xl text-xs font-bold flex items-center gap-2 shadow-2xl backdrop-blur-md cursor-pointer transition-all hover:scale-105"
        >
          <Camera className="w-4 h-4 text-[#FDE68A]" />
          <span>Change Hero Photo</span>
        </button>
      )}

      {/* Floating Interactive Live Cards (Desktop Right) */}
      <div className="hidden xl:flex flex-col gap-4 absolute right-12 top-36 z-20 pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className="bg-[#1A5495]/95 backdrop-blur-xl border border-[#C89B3C]/50 px-5 py-3.5 rounded-2xl shadow-[0_15px_35px_rgba(27,86,153,0.4)] flex items-center gap-3.5 cursor-pointer group animate-float luxury-sheen"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F5D061] to-[#C89B3C] text-[#071A2F] flex items-center justify-center font-black shadow-md group-hover:rotate-6 transition-transform">
            <Sparkles className="w-5 h-5 text-[#071A2F]" />
          </div>
          <div>
            <div className="text-[11px] font-black text-[#FDE68A] uppercase tracking-wider">
              <EditableText path="hero.floatingCard1Title" defaultText="Direct Mill Procurement" as="span" />
            </div>
            <div className="text-xs text-white/95 font-bold flex items-center gap-1">
              <AnimatedCounter to={100} suffix="%" duration={1800} />
              <span><EditableText path="hero.floatingCard1Sub" defaultText="Quality Inspected" as="span" /></span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className="bg-[#1A5495]/95 backdrop-blur-xl border border-[#C89B3C]/50 px-5 py-3.5 rounded-2xl shadow-[0_15px_35px_rgba(27,86,153,0.4)] flex items-center gap-3.5 cursor-pointer group animate-float-reverse luxury-sheen"
        >
          <div className="w-11 h-11 rounded-xl bg-[#2267B2] border border-[#C89B3C]/40 text-[#E3BC63] flex items-center justify-center font-black shadow-md group-hover:rotate-6 transition-transform">
            <Truck className="w-5 h-5 text-[#E3BC63]" />
          </div>
          <div>
            <div className="text-[11px] font-black text-[#FDE68A] uppercase tracking-wider">
              <EditableText path="hero.floatingCard2Title" defaultText="Fast-Track Logistics" as="span" />
            </div>
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
              initial={{ opacity: 0, y: animations.enabled ? 30 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: speedDuration, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditableText path="hero.titleLine1" defaultText="Your Trusted Partner in" as="span" />
            </motion.span>
            <motion.span 
              className="block text-gold-gradient animate-gold-shimmer drop-shadow-[0_4px_30px_rgba(227,188,99,0.55)]"
              initial={{ opacity: 0, y: animations.enabled ? 30 : 0, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: speedDuration, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditableText path="hero.titleLine2" defaultText="Global Food Trading" as="span" />
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
              <EditableText path="hero.bullet1" defaultText="Quality Products" as="span" />
            </motion.span>
            <span className="text-[#E3BC63] font-black">|</span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-white drop-shadow-sm flex items-center gap-1.5 cursor-default transition-transform"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FDE68A]" />
              <EditableText path="hero.bullet2" defaultText="Competitive Prices" as="span" />
            </motion.span>
            <span className="text-[#E3BC63] font-black">|</span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-white drop-shadow-sm flex items-center gap-1.5 cursor-default transition-transform"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FDE68A]" />
              <EditableText path="hero.bullet3" defaultText="Reliable Supply" as="span" />
            </motion.span>
          </motion.div>

          {/* Description with high-contrast text */}
          <motion.div variants={itemVariants}>
            <EditableText 
              path="hero.description" 
              defaultText="Akla Foodstuff Trading LLC is a Dubai-based food trading company specializing in wholesale and retail distribution of high-quality food products for local and international markets." 
              as="p" 
              multiline 
              className="text-[15.5px] sm:text-[17px] text-[#DCE5F0] leading-relaxed max-w-[640px] mb-8 font-normal drop-shadow-md block" 
            />
          </motion.div>

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
              <EditableText path="hero.btn1Text" defaultText="Explore Our Products" as="span" />
              <ArrowRight className="w-4 h-4 text-[#071A2F] group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Dark/Gold Outline Pill Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#133A6B]/85 hover:bg-[#C89B3C]/20 border border-[#C89B3C]/80 hover:border-[#E3BC63] text-white rounded-full font-bold text-sm tracking-wide transition-all backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#E3BC63]" />
              <EditableText path="hero.btn2Text" defaultText="Request a Quote" as="span" />
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
              fill="#1A5495"
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
        <div className="bg-gradient-to-r from-[#1A5495] via-[#2064B0] to-[#1A5495] backdrop-blur-2xl border-t border-[#C89B3C]/40 py-5 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1440px] mx-auto">
            {/* 4 Pillars with Custom Gold Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
              
              {/* 1. Premium Quality Products */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#164D88] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v10" />
                    <path d="M9 10l3-3 3 3" />
                    <path d="M9 14l3 3 3-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    <EditableText path="hero.pillar1Title" defaultText="Premium Quality" as="span" />
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    <EditableText path="hero.pillar1Sub" defaultText="Products" as="span" />
                  </p>
                </div>
              </motion.div>

              {/* 2. Wholesale & Retail Supply */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#164D88] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <Truck className="w-5 h-5 text-[#E3BC63]" />
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    <EditableText path="hero.pillar2Title" defaultText="Wholesale & Retail" as="span" />
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    <EditableText path="hero.pillar2Sub" defaultText="Supply" as="span" />
                  </p>
                </div>
              </motion.div>

              {/* 3. Global Import & Export Network */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#164D88] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <Globe className="w-5 h-5 text-[#E3BC63]" />
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    <EditableText path="hero.pillar3Title" defaultText="Global Import & Export" as="span" />
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    <EditableText path="hero.pillar3Sub" defaultText="Network" as="span" />
                  </p>
                </div>
              </motion.div>

              {/* 4. Trusted by Businesses Worldwide */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-[#E3BC63] flex items-center justify-center text-[#E3BC63] bg-[#164D88] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,188,99,0.5)] transition-all shadow-[0_0_15px_rgba(227,188,99,0.2)]">
                  <Shield className="w-5 h-5 text-[#E3BC63]" />
                </div>
                <div>
                  <h4 className="text-white text-[13.5px] font-bold leading-snug group-hover:text-[#FDE68A] transition-colors">
                    <EditableText path="hero.pillar4Title" defaultText="Trusted by Businesses" as="span" />
                  </h4>
                  <p className="text-xs text-[#CBD5E1]">
                    <EditableText path="hero.pillar4Sub" defaultText="Worldwide" as="span" />
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

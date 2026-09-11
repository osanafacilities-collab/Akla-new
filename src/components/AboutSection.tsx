import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Sparkles, Check, TrendingUp, ShieldCheck, Factory, Truck } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sourcing' | 'logistics' | 'certification'>('sourcing');

  const stats = [
    { value: 15, suffix: '+', label: 'Years Market Heritage', sub: 'Established 2011 in Dubai' },
    { value: 40, suffix: '+', label: 'Global Trade Corridors', sub: 'Import & Re-Export Links' },
    { value: 50, suffix: 'k+', label: 'Metric Tons Annually', sub: 'Bulk Container Movement' },
    { value: 100, suffix: '%', label: 'FoodWatch Compliant', sub: 'Dubai Municipality Audited' },
  ];

  const checks = [
    'Direct Origin Farm & Mill Contracting',
    'Competitive Container & Break-Bulk Rates',
    'Wholesale FCL & FMCG Retail Supply',
    'Dedicated Commercial Account Officers',
    'Strategic Dubai Free Zone Storage (Jebel Ali / DIP)',
    'FoodWatch & HACCP Certified Standards',
  ];

  const tabsContent = {
    sourcing: {
      title: 'Direct Agricultural Contracting',
      desc: 'We partner directly with pre-vetted rice mills, crushing plants, pulse growers, and orchards in India, Thailand, Brazil, and East Africa, eliminating intermediaries to guarantee provenance and competitive landed pricing.',
      icon: <Factory className="w-5 h-5 text-[#C89B3C]" />
    },
    logistics: {
      title: 'Multimodal Cold-Chain & Buffer Stock',
      desc: 'Positioned at the crossroads of Jebel Ali Port and Dubai World Central, our temperature-controlled warehousing and refrigerated transit fleet ensure unbroken cold chains from container discharge to final customer dispatch.',
      icon: <Truck className="w-5 h-5 text-[#C89B3C]" />
    },
    certification: {
      title: 'Rigorous Municipality & Lab Audit',
      desc: 'Every inbound container undergoes mandatory phytosanitary inspection, SGS lot testing, moisture grading, and Dubai FoodWatch trace registration before entering local wholesale circulation.',
      icon: <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative border-b border-[#E2E8F0] text-[#0F172A] overflow-hidden">
      {/* Subtle ambient warm lighting accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C89B3C]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#133E72]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-[1380px] w-[92%] mx-auto space-y-20 relative z-10">
        
        {/* Main 2-Column Overview */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* Left: About Image with Floating Quality Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-[460px] sm:h-[540px] relative rounded-2xl overflow-hidden bg-cover bg-center border border-[#E2E8F0] shadow-[0_20px_50px_rgba(19,62,114,0.12)] group"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85")`
            }}
          >
            {/* Subtle natural gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#133E72]/90 via-[#133E72]/20 to-transparent" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C89B3C]/60 transition-colors rounded-2xl pointer-events-none" />

            {/* Floating Luxury Quality Badge with subtle float animation */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute z-10 bottom-6 sm:bottom-8 left-6 sm:left-8 bg-[#133E72]/95 backdrop-blur-xl text-white py-5 px-7 min-w-[240px] rounded-2xl shadow-[0_15px_40px_rgba(19,62,114,0.4)] border border-[#C89B3C]/60"
            >
              <div className="flex items-center gap-2 text-[#E3BC63] text-xs font-black uppercase tracking-wider mb-1">
                <Award className="w-4 h-4 text-[#E3BC63]" />
                <span>Excellence in Trade</span>
              </div>
              <strong className="text-2xl sm:text-[28px] font-black font-heading block text-white leading-tight">
                Quality First
              </strong>
              <span className="text-xs text-[#CBD5E1] font-medium block mt-1.5">
                Professional Food Trading Solutions
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Narrative & Accreditations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-[#C89B3C] font-black tracking-[2.5px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#FFF8EB] border border-[#F5D061]/60 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>ABOUT AKLA FOODSTUFF</span>
            </div>

            {/* Heading */}
            <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] tracking-tight font-heading font-black text-[#133E72]">
              Your Reliable Partner in <br />
              <span className="text-gold-gradient">Global Food Trading</span>
            </h2>

            {/* Lead paragraph */}
            <p className="text-[17px] sm:text-[18px] text-[#334155] leading-relaxed font-medium">
              Akla Foodstuff Trading LLC is a Dubai-based food trading company supplying quality products to businesses, institutional buyers and consumers across the UAE and international markets.
            </p>

            {/* Subparagraph */}
            <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] leading-relaxed">
              Our comprehensive portfolio covers essential food categories including grains, cereals, legumes, fresh fruits and vegetables, beverages, snacks, flour, eggs, ghee, edible oils, and selected seafood products.
            </p>

            {/* Checks Grid with animated hover bounce */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[#E2E8F0]">
              {checks.map((check, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-3 text-[13.5px] font-semibold text-[#1E293B] p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#C89B3C]/70 transition-all cursor-default shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFF8EB] text-[#C89B3C] flex items-center justify-center text-xs shrink-0 border border-[#F5D061]/60">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{check}</span>
                </motion.div>
              ))}
            </div>

            {/* Location footnote */}
            <div className="pt-2 text-xs text-[#64748B]">
              Commercial Trade License No: CN-8947213 &bull; Registered with Dubai Chamber of Commerce
            </div>
          </motion.div>

        </div>

        {/* Dynamic Animated Statistics Running Counters Strip from 0 to maximum */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-2xl shadow-[0_4px_20px_rgba(19,62,114,0.06)] hover:border-[#C89B3C] hover:shadow-[0_12px_30px_rgba(200,155,60,0.18)] transition-all group luxury-sheen"
            >
              <div className="text-3xl sm:text-4xl font-black font-heading text-[#133E72] group-hover:text-[#C89B3C] transition-colors flex items-baseline">
                <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} />
              </div>
              <div className="text-sm font-bold text-[#1E293B] mt-1.5">
                {s.label}
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Animated Pillars Tabs */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#C89B3C]">HOW WE OPERATE</span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-[#133E72] mt-0.5">Operational Pillars of Akla</h3>
            </div>

            {/* Tab Switches */}
            <div className="flex items-center gap-2 p-1.5 bg-white border border-[#E2E8F0] rounded-xl self-start sm:self-auto shadow-xs">
              {(['sourcing', 'logistics', 'certification'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                    activeTab === tab 
                      ? 'bg-[#133E72] text-white shadow-sm' 
                      : 'text-[#64748B] hover:text-[#133E72]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="pt-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF8EB] border border-[#F5D061]/60 flex items-center justify-center shrink-0 shadow-xs">
                {tabsContent[activeTab].icon}
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#133E72]">
                  {tabsContent[activeTab].title}
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed mt-1 max-w-3xl">
                  {tabsContent[activeTab].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

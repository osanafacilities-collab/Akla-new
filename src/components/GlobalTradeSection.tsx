import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe2, Ship, Plane, ShieldCheck, Compass, Sparkles, Navigation } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const GlobalTradeSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('MIDDLE EAST');

  return (
    <section id="global" className="py-24 lg:py-32 bg-gradient-to-b from-[#133E72] via-[#164E88] to-[#10355E] text-white border-b border-[#C89B3C]/35 relative overflow-hidden">
      <div className="max-w-[1380px] w-[92%] mx-auto">
        
        {/* Top Header Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-14">
          
          <div className="lg:col-span-7 space-y-3.5">
            <div className="inline-flex items-center gap-2 text-[#E3BC63] font-black tracking-[2.5px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#E3BC63]/15 border border-[#E3BC63]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GLOBAL TRADE NETWORK</span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] tracking-tight font-heading font-black text-white">
              Dubai at the Heart of <br />
              <span className="text-gold-gradient">Global Food Trade</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#CBD5E1] leading-relaxed max-w-[650px]">
              Strategically positioned in Dubai, Akla seamlessly links high-yield agricultural producer nations with rapid commercial distribution corridors across the GCC, Asia, Africa, and Europe.
            </p>
          </div>

          <div className="lg:col-span-5 flex items-center lg:justify-end">
            <div className="bg-[#184E88]/95 backdrop-blur-xl p-6 border border-[#C89B3C]/45 rounded-2xl w-full sm:w-auto shadow-[0_15px_35px_rgba(19,62,114,0.4)]">
              <div className="font-extrabold text-[11px] tracking-[1.5px] text-[#E3BC63] uppercase mb-3">
                <span>Select Active Trade Corridors:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {['MIDDLE EAST', 'ASIA', 'AFRICA', 'EUROPE'].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-4 py-2 text-xs font-black rounded-full uppercase tracking-wider transition-all cursor-pointer border ${
                      selectedRegion === reg
                        ? 'bg-gradient-to-r from-[#F5D061] to-[#C89B3C] border-transparent text-[#071A2F] shadow-[0_0_15px_rgba(200,155,60,0.5)] scale-105'
                        : 'border-white/20 text-[#CBD5E1] hover:border-[#E3BC63] hover:text-[#E3BC63]'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Global Trade Map Canvas */}
        <div 
          className="h-[460px] sm:h-[530px] relative rounded-2xl overflow-hidden border border-[#C89B3C]/40 shadow-[0_25px_60px_rgba(19,62,114,0.4)]"
          style={{
            background: 'radial-gradient(circle at 57% 48%, #1F5F9E 0%, #144275 60%, #0F3158 100%)'
          }}
        >
          {/* Real-Time Live Shipping Telemetry Bar across top of map */}
          <div className="absolute top-0 left-0 right-0 z-30 bg-[#0E2C4E]/90 backdrop-blur-md border-b border-[#C89B3C]/35 px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs text-white/90 overflow-x-auto whitespace-nowrap gap-6 scrollbar-none">
            <div className="flex items-center gap-2 text-[#E3BC63] font-black tracking-wider text-[11px] uppercase shrink-0">
              <span>LIVE VESSEL &amp; ROAD TELEMETRY:</span>
            </div>
            <div className="flex items-center gap-6 text-[11.5px] text-[#CBD5E1] font-mono">
              <span className="flex items-center gap-1.5 text-white/95">
                <Ship className="w-3.5 h-3.5 text-[#FDE68A]" />
                <span>M/V MAERSK ARABIA &bull; 2,400 MT Basmati Rice &bull; Discharging Jebel Ali Berth 14</span>
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="flex items-center gap-1.5 text-white/95">
                <Plane className="w-3.5 h-3.5 text-[#FDE68A]" />
                <span>EK Cargo 904 &bull; Fresh Organic Produce &bull; Customs Cleared DXB DWC</span>
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="flex items-center gap-1.5 text-white/95">
                <Navigation className="w-3.5 h-3.5 text-[#FDE68A]" />
                <span>Overland Convoy TX-4 &bull; 180 MT Sunflower Oil &bull; Dispatched for Riyadh &amp; Muscat</span>
              </span>
            </div>
          </div>

          {/* Subtle World Grid Lines */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />

          {/* SVG Animated Route Lines with dynamic flow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
            {/* Europe to Dubai */}
            <path 
              d="M280,180 Q400,160 570,240" 
              stroke="#F5D061" 
              strokeWidth="2.5" 
              strokeDasharray="8 6" 
              fill="none" 
              className="animate-trade-flow drop-shadow-[0_0_10px_rgba(227,188,99,0.8)]"
            />
            {/* Africa to Dubai */}
            <path 
              d="M400,340 Q480,310 570,240" 
              stroke="#F5D061" 
              strokeWidth="2.5" 
              strokeDasharray="8 6" 
              fill="none" 
              className="animate-trade-flow drop-shadow-[0_0_10px_rgba(227,188,99,0.8)]"
            />
            {/* Asia to Dubai */}
            <path 
              d="M790,260 Q680,210 570,240" 
              stroke="#F5D061" 
              strokeWidth="2.5" 
              strokeDasharray="8 6" 
              fill="none" 
              className="animate-trade-flow drop-shadow-[0_0_10px_rgba(227,188,99,0.8)]"
            />
            {/* Middle East to Dubai */}
            <path 
              d="M500,220 Q530,220 570,240" 
              stroke="#F5D061" 
              strokeWidth="2.5" 
              strokeDasharray="8 6" 
              fill="none" 
              className="animate-trade-flow drop-shadow-[0_0_10px_rgba(227,188,99,0.8)]"
            />

            {/* Moving Ship 1 on Asia corridor */}
            <motion.circle 
              r="4.5"
              fill="#FFFFFF"
              stroke="#E3BC63"
              strokeWidth="2"
              animate={{ 
                cx: [790, 680, 570], 
                cy: [260, 210, 240],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Moving Ship 2 on Europe corridor */}
            <motion.circle 
              r="4.5"
              fill="#FFFFFF"
              stroke="#E3BC63"
              strokeWidth="2"
              animate={{ 
                cx: [280, 400, 570], 
                cy: [180, 160, 240],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />

            {/* Moving Vessel on Africa corridor */}
            <motion.circle 
              r="4.5"
              fill="#FFFFFF"
              stroke="#E3BC63"
              strokeWidth="2"
              animate={{ 
                cx: [400, 480, 570], 
                cy: [340, 310, 240],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Central Dubai Hub with Multiple Expanding Radar Waves */}
          <div className="absolute left-[57%] top-[48%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex flex-col items-center">
              {/* Expanding Radar Waves */}
              <div className="absolute w-12 h-12 rounded-full border-2 border-[#E3BC63]/70 animate-radar pointer-events-none -mt-3" />
              <div className="absolute w-20 h-20 rounded-full border border-[#E3BC63]/40 animate-radar pointer-events-none -mt-7" style={{ animationDelay: '1.4s' }} />

              <div className="w-7 h-7 rounded-full bg-white shadow-[0_0_0_12px_rgba(200,155,60,0.5)] border-3 border-[#E3BC63] z-10 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#133E72]" />
              </div>
              <div className="mt-3 whitespace-nowrap text-[#FDE68A] font-black text-xs sm:text-[13px] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#133E72]/95 px-3.5 py-1.5 rounded-full border border-[#C89B3C]/70 shadow-xl">
                DUBAI &bull; UAE (CENTRAL HUB)
              </div>
            </div>
          </div>

          {/* Europe Hub */}
          <div className="absolute left-[28%] top-[36%] -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group" onClick={() => setSelectedRegion('EUROPE')}>
            <div className="w-4 h-4 rounded-full bg-[#E3BC63] shadow-[0_0_0_8px_rgba(227,188,99,0.3)] group-hover:scale-130 transition-transform" />
            <div className="mt-2 text-center text-white font-extrabold text-[11px] tracking-wider uppercase group-hover:text-[#E3BC63] bg-[#0E2C4E]/85 px-2 py-0.5 rounded backdrop-blur-xs">
              EUROPE
            </div>
          </div>

          {/* Africa Hub */}
          <div className="absolute left-[40%] top-[68%] -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group" onClick={() => setSelectedRegion('AFRICA')}>
            <div className="w-4 h-4 rounded-full bg-[#E3BC63] shadow-[0_0_0_8px_rgba(227,188,99,0.3)] group-hover:scale-130 transition-transform" />
            <div className="mt-2 text-center text-white font-extrabold text-[11px] tracking-wider uppercase group-hover:text-[#E3BC63] bg-[#0E2C4E]/85 px-2 py-0.5 rounded backdrop-blur-xs">
              AFRICA
            </div>
          </div>

          {/* Asia Hub */}
          <div className="absolute left-[79%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group" onClick={() => setSelectedRegion('ASIA')}>
            <div className="w-4 h-4 rounded-full bg-[#E3BC63] shadow-[0_0_0_8px_rgba(227,188,99,0.3)] group-hover:scale-130 transition-transform" />
            <div className="mt-2 text-center text-white font-extrabold text-[11px] tracking-wider uppercase group-hover:text-[#E3BC63] bg-[#0E2C4E]/85 px-2 py-0.5 rounded backdrop-blur-xs">
              ASIA
            </div>
          </div>

          {/* Middle East Hub */}
          <div className="absolute left-[50%] top-[44%] -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group" onClick={() => setSelectedRegion('MIDDLE EAST')}>
            <div className="w-4 h-4 rounded-full bg-[#E3BC63] shadow-[0_0_0_8px_rgba(227,188,99,0.3)] group-hover:scale-130 transition-transform" />
            <div className="mt-2 text-center text-white font-extrabold text-[11px] tracking-wider uppercase group-hover:text-[#E3BC63] bg-[#0E2C4E]/85 px-2 py-0.5 rounded backdrop-blur-xs">
              MIDDLE EAST
            </div>
          </div>

        </div>

        {/* 4 Live Running Number Telemetry Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-8">
          {[
            {
              title: 'Active Trade Corridors',
              to: 40,
              suffix: '+',
              icon: <Globe2 className="w-5 h-5 text-[#E3BC63]" />,
              desc: 'Connecting Asia, GCC, Africa, & Europe',
            },
            {
              title: 'Live Tonnage In-Transit',
              to: 24500,
              suffix: ' MT',
              icon: <Ship className="w-5 h-5 text-[#E3BC63]" />,
              desc: 'Ocean FCL & GCC Overland Reefers',
            },
            {
              title: 'Liner & Feeder Vessels',
              to: 18,
              suffix: ' Active',
              icon: <Compass className="w-5 h-5 text-[#E3BC63]" />,
              desc: 'Continuous Jebel Ali Berth Operations',
            },
            {
              title: 'FoodWatch & Customs',
              to: 100,
              suffix: '% Compliant',
              icon: <ShieldCheck className="w-5 h-5 text-[#E3BC63]" />,
              desc: 'Dubai Municipality Lab Certified',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#144275]/80 backdrop-blur-xl border border-[#C89B3C]/40 shadow-[0_8px_25px_rgba(19,62,114,0.3)] flex flex-col justify-between luxury-sheen group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A5393] border border-[#C89B3C]/50 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {item.icon}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter to={item.to} suffix={item.suffix} duration={2000} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] mt-1">
                  {item.title}
                </div>
                <p className="text-[12px] text-[#CBD5E1] mt-1.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

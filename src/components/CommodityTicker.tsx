import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Ship, ShieldCheck, TrendingUp, PackageCheck, Truck } from 'lucide-react';

export const CommodityTicker: React.FC = () => {
  const tickerItems = [
    { label: 'Halal Whole Chicken & Cuts', status: 'SIF Brazil Certified Reefer', icon: '🍗', highlight: 'Reefer Dispatches' },
    { label: 'Basmati 1121 Sella Rice', status: 'DIP Dubai Ready Stock', icon: '🌾', highlight: 'Immediate Dispatch' },
    { label: 'Halal Beef & Lamb Carcasses', status: 'GCC FoodWatch Compliant', icon: '🥩', highlight: 'Weekly Inbound' },
    { label: 'Refined Palm Olein & Ghee', status: 'Direct Mill Contracted', icon: '🛢️', highlight: 'FOB / CIF Rates' },
    { label: 'Australian Desi Chickpeas & Lentils', status: 'Container Lots Inbound', icon: '🫘', highlight: '100% Origin Vetted' },
    { label: 'Jebel Ali Terminal 2', status: 'Customs Cleared', icon: '🚢', highlight: '48hr Berth Transit' },
    { label: 'Dubai FoodWatch Registration', status: 'Municipality Audited', icon: '🛡️', highlight: '100% Compliant' },
    { label: 'Multimodal Reefer Transport', status: 'GCC Overland Fleet Active', icon: '🚛', highlight: 'Temp Monitored' },
    { label: 'Wholesale Orders & Logistics', status: 'Proforma Turnaround < 2h', icon: '⚡', highlight: 'Active Logistics' },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-gradient-to-r from-[#16487E] via-[#1F5E9E] to-[#16487E] border-y border-[#C89B3C]/40 relative overflow-hidden py-3 text-xs select-none shadow-[0_4px_20px_rgba(27,86,153,0.25)] z-30">
      {/* Ambient gold glow on left and right fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#16487E] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#16487E] to-transparent z-10 pointer-events-none" />

      {/* Floating static badge on the far left */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center gap-4">
        <div className="shrink-0 flex items-center gap-2 bg-[#2165AE] border border-[#C89B3C]/60 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-[#FDE68A] shadow-xs z-20">
          <span className="hidden sm:inline">LIVE COMMODITY FEED</span>
          <span className="sm:hidden">FEED</span>
        </div>

        {/* Continuous Smooth Infinite Marquee */}
        <div className="overflow-hidden flex-1 relative flex items-center">
          <div className="animate-ticker flex items-center gap-8 text-[#E2E8F0] font-medium whitespace-nowrap">
            {duplicatedItems.map((item, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-[#C89B3C]/15 border border-white/5 hover:border-[#C89B3C]/40 transition-colors cursor-default"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="font-bold text-white text-[12.5px]">{item.label}:</span>
                <span className="text-[#CBD5E1] text-[12px]">{item.status}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-[#C89B3C]/25 text-[#FDE68A] text-[10px] font-black tracking-wide border border-[#C89B3C]/40">
                  {item.highlight}
                </span>
                <span className="text-white/20 mx-1">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

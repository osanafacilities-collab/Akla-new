import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, UtensilsCrossed, Store, PackageCheck, Ship, Coffee, Check } from 'lucide-react';

export const WhoWeServeSection: React.FC = () => {
  const industries = [
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-[#C89B3C]" />,
      name: 'HORECA',
      desc: 'Hotels, Luxury Resorts, Fine Dining & Flight Catering',
      badge: 'Scheduled Daily Dispatches',
    },
    {
      icon: <Store className="w-6 h-6 text-[#C89B3C]" />,
      name: 'Retail Chains',
      desc: 'Hypermarkets, Supermarket Chains & Convenience Stores',
      badge: 'Shelf-Ready Packs',
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-[#C89B3C]" />,
      name: 'Wholesale & Re-Export',
      desc: 'Regional Bulk Buyers, Re-Exporters & Cash-and-Carry Outlets',
      badge: 'Volume Container Rates',
    },
    {
      icon: <Ship className="w-6 h-6 text-[#C89B3C]" />,
      name: 'International Trade',
      desc: 'Cross-Border Importers & Ocean Freight Commodity Brokers',
      badge: 'CIF & FOB Contracting',
    },
    {
      icon: <Coffee className="w-6 h-6 text-[#C89B3C]" />,
      name: 'Foodservice & Catering',
      desc: 'Commercial Kitchens, Industrial Canteens & Institutional Buyers',
      badge: 'Certified Quality Lots',
    },
  ];

  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#F1F5F9] border-b border-[#E2E8F0] text-[#0F172A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C89B3C]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1380px] w-[92%] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[780px] mx-auto mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 text-[#C89B3C] font-black tracking-[2.5px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#FFF8EB] border border-[#F5D061]/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>COMMERCIAL SECTORS</span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] tracking-tight font-heading font-black text-[#133E72]">
            Supporting Businesses Across the <span className="text-gold-gradient">Food Industry</span>
          </h2>
          <p className="text-base sm:text-[17px] text-[#475569] leading-relaxed mx-auto max-w-2xl">
            From multi-branch supermarket chains to five-star hospitality kitchens, Akla provides specialized contract fulfillment and scheduled replenishment.
          </p>
        </div>

        {/* 5 Industry Cards Grid with hover spring and badge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-7 text-center rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(19,62,114,0.06)] transition-all duration-300 hover:border-[#C89B3C] hover:shadow-[0_18px_40px_rgba(200,155,60,0.16)] group flex flex-col justify-between cursor-default luxury-sheen"
            >
              <div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FFF8EB] border border-[#F5D061]/60 flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {ind.icon}
                </div>

                <h3 className="text-[19px] font-heading font-bold text-[#133E72] mb-2 group-hover:text-[#C89B3C] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F1F5F9]">
                <span className="inline-block text-[11px] font-bold text-[#133E72] bg-[#F8FAFC] group-hover:bg-[#FFF8EB] group-hover:text-[#B8860B] px-3 py-1 rounded-full border border-[#E2E8F0] transition-colors">
                  {ind.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

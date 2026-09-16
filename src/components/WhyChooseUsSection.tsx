import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Truck, Layers, Globe, Users2, Sparkles, Check } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const WhyChooseUsSection: React.FC = () => {
  const whyPoints = [
    {
      num: '01',
      title: 'Quality Assured Products',
      desc: 'Carefully vetted farm origins and certified processing mills meeting the highest UAE and international food safety standards.',
      metricNode: (
        <span className="flex items-center gap-1">
          <AnimatedCounter to={100} suffix="%" duration={1600} />
          <span>Origin Vetted</span>
        </span>
      ),
      icon: <Award className="w-5 h-5 text-[#C89B3C]" />,
    },
    {
      num: '02',
      title: 'Competitive Market Pricing',
      desc: 'Direct mill sourcing and large-volume vessel procurement enabling aggressive wholesale and retail pricing structures.',
      metricNode: <span>Zero Middleman Markup</span>,
      icon: <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />,
    },
    {
      num: '03',
      title: 'Reliable Supply Continuity',
      desc: 'Scheduled container dispatches and local ready-stock buffers in Dubai ensuring uninterrupted business continuity.',
      metricNode: (
        <span className="flex items-center gap-1">
          <AnimatedCounter to={99.4} suffix="%" duration={1800} />
          <span>On-Time Dispatch</span>
        </span>
      ),
      icon: <Truck className="w-5 h-5 text-[#C89B3C]" />,
    },
    {
      num: '04',
      title: 'Diverse Product Portfolio',
      desc: 'Consolidate multiple essential food categories—from Basmati grains to edible oils and dairy—under one dependable partner.',
      metricNode: (
        <span className="flex items-center gap-1">
          <AnimatedCounter to={10} suffix="+" duration={1400} />
          <span>Product Categories</span>
        </span>
      ),
      icon: <Layers className="w-5 h-5 text-[#C89B3C]" />,
    },
    {
      num: '05',
      title: 'Strategic Dubai Gateway',
      desc: "Capitalizing on Jebel Ali Port's maritime logistics connectivity and Dubai's duty-efficient free zone infrastructure.",
      metricNode: <span>Jebel Ali &amp; DIP Hub</span>,
      icon: <Globe className="w-5 h-5 text-[#C89B3C]" />,
    },
    {
      num: '06',
      title: 'Long-Term Strategic Alliances',
      desc: 'We cultivate transparent relationships founded on commercial integrity, consistency, and customized supply agreements.',
      metricNode: <span>Dedicated Account Desk</span>,
      icon: <Users2 className="w-5 h-5 text-[#C89B3C]" />,
    },
  ];

  return (
    <section id="why" className="scroll-mt-24 py-24 lg:py-32 bg-white border-b border-[#E2E8F0] text-[#0F172A] relative overflow-hidden">
      {/* Subtle ambient warm lighting accents */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#C89B3C]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1380px] w-[92%] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[780px] mx-auto mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 text-[#C89B3C] font-black tracking-[2.5px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#FFF8EB] border border-[#F5D061]/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>THE AKLA ADVANTAGE</span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] tracking-tight font-heading font-black text-[#1B5699]">
            Built on Quality, Reliability &amp; <span className="text-gold-gradient">Partnership</span>
          </h2>
          <p className="text-base sm:text-[17px] text-[#475569] leading-relaxed mx-auto max-w-2xl">
            Why leading commercial buyers, supermarket chains, and GCC hospitality brands select Akla as their primary food trading counterpart.
          </p>
        </div>

        {/* 6 Cards Grid with staggered reveal and spring hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="p-8 sm:p-9 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(27,86,153,0.05)] transition-all duration-300 hover:border-[#C89B3C] hover:shadow-[0_16px_35px_rgba(200,155,60,0.15)] group relative flex flex-col justify-between luxury-sheen"
            >
              {/* Header row with Icon and Numeric badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF8EB] border border-[#F5D061]/60 text-[#C89B3C] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black font-mono text-[#94A3B8] group-hover:text-[#C89B3C] transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-[19px] font-heading font-bold text-[#1B5699] mb-2.5 group-hover:text-[#C89B3C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom metric tag with animated numbers */}
              <div className="pt-5 mt-5 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                <span className="font-bold text-[#1B5699] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C89B3C] stroke-[3]" />
                  <span>{item.metricNode}</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8] group-hover:text-[#C89B3C] transition-colors">
                  Verified &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

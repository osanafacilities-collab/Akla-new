import React from 'react';
import { 
  Building2, 
  Globe2, 
  BadgeCheck,
  Warehouse,
  Truck,
  PackageCheck,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/companyInfo';

export const AboutAndCertifications: React.FC = () => {
  return (
    <>
      {/* Modern High-Impact Metrics Strip */}
      <section className="bg-[#0D1914] text-white py-12 px-4 sm:px-8 border-y border-[#1E3329] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {COMPANY_INFO.tradeStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#D4AF37]">
                {stat.label}
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#9BB1A7]">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial Corporate Narrative */}
      <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#E5DFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Story Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] text-[#866D38] text-xs font-bold uppercase tracking-widest border border-[#E4DCCE]">
                <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Corporate Heritage &bull; Est. {COMPANY_INFO.established}</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#0D1C15] tracking-tight leading-tight">
                An Established Wholesale Partner in Dubai’s Global Food Gateway
              </h2>

              <div className="space-y-4 text-[#4E6357] text-sm leading-relaxed font-normal">
                <p>
                  Established in Dubai, <strong className="text-[#0D1C15]">Akla Foodstuff Trading LLC</strong> operates as a leading wholesale importer, stockist, and regional distributor of high-grade agro-commodities and institutional food essentials.
                </p>
                <p>
                  With our commercial sales office in the vibrant Al Quoz area in Dubai and extensive climate-controlled warehousing in Dubai, we bridge leading farm cooperatives and mills in India, Pakistan, Australia, Canada, and Southeast Asia directly with hypermarkets, wholesalers, and catering corporations across the UAE and GCC.
                </p>
                <p>
                  Every consignment handled by Akla meets stringent food safety criteria and Gulf Standardization Organization (GSO) health standards, backed by full Dubai Municipality approval.
                </p>
              </div>

              {/* Verified Legal Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#E3DCCF] text-xs">
                  <span className="text-[#7F9488] block text-[9px] uppercase font-bold tracking-wider">
                    DED Commercial License
                  </span>
                  <span className="font-mono font-bold text-[#0D1C15] text-sm mt-0.5 block">
                    {COMPANY_INFO.commercialLicenseNo}
                  </span>
                </div>
                <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#E3DCCF] text-xs">
                  <span className="text-[#7F9488] block text-[9px] uppercase font-bold tracking-wider">
                    Dubai Chamber Reg
                  </span>
                  <span className="font-mono font-bold text-[#0D1C15] text-sm mt-0.5 block">
                    #{COMPANY_INFO.dubaiChamberNo}
                  </span>
                </div>
                <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#E3DCCF] text-xs col-span-2 sm:col-span-1">
                  <span className="text-[#7F9488] block text-[9px] uppercase font-bold tracking-wider">
                    Headquartered In
                  </span>
                  <span className="font-mono font-bold text-[#0D1C15] text-sm mt-0.5 block">
                    Dubai, UAE
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Origin Map Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-[#FAF8F3] rounded-2xl p-6 sm:p-8 border border-[#E2D9CB] space-y-5 shadow-modern-sm"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#ECE5D7]">
                <h3 className="font-heading font-bold text-base text-[#0D1C15] flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#C99C35]" />
                  <span>Direct Import Corridors</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#866D38]">
                  Farm-to-Port
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 bg-white rounded-xl border border-[#E3DCCF] space-y-1 shadow-2xs hover:border-[#C99C35] transition-colors">
                  <div className="font-bold text-[#0D1C15] flex items-center justify-between">
                    <span>India &amp; Pakistan</span>
                    <span className="text-[10px] text-[#423315] bg-[#F4EFE6] px-2 py-0.5 rounded font-bold border border-[#D5CABB]">
                      Basmati Rice
                    </span>
                  </div>
                  <p className="text-[#55695E] text-[11px] leading-relaxed">
                    Long-term contracted mills in Punjab and Haryana for 1121 Steam, Golden Sella, and Chakki Atta.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E3DCCF] space-y-1 shadow-2xs hover:border-[#C99C35] transition-colors">
                  <div className="font-bold text-[#0D1C15] flex items-center justify-between">
                    <span>Australia &amp; Canada</span>
                    <span className="text-[10px] text-[#423315] bg-[#F4EFE6] px-2 py-0.5 rounded font-bold border border-[#D5CABB]">
                      Pulses &amp; Lentils
                    </span>
                  </div>
                  <p className="text-[#55695E] text-[11px] leading-relaxed">
                    Sortex-cleaned red split lentils, jumbo Kabuli chickpeas (8mm–12mm), and green whole peas.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E3DCCF] space-y-1 shadow-2xs hover:border-[#C99C35] transition-colors">
                  <div className="font-bold text-[#0D1C15] flex items-center justify-between">
                    <span>Guatemala &amp; Southeast Asia</span>
                    <span className="text-[10px] text-[#423315] bg-[#F4EFE6] px-2 py-0.5 rounded font-bold border border-[#D5CABB]">
                      Spices &amp; Oils
                    </span>
                  </div>
                  <p className="text-[#55695E] text-[11px] leading-relaxed">
                    Whole green cardamom (8mm Bold), black pepper, cloves, and refined pure sunflower &amp; palm olein oil.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trade Edge Section with 4 Animated Cards */}
      <section id="why-us" className="py-16 sm:py-24 bg-[#F5F2EB] border-b border-[#E5DFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#866D38]">
              Commercial Reliability
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#0D1C15] tracking-tight">
              Why Wholesale Buyers Choose Akla
            </h2>
            <p className="text-xs sm:text-sm text-[#506358] leading-relaxed">
              Dependable bulk commodity supply backed by prime Dubai warehousing, verified credentials, and rapid regional distribution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#D8CEBC] shadow-modern-sm hover:shadow-modern-xl transition-all space-y-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#D4AF37] flex items-center justify-center border border-[#E4DCCE]">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-[#0D1C15] text-lg">Direct Origin Sourcing</h3>
              <p className="text-xs text-[#52665B] leading-relaxed">
                Direct partnerships with farming cooperatives and rice mills eliminate intermediary markups, ensuring uniform batch quality and competitive wholesale rates.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#D8CEBC] shadow-modern-sm hover:shadow-modern-xl transition-all space-y-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#D4AF37] flex items-center justify-center border border-[#E4DCCE]">
                <Warehouse className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-[#0D1C15] text-lg">Ready Stock in Dubai</h3>
              <p className="text-xs text-[#52665B] leading-relaxed">
                Extensive climate-controlled facilities in Dubai Investment Park (DIP) guarantee prompt availability for immediate container loading and local deliveries.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#D8CEBC] shadow-modern-sm hover:shadow-modern-xl transition-all space-y-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#D4AF37] flex items-center justify-center border border-[#E4DCCE]">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-[#0D1C15] text-lg">Fast UAE &amp; GCC Transit</h3>
              <p className="text-xs text-[#52665B] leading-relaxed">
                Same-day and 24-hour fleet dispatches across Dubai and UAE, with 48–72h bonded overland transit to Saudi Arabia, Oman, and Kuwait.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#D8CEBC] shadow-modern-sm hover:shadow-modern-xl transition-all space-y-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#D4AF37] flex items-center justify-center border border-[#E4DCCE]">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-[#0D1C15] text-lg">Flexible Packaging &amp; OEM</h3>
              <p className="text-xs text-[#52665B] leading-relaxed">
                Custom packaging from 1kg–10kg retail bags to 25kg/50kg master sacks and private label branding compliant with GCC food labeling standards.
              </p>
            </motion.div>
          </div>

          {/* Accreditations Strip */}
          <div className="pt-8 border-t border-[#DCD3C1]">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-[#D8CEBC] space-y-1 shadow-2xs"
                >
                  <BadgeCheck className="w-4 h-4 text-[#10B981] mx-auto" />
                  <div className="text-xs font-bold text-[#0D1C15]">{cert.name}</div>
                  <div className="text-[10px] text-[#697E72] truncate">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Warehouse,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/companyInfo';

export const ContactAndLocations: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    commodity: 'Basmati Rice & Grains',
    volume: '1 FCL (25 MT)',
    message: '',
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setContactForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        commodity: 'Basmati Rice & Grains',
        volume: '1 FCL (25 MT)',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div id="facilities" className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] text-[#866D38] text-xs font-bold uppercase tracking-widest border border-[#E4DCCE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dubai Trade Facilities</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#0D1C15] tracking-tight">
            Commercial Offices &amp; Distribution Center
          </h2>
          <p className="text-xs sm:text-sm text-[#52665B] leading-relaxed">
            Visit our commercial sales room in Deira Al Ras or contact our trade desk to schedule a warehouse commodity inspection in DIP.
          </p>
        </div>

        {/* 2-Column: Facilities Cards on left, Trade Form on right */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Facilities Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Commercial Office Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 bg-[#FAF8F3] rounded-2xl border border-[#D8CEBC] space-y-4 shadow-modern-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D1C15] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Commercial Head Office</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EDE5D6] text-[#423315] border border-[#D5CABB]">
                  Deira Al Ras
                </span>
              </div>
              <h4 className="font-heading text-base font-bold text-[#0D1C15]">
                {COMPANY_INFO.headOffice.title}
              </h4>
              <div className="space-y-2.5 text-xs text-[#52665B]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C99C35] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{COMPANY_INFO.headOffice.address}, {COMPANY_INFO.headOffice.city}, UAE</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C99C35] shrink-0" />
                  <span>{COMPANY_INFO.headOffice.workingHours}</span>
                </div>
              </div>
            </motion.div>

            {/* Warehouse Logistics Center Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 bg-[#FAF8F3] rounded-2xl border border-[#D8CEBC] space-y-4 shadow-modern-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D1C15] flex items-center gap-2">
                  <Warehouse className="w-4 h-4 text-[#D4AF37]" />
                  <span>Distribution Hub &amp; Cold Storage</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EDE5D6] text-[#423315] border border-[#D5CABB]">
                  DIP / Jebel Ali
                </span>
              </div>
              <h4 className="font-heading text-base font-bold text-[#0D1C15]">
                {COMPANY_INFO.logisticsHub.title}
              </h4>
              <div className="space-y-2.5 text-xs text-[#52665B]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C99C35] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{COMPANY_INFO.logisticsHub.address}</span>
                </div>
                <div className="text-[11px] text-[#697E72] pt-1 leading-relaxed">
                  Equipped with 6 hydraulic container loading docks, certified 100 MT weighbridge, and direct Jebel Ali port bonded corridor access.
                </div>
              </div>
            </motion.div>

            {/* Direct Connect Box */}
            <div className="p-6 bg-linear-to-br from-[#12231C] to-[#0A1611] text-[#FAF8F5] rounded-2xl space-y-3.5 border border-[#234234] shadow-modern-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E5C158] flex items-center gap-2">
                <span>Direct Commercial Trade Desk</span>
              </div>
              <div className="flex flex-col gap-2.5 text-xs">
                <motion.a
                  whileHover={{ x: 4 }}
                  href={`https://wa.me/971508421973?text=${encodeURIComponent('Hello Akla Foodstuff Trading, I would like to inquire about wholesale commodities.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[#E5C158] hover:text-white font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#10B981]" />
                  <span>WhatsApp: +971 50 842 1973</span>
                </motion.a>
                <motion.a
                  whileHover={{ x: 4 }}
                  href={`tel:${COMPANY_INFO.contacts.generalPhone}`}
                  className="flex items-center gap-2.5 text-[#CFDFD7] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8BA498]" />
                  <span>Telephone: {COMPANY_INFO.contacts.generalPhone}</span>
                </motion.a>
                <motion.a
                  whileHover={{ x: 4 }}
                  href={`mailto:${COMPANY_INFO.contacts.salesEmail}`}
                  className="flex items-center gap-2.5 text-[#CFDFD7] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8BA498]" />
                  <span>Email: {COMPANY_INFO.contacts.salesEmail}</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Modern Wholesale Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF8F3] rounded-2xl p-6 sm:p-9 border border-[#D8CEBC] shadow-modern-md">
            <div className="space-y-2 mb-7">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#866D38]">
                Direct Trade Inquiry
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0D1C15] tracking-tight">
                Request Official Proforma or Sample
              </h3>
              <p className="text-xs text-[#52665B] leading-relaxed">
                Our commodity desk reviews your requirements and provides formal pricing, COA, and dispatch timelines promptly.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {formSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 bg-white border border-[#10B981]/40 rounded-xl text-center space-y-3 shadow-modern-sm"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#10B981] mx-auto" />
                  <h4 className="font-heading text-xl font-bold text-[#0D1C15]">Inquiry Submitted Successfully</h4>
                  <p className="text-xs text-[#52665B] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Akla Foodstuff Trading LLC. An assigned commodity trade coordinator will contact you via WhatsApp and Email with full proforma details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSend} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#0D1C15] block mb-1.5">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Tariq Mansoor"
                        className="w-full text-xs p-3.5 bg-white border border-[#D8CEBC] rounded-xl text-[#0D1C15] focus:outline-hidden focus:border-[#0D1C15] transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0D1C15] block mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="e.g. Al Khaleej Food Distribution"
                        className="w-full text-xs p-3.5 bg-white border border-[#D8CEBC] rounded-xl text-[#0D1C15] focus:outline-hidden focus:border-[#0D1C15] transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#0D1C15] block mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="buyer@company.com"
                        className="w-full text-xs p-3.5 bg-white border border-[#D8CEBC] rounded-xl text-[#0D1C15] focus:outline-hidden focus:border-[#0D1C15] transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0D1C15] block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+971 50 ... or +966 ..."
                        className="w-full text-xs p-3.5 bg-white border border-[#D8CEBC] rounded-xl text-[#0D1C15] focus:outline-hidden focus:border-[#0D1C15] transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#0D1C15] block mb-1.5">
                        Commodity of Interest
                      </label>
                      <select
                        value={contactForm.commodity}
                        onChange={(e) => setContactForm({ ...contactForm, commodity: e.target.value })}
                        className="w-full text-xs p-3.5 bg-white border border-[#D8CEBC] rounded-xl text-[#0D1C15] focus:outline-hidden focus:border-[#0D1C15] transition-colors cursor-pointer shadow-2xs"
                      >
                        <option value="Basmati Rice & Grains">Basmati Rice &amp; Grains</option>
                        <option value="Pulses & Lentils">Pulses &amp; Lentils</option>
                        <option value="Whole Spices">Whole Spices &amp; Seasonings</option>
                        <option value="Edible Oils & Sugar">Edible Oils &amp; Sugar</option>
                        <option value="Private Label OEM Packaging">Private Label OEM Packaging</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0D1C15] block mb-1.5">
                        Target Volume
                      </label>
                      <select
                        value={contactForm.volume}
                        onChange={(e) => setContactForm({ ...contactForm, volume: e.target.value })}
                        className="w-full text-xs p-3.5 bg-white border border-[#D8CEBC] rounded-xl text-[#0D1C15] focus:outline-hidden focus:border-[#0D1C15] transition-colors cursor-pointer shadow-2xs"
                      >
                        <option value="Trial Pallet (1–5 MT)">Trial Pallet (1–5 MT)</option>
                        <option value="1 FCL (20–25 MT)">1 FCL (20–25 Metric Tons)</option>
                        <option value="Multi-Container (50–200 MT)">Multi-Container (50–200 MT)</option>
                        <option value="Institutional Contract (500+ MT)">Institutional Contract (500+ MT)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0D1C15] block mb-1.5">
                      Delivery &amp; Packaging Notes
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Specify target delivery terms (e.g. FOB Jebel Ali, CIF Dammam, UAE Mainland Door Delivery), bag size, or sample request..."
                      className="w-full text-xs p-3.5 bg-white border border-[#D8CEBC] rounded-xl text-[#0D1C15] focus:outline-hidden focus:border-[#0D1C15] transition-colors shadow-2xs"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-[#12231C] to-[#1C362B] text-[#FAF8F5] font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-modern-md border border-[#2B4B3C]"
                    id="contact-submit-btn"
                  >
                    <Send className="w-4 h-4 text-[#E5C158]" />
                    <span>Submit Inquiry to Akla Trade Desk</span>
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Send, Phone, Mail, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

interface ContactSectionProps {
  prefilledCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledCategory = '' }) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Wholesale Supply');
  const [productCategory, setProductCategory] = useState(prefilledCategory || 'Grains & Legumes');
  const [requirement, setRequirement] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `AKLA-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setRequirement('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-[#F8FAFC] text-[#0F172A] border-b border-[#E2E8F0] relative">
      <div className="max-w-[1380px] w-[92%] mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
        
        {/* Left: Contact Info Card in Prestigious Royal Navy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#1B5699] via-[#2167B4] to-[#174D89] p-6 sm:p-10 lg:p-12 rounded-2xl border border-[#C89B3C]/45 shadow-[0_20px_50px_rgba(27,86,153,0.25)] text-white space-y-6 sm:space-y-7 luxury-sheen"
        >
          <div className="inline-flex items-center gap-2 text-[#E3BC63] font-black tracking-[2.5px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#E3BC63]/15 border border-[#E3BC63]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#E3BC63]" />
            <span>COMMERCIAL INQUIRIES</span>
          </div>

          <h2 className="text-[32px] sm:text-[42px] leading-[1.1] tracking-tight font-heading font-black text-white">
            Let's Start a <span className="text-gold-gradient-light">Conversation</span>
          </h2>

          <p className="text-[15.5px] sm:text-[16.5px] text-[#CBD5E1] leading-relaxed">
            Whether you are looking for container wholesale supply, private label packaging, retail distribution or an import-export trading partnership, our trade desk is at your disposal.
          </p>

          <div className="space-y-6 pt-4 border-t border-white/10">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#246FB7] border border-[#E3BC63]/50 text-[#E3BC63] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#E3BC63]" />
              </div>
              <div>
                <strong className="block text-[15px] font-bold text-white">
                  Corporate Location &amp; Warehouse
                </strong>
                <span className="text-sm text-[#E2E8F0] block mt-0.5">
                  Dubai, United Arab Emirates
                </span>
                <span className="text-xs text-[#94A3B8] block mt-0.5">
                  Commercial Office: Al Quoz, Dubai &bull; Central UAE Warehousing
                </span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#246FB7] border border-[#E3BC63]/50 text-[#E3BC63] flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5 text-[#E3BC63]" />
              </div>
              <div>
                <strong className="block text-[15px] font-bold text-white">
                  Trade Desk &amp; Inquiries
                </strong>
                <a 
                  href={`tel:${COMPANY_INFO.contacts.generalPhone}`} 
                  className="text-sm text-[#FDE68A] hover:underline block font-semibold mt-0.5"
                >
                  {COMPANY_INFO.contacts.generalPhone}
                </a>
                <span className="text-xs text-[#94A3B8] block">
                  Sunday – Friday &bull; 8:00 AM – 7:00 PM GST
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#246FB7] border border-[#E3BC63]/50 text-[#E3BC63] flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5 text-[#E3BC63]" />
              </div>
              <div>
                <strong className="block text-[15px] font-bold text-white">
                  Official Email Correspondence
                </strong>
                <a 
                  href={`mailto:${COMPANY_INFO.contacts.salesEmail}`} 
                  className="text-sm text-[#FDE68A] hover:underline block font-semibold mt-0.5"
                >
                  {COMPANY_INFO.contacts.salesEmail}
                </a>
                <span className="text-xs text-[#94A3B8] block">
                  Commercial proposals, vendor verification &amp; export contracts
                </span>
              </div>
            </div>

            {/* WhatsApp Direct Chat Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/971508421973?text=${encodeURIComponent('Hello Akla Foodstuff Trading LLC, I am interested in inquiring about food supply and trading partnership.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1f9d55] hover:bg-[#25b362] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

          </div>
        </motion.div>

        {/* Right: Request a Quote Form in Clean White Luxury Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 sm:p-10 lg:p-12 rounded-2xl border border-[#E2E8F0] shadow-[0_20px_50px_rgba(27,86,153,0.08)]"
        >
          <div className="inline-flex items-center gap-2 text-[#C89B3C] font-black tracking-[2.5px] text-xs uppercase px-3.5 py-1.5 rounded-full bg-[#FFF8EB] border border-[#F5D061]/60 shadow-xs mb-3">
            <span>QUOTATION REQUEST</span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] leading-tight font-heading font-black text-[#1B5699] mb-3">
            Tell Us What You Need
          </h2>

          {/* Trade Desk Response Guarantee Pill */}
          <div className="flex items-center gap-2 text-xs text-[#1B5699] font-bold bg-[#F8FAFC] border border-[#C89B3C]/40 px-3.5 py-2 rounded-xl mb-5 shadow-2xs">
            <span>Fast-Track Desk: Average quote response &lt; 2 business hours</span>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-[#1f9d55]/15 text-[#1f9d55] border border-[#1f9d55]/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-2xl text-[#1B5699]">
                Trade Enquiry Received
              </h3>
              <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1B5699]">{fullName}</strong>. Your requirement has been logged under Reference ID <strong className="text-[#C89B3C]">{referenceId}</strong>. Our Dubai trade desk will review logistics and reach out via WhatsApp/email within 4 business hours.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-7 py-3 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] text-xs font-black uppercase tracking-wider rounded-full hover:scale-105 transition-all cursor-pointer shadow-md"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-bold text-[#334155]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#C89B3C] focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-bold text-[#334155]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Business Name"
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#C89B3C] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-bold text-[#334155]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#C89B3C] focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-bold text-[#334155]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 -- --- ----"
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#C89B3C] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-bold text-[#334155]">
                    Interest Type
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl text-sm text-[#0F172A] focus:outline-hidden focus:border-[#C89B3C] focus:bg-white cursor-pointer"
                  >
                    <option>Wholesale Supply</option>
                    <option>Retail Products</option>
                    <option>Import &amp; Export</option>
                    <option>Business Partnership</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-bold text-[#334155]">
                    Product Category
                  </label>
                  <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl text-sm text-[#0F172A] focus:outline-hidden focus:border-[#C89B3C] focus:bg-white cursor-pointer"
                  >
                    <option>Grains &amp; Legumes</option>
                    <option>Chicken &amp; Halal Meat Trading</option>
                    <option>Food &amp; Beverages</option>
                    <option>Fresh Fruits &amp; Vegetables</option>
                    <option>Ghee &amp; Oils</option>
                    <option>Snack Foods</option>
                    <option>Fish &amp; Seafood</option>
                    <option>Eggs Trading</option>
                    <option>Flour Trading</option>
                    <option>Soft Drinks &amp; Water</option>
                    <option>Dried Fruits &amp; Vegetables</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Requirement */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-bold text-[#334155]">
                  Specific Requirements &amp; Quantities
                </label>
                <textarea
                  rows={3}
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  placeholder="Please describe products, desired quantities (MT / FCL / Cartons), packing and delivery incoterms (CIF/FOB)."
                  className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#C89B3C] focus:bg-white transition-colors"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#F5D061] via-[#E3BC63] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E3BC63] text-[#071A2F] rounded-full font-black text-sm tracking-wider uppercase transition-all shadow-[0_6px_25px_rgba(200,155,60,0.35)] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>SUBMIT TRADE INQUIRY</span>
                <Send className="w-4 h-4 text-[#071A2F]" />
              </motion.button>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
};

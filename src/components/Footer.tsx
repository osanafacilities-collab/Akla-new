import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { AklaLogo } from './AklaLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gradient-to-b from-[#1B5699] via-[#164D88] to-[#123E72] text-[#CBD5E1] pt-20 border-t border-[#C89B3C]/35">
      <div className="max-w-[1380px] w-[92%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="inline-block cursor-pointer focus:outline-hidden"
          >
            <AklaLogo size="md" showTagline={true} />
          </a>

          <p className="text-sm leading-relaxed text-[#CBD5E1]/90 max-w-[360px]">
            Akla Foodstuff Trading LLC connects quality food commodities with wholesale, retail, and global markets through reliable sourcing, certified standards, and professional logistics solutions.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white font-heading font-bold text-base tracking-wide">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Akla' },
              { id: 'products', label: 'Product Portfolio' },
              { id: 'wholesale', label: 'Wholesale & Retail' },
              { id: 'global', label: 'Global Trade Network' },
              { id: 'why', label: 'Why Us' },
              { id: 'contact', label: 'Contact Us' },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.id);
                  }}
                  className="text-[#94A3B8] hover:text-[#E3BC63] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-heading font-bold text-base tracking-wide">
            Key Food Sectors
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              'Chicken & Halal Meat Trading',
              'Grains, Cereals & Legumes',
              'Edible Oils & Pure Ghee',
              'Food & Beverages',
              'Fresh Fruits & Vegetables',
              'Flour & Bakery Essentials',
              'Snack Foods & Confectionery',
              'Fresh & Frozen Seafood',
              'Poultry & Fresh Eggs Trading',
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('products');
                  }}
                  className="text-[#94A3B8] hover:text-[#E3BC63] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-heading font-bold text-base tracking-wide">
            Dubai Trade Office
          </h4>
          <div className="text-sm text-[#94A3B8] space-y-3 leading-relaxed">
            <div>
              <strong className="text-white block font-bold">Office Address</strong>
              <span>Al Quoz Industrial Area, Dubai, UAE</span>
            </div>
            <div>
              <strong className="text-white block font-bold">Phone / Direct Line</strong>
              <a href="tel:+97142289412" className="block hover:text-[#E3BC63] transition-colors">+971 4 228 9412</a>
              <a href="https://wa.me/971508421973" target="_blank" rel="noreferrer" className="block text-[#E3BC63] hover:underline">+971 50 842 1973 (WhatsApp)</a>
            </div>
            <div>
              <strong className="text-white block font-bold">Corporate Email</strong>
              <a href="mailto:inquiry@aklafoodstuff.ae" className="hover:text-[#E3BC63] transition-colors">
                inquiry@aklafoodstuff.ae
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#C89B3C]/25 py-6 text-[13px] text-[#CBD5E1]/80 bg-[#144275]">
        <div className="max-w-[1380px] w-[92%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            &copy; 2026 Akla Foodstuff Trading LLC. Registered in Dubai, UAE.
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="text-[#CBD5E1] tracking-wider uppercase hidden md:inline">
              Wholesale &bull; Retail &bull; Import &bull; Export
            </span>
            <a 
              href="/akla-foodstuff-hostinger-deploy.zip"
              download="akla-foodstuff-hostinger-deploy.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E3BC63]/20 hover:bg-[#E3BC63]/30 text-[#FDE68A] border border-[#E3BC63]/40 transition-colors"
              title="Download 1-Click Hostinger Activation Package"
            >
              <svg className="w-3.5 h-3.5 text-[#FDE68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Hostinger ZIP</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

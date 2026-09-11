import React, { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AklaLogo } from './AklaLogo';
import { AKLA_CATEGORIES } from '../data/aklaCategories';

interface HeaderProps {
  onOpenQuote: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const productsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'wholesale', label: 'Retail' },
    { id: 'global', label: 'Import & Export' },
    { id: 'why', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'AR', label: 'العربية' },
    { code: 'RU', label: 'Русский' },
    { code: 'FR', label: 'Français' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Main Navigation Bar with subtle gold bottom accent border */}
      <div className="bg-gradient-to-r from-[#123E6D] via-[#164D88] to-[#123E6D] backdrop-blur-xl border-b border-[#C89B3C]/40 text-white shadow-[0_4px_30px_rgba(19,62,114,0.3)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[86px] flex items-center justify-between">
          
          {/* Brand Logo matching screenshot */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="cursor-pointer focus:outline-hidden"
          >
            <AklaLogo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[14.5px] font-medium text-[#E2E8F0]">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id && link.label !== 'Retail';
              
              if (link.hasDropdown) {
                return (
                  <div key={idx} className="relative" ref={productsRef}>
                    <button
                      type="button"
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className={`flex items-center gap-1.5 py-2 px-1 hover:text-[#E3BC63] transition-colors cursor-pointer ${
                        isActive ? 'text-[#E3BC63] font-semibold' : ''
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#E3BC63]' : ''}`} />
                    </button>

                    {/* Products Dropdown Menu */}
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#123E6D]/98 backdrop-blur-2xl border border-[#C89B3C]/45 rounded-md shadow-[0_20px_50px_rgba(19,62,114,0.4)] py-2 z-50 overflow-hidden"
                        >
                          <div className="px-4 py-2 border-b border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#E3BC63] flex items-center justify-between">
                            <span>Our Food Categories</span>
                            <Sparkles className="w-3 h-3 text-[#E3BC63]" />
                          </div>
                          <div className="max-h-[380px] overflow-y-auto py-1">
                            {AKLA_CATEGORIES.map((cat) => (
                              <button
                                key={cat.id}
                                type="button"
                                onClick={() => {
                                  setProductsDropdownOpen(false);
                                  onNavigate('products');
                                }}
                                className="w-full px-4 py-2 text-left text-xs text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-[#C89B3C]/15 transition-colors flex items-center gap-2.5"
                              >
                                <span className="text-sm">{cat.icon}</span>
                                <span className="truncate">{cat.name}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={idx}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.id);
                  }}
                  className={`relative py-2 px-1 hover:text-[#E3BC63] transition-colors cursor-pointer ${
                    isActive ? 'text-[#E3BC63] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {/* Glowing Active Gold Underline Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FAD97A] via-[#E3BC63] to-[#B8860B] rounded-full shadow-[0_0_10px_rgba(227,188,99,0.8)]"
                    />
                  )}
                </a>
              );
            })}

            {/* Language Selector matching screenshot 🌐 EN ∨ */}
            <div className="relative pl-2 border-l border-white/15" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 py-1.5 px-2 rounded-full text-xs font-semibold text-[#E2E8F0] hover:text-[#E3BC63] hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#E3BC63]" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute right-0 mt-2 w-32 bg-[#123E6D]/98 backdrop-blur-xl border border-[#C89B3C]/45 rounded-md shadow-xl py-1 z-50"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setCurrentLang(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-1.5 text-left text-xs transition-colors flex items-center justify-between ${
                          currentLang === l.code ? 'text-[#E3BC63] bg-[#C89B3C]/15 font-bold' : 'text-slate-200 hover:bg-white/5'
                        }`}
                      >
                        <span>{l.label}</span>
                        {currentLang === l.code && <span className="text-[10px] text-[#E3BC63]">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Request Quote CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={onOpenQuote}
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E3BC63] text-[#071A2F] rounded-full text-xs font-black tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(200,155,60,0.35)] hover:shadow-[0_6px_22px_rgba(200,155,60,0.55)] cursor-pointer"
            >
              Get Quote
            </motion.button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] text-xs font-black rounded-full"
            >
              QUOTE
            </motion.button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#E3BC63] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E3BC63]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-gradient-to-b from-[#123E6D] to-[#0F3158] backdrop-blur-2xl border-b border-[#C89B3C]/40 text-white overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm font-medium">
                {navLinks.map((link, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate(link.id);
                    }}
                    className="p-2.5 text-left rounded-lg bg-white/5 hover:bg-[#C89B3C]/15 hover:text-[#E3BC63] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                  <Globe className="w-4 h-4 text-[#E3BC63]" />
                  <span>Language: {currentLang}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] text-xs font-black uppercase rounded-full"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

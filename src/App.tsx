import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommodityTicker } from './components/CommodityTicker';
import { AboutSection } from './components/AboutSection';
import { ProductCategoriesSection } from './components/ProductCategoriesSection';
import { WholesaleRetailSplit } from './components/WholesaleRetailSplit';
import { GlobalTradeSection } from './components/GlobalTradeSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [prefilledContactCategory, setPrefilledContactCategory] = useState<string>('');
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenQuote = (product?: Product | null, categoryName?: string) => {
    if (product) {
      setSelectedProductForQuote(product);
    } else {
      setSelectedProductForQuote(null);
    }
    if (categoryName) {
      setPrefilledContactCategory(categoryName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#E3BC63] selection:text-[#071A2F]">
      
      {/* 1. Header with Topbar and Navigation matching reference layout */}
      <Header
        onOpenQuote={() => handleOpenQuote()}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section (#home) with Dubai Harbor, Cargo Ship, Airplane and Harvest Feast */}
        <Hero
          onExploreCatalog={() => handleNavigate('products')}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Live Commodity Trade Desk Marquee */}
        <CommodityTicker />

        {/* 3. About Section (#about) */}
        <AboutSection />

        {/* 4. Product Categories Portfolio Section (#products) */}
        <ProductCategoriesSection
          onSelectProduct={(product) => setSelectedProductDetail(product)}
          onRequestQuoteForCategory={(categoryName) => {
            setPrefilledContactCategory(categoryName);
            handleNavigate('contact');
          }}
          onOpenGeneralQuote={() => handleOpenQuote()}
        />

        {/* 5. Wholesale & Retail Split Section (#wholesale) */}
        <WholesaleRetailSplit
          onOpenWholesaleQuote={() => handleOpenQuote()}
          onExploreProducts={() => handleNavigate('products')}
        />

        {/* 6. Global Trade Section (#global) with Interactive Map */}
        <GlobalTradeSection />

        {/* 7. Why Choose Us Section (#why) */}
        <WhyChooseUsSection />

        {/* 8. Who We Serve Section (Industries) */}
        <WhoWeServeSection />

        {/* 9. CTA Banner Section */}
        <CtaSection
          onOpenQuote={() => handleOpenQuote()}
          onNavigateContact={() => handleNavigate('contact')}
        />

        {/* 10. Contact & Quote Form Section (#contact) */}
        <ContactSection prefilledCategory={prefilledContactCategory} />

      </main>

      {/* 11. Footer matching luxury dark gold theme */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Commodity Detail Modal */}
      <AnimatePresence>
        {selectedProductDetail && (
          <ProductDetailModal
            key="product-detail-modal"
            product={selectedProductDetail}
            onClose={() => setSelectedProductDetail(null)}
            onRequestQuote={(product) => handleOpenQuote(product)}
          />
        )}
      </AnimatePresence>

      {/* Centralized Wholesale Quote Request Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <QuoteModal
            key="quote-modal"
            isOpen={isQuoteModalOpen}
            onClose={() => {
              setIsQuoteModalOpen(false);
              setSelectedProductForQuote(null);
            }}
            selectedProduct={selectedProductForQuote}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

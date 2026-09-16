import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Truck, Sparkles, CheckCircle2, ShieldCheck, Box, Store, Camera } from 'lucide-react';
import { useSiteEditor } from '../context/SiteEditorContext';
import { EditableText } from './editor/EditableText';

interface WholesaleRetailSplitProps {
  onOpenWholesaleQuote: () => void;
  onExploreProducts: () => void;
}

export const WholesaleRetailSplit: React.FC<WholesaleRetailSplitProps> = ({
  onOpenWholesaleQuote,
  onExploreProducts,
}) => {
  const { content, isEditMode, openImagePicker } = useSiteEditor();

  const wholesalePerks = [
    'Full Container Load (FCL) & Break-Bulk',
    'Port-to-Warehouse Temperature Buffer',
    'Customized Commodity Specifications',
    'Flexible Trade Finance & Credit Support',
  ];

  const retailPerks = [
    'Supermarket & Hypermarket Shelf-Ready Packs',
    'UAE Municipality Arabic Labelling Compliant',
    'Direct-to-Store (D2S) Scheduled Delivery',
    'Competitive Margins & High Inventory Turn',
  ];

  return (
    <section id="wholesale" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 text-white border-b border-[#C89B3C]/25 relative overflow-hidden">
      {/* Left Column: Wholesale Business Supply (wholesale.jpg) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-8 sm:px-16 lg:px-20 py-24 lg:py-32 flex flex-col justify-center min-h-[560px] relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-[#C89B3C]/25"
      >
        {/* Real Foodstuff Warehouse Inspection Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(19, 58, 107, 0.88) 0%, rgba(15, 45, 82, 0.93) 100%), url('${content.wholesale.bgImage || '/wholesale.jpg'}'), url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=85')`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Change Wholesale Photo in Edit Mode */}
        {isEditMode && (
          <button
            type="button"
            onClick={() => openImagePicker('wholesale.bgImage', content.wholesale.bgImage || '/wholesale.jpg', 'Wholesale Background Photo')}
            className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#071A2F]/90 hover:bg-[#1B5699] text-[#FDE68A] border border-[#C89B3C] rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md cursor-pointer transition-all hover:scale-105"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Change Photo</span>
          </button>
        )}

        {/* Ambient gold glow on hover */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C89B3C]/20 rounded-full filter blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-700" />

        <div className="max-w-[540px] space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3BC63]/15 border border-[#E3BC63]/40 text-[#FDE68A] font-black tracking-[2px] text-xs uppercase shadow-xs">
            <Truck className="w-3.5 h-3.5 text-[#E3BC63]" />
            <EditableText path="wholesale.badge" defaultText="COMMERCIAL WHOLESALE DIVISION" as="span" />
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.12] tracking-tight font-heading font-black text-white">
            <EditableText path="wholesale.title" defaultText="Wholesale Solutions Built for Enterprise" as="span" />
          </h2>

          <EditableText 
            path="wholesale.description" 
            defaultText="Supplying hypermarkets, hotel conglomerates, commercial kitchens, flight caterers, and regional GCC distributors with bulk container volumes and guaranteed supply continuity." 
            as="p" 
            multiline 
            className="text-[15.5px] sm:text-[16.5px] text-[#CBD5E1] leading-relaxed block" 
          />

          {/* Animated Perks Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {wholesalePerks.map((perk, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-xs text-white/90 font-medium bg-black/20 backdrop-blur-xs p-2.5 rounded-lg border border-white/10"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] shrink-0" />
                <span>{perk}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onOpenWholesaleQuote}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F5D061] to-[#C89B3C] hover:from-[#FFF0BE] hover:to-[#E3BC63] text-[#071A2F] rounded-full font-black text-xs tracking-wider uppercase transition-all shadow-[0_4px_25px_rgba(200,155,60,0.4)] cursor-pointer group/btn"
            >
              <span>REQUEST WHOLESALE PRICING</span>
              <ArrowRight className="w-4 h-4 text-[#071A2F] group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Retail Everyday Supply */}
      <motion.div
        id="retail"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="scroll-mt-24 px-8 sm:px-16 lg:px-20 py-24 lg:py-32 flex flex-col justify-center min-h-[560px] relative overflow-hidden group"
      >
        {/* Retail Shelves Distribution Background Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(31, 97, 172, 0.88) 0%, rgba(20, 68, 122, 0.93) 100%), url('${content.retail.bgImage || 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=85'}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Change Retail Photo in Edit Mode */}
        {isEditMode && (
          <button
            type="button"
            onClick={() => openImagePicker('retail.bgImage', content.retail.bgImage || 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=85', 'Retail Background Photo')}
            className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#071A2F]/90 hover:bg-[#1B5699] text-[#FDE68A] border border-[#C89B3C] rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md cursor-pointer transition-all hover:scale-105"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Change Photo</span>
          </button>
        )}

        {/* Ambient gold glow on hover */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C89B3C]/20 rounded-full filter blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-700" />

        <div className="max-w-[540px] space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3BC63]/15 border border-[#E3BC63]/40 text-[#FDE68A] font-black tracking-[2px] text-xs uppercase shadow-xs">
            <ShoppingBag className="w-3.5 h-3.5 text-[#E3BC63]" />
            <EditableText path="retail.badge" defaultText="RETAIL DISTRIBUTION DIVISION" as="span" />
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.12] tracking-tight font-heading font-black text-white">
            <EditableText path="retail.title" defaultText="Quality Products for Everyday Needs" as="span" />
          </h2>

          <EditableText 
            path="retail.description" 
            defaultText="Curated consumer-packaged food ranges designed for grocery store shelves, specialty food boutiques, and convenience markets demanding quality aesthetics and dependable sell-through." 
            as="p" 
            multiline 
            className="text-[15.5px] sm:text-[16.5px] text-[#CBD5E1] leading-relaxed block" 
          />

          {/* Animated Perks Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {retailPerks.map((perk, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-xs text-white/90 font-medium bg-black/20 backdrop-blur-xs p-2.5 rounded-lg border border-white/10"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] shrink-0" />
                <span>{perk}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1B5699]/90 hover:bg-[#C89B3C]/20 border border-[#C89B3C]/80 hover:border-[#E3BC63] text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all backdrop-blur-md cursor-pointer group/btn"
            >
              <span>EXPLORE ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[#E3BC63] group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Globe2, 
  ArrowRight,
  Clock,
  Ship,
  Truck,
  MapPin,
  CheckCircle2,
  Apple,
  Beef,
  Flame,
  Wheat,
  Droplet,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';

interface RegionalCorridor {
  id: string;
  title: string;
  regionBadge: string;
  flag: string;
  origins: string;
  image: string;
  transit: string;
  highlightTag: string;
  items: {
    name: string;
    detail: string;
    tag?: string;
  }[];
  format: string;
}

const REGIONAL_CORRIDORS: RegionalCorridor[] = [
  {
    id: 'india-pakistan',
    title: 'India & Pakistan Direct Sourcing',
    regionBadge: 'Agro Heartland',
    flag: '🇮🇳 🇵🇰',
    origins: 'India & Pakistan',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=85',
    transit: '3 – 5 Days Direct',
    highlightTag: 'Fresh & Dry Cargo',
    items: [
      { name: 'Fresh Fruits & Vegetables', detail: 'Onions, potatoes, mangoes, ginger, garlic & green chilies (Reefer Sea & Air)' },
      { name: 'Halal Fresh & Frozen Meat', detail: 'Prime mutton, lamb carcasses & boneless buffalo beef primal cuts' },
      { name: 'Pulses, Lentils & Chickpeas', detail: 'Chana dal, red lentils (masoor), moong, toor dal & bold chickpeas' },
      { name: 'Grains & Whole Spices', detail: '1121 XXL Basmati rice, chakki atta, cumin seeds, green cardamom & pepper' },
      { name: 'Pure Mustard Oil', detail: 'Kachi Ghani cold-pressed pungent mustard oil for cooking & culinary use' },
    ],
    format: 'Air Freight, 20ft/40ft Reefer & Dry FCL'
  },
  {
    id: 'brazil',
    title: 'Brazil Sourcing Hub',
    regionBadge: 'Poultry & Sugar Leader',
    flag: '🇧🇷',
    origins: 'Brazil (Santos & Paranaguá)',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=85',
    transit: 'Direct Ocean Vessels',
    highlightTag: 'SIF Halal Certified',
    items: [
      { name: 'Halal Frozen Chicken', detail: 'Whole griller chicken (900g–1400g), boneless breast fillets (IQF) & shawarma cuts' },
      { name: 'Poultry Parts & Wings', detail: 'Mid-joint wings, chicken paws, leg quarters & drumsticks in master cartons' },
      { name: 'Refined White Sugar (ICUMSA 45)', detail: 'High-purity sparkling cane sugar (50kg PP bags & 1,000kg jumbo totes)' },
      { name: 'Agricultural Commodities', detail: 'Non-GMO yellow corn grade 2 & high-protein animal feed soybeans' },
    ],
    format: '40ft Heavy Reefer Containers & Bulk Ocean Charters'
  },
  {
    id: 'europe',
    title: 'Europe & Mediterranean Hub',
    regionBadge: 'Pantry & Edible Oils',
    flag: '🇪🇺 🇮🇹 🇷🇴',
    origins: 'Europe & Black Sea Gateway',
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=85',
    transit: '12 – 16 Days Ocean',
    highlightTag: 'Canned Foods & Oils',
    items: [
      { name: 'Canned Food Products', detail: 'Whole peeled plum tomatoes, chopped tomatoes, sweet corn & mushrooms' },
      { name: 'Canned Legumes & Olives', detail: 'Cooked chickpeas, red kidney beans, green peas & Greek/Spanish olives' },
      { name: 'Pure Refined Sunflower Oil', detail: '100% refined sunflower oil CP8 (FFA < 0.1%) in PET bottles & flexitanks' },
      { name: 'Durum Wheat & Pasta Flour', detail: 'High-gluten European milling wheat & semolina for commercial bakeries' },
    ],
    format: 'Retail Cans (400g/800g/3kg A10), PET Bottles & FCL'
  },
  {
    id: 'gcc-export',
    title: 'GCC Regional Overland Fleet',
    regionBadge: 'Cross-Border Logistics',
    flag: '🇸🇦 🇴🇲 🇶🇦 🇰🇼',
    origins: 'UAE to KSA, Oman, Qatar & Kuwait',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=85',
    transit: '24 – 48 Hours Door-to-Door',
    highlightTag: 'Express Reefer Convoys',
    items: [
      { name: 'Kingdom of Saudi Arabia (KSA)', detail: 'Daily overland refrigerated convoys to Riyadh, Dammam, and Jeddah' },
      { name: 'Sultanate of Oman', detail: 'Express cross-border delivery to Muscat, Sohar, and Salalah distribution centers' },
      { name: 'Qatar & Kuwait Routes', detail: 'Bonded freight supply to hypermarkets, food service, and wholesale distributors' },
      { name: 'Dubai Central Warehousing', detail: 'Direct dispatch from our Al Quoz commercial office & central UAE warehouses' },
    ],
    format: 'Full Truckload (FTL) & Temperature-Controlled LTL'
  }
];

interface GlobalTradeSectionProps {
  onOpenQuote?: (categoryName?: string) => void;
}

export const GlobalTradeSection: React.FC<GlobalTradeSectionProps> = ({ onOpenQuote }) => {
  const [selectedCorridor, setSelectedCorridor] = useState<string>('all');

  const handleInquire = (title?: string) => {
    if (onOpenQuote) {
      onOpenQuote(title || 'Global Import/Export');
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const displayedCorridors = selectedCorridor === 'all' 
    ? REGIONAL_CORRIDORS 
    : REGIONAL_CORRIDORS.filter(c => c.id === selectedCorridor);

  return (
    <section 
      id="global" 
      className="scroll-mt-24 py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0F172A] relative"
    >
      <div className="max-w-[1360px] w-[92%] mx-auto space-y-10">
        
        {/* Short, Clean Header */}
        <div className="text-center max-w-[800px] mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#B45309] font-bold tracking-wider text-xs uppercase px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FCD34D]">
            <Globe2 className="w-3.5 h-3.5 text-[#D97706]" />
            <span>GLOBAL IMPORT & EXPORT GATEWAY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#1B5699]">
            Direct Global Sourcing & <span className="text-[#C89B3C]">Regional Distribution</span>
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Sourcing fresh produce, Halal meats, poultry, sugar, canned goods, pulses, and oils directly from premier origins into Dubai, with prompt cross-border delivery across the GCC.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setSelectedCorridor('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCorridor === 'all'
                  ? 'bg-[#1B5699] text-white shadow-xs'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#F1F5F9]'
              }`}
            >
              All Origins (4)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCorridor('india-pakistan')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCorridor === 'india-pakistan'
                  ? 'bg-[#1B5699] text-white shadow-xs'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#F1F5F9]'
              }`}
            >
              <span>🇮🇳 🇵🇰 India & Pakistan</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCorridor('brazil')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCorridor === 'brazil'
                  ? 'bg-[#1B5699] text-white shadow-xs'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#F1F5F9]'
              }`}
            >
              <span>🇧🇷 Brazil (Chicken & Sugar)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCorridor('europe')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCorridor === 'europe'
                  ? 'bg-[#1B5699] text-white shadow-xs'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#F1F5F9]'
              }`}
            >
              <span>🇪🇺 Europe (Canned Foods & Oils)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCorridor('gcc-export')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCorridor === 'gcc-export'
                  ? 'bg-[#1B5699] text-white shadow-xs'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#F1F5F9]'
              }`}
            >
              <span>🇸🇦 GCC Overland Fleet</span>
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className={`grid grid-cols-1 ${displayedCorridors.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6`}>
          {displayedCorridors.map((corridor) => (
            <div
              key={corridor.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo & Header Badge */}
              <div className="relative h-48 overflow-hidden bg-[#071A2F]">
                <img
                  src={corridor.image}
                  alt={corridor.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Transit & Region Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-lg bg-white/95 text-[#1B5699] text-[11px] font-bold shadow-xs">
                    {corridor.highlightTag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#071A2F]/90 text-white text-[11px] font-bold flex items-center gap-1 border border-white/20">
                    <Clock className="w-3 h-3 text-[#C89B3C]" />
                    <span>{corridor.transit}</span>
                  </span>
                </div>

                {/* Country flags & Title */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90 mb-0.5">
                    <span className="text-base">{corridor.flag}</span>
                    <span>{corridor.origins}</span>
                  </div>
                  <h3 className="text-lg font-heading font-black text-white leading-snug">
                    {corridor.title}
                  </h3>
                </div>
              </div>

              {/* Card Body with specific items */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Items List */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B] block">
                    Key Commodities & Products:
                  </span>
                  {corridor.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-[#0F172A] block leading-tight">
                          {item.name}
                        </strong>
                        <span className="text-[11px] text-[#64748B] leading-tight block mt-0.5">
                          {item.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Logistics & Shipping Format */}
                <div className="pt-3 border-t border-[#F1F5F9] space-y-3">
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                    <span className="text-[10px] font-bold uppercase text-[#64748B] block">
                      Packaging & Loading:
                    </span>
                    <span className="text-xs font-semibold text-[#1B5699] block mt-0.5">
                      {corridor.format}
                    </span>
                  </div>

                  {/* Quick Action Button */}
                  <button
                    type="button"
                    onClick={() => handleInquire(corridor.title)}
                    className="w-full py-2.5 px-3 bg-[#1B5699] hover:bg-[#133F72] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Request Rates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 3-Point Fast Summary Strip with Al Quoz Office Mention */}
        <div className="bg-white rounded-2xl border border-[#CBD5E1] p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B5699]/10 text-[#1B5699] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#C89B3C]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0F172A]">Al Quoz Commercial Office</h4>
                <p className="text-xs text-[#475569] mt-0.5 leading-relaxed">
                  Centrally located in Al Quoz, Dubai for corporate contracts, product samples & trade inquiries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B5699]/10 text-[#1B5699] flex items-center justify-center shrink-0">
                <Ship className="w-5 h-5 text-[#C89B3C]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0F172A]">Direct Origin Milling</h4>
                <p className="text-xs text-[#475569] mt-0.5 leading-relaxed">
                  Direct contracts with certified farm cooperatives, poultry abattoirs, and edible oil processors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B5699]/10 text-[#1B5699] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-[#C89B3C]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0F172A]">Cross-Border GCC Fleet</h4>
                <p className="text-xs text-[#475569] mt-0.5 leading-relaxed">
                  Fast 24–48 hour refrigerated overland dispatch directly to Saudi Arabia, Oman, Qatar, and Kuwait.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

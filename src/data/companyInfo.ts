import { CurrencyRate, SpotCommodityIndex, TransitRoute } from '../types';

export const CURRENCY_RATES: Record<string, CurrencyRate> = {
  AED: { code: 'AED', symbol: 'AED', rateAgainstAed: 1.0, label: 'UAE Dirham (AED)' },
  USD: { code: 'USD', symbol: '$', rateAgainstAed: 0.272, label: 'US Dollar ($)' },
  SAR: { code: 'SAR', symbol: 'SAR', rateAgainstAed: 1.02, label: 'Saudi Riyal (SAR)' },
  EUR: { code: 'EUR', symbol: '€', rateAgainstAed: 0.255, label: 'Euro (€)' },
};

export const SPOT_COMMODITY_INDICES: SpotCommodityIndex[] = [
  {
    symbol: 'RICE-1121-STM',
    name: '1121 Steam Basmati XXL',
    origin: 'India / Pakistan',
    fobPort: 'FOB Jebel Ali / Kandla',
    priceUsdPerMt: 1140,
    change24h: 1.2,
    trend: 'up',
    packaging: '50kg Non-Woven'
  },
  {
    symbol: 'RICE-SELLA-GLD',
    name: '1121 Golden Sella Basmati',
    origin: 'India',
    fobPort: 'FOB Jebel Ali / Mundra',
    priceUsdPerMt: 1050,
    change24h: 0.8,
    trend: 'up',
    packaging: '50kg PP Bags'
  },
  {
    symbol: 'PULSE-CHICK-9MM',
    name: 'Kabuli Chickpeas 9mm Bold',
    origin: 'Australia / India',
    fobPort: 'FOB Jebel Ali / Nhava Sheva',
    priceUsdPerMt: 1280,
    change24h: -0.5,
    trend: 'down',
    packaging: '50kg Bags'
  },
  {
    symbol: 'PULSE-RED-LENT',
    name: 'Red Split Lentils Sortex',
    origin: 'Canada / Turkey',
    fobPort: 'FOB Jebel Ali / Mersin',
    priceUsdPerMt: 860,
    change24h: 0.4,
    trend: 'up',
    packaging: '25kg Bags'
  },
  {
    symbol: 'OIL-SUNFLOWER',
    name: 'Refined Sunflower Oil CP8',
    origin: 'Black Sea / Argentina',
    fobPort: 'FOB Jebel Ali Flexitank',
    priceUsdPerMt: 985,
    change24h: -1.1,
    trend: 'down',
    packaging: 'Flexitank / 18L Tins'
  },
  {
    symbol: 'OIL-PALM-OLEIN',
    name: 'RBD Palm Olein IV56',
    origin: 'Malaysia / Indonesia',
    fobPort: 'FOB Port Klang / Jebel Ali',
    priceUsdPerMt: 920,
    change24h: 0.6,
    trend: 'up',
    packaging: 'Bulk / 20L Jerrycan'
  },
  {
    symbol: 'SPICE-CARD-8MM',
    name: 'Green Cardamom Extra Bold 8mm',
    origin: 'Guatemala',
    fobPort: 'CIF Jebel Ali Port',
    priceUsdPerMt: 31200,
    change24h: 2.1,
    trend: 'up',
    packaging: '25kg Master Carton'
  },
  {
    symbol: 'SUGAR-ICU-45',
    name: 'Refined Cane Sugar ICUMSA 45',
    origin: 'Brazil / India',
    fobPort: 'FOB Santos / Jebel Ali',
    priceUsdPerMt: 535,
    change24h: -0.3,
    trend: 'down',
    packaging: '50kg Polylined Bags'
  },
  {
    symbol: 'CHKN-GRLR-HL',
    name: 'Frozen Whole Chicken Griller (Halal)',
    origin: 'Brazil (SIF Plants)',
    fobPort: 'CIF Jebel Ali Reefer',
    priceUsdPerMt: 2150,
    change24h: 1.4,
    trend: 'up',
    packaging: '10x1.1kg Master Carton'
  },
  {
    symbol: 'BEEF-BONELESS-HL',
    name: 'Boneless Halal Beef Cuts (Silver Side)',
    origin: 'Brazil / India',
    fobPort: 'CIF Jebel Ali Reefer',
    priceUsdPerMt: 4100,
    change24h: 0.9,
    trend: 'up',
    packaging: '20kg Master Cartons'
  }
];

export const TRANSIT_ROUTES: TransitRoute[] = [
  {
    destinationPort: 'Riyadh Dry Port / Dammam',
    country: 'Saudi Arabia (KSA)',
    transitTime: '48 – 72 Hours',
    transportMode: 'Cross-Border Bonded Truck',
    customsProtocol: 'SASO Saber & SFDA Direct Transit via Batha Border',
    frequency: 'Daily Dispatches'
  },
  {
    destinationPort: 'Jeddah Islamic Port',
    country: 'Saudi Arabia (Western)',
    transitTime: '4 – 5 Days',
    transportMode: 'Sea Container (FCL)',
    customsProtocol: 'Direct Transshipment without UAE Domestic Duty',
    frequency: '3x Weekly Sailings'
  },
  {
    destinationPort: 'Sohar & Muscat',
    country: 'Oman',
    transitTime: '24 – 36 Hours',
    transportMode: 'Cross-Border Bonded Truck',
    customsProtocol: 'GCC Common Customs Law & Bayan System Clearance',
    frequency: 'Daily Dispatches'
  },
  {
    destinationPort: 'Shuwaikh & Shuaiba Ports',
    country: 'Kuwait',
    transitTime: '3 – 4 Days',
    transportMode: 'Sea Container (FCL)',
    customsProtocol: 'Public Authority for Food and Nutrition (PAFN) Clear',
    frequency: '2x Weekly Sailings'
  },
  {
    destinationPort: 'Hamad Port',
    country: 'Qatar',
    transitTime: '2 – 3 Days',
    transportMode: 'Sea Container (FCL)',
    customsProtocol: 'Al-Nadeeb Customs & Ministry of Public Health Protocol',
    frequency: '3x Weekly Sailings'
  },
  {
    destinationPort: 'Port Sudan & Mombasa',
    country: 'East Africa Corridors',
    transitTime: '5 – 8 Days',
    transportMode: 'Sea Container (FCL)',
    customsProtocol: 'Direct Jebel Ali Bonded Transshipment (Re-Export Protocol)',
    frequency: 'Weekly Liners'
  },
  {
    destinationPort: 'Karachi Port (KPT / QICT)',
    country: 'Pakistan',
    transitTime: '2 – 3 Days',
    transportMode: 'Sea Container (FCL)',
    customsProtocol: 'WeBOC Fast-Track Agro Clearance',
    frequency: '4x Weekly Direct Sailings'
  }
];

export const COMPANY_INFO = {
  name: 'Akla Foodstuff Trading LLC',
  arabicName: 'شركة أكلا لتجارة المواد الغذائية ذ.م.م',
  tagline: 'Premier Dubai Food Commodities & Re-Export Gateway',
  commercialLicenseNo: 'CN-8947213',
  dubaiChamberNo: '348210',
  vatTrn: '100492817200003',
  mirsalCustomsCode: 'AE-7892110',
  dpWorldTerminalCode: 'DPW-DXB-AKL88',
  foodWatchRegistered: true,
  established: 2011,
  
  headOffice: {
    title: 'Commercial Head Office & Commodity Trading Desk',
    address: 'Al Quoz Industrial Area, Dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    poBox: 'P.O. Box 84920, Dubai, UAE',
    workingHours: 'Sunday – Friday: 8:00 AM – 6:30 PM (GST UTC+4)',
    latLng: '25.1432° N, 55.2341° E'
  },
  
  logisticsHub: {
    title: 'Central Distribution & Climate Warehouse (DIC / DIP)',
    address: 'Warehouse Block C-14, Dubai Wholesale City / DIP Sector 2, Jebel Ali Corridor',
    city: 'Dubai',
    country: 'United Arab Emirates',
    capacity: '8,500 Sq. Meters (Climate-Controlled 18°C–24°C)',
    loadingDocks: '6 Hydraulic Heavy-Duty Container Docks (20ft & 40ft FCL handling)',
    weighbridgeCapacity: '100 Metric Tons Electronic Weighbridge on-site'
  },

  contacts: {
    generalPhone: '+971 4 228 9412',
    mobileTradeWhatsapp: '+971 50 842 1973',
    salesEmail: 'inquiry@aklafoodstuff.ae',
    tradeDeskEmail: 'orders@aklafoodstuff.ae',
    complianceEmail: 'quality@aklafoodstuff.ae',
  },

  tradeDesks: [
    {
      title: 'Rice & Grains Trading Desk',
      deskHead: 'Tariq Al-Mansoor',
      role: 'Senior Commodity Merchant',
      phone: '+971 50 842 1973',
      specialty: '1121 Basmati (Steam & Sella), Thai Hom Mali Jasmine, Commercial Bakery Flour',
      dailyVolume: '150+ MT Avg',
    },
    {
      title: 'Pulses & Spices Trading Desk',
      deskHead: 'Hamza Farooq',
      role: 'Head of Spices & Pulses',
      phone: '+971 52 719 4038',
      specialty: 'Kabuli Chickpeas (8mm–12mm), Red Lentils, Green Cardamom, Cumin, Black Pepper',
      dailyVolume: '85+ MT Avg',
    },
    {
      title: 'Edible Oils & Institutional Commodities',
      deskHead: 'Nasser Al-Husseini',
      role: 'Bulk Oil & Sugar Trader',
      phone: '+971 55 631 8290',
      specialty: 'Sunflower Oil CP8, RBD Palm Olein, Pure Desi Ghee, ICUMSA 45 Sugar',
      dailyVolume: '200+ MT Avg',
    }
  ],

  certifications: [
    { name: 'HACCP Certified', issuer: 'TÜV Middle East', code: 'HACCP-UAE-2024' },
    { name: 'ISO 22000:2018', issuer: 'Food Safety Management Systems', code: 'FSMS-94021' },
    { name: 'ESMA Halal National Mark', issuer: 'Ministry of Industry (MoIAT UAE)', code: 'HAL-ESMA-77' },
    { name: 'Dubai Municipality FIRS', issuer: 'Food Import and Re-export System', code: 'DM-FIRS-8841' },
    { name: 'Dubai Chamber of Commerce', issuer: 'Government of Dubai', code: 'DC-348210' },
  ],

  tradeStats: [
    { label: 'Global Trade Network', value: '45+', subtext: 'Import Origins & Export Ports' },
    { label: 'Monthly Throughput', value: '3,800+', subtext: 'Metric Tons (MT) Shipped' },
    { label: 'Central Logistics Area', value: '85,000', subtext: 'Sq. Ft Climate-Controlled Facility' },
    { label: 'Jebel Ali Customs Transit', value: '24-48h', subtext: 'Fast-Track Mirsal II Re-Export' },
  ],

  faqs: [
    {
      q: 'What are the accepted wholesale payment and trade finance terms?',
      a: 'We accommodate 100% Irrevocable Letter of Credit at sight (L/C at sight from top-tier international and regional banks), Telegraphic Transfer (T/T with 30% advance deposit and 70% against clean non-negotiable Bill of Lading copy), and Cash Against Documents (CAD) for established corporate trade partners. Local UAE buyers can utilize post-dated checks and bank guarantees upon credit approval.'
    },
    {
      q: 'Can Akla Foodstuff provide custom OEM and Private Label packaging for GCC retailers?',
      a: 'Yes. We operate fully automated and semi-automated high-speed packaging lines in our Dubai facility. We package rice, pulses, spices, and edible oils under your proprietary brand in 1kg, 2kg, 5kg, 10kg, 25kg, and 50kg bags (BOPP, Non-Woven, Kraft, or Jute) fully compliant with GSO 9/2013 and GSO 150/2013 bilingual Arabic/English food labeling standards.'
    },
    {
      q: 'How fast can goods be dispatched from Dubai to Saudi Arabia, Oman, or other GCC countries?',
      a: 'For stocked items in our Dubai Wholesale City warehouse, cross-border bonded land transit to Riyadh/Dammam (KSA) takes 48 to 72 hours via Batha border with complete SASO, Saber, and SFDA customs documentation. Deliveries across the UAE (Dubai, Abu Dhabi, Sharjah, Ajman) are dispatched within 24 hours.'
    },
    {
      q: 'Can international buyers request sealed pre-shipment laboratory samples?',
      a: 'Certainly. We dispatch 500g–1kg sealed representative batch samples via DHL or FedEx Express along with Certificate of Analysis (COA), moisture testing reports, and phytosanitary certificates for laboratory inspection before contract signing.'
    },
    {
      q: 'Do you facilitate direct container re-export from Jebel Ali Port (FOB / CIF)?',
      a: 'Yes. Being strategically positioned adjacent to Jebel Ali Port (DP World), we handle transit transshipments under bonded status without mainland customs duty, saving substantial tariffs for clients importing to East Africa, Central Asia, and Mediterranean ports.'
    }
  ]
};


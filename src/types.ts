export type ProductCategory = 
  | 'all'
  | 'rice-grains'
  | 'pulses-legumes'
  | 'spices-herbs'
  | 'edible-oils'
  | 'dry-fruits-nuts'
  | 'sugar-salt'
  | 'poultry-meat'
  | 'canned-packaged';

export interface Product {
  id: string;
  name: string;
  arabicName: string;
  category: ProductCategory;
  origin: string;
  grade: string;
  moq: string; // e.g. "1 Metric Ton (MT)" or "1 FCL 20ft"
  packagingOptions: string[];
  shelfLife: string;
  hsCode?: string;
  description: string;
  specs: {
    purity?: string;
    moisture?: string;
    brokenRatio?: string;
    grainLength?: string;
    color?: string;
    admixture?: string;
    processing?: string;
    freeFattyAcids?: string;
    brix?: string;
  };
  certifications: string[];
  referencePriceAedPerKg?: number; // approximate wholesale guide
  image: string;
  featured?: boolean;
  stockStatus?: 'Ready DIP Stock' | 'Direct Mill FCL' | 'Jebel Ali Transit';
}

export interface RfqItem {
  product: Product;
  quantity: number;
  unit: 'MT' | 'Bags' | 'Cartons' | 'Pallets' | 'FCL 20ft' | 'FCL 40ft';
  packagingPreference: string;
  customNotes?: string;
}

export type Currency = 'AED' | 'USD' | 'SAR' | 'EUR';

export interface CurrencyRate {
  code: Currency;
  symbol: string;
  rateAgainstAed: number; // 1 AED = X Currency
  label: string;
}

export type Incoterm = 'EXW' | 'FOB' | 'CIF' | 'CNF' | 'DDP';

export interface InquiryFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  destinationCountry: string;
  destinationPort: string;
  incoterm: Incoterm;
  targetDate: string;
  additionalRequirements: string;
}

export interface SpotCommodityIndex {
  symbol: string;
  name: string;
  origin: string;
  fobPort: string;
  priceUsdPerMt: number;
  change24h: number; // percentage
  trend: 'up' | 'down' | 'stable';
  packaging: string;
}

export interface TransitRoute {
  destinationPort: string;
  country: string;
  transitTime: string;
  transportMode: 'Sea Container (FCL)' | 'Cross-Border Bonded Truck' | 'Feeder Vessel';
  customsProtocol: string;
  frequency: string;
}

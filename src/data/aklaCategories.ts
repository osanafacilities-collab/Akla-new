export interface AklaCategory {
  id: string;
  num: string;
  name: string;
  arabicName: string;
  description: string;
  image: string;
  fallbackImage?: string;
  icon?: string;
  itemsSample?: string[];
  keyOrigins?: string;
  packagingTypes?: string;
}

export const AKLA_CATEGORIES: AklaCategory[] = [
  {
    id: 'fresh-fruits-vegetables',
    num: '01',
    name: 'Fresh Fruits & Vegetables',
    arabicName: 'الفواكه والخضروات الطازجة',
    description: 'Farm-fresh grade-A produce imported via express air cargo and temperature-controlled reefer sea containers for GCC retailers and food service.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=85',
    icon: '🍎',
    keyOrigins: 'India, Pakistan, Egypt, South Africa & Europe',
    packagingTypes: 'Mesh Bags, Corrugated Ventilated Cartons & Wooden Crates',
    itemsSample: [
      'Fresh Red Onions & Table Potatoes',
      'Pakistani & Indian Mangoes (Chaunsa, Sindhri & Alphonso)',
      'Citrus, Oranges, Lemons & Mandarins',
      'Fresh Ginger, Garlic & Green Chilies',
      'Fresh Tomatoes, Capsicum & Seasonal Greens'
    ]
  },
  {
    id: 'meat-seafood',
    num: '02',
    name: 'Meat & Seafood',
    arabicName: 'اللحوم والدواجن والمأكولات البحرية',
    description: '100% Dhabiha Halal certified frozen and chilled meats, poultry primals, and fresh-frozen seafood managed under strict uninterrupted cold-chain compliance.',
    image: '/1789572800511.png',
    fallbackImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85',
    icon: '🥩',
    keyOrigins: 'Brazil, India, Australia, Pakistan & Norway',
    packagingTypes: 'Individually Wrapped (IWP), 10kg–25kg Master Cartons & Reefer FCL',
    itemsSample: [
      'Brazilian Halal Frozen Whole Chicken & Griller (900g–1400g)',
      'Boneless Skinless Chicken Breast (IQF) & Shawarma Cuts',
      'Prime Halal Chilled & Frozen Mutton / Lamb Carcasses',
      'Boneless Buffalo & Beef Primal Cuts (Silver Side / Topside)',
      'Frozen Prawns, Shrimps, Salmon Fillets & Canned Tuna'
    ]
  },
  {
    id: 'grains-cereals-lentils',
    num: '03',
    name: 'Whole Grains, Cereals & Lentils',
    arabicName: 'الحبوب الكاملة والبقوليات والعدس',
    description: 'Triple-cleaned, Sortex-polished pulses, staple agricultural grains, and lentils imported in bulk for food packers, institutions, and supermarkets.',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=85',
    icon: '🌾',
    keyOrigins: 'Australia, Canada, India, Myanmar & Turkey',
    packagingTypes: '25kg & 50kg Polypropylene (PP) Bags & 1,000kg Bulk Totes',
    itemsSample: [
      'Red Split Lentils (Masoor) & Football Lentils',
      'Chana Dal, Moong Dal & Toor Dal',
      'Kabuli Chickpeas (8mm, 9mm & 10mm Jumbo)',
      'High-Protein Milling Wheat & Yellow Corn',
      'White Kidney Beans, Black Eyed Peas & Green Peas'
    ]
  },
  {
    id: 'whole-spices',
    num: '04',
    name: 'Whole Spices',
    arabicName: 'البهارات والتوابل الكاملة',
    description: 'Steam-sterilized, machine-graded whole spices packed with natural essential oils and pungent aromas for commercial mills, chefs, and retail packers.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=85',
    icon: '🌶️',
    keyOrigins: 'India, Guatemala, Vietnam, Sri Lanka & Syria',
    packagingTypes: '5kg Vacuum Bags, 25kg Double PP Bags & Jute Sacks',
    itemsSample: [
      'Extra Bold Green Cardamom (8mm & 8.5mm Caliber)',
      'Whole Cumin Seeds (Jeera 99% Purity Sortex)',
      'Whole Black Pepper (550 GL / MG-1 Density)',
      'Cinnamon Quills, Cloves & Star Anise',
      'Whole Coriander Seeds, Fennel Seeds & Turmeric Fingers'
    ]
  },
  {
    id: 'sella-basmati-rice',
    num: '05',
    name: 'Sella Rice & Basmati Rice',
    arabicName: 'أرز بسمتي وأرز سيلا الفاخر',
    description: 'Direct mill imports of world-renowned long-grain aromatic Basmati and parboiled golden Sella rice, perfected for Biryani, Mandi, and catering houses.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=85',
    icon: '🍚',
    keyOrigins: 'Punjab (India & Pakistan) & Thailand',
    packagingTypes: '5kg, 10kg, 20kg, 25kg & 40kg Non-Woven & BOPP Bags',
    itemsSample: [
      '1121 XXL Steam Basmati Rice (8.35mm+ Grain Length)',
      '1121 Golden Sella Parboiled Rice (Catering Benchmark)',
      '1509 Basmati & White Sella Rice',
      'Thai Hom Mali Fragrant Jasmine Rice (AAA)',
      'Long-Grain Parboiled & Non-Basmati Commercial Rice'
    ]
  },
  {
    id: 'milk-dairy-products',
    num: '06',
    name: 'Milk & Milk Products',
    arabicName: 'الحليب ومنتجات الألبان',
    description: 'Premium long-life UHT dairy milk, evaporated milk, whole milk powders, butter, and bulk cheeses imported from certified dairy cooperatives.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=85',
    icon: '🥛',
    keyOrigins: 'New Zealand, Poland, France, Germany & Ireland',
    packagingTypes: '1L Tetrapak (12x1L), 400g/2.5kg Tins & 25kg Multi-Kraft Bags',
    itemsSample: [
      'Full Cream UHT Long-Life Liquid Milk (1L Tetrapak)',
      'Evaporated Milk & Sweetened Condensed Milk (Tins)',
      'Full Cream Milk Powder (FCMP 28% Fat) & Skimmed Milk Powder',
      'Pure Creamery Butter (82% Butterfat Salted / Unsalted)',
      'Block Cheddar, Mozzarella & Feta Cheese for Foodservice'
    ]
  },
  {
    id: 'beverages-soft-drinks',
    num: '07',
    name: 'Beverages & Soft Drinks',
    arabicName: 'المشروبات والعصائر والمياه',
    description: 'Comprehensive wholesale supply of bottled natural mineral waters, sparkling sodas, real fruit juices, and leading carbonated beverage lines.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=85',
    icon: '🥤',
    keyOrigins: 'UAE, Europe, Turkey & Saudi Arabia',
    packagingTypes: 'PET Bottles (330ml, 500ml, 1.5L), Sleek Cans & Shrink-Wrapped Trays',
    itemsSample: [
      'Bottled Natural Mineral Water (Local & Imported)',
      'Sparkling Waters & Flavored Carbonated Sodas',
      '100% Pure Fruit Juices, Nectars & Mango Pulps',
      'Popular Global Carbonated Soft Drinks (330ml Cans)',
      'Energy Drinks & Ready-to-Drink Bottled Iced Teas'
    ]
  },
  {
    id: 'snacks',
    num: '08',
    name: 'Snacks & Confectionery',
    arabicName: 'المقرمشات والحلويات الخفيفة',
    description: 'High-demand packaged consumer snacks, crispy wafers, traditional tea biscuits, savory potato crisps, and confectionery for retail distribution.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=85',
    icon: '🍪',
    keyOrigins: 'UAE, Turkey, Malaysia, India & Europe',
    packagingTypes: 'Master Cartons, Retail Display Counter Boxes & Hang-Sell Strips',
    itemsSample: [
      'Crispy Cream Wafers & Tea Biscuits (Bulk & Retail Packs)',
      'Savory Potato Crisps, Corn Chips & Puffed Snacks',
      'Chocolates, Toffees & Chewy Confectionery',
      'Roasted & Salted Seed & Nut Trail Mixes',
      'Crackers, Pretzels & Institutional Snack Trays'
    ]
  },
  {
    id: 'oils-ghee',
    num: '09',
    name: 'Oils & Ghee',
    arabicName: 'زيوت الطهي والسمن النقي',
    description: 'Pure refined edible vegetable oils, cold-pressed virgin seed oils, and rich traditional desi cow ghee for hypermarkets and industrial catering.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1541256942802-7b2996802bf1?auto=format&fit=crop&w=800&q=85',
    icon: '🫒',
    keyOrigins: 'Ukraine, Malaysia, India, Spain & Argentina',
    packagingTypes: '1.5L & 5L PET Bottles, 15L Food-Grade Tins, Drums & Flexitanks',
    itemsSample: [
      'Refined Sunflower Oil CP8 (GSO 1016 Standard)',
      'Pure Desi Cow Ghee (Aromatic Golden Texture)',
      'Cold-Pressed Kachi Ghani Mustard Oil',
      'Refined Palm Olein (CP8 / CP10) & Pure Corn Oil',
      'Spanish Extra Virgin & Pure Pomace Olive Oil'
    ]
  },
  {
    id: 'dry-fruits',
    num: '10',
    name: 'Dry Fruits & Premium Nuts',
    arabicName: 'المكسرات والفواكه المجففة',
    description: 'Hand-selected edible nuts, natural sun-dried fruits, and Arabian gourmet dates sourced directly from certified orchards worldwide.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=800&q=85',
    icon: '🥜',
    keyOrigins: 'USA (California), Saudi Arabia, Iran, Chile & Vietnam',
    packagingTypes: '10kg Vacuum Foil Packs, 25kg Cartons & Retail Pouches',
    itemsSample: [
      'California Whole Almonds (Non-Pareil 23/25) & Walnuts',
      'Whole White Cashew Nuts (W240 & W320 Jumbo Grades)',
      'Natural Iranian & American Roasted/Salted Pistachios',
      'Arabian Gourmet Dates (Medjool, Sagai, Ajwa & Khalas)',
      'Golden Seedless Raisins, Dried Turkish Apricots & Figs'
    ]
  }
];

export interface AklaCategory {
  id: string;
  num: string;
  name: string;
  arabicName: string;
  description: string;
  image: string;
  icon?: string;
  itemsSample?: string[];
}

export const AKLA_CATEGORIES: AklaCategory[] = [
  {
    id: 'grains-cereals-legumes',
    num: '01',
    name: 'Grains, Cereals & Legumes',
    arabicName: 'الحبوب والبقوليات والأرز',
    description: 'Rice, lentils, chickpeas, beans, pulses and cereals.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=85',
    icon: '🌾',
    itemsSample: ['1121 Steam Basmati', 'Golden Sella Rice', 'Kabuli Chickpeas 9mm', 'Red Split Lentils']
  },
  {
    id: 'food-beverages',
    num: '02',
    name: 'Food & Beverages',
    arabicName: 'الأغذية والمشروبات المعلبة',
    description: 'Packaged food, beverages and FMCG essentials.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85',
    icon: '🥫',
    itemsSample: ['Canned Goods', 'Tomato Paste', 'Evaporated Milk', 'Commercial Sauces']
  },
  {
    id: 'snack-foods',
    num: '03',
    name: 'Snack Foods',
    arabicName: 'الأغذية الخفيفة والحلويات',
    description: 'Biscuits, confectionery and packaged snacks.',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2aa563c4?auto=format&fit=crop&w=800&q=85',
    icon: '🍪',
    itemsSample: ['Wafers & Biscuits', 'Confectionery', 'Roasted Nuts', 'Crackers']
  },
  {
    id: 'fish-seafood',
    num: '04',
    name: 'Fish & Seafood',
    arabicName: 'الأسماك والمأكولات البحرية',
    description: 'Salted, preserved and selected seafood products.',
    image: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=800&q=85',
    icon: '🐟',
    itemsSample: ['Preserved Seafood', 'Canned Tuna & Sardines', 'Dry Salted Fish']
  },
  {
    id: 'eggs-trading',
    num: '05',
    name: 'Eggs Trading',
    arabicName: 'تجارة البيض الطازج',
    description: 'Fresh egg supply for retail and bulk requirements.',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=85',
    icon: '🥚',
    itemsSample: ['Table Eggs Grade A', 'Carton Trays 360s', 'Brown & White Eggs']
  },
  {
    id: 'flour-trading',
    num: '06',
    name: 'Flour Trading',
    arabicName: 'تجارة الدقيق والطحين',
    description: 'Quality flour products for household and business needs.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85',
    icon: '🍞',
    itemsSample: ['Chakki Whole Wheat Atta', 'All-Purpose Maida', 'Bakery Flour 50kg']
  },
  {
    id: 'ghee-vegetable-oil',
    num: '07',
    name: 'Ghee & Vegetable Oil',
    arabicName: 'السمن والزيوت النباتية',
    description: 'Premium ghee, cooking and edible oil products.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=85',
    icon: '🫒',
    itemsSample: ['Refined Sunflower Oil CP8', 'Pure Desi Cow Ghee', 'Palm Olein IV56', 'Corn Oil']
  },
  {
    id: 'soft-drinks-water',
    num: '08',
    name: 'Soft Drinks & Water',
    arabicName: 'المشروبات الغازية والمياه',
    description: 'Soft drinks, carbonated water and beverages.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85',
    icon: '🥤',
    itemsSample: ['Bottled Mineral Water', 'Sparkling Water', 'Fruit Juices', 'Soft Drinks']
  },
  {
    id: 'dried-fruits-vegetables',
    num: '09',
    name: 'Dried Fruits & Vegetables',
    arabicName: 'الفواكه والخضروات المجففة',
    description: 'Dates, raisins, dry fruits and selected dried products.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=85',
    icon: '🥜',
    itemsSample: ['Medjool & Khalas Dates', 'Golden Raisins', 'Dried Apricots', 'Cashews & Almonds']
  },
  {
    id: 'fresh-fruits-vegetables',
    num: '10',
    name: 'Fresh Fruits & Vegetables',
    arabicName: 'الفواكه والخضروات الطازجة',
    description: 'Fresh produce for wholesale, retail and distribution.',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=85',
    icon: '🍎',
    itemsSample: ['Potatoes & Onions', 'Garlic & Ginger', 'Citrus & Apples', 'Wholesale Crates']
  },
];

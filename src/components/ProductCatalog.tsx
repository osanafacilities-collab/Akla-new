import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Eye, 
  Globe, 
  Package, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpDown, 
  LayoutGrid, 
  List, 
  Search, 
  X, 
  ShieldCheck, 
  Building2,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';

interface ProductCatalogProps {
  onOpenProductDetail: (p: Product) => void;
  onSelectProductForQuote: (p: Product) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

type SortOption = 'featured' | 'name-asc' | 'origin-asc' | 'price-asc';
type StockFilter = 'all' | 'ready' | 'direct';
type ViewMode = 'grid' | 'table';

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenProductDetail,
  onSelectProductForQuote,
  searchQuery,
  onSearchChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [stockFilter, setStockFilter] = useState<StockFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      // Category filter
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      
      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.arabicName.includes(query) ||
        p.origin.toLowerCase().includes(query) ||
        p.grade.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.hsCode && p.hsCode.includes(query));

      // Stock status filter
      let matchStock = true;
      if (stockFilter === 'ready') {
        matchStock = p.stockStatus === 'Ready DIP Stock';
      } else if (stockFilter === 'direct') {
        matchStock = p.stockStatus === 'Direct Mill FCL';
      }

      return matchCat && matchSearch && matchStock;
    });

    // Sorting logic
    return list.sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'origin-asc') {
        return a.origin.localeCompare(b.origin);
      }
      if (sortBy === 'price-asc') {
        const priceA = a.referencePriceAedPerKg ?? 0;
        const priceB = b.referencePriceAedPerKg ?? 0;
        return priceA - priceB;
      }
      // 'featured' default: featured first, then original order
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, stockFilter, sortBy]);

  const hasActiveFilters = selectedCategory !== 'all' || stockFilter !== 'all' || searchQuery.trim() !== '' || sortBy !== 'featured';

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setStockFilter('all');
    setSortBy('featured');
    onSearchChange('');
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#E3DCCF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E0D7C6]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE8DA] text-[#866D38] text-xs font-bold uppercase tracking-widest border border-[#D9CEBA]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Commercial Wholesale Portfolio</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#0D1C15] tracking-tight">
              Direct Mill Imports &amp; Flagship Commodities
            </h2>
            <p className="text-sm text-[#4E6357] max-w-2xl font-normal leading-relaxed">
              Curated core food commodities available in 20ft/40ft Full Container Loads (FCL), metric tons (MT), and immediate dispatch from our Dubai Investment Park warehouses.
            </p>
          </div>

          {/* Quick Stats & View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 text-xs text-[#52665B] bg-white px-4 py-2.5 rounded-xl border border-[#D8CEBC] shadow-modern-sm">
              <span className="font-heading font-black text-[#0D1C15] text-base">{processedProducts.length}</span>
              <span className="font-medium">Commodities Listed</span>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-1 bg-white rounded-xl border border-[#D8CEBC] shadow-modern-sm">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'text-[#FAF8F5]' : 'text-[#52665B] hover:text-[#0D1C15]'
                }`}
                title="Grid View"
              >
                {viewMode === 'grid' && (
                  <motion.div
                    layoutId="viewModePill"
                    className="absolute inset-0 bg-[#12231C] rounded-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <LayoutGrid className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">Grid</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'table' ? 'text-[#FAF8F5]' : 'text-[#52665B] hover:text-[#0D1C15]'
                }`}
                title="Trade Table View"
              >
                {viewMode === 'table' && (
                  <motion.div
                    layoutId="viewModePill"
                    className="absolute inset-0 bg-[#12231C] rounded-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <List className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Modern Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'text-[#FAF8F5]'
                    : 'text-[#44574D] hover:text-[#0D1C15] bg-white hover:bg-[#F2ECE0] border border-[#D8CEBC]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#12231C] rounded-xl shadow-modern-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
                <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-[#213F32] text-[#E5C158]' : 'bg-[#EFE8DA] text-[#695738]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Sorting & Stock Filter Bar */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D8CEBC] shadow-modern-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Stock Readiness Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#6D8276] uppercase tracking-wider mr-1 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-[#866D38]" />
              Stock:
            </span>
            
            <button
              onClick={() => setStockFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                stockFilter === 'all'
                  ? 'bg-[#12231C] text-white shadow-xs'
                  : 'bg-[#FAF8F3] text-[#4E6357] hover:bg-[#EFE8DA] border border-[#E3DCCF]'
              }`}
            >
              All Ready Stock ({PRODUCTS.length})
            </button>

            <button
              onClick={() => setStockFilter('ready')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                stockFilter === 'ready'
                  ? 'bg-[#0E4731] text-white shadow-xs'
                  : 'bg-[#FAF8F3] text-[#4E6357] hover:bg-[#EFE8DA] border border-[#E3DCCF]'
              }`}
            >
              Ready DIP Stock
            </button>

            <button
              onClick={() => setStockFilter('direct')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                stockFilter === 'direct'
                  ? 'bg-[#8A6825] text-white shadow-xs'
                  : 'bg-[#FAF8F3] text-[#4E6357] hover:bg-[#EFE8DA] border border-[#E3DCCF]'
              }`}
            >
              Direct Mill FCL
            </button>
          </div>

          {/* Right Toolbar: Search Input + Sorting Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Quick Filter Search */}
            <div className="relative flex-1 md:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#7F9488]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Filter commodities..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-[#FAF8F3] border border-[#D5CABB] rounded-lg text-[#0D1C15] placeholder:text-[#8E9F96] focus:outline-hidden focus:border-[#12231C] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7F9488] hover:text-[#0D1C15]"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="relative shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F3] border border-[#D5CABB] rounded-lg text-xs font-semibold text-[#0D1C15]">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#866D38]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-transparent border-none text-xs font-semibold text-[#0D1C15] focus:outline-hidden cursor-pointer"
                >
                  <option value="featured">Top Demand (Featured)</option>
                  <option value="name-asc">Commodity Name (A-Z)</option>
                  <option value="origin-asc">Origin Country</option>
                  <option value="price-asc">Price Guide (Low to High)</option>
                </select>
              </div>
            </div>

            {/* Reset Filters if Active */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="p-1.5 rounded-lg bg-[#FAF8F3] hover:bg-[#EFE8DA] text-[#7F9488] hover:text-[#0D1C15] border border-[#D5CABB] transition-colors"
                title="Reset all filters"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {processedProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white rounded-2xl border border-[#D8CEBC] p-8 space-y-4 shadow-modern-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center mx-auto text-[#8C764D]">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#0D1C15]">No commodities match your criteria</h3>
            <p className="text-xs text-[#5D7267] max-w-md mx-auto leading-relaxed">
              We couldn't find items matching "{searchQuery}". Try searching for staple commodities like "Basmati", "Chickpeas", "Cardamom", or "Sunflower Oil".
            </p>
            <button
              onClick={resetAllFilters}
              className="px-5 py-2.5 bg-[#12231C] text-white text-xs font-bold tracking-wider uppercase rounded-lg hover:bg-[#1A3329] transition-colors cursor-pointer shadow-xs"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : viewMode === 'grid' ? (
          /* =========================================================================
             1. MODERN ANIMATED GRID CARDS VIEW
             ========================================================================= */
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {processedProducts.map((product) => {
                const isReadyStock = product.stockStatus === 'Ready DIP Stock';
                return (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.28 }}
                    whileHover={{ y: -6 }}
                    onClick={() => onOpenProductDetail(product)}
                    className="group bg-white rounded-2xl border border-[#D5CABB] hover:border-[#BFAF98] shadow-modern-sm hover:shadow-modern-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
                  >
                    {/* Top Image Banner with Hover Zoom */}
                    <div className="relative aspect-4/3 w-full bg-[#F3ECE0] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0E1A15]/85 via-[#0E1A15]/20 to-transparent" />

                      {/* Origin Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E1A15]/85 backdrop-blur-md text-white text-[11px] font-semibold border border-[#2B4738]">
                        <Globe className="w-3 h-3 text-[#E5C158]" />
                        <span>{product.origin}</span>
                      </div>

                      {/* Stock Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`px-2.5 py-0.8 rounded-full text-[10px] font-bold tracking-wide uppercase border backdrop-blur-md ${
                          isReadyStock
                            ? 'bg-[#0E4731]/90 text-[#6EE7B7] border-[#059669]/60'
                            : 'bg-[#523B0F]/90 text-[#FDE68A] border-[#D97706]/60'
                        }`}>
                          {product.stockStatus ?? 'Ready Stock'}
                        </span>
                      </div>

                      {/* Grade & HS Code Overlay on Image */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                        <span className="font-semibold truncate drop-shadow-sm">{product.grade}</span>
                        {product.hsCode && (
                          <span className="font-mono text-[9px] bg-[#0E1A15]/90 px-2 py-0.5 rounded text-[#E5C158] border border-[#2B4738]">
                            HS {product.hsCode}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-[#0D1C15] group-hover:text-[#9E824C] transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <div className="text-xs text-[#9E824C] font-arabic font-semibold mt-1" dir="rtl">
                          {product.arabicName}
                        </div>

                        <p className="text-xs text-[#52665B] line-clamp-2 mt-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Specs Mini-Grid */}
                      <div className="pt-2 border-t border-[#ECE5D7] grid grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-[#FAF8F3] p-2.5 rounded-lg border border-[#E4DCCE]">
                          <span className="text-[#7F9488] block text-[9px] font-bold uppercase tracking-wider">
                            Wholesale MOQ
                          </span>
                          <span className="font-bold text-[#14231D] truncate block mt-0.5 text-xs">
                            {product.moq}
                          </span>
                        </div>
                        <div className="bg-[#FAF8F3] p-2.5 rounded-lg border border-[#E4DCCE]">
                          <span className="text-[#7F9488] block text-[9px] font-bold uppercase tracking-wider">
                            Shelf Life
                          </span>
                          <span className="font-bold text-[#14231D] truncate block mt-0.5 text-xs">
                            {product.shelfLife}
                          </span>
                        </div>
                      </div>

                      {/* Packaging Info */}
                      <div className="text-[11px] text-[#4E6357] flex items-center gap-1.5 truncate">
                        <Package className="w-3.5 h-3.5 text-[#9E824C] shrink-0" />
                        <span className="truncate">{product.packagingOptions[0]}</span>
                      </div>

                      {/* Action Buttons with Micro-interactions */}
                      <div className="pt-3 border-t border-[#ECE5D7] flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenProductDetail(product);
                          }}
                          className="flex-1 py-2.5 px-3 rounded-lg bg-[#FAF8F3] hover:bg-[#EFE8DA] text-[#24382E] text-xs font-bold tracking-wide transition-colors cursor-pointer border border-[#D5CABB] flex items-center justify-center gap-1.5"
                          title="View Technical Specifications"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#7F9488]" />
                          <span>Specs</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProductForQuote(product);
                          }}
                          className="flex-1 py-2.5 px-3 rounded-lg bg-[#12231C] hover:bg-[#1A3329] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs border border-[#254234]"
                          title="Request Proforma Wholesale Quote"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#E5C158]" />
                          <span>Quote</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* =========================================================================
             2. PROFESSIONAL INSTITUTIONAL B2B TRADE TABLE VIEW
             ========================================================================= */
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-2xl border border-[#D8CEBC] shadow-modern-sm overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#12231C] text-[#FAF8F5] text-[11px] font-bold uppercase tracking-wider border-b border-[#24382E]">
                    <th className="py-3.5 px-4 font-heading">Commodity &amp; Grade</th>
                    <th className="py-3.5 px-4 font-heading">Origin</th>
                    <th className="py-3.5 px-4 font-heading">Wholesale MOQ</th>
                    <th className="py-3.5 px-4 font-heading">Primary Packaging</th>
                    <th className="py-3.5 px-4 font-heading">Stock Status</th>
                    <th className="py-3.5 px-4 font-heading text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4D7] text-xs">
                  {processedProducts.map((product) => {
                    const isReadyStock = product.stockStatus === 'Ready DIP Stock';
                    return (
                      <motion.tr
                        key={product.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenProductDetail(product)}
                        className="hover:bg-[#FAF7F0] transition-colors cursor-pointer group"
                      >
                        {/* Commodity Column with thumbnail */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover border border-[#D5CABB] shrink-0"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <div className="font-heading font-bold text-[#0D1C15] group-hover:text-[#9E824C] transition-colors text-sm">
                                {product.name}
                              </div>
                              <div className="text-[11px] text-[#9E824C] font-arabic font-medium" dir="rtl">
                                {product.arabicName}
                              </div>
                              <div className="text-[11px] text-[#71877B] mt-0.5">
                                {product.grade} {product.hsCode && `• HS ${product.hsCode}`}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Origin Column */}
                        <td className="py-3.5 px-4">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF8F3] border border-[#E0D7C6] text-xs font-semibold text-[#24382E]">
                            <Globe className="w-3 h-3 text-[#D4AF37]" />
                            <span>{product.origin}</span>
                          </div>
                        </td>

                        {/* MOQ Column */}
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-[#0D1C15]">{product.moq}</span>
                          <span className="block text-[10px] text-[#7F9488]">Shelf: {product.shelfLife}</span>
                        </td>

                        {/* Packaging Column */}
                        <td className="py-3.5 px-4 text-[#4E6357] max-w-[180px] truncate">
                          <div className="flex items-center gap-1.5">
                            <Package className="w-3.5 h-3.5 text-[#9E824C] shrink-0" />
                            <span className="truncate">{product.packagingOptions[0]}</span>
                          </div>
                        </td>

                        {/* Status Column */}
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                            isReadyStock
                              ? 'bg-[#EAF8F1] text-[#0E7048] border-[#A8E4C7]'
                              : 'bg-[#FEF6E7] text-[#975A0E] border-[#F4D79B]'
                          }`}>
                            {product.stockStatus ?? 'Ready'}
                          </span>
                        </td>

                        {/* Actions Column */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="inline-flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                            <button
                              type="button"
                              onClick={() => onOpenProductDetail(product)}
                              className="px-2.5 py-1.5 rounded-lg bg-[#FAF8F3] hover:bg-[#EFE8DA] text-[#24382E] text-xs font-bold border border-[#D5CABB] transition-colors"
                              title="View Specifications"
                            >
                              Specs
                            </button>
                            <button
                              type="button"
                              onClick={() => onSelectProductForQuote(product)}
                              className="px-3 py-1.5 rounded-lg bg-[#12231C] hover:bg-[#1A3329] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider border border-[#254234] transition-colors shadow-xs"
                              title="Request Proforma Quote"
                            >
                              Quote
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Trade Assurance Guarantee Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-linear-to-r from-[#12231C] to-[#1C362B] text-white border border-[#2B4738] shadow-modern-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Guaranteed Pre-Loading Inspection &amp; UAE Municipality Clearance
              </h4>
              <p className="text-xs text-[#9BB1A5] mt-1 max-w-xl">
                Every consignment includes SGS / Intertek certificate of analysis, phytosanitary clearance, certified Halal compliance, and bonded customs release at Jebel Ali Port or DIP warehouse.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[#E5C158] hover:bg-[#D4AF37] text-[#0D1C15] font-heading font-black text-xs uppercase tracking-wider rounded-xl transition-colors shadow-modern-sm flex items-center gap-2"
            >
              <span>Speak to Trade Desk</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

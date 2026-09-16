import React, { useState } from 'react';
import { useSiteEditor } from '../../context/SiteEditorContext';
import { 
  X, 
  Building2, 
  Sparkles, 
  Package, 
  FileText, 
  Truck, 
  Download, 
  Check, 
  RotateCcw,
  Upload,
  Save
} from 'lucide-react';

export const ContentManagerDrawer: React.FC = () => {
  const { 
    activePanel, 
    setActivePanel, 
    content, 
    updateText, 
    updateCategory, 
    openImagePicker, 
    resetToDefaults, 
    exportContentJson, 
    importContentJson,
    saveToServer,
    isSaving,
    showToast 
  } = useSiteEditor();

  const [activeTab, setActiveTab] = useState<'company' | 'hero' | 'products' | 'about' | 'wholesale' | 'backup'>('company');
  const [selectedCatId, setSelectedCatId] = useState(content.categories[0]?.id || 'fresh-fruits-veg');

  if (activePanel !== 'cms') return null;

  const currentCategory = content.categories.find(c => c.id === selectedCatId) || content.categories[0];

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        importContentJson(content);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={() => setActivePanel('none')}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-[#C89B3C]/40 w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B5699] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#C89B3C] text-[#071A2F] flex items-center justify-center font-black shadow-sm">
              <FileText className="w-5 h-5 text-[#071A2F]" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold">Full Website Content Manager</h3>
              <p className="text-xs text-[#FDE68A]">Update all texts, phone numbers, products, and images in one place</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => saveToServer()}
              disabled={isSaving}
              className="px-3 py-1.5 bg-[#C89B3C] hover:bg-[#E3BC63] text-[#071A2F] font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors"
              title="Save changes to website code"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{isSaving ? 'Saving...' : 'Save & Publish'}</span>
            </button>
            <button
              onClick={() => setActivePanel('none')}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('company')}
            className={`py-3 px-4 flex items-center gap-2 shrink-0 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'company' ? 'border-[#C89B3C] text-[#1B5699] bg-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#C89B3C]" />
            <span>Company &amp; Contact</span>
          </button>
          <button
            onClick={() => setActiveTab('hero')}
            className={`py-3 px-4 flex items-center gap-2 shrink-0 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'hero' ? 'border-[#C89B3C] text-[#1B5699] bg-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C89B3C]" />
            <span>Hero &amp; Headlines</span>
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`py-3 px-4 flex items-center gap-2 shrink-0 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'products' ? 'border-[#C89B3C] text-[#1B5699] bg-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-4 h-4 text-[#C89B3C]" />
            <span>All 10 Categories</span>
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`py-3 px-4 flex items-center gap-2 shrink-0 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'about' ? 'border-[#C89B3C] text-[#1B5699] bg-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4 text-[#C89B3C]" />
            <span>About &amp; Stats</span>
          </button>
          <button
            onClick={() => setActiveTab('wholesale')}
            className={`py-3 px-4 flex items-center gap-2 shrink-0 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'wholesale' ? 'border-[#C89B3C] text-[#1B5699] bg-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Truck className="w-4 h-4 text-[#C89B3C]" />
            <span>Wholesale &amp; Retail Split</span>
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`py-3 px-4 flex items-center gap-2 shrink-0 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'backup' ? 'border-[#C89B3C] text-[#1B5699] bg-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Download className="w-4 h-4 text-[#C89B3C]" />
            <span>Backup &amp; Export</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 text-xs sm:text-sm space-y-6">
          
          {/* TAB 1: Company & Contact */}
          {activeTab === 'company' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm border-b pb-2">Business Registration &amp; Contact Info</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name (English)</label>
                  <input
                    type="text"
                    value={content.company.name}
                    onChange={(e) => updateText('company.name', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name (Arabic)</label>
                  <input
                    type="text"
                    value={content.company.arabicName}
                    onChange={(e) => updateText('company.arabicName', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Tagline / Subtitle</label>
                  <input
                    type="text"
                    value={content.company.tagline}
                    onChange={(e) => updateText('company.tagline', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Commercial License Number</label>
                  <input
                    type="text"
                    value={content.company.commercialLicenseNo}
                    onChange={(e) => updateText('company.commercialLicenseNo', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">General Office Phone</label>
                  <input
                    type="text"
                    value={content.company.generalPhone}
                    onChange={(e) => updateText('company.generalPhone', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp for Orders</label>
                  <input
                    type="text"
                    value={content.company.mobileTradeWhatsapp}
                    onChange={(e) => updateText('company.mobileTradeWhatsapp', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sales Inquiry Email</label>
                  <input
                    type="email"
                    value={content.company.salesEmail}
                    onChange={(e) => updateText('company.salesEmail', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Trade Desk / Orders Email</label>
                  <input
                    type="email"
                    value={content.company.tradeDeskEmail}
                    onChange={(e) => updateText('company.tradeDeskEmail', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Commercial Office Address</label>
                  <input
                    type="text"
                    value={content.company.headOfficeAddress}
                    onChange={(e) => updateText('company.headOfficeAddress', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Hero & Headlines */}
          {activeTab === 'hero' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm border-b pb-2">Hero Section Texts &amp; Badges</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Headline Line 1</label>
                  <input
                    type="text"
                    value={content.hero.titleLine1}
                    onChange={(e) => updateText('hero.titleLine1', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Headline Line 2 (Gold Gradient)</label>
                  <input
                    type="text"
                    value={content.hero.titleLine2}
                    onChange={(e) => updateText('hero.titleLine2', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-[#AA771C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Bullet 1</label>
                  <input
                    type="text"
                    value={content.hero.bullet1}
                    onChange={(e) => updateText('hero.bullet1', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Bullet 2</label>
                  <input
                    type="text"
                    value={content.hero.bullet2}
                    onChange={(e) => updateText('hero.bullet2', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Bullet 3</label>
                  <input
                    type="text"
                    value={content.hero.bullet3}
                    onChange={(e) => updateText('hero.bullet3', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary CTA Button</label>
                  <input
                    type="text"
                    value={content.hero.btn1Text}
                    onChange={(e) => updateText('hero.btn1Text', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Hero Description Paragraph</label>
                  <textarea
                    rows={3}
                    value={content.hero.description}
                    onChange={(e) => updateText('hero.description', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div className="sm:col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-xs text-slate-900">Hero Background Cargo Ship Photo</p>
                    <p className="text-[11px] text-slate-500">Current photo: {content.hero.bgImage}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openImagePicker('hero.bgImage', content.hero.bgImage, 'Hero Maritime Background')}
                    className="px-3 py-1.5 bg-[#1B5699] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#FDE68A]" />
                    <span>Change Hero Background</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: All 10 Categories */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="font-bold text-slate-900 text-sm">Product Categories (10 Sectors)</h4>
                <select
                  value={selectedCatId}
                  onChange={(e) => setSelectedCatId(e.target.value)}
                  className="p-1.5 border border-[#C89B3C] rounded-lg text-xs font-bold text-[#1B5699] bg-amber-50/50"
                >
                  {content.categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category Title (English)</label>
                  <input
                    type="text"
                    value={currentCategory.name}
                    onChange={(e) => updateCategory(currentCategory.id, { name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category Title (Arabic)</label>
                  <input
                    type="text"
                    value={currentCategory.arabicName}
                    onChange={(e) => updateCategory(currentCategory.id, { arabicName: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold"
                    dir="rtl"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={currentCategory.description}
                    onChange={(e) => updateCategory(currentCategory.id, { description: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Key Origins</label>
                  <input
                    type="text"
                    value={currentCategory.keyOrigins}
                    onChange={(e) => updateCategory(currentCategory.id, { keyOrigins: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Packaging Types</label>
                  <input
                    type="text"
                    value={currentCategory.packagingTypes}
                    onChange={(e) => updateCategory(currentCategory.id, { packagingTypes: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div className="sm:col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={currentCategory.image} 
                      alt={currentCategory.name} 
                      className="w-14 h-14 object-cover rounded-lg border border-slate-300"
                    />
                    <div>
                      <p className="font-bold text-xs text-slate-900">Category Display Image</p>
                      <p className="text-[10px] text-slate-500 truncate max-w-xs">{currentCategory.image}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openImagePicker(currentCategory.id, currentCategory.image, currentCategory.name)}
                    className="px-3 py-1.5 bg-[#1B5699] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#FDE68A]" />
                    <span>Change Photo</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: About & Stats */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm border-b pb-2">About Section &amp; Key Figures</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                  <input
                    type="text"
                    value={content.about.title}
                    onChange={(e) => updateText('about.title', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.about.subtitle}
                    onChange={(e) => updateText('about.subtitle', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Company Story</label>
                  <textarea
                    rows={3}
                    value={content.about.leadStory}
                    onChange={(e) => updateText('about.leadStory', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-2.5 bg-slate-50 border rounded-lg">
                    <label className="text-[10px] text-slate-500 font-bold block">Stat 1</label>
                    <input
                      type="text"
                      value={content.about.stat1Number}
                      onChange={(e) => updateText('about.stat1Number', e.target.value)}
                      className="w-full p-1 font-bold text-sm bg-transparent border-b"
                    />
                    <input
                      type="text"
                      value={content.about.stat1Label}
                      onChange={(e) => updateText('about.stat1Label', e.target.value)}
                      className="w-full p-1 text-[11px] text-slate-600 bg-transparent mt-1"
                    />
                  </div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">
                    <label className="text-[10px] text-slate-500 font-bold block">Stat 2</label>
                    <input
                      type="text"
                      value={content.about.stat2Number}
                      onChange={(e) => updateText('about.stat2Number', e.target.value)}
                      className="w-full p-1 font-bold text-sm bg-transparent border-b"
                    />
                    <input
                      type="text"
                      value={content.about.stat2Label}
                      onChange={(e) => updateText('about.stat2Label', e.target.value)}
                      className="w-full p-1 text-[11px] text-slate-600 bg-transparent mt-1"
                    />
                  </div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">
                    <label className="text-[10px] text-slate-500 font-bold block">Stat 3</label>
                    <input
                      type="text"
                      value={content.about.stat3Number}
                      onChange={(e) => updateText('about.stat3Number', e.target.value)}
                      className="w-full p-1 font-bold text-sm bg-transparent border-b"
                    />
                    <input
                      type="text"
                      value={content.about.stat3Label}
                      onChange={(e) => updateText('about.stat3Label', e.target.value)}
                      className="w-full p-1 text-[11px] text-slate-600 bg-transparent mt-1"
                    />
                  </div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg">
                    <label className="text-[10px] text-slate-500 font-bold block">Stat 4</label>
                    <input
                      type="text"
                      value={content.about.stat4Number}
                      onChange={(e) => updateText('about.stat4Number', e.target.value)}
                      className="w-full p-1 font-bold text-sm bg-transparent border-b"
                    />
                    <input
                      type="text"
                      value={content.about.stat4Label}
                      onChange={(e) => updateText('about.stat4Label', e.target.value)}
                      className="w-full p-1 text-[11px] text-slate-600 bg-transparent mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Wholesale & Retail Split */}
          {activeTab === 'wholesale' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm border-b pb-2">Wholesale &amp; Retail Operations</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Section Main Title</label>
                  <input
                    type="text"
                    value={content.wholesaleSplit.title}
                    onChange={(e) => updateText('wholesaleSplit.title', e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl border">
                    <h5 className="font-bold text-xs text-[#1B5699] mb-2">Wholesale B2B Channel</h5>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Heading</label>
                    <input
                      type="text"
                      value={content.wholesaleSplit.wholesaleHeading}
                      onChange={(e) => updateText('wholesaleSplit.wholesaleHeading', e.target.value)}
                      className="w-full p-2 bg-white border rounded text-xs mb-2 font-bold"
                    />
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={content.wholesaleSplit.wholesaleLead}
                      onChange={(e) => updateText('wholesaleSplit.wholesaleLead', e.target.value)}
                      className="w-full p-2 bg-white border rounded text-xs"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border">
                    <h5 className="font-bold text-xs text-[#AA771C] mb-2">Retail &amp; Supermarket Distribution</h5>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Heading</label>
                    <input
                      type="text"
                      value={content.wholesaleSplit.retailHeading}
                      onChange={(e) => updateText('wholesaleSplit.retailHeading', e.target.value)}
                      className="w-full p-2 bg-white border rounded text-xs mb-2 font-bold"
                    />
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={content.wholesaleSplit.retailLead}
                      onChange={(e) => updateText('wholesaleSplit.retailLead', e.target.value)}
                      className="w-full p-2 bg-white border rounded text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: Backup & Export */}
          {activeTab === 'backup' && (
            <div className="space-y-5">
              <h4 className="font-bold text-slate-900 text-sm border-b pb-2">Backup, Export &amp; Hostinger Deployment</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export JSON */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                    <Download className="w-4 h-4 text-[#1B5699]" />
                    <span>Download JSON Backup</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Save a complete backup file containing all your texts, custom photos, and animation presets.
                  </p>
                  <button
                    type="button"
                    onClick={exportContentJson}
                    className="w-full py-2 bg-[#1B5699] text-white rounded-lg text-xs font-bold hover:bg-[#133A6B] transition-colors cursor-pointer"
                  >
                    Export Backup File
                  </button>
                </div>

                {/* Import JSON */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                    <Upload className="w-4 h-4 text-[#C89B3C]" />
                    <span>Restore From Backup</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Load a previously exported JSON backup file to instantly restore your configuration.
                  </p>
                  <label className="w-full py-2 bg-amber-500 text-white rounded-lg text-xs font-bold hover:bg-amber-600 transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                    <span>Select Backup JSON</span>
                    <input 
                      type="file" 
                      accept=".json" 
                      onChange={handleImportFile}
                      className="hidden" 
                    />
                  </label>
                </div>

                {/* Reset to Factory Defaults */}
                <div className="p-4 bg-red-50/60 rounded-xl border border-red-200 space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-red-900">
                    <RotateCcw className="w-4 h-4 text-red-600" />
                    <span>Reset All to Original Factory Settings</span>
                  </div>
                  <p className="text-xs text-red-700">
                    If you ever make a mistake or want to start fresh, this button restores all default corporate texts and photography.
                  </p>
                  <button
                    type="button"
                    onClick={resetToDefaults}
                    className="py-2 px-4 bg-white border border-red-300 text-red-700 hover:bg-red-100 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Reset Website to Defaults
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Auto-saves continuously to your browser.
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActivePanel('none')}
              className="px-5 py-2 bg-[#1B5699] hover:bg-[#133A6B] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
            >
              <Check className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span>Done Editing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

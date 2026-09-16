import React, { useState, useRef } from 'react';
import { useSiteEditor } from '../../context/SiteEditorContext';
import { X, Upload, Link, Check, Image as ImageIcon, Sparkles } from 'lucide-react';

export const ImageUploadModal: React.FC = () => {
  const { 
    activePanel, 
    closeImagePicker, 
    selectedImageTarget, 
    updateImage, 
    showToast 
  } = useSiteEditor();

  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (activePanel !== 'image-picker' || !selectedImageTarget) {
    return null;
  }

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file');
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleApply = async () => {
    setIsUploading(true);
    let finalUrl = previewUrl || urlInput;

    if (activeTab === 'url') {
      if (!urlInput.trim()) {
        showToast('Please enter an image URL');
        setIsUploading(false);
        return;
      }
      finalUrl = urlInput.trim();
    }

    if (!finalUrl) {
      showToast('No image selected');
      setIsUploading(false);
      return;
    }

    // If it's a dataUrl, sync to server in background
    if (finalUrl.startsWith('data:image/')) {
      const filename = selectedImageTarget.id.endsWith('.png') || selectedImageTarget.id.endsWith('.jpg')
        ? selectedImageTarget.id
        : `${selectedImageTarget.id.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`;

      fetch('/api/upload-category-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename,
          base64: finalUrl,
        }),
      }).catch(() => {});
    }

    updateImage(selectedImageTarget.id, finalUrl);
    setIsUploading(false);
    closeImagePicker();
  };

  const PRESET_TRADE_IMAGES = [
    { name: 'Dubai Port Container Ship', url: '/hero-dubai-trade.jpg' },
    { name: 'Fresh Fruits & Veg Counter', url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=85' },
    { name: 'Meats & Seafood Counter', url: '/1789572800511.png' },
    { name: 'Whole Grains & Pulses', url: '/grains-cereals-lentils.png' },
    { name: 'Whole Spices Collection', url: '/whole-spices.png' },
    { name: 'Dairy & Milk Products', url: '/milk-dairy-products.png' },
    { name: 'Beverages & Fruit Juices', url: '/beverages-soft-drinks.png' },
    { name: 'Snacks & Confectionery', url: '/snacks.png' },
    { name: 'Oils & Ghee Tins', url: '/oils-ghee.png' },
    { name: 'Dry Fruits & Pistachios', url: '/dry-fruits.png' },
    { name: 'Wholesale Pallet Warehouse', url: '/wholesale.jpg' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeImagePicker}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-[#C89B3C]/40 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B5699] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#FDE68A]" />
            <div>
              <h3 className="font-heading text-base font-bold">Media &amp; Photo Manager</h3>
              <p className="text-[11px] text-white/80">
                Updating: <span className="text-[#FDE68A] font-semibold">{selectedImageTarget.label}</span>
              </p>
            </div>
          </div>
          <button
            onClick={closeImagePicker}
            className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'upload'
                ? 'border-[#C89B3C] text-[#1B5699] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Upload from PC</span>
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'url'
                ? 'border-[#C89B3C] text-[#1B5699] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Link className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Paste Web URL</span>
          </button>
          <button
            onClick={() => setActiveTab('presets')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'presets'
                ? 'border-[#C89B3C] text-[#1B5699] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Curated Library</span>
          </button>
        </div>

        {/* Body content */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs sm:text-sm">
          {activeTab === 'upload' && (
            <div className="space-y-3">
              <div 
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files?.[0];
                  if (file) handleFileChange(file);
                }}
                className="border-2 border-dashed border-[#C89B3C]/50 hover:border-[#C89B3C] bg-amber-50/40 rounded-xl p-6 text-center cursor-pointer transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-[#C89B3C]/30 text-[#C89B3C] flex items-center justify-center mx-auto mb-2 shadow-xs group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-800">Click or Drag &amp; Drop image here</p>
                <p className="text-xs text-slate-500 mt-1">Supports PNG, JPG, WEBP up to 10MB</p>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileChange(file);
                  }}
                />
              </div>
              {selectedFile && (
                <div className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200 flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Selected file: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)</span>
                </div>
              )}
            </div>
          )}

          {activeTab === 'url' && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">Image Web Address (URL):</label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                  setPreviewUrl(e.target.value);
                }}
                placeholder="https://images.unsplash.com/... or https://yourdomain.com/photo.jpg"
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C89B3C] outline-none"
              />
              <p className="text-[11px] text-slate-500">
                You can copy any image link directly from Unsplash, Google Images, or your own image host.
              </p>
            </div>
          )}

          {activeTab === 'presets' && (
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-700">Select from high-quality agro-commodity photos:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[260px] overflow-y-auto p-1">
                {PRESET_TRADE_IMAGES.map((preset, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setPreviewUrl(preset.url);
                      setUrlInput(preset.url);
                    }}
                    className={`border rounded-lg overflow-hidden cursor-pointer group hover:border-[#C89B3C] transition-all relative ${
                      previewUrl === preset.url ? 'border-2 border-[#C89B3C] ring-2 ring-[#C89B3C]/30' : 'border-slate-200'
                    }`}
                  >
                    <div className="h-20 bg-slate-100 relative">
                      <img 
                        src={preset.url} 
                        alt={preset.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <div className="p-1.5 bg-white text-[10px] font-bold text-slate-800 truncate">
                      {preset.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Preview Box */}
          <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Preview:</span>
              <span className="text-[10px] text-slate-500 font-normal">
                {previewUrl ? 'New image ready to apply' : 'Current active image'}
              </span>
            </div>
            <div className="h-44 w-full bg-slate-200 rounded-lg overflow-hidden relative flex items-center justify-center border border-slate-300">
              <img
                src={previewUrl || selectedImageTarget.currentSrc}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85';
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={closeImagePicker}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleApply}
            disabled={isUploading}
            className="px-5 py-2 rounded-lg bg-[#1B5699] hover:bg-[#133A6B] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm disabled:opacity-50"
          >
            <Check className="w-4 h-4 text-[#FDE68A]" />
            <span>{isUploading ? 'Applying...' : 'Apply Photo to Website'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

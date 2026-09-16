import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { AKLA_CATEGORIES, AklaCategory } from '../data/aklaCategories';
import { COMPANY_INFO } from '../data/companyInfo';

export interface AnimationSettings {
  enabled: boolean;
  preset: 'cinematic' | 'smooth' | 'slide-up' | 'zoom' | 'bounce' | 'minimal';
  speed: 'slow' | 'normal' | 'fast';
  particles: boolean;
  hoverPhysics: 'tilt' | 'lift' | 'glow' | 'flat';
}

export interface SiteContent {
  company: {
    name: string;
    arabicName: string;
    tagline: string;
    commercialLicenseNo: string;
    dubaiChamberNo: string;
    vatTrn: string;
    mirsalCustomsCode: string;
    dpWorldTerminalCode: string;
    headOfficeAddress: string;
    headOfficeHours: string;
    logisticsHubAddress: string;
    logisticsHubCapacity: string;
    generalPhone: string;
    mobileTradeWhatsapp: string;
    salesEmail: string;
    tradeDeskEmail: string;
    complianceEmail: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    description: string;
    btn1Text: string;
    btn2Text: string;
    bgImage: string;
    floatingCard1Title: string;
    floatingCard1Sub: string;
    floatingCard2Title: string;
    floatingCard2Sub: string;
    pillar1Title: string;
    pillar1Sub: string;
    pillar2Title: string;
    pillar2Sub: string;
    pillar3Title: string;
    pillar3Sub: string;
    pillar4Title: string;
    pillar4Sub: string;
  };
  about: {
    image: string;
    badge: string;
    title: string;
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    desc1: string;
    desc2: string;
    leadStory: string;
    secondaryStory: string;
    stat1Number: string;
    stat1Label: string;
    stat1Sub: string;
    stat2Number: string;
    stat2Label: string;
    stat2Sub: string;
    stat3Number: string;
    stat3Label: string;
    stat3Sub: string;
    stat4Number: string;
    stat4Label: string;
    stat4Sub: string;
  };
  wholesale: {
    badge: string;
    title: string;
    description: string;
    bgImage: string;
  };
  retail: {
    badge: string;
    title: string;
    description: string;
    bgImage: string;
  };
  wholesaleSplit: {
    badge: string;
    title: string;
    subtitle: string;
    wholesaleHeading: string;
    wholesaleLead: string;
    retailHeading: string;
    retailLead: string;
  };
  whyChooseUs: {
    badge: string;
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    btnText: string;
  };
  categories: AklaCategory[];
  customImages: Record<string, string>;
  animations: AnimationSettings;
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  company: {
    name: COMPANY_INFO.name,
    arabicName: COMPANY_INFO.arabicName,
    tagline: COMPANY_INFO.tagline,
    commercialLicenseNo: COMPANY_INFO.commercialLicenseNo,
    dubaiChamberNo: COMPANY_INFO.dubaiChamberNo,
    vatTrn: COMPANY_INFO.vatTrn,
    mirsalCustomsCode: COMPANY_INFO.mirsalCustomsCode,
    dpWorldTerminalCode: COMPANY_INFO.dpWorldTerminalCode,
    headOfficeAddress: COMPANY_INFO.headOffice.address,
    headOfficeHours: COMPANY_INFO.headOffice.workingHours,
    logisticsHubAddress: COMPANY_INFO.logisticsHub.address,
    logisticsHubCapacity: COMPANY_INFO.logisticsHub.capacity,
    generalPhone: COMPANY_INFO.contacts.generalPhone,
    mobileTradeWhatsapp: COMPANY_INFO.contacts.mobileTradeWhatsapp,
    salesEmail: COMPANY_INFO.contacts.salesEmail,
    tradeDeskEmail: COMPANY_INFO.contacts.tradeDeskEmail,
    complianceEmail: COMPANY_INFO.contacts.complianceEmail,
  },
  hero: {
    badge: 'Direct Mill Procurement & GCC Hub',
    titleLine1: 'Your Trusted Partner in',
    titleLine2: 'Global Food Trading',
    bullet1: 'Quality Products',
    bullet2: 'Competitive Prices',
    bullet3: 'Reliable Supply',
    description: 'Akla Foodstuff Trading LLC is a Dubai-based food trading company specializing in wholesale and retail distribution of high-quality food products for local and international markets.',
    btn1Text: 'Explore Our Products',
    btn2Text: 'Request a Quote',
    bgImage: '/hero-dubai-trade.jpg',
    floatingCard1Title: 'Direct Mill Procurement',
    floatingCard1Sub: '100% Quality Inspected',
    floatingCard2Title: 'Fast-Track Logistics',
    floatingCard2Sub: 'Jebel Ali Berth • 48h Transit',
    pillar1Title: 'Premium Quality',
    pillar1Sub: 'Products',
    pillar2Title: 'Wholesale & Retail',
    pillar2Sub: 'Supply',
    pillar3Title: 'Global Import & Export',
    pillar3Sub: 'Network',
    pillar4Title: 'Trusted by Businesses',
    pillar4Sub: 'Worldwide',
  },
  about: {
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
    badge: 'ABOUT AKLA FOODSTUFF',
    title: 'Connecting Continents, Sourcing Purity',
    subtitle: 'Strategically headquartered in Dubai, bridging top agro-producers with GCC & Middle East markets.',
    titleLine1: 'Your Reliable Partner in',
    titleLine2: 'Global Food Trading',
    desc1: 'Akla Foodstuff Trading LLC is a Dubai-based food trading company supplying quality products to businesses, institutional buyers and consumers across the UAE and international markets.',
    desc2: 'Our comprehensive portfolio covers essential food categories including grains, cereals, legumes, fresh fruits and vegetables, beverages, snacks, flour, eggs, ghee, edible oils, and selected seafood products.',
    leadStory: 'Akla Foodstuff Trading LLC was established with a singular vision: to deliver wholesale transparency, certified food safety, and dependable agro-commodity logistics across the GCC and global trade corridors.',
    secondaryStory: 'From farm gates and automated milling facilities in Southeast Asia, Australia, Brazil, and Europe, we manage unbroken temperature-monitored supply chains directly through Jebel Ali Port to your retail shelves and commercial kitchens.',
    stat1Number: '45+',
    stat1Label: 'Global Trade Network',
    stat1Sub: 'Import Origins & Export Ports',
    stat2Number: '3,800+',
    stat2Label: 'Monthly Throughput',
    stat2Sub: 'Metric Tons (MT) Shipped',
    stat3Number: '85,000',
    stat3Label: 'Logistics Facility',
    stat3Sub: 'Sq. Ft Climate-Controlled Hub',
    stat4Number: '24-48h',
    stat4Label: 'Fast Customs Transit',
    stat4Sub: 'Mirsal II & Bonded Re-Export',
  },
  wholesale: {
    badge: 'COMMERCIAL WHOLESALE DIVISION',
    title: 'Wholesale Solutions Built for Enterprise',
    description: 'Supplying hypermarkets, hotel conglomerates, commercial kitchens, flight caterers, and regional GCC distributors with bulk container volumes and guaranteed supply continuity.',
    bgImage: '/wholesale.jpg',
  },
  retail: {
    badge: 'RETAIL DISTRIBUTION DIVISION',
    title: 'Quality Products for Everyday Needs',
    description: 'Curated consumer-packaged food ranges designed for grocery store shelves, specialty food boutiques, and convenience markets demanding quality aesthetics and dependable sell-through.',
    bgImage: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=85',
  },
  wholesaleSplit: {
    badge: 'Integrated Distribution Channels',
    title: 'Engineered for Both Scale & Consumer Agility',
    subtitle: 'Supplying bulk institutional supply chains, private label packaging, and branded retail supermarkets.',
    wholesaleHeading: 'B2B Wholesale & Institutional Supply',
    wholesaleLead: 'Full container loads (FCL), 25kg–50kg bulk packaging, and customized private-label milling for hypermarkets, hotel chains, ship chandlers, and government food reserves.',
    retailHeading: 'Retail & Consumer Packaged Goods (CPG)',
    retailLead: '1kg–5kg premium shelf-ready retail formats, moisture-proof zipper pouches, and customized branding tailored to local regulatory labeling and barcode compliance.',
  },
  whyChooseUs: {
    badge: 'The Akla Advantage',
    title: 'Why Global Importers & Retailers Trust Us',
    subtitle: 'Rigorous laboratory compliance, unbroken cold chains, and flexible trade finance credit solutions.',
  },
  cta: {
    title: 'Ready to Streamline Your Food Supply Chain?',
    subtitle: 'Connect with our commodity trade specialists in Al Quoz, Dubai for immediate spot FOB/CIF pricing, laboratory spec sheets, and bonded logistics coordination.',
    btnText: 'Request Spot Quote Now',
  },
  categories: AKLA_CATEGORIES,
  customImages: {},
  animations: {
    enabled: true,
    preset: 'cinematic',
    speed: 'normal',
    particles: true,
    hoverPhysics: 'lift',
  },
};

const STORAGE_KEY = 'akla_site_content_v2';

interface SiteEditorContextType {
  content: SiteContent;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  toggleEditMode: () => void;
  activePanel: 'none' | 'cms' | 'animations' | 'image-picker' | 'export';
  setActivePanel: (panel: 'none' | 'cms' | 'animations' | 'image-picker' | 'export') => void;
  selectedImageTarget: { id: string; currentSrc: string; label: string } | null;
  openImagePicker: (id: string, currentSrc: string, label: string) => void;
  closeImagePicker: () => void;
  updateText: (path: string, value: string) => void;
  updateImage: (idOrPath: string, newUrl: string) => void;
  updateCategory: (catId: string, updates: Partial<AklaCategory>) => void;
  updateAnimation: <K extends keyof AnimationSettings>(key: K, value: AnimationSettings[K]) => void;
  resetToDefaults: () => void;
  exportContentJson: () => void;
  importContentJson: (jsonStr: string) => boolean;
  saveToServer: () => Promise<boolean>;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  hasUnsavedChanges: boolean;
  isSaving: boolean;
}

const SiteEditorContext = createContext<SiteEditorContextType | undefined>(undefined);

export const SiteEditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_SITE_CONTENT,
          ...parsed,
          company: { ...DEFAULT_SITE_CONTENT.company, ...(parsed.company || {}) },
          hero: { ...DEFAULT_SITE_CONTENT.hero, ...(parsed.hero || {}) },
          about: { ...DEFAULT_SITE_CONTENT.about, ...(parsed.about || {}) },
          wholesaleSplit: { ...DEFAULT_SITE_CONTENT.wholesaleSplit, ...(parsed.wholesaleSplit || {}) },
          whyChooseUs: { ...DEFAULT_SITE_CONTENT.whyChooseUs, ...(parsed.whyChooseUs || {}) },
          cta: { ...DEFAULT_SITE_CONTENT.cta, ...(parsed.cta || {}) },
          animations: { ...DEFAULT_SITE_CONTENT.animations, ...(parsed.animations || {}) },
          categories: parsed.categories && parsed.categories.length ? parsed.categories : DEFAULT_SITE_CONTENT.categories,
          customImages: parsed.customImages || {},
        };
      }
    } catch (e) {
      console.error('Failed to load saved site content:', e);
    }
    return DEFAULT_SITE_CONTENT;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [activePanel, setActivePanel] = useState<'none' | 'cms' | 'animations' | 'image-picker' | 'export'>('none');
  const [selectedImageTarget, setSelectedImageTarget] = useState<{ id: string; currentSrc: string; label: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  }, []);

  // Save to localStorage automatically whenever content changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.warn('LocalStorage quota or storage error:', e);
    }
  }, [content]);

  const saveToServer = useCallback(async (): Promise<boolean> => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/save-site-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content, null, 2),
      });
      if (res.ok) {
        showToast('All changes saved to website code!');
        setHasUnsavedChanges(false);
        setIsSaving(false);
        return true;
      }
    } catch {
      // Offline or preview fallback
    }
    showToast('Saved to browser storage!');
    setHasUnsavedChanges(false);
    setIsSaving(false);
    return true;
  }, [content, showToast]);

  const updateText = useCallback((path: string, value: string) => {
    setContent((prev) => {
      const parts = path.split('.');
      if (parts.length === 1) {
        return { ...prev, [parts[0]]: value };
      }
      if (parts.length === 2) {
        const [section, field] = parts;
        const currentSection = (prev as any)[section] || {};
        return {
          ...prev,
          [section]: {
            ...currentSection,
            [field]: value,
          },
        };
      }
      if (parts.length === 3) {
        const [section, sub, field] = parts;
        const currentSection = (prev as any)[section] || {};
        const currentSub = currentSection[sub] || {};
        return {
          ...prev,
          [section]: {
            ...currentSection,
            [sub]: {
              ...currentSub,
              [field]: value,
            },
          },
        };
      }
      return prev;
    });
    setHasUnsavedChanges(true);
    showToast('Text updated & saved!');
  }, [showToast]);

  const updateImage = useCallback((idOrPath: string, newUrl: string) => {
    setContent((prev) => {
      // Check if it's a category
      const catIndex = prev.categories.findIndex((c) => c.id === idOrPath);
      if (catIndex !== -1) {
        const updatedCats = [...prev.categories];
        updatedCats[catIndex] = { ...updatedCats[catIndex], image: newUrl };
        return {
          ...prev,
          categories: updatedCats,
          customImages: { ...prev.customImages, [idOrPath]: newUrl },
        };
      }

      // Check if it's hero or other named image
      if (idOrPath.startsWith('hero.')) {
        const field = idOrPath.replace('hero.', '');
        return {
          ...prev,
          hero: { ...prev.hero, [field]: newUrl },
          customImages: { ...prev.customImages, [idOrPath]: newUrl },
        };
      }

      return {
        ...prev,
        customImages: { ...prev.customImages, [idOrPath]: newUrl },
      };
    });
    setHasUnsavedChanges(true);
    showToast('Photo updated successfully!');
  }, [showToast]);

  const updateCategory = useCallback((catId: string, updates: Partial<AklaCategory>) => {
    setContent((prev) => {
      const idx = prev.categories.findIndex((c) => c.id === catId);
      if (idx === -1) return prev;
      const updated = [...prev.categories];
      updated[idx] = { ...updated[idx], ...updates };
      return { ...prev, categories: updated };
    });
    setHasUnsavedChanges(true);
    showToast('Product category updated!');
  }, [showToast]);

  const updateAnimation = useCallback(<K extends keyof AnimationSettings>(key: K, value: AnimationSettings[K]) => {
    setContent((prev) => ({
      ...prev,
      animations: {
        ...prev.animations,
        [key]: value,
      },
    }));
    setHasUnsavedChanges(true);
    showToast(`Animation ${String(key)} updated!`);
  }, [showToast]);

  const resetToDefaults = useCallback(() => {
    if (window.confirm('Reset all website texts, photos, and animation settings back to initial factory defaults?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('akla_custom_category_images');
      setContent(DEFAULT_SITE_CONTENT);
      showToast('Website reset to default configuration!');
    }
  }, [showToast]);

  const exportContentJson = useCallback(() => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `akla-foodstuff-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Website content exported to JSON!');
  }, [content, showToast]);

  const importContentJson = useCallback((jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        setContent({
          ...DEFAULT_SITE_CONTENT,
          ...parsed,
          company: { ...DEFAULT_SITE_CONTENT.company, ...(parsed.company || {}) },
          hero: { ...DEFAULT_SITE_CONTENT.hero, ...(parsed.hero || {}) },
          about: { ...DEFAULT_SITE_CONTENT.about, ...(parsed.about || {}) },
          categories: parsed.categories && parsed.categories.length ? parsed.categories : DEFAULT_SITE_CONTENT.categories,
          customImages: parsed.customImages || {},
          animations: { ...DEFAULT_SITE_CONTENT.animations, ...(parsed.animations || {}) },
        });
        showToast('Successfully imported website content!');
        return true;
      }
    } catch {
      showToast('Error: Invalid backup file');
    }
    return false;
  }, [showToast]);

  const openImagePicker = useCallback((id: string, currentSrc: string, label: string) => {
    setSelectedImageTarget({ id, currentSrc, label });
    setActivePanel('image-picker');
  }, []);

  const closeImagePicker = useCallback(() => {
    setSelectedImageTarget(null);
    setActivePanel('none');
  }, []);

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => {
      const next = !prev;
      showToast(next ? '✏️ Visual Edit Mode is now ON. Click any text to edit or replace photos!' : '👁️ Live Preview Mode. All changes saved.');
      return next;
    });
  }, [showToast]);

  return (
    <SiteEditorContext.Provider
      value={{
        content,
        isEditMode,
        setIsEditMode,
        toggleEditMode,
        activePanel,
        setActivePanel,
        selectedImageTarget,
        openImagePicker,
        closeImagePicker,
        updateText,
        updateImage,
        updateCategory,
        updateAnimation,
        resetToDefaults,
        exportContentJson,
        importContentJson,
        saveToServer,
        toastMessage,
        showToast,
        hasUnsavedChanges,
        isSaving,
      }}
    >
      {children}
    </SiteEditorContext.Provider>
  );
};

export const useSiteEditor = (): SiteEditorContextType => {
  const context = useContext(SiteEditorContext);
  if (!context) {
    throw new Error('useSiteEditor must be used within a SiteEditorProvider');
  }
  return context;
};

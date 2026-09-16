import React, { useState } from 'react';
import { useSiteEditor } from '../../context/SiteEditorContext';
import { 
  Eye, 
  Pencil, 
  Sparkles, 
  FileText, 
  RotateCcw, 
  Check, 
  ChevronDown, 
  ChevronUp,
  Download,
  Save,
  Layers,
  Server,
  X
} from 'lucide-react';
import { HostingerDeployModal } from './HostingerDeployModal';

interface VisualEditorBarProps {
  onCloseEditor?: () => void;
}

export const VisualEditorBar: React.FC<VisualEditorBarProps> = ({ onCloseEditor }) => {
  const { 
    isEditMode, 
    toggleEditMode, 
    setActivePanel, 
    resetToDefaults, 
    saveToServer,
    isSaving,
    toastMessage 
  } = useSiteEditor();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHostingerModalOpen, setIsHostingerModalOpen] = useState(false);

  const handleOpenHostingerModal = async () => {
    // Silently save before opening to guarantee fresh bundle
    saveToServer().catch(() => {});
    setIsHostingerModalOpen(true);
  };

  return (
    <>
      {/* Real-time Toast Notifications */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="bg-[#0A1E35] text-white border border-[#C89B3C] px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FDE68A] animate-ping" />
            <span className="text-[#FDE68A]">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Floating Visual Editor Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-4xl w-[95%] sm:w-auto">
        {isCollapsed ? (
          <button
            onClick={() => setIsCollapsed(false)}
            className="mx-auto bg-[#071A2F]/95 hover:bg-[#133A6B] text-white border-2 border-[#C89B3C] px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2.5 text-xs font-bold backdrop-blur-xl transition-all hover:scale-105 cursor-pointer"
          >
            <div className={`w-2.5 h-2.5 rounded-full ${isEditMode ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span>{isEditMode ? '✏️ Visual Editor (Active)' : '🛠️ Website Editor & CMS'}</span>
            <ChevronUp className="w-4 h-4 text-[#FDE68A]" />
          </button>
        ) : (
          <div className="bg-[#071A2F]/95 text-white border-2 border-[#C89B3C]/90 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl px-3 sm:px-5 py-3 transition-all">
            <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
              
              {/* Mode Toggle Switch */}
              <div className="flex items-center gap-2 bg-[#133A6B]/80 p-1 rounded-xl border border-white/10 shrink-0">
                <button
                  type="button"
                  onClick={() => !isEditMode && toggleEditMode()}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    isEditMode 
                      ? 'bg-gradient-to-r from-[#F5D061] to-[#C89B3C] text-[#071A2F] shadow-sm' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Pencil className="w-3.5 h-3.5" />
                  <span>Edit Mode</span>
                </button>
                <button
                  type="button"
                  onClick={() => isEditMode && toggleEditMode()}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    !isEditMode 
                      ? 'bg-[#1B5699] text-white shadow-sm' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </button>
              </div>

              {/* Status or Quick Hints */}
              {isEditMode ? (
                <div className="hidden md:flex items-center gap-2 text-[11px] text-[#FDE68A] font-medium px-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Click any text to rewrite &bull; Click any photo to replace</span>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2 text-[11px] text-white/70 px-2">
                  <span>Viewing site as prospective customers see it</span>
                </div>
              )}

              {/* Action Tools */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Animation Studio */}
                <button
                  type="button"
                  onClick={() => setActivePanel('animations')}
                  className="px-2.5 sm:px-3 py-1.5 bg-[#1A5495] hover:bg-[#2064B0] border border-[#C89B3C]/50 hover:border-[#E3BC63] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Customize animations and hover physics"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
                  <span className="hidden sm:inline">Animations</span>
                </button>

                {/* Content Manager (All Texts) */}
                <button
                  type="button"
                  onClick={() => setActivePanel('cms')}
                  className="px-2.5 sm:px-3 py-1.5 bg-[#1A5495] hover:bg-[#2064B0] border border-[#C89B3C]/50 hover:border-[#E3BC63] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Open full text & category manager"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FDE68A]" />
                  <span className="hidden sm:inline">All Content</span>
                </button>

                {/* Save to Server / Code */}
                <button
                  type="button"
                  onClick={() => saveToServer()}
                  disabled={isSaving}
                  className="px-2.5 sm:px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
                  title="Save changes to website code"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isSaving ? 'Saving...' : 'Save'}</span>
                </button>

                {/* Hostinger Deploy Package */}
                <button
                  type="button"
                  onClick={handleOpenHostingerModal}
                  className="px-2.5 sm:px-3 py-1.5 bg-gradient-to-r from-[#C89B3C] to-[#E3BC63] hover:from-[#DBAA43] hover:to-[#F5D061] text-[#071A2F] rounded-lg text-xs font-black flex items-center gap-1.5 cursor-pointer transition-all shadow-md hover:scale-105"
                  title="Hostinger 1-Click Deployment Suite & ZIP"
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>Hostinger Ready</span>
                </button>

                {/* Reset to Factory Defaults */}
                <button
                  type="button"
                  onClick={resetToDefaults}
                  className="p-1.5 hover:bg-white/10 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer"
                  title="Reset to original defaults"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Collapse Dock */}
                <button
                  type="button"
                  onClick={() => setIsCollapsed(true)}
                  className="p-1.5 hover:bg-white/10 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer ml-1"
                  title="Minimize bar"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Close/Hide Editor for clean view */}
                {onCloseEditor && (
                  <button
                    type="button"
                    onClick={onCloseEditor}
                    className="p-1.5 hover:bg-red-500/20 text-white/60 hover:text-red-300 rounded-lg transition-colors cursor-pointer"
                    title="Hide Editor (View Clean Public Website)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Hostinger Deployment Modal */}
      <HostingerDeployModal 
        isOpen={isHostingerModalOpen} 
        onClose={() => setIsHostingerModalOpen(false)} 
      />
    </>
  );
};

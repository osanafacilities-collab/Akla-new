import React from 'react';
import { useSiteEditor, AnimationSettings } from '../../context/SiteEditorContext';
import { X, Play, Check, Sparkles, Sliders, Zap, Eye } from 'lucide-react';

export const AnimationStudioModal: React.FC = () => {
  const { activePanel, setActivePanel, content, updateAnimation, showToast } = useSiteEditor();

  if (activePanel !== 'animations') return null;

  const { animations } = content;

  const PRESETS: Array<{ id: AnimationSettings['preset']; name: string; desc: string; icon: string }> = [
    { id: 'cinematic', name: 'Cinematic Luxury', desc: 'Silky smooth staggered reveals with subtle scale & golden sheen', icon: '✨' },
    { id: 'slide-up', name: 'Slide-Up Reveal', desc: 'Modern corporate trade momentum gliding smoothly from bottom to top', icon: '⬆️' },
    { id: 'zoom', name: 'Impact Zoom', desc: 'Focus-pulling zoom entrance for bold commercial statements', icon: '🔍' },
    { id: 'smooth', name: 'Subtle Fade', desc: 'Gentle, distraction-free opacity transitions', icon: '🌫️' },
    { id: 'bounce', name: 'Dynamic Bounce', desc: 'Slightly springy entrance for engaging visual rhythm', icon: '⚡' },
    { id: 'minimal', name: 'Instant (No Motion)', desc: 'Pure speed, elements appear immediately without motion delays', icon: '⚡' },
  ];

  const SPEED_OPTIONS: Array<{ id: AnimationSettings['speed']; name: string; time: string }> = [
    { id: 'slow', name: 'Cinematic', time: '1.2s' },
    { id: 'normal', name: 'Balanced', time: '0.7s' },
    { id: 'fast', name: 'Snappy', time: '0.35s' },
  ];

  const HOVER_OPTIONS: Array<{ id: AnimationSettings['hoverPhysics']; name: string; desc: string }> = [
    { id: 'lift', name: 'Card Lift & Deep Shadow', desc: 'Card rises 6px with luxury shadow' },
    { id: 'glow', name: 'Gold Border Glow', desc: 'Intense golden border shine & radiance' },
    { id: 'tilt', name: 'Interactive Micro-Tilt', desc: 'Slight dynamic perspective scaling' },
    { id: 'flat', name: 'Clean & Flat', desc: 'Minimal border highlight only' },
  ];

  const handleTestAnimations = () => {
    // Briefly toggle off and on to trigger React key remounting of animated components
    showToast('Replaying animations...');
    window.dispatchEvent(new CustomEvent('replay-site-animations'));
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={() => setActivePanel('none')}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-[#C89B3C]/40 w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B5699] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#C89B3C] text-[#071A2F] flex items-center justify-center font-black shadow-sm">
              <Sparkles className="w-5 h-5 text-[#071A2F]" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Animation &amp; Motion Studio</h3>
              <p className="text-xs text-[#FDE68A]">Customize entrance effects, speed, particles, and card physics</p>
            </div>
          </div>
          <button
            onClick={() => setActivePanel('none')}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-slate-800 text-xs sm:text-sm">
          
          {/* Global Toggle */}
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div>
              <p className="font-bold text-slate-900 text-sm">Enable Website Animations</p>
              <p className="text-xs text-slate-500">Master switch for entrance effects across all sections</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={animations.enabled}
                onChange={(e) => updateAnimation('enabled', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1B5699]"></div>
            </label>
          </div>

          {/* Animation Presets */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Entrance Animation Style:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PRESETS.map((preset) => {
                const isSelected = animations.preset === preset.id;
                return (
                  <div
                    key={preset.id}
                    onClick={() => updateAnimation('preset', preset.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-[#C89B3C] bg-amber-50/50 ring-2 ring-[#C89B3C]/30 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-xl shrink-0 mt-0.5">{preset.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-bold text-xs ${isSelected ? 'text-[#1B5699]' : 'text-slate-800'}`}>
                          {preset.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#C89B3C]" />}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{preset.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animation Speed */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>Animation Timing &amp; Speed:</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {SPEED_OPTIONS.map((spd) => {
                const isSelected = animations.speed === spd.id;
                return (
                  <button
                    key={spd.id}
                    type="button"
                    onClick={() => updateAnimation('speed', spd.id)}
                    className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#1B5699] bg-[#1B5699] text-white shadow-xs font-bold'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-medium'
                    }`}
                  >
                    <div className="text-xs">{spd.name}</div>
                    <div className={`text-[10px] ${isSelected ? 'text-[#FDE68A]' : 'text-slate-400'}`}>
                      {spd.time}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Particles & Effects */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>Floating Golden Sparkles in Hero</span>
                </p>
                <p className="text-[11px] text-slate-500">Subtle floating ambient golden particles behind maritime trade hero</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={animations.particles}
                  onChange={(e) => updateAnimation('particles', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1B5699]"></div>
              </label>
            </div>
          </div>

          {/* Card Hover Physics */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Product &amp; Container Card Hover Response:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {HOVER_OPTIONS.map((hov) => {
                const isSelected = animations.hoverPhysics === hov.id;
                return (
                  <div
                    key={hov.id}
                    onClick={() => updateAnimation('hoverPhysics', hov.id)}
                    className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#C89B3C] bg-amber-50/40 text-[#1B5699] font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 font-medium'
                    }`}
                  >
                    <div className="text-xs">{hov.name}</div>
                    <div className="text-[10px] text-slate-500 font-normal mt-0.5">{hov.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            type="button"
            onClick={handleTestAnimations}
            className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-[#071A2F] rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Test / Replay Animation</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePanel('none')}
            className="px-5 py-2 bg-[#1B5699] hover:bg-[#133A6B] text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
          >
            <Check className="w-3.5 h-3.5 text-[#FDE68A]" />
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
};

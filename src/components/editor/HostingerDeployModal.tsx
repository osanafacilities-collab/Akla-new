import React, { useState } from 'react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  Server, 
  FileArchive, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Copy, 
  Check, 
  ExternalLink,
  Layers,
  FolderArchive
} from 'lucide-react';

interface HostingerDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerDeployModal: React.FC<HostingerDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedCommand, setCopiedCommand] = useState(false);

  if (!isOpen) return null;

  const copyBuildCommand = () => {
    navigator.clipboard.writeText('npm run build:zip');
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#071A2F] text-white border-2 border-[#C89B3C] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C89B3C]/30 flex items-center justify-between bg-gradient-to-r from-[#071A2F] via-[#0E2849] to-[#071A2F]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5D061] to-[#C89B3C] flex items-center justify-center text-[#071A2F] shadow-md">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E3BC63]/15 border border-[#E3BC63]/40 text-[#FDE68A] text-[10px] font-black uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>100% Hostinger Ready</span>
              </div>
              <h3 className="text-xl font-heading font-black text-white">
                Hostinger Deployment Suite
              </h3>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Download Callout */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#133A6B] to-[#0B2545] border-2 border-[#E3BC63]/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89B3C]/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileArchive className="w-5 h-5 text-[#FDE68A]" />
                  <span className="font-heading font-bold text-lg text-white">
                    akla-foodstuff-hostinger-deploy.zip
                  </span>
                </div>
                <p className="text-xs text-[#CBD5E1] max-w-md leading-relaxed">
                  Pre-compiled production bundle including all assets, images, and Hostinger LiteSpeed / Apache <code className="text-[#FDE68A] bg-black/30 px-1 py-0.5 rounded font-mono">.htaccess</code> rules.
                </p>
              </div>

              <a
                href="/akla-foodstuff-hostinger-deploy.zip"
                download="akla-foodstuff-hostinger-deploy.zip"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#F5D061] to-[#C89B3C] hover:from-[#FEE588] hover:to-[#DBAA43] text-[#071A2F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download ZIP</span>
              </a>
            </div>
          </div>

          {/* 3 Simple Steps */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] flex items-center gap-2">
              <span>Quick 3-Minute Deployment Guide (Hostinger hPanel)</span>
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-[#0F2746]/70 border border-white/10 flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#FDE68A] font-black text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">Download the ZIP Package</p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Click the golden <strong className="text-white">Download ZIP</strong> button above to save <code className="text-[#FDE68A]">akla-foodstuff-hostinger-deploy.zip</code> to your computer.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-[#0F2746]/70 border border-white/10 flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#FDE68A] font-black text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">Open Hostinger hPanel File Manager</p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Log in to <strong className="text-white">hpanel.hostinger.com</strong> &rarr; Click <strong className="text-white">Websites</strong> &rarr; <strong className="text-white">File Manager</strong> &rarr; Open <strong className="text-emerald-400 font-mono">public_html</strong>.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-[#0F2746]/70 border border-white/10 flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#FDE68A] font-black text-xs flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">Upload & Extract Directly to public_html</p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Upload the zip file into <code className="text-emerald-400">public_html</code>, right-click it, and select <strong className="text-white">Extract</strong>. Your website is immediately online!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Verification Highlights */}
          <div className="p-4 rounded-2xl bg-[#071322] border border-white/10 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Hostinger Infrastructure Optimizations Included
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>LiteSpeed & Apache .htaccess configured</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SPA routing rewrite (zero 404s)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Gzip & Brotli compression active</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1-year immutable asset caching</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Security headers (XSS, nosniff, framing)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>No Node.js runtime needed (static HTML/JS)</span>
              </div>
            </div>
          </div>

          {/* Terminal / Developer Option */}
          <div className="p-3.5 rounded-xl bg-black/40 border border-slate-700/60 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap text-xs">
            <div className="space-y-0.5">
              <p className="text-slate-400 font-medium">Rebuild from Terminal anytime:</p>
              <code className="text-[#FDE68A] font-mono">npm run build:zip</code>
            </div>
            <button
              type="button"
              onClick={copyBuildCommand}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 border border-slate-600"
            >
              {copiedCommand ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-300" />}
              <span>{copiedCommand ? 'Copied!' : 'Copy Command'}</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#C89B3C]/20 bg-[#0A1E35] flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Compatible with Hostinger Shared, Cloud, cPanel, & VPS
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

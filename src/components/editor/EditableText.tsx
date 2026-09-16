import React, { useState, useEffect, useRef } from 'react';
import { useSiteEditor } from '../../context/SiteEditorContext';
import { Pencil, Check, X } from 'lucide-react';

interface EditableTextProps {
  path: string;
  defaultText: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  multiline?: boolean;
  label?: string;
  children?: React.ReactNode;
}

export const EditableText: React.FC<EditableTextProps> = ({
  path,
  defaultText,
  as = 'span',
  className = '',
  multiline = false,
  label,
}) => {
  const { isEditMode, content, updateText } = useSiteEditor();

  // Helper to extract nested value from content
  const getValueFromContent = (p: string, def: string): string => {
    const parts = p.split('.');
    let curr: any = content;
    for (const part of parts) {
      if (!curr) return def;
      curr = curr[part];
    }
    return typeof curr === 'string' ? curr : def;
  };

  const currentVal = getValueFromContent(path, defaultText);
  const [isEditing, setIsEditing] = useState(false);
  const [tempVal, setTempVal] = useState(currentVal);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setTempVal(currentVal);
  }, [currentVal]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    updateText(path, tempVal);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempVal(currentVal);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const Tag = as as any;

  if (!isEditMode) {
    return <Tag className={className}>{currentVal}</Tag>;
  }

  if (isEditing) {
    return (
      <div className="inline-block relative z-50 p-1 bg-white dark:bg-slate-900 rounded-lg shadow-2xl border-2 border-[#C89B3C] text-slate-900 animate-in fade-in zoom-in-95 duration-150">
        {label && (
          <div className="text-[10px] uppercase font-bold text-[#1B5699] px-1 pb-1">
            Editing: {label}
          </div>
        )}
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={4}
            className="w-full min-w-[280px] max-w-[500px] text-xs sm:text-sm p-2 bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#C89B3C] outline-none text-slate-900"
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full min-w-[200px] text-xs sm:text-sm p-2 bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#C89B3C] outline-none text-slate-900"
          />
        )}
        <div className="flex items-center justify-end gap-1.5 pt-1.5">
          <button
            type="button"
            onClick={handleCancel}
            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <X className="w-3 h-3" /> Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-2.5 py-1 bg-[#1B5699] hover:bg-[#133A6B] text-white rounded text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
          >
            <Check className="w-3 h-3 text-[#FDE68A]" /> Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <Tag
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        setIsEditing(true);
      }}
      className={`${className} group/editable relative cursor-pointer outline-1 outline-dashed outline-transparent hover:outline-[#C89B3C] hover:bg-[#C89B3C]/10 rounded-sm px-0.5 transition-all duration-150`}
      title="Click to edit text"
    >
      {currentVal}
      <span className="opacity-0 group-hover/editable:opacity-100 absolute -top-5 right-0 z-30 px-1.5 py-0.5 bg-[#0A1E35] text-[#FDE68A] text-[10px] font-black rounded shadow-md pointer-events-none flex items-center gap-1 whitespace-nowrap transition-opacity">
        <Pencil className="w-2.5 h-2.5" /> Edit Text
      </span>
    </Tag>
  );
};

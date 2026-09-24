import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  url: string;
  title: string;
  subtitle?: string;
  caption?: string;
}

interface FullscreenLightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const FullscreenLightbox: React.FC<FullscreenLightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!item) return null;

  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Keyboard navigation & ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#141212]/98 backdrop-blur-xl text-[#FAF6F0] select-none animate-in fade-in duration-200">
      {/* Top Header Bar */}
      <div className="h-16 px-6 md:px-10 flex items-center justify-between border-b border-white/10 bg-[#1A1615]/80 z-30">
        <div className="flex items-center gap-3">
          <span className="font-cinzel text-xs text-[#E8C38D] tracking-[0.2em] uppercase font-semibold">
            WEDDING TALES
          </span>
          <span className="text-white/30">·</span>
          <h2 className="text-xs md:text-sm font-serif text-white tracking-wide truncate max-w-xs md:max-w-md">
            {item.title} {item.subtitle ? `— ${item.subtitle}` : ''}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Zoom Toggle */}
          <button
            onClick={() => setZoomLevel((z) => (z >= 1.4 ? 1 : z + 0.3))}
            className="p-2 text-white/70 hover:text-white rounded-sm transition-colors cursor-pointer"
            title="Toggle Zoom"
          >
            {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-sm transition-colors cursor-pointer ml-2"
            title="Close Lightbox (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-4 md:p-8">
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/80 border border-white/15 rounded-full transition-all cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/80 border border-white/15 rounded-full transition-all cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* High-res Image Display */}
        <div
          className="relative max-w-full max-h-full transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={item.url}
            alt={item.title}
            className="max-h-[75vh] max-w-[90vw] md:max-w-[78vw] object-contain rounded-sm shadow-2xl border border-white/10"
          />
        </div>
      </div>

      {/* Caption Bottom Bar */}
      <div className="min-h-14 py-3 border-t border-white/10 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 z-30 bg-[#1A1615]">
        <span className="font-serif italic text-sm text-[#E8C38D]">
          {item.caption || item.title}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1 sm:mt-0">
          GENUINE PHOTOGRAPHIC PLATE · NO DIGITAL INTERFERENCE
        </span>
      </div>
    </div>
  );
};

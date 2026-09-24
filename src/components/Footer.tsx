import React from 'react';
import { PageId } from './Navigation';
import { Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 px-6 md:px-14 bg-[#181515] text-[#FAF6F0] border-t border-black/20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-14 border-b border-white/10">
          <div>
            {/* Flying Horse Icon in Gold */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#D49B35]/40 flex items-center justify-center text-[#D49B35]">
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.8 4.2c-.3 1.2-1.1 2.2-2.1 2.9.2.5.5 1.1.9 1.6-1.4.2-2.7-.4-3.5-1.5-.4.8-1 1.5-1.7 2.1 1.2 1.3 2.1 2.9 2.6 4.7-1.3-.6-2.5-1.5-3.3-2.7-.5.9-1.3 1.6-2.3 2.1.8 1.5 1.2 3.2 1.3 4.9-1.1-.9-2-2-2.6-3.3-.8.7-1.8 1.1-2.9 1.2.6 1.8.8 3.7.6 5.5-1-.9-1.8-2.1-2.2-3.4-.6.2-1.3.2-1.9.1.5 2.2.3 4.4-.5 6.4-.8-1.2-1.3-2.5-1.6-3.9-1.2-.6-1.5-2.2-.7-3.4 1.1-1.6 3.1-2.4 5-2.1 1.3.2 2.5.8 3.5 1.7.4-1.2 1.2-2.2 2.2-2.9-1-1.4-1.6-3-1.8-4.7 1.2.5 2.2 1.4 2.9 2.5.6-.9 1.4-1.6 2.4-2.1-1-1.8-1.5-3.8-1.4-5.8 1.4.7 2.5 1.9 3.1 3.4.6-.7 1.3-1.3 2.2-1.7-.8-1.6-.9-3.4-.4-5.1 1.3 1 2.2 2.5 2.5 4.2.7-.6 1.5-1 2.4-1.2-.7-1.3-.7-2.9-.1-4.3 1.2 1.2 1.9 2.8 2 4.5.8-.3 1.7-.5 2.6-.5-.3-.9-.2-1.9.2-2.8z" />
                </svg>
              </div>
              <h2 className="font-cinzel text-xl md:text-2xl font-light tracking-[0.25em] text-[#FAF6F0]">
                WEDDING TALES
              </h2>
            </div>
            <p className="text-xs text-white/70 font-sans max-w-md leading-relaxed">
              Imperfect. Human. Eternal. Luxury Indian destination wedding photography and bespoke visual memoirs capturing the sacred Navarasa of life.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-cinzel tracking-[0.2em] uppercase text-white/80">
            <button onClick={() => onNavigate('overview')} className="hover:text-[#D49B35] transition-colors cursor-pointer">
              Overview
            </button>
            <span className="text-white/20 select-none">/</span>
            <button onClick={() => onNavigate('navarasa')} className="hover:text-[#D49B35] transition-colors cursor-pointer">
              Navarasa
            </button>
            <span className="text-white/20 select-none">/</span>
            <button onClick={() => onNavigate('stories')} className="hover:text-[#D49B35] transition-colors cursor-pointer">
              Stories
            </button>
            <span className="text-white/20 select-none">/</span>
            <button onClick={() => onNavigate('chitrashala')} className="hover:text-[#D49B35] transition-colors cursor-pointer text-[#E8C38D]">
              Chitrashala (Wall)
            </button>
            <span className="text-white/20 select-none">/</span>
            <button onClick={() => onNavigate('philosophy')} className="hover:text-[#D49B35] transition-colors cursor-pointer">
              Philosophy
            </button>
            <span className="text-white/20 select-none">/</span>
            <button onClick={() => onNavigate('inquire')} className="hover:text-[#D49B35] transition-colors cursor-pointer text-[#E8C38D]">
              Inquire
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © {new Date().getFullYear()} Wedding Tales Films & Photography. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>UDAIPUR</span>
            <span>·</span>
            <span>JAIPUR</span>
            <span>·</span>
            <span>JODHPUR</span>
            <span>·</span>
            <span>GOA</span>
            <span>·</span>
            <span>MUMBAI</span>
            <span>·</span>
            <span>NEW DELHI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

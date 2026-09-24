import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';

export type PageId = 'overview' | 'navarasa' | 'stories' | 'chitrashala' | 'philosophy' | 'inquire';

interface NavigationProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ambientAudio, setAmbientAudio] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'navarasa', label: 'NAVARASA' },
    { id: 'stories', label: 'STORIES' },
    { id: 'chitrashala', label: 'CHITRASHALA · WALL' },
    { id: 'philosophy', label: 'PHILOSOPHY' },
    { id: 'inquire', label: 'INQUIRE' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const toggleSound = () => {
    setAmbientAudio(!ambientAudio);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-black/[0.08] transition-all">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Clean Single-Line Brand + Breadcrumbs Menu */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Brand Wordmark (Clean single straight line, no up-down stacked text) */}
          <button
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#50111B] inline-block group-hover:scale-125 transition-transform" />
            <span className="font-cinzel text-base md:text-lg font-semibold tracking-[0.22em] text-[#50111B] whitespace-nowrap">
              WEDDING TALES
            </span>
          </button>

          {/* Desktop Breadcrumbs Menu: Clean straight line with slash separators */}
          <nav className="hidden lg:flex items-center text-[11px] font-cinzel tracking-[0.2em]">
            <span className="text-black/25 mx-3 select-none">/</span>
            {navItems.map((item, index) => {
              const isActive = activePage === item.id;
              return (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`transition-colors whitespace-nowrap py-1 cursor-pointer ${
                      isActive
                        ? 'text-[#50111B] font-bold underline underline-offset-4 decoration-[#50111B]/60'
                        : 'text-stone-600 hover:text-[#50111B]'
                    }`}
                  >
                    {item.label}
                  </button>
                  {index < navItems.length - 1 && (
                    <span className="text-black/20 mx-3 select-none">/</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>

        {/* Right Single-Line Actions: Atmosphere & Inquire */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-cinzel">
          <button
            onClick={toggleSound}
            className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-stone-600 hover:text-[#50111B] transition-colors cursor-pointer"
            title="Toggle Sitar & Temple Bells Atmosphere"
          >
            {ambientAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#50111B]" />
                <span className="text-[#50111B]">ATMOSPHERE: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span>ATMOSPHERE</span>
              </>
            )}
          </button>

          <span className="text-black/20 select-none">/</span>

          <button
            onClick={() => handleNavClick('inquire')}
            className="text-[11px] tracking-[0.2em] font-semibold text-[#50111B] hover:text-[#3E0C14] transition-colors cursor-pointer"
          >
            [ COMMISSIONS ]
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-800 hover:text-black cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Breadcrumb Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-black/10 px-6 py-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-cinzel tracking-[0.18em]">
            {navItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`py-1 transition-colors cursor-pointer ${
                    activePage === item.id
                      ? 'text-[#50111B] font-bold underline underline-offset-4'
                      : 'text-stone-700 hover:text-[#50111B]'
                  }`}
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <span className="text-black/25">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-xs">
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 font-mono text-stone-600"
            >
              {ambientAudio ? <Volume2 className="w-4 h-4 text-[#50111B]" /> : <VolumeX className="w-4 h-4" />}
              <span>Atmosphere: {ambientAudio ? 'On' : 'Off'}</span>
            </button>
            <button
              onClick={() => handleNavClick('inquire')}
              className="font-cinzel text-xs font-bold text-[#50111B] tracking-wider"
            >
              [ INQUIRE DATES ]
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

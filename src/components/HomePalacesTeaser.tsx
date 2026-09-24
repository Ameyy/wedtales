import React from 'react';
import { WEDDING_STORIES, WeddingStory } from '../data/portfolioData';
import { ArrowRight, MapPin, Calendar, Maximize2 } from 'lucide-react';

interface HomePalacesTeaserProps {
  onSelectPhoto: (url: string, title: string, caption: string) => void;
  onNavigateToStories: () => void;
  onNavigateToInquire: () => void;
}

export const HomePalacesTeaser: React.FC<HomePalacesTeaserProps> = ({
  onSelectPhoto,
  onNavigateToStories,
  onNavigateToInquire,
}) => {
  return (
    <section className="w-full bg-[#FAF6F0] py-24 px-6 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-black/10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#50111B] uppercase block mb-1">
              CURATED ARCHIVE · SELECTED MONOGRAPHS
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1615]">
              Palaces & Sacred Havens
            </h2>
            <p className="font-serif text-stone-600 text-sm md:text-base mt-2 max-w-lg">
              Cinematic visual essays photographed in 35mm film across the royal heritage palaces, desert citadels, and coastal havelis of India.
            </p>
          </div>

          <div>
            <button
              onClick={onNavigateToStories}
              className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-[0.2em] uppercase text-[#50111B] hover:text-[#3E0C14] transition-colors cursor-pointer group"
            >
              <span>VIEW ALL STORIES & GALLERIES</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bento Grid of Real Indian Wedding Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: Large Featured Udaipur Palace */}
          <div
            onClick={() => onSelectPhoto(WEDDING_STORIES[0].coverImage, WEDDING_STORIES[0].couple, WEDDING_STORIES[0].venue)}
            className="md:col-span-7 relative group rounded-sm overflow-hidden bg-black/10 border border-black/10 shadow-sm cursor-pointer min-h-[460px]"
          >
            <img
              src={WEDDING_STORIES[0].coverImage}
              alt={WEDDING_STORIES[0].couple}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#E8C38D] mb-1">
                {WEDDING_STORIES[0].tag} · {WEDDING_STORIES[0].location}
              </span>
              <h3 className="font-cinzel text-3xl md:text-4xl font-light">
                {WEDDING_STORIES[0].couple}
              </h3>
              <p className="font-serif italic text-xs md:text-sm text-white/80 mt-1 max-w-md">
                "{WEDDING_STORIES[0].narrative.slice(0, 110)}..."
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-white/60">
                <span>{WEDDING_STORIES[0].venue}</span>
                <span className="text-[#E8C38D] font-cinzel text-[11px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  INSPECT ESSAY →
                </span>
              </div>
            </div>
            <div className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Right Column: 2 Stacked Stories (Jaipur & Goa) */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {/* Story 2: Jaipur */}
            <div
              onClick={() => onSelectPhoto(WEDDING_STORIES[1].coverImage, WEDDING_STORIES[1].couple, WEDDING_STORIES[1].venue)}
              className="relative group rounded-sm overflow-hidden bg-black/10 border border-black/10 shadow-sm cursor-pointer h-[240px]"
            >
              <img
                src={WEDDING_STORIES[1].coverImage}
                alt={WEDDING_STORIES[1].couple}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-cinzel text-[9px] uppercase tracking-widest text-[#E8C38D] mb-0.5">
                  {WEDDING_STORIES[1].location}
                </span>
                <h4 className="font-cinzel text-2xl font-light">
                  {WEDDING_STORIES[1].couple}
                </h4>
                <p className="font-mono text-[10px] text-white/70">
                  {WEDDING_STORIES[1].venue}
                </p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Story 3: Coastal Goa */}
            <div
              onClick={() => onSelectPhoto(WEDDING_STORIES[2].coverImage, WEDDING_STORIES[2].couple, WEDDING_STORIES[2].venue)}
              className="relative group rounded-sm overflow-hidden bg-black/10 border border-black/10 shadow-sm cursor-pointer h-[240px]"
            >
              <img
                src={WEDDING_STORIES[2].coverImage}
                alt={WEDDING_STORIES[2].couple}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-cinzel text-[9px] uppercase tracking-widest text-[#E8C38D] mb-0.5">
                  {WEDDING_STORIES[2].location}
                </span>
                <h4 className="font-cinzel text-2xl font-light">
                  {WEDDING_STORIES[2].couple}
                </h4>
                <p className="font-mono text-[10px] text-white/70">
                  {WEDDING_STORIES[2].venue}
                </p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner to Commission */}
        <div className="mt-16 p-8 md:p-12 rounded-sm bg-[#50111B] text-[#FAF6F0] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3E0C14]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8C38D] block mb-1">
              LIMITED BESPOKE COMMISSIONS
            </span>
            <h3 className="font-cinzel text-2xl md:text-3xl font-light">
              Are you planning a celebration in 2026 or 2027?
            </h3>
            <p className="text-xs text-white/80 font-sans mt-1">
              We document weddings across Rajasthan, Goa, Mumbai, Delhi, and all pan-India destinations.
            </p>
          </div>
          <button
            onClick={onNavigateToInquire}
            className="px-6 py-3 bg-[#FAF6F0] text-[#50111B] text-xs font-cinzel font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-white transition-colors cursor-pointer shrink-0 shadow-md"
          >
            INQUIRE WEDDING DATES
          </button>
        </div>
      </div>
    </section>
  );
};

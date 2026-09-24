import React, { useState } from 'react';
import { NAVARASA_DATA, RasaWork } from '../data/portfolioData';
import { ArrowRight, Maximize2, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroNavarasaProps {
  onSelectRasa: (rasa: RasaWork) => void;
  onNavigateToNavarasa: () => void;
  onNavigateToStories: () => void;
}

export const HeroNavarasa: React.FC<HeroNavarasaProps> = ({
  onSelectRasa,
  onNavigateToNavarasa,
  onNavigateToStories,
}) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setScrollIndex((prev) => Math.min(NAVARASA_DATA.length - 3, prev + 1));
  };

  return (
    <div className="w-full bg-[#FAF6F0] text-[#1A1615]">
      {/* ========================================================
          SECTION 1: THE MONUMENTAL BRIDAL HERO (As in Reference)
          ======================================================== */}
      <section className="relative w-full min-h-[92vh] md:min-h-screen bg-[#242120] text-[#FAF6F0] flex flex-col justify-between pt-24 pb-12 px-6 md:px-14 overflow-hidden">
        {/* Background Real Indian Bridal Portrait (High-contrast royal monochrome) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=90"
            alt="Royal Indian Bride with antique jewelry and gajra"
            className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.78] transition-transform duration-1000 scale-100 hover:scale-105"
          />
          {/* Vignette & Subtle Warm Tonal Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B1A] via-black/30 to-[#1F1B1A]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70" />
        </div>

        {/* Top Floating Winged Pegasus Emblem (Right side as in reference) */}
        <div className="relative z-10 w-full flex justify-end">
          <div className="flex flex-col items-end opacity-90 group cursor-default">
            {/* Winged Horse Emblem SVG */}
            <svg
              className="w-14 h-14 md:w-16 md:h-16 text-[#FAF6F0] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Pegasus Head & Crown */}
              <path d="M42 12c-2-2-6-3-9-2-4 1-6 4-7 8l-2 8" />
              <path d="M33 10c0-3 2-6 5-7 1 2 2 4 1 7" />
              {/* Wing Feathers Spread */}
              <path d="M26 26c-6-10-14-16-22-18 2 5 6 12 11 16-7-4-13-5-15-4 3 4 8 9 14 11-6-2-12-1-14 1 4 3 9 5 15 6" />
              {/* Arching Back & Flanks */}
              <path d="M26 26c4 3 9 4 15 4l12 6c3 2 5 6 4 9l-2 5" />
              {/* Forelegs in Flight */}
              <path d="M37 36l-5 12-4-2" />
              <path d="M44 38l-3 14-3 1" />
              {/* Hind Legs & Flowing Tail */}
              <path d="M52 45l4 9 4-1" />
              <path d="M54 44c4 2 7 6 6 10-3-1-5-3-6-5" />
            </svg>
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/60 mt-1">
              EST. 2016 · EMBLEM
            </span>
          </div>
        </div>

        {/* Asymmetrical Poetic Framing Overlay (Directly matching reference image) */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end my-auto py-12">
          {/* Left Text */}
          <div className="md:col-span-5 max-w-sm">
            <p className="font-cinzel text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#FAF6F0] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              YOUR WEDDING ISN'T AN EVENT.
            </p>
          </div>

          {/* Center Empty Viewport to give the Indian Bride portrait full breathing room */}
          <div className="hidden md:block md:col-span-2" />

          {/* Right Text */}
          <div className="md:col-span-5 max-w-md ml-auto text-left md:text-right">
            <p className="font-cinzel text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#FAF6F0] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              IT'S THE ONLY DAY IN HUMAN HISTORY WHERE ALL NINE EMOTIONS COLLIDE AT A SINGLE PLACE, IN JUST A SMALL SPAN OF TIME.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="relative z-10 w-full flex items-center justify-between pt-6 border-t border-white/15 text-[10px] font-mono tracking-[0.25em] text-white/70 uppercase">
          <span>01 · THE MANIFESTO</span>
          <div className="flex items-center gap-2 animate-bounce">
            <span>SCROLL TO ENTER</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-90" />
          </div>
          <span>UDAIPUR · JAIPUR · JODHPUR · PAN-INDIA</span>
        </div>
      </section>


      {/* ========================================================
          SECTION 2: "WEDDING TALES [SINCE 2016]"
          Royal Crimson / Vermilion Wine Banner (As in Reference)
          ======================================================== */}
      <section className="w-full bg-[#50111B] text-[#FAF6F0] py-20 px-6 md:px-14 border-t border-[#3E0C14]">
        <div className="max-w-[1440px] mx-auto">
          {/* Title Header: Clean straight single horizontal line */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 border-b border-white/10">
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.08em] whitespace-nowrap">
              WEDDING TALES
            </h2>
            <div className="font-cinzel text-lg sm:text-2xl tracking-[0.15em] text-[#E8C38D] font-light">
              [SINCE 2016]
            </div>
          </div>

          {/* Three-Column Editorial Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-10 items-center">
            {/* Column 1: Label in single straight line */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-cinzel text-xs tracking-[0.2em] uppercase text-[#E8C38D]">
                <span>ABOUT US</span>
                <span className="text-white/30">/</span>
                <span className="font-mono text-[10px] tracking-widest text-white/60">CODES</span>
              </div>
            </div>

            {/* Column 2: Center Cinematic Horizon (City Palace Udaipur, Rajasthan) */}
            <div className="md:col-span-5">
              <div className="relative group overflow-hidden rounded-sm border border-white/15 shadow-2xl">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/City_Palace_Udaipur_Front.jpg"
                  alt="City Palace Udaipur Rajasthan overlooking waters"
                  className="w-full h-56 sm:h-64 object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-widest text-white/80 uppercase">
                  CITY PALACE & LAKE PICHOLA, UDAIPUR, RAJASTHAN
                </div>
              </div>
            </div>

            {/* Column 3: Poetic Manifesto (Text from Reference Image) */}
            <div className="md:col-span-5 space-y-4 text-xs md:text-sm font-sans font-light leading-relaxed text-[#FAF6F0]/90">
              <p>
                Wedding Tales represents what we chase: freedom, grace, the impossible made visible in the sacred communion of love.
              </p>
              <p>
                We don't believe in trends. We believe in craft. And we believe that your wedding—with all its mess and magic—deserves to be remembered as it was:
              </p>
              <p className="font-serif italic text-lg md:text-xl text-[#E8C38D] pt-1">
                Imperfect. Human. Eternal.
              </p>

              <div className="pt-2">
                <button
                  onClick={onNavigateToStories}
                  className="inline-flex items-center gap-2 text-xs font-cinzel tracking-[0.2em] text-[#E8C38D] hover:text-white uppercase transition-colors cursor-pointer group"
                >
                  <span>EXPLORE DESTINATION STORIES</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 3: "NINE EMOTIONS OF LIFE" / THE NAVARASA
          (Exact Card Structure from Reference Image)
          ======================================================== */}
      <section className="w-full bg-[#FAF6F0] py-20 px-6 md:px-14 border-b border-black/[0.08]">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-black/10">
            <div className="flex items-center gap-3">
              <span className="font-cinzel text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#50111B]">
                NINE EMOTIONS OF LIFE
              </span>
              <span className="text-black/30">/</span>
              <span className="font-mono text-xs tracking-widest uppercase text-stone-500">
                PHILOSOPHY
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Carousel Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={scrollLeft}
                  disabled={scrollIndex === 0}
                  className="p-1.5 border border-black/15 rounded-full hover:bg-black/5 disabled:opacity-30 cursor-pointer"
                  aria-label="Previous emotions"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollRight}
                  disabled={scrollIndex >= NAVARASA_DATA.length - 3}
                  className="p-1.5 border border-black/15 rounded-full hover:bg-black/5 disabled:opacity-30 cursor-pointer"
                  aria-label="Next emotions"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={onNavigateToNavarasa}
                className="font-cinzel text-xs font-semibold tracking-[0.2em] uppercase text-[#50111B] hover:text-[#3E0C14] flex items-center gap-1.5 cursor-pointer"
              >
                <span>• KNOW MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* The 5 Primary Rasa Cards (Matching Reference Visual Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {NAVARASA_DATA.slice(0, 5).map((item) => {
              // Card Theme coloring matching reference image
              let bgStyle = 'bg-[#EFE9DD] text-[#242120] border-black/10';
              if (item.cardTone === 'maroon') {
                bgStyle = 'bg-[#50111B] text-[#FAF6F0] border-[#3E0C14]';
              } else if (item.cardTone === 'noir') {
                bgStyle = 'bg-[#181615] text-[#FAF6F0] border-black/40';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectRasa(item)}
                  className={`relative p-5 rounded-sm flex flex-col justify-between border shadow-sm transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group min-h-[480px] ${bgStyle}`}
                >
                  {/* Card Top: Sanskrit Letter, English Rasa, Meaning */}
                  <div className="text-center pt-2">
                    <span className="font-serif text-xs opacity-75 tracking-wider block mb-0.5">
                      {item.sanskritName}
                    </span>
                    <h3 className="font-cinzel text-sm font-semibold tracking-[0.2em] uppercase">
                      {item.rasa}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-wider opacity-70 block mt-0.5">
                      ( {item.meaning} )
                    </span>
                  </div>

                  {/* Card Center: High-Res Real Person Photograph (No Shapes, Real Bride/Couple) */}
                  <div className="relative my-4 overflow-hidden rounded-sm h-[220px] bg-black/10 shadow-md">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute top-2 right-2 p-1.5 bg-black/40 backdrop-blur-xs text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Card Bottom: Poetic Quote */}
                  <div className="pb-1 text-center">
                    <p className="font-serif italic text-xs leading-relaxed opacity-90 line-clamp-4">
                      "{item.quote}"
                    </p>
                    <span className="font-mono text-[8px] uppercase tracking-widest opacity-60 block mt-2 group-hover:opacity-100 transition-opacity text-[#D49B35]">
                      VIEW FULL RASA ESSAY →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement Strip (Directly from Reference Image) */}
          <div className="mt-14 pt-10 border-t border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 flex items-center gap-2 flex-wrap">
              <span className="font-cinzel text-xs font-semibold tracking-[0.2em] text-[#50111B] uppercase">
                FOUNDATION OF WHATEVER WE DO
              </span>
              <span className="text-black/25">/</span>
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase">
                CONSTITUTION
              </span>
            </div>

            <div className="md:col-span-8">
              <p className="font-cinzel text-xs md:text-sm font-medium tracking-[0.16em] uppercase text-stone-800 leading-loose">
                WHEN 400 PEOPLE GATHER FOR TWO.
                <br />
                WHEN YOUR CHILDHOOD FRIEND FLIES IN FROM ANOTHER CONTINENT.
                <br />
                WHEN THE MUNDANE BECOMES EXTRAORDINARY.
                <br />
                THIS IS THE EMOTION INSTAGRAM CHASES.
                <br />
                <span className="text-[#50111B] font-bold">WE DOCUMENT WHAT'S BENEATH IT.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

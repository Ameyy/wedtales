import React from 'react';
import { EDITORIAL_PRESS } from '../data/portfolioData';
import { Sparkles, Award, Heart, Film, ArrowRight } from 'lucide-react';

interface PhilosophyPageProps {
  onNavigateToInquire: () => void;
}

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onNavigateToInquire }) => {
  return (
    <div className="pt-28 pb-24 px-6 md:px-14 max-w-[1440px] mx-auto min-h-screen bg-[#FAF6F0] text-[#1A1615]">
      {/* Manifesto Title */}
      <div className="max-w-3xl mb-16 pb-10 border-b border-black/10">
        <span className="font-mono text-xs tracking-[0.25em] text-[#50111B] uppercase block mb-1">
          MANIFESTO & CODES · [EST. 2016]
        </span>
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#1A1615] mb-6">
          Wedding Tales
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-[#50111B] leading-relaxed mb-6">
          "Wedding Tales represents what we chase: freedom, grace, the timeless truth of two souls made visible."
        </p>
        <p className="font-sans text-stone-700 text-sm md:text-base leading-relaxed">
          We began in 2016 with a singular rejection: the formulaic theatrics of modern big-fat wedding productions. The smoke machines, the forced couple poses behind fake pillars, the rushed 3-minute photo sessions in the corridor. We believe that an Indian wedding is a sacred spiritual convergence of families, lifetimes, and ancestry. It deserves to be documented with the gravitas of fine art and the vulnerability of a diary.
        </p>
      </div>

      {/* The Pillars of Craft */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 bg-white rounded-sm border border-black/10 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#50111B]/10 flex items-center justify-center text-[#50111B]">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-lg font-medium text-stone-900">
            01. Unstaged Intimacy
          </h3>
          <p className="font-sans text-xs text-stone-600 leading-relaxed">
            We don't direct you into artificial postures. We observe the subtle, trembling micro-moments: a father adjusting his daughter's veil, the secret smile exchanged during Sanskrit chants, the tear wiped away before anyone notices.
          </p>
        </div>

        <div className="p-8 bg-white rounded-sm border border-black/10 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#50111B]/10 flex items-center justify-center text-[#50111B]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-lg font-medium text-stone-900">
            02. Raking Desert Light & Film
          </h3>
          <p className="font-sans text-xs text-stone-600 leading-relaxed">
            Guided by natural ambient sun, oil lamps (diyas), and firelight from the havan kund. We shoot with both Leica medium-format digital and Kodak 35mm film stock for tangible grain and velvet shadows.
          </p>
        </div>

        <div className="p-8 bg-white rounded-sm border border-black/10 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#50111B]/10 flex items-center justify-center text-[#50111B]">
            <Film className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-lg font-medium text-stone-900">
            03. The Navarasa Discipline
          </h3>
          <p className="font-sans text-xs text-stone-600 leading-relaxed">
            We don't chase only the glamour of Shringara (Love). We look for Karuna (the grief of parting), Bhaya (the sacred fear of commitment), and Hasya (the unrestrained laughter of haldi celebrations).
          </p>
        </div>
      </div>

      {/* Editorial Press Recognition */}
      <div className="pt-12 border-t border-black/10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-[#50111B] uppercase block">
            CRITICAL ACCLAIM & RECOGNITION
          </span>
          <h2 className="font-cinzel text-3xl font-light text-stone-900 mt-1">
            As Featured In
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDITORIAL_PRESS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F4EFE6] rounded-sm border border-black/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-lg font-semibold text-[#50111B]">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                  {item.issue}
                </span>
              </div>
              <p className="font-serif italic text-sm text-stone-800 leading-relaxed">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center py-12 bg-[#50111B] text-[#FAF6F0] rounded-sm border border-[#3E0C14]">
        <h3 className="font-cinzel text-2xl md:text-3xl font-light mb-3">
          Every love story is sacred history.
        </h3>
        <p className="font-serif italic text-sm text-[#E8C38D] max-w-md mx-auto mb-6">
          Let us preserve your celebration with the quiet truth it deserves.
        </p>
        <button
          onClick={onNavigateToInquire}
          className="px-6 py-3 bg-[#FAF6F0] text-[#50111B] text-xs font-cinzel font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-white transition-colors cursor-pointer"
        >
          COMMISSION US FOR YOUR WEDDING
        </button>
      </div>
    </div>
  );
};

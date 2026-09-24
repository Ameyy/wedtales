import React, { useState } from 'react';
import { NAVARASA_DATA, RasaWork } from '../data/portfolioData';
import { Maximize2, Sparkles, Heart, Eye } from 'lucide-react';

interface NavarasaPageProps {
  onSelectRasa: (rasa: RasaWork) => void;
  onNavigateToInquire: () => void;
}

export const NavarasaPage: React.FC<NavarasaPageProps> = ({
  onSelectRasa,
  onNavigateToInquire,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="pt-28 pb-24 px-6 md:px-14 max-w-[1440px] mx-auto min-h-screen bg-[#FAF6F0] text-[#1A1615]">
      {/* Page Header */}
      <div className="mb-14 pb-8 border-b border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.25em] text-[#50111B] uppercase block mb-1">
              VEDIC AESTHETICS · NATYASHASTRA
            </span>
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#1A1615]">
              The Nine Emotions of an Indian Wedding
            </h1>
            <p className="font-serif text-stone-700 text-base md:text-lg mt-3 leading-relaxed">
              In ancient Indian drama and aesthetics, the human spirit is governed by the <span className="italic font-semibold text-[#50111B]">Navarasa</span>. An Indian wedding is perhaps the only occasion on Earth where all nine emotions collide in an unbroken three-day whirlwind.
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-xs text-stone-500 block">
              9 RASAS DOCUMENTED
            </span>
            <span className="font-cinzel text-sm text-[#50111B] tracking-widest uppercase font-semibold">
              UNSTAGED · PURE EMOTION
            </span>
          </div>
        </div>
      </div>

      {/* Grid of all 9 Sacred Emotions with High-Res Real Person Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NAVARASA_DATA.map((item, index) => {
          let toneBg = 'bg-[#F5EFE6] border-black/10';
          let badgeColor = 'text-[#50111B] bg-[#50111B]/10';

          if (item.cardTone === 'maroon') {
            toneBg = 'bg-[#50111B] text-[#FAF6F0] border-[#3E0C14]';
            badgeColor = 'text-[#E8C38D] bg-white/10';
          } else if (item.cardTone === 'noir') {
            toneBg = 'bg-[#181615] text-[#FAF6F0] border-black/40';
            badgeColor = 'text-white bg-white/10';
          } else if (item.cardTone === 'gold') {
            toneBg = 'bg-[#F9F3E5] border-[#D49B35]/30';
            badgeColor = 'text-[#B87E1B] bg-[#D49B35]/15';
          }

          const isDark = item.cardTone === 'maroon' || item.cardTone === 'noir';

          return (
            <div
              key={item.id}
              onClick={() => onSelectRasa(item)}
              className={`rounded-sm p-6 md:p-8 flex flex-col justify-between border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group ${toneBg}`}
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-sm text-[10px] font-mono tracking-widest uppercase font-semibold ${badgeColor}`}>
                    RASA {String(index + 1).padStart(2, '0')} · {item.sanskritName}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-stone-500'}`}>
                    {item.meaning}
                  </span>
                </div>

                <h2 className="font-cinzel text-2xl font-medium tracking-wide mt-2">
                  {item.rasa}
                </h2>
                <h3 className={`font-serif text-sm italic ${isDark ? 'text-[#E8C38D]' : 'text-[#50111B]'} mb-4`}>
                  {item.title}
                </h3>
              </div>

              {/* Real Person Photo */}
              <div className="relative overflow-hidden rounded-sm my-4 h-64 bg-black/10">
                <img
                  src={item.imageUrl}
                  alt={`${item.rasa} - ${item.title}`}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-xs text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Description & Quote */}
              <div className="space-y-3 pt-2">
                <p className={`font-serif italic text-xs md:text-sm leading-relaxed ${isDark ? 'text-white/90' : 'text-stone-800'}`}>
                  "{item.quote}"
                </p>
                <p className={`text-[11px] font-sans leading-relaxed ${isDark ? 'text-white/70' : 'text-stone-600'}`}>
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-current/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                <span className={isDark ? 'text-[#E8C38D]' : 'text-[#50111B]'}>
                  CLICK TO VIEW FULL RESOLUTION
                </span>
                <span>0{index + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Commission Callout */}
      <div className="mt-20 p-8 md:p-12 bg-[#50111B] text-[#FAF6F0] rounded-sm border border-[#3E0C14] text-center max-w-3xl mx-auto shadow-xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8C38D] block mb-2">
          LIMITED COMMISSIONS PER YEAR
        </span>
        <h2 className="font-cinzel text-2xl md:text-4xl font-light tracking-wide mb-4">
          Have Your Nine Emotions Documented
        </h2>
        <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed max-w-xl mx-auto mb-6">
          We take on only 12 destination weddings each year across India and worldwide to ensure uncompromising craft, intimacy, and narrative depth.
        </p>
        <button
          onClick={onNavigateToInquire}
          className="px-6 py-3 bg-[#FAF6F0] text-[#50111B] hover:bg-white text-xs font-cinzel font-semibold tracking-[0.2em] uppercase rounded-sm transition-colors cursor-pointer shadow-md"
        >
          INQUIRE FOR YOUR DATES
        </button>
      </div>
    </div>
  );
};

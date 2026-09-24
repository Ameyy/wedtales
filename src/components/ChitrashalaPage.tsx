import React, { useState, useMemo } from 'react';
import { CHITRASHALA_PHOTOS, WallPhoto } from '../data/photoWallData';
import { Maximize2, Sparkles, Filter, Grid, LayoutGrid, Columns } from 'lucide-react';

interface ChitrashalaPageProps {
  onSelectPhoto: (url: string, title: string, caption: string) => void;
  onOpenPhotoQueue?: (
    items: { url: string; title: string; subtitle?: string; caption?: string }[],
    index: number
  ) => void;
}

type CategoryFilter = 'all' | 'bride' | 'rituals' | 'baraat' | 'haldi' | 'mehndi' | 'palaces';
type LayoutMode = 'dense' | 'editorial' | 'monumental';

export const ChitrashalaPage: React.FC<ChitrashalaPageProps> = ({
  onSelectPhoto,
  onOpenPhotoQueue,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('dense');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filterTabs: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All Frames', count: CHITRASHALA_PHOTOS.length },
    {
      id: 'bride',
      label: 'Bridal Regalia',
      count: CHITRASHALA_PHOTOS.filter((p) => p.category === 'bride').length,
    },
    {
      id: 'rituals',
      label: 'Sacred Rituals',
      count: CHITRASHALA_PHOTOS.filter((p) => p.category === 'rituals').length,
    },
    {
      id: 'baraat',
      label: 'Royal Baraat',
      count: CHITRASHALA_PHOTOS.filter((p) => p.category === 'baraat').length,
    },
    {
      id: 'haldi',
      label: 'Haldi & Joy',
      count: CHITRASHALA_PHOTOS.filter((p) => p.category === 'haldi').length,
    },
    {
      id: 'mehndi',
      label: 'Bridal Mehndi',
      count: CHITRASHALA_PHOTOS.filter((p) => p.category === 'mehndi').length,
    },
    {
      id: 'palaces',
      label: 'Palaces & Havelis',
      count: CHITRASHALA_PHOTOS.filter((p) => p.category === 'palaces').length,
    },
  ];

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return CHITRASHALA_PHOTOS;
    return CHITRASHALA_PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  const handleImageError = (photoId: string) => {
    setImageErrors((prev) => ({ ...prev, [photoId]: true }));
  };

  const getGridClasses = () => {
    switch (layoutMode) {
      case 'dense':
        return 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4';
      case 'editorial':
        return 'columns-1 sm:columns-2 lg:columns-3 gap-6';
      case 'monumental':
        return 'columns-1 md:columns-2 gap-8 max-w-6xl mx-auto';
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto transition-all">
      {/* Page Thematic Header */}
      <header className="mb-8 md:mb-12 border-b border-black/[0.08] pb-6 md:pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-[#50111B] text-xs font-mono tracking-[0.25em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E8C38D]" />
              <span>THE LIVING PHOTO WALL · चित्रशाला</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#50111B] tracking-tight font-medium">
              CHITRASHALA
            </h1>
            <p className="font-serif text-stone-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              In ancestral Rajput palaces, the <span className="italic text-[#50111B]">Chitrashala</span> was the royal salon where sacred rituals, weddings, and courtly ceremonies were preserved wall-to-wall. Here is our continuous 35mm and medium-format photo archive of real Indian celebrations.
            </p>
          </div>

          {/* Wall Metrics & Layout Controls */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-cinzel">
            <div className="px-3 py-1.5 bg-[#EFE9DD] text-stone-700 rounded-sm tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#50111B] animate-pulse" />
              <span>{filteredPhotos.length} FRAMES ON WALL</span>
            </div>

            {/* Layout density switcher */}
            <div className="hidden sm:flex items-center p-1 bg-[#EFE9DD] rounded-sm border border-black/[0.05]">
              <button
                onClick={() => setLayoutMode('dense')}
                className={`p-1.5 rounded-sm transition-all cursor-pointer ${
                  layoutMode === 'dense'
                    ? 'bg-[#50111B] text-[#FAF6F0] shadow-sm'
                    : 'text-stone-600 hover:text-[#50111B]'
                }`}
                title="Dense Salon Wall (4 Columns)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLayoutMode('editorial')}
                className={`p-1.5 rounded-sm transition-all cursor-pointer ${
                  layoutMode === 'editorial'
                    ? 'bg-[#50111B] text-[#FAF6F0] shadow-sm'
                    : 'text-stone-600 hover:text-[#50111B]'
                }`}
                title="Editorial Wall (3 Columns)"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLayoutMode('monumental')}
                className={`p-1.5 rounded-sm transition-all cursor-pointer ${
                  layoutMode === 'monumental'
                    ? 'bg-[#50111B] text-[#FAF6F0] shadow-sm'
                    : 'text-stone-600 hover:text-[#50111B]'
                }`}
                title="Monumental Wall (2 Columns)"
              >
                <Columns className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 scrollbar-none">
          <div className="flex items-center gap-1.5 text-stone-400 text-xs font-mono mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RASA / MOTIF:</span>
          </div>
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-cinzel tracking-wider rounded-sm whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#50111B] text-[#FAF6F0] shadow-sm font-semibold'
                    : 'bg-[#F2ECE1] text-stone-600 hover:bg-[#E8DFC8] hover:text-[#50111B]'
                }`}
              >
                {tab.label}
                <span className={`ml-1.5 text-[10px] font-mono ${isActive ? 'text-[#E8C38D]' : 'text-stone-400'}`}>
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>
      </header>

      {/* THE PURE PHOTO WALL (Continuous Archival Salon) */}
      <section className={`${getGridClasses()} transition-all duration-300`}>
        {filteredPhotos.map((photo, index) => {
          const hasError = imageErrors[photo.id];
          const displayUrl = hasError && photo.fallbackUrl ? photo.fallbackUrl : photo.url;

          return (
            <article
              key={photo.id}
              onClick={() => {
                if (onOpenPhotoQueue) {
                  const queue = filteredPhotos.map((p) => {
                    const pErr = imageErrors[p.id];
                    const pUrl = pErr && p.fallbackUrl ? p.fallbackUrl : p.url;
                    return {
                      url: pUrl,
                      title: p.title,
                      subtitle: `${p.sanskrit} (${p.rasa}) · ${p.location}`,
                      caption: `${p.film} — ${p.caption}`,
                    };
                  });
                  onOpenPhotoQueue(queue, index);
                } else {
                  onSelectPhoto(displayUrl, photo.title, `${photo.location} · ${photo.film} — ${photo.caption}`);
                }
              }}
              className="break-inside-avoid mb-4 sm:mb-6 group cursor-pointer relative bg-white p-2 sm:p-2.5 rounded-[2px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(80,17,27,0.18)] transition-all duration-500 border border-[#EBE4D8] hover:-translate-y-1"
            >
              {/* Photo Frame Container */}
              <div className="relative overflow-hidden bg-stone-100 rounded-[1px]">
                <img
                  src={displayUrl}
                  alt={photo.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(photo.id)}
                  className="w-full h-auto object-cover filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle Grain & Tone Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  {/* Top Hover Tag: Sanskrit Emotion & Rasa */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-[1px] text-[10px] font-mono tracking-widest text-[#E8C38D] uppercase">
                      <span>{photo.sanskrit}</span>
                      <span>·</span>
                      <span>{photo.rasa}</span>
                    </span>

                    <span className="p-1.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Hover Caption: Title, Location & Film */}
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="font-cinzel text-sm sm:text-base font-medium text-[#FAF6F0] leading-snug drop-shadow-md">
                      {photo.title}
                    </h2>
                    <p className="text-[11px] text-[#E8C38D] font-mono tracking-wider mt-1">
                      {photo.location}
                    </p>
                    <p className="text-[10px] text-white/70 font-mono mt-0.5">
                      {photo.film}
                    </p>
                  </div>
                </div>
              </div>

              {/* Museum Mount Frame Caption (Visible in normal view for fine-art exhibition authenticity) */}
              <div className="pt-2 px-1 flex items-center justify-between text-[10px] font-mono text-stone-500">
                <span className="truncate max-w-[65%] tracking-wider uppercase text-stone-700 font-sans font-medium">
                  {photo.title}
                </span>
                <span className="text-stone-400 tracking-widest">
                  {photo.location.split(',')[0]}
                </span>
              </div>
            </article>
          );
        })}
      </section>

      {/* Subtle Bottom Aesthetic Signature */}
      <footer className="mt-16 pt-8 border-t border-black/[0.08] text-center">
        <p className="font-cinzel text-xs tracking-[0.25em] text-[#50111B]/80 uppercase">
          CHITRASHALA · चित्रशाला · THE ARCHIVE IS NEVER COMPLETE
        </p>
        <p className="font-serif italic text-stone-500 text-xs mt-1">
          Photographed on medium-format & 35mm film across the palaces and sacred grounds of India.
        </p>
      </footer>
    </div>
  );
};

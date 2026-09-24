import React, { useState } from 'react';
import { WEDDING_STORIES, WeddingStory } from '../data/portfolioData';
import { MapPin, Calendar, ArrowRight, Maximize2 } from 'lucide-react';

interface StoriesPageProps {
  onSelectPhoto: (url: string, title: string, caption: string) => void;
  onNavigateToInquire: () => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({
  onSelectPhoto,
  onNavigateToInquire,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedStoryId, setExpandedStoryId] = useState<string>(WEDDING_STORIES[0].id);

  const filteredStories = activeFilter === 'all'
    ? WEDDING_STORIES
    : WEDDING_STORIES.filter((s) => s.tag.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="pt-28 pb-24 px-6 md:px-14 max-w-[1440px] mx-auto min-h-screen bg-[#FAF6F0] text-[#1A1615]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/10">
        <div>
          <span className="font-mono text-xs tracking-[0.25em] text-[#50111B] uppercase block mb-1">
            PORTFOLIO · SACRED DESTINATIONS
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#1A1615]">
            Stories & Palaces
          </h1>
          <p className="font-serif text-stone-700 text-sm md:text-base mt-2 max-w-xl">
            From 400-year-old Rajasthani royal ramparts and golden Jodhpur sandstone to sunlit Goan shorelines. Real Indian weddings documented in unhurried medium-format and 35mm film.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EFE9DD] rounded-sm">
          {[
            { id: 'all', label: 'All Celebrations' },
            { id: 'lake pichola', label: 'Udaipur Palaces' },
            { id: 'royal heritage', label: 'Jaipur Havelis' },
            { id: 'coastal', label: 'Goa Coastline' },
            { id: 'citadel', label: 'Jodhpur Forts' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 text-xs font-cinzel tracking-wider uppercase rounded-sm transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#50111B] text-[#FAF6F0] shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-black hover:bg-black/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Stories List */}
      <div className="space-y-16">
        {filteredStories.map((story) => {
          const isExpanded = expandedStoryId === story.id;

          return (
            <div
              key={story.id}
              className="bg-white rounded-sm border border-black/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Cover Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Photo Column */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] bg-black/10 group overflow-hidden">
                  <img
                    src={story.coverImage}
                    alt={story.couple}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#50111B] text-[#FAF6F0] font-cinzel text-[10px] uppercase tracking-widest rounded-sm shadow-md">
                      {story.tag}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectPhoto(story.coverImage, story.couple, story.venue)}
                    className="absolute bottom-4 right-4 p-2 bg-black/60 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-[#FAF6F0]">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-stone-500 uppercase tracking-widest mb-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#50111B]" />
                        <span>{story.location}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#50111B]" />
                        <span>{story.year}</span>
                      </div>
                    </div>

                    <h2 className="font-cinzel text-3xl md:text-4xl font-light text-[#1A1615] mb-2">
                      {story.couple}
                    </h2>
                    <h3 className="font-serif italic text-sm text-[#50111B] mb-5">
                      {story.venue}
                    </h3>

                    <p className="font-sans text-xs md:text-sm text-stone-700 leading-relaxed">
                      {story.narrative}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                    <button
                      onClick={() => setExpandedStoryId(isExpanded ? '' : story.id)}
                      className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-[0.18em] text-[#50111B] uppercase hover:text-[#3E0C14] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'COLLAPSE PHOTOGRAPHS' : 'VIEW GALLERY ESSAY'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                    <span className="font-mono text-[11px] text-stone-400">
                      {story.galleryImages.length} PLATES
                    </span>
                  </div>
                </div>
              </div>

              {/* Expanded Gallery Plates */}
              {isExpanded && (
                <div className="p-6 md:p-10 bg-[#F4EFE6] border-t border-black/10 animate-in fade-in duration-300">
                  <div className="text-center max-w-xl mx-auto mb-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#50111B] block">
                      CURATED PHOTO ESSAY
                    </span>
                    <h3 className="font-cinzel text-xl text-stone-900 mt-1">
                      Moments from {story.couple}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {story.galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => onSelectPhoto(img.url, story.couple, img.caption)}
                        className="group bg-white rounded-sm overflow-hidden border border-black/10 shadow-sm cursor-pointer"
                      >
                        <div className="relative h-64 overflow-hidden bg-black/10">
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                          />
                          <div className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div className="p-3 text-[11px] font-sans text-stone-700 line-clamp-2">
                          {img.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Booking Notice */}
      <div className="mt-16 text-center py-10 border-t border-black/10">
        <p className="font-cinzel text-xs md:text-sm tracking-[0.2em] uppercase text-stone-600 mb-4">
          PLANNING A CELEBRATION IN RAJASTHAN, GOA, KERALA OR INTERNATIONALLY?
        </p>
        <button
          onClick={onNavigateToInquire}
          className="px-6 py-2.5 bg-[#50111B] text-[#FAF6F0] text-xs font-cinzel font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#3E0C14] transition-colors cursor-pointer"
        >
          COMMISSION A CELEBRATION
        </button>
      </div>
    </div>
  );
};

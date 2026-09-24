import React, { useState } from 'react';
import { NAVARASA_DATA, RasaWork, WEDDING_STORIES } from './data/portfolioData';
import { Navigation, PageId } from './components/Navigation';
import { HeroNavarasa } from './components/HeroNavarasa';
import { HomePalacesTeaser } from './components/HomePalacesTeaser';
import { NavarasaPage } from './components/NavarasaPage';
import { StoriesPage } from './components/StoriesPage';
import { PhilosophyPage } from './components/PhilosophyPage';
import { ChitrashalaPage } from './components/ChitrashalaPage';
import { InquirePage } from './components/InquirePage';
import { FullscreenLightbox, LightboxItem } from './components/FullscreenLightbox';
import { Footer } from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('overview');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<LightboxItem | null>(null);
  const [lightboxQueue, setLightboxQueue] = useState<LightboxItem[]>([]);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState<number | null>(null);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRasa = (rasa: RasaWork) => {
    const item: LightboxItem = {
      url: rasa.imageUrl,
      title: `${rasa.rasa} (${rasa.meaning})`,
      subtitle: rasa.title,
      caption: `"${rasa.quote}" — ${rasa.description}`,
    };
    setSelectedLightboxItem(item);
    setLightboxQueue([item]);
    setCurrentLightboxIndex(0);
  };

  const handleSelectPhoto = (url: string, title: string, caption: string) => {
    const item: LightboxItem = {
      url,
      title,
      caption,
    };
    setSelectedLightboxItem(item);
    setLightboxQueue([item]);
    setCurrentLightboxIndex(0);
  };

  const handleOpenPhotoQueue = (items: LightboxItem[], startIndex: number) => {
    setLightboxQueue(items);
    setCurrentLightboxIndex(startIndex);
    setSelectedLightboxItem(items[startIndex] || null);
  };

  const handlePrevLightbox = () => {
    if (lightboxQueue.length <= 1 || currentLightboxIndex === null) return;
    const newIndex = (currentLightboxIndex - 1 + lightboxQueue.length) % lightboxQueue.length;
    setCurrentLightboxIndex(newIndex);
    setSelectedLightboxItem(lightboxQueue[newIndex]);
  };

  const handleNextLightbox = () => {
    if (lightboxQueue.length <= 1 || currentLightboxIndex === null) return;
    const newIndex = (currentLightboxIndex + 1) % lightboxQueue.length;
    setCurrentLightboxIndex(newIndex);
    setSelectedLightboxItem(lightboxQueue[newIndex]);
  };

  const handleCloseLightbox = () => {
    setSelectedLightboxItem(null);
    setCurrentLightboxIndex(null);
    setLightboxQueue([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A1615] antialiased selection:bg-[#50111B] selection:text-[#FAF6F0] flex flex-col justify-between">
      {/* Top Multipage Luxury Navigation */}
      <Navigation
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Multipage Viewport */}
      <main className="flex-grow">
        {activePage === 'overview' && (
          <>
            {/* Monumental Hero & Navarasa Nine Emotions (Directly inspired by Reference Design) */}
            <HeroNavarasa
              onSelectRasa={handleSelectRasa}
              onNavigateToNavarasa={() => handleNavigate('navarasa')}
              onNavigateToStories={() => handleNavigate('stories')}
            />

            {/* Destination Palaces Highlights & Editorial Archive */}
            <HomePalacesTeaser
              onSelectPhoto={handleSelectPhoto}
              onNavigateToStories={() => handleNavigate('stories')}
              onNavigateToInquire={() => handleNavigate('inquire')}
            />
          </>
        )}

        {activePage === 'navarasa' && (
          <NavarasaPage
            onSelectRasa={handleSelectRasa}
            onNavigateToInquire={() => handleNavigate('inquire')}
          />
        )}

        {activePage === 'stories' && (
          <StoriesPage
            onSelectPhoto={handleSelectPhoto}
            onNavigateToInquire={() => handleNavigate('inquire')}
          />
        )}

        {activePage === 'chitrashala' && (
          <ChitrashalaPage
            onSelectPhoto={handleSelectPhoto}
            onOpenPhotoQueue={handleOpenPhotoQueue}
          />
        )}

        {activePage === 'philosophy' && (
          <PhilosophyPage
            onNavigateToInquire={() => handleNavigate('inquire')}
          />
        )}

        {activePage === 'inquire' && (
          <InquirePage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Fullscreen High-Resolution Lightbox */}
      <FullscreenLightbox
        item={selectedLightboxItem}
        onClose={handleCloseLightbox}
        onPrev={lightboxQueue.length > 1 ? handlePrevLightbox : undefined}
        onNext={lightboxQueue.length > 1 ? handleNextLightbox : undefined}
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Controls from './components/Controls';
import { CoverSlide, VisionSlide } from './components/slides/IntroSlides';
import { AuditIntroSlide, AuditAssetsSlide, AuditIssuesSlide } from './components/slides/AuditSlides';
import { StrategyIntroSlide, StrategyGuideSlide, StrategyGiftSlide, StrategyStorySlide } from './components/slides/StrategySlides';
import { CoursesIntroSlide, CourseDigitalSlide, CourseLiveSlide, CourseCorpSlide } from './components/slides/CourseSlides';
import { OfferIntroSlide, OfferOptionASlide, OfferOptionBSlide, OfferComparisonSlide, OfferEmailSlide } from './components/slides/OfferSlides';
import { ClosingSlide } from './components/slides/ClosingSlide';
import { Printer } from 'lucide-react';

// Total slides count updated: 
// 0,1 (Intro) + 2,3,4 (Audit) + 5,6 (Strat) + 7,8,9,10 (Courses) + 11,12 (Strat2) 
// + 13 (OfferIntro) + 14 (OptA) + 15 (OptB-Merged) 
// + 16 (Email Marketing) + 17 (Comparison) + 18 (Closing)
// Removed MockupLinksSlide
const TOTAL_SLIDES = 19;

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Helper to render slide with transition
  // Added print classes to override absolute positioning and visibility
  const renderSlide = (index: number, Component: React.FC<any>) => (
    <div className={`
        absolute inset-0 transition-opacity duration-500 ease-in-out 
        ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'} 
        overflow-y-auto overflow-x-hidden pb-36 md:pb-0
        print:relative print:opacity-100 print:z-10 print:visible print:h-auto print:pb-0 print:overflow-visible print:block print:break-after-page print:min-h-screen
    `}>
      <Component isActive={currentSlide === index} />
    </div>
  );

  return (
    <div className="w-full h-screen relative bg-coffee-900 text-cream-50 overflow-hidden font-sans selection:bg-amber-500 selection:text-white print:h-auto print:overflow-visible">

      {/* Global Print Button - Only visible on first slide */}
      {currentSlide === 0 && (
        <button
          onClick={() => window.print()}
          className="absolute top-6 right-6 z-[60] flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-cream-50 rounded-full backdrop-blur-sm transition-all text-sm font-sans group print:hidden cursor-pointer shadow-lg border border-white/10"
          title="Stampa Presentazione"
        >
          <Printer size={18} className="group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline">Salva PDF</span>
        </button>
      )}

      {/* Slide Container */}
      <main className="w-full h-full relative print:h-auto print:overflow-visible">
        {/* 1. Intro */}
        {renderSlide(0, CoverSlide)}
        {renderSlide(1, VisionSlide)}

        {/* 2. Audit (The Problem & Assets) */}
        {renderSlide(2, AuditIntroSlide)}
        {renderSlide(3, AuditAssetsSlide)}
        {renderSlide(4, AuditIssuesSlide)}

        {/* 3. Strategy (The Solution) */}
        {renderSlide(5, StrategyIntroSlide)}
        {renderSlide(6, StrategyGuideSlide)}

        {/* 4. Experience/Courses */}
        {renderSlide(7, CoursesIntroSlide)}
        {renderSlide(8, CourseDigitalSlide)}
        {renderSlide(9, CourseLiveSlide)}
        {renderSlide(10, CourseCorpSlide)}

        {/* 5. More Strategy */}
        {renderSlide(11, StrategyGiftSlide)}
        {renderSlide(12, StrategyStorySlide)}

        {/* 6. Commercial Offer */}
        {renderSlide(13, OfferIntroSlide)}
        {renderSlide(14, OfferOptionASlide)}
        {renderSlide(15, OfferOptionBSlide)} {/* Now Merged with Breakdown */}
        {renderSlide(16, OfferEmailSlide)} {/* NEW: Email Marketing */}
        {renderSlide(17, OfferComparisonSlide)} {/* New Comparison Table */}

        {/* 7. Closing */}
        {renderSlide(18, ClosingSlide)}
      </main>

      {/* Navigation Controls - Hidden on print */}
      <div className="print:hidden">
        <Controls
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onNext={nextSlide}
          onPrev={prevSlide}
        />
      </div>
    </div>
  );
};

export default App;
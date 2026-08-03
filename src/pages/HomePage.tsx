import React from 'react';
import { motion } from 'motion/react';
import { HeroSlide, ThemeMode } from '../types';
import { HeroSlider } from '../components/HeroSlider';
import { PlatinumWorldSection } from '../components/PlatinumWorldSection';
import { HomeExcellenceCombinedSection } from '../components/HomeExcellenceSection';
import { OngoingProjectsCarousel } from '../components/OngoingProjectsCarousel';
import { TestimonialsSection } from '../components/TestimonialsSection';

interface HomePageProps {
  theme: ThemeMode;
  slides: HeroSlide[];
  onOpenBrochure: (slide: HeroSlide) => void;
  onOpenScheduleVisit: (slide: HeroSlide) => void;
  onSelectPropertyId: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  theme,
  slides,
  onOpenBrochure,
  onOpenScheduleVisit,
  onSelectPropertyId,
}) => {
  return (
    <motion.div className="flex-1 flex flex-col">
      <div id="section-residences">
        <HeroSlider
          slides={slides}
          theme={theme}
          onOpenBrochure={onOpenBrochure}
          onOpenScheduleVisit={onOpenScheduleVisit}
          onSelectPropertyId={onSelectPropertyId}
        />
      </div>

      <div id="section-legacy-world" className="m-0 p-0">
        <PlatinumWorldSection theme={theme} />
      </div>

      <HomeExcellenceCombinedSection theme={theme} />
      <OngoingProjectsCarousel theme={theme} />
      <TestimonialsSection theme={theme} />
    </motion.div>
  );
};

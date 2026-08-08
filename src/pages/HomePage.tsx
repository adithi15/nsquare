import React from 'react';
import { motion } from 'motion/react';
import { HeroSlide, ThemeMode } from '../types';

import { HeroSlider } from '../components/home/HeroSlider';
import { VisionSection } from '../components/home/VisionSection';
import { PlatinumWorldSection } from '../components/home/PlatinumWorldSection';
import { OngoingProjectsCarousel } from '../components/home/OngoingProjectsCarousel';
import { FootprintMapSection } from '../components/home/FootprintMapSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

interface HomePageProps {
  theme: ThemeMode;
  slides: HeroSlide[];
  onOpenBrochure: (slide: HeroSlide) => void;
  onOpenScheduleVisit: (slide: HeroSlide) => void;
  onSelectPropertyId: (id: string) => void;
  onViewAllProjects?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  theme,
  slides,
  onOpenBrochure,
  onOpenScheduleVisit,
  onSelectPropertyId,
  onViewAllProjects,
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

      <VisionSection theme={theme} />

      <div id="section-legacy-world" className="m-0 p-0">
        <PlatinumWorldSection theme={theme} />
      </div>

      <OngoingProjectsCarousel theme={theme} onViewAll={onViewAllProjects} />

      <FootprintMapSection theme={theme} />

      <TestimonialsSection theme={theme} />
    </motion.div>
  );
};

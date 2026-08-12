import React from 'react';
import { motion } from 'motion/react';
import { HeroSlide, ThemeMode } from '../types';

import { HeroSlider } from '../components/home/HeroSlider';
import { RedevelopmentHomeSection } from '../components/home/RedevelopmentHomeSection';
import { VisionSection } from '../components/home/VisionSection';
import { PartnershipSection } from '../components/home/PartnershipSection';
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
  onNavigateToRedevelopment: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  theme,
  slides,
  onOpenBrochure,
  onOpenScheduleVisit,
  onSelectPropertyId,
  onViewAllProjects,
  onNavigateToRedevelopment,
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

      <RedevelopmentHomeSection
        theme={theme}
        onNavigateToRedevelopment={onNavigateToRedevelopment}
      />

      <VisionSection theme={theme} />

      <div id="section-legacy-world" className="m-0 p-0">
        <PartnershipSection />
      </div>

      <OngoingProjectsCarousel theme={theme} onViewAll={onViewAllProjects} />

      <FootprintMapSection theme={theme} />

      <TestimonialsSection theme={theme} />
    </motion.div>
  );
};

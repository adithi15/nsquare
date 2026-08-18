import React from 'react';
import { LegacySection } from '../components/about/LegacySection';
import { LegacySection2 } from '../components/about/LegacySection2';
import { FoundationsSection } from '../components/about/FoundationsSection';
import { CoreValuesSection } from '../components/about/CoreValuesSection';
import { ThemeMode } from '../types';

interface LegacyPageProps {
  theme: ThemeMode;
  onOpenVisitModal: () => void;
}

export const LegacyPage: React.FC<LegacyPageProps> = ({ theme, onOpenVisitModal }) => {
  return (
    <main className="flex-1 bg-[#f4efe6]">
      <LegacySection theme={theme} onOpenVisitModal={onOpenVisitModal} />
      <LegacySection2 theme={theme} />
      <FoundationsSection theme={theme} />
      <CoreValuesSection theme={theme} />
    </main>
  );
};

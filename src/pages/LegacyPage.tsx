import React from 'react';
import { LegacySection } from '../components/LegacySection';
import { ThemeMode } from '../types';

interface LegacyPageProps {
  theme: ThemeMode;
  onOpenVisitModal: () => void;
}

export const LegacyPage: React.FC<LegacyPageProps> = ({ theme, onOpenVisitModal }) => {
  return (
    <main className="flex-1 bg-[#f4efe6]">
      <LegacySection theme={theme} onOpenVisitModal={onOpenVisitModal} />
    </main>
  );
};

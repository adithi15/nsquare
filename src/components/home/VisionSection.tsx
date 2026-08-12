import React from 'react';
import { ThemeMode } from '../../types';

interface VisionSectionProps {
  theme: ThemeMode;
}

// Vision — brochure page 6: full image shown edge-to-edge, no crop, no text, no animation
export const VisionSection: React.FC<VisionSectionProps> = ({ theme }) => {
  return (
    <section className="relative w-full h-screen bg-[#0C0C0C] overflow-hidden">
      <img
        src="/assets/branding/vision.jpg"
        alt="N-Square vision"
        className="block w-full h-full object-cover opacity-100"
        loading="lazy"
      />
    </section>
  );
};

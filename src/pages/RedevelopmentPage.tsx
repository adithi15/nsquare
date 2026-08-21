import React from 'react';
import { ThemeMode } from '../types';
import { RedevelopmentHero } from '../components/redevelopment/RedevelopmentHero';
import { WhatIsRedevelopment } from '../components/redevelopment/WhatIsRedevelopment';
import { RedevelopmentBenefits } from '../components/redevelopment/RedevelopmentBenefits';
import { WhyChooseNSquare } from '../components/redevelopment/WhyChooseNSquare';
import { RedevelopmentProcess } from '../components/redevelopment/RedevelopmentProcess';
import { RedevelopmentInquiryForm } from '../components/redevelopment/RedevelopmentInquiryForm';
import { RedevelopmentFAQ } from '../components/redevelopment/RedevelopmentFAQ';

interface RedevelopmentPageProps {
  theme?: ThemeMode;
}

export const RedevelopmentPage: React.FC<RedevelopmentPageProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`w-full flex flex-col pb-8 transition-colors duration-500 ${
      isDark ? 'bg-[#0A0A0A] text-neutral-200' : 'bg-[#f8f6f0] text-neutral-800'
    } font-sans overflow-hidden`}>
      <RedevelopmentHero />
      <WhatIsRedevelopment isDark={isDark} />
      <RedevelopmentBenefits isDark={isDark} />
      <WhyChooseNSquare isDark={isDark} />
      <RedevelopmentProcess />
      <RedevelopmentInquiryForm isDark={isDark} />
      <RedevelopmentFAQ isDark={isDark} />
    </div>
  );
};

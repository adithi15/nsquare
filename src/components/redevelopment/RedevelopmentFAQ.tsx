import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../../data/redevelopment';

interface RedevelopmentFAQProps {
  isDark: boolean;
}

export const RedevelopmentFAQ: React.FC<RedevelopmentFAQProps> = ({ isDark }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-16 max-w-4xl mx-auto w-full mt-10 mb-14">
      <div className="w-full space-y-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide">
            Frequently Asked Question
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={`faq-${index}`}
                className="border border-[#C5A059]/20 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className={`w-full flex items-center text-left px-5 py-4 transition-all duration-300 font-sans font-medium text-[13px] sm:text-[14px] md:text-[15px] tracking-wide cursor-pointer select-none focus:outline-none ${
                    isOpen
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-[#F5EFE6] hover:bg-[#ebdcc5] text-neutral-800 dark:bg-neutral-900/60 dark:hover:bg-neutral-800/80 dark:text-neutral-200'
                  }`}
                >
                  {/* Plus / Minus Indicator on Left */}
                  <span
                    className={`w-5 h-5 flex items-center justify-center font-bold text-base mr-4 shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'text-white rotate-180'
                        : 'text-neutral-600 dark:text-neutral-300'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                  <span className="flex-1">{item.question}</span>
                  {/* Down Arrow on Right */}
                  <span className={`transition-transform duration-300 ml-4 shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-[#FDFBF7] dark:bg-neutral-900/30 border-x border-b border-[#C5A059]/30 px-6 py-4.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-light font-sans"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

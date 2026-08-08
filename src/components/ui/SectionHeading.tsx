import React from 'react';
import { motion } from 'motion/react';
import { ThemeMode } from '../../types';

// Calm, luxurious easing used across the entire site
export const EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT = { once: true, margin: '-100px' } as const;

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  theme: ThemeMode;
  align?: 'left' | 'center';
  dark?: boolean; // force light text on dark sections
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  theme,
  align = 'center',
  dark = false,
}) => {
  const isDark = dark || theme === 'dark';
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.0, ease: EASE }}
      className={`flex flex-col ${alignCls} gap-4 mb-12 md:mb-16 px-2`}
    >
      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-semibold">
        {eyebrow}
      </span>
      <div className="inline-flex flex-col gap-4">
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide ${
            isDark ? 'text-white' : 'text-[#121212]'
          }`}
        >
          {title}
        </h2>
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
      </div>
      {description && (
        <p
          className={`max-w-2xl text-sm md:text-base leading-relaxed ${
            isDark ? 'text-white/60' : 'text-[#121212]/60'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

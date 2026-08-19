import React from 'react';
import { motion } from 'framer-motion';

export const ContactHero: React.FC = () => (
  <section className="relative w-full h-[75vh] min-h-[75vh] flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ scale: 1.05, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 z-0"
    >
      <img
        src="/assets/footer/contact-hero.jpg"
        alt="N-Square contact"
        decoding="async"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
    </motion.div>

    {/* Elegant Typography Image Overlay */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative z-10 w-full max-w-[90%] md:max-w-xl lg:max-w-2xl px-4 translate-y-8 md:translate-y-12 select-none pointer-events-none"
    >
      <img
        src="/assets/contact-text.png"
        alt="Begin your Journey With Us"
        className="w-full h-auto object-contain mx-auto"
      />
    </motion.div>
  </section>
);

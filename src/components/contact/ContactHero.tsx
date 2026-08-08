import React from 'react';
import { motion } from 'framer-motion';

// Contact hero — pure image band, no text
export const ContactHero: React.FC = () => (
  <section className="relative w-full h-[360px] md:h-[420px] overflow-hidden pt-24 md:pt-28">
    <motion.div
      initial={{ scale: 1.05, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 z-0"
    >
      <img
        src="/assets/footer/contact-card.jpg"
        alt="N-Square contact"
        decoding="async"
        className="w-full h-full object-cover object-center"
      />
    </motion.div>
  </section>
);

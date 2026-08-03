import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const ContactHero: React.FC = () => (
  <section className="relative w-full h-[360px] md:h-[420px] overflow-hidden flex items-center justify-center pt-24 md:pt-28">
    <motion.div
      initial={{ scale: 1.05, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 z-0"
    >
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        alt="Feel Free To Contact Us"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
    </motion.div>

    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-20 text-center px-6 max-w-3xl space-y-4"
    >
      <div className="inline-flex items-center space-x-2 bg-[#c2a26c] text-white text-[10px] uppercase tracking-[0.3em] font-medium px-4 py-1.5 rounded-full shadow-lg">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Get In Touch With Us</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
        Feel Free To Contact Us
      </h1>
      <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-xl mx-auto">
        We're all ears to hear your feedback. In case you want to reach out to us to share a valuable suggestion or register a valid complaint, kindly use the form below.
      </p>
    </motion.div>
  </section>
);

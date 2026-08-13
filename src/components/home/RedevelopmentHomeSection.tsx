import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Sparkles } from 'lucide-react';
import { ThemeMode } from '../../types';

interface RedevelopmentHomeSectionProps {
  theme: ThemeMode;
  onNavigateToRedevelopment: () => void;
}

export const RedevelopmentHomeSection: React.FC<RedevelopmentHomeSectionProps> = ({
  theme,
  onNavigateToRedevelopment,
}) => {
  const isDark = theme === 'dark';

  // Animation configurations
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section 
      className={`w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 transition-colors duration-500 relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-b from-[#0A0A0A] via-[#14120E] to-[#0A0A0A] border-t border-b border-white/5' 
          : 'bg-gradient-to-b from-[#FAF9F5] via-[#F4EFE6] to-[#FAF9F5] border-t border-b border-neutral-200/60'
      }`}
    >
      {/* Decorative Golden Ambient Glow for Dark Mode */}
      {isDark && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />
      )}

      {/* Architectural Background Watermark */}
      <div className={`absolute right-4 bottom-8 text-[12vw] font-serif font-bold select-none pointer-events-none uppercase tracking-[0.18em] z-0 leading-none transition-opacity duration-300 ${
        isDark ? 'text-white/[0.012]' : 'text-neutral-900/[0.015]'
      }`}>
        Rebuild
      </div>

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* Top Part: Overview & Mission Bullet Points */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-neutral-300/30 dark:border-white/5 pb-10"
        >
          {/* Header titles */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C5A059] font-bold block">
              Redevelopment
            </span>
            <h2 className={`text-xl md:text-3xl font-['Corporate_A',_'Corporate_S',_serif] tracking-wide leading-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              THOUGHTFUL REDEVELOPMENT,<br />LASTING VALUE.
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C5A059] mt-4" />
          </div>

          {/* Bullet points copy */}
          <div className="lg:col-span-7 space-y-5 text-sm md:text-base font-light leading-relaxed font-['Outfit']">
            <div className="flex gap-4">
              <span className="mt-2.5 w-1.5 h-1.5 bg-[#C5A059] shrink-0" />
              <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                At <strong className="font-semibold text-[#C5A059]">N SQUARE</strong>, redevelopment is more than replacing the old with the new—it is about honouring the history of a community while elevating its future. By uniting the legacy and expertise of <strong className={isDark ? 'text-white font-medium' : 'text-neutral-900 font-medium'}>Neelkanth Group</strong> and <strong className={isDark ? 'text-white font-medium' : 'text-neutral-900 font-medium'}>Namastey Realty</strong>, we transform aging structures into modern, safe, and iconic addresses.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-2.5 w-1.5 h-1.5 bg-[#C5A059] shrink-0" />
              <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                We partner closely with societies, residents, and authorities at every stage, delivering a transparent, stress-free transition that enhances everyday living and secures long-term asset value.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Part: Large display quote + Details & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Quote, Subheading and Subtext */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Elegant Gradient Quote */}
            <motion.h3 
              variants={fadeInUpVariants}
              style={{ color: '#c5a059' }}
              className="font-['Cormorant_Garamond'] text-[#c5a059] text-3xl md:text-5xl italic font-light tracking-wide leading-tight"
            >
              "Where quality is a journey and not the destination"
            </motion.h3>

            <motion.div variants={fadeInUpVariants} className="space-y-4 pt-4 border-t border-neutral-300/20">
              <div className="space-y-2">
                <h4 className={`text-xl md:text-2xl font-serif tracking-wide ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  Redevelopment
                </h4>
                <div className="w-10 h-[1px] bg-[#C5A059]" />
              </div>

              <p className={`text-xs md:text-sm leading-relaxed font-light ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                Redevelopment at N-Square is a carefully planned process that transforms aging structures into modern, safe, and future-ready developments.
              </p>
              <p className={`text-xs md:text-sm leading-relaxed font-light ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                We work closely with societies, stakeholders, and authorities to deliver redevelopment solutions that enhance lifestyle value while maintaining transparency and trust throughout the journey.
              </p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div variants={fadeInUpVariants} className="pt-2">
              <button
                onClick={onNavigateToRedevelopment}
                className={`group py-3 px-6 text-[10px] md:text-xs uppercase tracking-widest font-semibold flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                  isDark 
                    ? 'bg-[#C5A059] text-black hover:bg-[#D4B575]' 
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                <span>Explore Redevelopment Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Model Photo Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Visual offset background frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C5A059]/40 z-0 pointer-events-none" />
            
            {/* Image container */}
            <div className="relative border border-neutral-300/40 dark:border-white/10 p-2 bg-white/5 backdrop-blur-sm z-10 overflow-hidden group">
              <div className="overflow-hidden relative aspect-[4/3] w-full">
                <img
                  src="/assets/img/redevelopment_model.jpg"
                  alt="Architectural Redevelopment Model Planning"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Corner Accent Detail */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#C5A059] z-20 pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

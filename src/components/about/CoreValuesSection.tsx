import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Award, 
  ShieldAlert, 
  HeartHandshake, 
  Building2, 
  Sprout 
} from 'lucide-react';
import { ThemeMode } from '../../types';

interface CoreValuesSectionProps {
  theme: ThemeMode;
}

const VALUES_DATA = {
  businessEthics: {
    title: 'BUSINESS ETHICS',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    icon: Handshake,
  },
  humility: {
    title: 'HUMILITY',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    icon: Sprout,
  },
  quality: {
    title: 'QUALITY',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    icon: Award,
  },
  prudence: {
    title: 'PRUDENCE',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=600&q=80',
    icon: ShieldAlert,
  },
  respect: {
    title: 'RESPECT',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    icon: HeartHandshake,
  },
  pride: {
    title: 'PRIDE',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    icon: Building2,
  },
};

export const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    }
  };

  const cardStyle = "relative w-full overflow-hidden group border border-white/5 shadow-md flex items-center justify-center cursor-pointer";
  const overlayStyle = "absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/65 z-10";
  const imgStyle = "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0";
  const contentStyle = "relative z-20 flex flex-col items-center justify-center text-center text-white p-4";

  return (
    <section className={`relative py-16 md:py-24 transition-colors duration-500 overflow-hidden ${
      isDark ? 'bg-[#0A0A0A] border-t border-white/5' : 'bg-[#FAFAFA] border-t border-neutral-200'
    }`}>
      {/* Architectural Background Watermark */}
      <div className={`absolute right-8 bottom-12 text-[12vw] font-serif font-bold select-none pointer-events-none uppercase tracking-[0.18em] z-0 leading-none ${
        isDark ? 'text-white/[0.015]' : 'text-neutral-900/[0.018]'
      }`}>
        Values
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Title */}
        <div className="text-left mb-8 md:mb-12">
          <h2 className={`text-xl md:text-2xl font-serif tracking-widest font-semibold uppercase ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            OUR CORE VALUES
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mt-3" />
        </div>

        {/* Outer Grid Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column: 2 Tall/Landscape Cards Stacked Vertically */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: Business Ethics */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${cardStyle} h-[220px] sm:h-[260px] lg:h-[285px]`}
            >
              <div className={overlayStyle} />
              <img 
                src={VALUES_DATA.businessEthics.image} 
                alt="Business Ethics" 
                className={imgStyle}
              />
              <div className={contentStyle}>
                <Handshake className="w-8 h-8 text-[#C5A059] group-hover:text-[#e5c98d] transition-colors mb-3.5" strokeWidth={1.5} />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium font-serif">
                  {VALUES_DATA.businessEthics.title}
                </span>
              </div>
            </motion.div>

            {/* Card 2: Humility */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${cardStyle} h-[220px] sm:h-[260px] lg:h-[285px]`}
            >
              <div className={overlayStyle} />
              <img 
                src={VALUES_DATA.humility.image} 
                alt="Humility" 
                className={imgStyle}
              />
              <div className={contentStyle}>
                <Sprout className="w-8 h-8 text-[#C5A059] group-hover:text-[#e5c98d] transition-colors mb-3.5" strokeWidth={1.5} />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium font-serif">
                  {VALUES_DATA.humility.title}
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Top, Middle grid, Bottom */}
          <div className="flex flex-col gap-6">
            
            {/* Top Card: Quality */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${cardStyle} h-[120px] sm:h-[150px] lg:h-[180px]`}
            >
              <div className={overlayStyle} />
              <img 
                src={VALUES_DATA.quality.image} 
                alt="Quality" 
                className={imgStyle}
              />
              <div className={contentStyle}>
                <Award className="w-8 h-8 text-[#C5A059] group-hover:text-[#e5c98d] transition-colors mb-3.5" strokeWidth={1.5} />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium font-serif">
                  {VALUES_DATA.quality.title}
                </span>
              </div>
            </motion.div>

            {/* Middle Row: Prudence and Respect side by side */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Card 4: Prudence */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`${cardStyle} h-[120px] sm:h-[150px] lg:h-[180px]`}
              >
                <div className={overlayStyle} />
                <img 
                  src={VALUES_DATA.prudence.image} 
                  alt="Prudence" 
                  className={imgStyle}
                />
                <div className={contentStyle}>
                  <ShieldAlert className="w-8 h-8 text-[#C5A059] group-hover:text-[#e5c98d] transition-colors mb-3.5" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium font-serif">
                    {VALUES_DATA.prudence.title}
                  </span>
                </div>
              </motion.div>

              {/* Card 5: Respect */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`${cardStyle} h-[120px] sm:h-[150px] lg:h-[180px]`}
              >
                <div className={overlayStyle} />
                <img 
                  src={VALUES_DATA.respect.image} 
                  alt="Respect" 
                  className={imgStyle}
                />
                <div className={contentStyle}>
                  <HeartHandshake className="w-8 h-8 text-[#C5A059] group-hover:text-[#e5c98d] transition-colors mb-3.5" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium font-serif">
                    {VALUES_DATA.respect.title}
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Bottom Card: Pride */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${cardStyle} h-[120px] sm:h-[150px] lg:h-[180px]`}
            >
              <div className={overlayStyle} />
              <img 
                src={VALUES_DATA.pride.image} 
                alt="Pride" 
                className={imgStyle}
              />
              <div className={contentStyle}>
                <Building2 className="w-8 h-8 text-[#C5A059] group-hover:text-[#e5c98d] transition-colors mb-3.5" strokeWidth={1.5} />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium font-serif">
                  {VALUES_DATA.pride.title}
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

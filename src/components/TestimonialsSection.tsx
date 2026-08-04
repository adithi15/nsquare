import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  theme: ThemeMode;
}

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Mr. & Mrs. Sharma',
    project: 'Platinum Emporius, Ulwe',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/KnQNEQcTwuU',
    quote: 'The construction quality and timely possession surpassed our expectations. Platinum Group made our home buying journey completely seamless.'
  },
  {
    id: '2',
    name: 'Dr. Ananya Deshmukh',
    project: 'Platinum Palmwoods, Seawoods',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/QDx46FwQkvQ',
    quote: 'Living at Seawoods with lush greenery and state-of-the-art amenities has transformed our family lifestyle.'
  },
  {
    id: '3',
    name: 'Mr. Rajesh Merchant',
    project: 'Platinum Elysium, Nerul',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/Xz-W2jZGAcg',
    quote: 'Platinum Group represents integrity and world-class luxury in Navi Mumbai real estate.'
  }
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ theme }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 2;
  const totalSlides = TESTIMONIALS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const displayedSlides = Array.from({ length: visibleCount }, (_, idx) => {
    const index = (currentIndex + idx) % totalSlides;
    return TESTIMONIALS[index];
  });

  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto w-full relative" style={{ background: 'url(/assets/img/testimonialbg.jpg) no-repeat #eff2f6', backgroundPosition: 'right' }}>
      <div className="absolute left-0 top-1/2 hidden lg:block -translate-y-1/2">
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-semibold text-[#a1896b]">
          TESTIMONIALS
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 relative">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#222] dark:text-white font-light leading-tight">
            We Care About Our Customer's Experience Too
          </h2>
          <p className="text-xs md:text-sm text-[#58595b] dark:text-white/70 font-light mt-3 max-w-2xl">
            Real stories from homeowners who found their sanctuary in Platinum Group developments.
          </p>
        </div>
        <div className="flex items-center space-x-1 text-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
          <span className="text-xs text-neutral-700 dark:text-white/80 font-bold ml-2">4.9 / 5 Rating</span>
        </div>
      </div>

      <div className="relative mt-8">
        <div className="absolute inset-y-0 left-0 flex items-center md:-left-4 z-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-black/70 text-white hover:bg-gold transition-colors shadow-lg flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <span className="text-xl">‹</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedSlides.map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              initial={{ opacity: 0, y: 24, rotateX: 8, rotateY: -6, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01, rotate: -0.3 }}
              className="rounded-3xl overflow-hidden border border-[#e6d6bd] bg-white shadow-xl backdrop-blur-xl"
            >
              <div
                onClick={() => setActiveVideo(item.videoUrl)}
                className="relative h-72 md:h-80 cursor-pointer overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#a1896b] text-white flex items-center justify-center shadow-[0_0_30px_rgba(140,116,69,0.35)] transition-transform duration-300 hover:scale-105">
                    <Play className="w-7 h-7 fill-black" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <Quote className="w-7 h-7 text-[#a1896b] mb-4" />
                  <p className="text-sm text-[#2c2620] font-light italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e5d6bf]">
                  <h4 className="text-sm font-semibold text-[#111]">{item.name}</h4>
                  <p className="text-[10px] text-[#a1896b] tracking-[0.32em] uppercase mt-1">{item.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center md:right-[-16px] z-10">
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black/70 text-white hover:bg-gold transition-colors shadow-lg flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#a1896b] scale-110' : 'bg-[#c9b698]'}`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-gold/40 shadow-2xl bg-black">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/70 text-white hover:text-gold border border-white/20 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <iframe
                src={`${activeVideo}?autoplay=1`}
                title="Customer Testimonial"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

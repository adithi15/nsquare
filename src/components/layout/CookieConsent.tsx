import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { ThemeMode } from '../../types';

interface CookieConsentProps {
  theme: ThemeMode;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('nsquare-cookie-consent');
    if (!consent) {
      // Show the banner with a slight delay for smooth introduction
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nsquare-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('nsquare-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 pointer-events-auto"
        >
          <div className={`p-6 border shadow-2xl relative overflow-hidden backdrop-blur-lg ${
            isDark 
              ? 'bg-[#121212]/95 border-white/10 text-neutral-300 shadow-black/80' 
              : 'bg-white/95 border-neutral-300/60 text-neutral-700 shadow-neutral-900/10'
          }`}>
            
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A059]/30 via-[#C5A059] to-[#C5A059]/30" />

            {/* Header section */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <Cookie className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-0.5">
                    Privacy Policy
                  </span>
                  <h4 className={`text-sm font-serif font-semibold tracking-wide uppercase ${
                    isDark ? 'text-white' : 'text-neutral-950'
                  }`}>
                    Cookie Consent
                  </h4>
                </div>
              </div>
              
              <button 
                onClick={handleDecline}
                className="text-neutral-400 hover:text-neutral-500 dark:hover:text-white transition-colors p-1 cursor-pointer"
                aria-label="Close Cookie Consent"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body Description */}
            <p className="text-xs leading-relaxed font-light mb-5">
              We use cookies to optimize your browsing experience, analyze our web traffic, and serve personalized content. By clicking <strong className="font-medium text-[#C5A059]">"Accept All"</strong>, you consent to our use of cookies in accordance with our privacy practices.
            </p>

            {/* Button Actions */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={handleDecline}
                className={`py-2 px-4 text-[9px] uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                  isDark
                    ? 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white'
                    : 'border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-900'
                }`}
              >
                Decline
              </button>
              
              <button
                onClick={handleAccept}
                className="bg-[#C5A059] hover:bg-[#D4B575] text-black font-semibold py-2 px-5 text-[9px] uppercase tracking-widest cursor-pointer transition-colors duration-200"
              >
                Accept All
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

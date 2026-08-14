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
    // Show the banner with a slight delay for smooth introduction (Temporarily bypassed localStorage for testing/preview)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
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
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 w-full z-50 pointer-events-auto"
        >
          <div className={`w-full border-t relative overflow-hidden backdrop-blur-lg ${
            isDark 
              ? 'bg-black/95 border-white/10 text-neutral-300 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white/95 border-neutral-200 text-neutral-700 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]'
          }`}>
            
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A059]/30 via-[#C5A059] to-[#C5A059]/30" />

            <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
              
              {/* Left section: Icon and message */}
              <div className="flex items-start md:items-center gap-3.5 flex-1">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <p className="text-xs md:text-sm leading-relaxed font-light">
                  We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies.{' '}
                  <a href="#" className="underline font-medium hover:text-[#C5A059] transition-colors whitespace-nowrap">
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Right section: Action buttons and Close */}
              <div className="flex items-center gap-3.5 shrink-0 justify-end w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className={`py-2 px-5 text-[10px] uppercase tracking-[0.2em] font-bold border transition-all cursor-pointer ${
                    isDark
                      ? 'border-white/15 hover:border-white/30 hover:bg-white/5 text-white'
                      : 'border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-900'
                  }`}
                >
                  Settings
                </button>
                
                <button
                  onClick={handleAccept}
                  className="bg-[#C5A059] hover:bg-[#D4B575] text-black font-bold py-2 px-6 text-[10px] uppercase tracking-[0.2em] cursor-pointer transition-colors duration-200"
                >
                  Accept
                </button>
                
                <button 
                  onClick={handleDecline}
                  className="text-neutral-400 hover:text-neutral-500 dark:hover:text-white transition-colors p-1 cursor-pointer"
                  aria-label="Close Cookie Consent"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


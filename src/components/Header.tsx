import React, { useState, useEffect } from 'react';
import { ThemeMode, NavTab } from '../types';
import { Moon, Sun, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenVisitModal: () => void;
  onSelectProjectFilter?: (filter: 'ongoing' | 'completed' | 'upcoming') => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeTab,
  onSelectTab,
  onOpenVisitModal,
  onSelectProjectFilter
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<NavTab | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; tab: NavTab; hasDropdown?: boolean }[] = [
    { label: 'HOME', tab: 'residences' },
    { label: 'PROJECTS', tab: 'projects', hasDropdown: true },
    { label: 'ABOUT US', tab: 'legacy' },
    { label: 'CONTACT US', tab: 'contact' },
  ];

  const projectDropdownItems = [
    { label: 'ONGOING PROJECTS', filter: 'ongoing' as const },
    { label: 'COMPLETED PROJECTS', filter: 'completed' as const },
    { label: 'UPCOMING PROJECTS', filter: 'upcoming' as const },
  ];

  const handleDropdownItemClick = (filter: 'ongoing' | 'completed' | 'upcoming') => {
    onSelectTab('projects');
    if (onSelectProjectFilter) {
      onSelectProjectFilter(filter);
    }
    setProjectsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 md:px-10 lg:px-14 shrink-0 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl shadow-2xl py-3 md:py-3'
        : 'bg-transparent pt-4 pb-3 md:pt-4 md:pb-3 lg:pt-4 lg:pb-3'
    }`}>
      {/* Brand Logo */}
      <button 
        onClick={() => onSelectTab('residences')}
        className="flex items-center text-left group cursor-pointer focus:outline-none z-10 ml-8 md:ml-20 lg:ml-32"
      >
        <img
          src="/N-Square-logo.png"
          alt="N Square logo"
          className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </button>

      {/* Desktop Navigation Links */}
      <nav 
        className="hidden md:flex items-center space-x-6 lg:space-x-8 z-10"
        onMouseLeave={() => setHoveredTab(null)}
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.tab;
          const isHighlighted = hoveredTab ? hoveredTab === item.tab : isActive;

          if (item.hasDropdown) {
            return (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => {
                  setHoveredTab(item.tab);
                  setProjectsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  setProjectsDropdownOpen(false);
                }}
              >
                <button
                  onClick={() => {
                    onSelectTab(item.tab);
                    setProjectsDropdownOpen(!projectsDropdownOpen);
                  }}
                  className={`flex items-center space-x-2.5 text-xs lg:text-[13px] tracking-[0.24em] uppercase font-semibold cursor-pointer transition-all duration-300 relative py-1.5 ${
                    isHighlighted 
                      ? 'text-white font-bold' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {/* Circle Dot Bullet Indicator with Fixed Thin Vertical Connecting Line */}
                  <div className="relative flex items-center justify-center w-3.5 h-3.5">
                    {isHighlighted && (
                      <motion.div
                        layoutId="activeHeaderVerticalLine"
                        layout="position"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                        className="absolute -top-[200px] bottom-1/2 left-1/2 -translate-x-1/2 w-[0.5px] bg-white pointer-events-none z-0"
                      />
                    )}
                    <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative z-10 ${
                      isHighlighted 
                        ? 'bg-white scale-125' 
                        : 'border border-white/40 bg-transparent'
                    }`} />
                  </div>

                  <span>{item.label}</span>

                  <motion.span 
                    animate={{ rotate: projectsDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-white" />
                  </motion.span>
                </button>

                {/* Animated Dropdown Menu */}
                <AnimatePresence>
                  {projectsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 min-w-[210px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.25)] py-2 z-50 overflow-hidden text-white"
                    >
                      {projectDropdownItems.map((sub) => (
                        <button
                          key={sub.filter}
                          onClick={() => handleDropdownItemClick(sub.filter)}
                          className="w-full text-left px-5 py-3 text-[11px] uppercase tracking-[0.2em] transition-all flex items-center space-x-2.5 group cursor-pointer text-white/80 hover:text-white hover:bg-white/10"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white group-hover:scale-125 transition-all" />
                          <span className="font-medium">{sub.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <button
              key={item.label}
              onMouseEnter={() => setHoveredTab(item.tab)}
              onClick={() => onSelectTab(item.tab)}
              className={`flex items-center space-x-2.5 text-xs lg:text-[13px] tracking-[0.24em] uppercase font-semibold cursor-pointer transition-all duration-300 relative py-1.5 ${
                isHighlighted 
                  ? 'text-white font-bold drop-shadow-sm' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {/* Circle Dot Bullet Indicator with Fixed Thin Vertical Connecting Line */}
              <div className="relative flex items-center justify-center w-3.5 h-3.5">
                {isHighlighted && (
                  <motion.div
                    layoutId="activeHeaderVerticalLine"
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    className="absolute -top-[200px] bottom-1/2 left-1/2 -translate-x-1/2 w-[0.5px] bg-white pointer-events-none z-0"
                  />
                )}
                <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative z-10 ${
                  isHighlighted 
                    ? 'bg-white scale-125' 
                    : 'border border-white/40 bg-transparent'
                }`} />
              </div>
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Call Concierge Button */}
        <button
          onClick={onOpenVisitModal}
          aria-label="Contact Concierge"
          className="p-2 rounded-full bg-white text-black hover:bg-white/90 transition-all shadow-sm hover:scale-105 cursor-pointer flex items-center justify-center"
          title="Schedule Visit"
        >
          <Phone className="w-4 h-4 fill-black stroke-black" />
        </button>

        {/* Sliding Dual-Icon Light & Dark Theme Switcher */}
        <div
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="relative flex items-center bg-white/15 border border-white/20 p-1 rounded-full cursor-pointer select-none w-16 h-8 shadow-inner hover:border-white transition-all duration-300"
        >
          <motion.div
            className="absolute top-1 bottom-1 w-6 bg-white rounded-full"
            animate={{
              x: theme === 'dark' ? 30 : 2
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
          <div className="relative z-10 flex items-center justify-between w-full px-1.5 pointer-events-none">
            <Sun className={`w-3.5 h-3.5 transition-colors duration-300 ${theme === 'light' ? 'text-black font-bold' : 'text-white/60'}`} />
            <Moon className={`w-3.5 h-3.5 transition-colors duration-300 ${theme === 'dark' ? 'text-black font-bold' : 'text-white/60'}`} />
          </div>
        </div>
      </nav>

      {/* Mobile Controls */}
      <div className="flex md:hidden items-center space-x-2 z-10">
        <div
          onClick={onToggleTheme}
          className="relative flex items-center bg-white/15 border border-white/20 p-1 rounded-full cursor-pointer select-none w-14 h-7"
        >
          <motion.div
            className="absolute top-0.5 bottom-0.5 w-5 bg-white rounded-full"
            animate={{
              x: theme === 'dark' ? 26 : 2
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
          <div className="relative z-10 flex items-center justify-between w-full px-1 pointer-events-none">
            <Sun className={`w-3 h-3 ${theme === 'light' ? 'text-black' : 'text-white/60'}`} />
            <Moon className={`w-3 h-3 ${theme === 'dark' ? 'text-black' : 'text-white/60'}`} />
          </div>
        </div>

        <button
          onClick={onOpenVisitModal}
          className="p-2 rounded-full bg-white text-black"
        >
          <Phone className="w-4 h-4" />
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg border border-white/20 bg-black/30 backdrop-blur-md text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full py-4 px-5 border-b border-white/10 shadow-2xl flex flex-col space-y-3 md:hidden z-50 overflow-hidden bg-black/90 backdrop-blur-2xl text-white"
          >
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <button
                  onClick={() => {
                    onSelectTab(item.tab);
                    if (!item.hasDropdown) setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left text-xs uppercase tracking-widest py-1.5 border-b border-white/5 flex items-center justify-between ${
                    activeTab === item.tab ? 'text-white font-bold' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>{item.label}</span>
                  </div>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-white" />}
                </button>

                {item.hasDropdown && (
                  <div className="pl-6 space-y-2 pt-1">
                    {projectDropdownItems.map((sub) => (
                      <button
                        key={sub.filter}
                        onClick={() => handleDropdownItemClick(sub.filter)}
                        className="block w-full text-left text-[10px] uppercase tracking-widest text-white/70 hover:text-white py-1"
                      >
                        • {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => {
                onOpenVisitModal();
                setMobileMenuOpen(false);
              }}
              className="bg-white text-black px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold mt-2 text-center rounded-sm w-full"
            >
              Schedule Private Visit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
import React, { useState, useEffect } from 'react';
import { ThemeMode, NavTab } from '../../types';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT } from '../../data/nsquare';

// Official WhatsApp glyph
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<NavTab | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProjectsOpen(false);
  };

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
    { label: 'ABOUT', tab: 'legacy' },
    { label: 'PROJECTS', tab: 'projects', hasDropdown: true },
    { label: 'REDEVELOPMENT', tab: 'redevelopment' },
    { label: 'CONTACT', tab: 'contact' },
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
    closeMobileMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center pl-5 sm:pl-8 md:pl-16 lg:pl-20 pr-5 sm:pr-8 md:pr-12 lg:pr-16 shrink-0 transition-all duration-500 ease-in-out bg-black/70 backdrop-blur-xl ${isScrolled
      ? 'border-b border-white/10 shadow-2xl py-1 md:py-1.5'
      : 'py-2 md:py-2.5'
      }`}>
      {/* 1. Left: Brand Logo (Enlarged & Shifted Inward) */}
      <button
        onClick={() => { onSelectTab('residences'); closeMobileMenu(); }}
        aria-label="Go to home page"
        className="flex items-center text-left group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-none z-30 shrink-0 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24"
      >
        <img
          src="/N-Square-logo.png"
          alt="N Square logo"
          className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </button>

      {/* 2. Center: Desktop Navigation Links */}
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
                  className={`flex items-center space-x-2 text-xs lg:text-[13px] tracking-[0.22em] uppercase font-semibold cursor-pointer transition-all duration-300 relative py-1.5 ${isHighlighted
                    ? 'text-white font-bold'
                    : 'text-white/80 hover:text-white'
                    }`}
                >
                  {/* Square Dot Bullet Indicator */}
                  <div className="relative flex items-center justify-center w-2.5 h-2.5">
                    <span className={`w-1.5 h-1.5 transition-all duration-300 relative z-10 ${isHighlighted
                      ? 'bg-[#c5a059] scale-110'
                      : 'border border-[#c5a059]/50 bg-transparent'
                      }`} />
                  </div>

                  <span>{item.label}</span>

                  <motion.span
                    animate={{ rotate: projectsDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-white/80" />
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
                      className="absolute top-full left-0 min-w-[210px] bg-white/70 backdrop-blur-2xl border border-white/40 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.25)] py-2 z-50 overflow-hidden text-neutral-900"
                    >
                      {projectDropdownItems.map((sub) => (
                        <button
                          key={sub.filter}
                          onClick={() => handleDropdownItemClick(sub.filter)}
                          className="w-full text-left px-5 py-3 text-[11px] uppercase tracking-[0.2em] transition-all flex items-center space-x-2.5 group cursor-pointer text-neutral-700 hover:text-neutral-900 hover:bg-black/5"
                        >
                          <span className="w-1.5 h-1.5 bg-[#C5A059]/60 group-hover:bg-[#C5A059] group-hover:scale-125 transition-all" />
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
              className={`flex items-center space-x-2 text-xs lg:text-[13px] tracking-[0.22em] uppercase font-semibold cursor-pointer transition-all duration-300 relative py-1.5 ${isHighlighted
                ? 'text-white font-bold drop-shadow-sm'
                : 'text-white/80 hover:text-white'
                }`}
            >
              {/* Square Dot Bullet Indicator */}
              <div className="relative flex items-center justify-center w-2.5 h-2.5">
                <span className={`w-1.5 h-1.5 transition-all duration-300 relative z-10 ${isHighlighted
                  ? 'bg-[#c5a059] scale-110'
                  : 'border border-[#c5a059]/40 bg-transparent'
                  }`} />
              </div>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 3. Right: Contact Action Icons (Phone, Mail, WhatsApp - Big & Prominent) */}
      <div className="hidden md:flex items-center gap-4 lg:gap-5 z-30 shrink-0">
        <a
          href={CONTACT.phoneHref}
          className="text-white hover:text-[#C5A059] hover:scale-115 transition-all p-1 cursor-pointer flex items-center justify-center"
          title={`Call Us (${CONTACT.phone})`}
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.75} />
        </a>

        <span className="w-px h-5 bg-white/35" />

        <a
          href={`mailto:${CONTACT.email}`}
          className="text-white hover:text-[#C5A059] hover:scale-115 transition-all p-1 cursor-pointer flex items-center justify-center"
          title={`Email Us (${CONTACT.email})`}
          aria-label="Email Us"
        >
          <Mail className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.75} />
        </a>

        <span className="w-px h-5 bg-white/35" />

        <a
          href={`${CONTACT.whatsappHref}?text=${encodeURIComponent('Hello N-Square Developers! I would like to know more about your projects.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#25D366] hover:scale-115 transition-all p-1 cursor-pointer flex items-center justify-center"
          title="WhatsApp Concierge"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </a>
      </div>

      {/* Mobile Controls */}
      <div className="flex md:hidden items-center space-x-3.5 z-10">
        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            aria-label="Call Us"
            className="p-1 text-white hover:text-[#C5A059]"
          >
            <Phone className="w-5 h-5" strokeWidth={1.75} />
          </a>

          <span className="w-px h-4 bg-white/35" />

          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email Us"
            className="p-1 text-white hover:text-[#C5A059]"
          >
            <Mail className="w-5 h-5" strokeWidth={1.75} />
          </a>

          <span className="w-px h-4 bg-white/35" />

          <a
            href={`${CONTACT.whatsappHref}?text=${encodeURIComponent('Hello N-Square Developers! I would like to know more about your projects.')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="p-1 text-white hover:text-[#25D366]"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => {
            if (mobileMenuOpen) closeMobileMenu();
            else setMobileMenuOpen(true);
          }}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="p-2 rounded-lg border border-white/20 bg-black/30 backdrop-blur-md text-white focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Tap-anywhere backdrop — closes the mobile menu without hunting for the X button */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-black/30 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full py-4 px-5 border-b border-white/40 shadow-2xl flex flex-col space-y-3 md:hidden z-50 overflow-hidden bg-white/60 backdrop-blur-2xl text-neutral-900"
          >
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      // Accordion — opens only on tap
                      setMobileProjectsOpen((v) => !v);
                    } else {
                      onSelectTab(item.tab);
                      closeMobileMenu();
                    }
                  }}
                  className={`w-full text-left text-xs uppercase tracking-widest py-1.5 border-b border-black/5 flex items-center justify-between ${activeTab === item.tab ? 'text-neutral-900 font-bold' : ''
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#C5A059]" />
                    <span>{item.label}</span>
                  </div>
                  {item.hasDropdown && (
                    <motion.span animate={{ rotate: mobileProjectsOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="w-4 h-4 text-neutral-700" />
                    </motion.span>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {item.hasDropdown && mobileProjectsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="pl-6 space-y-2 pt-1 overflow-hidden"
                    >
                      {projectDropdownItems.map((sub) => (
                        <button
                          key={sub.filter}
                          onClick={() => handleDropdownItemClick(sub.filter)}
                          className="block w-full text-left text-[10px] uppercase tracking-widest text-neutral-600 hover:text-neutral-900 py-1"
                        >
                          • {sub.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              onClick={() => {
                onOpenVisitModal();
                closeMobileMenu();
              }}
              className="bg-neutral-900 text-white px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold mt-2 text-center rounded-sm w-full"
            >
              Schedule Private Visit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
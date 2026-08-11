import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { ThemeMode, NavTab, Property } from './types';
import { PROPERTIES, HERO_SLIDES } from './data/residences';
import { Header } from './components/layout/Header';
import { BrochureModal, ScheduleModal } from './components/layout/Modals';
import { Footer } from './components/layout/Footer';
import { CookieConsent } from './components/layout/CookieConsent';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { LegacyPage } from './pages/LegacyPage';
import { ContactPage } from './pages/ContactPage';
import { CommercialPage } from './pages/CommercialPage';
import { RedevelopmentPage } from './pages/RedevelopmentPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeTab, setActiveTab] = useState<NavTab>('residences');
  const [selectedProperty, setSelectedProperty] = useState<Property>(PROPERTIES[0]);

  // Modal States
  const [brochureModalProperty, setBrochureModalProperty] = useState<Property | null>(null);
  const [scheduleModalProperty, setScheduleModalProperty] = useState<Property | null>(null);

  // Apply dark/light class on body element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0A0A0A] text-[#F5F5F5] antialiased';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#FAFAFA] text-[#121212] antialiased';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenBrochure = (property: Property) => {
    setBrochureModalProperty(property);
  };

  const handleOpenScheduleVisit = (property: Property) => {
    setScheduleModalProperty(property);
  };

  const [projectFilter, setProjectFilter] = useState<'all' | 'ongoing' | 'completed' | 'upcoming'>('all');
  const location = useLocation();
  const navigate = useNavigate();

  // Sync activeTab state with URL pathname
  useEffect(() => {
    const path = location.pathname;
    if (path === '/projects') {
      setActiveTab('projects');
    } else if (path === '/about' || path === '/legacy') {
      setActiveTab('legacy');
    } else if (path === '/contact') {
      setActiveTab('contact');
    } else if (path === '/commercial') {
      setActiveTab('commercial');
    } else if (path === '/redevelopment') {
      setActiveTab('redevelopment');
    } else if (path === '/' || path === '/residences') {
      setActiveTab('residences');
    }
  }, [location.pathname]);

  const handleSelectNavTab = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'residences') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'legacy') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'projects') {
      navigate('/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'contact') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'commercial') {
      navigate('/commercial');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'redevelopment') {
      navigate('/redevelopment');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-500 ${
        theme === 'dark' ? 'dark-theme bg-[#0A0A0A] text-[#F5F5F5]' : 'light-theme bg-[#FAFAFA] text-[#121212]'
      }`}
    >
      {/* Header with Navigation, Interlocking Rings & Theme Switcher */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeTab={activeTab}
        onSelectTab={handleSelectNavTab}
        onOpenVisitModal={() => handleOpenScheduleVisit(selectedProperty)}
        onSelectProjectFilter={(filter) => {
          handleSelectNavTab('projects');
          setProjectFilter(filter);
        }}
      />

      {/* Main Dynamic View Content using React Router */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                key="residences-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 flex flex-col"
              >
                <HomePage
                  theme={theme}
                  slides={HERO_SLIDES}
                  onOpenBrochure={(slide) => {
                    const found = PROPERTIES.find((p) => p.id === slide.propertyId) || PROPERTIES[0];
                    handleOpenBrochure(found);
                  }}
                  onOpenScheduleVisit={(slide) => {
                    const found = PROPERTIES.find((p) => p.id === slide.propertyId) || PROPERTIES[0];
                    handleOpenScheduleVisit(found);
                  }}
                  onSelectPropertyId={(id) => {
                    const found = PROPERTIES.find((p) => p.id === id);
                    if (found) setSelectedProperty(found);
                  }}
                  onViewAllProjects={() => handleSelectNavTab('projects')}
                  onNavigateToRedevelopment={() => handleSelectNavTab('redevelopment')}
                />
              </motion.div>
            }
          />

          <Route
            path="/projects"
            element={
              <motion.div
                key="projects-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                <ProjectsPage
                  theme={theme}
                  initialFilter={projectFilter === 'all' ? 'ongoing' : projectFilter}
                  properties={PROPERTIES}
                  onSelectProperty={(prop) => {
                    setSelectedProperty(prop);
                    handleSelectNavTab('residences');
                  }}
                  onRequestBrochure={handleOpenBrochure}
                  onScheduleVisit={handleOpenScheduleVisit}
                />
              </motion.div>
            }
          />

          <Route
            path="/about"
            element={
              <motion.div
                key="legacy-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                <LegacyPage
                  theme={theme}
                  onOpenVisitModal={() => handleOpenScheduleVisit(selectedProperty)}
                />
              </motion.div>
            }
          />

          <Route
            path="/contact"
            element={
              <motion.div
                key="contact-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                <ContactPage theme={theme} />
              </motion.div>
            }
          />

          <Route
            path="/commercial"
            element={
              <motion.div
                key="commercial-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                <CommercialPage
                  theme={theme}
                  properties={PROPERTIES.filter((p) => p.type === 'Commercial')}
                  onSelectProperty={(prop) => {
                    setSelectedProperty(prop);
                    handleSelectNavTab('residences');
                  }}
                  onRequestBrochure={handleOpenBrochure}
                  onScheduleVisit={handleOpenScheduleVisit}
                />
              </motion.div>
            }
          />

          <Route
            path="/redevelopment"
            element={
              <motion.div
                key="redevelopment-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                <RedevelopmentPage theme={theme} />
              </motion.div>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      {/* Sub-Footer Status Bar */}
      <Footer
        theme={theme}
        maharera={selectedProperty.maharera}
        onSelectTab={setActiveTab}
      />

      {/* Interactive Modals */}
      <BrochureModal
        property={brochureModalProperty}
        isOpen={Boolean(brochureModalProperty)}
        onClose={() => setBrochureModalProperty(null)}
        theme={theme}
      />

      <ScheduleModal
        property={scheduleModalProperty}
        isOpen={Boolean(scheduleModalProperty)}
        onClose={() => setScheduleModalProperty(null)}
        theme={theme}
      />

      {/* Cookie Consent Banner */}
      <CookieConsent theme={theme} />
    </div>
  );
}


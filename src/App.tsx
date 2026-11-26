import type { Route } from './seo/routes';
import { ProjectDetail } from './pages/ProjectDetail';
import React from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { ProfileAssistant } from './assistant/ProfileAssistant';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { MediaLightbox } from './components/MediaLightbox';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { QualityIsoPage } from './pages/QualityIsoPage';
import { ContactPage } from './pages/ContactPage';

const PageRouter: React.FC = () => {
  const { currentPage, detail } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return detail ? <ProjectDetail id={detail}/> : <ProjectsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'quality':
        return <QualityIsoPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#191B1F]">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ProfileAssistant />
      <ProjectModal />
      <MediaLightbox />
    </div>
  );
};

export default function App({initialRoute}: {initialRoute?: Route} = {}) {
  return (
    <MotionConfig reducedMotion="user">
      <AppProvider initialRoute={initialRoute}>
        <PageRouter />
      </AppProvider>
    </MotionConfig>
  );
}

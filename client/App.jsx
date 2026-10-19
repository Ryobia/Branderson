import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Studio from './pages/Studio';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Feedback from './pages/Feedback';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Privacy = lazy(() => import('./pages/Privacy'));
const PrivacyBloomAndBattle = lazy(() => import('./pages/PrivacyBloomAndBattle'));

const AnimatedMain = () => {
  const location = useLocation();
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading...</div>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy/idle-rain" element={<Privacy />} />
            <Route path="/privacy/bloom-and-battle" element={<PrivacyBloomAndBattle />} />
            <Route path="/privacy-bloom-and-battle" element={<PrivacyBloomAndBattle />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </main>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      {!isMenuPage && <Navbar />}
      <AnimatedMain />
      {!isMenuPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
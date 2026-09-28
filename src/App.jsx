import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync theme with html root element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Toast trigger helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // IntersectionObserver to sync active navigation link on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
    
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0D14] light:bg-[#F8FAFC] text-slate-100 light:text-slate-900 flex flex-col lg:flex-row transition-colors duration-300">
      
      {/* Desktop Left Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onViewResume={() => setIsResumeOpen(true)}
        showToast={showToast}
      />

      {/* Mobile Top Header */}
      <MobileHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onViewResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 xl:px-12 py-4 sm:py-8 overflow-x-hidden">
        <HeroSection onViewResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection 
          onViewResume={() => setIsResumeOpen(true)} 
          showToast={showToast} 
        />
        <Footer />
      </main>

      {/* Interactive Modals & Utilities */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        showToast={showToast}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      <BackToTop />
    </div>
  );
}

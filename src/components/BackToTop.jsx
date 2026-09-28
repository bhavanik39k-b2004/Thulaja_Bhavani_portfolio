import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:scale-110 active:scale-95 duration-200"
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenDesigns: () => void;
}

export default function Navbar({ onOpenConsultation, onOpenDesigns }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Avoid excessive state updates by checking condition first
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Designs', href: '#designs', onClick: onOpenDesigns },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClick?: () => void) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (onClick) {
      onClick();
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`sticky top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-stone-200/40 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-[8px]"
          >
            <div className="w-9 h-9 rounded-[10px] bg-primary flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm transition-all duration-300 group-hover:bg-primary-light">
              K
            </div>
            <span className="font-display font-semibold tracking-wide text-lg text-primary group-hover:text-primary-light transition-colors duration-300">
              KitchenSpace <span className="text-secondary font-light">Studio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.onClick)}
                className="font-sans text-sm font-medium text-luxury-text/75 hover:text-primary transition-colors duration-300 relative group py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-[4px]"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-[14px] text-sm font-medium bg-primary text-white border border-primary hover:bg-transparent hover:text-primary hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 -mr-1.5 text-primary hover:bg-stone-100 rounded-[10px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between p-8 lg:hidden border-l border-stone-200/50"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-serif font-bold text-base">
                      K
                    </div>
                    <span className="font-display font-semibold text-primary">
                      KitchenSpace <span className="text-secondary font-light">Studio</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 text-stone-500 hover:text-primary hover:bg-stone-100 rounded-lg transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, link.onClick)}
                      className="text-lg font-medium text-stone-700 hover:text-primary hover:pl-2 transition-all duration-300 py-1 border-b border-stone-50"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-medium rounded-[14px] shadow-md hover:bg-primary-light hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-stone-400 mt-4">
                  © 2026 KitchenSpace Studio. All Rights Reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenDesigns: () => void;
}

export default function Footer({ onOpenConsultation, onOpenDesigns }: FooterProps) {
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string, onClick?: () => void) => {
    e.preventDefault();
    if (onClick) {
      onClick();
      return;
    }
    const target = document.querySelector(id);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#111111] text-stone-400 font-sans border-t border-stone-800/80 relative z-20">
      
      {/* FOUR-COLUMN TOP SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-stone-800/60">
        
        {/* COLUMN 1: BRAND LOGO & BIO */}
        <div className="lg:col-span-4 space-y-6">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm transition-all group-hover:bg-primary-light">
              K
            </div>
            <span className="font-display font-semibold tracking-wide text-lg text-white group-hover:text-accent transition-colors duration-300">
              KitchenSpace <span className="text-secondary font-light">Studio</span>
            </span>
          </a>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            KitchenSpace Studio designs and manufactures elite luxury modular kitchens. By pairing imported materials with precision German machinery, we construct bespoke, high-performance culinary spaces customized to your lifestyle.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Accredited by:</span>
            <span className="text-[11px] font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded">Häfele Partner</span>
            <span className="text-[11px] font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded">Blum Certified</span>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="lg:col-span-2 space-y-4 lg:pl-4">
          <h4 className="font-display font-bold text-white text-xs sm:text-sm uppercase tracking-widest border-l-2 border-secondary pl-3">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, '#home')}
                className="hover:text-white transition-colors duration-200 block relative py-0.5 group w-fit"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li>
              <a
                href="#designs"
                onClick={(e) => handleScrollTo(e, '#designs', onOpenDesigns)}
                className="hover:text-white transition-colors duration-200 block relative py-0.5 group w-fit"
              >
                <span>Designs</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="hover:text-white transition-colors duration-200 block relative py-0.5 group w-fit"
              >
                <span>Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="hover:text-white transition-colors duration-200 block relative py-0.5 group w-fit"
              >
                <span>Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={(e) => handleScrollTo(e, '#process')}
                className="hover:text-white transition-colors duration-200 block relative py-0.5 group w-fit"
              >
                <span>Process</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="hover:text-white transition-colors duration-200 block relative py-0.5 group w-fit"
              >
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: KITCHEN STYLES */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-display font-bold text-white text-xs sm:text-sm uppercase tracking-widest border-l-2 border-secondary pl-3">
            Kitchen Styles
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <button
                onClick={onOpenDesigns}
                className="hover:text-white transition-colors duration-200 block text-left relative py-0.5 group cursor-pointer w-fit"
              >
                <span>L-Shaped Modular</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDesigns}
                className="hover:text-white transition-colors duration-200 block text-left relative py-0.5 group cursor-pointer w-fit"
              >
                <span>U-Shaped Cozy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDesigns}
                className="hover:text-white transition-colors duration-200 block text-left relative py-0.5 group cursor-pointer w-fit"
              >
                <span>Parallel Galley</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDesigns}
                className="hover:text-white transition-colors duration-200 block text-left relative py-0.5 group cursor-pointer w-fit"
              >
                <span>Island Layout</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDesigns}
                className="hover:text-white transition-colors duration-200 block text-left relative py-0.5 group cursor-pointer w-fit"
              >
                <span>Open Studio</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenDesigns}
                className="hover:text-white transition-colors duration-200 block text-left relative py-0.5 group cursor-pointer w-fit"
              >
                <span>Contemporary Modern</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: CONTACT & DETAILS */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-display font-bold text-white text-xs sm:text-sm uppercase tracking-widest border-l-2 border-secondary pl-3">
            Contact Information
          </h4>
          <ul className="space-y-3.5 text-xs sm:text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-300 font-semibold">1800-123-5482 (Toll Free)</p>
                <p className="text-[11px] text-stone-500">+91 98765 43210 (Sales HQ)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-300 font-semibold">design@kitchenspace.in</p>
                <p className="text-[11px] text-stone-500">info@kitchenspacestudio.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-300 font-semibold">KitchenSpace Design Experience Center</p>
                <p className="text-[11px] text-stone-500">Plot 45, Sector 44, Near Huda City Centre, Gurugram, Haryana - 122003</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-300 font-semibold">Experience Center Hours</p>
                <p className="text-[11px] text-stone-500">Mon - Sun: 10:00 AM – 8:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM FOOTER SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left Section */}
        <div className="text-stone-500 text-center sm:text-left">
          © 2026 KitchenSpace Studio. All Rights Reserved.
        </div>

        {/* Right Section: Plain Text Only, NOT clickable */}
        <div className="text-stone-500 font-mono tracking-wide text-center sm:text-right">
          Designed and Developed by &lt;/&gt;newtocode
        </div>

      </div>

    </footer>
  );
}

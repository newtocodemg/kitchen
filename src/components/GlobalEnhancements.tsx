import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp, MessageCircle, X, Sparkles, Send } from 'lucide-react';

export default function GlobalEnhancements() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  // 1. Scroll Progress Setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track window scroll coordinates
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      chatMessage.trim() || 'Hi KitchenSpace Studio! I am interested in a free modular kitchen 3D design consultation.'
    );
    window.open(`https://wa.me/919876543210?text=${encodedText}`, '_blank');
    setShowWhatsAppChat(false);
    setChatMessage('');
  };

  return (
    <>
      {/* 1. SCROLL PROGRESS INDICATOR AT THE TOP */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* FLOATING ACTION PANELS (BOTTOM RIGHT) */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3.5 z-40">
        
        {/* 2. FLOATING WHATSAPP INTERACTIVE DIALOG */}
        <div className="relative">
          
          <AnimatePresence>
            {showWhatsAppChat && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl border border-stone-200/60 shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-[#1E4D3D] p-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-accent">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#1E4D3D] rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-display tracking-wide">KitchenSpace WhatsApp</h4>
                      <p className="text-[10px] text-stone-300">Typically replies within 5 minutes</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowWhatsAppChat(false)}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors text-stone-300 hover:text-white focus:outline-none"
                    aria-label="Close chat window"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Chat body */}
                <div className="p-4 space-y-3 bg-stone-50 min-h-[140px] text-xs">
                  <div className="bg-white p-3 rounded-xl border border-stone-100 shadow-2xs space-y-1 max-w-[85%]">
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Namaste! Welcome to <strong>KitchenSpace Studio</strong> experience hub.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-100 shadow-2xs space-y-1 max-w-[85%]">
                    <div className="flex items-center gap-1 text-secondary font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Free Site Consultation</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Let us know your location or chosen layout preference. How can we build your dream culinary space today?
                    </p>
                  </div>
                </div>

                {/* Footer form input */}
                <form onSubmit={handleWhatsAppSubmit} className="p-3 border-t border-stone-100 bg-white flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-stone-200 rounded-xl text-xs text-primary font-medium focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/10"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-[#1E4D3D] hover:bg-primary-light text-white rounded-xl transition-all cursor-pointer shadow-sm flex items-center justify-center shrink-0"
                    aria-label="Send message on WhatsApp"
                  >
                    <Send className="w-4 h-4 text-accent" />
                  </button>
                </form>

              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Main Button */}
          <button
            onClick={() => setShowWhatsAppChat(!showWhatsAppChat)}
            className="w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 transition-all duration-300 shadow-lg flex items-center justify-center relative group focus:outline-none focus:ring-4 focus:ring-emerald-500/20 cursor-pointer"
            aria-label="Contact KitchenSpace Studio on WhatsApp"
          >
            {/* Pulsing ring indicator */}
            <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366]/40 animate-ping pointer-events-none scale-105" />
            <MessageCircle className="w-7 h-7 fill-current relative z-10" />
            
            {/* Hover tooltip */}
            <span className="absolute right-16 bg-stone-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-x-2 group-hover:translate-x-0">
              💬 Consult on WhatsApp (Active)
            </span>
          </button>
        </div>

        {/* 3. BACK TO TOP SMOOTH BUTTON */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white text-primary border border-stone-200/80 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-stone-200 cursor-pointer"
              aria-label="Scroll back to top of the page"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}

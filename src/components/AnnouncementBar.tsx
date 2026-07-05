import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenConsultation: () => void;
}

export default function AnnouncementBar({ onOpenConsultation }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="announcement-bar"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-primary text-white overflow-hidden z-50 text-xs sm:text-sm font-medium border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-accent animate-pulse shrink-0" />
              <span>
                <span className="font-semibold text-accent">Exclusive:</span> Free 3D Kitchen Design Consultation
              </span>
            </div>
            
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="group flex items-center gap-1.5 text-accent hover:text-white transition-colors duration-200 focus:outline-none"
              >
                <span>Book Today</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

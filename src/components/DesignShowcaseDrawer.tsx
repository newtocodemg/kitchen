import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check, Hammer, Settings, Layers } from 'lucide-react';
import { KITCHEN_STYLES } from '../data';
import { KitchenStyle } from '../types';

interface DesignShowcaseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStyle: (styleId: string) => void;
}

export default function DesignShowcaseDrawer({ isOpen, onClose, onSelectStyle }: DesignShowcaseDrawerProps) {
  // Disable body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="design-drawer-portal" className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 190 }}
              className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-stone-100 flex items-center justify-between bg-stone-50/50 shrink-0">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2.5 py-1 rounded-full">
                    Aesthetic Catalog
                  </span>
                  <h3 className="font-display font-bold text-xl text-primary mt-1.5">
                    Curated Kitchen Collections
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-all duration-200 focus:outline-none"
                  aria-label="Close catalog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Gallery Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-12">
                {KITCHEN_STYLES.map((style: KitchenStyle, idx: number) => (
                  <motion.section
                    key={style.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="space-y-6 pb-10 border-b border-stone-100 last:border-0 last:pb-0"
                  >
                    {/* Image with subtle hover parallax scaling */}
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={style.image}
                        alt={style.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
                        <div>
                          <h4 className="text-white font-display font-bold text-xl">{style.name}</h4>
                          <p className="text-white/80 text-xs mt-1 font-medium italic">{style.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Style description */}
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {style.description}
                    </p>

                    {/* Features checklist */}
                    <div>
                      <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                        Key Architectural features
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {style.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-stone-700 text-xs">
                            <div className="w-4 h-4 rounded-full bg-[#1E4D3D]/10 flex items-center justify-center shrink-0 text-[#1E4D3D] mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications table */}
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/40 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex gap-2">
                        <Layers className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] font-semibold text-stone-400 uppercase">Core Materials</span>
                          <span className="text-[11px] text-stone-700 font-medium leading-tight">
                            {style.materials.join(', ')}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Settings className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] font-semibold text-stone-400 uppercase">German Hardware</span>
                          <span className="text-[11px] text-stone-700 font-medium leading-tight">
                            {style.hardware}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Hammer className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] font-semibold text-stone-400 uppercase">Structure Class</span>
                          <span className="text-[11px] text-stone-700 font-medium leading-tight">
                            18mm Moisture-Proof Ply
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Select style and start booking CTA */}
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => onSelectStyle(style.id)}
                        className="group flex items-center gap-2 text-xs font-semibold text-[#1E4D3D] hover:text-accent transition-colors py-2"
                      >
                        <span>Choose {style.name} Style & Design</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Footer Banner */}
              <div className="p-6 border-t border-stone-100 bg-stone-50 text-center shrink-0">
                <p className="text-xs text-stone-500">
                  Can’t decide on a style? Our senior designer will customize an entirely new hybrid style for you.
                </p>
                <button
                  onClick={() => onSelectStyle('')}
                  className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white hover:bg-primary-light hover:scale-[1.03] active:scale-[0.98] font-medium rounded-[14px] text-xs shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <span>Request Custom Bespoke Design</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

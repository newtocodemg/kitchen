import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  style: string;
  city: string;
  image: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Scandinavian Oak',
    style: 'L-Shaped Modular',
    city: 'Bangalore',
    image: '/images/hero.jpg',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g-2',
    title: 'Midnight Minimalist',
    style: 'Island Layout',
    city: 'Mumbai',
    image: '/images/obsidian.jpg',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-3',
    title: 'Emerald Brass Opulence',
    style: 'U-Shaped Cozy',
    city: 'Delhi NCR',
    image: '/images/japandi.jpg',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'g-4',
    title: 'Contemporary Glasshouse',
    style: 'Open Studio',
    city: 'Pune',
    image: '/images/parallel.jpg',
    aspect: 'aspect-[2/3]'
  },
  {
    id: 'g-5',
    title: 'Charcoal Matte Professional',
    style: 'Parallel Galley',
    city: 'Hyderabad',
    image: '/images/cozy-family.jpg',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g-6',
    title: 'The Calacatta Grand',
    style: 'Island Layout',
    city: 'Chennai',
    image: '/images/minimal-white.jpg',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-7',
    title: 'Concrete Brutalist Loft',
    style: 'Contemporary Modern',
    city: 'Bangalore',
    image: '/images/l-shape.jpg',
    aspect: 'aspect-[2/3]'
  },
  {
    id: 'g-8',
    title: 'Warm Marble & Walnut',
    style: 'Island Layout',
    city: 'Kolkata',
    image: '/images/u-shape.jpg',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'g-9',
    title: 'Bright Cream Lacquer',
    style: 'L-Shaped Modular',
    city: 'Mumbai',
    image: '/images/kitchen-after.jpg',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g-10',
    title: 'Sophisticated Matte Handleless',
    style: 'U-Shaped Cozy',
    city: 'Delhi NCR',
    image: '/images/hero.jpg',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-11',
    title: 'Penthouse Panoramic View',
    style: 'Island Layout',
    city: 'Hyderabad',
    image: '/images/obsidian.jpg',
    aspect: 'aspect-[2/3]'
  },
  {
    id: 'g-12',
    title: 'Ivory & Champagne Chic',
    style: 'Contemporary Modern',
    city: 'Pune',
    image: '/images/japandi.jpg',
    aspect: 'aspect-[3/4]'
  }
];

export default function InspirationGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Keyboard navigation support
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev === null ? null : (prev + 1) % GALLERY_ITEMS.length));
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-[#FAF8F5] relative overflow-hidden z-10 border-t border-stone-200/40">
      
      {/* Elegantly placed blurred decorative radial gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-accent/25 animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-secondary/20 animate-pulse pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex justify-center">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              GALLERY
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Explore Beautiful Kitchen Inspirations
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
            Browse a curated collection of premium modular kitchens designed for different lifestyles and home sizes.
          </p>
        </div>

        {/* MASONRY GRID SYSTEM */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => setActiveIdx(index)}
              className="break-inside-avoid relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-xl group bg-white border border-stone-100 cursor-pointer"
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-stone-100`}>
                {/* Lazy loading images */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Elegant radial/linear gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Content revealed on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-semibold mb-1">
                    {item.style}
                  </span>
                  <h3 className="font-display font-bold text-lg leading-tight text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-xs mb-3">
                    {item.city}
                  </p>
                  <span className="text-xs font-semibold flex items-center gap-1.5 text-accent hover:text-accent-light self-start">
                    View Full Image <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation - Left */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx((prev) => (prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length));
              }}
              className="absolute left-4 sm:left-6 p-3.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Main Lightbox Content Area */}
            <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center">
              <motion.img
                key={GALLERY_ITEMS[activeIdx].image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                src={GALLERY_ITEMS[activeIdx].image}
                alt={GALLERY_ITEMS[activeIdx].title}
                className="max-w-full max-h-[70vh] rounded-[24px] shadow-2xl border border-white/10 object-contain"
              />

              {/* Lightbox Meta Details */}
              <div className="mt-4 text-center text-white space-y-1 px-4">
                <span className="text-[10px] tracking-wider uppercase text-accent font-bold">
                  {GALLERY_ITEMS[activeIdx].style}
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                  {GALLERY_ITEMS[activeIdx].title}
                </h4>
                <p className="text-stone-400 text-xs sm:text-sm">
                  {GALLERY_ITEMS[activeIdx].city} • <span className="text-accent">{activeIdx + 1} of {GALLERY_ITEMS.length}</span>
                </p>
              </div>
            </div>

            {/* Navigation - Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx((prev) => (prev === null ? null : (prev + 1) % GALLERY_ITEMS.length));
              }}
              className="absolute right-4 sm:right-6 p-3.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Next Image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

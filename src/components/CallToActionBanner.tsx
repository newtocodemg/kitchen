import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, ChevronRight, Sparkles, Star } from 'lucide-react';

interface CallToActionBannerProps {
  onOpenConsultation: () => void;
  onOpenProjects: () => void;
}

export default function CallToActionBanner({ onOpenConsultation, onOpenProjects }: CallToActionBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom parallax scroll mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[550px] sm:h-[620px] w-full overflow-hidden flex items-center justify-center relative z-10"
    >
      
      {/* PARALLAX BACKGROUND */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <img 
          src="/src/assets/images/luxury_kitchen_hero_1783190169401.jpg" 
          alt="Premium luxury modular kitchen island" 
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none scale-105"
        />
        {/* Soft elegant blur */}
        <div className="absolute inset-0 bg-stone-950/75 backdrop-blur-[2px]" />
      </motion.div>

      {/* FLOATING DECORATIVE ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Particle 1 */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[10%] w-12 h-12 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-md hidden sm:block"
        />
        {/* Particle 2 */}
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute bottom-[20%] right-[12%] w-16 h-16 rounded-[24px] bg-accent/5 border border-accent/15 backdrop-blur-md hidden sm:block"
        />
        {/* Particle 3 */}
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute top-[40%] right-[25%] w-3 h-3 rounded-full bg-accent"
        />
      </div>

      {/* LUXURY COPY CONTAINER */}
      <motion.div 
        style={{ y: contentY }}
        className="relative max-w-4xl mx-auto px-6 text-center text-white z-20 space-y-8"
      >
        {/* Badge */}
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/25 px-4.5 py-2 rounded-[14px] text-xs font-semibold text-accent shadow-lg tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTIMATE YOUR BESPOKE SPACE</span>
          </motion.div>
        </div>

        {/* Headline */}
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
          Ready to Build Your <br />
          <span className="text-accent relative inline-block">
            Dream Kitchen?
            <span className="absolute bottom-1.5 left-0 w-full h-1 bg-accent/30 rounded-full" />
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium max-w-[65ch]">
          Book a free consultation today and let our designers create a kitchen tailored just for you.
        </p>

        {/* CTA Button layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-accent text-primary-dark hover:bg-white hover:text-primary hover:scale-[1.03] transition-all duration-300 font-bold text-sm tracking-wide rounded-[14px] flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:shadow-2xl"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span>Book Free Consultation</span>
          </button>
          
          <button
            onClick={onOpenProjects}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 hover:scale-[1.03] transition-all duration-300 font-semibold text-sm rounded-[14px] flex items-center justify-center gap-1.5 cursor-pointer text-white"
          >
            <span>View More Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Extra Rating check block */}
        <div className="flex items-center justify-center gap-2 pt-6 text-[11px] text-stone-300 font-medium">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <span>Included: 3D Layout, Site Visit, Material Quotation</span>
        </div>

      </motion.div>

    </section>
  );
}

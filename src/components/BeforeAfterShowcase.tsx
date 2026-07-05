import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Archive, Lightbulb, ArrowRight } from 'lucide-react';

interface BeforeAfterShowcaseProps {
  onOpenConsultation: () => void;
}

export default function BeforeAfterShowcase({ onOpenConsultation }: BeforeAfterShowcaseProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    isDragging.current = true;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  // Clean up global listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section id="transformation" className="py-28 sm:py-36 bg-[#F7F4EF] border-t border-stone-200/40 relative overflow-hidden z-10">
      {/* Decorative premium elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#B88A5A]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              BEFORE & AFTER
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            See the Difference Great Design Makes
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-[65ch]">
            Drag the handle in the center to compare our client's old cluttered kitchen with the newly completed KitchenSpace transformation.
          </p>
        </div>

        {/* COMPARISON SLIDER STAGE */}
        <div 
          ref={containerRef}
          className="relative aspect-[16/10] md:aspect-[16/9] w-full max-w-4xl mx-auto rounded-[24px] overflow-hidden shadow-2xl border border-stone-200/50 select-none bg-stone-100 group"
        >
          {/* BEFORE IMAGE (Bottom Layer) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/images/kitchen-before.jpg" 
              alt="Cluttered, outdated kitchen before renovation" 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover pointer-events-none transition-transform duration-700"
            />
            {/* "Before" Label */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-[14px] border border-white/10 shadow-md">
              Before Renovation
            </div>
          </div>

          {/* AFTER IMAGE (Top Clipped Layer) */}
          <div 
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* This image needs to retain container size even if its parent is clipped */}
            <div className="absolute inset-0 w-[100vw] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}>
              <img 
                src="/images/kitchen-after.jpg" 
                alt="Beautiful renovated luxury kitchen" 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover pointer-events-none transition-transform duration-700"
              />
              {/* "After" Label */}
              <div className="absolute top-4 left-4 bg-accent/90 text-primary-dark font-sans font-bold text-[11px] uppercase tracking-widest px-3.5 py-1.5 rounded-[14px] shadow-md">
                ✨ After Transformation
              </div>
            </div>
          </div>

          {/* SLIDER HANDLEBAR */}
          <div 
            className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize z-30 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Grab button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-primary rounded-full shadow-2xl flex items-center justify-center border border-stone-200 transition-transform active:scale-95 group">
              <div className="flex gap-1.5 text-stone-600 group-hover:text-primary">
                <span className="font-bold text-xs select-none">◄</span>
                <span className="font-bold text-xs select-none">►</span>
              </div>
            </div>
          </div>

          {/* Subtle instruction helper overlay */}
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-xs text-primary text-[10px] font-bold px-3 py-1 rounded-[14px] pointer-events-none hidden sm:block border border-stone-100">
            ↔️ Click and drag center handle
          </div>
        </div>

        {/* THREE KEY IMPROVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
          
          <div className="bg-white p-6 rounded-[20px] border border-stone-200/40 text-center space-y-3 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-[14px] bg-accent/10 text-accent flex items-center justify-center mx-auto shadow-xs">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-display font-bold text-primary text-base">Better Space Utilization</h3>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-[65ch]">
              Ergonomic golden triangle spacing reduces walking fatigue and simplifies clean-up workflows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-stone-200/40 text-center space-y-3 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-[14px] bg-accent/10 text-accent flex items-center justify-center mx-auto shadow-xs">
              <Archive className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-display font-bold text-primary text-base">Increased Storage Capacity</h3>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-[65ch]">
              Smart pull-outs, tandem pantries, and deep tandem drawers expand storage space by up to 50%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-stone-200/40 text-center space-y-3 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-[14px] bg-accent/10 text-accent flex items-center justify-center mx-auto shadow-xs">
              <Lightbulb className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-display font-bold text-primary text-base">Modern Lighting & Premium Finish</h3>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-[65ch]">
              Recessed warm LED profile strips paired with moisture-proof cabinetry for absolute refinement.
            </p>
          </div>

        </div>

        {/* RE-ESTABLISH VALUE VIA TRANSFORMATION CALL TO ACTION */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-primary text-white font-semibold text-sm rounded-[14px] hover:bg-primary-light hover:scale-[1.03] hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 mx-auto cursor-pointer"
          >
            <span>Transform My Kitchen</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </button>
        </div>

      </div>
    </section>
  );
}

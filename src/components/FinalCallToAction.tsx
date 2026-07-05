import { motion } from 'motion/react';
import { Calendar, Phone, Sparkles, ShieldCheck, Heart } from 'lucide-react';

interface FinalCallToActionProps {
  onOpenConsultation: () => void;
}

export default function FinalCallToAction({ onOpenConsultation }: FinalCallToActionProps) {
  return (
    <section className="relative bg-[#1E4D3D] text-white overflow-hidden py-28 sm:py-36 relative z-10 border-t border-white/10">
      
      {/* LUXURY GEOMETRIC BACKGROUND PATHS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,138,90,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none" />
      
      {/* FLOATING DECORATIVE PARTICLES */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Particle 1 */}
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[8%] w-1.5 h-1.5 rounded-full bg-accent"
        />
        {/* Particle 2 */}
        <motion.div
          animate={{ y: [0, 16, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          className="absolute bottom-[25%] right-[15%] w-2 h-2 rounded-full bg-accent-light"
        />
        {/* Particle 3 */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
          className="absolute top-[50%] right-[8%] w-8 h-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs hidden md:block"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-20">
        
        {/* Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4.5 py-1.5 rounded-[14px] text-[10px] sm:text-xs font-bold text-accent shadow-md tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-light" />
            <span>Premium Space Formulation</span>
          </motion.div>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-white max-w-3xl mx-auto"
        >
          Your Dream Kitchen Is Just <br className="hidden sm:inline" />
          One Conversation Away
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-stone-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed max-w-[65ch]"
        >
          Schedule a free consultation and let our experts design a kitchen that perfectly fits your home and lifestyle. No obligations, just custom design ideas.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Primary consultation button */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-white text-primary-dark hover:text-primary hover:scale-[1.03] transition-all duration-300 font-bold text-sm tracking-wide rounded-[14px] flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-2xl active:scale-[0.98]"
          >
            <Calendar className="w-4.5 h-4.5" />
            <span>Book Free Consultation</span>
          </button>

          {/* Secondary phone support */}
          <a
            href="tel:18001235482"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/45 hover:scale-[1.03] transition-all duration-300 font-semibold text-sm rounded-[14px] flex items-center justify-center gap-2 text-white shadow-xs active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call Our Team</span>
          </a>
        </motion.div>

        {/* Benefits checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 text-[11px] text-stone-300 font-semibold"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>10-Year Cabinet Warranty</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-accent" />
            <span>Over 12,000 Happy Homes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>German High-Tech Manufacturing</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

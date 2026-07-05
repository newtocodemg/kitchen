import { motion } from 'motion/react';
import { Calendar, Phone, Sparkles } from 'lucide-react';

interface FinalLeadGenerationProps {
  onOpenConsultation: () => void;
}

export default function FinalLeadGeneration({ onOpenConsultation }: FinalLeadGenerationProps) {
  return (
    <section id="final-lead-generation" className="relative bg-[#1E4D3D] text-white overflow-hidden py-28 sm:py-36 relative z-10 border-t border-white/10">
      
      {/* LUXURY RADIAL GRADIENTS & FLOATING ABSTRACT ELEMENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,138,90,0.12),transparent_50%)] pointer-events-none" />
      
      {/* Floating blurred ambient gold circles */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"
      />

      {/* Tiny decorative gold dots */}
      <div className="absolute top-12 left-12 w-1.5 h-1.5 rounded-full bg-accent opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-12 w-2 h-2 rounded-full bg-secondary opacity-25 animate-ping" />
      <div className="absolute bottom-16 left-24 w-1 h-1 rounded-full bg-accent opacity-40 animate-pulse" />
      <div className="absolute bottom-12 right-1/3 w-2.5 h-2.5 rounded-full bg-white opacity-10 animate-pulse" />

      {/* Elegant low opacity vector grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        
        {/* UPPER SPARKLE DECORATION */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4.5 py-1.5 rounded-[14px] text-[10px] sm:text-xs font-bold text-accent shadow-md tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-light animate-pulse" />
            <span>Premium Space Formulation</span>
          </motion.div>
        </div>

        {/* HEADINGS */}
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Let's Build a Kitchen <br />
            You'll Love for Years
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto max-w-[65ch]"
          >
            Book your free consultation today and receive a personalized 3D kitchen design from our experts. Turn your vision into custom modular reality.
          </motion.p>
        </div>

        {/* PRIMARY AND SECONDARY ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
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
            <span>Call Now</span>
          </a>
        </motion.div>

        {/* FOOTNOTE INDICATOR */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[11px] text-white/40 uppercase tracking-widest font-bold mt-12"
        >
          ✓ Complimentary Site Measurement & 3D Rendering Proposals Included
        </motion.p>

      </div>

    </section>
  );
}

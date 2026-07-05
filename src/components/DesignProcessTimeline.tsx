import { motion } from 'motion/react';
import { MessageSquare, Ruler, Layers, Sparkles, Cpu, Key } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  description: string;
  icon: any;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Free Consultation',
    description: 'Understand your culinary needs, layout preferences, and space characteristics.',
    icon: MessageSquare
  },
  {
    num: '02',
    title: 'Site Measurement',
    description: 'Our technical experts visit your home for absolute millimetric structural measurements.',
    icon: Ruler
  },
  {
    num: '03',
    title: '3D Design',
    description: 'Visualize your kitchen beforehand via 3D virtual renderings and layouts.',
    icon: Layers
  },
  {
    num: '04',
    title: 'Material Selection',
    description: 'Select final modular cabinet finishes, colors, custom counter slabs, and elite hardware.',
    icon: Sparkles
  },
  {
    num: '05',
    title: 'Manufacturing',
    description: 'Precision-crafted in our automated German-tech factory with flawless calibration.',
    icon: Cpu
  },
  {
    num: '06',
    title: 'Installation & Handover',
    description: 'Professional white-glove installation with rigorous quality audits and final keys handover.',
    icon: Key
  }
];

export default function DesignProcessTimeline() {
  return (
    <section id="process-timeline" className="py-28 sm:py-36 px-6 max-w-[1400px] mx-auto relative z-10 border-t border-stone-200/40 overflow-hidden">
      
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <div className="flex justify-center">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
            HOW WE WORK
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
          A Simple Process From Vision to Reality
        </h2>
        <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
          We make designing your dream kitchen effortless with a transparent, step-by-step approach.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative">
        
        {/* DESKTOP HORIZONTAL TIMELINE (Hidden on mobile) */}
        <div className="hidden lg:block relative pb-8">
          
          {/* Main timeline connecting horizontal line */}
          <div className="absolute top-[52px] left-[6%] right-[6%] h-0.5 bg-stone-200/60 z-0">
            {/* Animated line loader */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="h-full bg-accent"
            />
          </div>

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.num}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                    })
                  }}
                  className="flex flex-col items-center text-center space-y-5 px-2 group"
                >
                  {/* Outer circle layout */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Number label circle */}
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-stone-200 shadow-sm flex items-center justify-center group-hover:border-accent group-hover:shadow-md transition-all duration-300 relative z-10">
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-[10px] font-mono text-stone-400 font-bold group-hover:text-accent transition-colors duration-300">
                          {step.num}
                        </span>
                        <IconComp className="w-5 h-5 text-stone-700 mt-1 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Outer ambient glow on hover */}
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-accent/0 group-hover:bg-accent/5 group-hover:scale-110 transition-all duration-300 z-0" />
                  </div>

                  {/* Descriptions block */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-sm sm:text-base text-primary group-hover:text-secondary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed max-w-[170px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* MOBILE VERTICAL TIMELINE (Hidden on desktop) */}
        <div className="lg:hidden relative pl-8 sm:pl-12 max-w-xl mx-auto space-y-12">
          
          {/* Main vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-[19px] sm:left-[27px] w-0.5 bg-stone-200 z-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-accent origin-top"
            />
          </div>

          {STEPS.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Number circle */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-accent transition-colors relative z-10">
                  <div className="flex flex-col items-center">
                    <span className="text-[8px] sm:text-[10px] font-mono text-stone-400 font-bold group-hover:text-accent">
                      {step.num}
                    </span>
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-600 group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Description content */}
                <div className="space-y-1.5 pt-1.5">
                  <h3 className="font-display font-bold text-base text-primary group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

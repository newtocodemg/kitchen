import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Timer, Gem, UserCheck, CheckCircle2 } from 'lucide-react';

interface PromiseItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  badge: string;
  gradient: string;
}

const PROMISES: PromiseItem[] = [
  {
    icon: ShieldCheck,
    title: 'Transparent Pricing',
    desc: 'No hidden costs, sudden markups, or design overheads. Your initial detailed proposal is locked in from day one.',
    badge: '100% FIXED QUOTE',
    gradient: 'from-amber-500/10 to-transparent'
  },
  {
    icon: Timer,
    title: 'On-Time Delivery',
    desc: 'Projects completed exactly as committed. If we exceed our agreed timelines, we pay you back for every day of delay.',
    badge: '45-DAY GUARANTEE',
    gradient: 'from-emerald-500/10 to-transparent'
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    desc: 'Strictly quality-controlled boards, hinges, and countertops sourced from top-tier European and Indian certified brands.',
    badge: '10-YEAR WARRANTY',
    gradient: 'from-blue-500/10 to-transparent'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Project Manager',
    desc: 'A single point of professional contact from initial 3D formulation to final site installation and polishing.',
    badge: 'SINGLE CONTACT CARE',
    gradient: 'from-rose-500/10 to-transparent'
  }
];

export default function OurPromise() {
  return (
    <section id="promise" className="py-28 sm:py-36 bg-white relative z-10 overflow-hidden border-t border-stone-200/40">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex justify-center">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              OUR PROMISE
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Our 4-Way Luxury Promise
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
            We elevate your experience by removing traditional site integration anxieties. Here is what we guarantee on every build.
          </p>
        </div>

        {/* 4 PREMIUM HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROMISES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#FAF8F5] border border-stone-100 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:shadow-xl hover:border-accent/15 relative overflow-hidden group"
              >
                {/* Subtle top right diagonal color overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} blur-2xl opacity-70 pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                {/* Elegant Circle Icon Wrapper */}
                <div className="w-14 h-14 rounded-[20px] bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Content Details */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-stone-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-bold text-secondary uppercase bg-secondary/10 px-2.5 py-1 rounded-[8px] tracking-wider shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  
                  <p className="text-stone-500 text-sm leading-relaxed max-w-[65ch]">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-accent group-hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Guaranteed Assurance</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

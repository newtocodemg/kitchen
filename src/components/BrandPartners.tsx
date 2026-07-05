import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface Brand {
  name: string;
  specialty: string;
  founded: string;
  character: string;
  description: string;
}

const BRANDS: Brand[] = [
  { name: 'Häfele', specialty: 'German Fittings & Systems', founded: '1923', character: '🇩🇪 H', description: 'World-renowned architectural hardware, electronic locking, and luxury sliding systems.' },
  { name: 'Blum', specialty: 'Austrian Motion Mechanism', founded: '1952', character: '🇦🇹 B', description: 'Pioneers of fluid soft-close lifters, sleek runners, and intelligent hinge systems.' },
  { name: 'Hettich', specialty: 'German Smart Furniture Technology', founded: '1888', character: '🇩🇪 He', description: 'Elite drawer systems, silent-system runners, and folding door fittings.' },
  { name: 'Faber', specialty: 'Italian Luxury Hoods & Hobs', founded: '1955', character: '🇮🇹 F', description: 'Advanced noise-canceling kitchen chimneys, induction cookers, and built-in hobs.' },
  { name: 'Greenlam', specialty: 'Premium Claddings & Surfaces', founded: '1993', character: '🇮🇳 G', description: 'Elite anti-fingerprint laminates, wood veneers, and high-pressure solids.' },
  { name: 'CenturyPly', specialty: 'Boiling-Water-Proof Plywood', founded: '1986', character: '🇮🇳 C', description: 'Architectural-grade premium borer-proof veneers and boiling-water-proof boards.' },
  { name: 'Merino', specialty: 'Specialized Decorative Panels', founded: '1974', character: '🇮🇳 M', description: 'Specialist anti-microbial acrylic panels, premium facades, and glossy boards.' },
  { name: 'Ebco', specialty: 'High-Utility Hardware Modules', founded: '1963', character: '🇮🇳 E', description: 'Smart pulling spice-racks, modular corner systems, and under-cabinet LED arrays.' }
];

export default function BrandPartners() {
  // We duplicate the list to ensure seamless looping in the marquee
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section id="brands" className="py-28 sm:py-36 bg-[#F7F4EF]/50 relative z-10 overflow-hidden border-t border-stone-200/40">
      
      {/* Subtle details */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-20 w-3 h-3 rounded-full bg-secondary/10 animate-ping pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex justify-center">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              TRUSTED BRANDS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            We Partner With Industry Leaders
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
            Every cabinet box, hinge, surface laminate, and smart chimney we integrate is sourced from elite manufacturers carrying lifetime warranty portfolios.
          </p>
        </div>

        {/* LOGO MARQUEE (INFINITE LOOP CAROUSEL) */}
        <div className="relative w-full overflow-hidden py-4 mb-16 mask-linear">
          {/* Faded edges overlay for luxury look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 32
            }}
          >
            {marqueeItems.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="inline-flex items-center gap-4 bg-white border border-stone-200/40 px-8 py-5 rounded-[20px] shadow-xs cursor-pointer select-none group hover:border-accent/40 transition-all duration-300 shrink-0"
              >
                <div className="w-10 h-10 rounded-[12px] bg-stone-100 font-display font-bold text-stone-500 flex items-center justify-center text-sm group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                  {brand.character}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-stone-700 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">
                    {brand.specialty.split(' ')[0]}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DETAILED BRANDS SHOWCASE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-stone-200/40 p-6 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-[10px] bg-stone-100 font-display font-bold text-stone-500 flex items-center justify-center text-xs group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {brand.character.slice(-2)}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-stone-800 group-hover:text-primary transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-[10px] text-stone-400 font-medium">Est. {brand.founded}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-accent transition-colors" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest block">
                    {brand.specialty}
                  </span>
                  <p className="text-stone-500 text-xs leading-relaxed max-w-[65ch]">
                    {brand.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-50 flex items-center gap-1 text-[10px] font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Authorized Platinum Integrator</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Layout, Maximize2, ArrowRight, X, Check, Award, Cpu, ShieldCheck } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  area: string;
  style: string;
  image: string;
  specs: {
    material: string;
    hardware: string;
    lighting: string;
    finishes: string;
    highlights: string[];
  };
}

const PROJECTS: Project[] = [
  {
    id: 'modern-villa',
    title: 'Modern Villa Kitchen',
    location: 'Gurugram, Haryana',
    type: 'L-Shaped Modular Layout',
    area: '180 sq. ft.',
    style: 'Walnut & Premium Marble',
    image: '/src/assets/images/luxury_kitchen_l_shape_1783190565020.jpg',
    specs: {
      material: 'Imported Walnut Veneer & Italian Carrara',
      hardware: 'Blum Legrabox Tip-On Aventos HF',
      lighting: 'Recessed 3000K warm LED continuous profiles',
      finishes: 'Anti-fingerprint ultra-matte satin sealer',
      highlights: [
        'Waterfall quartz counter extension',
        'Invisible mechanical handleless touch cabinets',
        'Built-in premium pantry tower unit'
      ]
    }
  },
  {
    id: 'scandinavian-apt',
    title: 'Scandinavian Apartment',
    location: 'Indiranagar, Bengaluru',
    type: 'Island Modular Layout',
    area: '150 sq. ft.',
    style: 'Blonde Oak & Alpine White',
    image: '/src/assets/images/luxury_kitchen_hero_1783190169401.jpg',
    specs: {
      material: 'Sustainably sourced Blonde Oak & Acrylic white shutters',
      hardware: 'Hettich Sensys soft-close with dampening',
      lighting: 'Integrated automatic warm drawer illumination',
      finishes: 'Natural grain matte polyurethane finish',
      highlights: [
        'Central interactive food-prep island',
        'Solid European Oak breakfast dining bar',
        'Concealed double appliance garage'
      ]
    }
  },
  {
    id: 'luxury-penthouse',
    title: 'Luxury Penthouse Kitchen',
    location: 'Worli, Mumbai',
    type: 'Parallel Galley Layout',
    area: '220 sq. ft.',
    style: 'Charcoal Satin & Nero Marquina',
    image: '/src/assets/images/luxury_kitchen_obsidian_1783190201969.jpg',
    specs: {
      material: 'E1 moisture-resistant core boards in deep obsidian charcoal',
      hardware: 'Grass Nova Pro Scala double-wall drawers',
      lighting: 'Motion-activated under-counter warm LED ambient glow',
      finishes: 'Premium matte lacquer with high scratch-resistance',
      highlights: [
        'Book-matched Nero Marquina marble slab island',
        'Solid hand-brushed custom brass profile handles',
        'Fluted timber accent backsplashes'
      ]
    }
  },
  {
    id: 'elegant-family',
    title: 'Elegant Family Kitchen',
    location: 'Alipore, Kolkata',
    type: 'U-Shaped Cozy Layout',
    area: '165 sq. ft.',
    style: 'Warm Walnut & Sand Cashmere',
    image: '/src/assets/images/luxury_kitchen_cozy_family_1783190798287.jpg',
    specs: {
      material: 'Premium warm American Walnut timber & matte Cashmere laminate',
      hardware: 'Blum Tandembox antaro deep storage systems',
      lighting: 'Dimmable smart-app LED workspace stripes',
      finishes: 'High-pressure anti-scratch laminate',
      highlights: [
        'Corner-optimizing magic carousel storage',
        'Spacious quartz island breakfast counter',
        'Ergonomic waste sorting pull-out system'
      ]
    }
  },
  {
    id: 'contemporary-urban',
    title: 'Contemporary Urban Home',
    location: 'Jubilee Hills, Hyderabad',
    type: 'Open Parallel Concept',
    area: '135 sq. ft.',
    style: 'Matte Graphite & Natural Ash',
    image: '/src/assets/images/luxury_kitchen_parallel_1783190591738.jpg',
    specs: {
      material: 'Eco-certified high density fibreboards in graphite gray',
      hardware: 'Hettich InnoTech Atira drawer channels',
      lighting: 'Focused shadowless task illumination below wall cabinets',
      finishes: 'Super-matte thermal-healing luxury foil',
      highlights: [
        'Seamless vertical Gola profile handle systems',
        'Integrated premium pull-out spice rack columns',
        'Sleek floating shelf design with indirect light'
      ]
    }
  },
  {
    id: 'minimal-white',
    title: 'Minimal White Residence',
    location: 'Whitefield, Bengaluru',
    type: 'Straight Layout with Island',
    area: '140 sq. ft.',
    style: 'Ultra-Minimal Gloss White & Quartz',
    image: '/src/assets/images/luxury_kitchen_minimal_white_1783190812144.jpg',
    specs: {
      material: 'Seamless white lacquer high-gloss panels & snow quartz',
      hardware: 'Blum Servo-Drive electric touch opening',
      lighting: 'Ambient baseboard kick-strip cool white light lines',
      finishes: 'High-gloss mirror-polished acrylic sealer',
      highlights: [
        'Retractable sliding doors concealing active work area',
        'Solid white pure quartz waterfall countertop',
        'Fully integrated minimalist appliance facades'
      ]
    }
  }
];

interface FeaturedProjectsProps {
  onOpenConsultation: (styleId?: string) => void;
}

export default function FeaturedProjects({ onOpenConsultation }: FeaturedProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 sm:py-36 px-6 bg-[#FAF8F5] relative overflow-hidden z-10 border-t border-stone-200/40">
      {/* Decorative premium elements */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#B88A5A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#1E4D3D]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto space-y-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-[#B88A5A]/10 px-4 py-2 rounded-[14px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A] animate-pulse" />
              OUR RECENT PROJECTS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Real Homes. Beautiful Transformations.
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-[65ch] mx-auto">
            Take a look at some of our recently completed modular kitchens, each uniquely designed to reflect our clients' lifestyles and spaces.
          </p>
        </div>

        {/* PORTFOLIO MASONRY/GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-[20px] overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-xl hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image with zoom effect */}
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Premium Location Pin badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-[14px] text-[11px] font-bold text-primary tracking-wide border border-stone-100 flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3 h-3 text-secondary" />
                    <span>{project.location}</span>
                  </div>

                  {/* Overlaid details on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <p className="text-accent text-[11px] font-bold uppercase tracking-widest mb-1">{project.style}</p>
                    <p className="text-xs text-stone-200 leading-relaxed mb-3">Approx. Area: {project.area}</p>
                    <span className="text-xs font-semibold underline underline-offset-4 text-white hover:text-accent flex items-center gap-1.5 transition-colors">
                      Click to view specs
                    </span>
                  </div>
                </div>

                {/* Text content details */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium flex items-center gap-1.5 mt-1">
                        <Layout className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{project.type}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono bg-stone-100 text-stone-600 px-2.5 py-1 rounded-[14px] shrink-0">
                      {project.area}
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 leading-relaxed max-w-[65ch]">
                    Tailored design featuring {project.style.toLowerCase()} elements, optimized fully for daily culinary activity and entertainment.
                  </p>
                </div>
              </div>

              {/* Project Card Footer CTA */}
              <div className="p-6 pt-0 border-t border-stone-50 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-stone-500 hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Project Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAILED SPECIFICATIONS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                className="bg-white max-w-2xl w-full rounded-[24px] overflow-hidden shadow-2xl border border-stone-100 z-50 max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image banner */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 p-2.5 rounded-[14px] text-white transition-all border border-white/20 focus:outline-none"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <span className="text-[10px] bg-accent/90 text-primary-dark font-bold tracking-widest uppercase px-2.5 py-1 rounded-[14px]">
                      Project Specifications
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Specifications content */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-stone-100 text-stone-600">
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Location</span>
                      <span className="font-semibold text-primary">{selectedProject.location}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Area Dimension</span>
                      <span className="font-semibold text-primary">{selectedProject.area}</span>
                    </div>
                    <div className="space-y-1 mt-2">
                      <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Layout Type</span>
                      <span className="font-semibold text-primary">{selectedProject.type}</span>
                    </div>
                    <div className="space-y-1 mt-2">
                      <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Style Palette</span>
                      <span className="font-semibold text-secondary">{selectedProject.style}</span>
                    </div>
                  </div>

                  {/* Built specifications */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-primary text-base">Architectural Details</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary font-medium">Cabinet Material: </strong>
                          <span className="text-stone-600">{selectedProject.specs.material}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Cpu className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary font-medium">Premium Hardware: </strong>
                          <span className="text-stone-600">{selectedProject.specs.hardware}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary font-medium">Lighting Layout: </strong>
                          <span className="text-stone-600">{selectedProject.specs.lighting}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Maximize2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary font-medium">Surfaces & Finishes: </strong>
                          <span className="text-stone-600">{selectedProject.specs.finishes}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-display font-bold text-primary text-base">Key Design Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.specs.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-stone-50 p-3 rounded-xl border border-stone-100">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-xs text-stone-600 font-medium">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA footer */}
                <div className="p-6 bg-stone-50 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <div className="text-center sm:text-left">
                    <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Dreaming of a similar layout?</span>
                    <span className="text-xs text-stone-600 font-medium">Our designers can tailormake it for your home.</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation('scandinavian-oak');
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-primary text-white hover:bg-primary-light font-bold text-xs tracking-wider uppercase rounded-[14px] transition-all cursor-pointer shadow-sm text-center"
                  >
                    Discuss This Layout
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  badge: string;
  text: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ananya-rohan',
    name: 'Ananya & Rohan',
    city: 'Gurugram',
    rating: 5,
    badge: 'L-Shaped Modular Kitchen',
    image: '/src/assets/images/modern_indian_couple_avatar_1783191113840.jpg',
    text: 'KitchenSpace Studio completely turned our dark, cramped kitchen into an open, warm family masterpiece. We went with their L-shaped walnut layout combined with premium Carrara marble, and the results are absolute perfection. Their design advisors took the time to understand our exact cooking habits, establishing a seamless golden-triangle workflow that has reduced meal prep stress immensely. From the automatic under-cabinet LED profile lighting to the smooth Blum drawer mechanisms, the level of European craft is visible in every single corner. They completed the technical installation within the promised timeframe, showing exemplary professionalism. We cannot recommend their bespoke design service enough to anyone seeking quality.'
  },
  {
    id: 'meera-sharma',
    name: 'Meera Sharma',
    city: 'Chandigarh',
    rating: 5,
    badge: 'Island Modular Kitchen',
    image: '/src/assets/images/indian_woman_headshot_meera_1783191128681.jpg',
    text: 'As someone who hosts dinners frequently, having a kitchen that is both highly functional and visually breathtaking was my main goal. KitchenSpace Studio exceeded all my hopes with their scandinavian blonde oak island kitchen. The interactive cooking island with the solid integrated dining bar has turned into the favorite social hub of our home. Every drawer and corner carousel storage pull-out functions with whispering silence, and the dual concealed appliance garage keeps our counters entirely clutter-free. The entire journey from site measurement to final keys handover was perfectly transparent, and the final look is an absolute masterpiece of minimalist elegance.'
  },
  {
    id: 'rajiv-malhotra',
    name: 'Rajiv Malhotra',
    city: 'Delhi',
    rating: 5,
    badge: 'Parallel Galley Kitchen',
    image: '/src/assets/images/indian_man_headshot_rajiv_1783191141679.jpg',
    text: 'I wanted a highly technical, bold contemporary parallel kitchen for my penthouse in Delhi, and the team at KitchenSpace delivered a magnificent charcoal satin Nero Marquina layout. Their execution of Gola profile handleless cabinetry combined with solid hand-brushed custom brass profiles is incredibly sophisticated. The Nero Marquina book-matched marble island slab is a conversation starter for everyone who visits. Beyond aesthetics, the moisture-proof E1 core boards feel exceptionally sturdy, and the motion-activated baseboard lighting makes nighttime visits extremely elegant. It is a world-class luxury space that matches the standard of top-tier international kitchen brands.'
  },
  {
    id: 'priya-kapoor',
    name: 'Priya Kapoor',
    city: 'Mohali',
    rating: 5,
    badge: 'U-Shaped Cozy Kitchen',
    image: '/src/assets/images/indian_woman_headshot_priya_1783191158164.jpg',
    text: 'Our family is deeply passionate about authentic Indian cooking, which involves rich spices and heavy culinary usage. KitchenSpace Studio custom-designed a stunning, highly resilient U-Shaped warm walnut and sand cashmere kitchen that fits our daily routine beautifully. The integrated high-power chimney and specialized multi-tier spice drawers are highly ergonomic, while the magic corner carousels turned previously dead cabinet space into incredibly valuable storage. We are amazed at how they expanded our active storage capacity by nearly fifty percent while keeping the entire kitchen feeling so bright, modern, and open. The durable anti-scratch laminate has been completely painless to maintain.'
  },
  {
    id: 'karan-verma',
    name: 'Karan Verma',
    city: 'Jaipur',
    rating: 5,
    badge: 'Open Parallel Concept',
    image: '/src/assets/images/indian_man_headshot_karan_1783191169757.jpg',
    text: 'The open parallel kitchen concept they implemented for our heritage Jaipur home is an absolute masterclass in architectural spacing. By pairing matte graphite cabinetry with natural ash highlights, they created an eye-catching, high-contrast transitional design that bridges old-world charm with contemporary luxury. The vertical handleless profiles look sleek and modern, while the specialized pull-out pantry towers provide incredible organization for our spices and pantry essentials. The site technicians were meticulously careful with our walls and kept the space clean throughout the entire process. The customer support team was incredibly responsive and professional.'
  },
  {
    id: 'neha-arora',
    name: 'Neha Arora',
    city: 'Noida',
    rating: 5,
    badge: 'Straight Kitchen with Island',
    image: '/src/assets/images/indian_woman_headshot_neha_1783191182325.jpg',
    text: 'I am an extreme minimalist, so for my Noida apartment, I wanted an ultra-clean, pure white workspace. The minimalist white residence layout with the high-gloss mirror-polished acrylic cabinets and snow quartz countertops is a flawless execution of that vision. The motorized electric touch drawers operate with absolute ease, and the retractable pocket doors that conceal my active appliances are a brilliant space-saving innovation. It feels incredibly premium, spacious, and airy. The entire installation was handled with white-glove precision. Every time I walk in, it feels like stepping into a modern design museum.'
  }
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive screen size listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay function
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex, isMobile]);

  const maxIndex = isMobile ? TESTIMONIALS.length - 1 : TESTIMONIALS.length - 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [TESTIMONIALS[currentIndex]];
    }
    // Desktop returns 3 items
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % TESTIMONIALS.length;
      items.push(TESTIMONIALS[idx]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-[#FAF8F5] relative overflow-hidden z-10 border-t border-stone-200/40">
      {/* Decorative premium elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B88A5A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1E4D3D]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
              Loved by Homeowners Across India
            </h2>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-[65ch]">
              Every kitchen tells a story of morning coffees, family lunches, and late night discussions. Here's what our happy clients have to say about working with KitchenSpace Studio.
            </p>
          </div>

          {/* MANUAL NAVIGATION CONTROLS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                handlePrev();
                startAutoplay();
              }}
              className="p-3.5 rounded-[14px] border border-stone-200 bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xs hover:shadow-md hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-secondary/50 cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                handleNext();
                startAutoplay();
              }}
              className="p-3.5 rounded-[14px] border border-stone-200 bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xs hover:shadow-md hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-secondary/50 cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative overflow-hidden min-h-[400px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, y: -30, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-8 rounded-[20px] border border-stone-200/50 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group h-full relative"
                >
                  <div className="space-y-6">
                    {/* Header: Photo & Name */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-stone-100 shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-primary text-base group-hover:text-secondary transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-stone-400 font-medium">{testimonial.city}, India</p>
                      </div>
                    </div>

                    {/* Stars and layout tag */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex text-amber-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-secondary bg-secondary/5 border border-secondary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {testimonial.badge}
                      </span>
                    </div>

                    {/* Testimonial body text */}
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed italic relative z-10 font-sans max-w-[65ch]">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Decorative background quote icon */}
                  <Quote className="absolute right-6 bottom-6 w-12 h-12 text-stone-100 group-hover:text-stone-200/40 transition-colors z-0" />

                  {/* Rating check decoration */}
                  <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-medium">
                    <span>Verified Project Done in 2026</span>
                    <span className="flex items-center gap-1 group-hover:text-primary transition-colors cursor-pointer">
                      View Blueprint <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center gap-2 pt-4">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                startAutoplay();
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'w-8 bg-secondary' : 'w-2.5 bg-stone-300/70 hover:bg-stone-400'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Cpu, 
  Settings, 
  HeartHandshake, 
  Star, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Check, 
  Calendar, 
  Inbox, 
  Eye, 
  Database,
  ArrowDown,
  X,
  Palette,
  Wrench,
  LayoutGrid,
  Hammer,
  ShieldCheck
} from 'lucide-react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import ConsultationModal from './components/ConsultationModal';
import DesignShowcaseDrawer from './components/DesignShowcaseDrawer';
import FeaturedProjects from './components/FeaturedProjects';
import BeforeAfterShowcase from './components/BeforeAfterShowcase';
import DesignProcessTimeline from './components/DesignProcessTimeline';
import CallToActionBanner from './components/CallToActionBanner';
import CustomerTestimonials from './components/CustomerTestimonials';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import ContactConsultation from './components/ContactConsultation';
import FinalCallToAction from './components/FinalCallToAction';
import Footer from './components/Footer';
import GlobalEnhancements from './components/GlobalEnhancements';
import InspirationGallery from './components/InspirationGallery';
import EstimateYourKitchen from './components/EstimateYourKitchen';
import OurPromise from './components/OurPromise';
import BrandPartners from './components/BrandPartners';
import FinalLeadGeneration from './components/FinalLeadGeneration';
import VideoStories from './components/VideoStories';
import { KITCHEN_STYLES, PROCESS_STEPS } from './data';
import { ConsultationLead } from './types';

// Map icons for dynamic resolution
const iconMap: { [key: string]: any } = {
  Award: Award,
  Cpu: Cpu,
  Settings: Settings,
  HeartHandshake: HeartHandshake,
  Palette: Palette,
  Wrench: Wrench,
  LayoutGrid: LayoutGrid,
  Hammer: Hammer,
  ShieldCheck: ShieldCheck
};

const WHY_CHOOSE_FEATURES = [
  {
    id: 'custom-designs',
    title: 'Custom Designs',
    description: 'Every kitchen is tailored to your lifestyle, cooking habits, and available space.',
    iconName: 'Palette',
  },
  {
    id: 'german-hardware',
    title: 'German Hardware',
    description: 'Premium hinges, channels, and accessories for long-lasting performance.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'factory-precision',
    title: 'Factory Precision',
    description: 'Manufactured using advanced CNC technology for perfect finishes.',
    iconName: 'Cpu',
  },
  {
    id: 'smart-storage',
    title: 'Smart Storage',
    description: 'Corner units, pull-out baskets, tall pantry systems, and hidden organizers.',
    iconName: 'LayoutGrid',
  },
  {
    id: 'expert-installation',
    title: 'Expert Installation',
    description: 'Professional installation with attention to every detail.',
    iconName: 'Hammer',
  },
  {
    id: 'lifetime-support',
    title: 'Lifetime Support',
    description: 'Reliable after-sales assistance and maintenance support.',
    iconName: 'HeartHandshake',
  },
];

const KITCHEN_COLLECTIONS = [
  {
    id: 'l-shaped',
    title: 'L-Shaped Kitchen',
    description: 'Perfect for compact and medium-sized homes.',
    image: '/images/l-shape.jpg',
  },
  {
    id: 'u-shaped',
    title: 'U-Shaped Kitchen',
    description: 'Maximum storage with efficient workflow.',
    image: '/images/u-shape.jpg',
  },
  {
    id: 'parallel',
    title: 'Parallel Kitchen',
    description: 'Ideal for modern apartments and narrow spaces.',
    image: '/images/parallel.jpg',
  },
  {
    id: 'island',
    title: 'Island Kitchen',
    description: 'Luxury open-concept kitchen with central island.',
    image: '/images/hero.jpg',
  },
  {
    id: 'open',
    title: 'Open Kitchen',
    description: 'Seamlessly connects cooking and living spaces.',
    image: '/images/japandi.jpg',
  },
  {
    id: 'contemporary-luxury',
    title: 'Contemporary Luxury',
    description: 'Premium finishes with clean minimalist aesthetics.',
    image: '/images/obsidian.jpg',
  },
];

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDesignsOpen, setIsDesignsOpen] = useState(false);
  const [selectedStyleId, setSelectedStyleId] = useState<string>('scandinavian-oak');
  
  // Real-time leads ledger for interactive demo
  const [leads, setLeads] = useState<ConsultationLead[]>([]);
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);

  // Load leads from localStorage on mount and whenever consultation modal state changes
  const loadLeads = () => {
    const raw = localStorage.getItem('kitchenspace_leads');
    if (raw) {
      try {
        setLeads(JSON.parse(raw));
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  // Sync leads when consultation modal closes (potential new booking)
  useEffect(() => {
    if (!isConsultationOpen) {
      loadLeads();
    }
  }, [isConsultationOpen]);

  const handleOpenConsultation = (styleId: string = 'scandinavian-oak') => {
    setSelectedStyleId(styleId);
    setIsConsultationOpen(true);
  };

  const handleStyleSelectFromDrawer = (styleId: string) => {
    setIsDesignsOpen(false);
    // Slight delay for smooth transition between drawer and modal
    setTimeout(() => {
      handleOpenConsultation(styleId || 'scandinavian-oak');
    }, 350);
  };

  const handleClearLeads = () => {
    localStorage.removeItem('kitchenspace_leads');
    setLeads([]);
  };

  const handleCollectionClick = (id: string) => {
    const designMap: { [key: string]: string } = {
      'island': 'scandinavian-oak',
      'open': 'japandi-forest',
      'contemporary-luxury': 'obsidian-brass'
    };
    const mappedId = designMap[id];
    if (mappedId) {
      setSelectedStyleId(mappedId);
      setIsDesignsOpen(true);
    } else {
      handleOpenConsultation(id);
    }
  };

  return (
    <div id="landing-root" className="min-h-screen bg-[#FAF9F5] text-luxury-text relative font-sans overflow-x-hidden selection:bg-primary/10 selection:text-primary">
      
      {/* BACKGROUND GRAPHICS: Blurred luxury abstract gradients and subtle lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft radial beige gradients */}
        <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-secondary/5 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-primary/5 to-transparent blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-accent/5 to-transparent blur-[130px]" />

        {/* Minimalist fine structural grids / lines mimicking blueprint drafts */}
        <div className="absolute left-[8%] inset-y-0 w-px bg-stone-200/45 hidden md:block" />
        <div className="absolute right-[8%] inset-y-0 w-px bg-stone-200/45 hidden md:block" />
        <div className="absolute top-[180px] inset-x-0 h-px bg-stone-200/35" />
        <div className="absolute top-[800px] inset-x-0 h-px bg-stone-200/35" />
      </div>

      {/* TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} />

      {/* STICKY GLASSMORPHIC NAVBAR */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} 
        onOpenDesigns={() => setIsDesignsOpen(true)} 
      />

      {/* MAIN LAYOUT */}
      <main className="relative z-10">

        {/* SECTION 1: HERO SECTION */}
        <section id="home" className="relative min-h-[calc(100vh-130px)] flex items-center justify-center py-10 md:py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            
            {/* HERO LEFT COLUMN: Editorial Luxury Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-center lg:text-left">
              
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 self-center lg:self-start bg-white px-4 py-2 rounded-[14px] border border-stone-200/70 shadow-xs"
              >
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-[1.5]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-stone-600 tracking-wide">
                  Trusted by 5,000+ Homeowners
                </span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-primary"
                >
                  Luxury{' '}
                  <span className="text-accent relative inline-block">
                    Modular Kitchens
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-accent/20 rounded-full" />
                  </span>
                  <br />
                  Designed Around Your Lifestyle
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0 max-w-[65ch]"
                >
                  Transform your home with beautifully crafted modular kitchens that combine elegance, functionality, and smart storage. From concept to installation, we create spaces you'll love for years.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={() => handleOpenConsultation('scandinavian-oak')}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-medium rounded-[14px] hover:bg-primary-light hover:scale-[1.03] hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </button>
                <button
                  onClick={() => setIsDesignsOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-stone-200 hover:border-primary hover:scale-[1.03] font-medium rounded-[14px] transition-all duration-300 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Our Designs</span>
                </button>
              </motion.div>

              {/* Trust Row Underneath */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="pt-6 border-t border-stone-200/50"
              >
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-left sm:flex sm:items-center sm:justify-between sm:gap-4">
                  {[
                    '10+ Years Experience',
                    'Factory Manufactured',
                    'German Hardware',
                    'Lifetime Service Support'
                  ].map((factor, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                      <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* HERO RIGHT COLUMN: Spectacular visual display with floating cards */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center">
              
              {/* Main Luxury Kitchen Photo with fine shadow frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: 25 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-white/60 bg-stone-100 z-10 group"
              >
                <motion.img
                  src="/images/hero.jpg"
                  alt="KitchenSpace Studio Premium Modular Kitchen Island"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle light leak effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/10 via-white/5 to-transparent pointer-events-none" />
              </motion.div>

              {/* FLOATING CARD 1: Customer Rating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-6 -left-4 sm:-left-6 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-[20px] shadow-lg border border-stone-100/50 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-[14px] bg-accent/15 flex items-center justify-center text-accent">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="block text-xs text-stone-400 font-medium">Customer Reviews</span>
                  <span className="block text-sm sm:text-base font-display font-bold text-primary">⭐ 4.9/5 Rating</span>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: Kitchens Installed */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute bottom-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-[20px] shadow-lg border border-stone-100/50 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-[14px] bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-stone-400 font-medium">Crafted & Installed</span>
                  <span className="block text-sm sm:text-base font-display font-bold text-primary">5,000+ Kitchens</span>
                </div>
              </motion.div>

              {/* FLOATING CARD 3: Free 3D Design */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-6 left-12 bg-white/95 backdrop-blur-md px-4 py-3 rounded-[20px] shadow-lg border border-stone-100/50 flex items-center gap-2.5 z-20"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-stone-700 tracking-wide">
                  📐 Free Bespoke 3D Layout Included
                </span>
              </motion.div>

            </div>

          </div>
        </section>

        {/* SECTION 1 — WHY CHOOSE KITCHENSPACE STUDIO */}
        <section id="why-choose-us" className="py-28 sm:py-36 px-6 max-w-7xl mx-auto relative z-10">
          
          {/* Decorative subtle ambient glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-accent/20 animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-secondary/15 animate-pulse pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
            <div className="flex justify-center">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
              Crafted for Beauty. <br className="hidden sm:inline" />Engineered for Everyday Living.
            </h2>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
              From premium materials to flawless installation, every kitchen is designed to blend aesthetics, durability, and intelligent functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_FEATURES.map((feature, idx) => {
              const IconComp = iconMap[feature.iconName] || Cpu;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white/60 backdrop-blur-md border border-stone-200/40 p-8 rounded-[20px] shadow-xs hover:shadow-xl hover:bg-white/80 hover:border-stone-300 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between cursor-pointer"
                  onClick={() => handleOpenConsultation('scandinavian-oak')}
                >
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-[14px] bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-xs">
                      <IconComp className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-[65ch]">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-[20px]">
                    <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-transparent group-hover:border-accent/30 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2 — KITCHEN COLLECTIONS */}
        <section id="designs" className="py-28 sm:py-36 bg-[#F5F2EB]/45 relative z-10 border-t border-stone-200/40">
          
          {/* Subtle floating gold decorative element */}
          <div className="absolute top-10 right-1/4 w-3 h-3 rounded-full bg-accent/25 animate-pulse pointer-events-none" />
          <div className="absolute bottom-10 left-1/4 w-2 h-2 rounded-full bg-secondary/20 animate-pulse pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20 px-6">
            <div className="flex justify-center">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
                OUR COLLECTIONS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
              Find the Perfect Kitchen for Your Home
            </h2>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
              Explore thoughtfully designed modular kitchen styles created to match every home and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
            {KITCHEN_COLLECTIONS.map((collection, idx) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[450px] rounded-[20px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => handleCollectionClick(collection.id)}
              >
                {/* Large high-quality image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                </div>

                {/* Content details overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                  <span className="text-[10px] text-accent font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Premium Style
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 max-w-[65ch]">
                    {collection.description}
                  </p>
                  
                  {/* Explore button */}
                  <div className="flex items-center gap-2 text-accent font-semibold text-xs tracking-wider uppercase group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore Design</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Glass light-sweep effect on hover */}
                <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: SERVICES AND CAPABILITIES */}
        <section id="services" className="py-28 sm:py-36 bg-primary text-white relative z-10 overflow-hidden">
          {/* Soft background shape */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,138,90,0.12),transparent)]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Services Heading */}
              <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1.5 rounded-[14px] border border-accent/20">
                  Premium Standards
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight leading-tight">
                  Crafting Kitchens That <br />
                  Elevate Everyday Living
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-[65ch]">
                  Unlike traditional local carpenters or mass market providers, we synthesize bespoke Scandinavian-inspired architecture with high-efficiency German hardware engineering.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => handleOpenConsultation('scandinavian-oak')}
                    className="px-6 py-3.5 bg-accent text-primary-dark font-semibold text-sm rounded-[14px] hover:bg-white hover:text-primary hover:scale-[1.03] transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Book Your Studio Slot
                  </button>
                </div>
              </div>

              {/* Right Side: Services Bento Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: 'Cpu',
                    title: 'Precision Manufactured',
                    desc: 'Every cabinet box and drawer is calibrated down to fractions of millimeters inside our automated CNC plant, preventing structural warping or misalignments.'
                  },
                  {
                    icon: 'Award',
                    title: 'Bespoke Countertop Slabs',
                    desc: 'Source premier waterfall quartz, Calacatta marble, and custom acrylic solids. Hand-polished, fitted with invisible seamless joins.'
                  },
                  {
                    icon: 'Settings',
                    title: 'Elite Hardware Systems',
                    desc: 'Equipped natively with lifetime-warranted German soft-close runners, push-latches, pull-out spice columns, and magic corner carousels.'
                  },
                  {
                    icon: 'HeartHandshake',
                    title: 'Bespoke Lighting Design',
                    desc: 'Integrated, recessed LED profiles with customizable temperature (cool to cozy warm), controlled by subtle motion triggers or smartphone.'
                  }
                ].map((serv, i) => {
                  const IconComp = iconMap[serv.icon] || Cpu;
                  return (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[20px] space-y-3 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-[14px] bg-accent/10 text-accent flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-semibold text-base">{serv.title}</h4>
                      <p className="text-xs text-white/60 leading-relaxed max-w-[65ch]">{serv.desc}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION: FEATURED PROJECTS */}
        <FeaturedProjects onOpenConsultation={handleOpenConsultation} />

        {/* SECTION: BEFORE & AFTER SHOWCASE */}
        <BeforeAfterShowcase onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} />

        {/* SECTION 1 — INSPIRATION GALLERY */}
        <InspirationGallery />

        {/* SECTION: OUR DESIGN PROCESS */}
        <DesignProcessTimeline />

        {/* SECTION 2 — ESTIMATE YOUR KITCHEN */}
        <EstimateYourKitchen onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} />

        {/* SECTION: CALL TO ACTION BANNER */}
        <CallToActionBanner 
          onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} 
          onOpenProjects={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* SECTION 3 — OUR PROMISE */}
        <OurPromise />

        {/* SECTION: VIDEO STORIES */}
        <VideoStories />

        {/* SECTION 1 — CUSTOMER TESTIMONIALS */}
        <CustomerTestimonials />

        {/* SECTION 2 — FREQUENTLY ASKED QUESTIONS */}
        <FrequentlyAskedQuestions />

        {/* SECTION 4 — BRAND PARTNERS */}
        <BrandPartners />

        {/* SECTION 3 — CONTACT & CONSULTATION */}
        <ContactConsultation />

        {/* SECTION 4 — FINAL CTA */}
        <FinalCallToAction onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} />

        {/* SECTION 5 — FINAL LEAD GENERATION */}
        <FinalLeadGeneration onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} />

      </main>

      {/* SECTION 5 — FOOTER */}
      <Footer 
        onOpenConsultation={() => handleOpenConsultation('scandinavian-oak')} 
        onOpenDesigns={() => setIsDesignsOpen(true)} 
      />

      {/* REUSABLE INTERACTIVE MODALS */}
      
      {/* 1. Free 3D Consultation multi-step Lead Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
        preSelectedStyleId={selectedStyleId}
      />

      {/* 2. Premium Design catalog Drawer */}
      <DesignShowcaseDrawer 
        isOpen={isDesignsOpen} 
        onClose={() => setIsDesignsOpen(false)} 
        onSelectStyle={handleStyleSelectFromDrawer}
      />

      {/* 3. FLOATING DESIGN DESK (LEADS LEDGER) PORTAL TRIGGER (Demo Quality Element) */}
      <div id="leads-vault-portal" className="fixed bottom-6 left-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLeadsDrawerOpen(true)}
          className="bg-stone-900 text-white hover:bg-stone-800 p-3.5 rounded-full shadow-2xl flex items-center gap-2 border border-stone-700/50 cursor-pointer text-xs font-semibold"
        >
          <Database className="w-4 h-4 text-accent" />
          <span>Leads Desk ({leads.length})</span>
          {leads.length > 0 && (
            <span className="w-2 h-2 rounded-full bg-accent animate-ping absolute top-0.5 right-0.5" />
          )}
        </motion.button>
      </div>

      {/* GLOBAL FLOATING ENHANCEMENTS (WhatsApp, Scroll-to-Top, etc.) */}
      <GlobalEnhancements />

      {/* Leads desk catalog side-drawer */}
      <AnimatePresence>
        {isLeadsDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs z-50"
              onClick={() => setIsLeadsDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-stone-900 text-stone-200 z-50 p-6 shadow-2xl border-l border-stone-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-accent" />
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">Leads Vault Dashboard</h4>
                      <p className="text-[10px] text-stone-400">Design Desk Leads Registry (Local Demo)</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsLeadsDrawerOpen(false)}
                    className="p-1 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* List of active leads captured */}
                <div className="mt-6 space-y-4 overflow-y-auto max-h-[70vh] pr-1">
                  {leads.length === 0 ? (
                    <div className="text-center py-12 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-stone-800/60 flex items-center justify-center text-stone-600 mx-auto">
                        <Inbox className="w-6 h-6" />
                      </div>
                      <p className="text-xs text-stone-500 font-medium">No leads submitted yet.</p>
                      <button
                        onClick={() => {
                          setIsLeadsDrawerOpen(false);
                          handleOpenConsultation();
                        }}
                        className="text-xs text-accent font-semibold underline hover:text-accent-light"
                      >
                        Book a test slot now
                      </button>
                    </div>
                  ) : (
                    leads.map((lead) => {
                      const leadStyle = KITCHEN_STYLES.find(s => s.id === lead.preferredStyleId) || KITCHEN_STYLES[0];
                      return (
                        <div key={lead.id} className="bg-stone-800/80 p-4 rounded-xl border border-stone-700/30 space-y-3 text-xs">
                          <div className="flex items-center justify-between border-b border-stone-700/50 pb-2">
                            <span className="font-bold text-accent">{lead.id}</span>
                            <span className="text-[10px] text-stone-500 font-mono">
                              {new Date(lead.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <p className="text-stone-100 font-semibold text-sm">{lead.fullName}</p>
                            <p className="text-stone-400">📞 {lead.phone}</p>
                            <p className="text-stone-400">✉️ {lead.email}</p>
                          </div>

                          <div className="pt-2 border-t border-stone-700/20 grid grid-cols-2 gap-2 text-[10px] text-stone-400">
                            <div>
                              <span className="block text-stone-500 font-bold uppercase text-[8px]">Aesthetic Style</span>
                              <span className="text-stone-200 font-medium">{leadStyle.name}</span>
                            </div>
                            <div>
                              <span className="block text-stone-500 font-bold uppercase text-[8px]">Shape & Layout</span>
                              <span className="text-stone-200 font-medium capitalize">{lead.layoutShape} Shape</span>
                            </div>
                          </div>

                          <div className="p-2 bg-stone-900 rounded border border-stone-800 text-[10px] text-accent font-semibold flex items-center justify-between">
                            <span>Appointment Slot booked:</span>
                            <span>📅 {lead.dateSlot} @ {lead.timeSlot?.split(' ')[0]}</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Clear registry trigger */}
              {leads.length > 0 && (
                <div className="pt-4 border-t border-stone-800 text-center">
                  <button
                    onClick={handleClearLeads}
                    className="text-xs text-red-400 hover:text-red-300 underline focus:outline-none"
                  >
                    Clear Captured Leads Ledger
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

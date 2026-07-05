import { KitchenStyle } from './types';

export const KITCHEN_STYLES: KitchenStyle[] = [
  {
    id: 'scandinavian-oak',
    name: 'Scandinavian Oak',
    tagline: 'Minimalist warmth & natural sunlight',
    description: 'An airy, organic design blending natural blonde oak wood cabinetry with polished marble and elegant minimalism. Perfect for homes that cherish warmth, openness, and modern craft.',
    image: '/src/assets/images/luxury_kitchen_hero_1783190169401.jpg',
    features: [
      'Seamless flat-panel blonde oak veneers',
      'Solid Calacatta marble waterfall island',
      'Built-in warm LED under-cabinet illumination',
      'Integrated handless touch-to-open mechanics'
    ],
    materials: ['Premium Oak Veneer', 'Calacatta White Marble', 'Eco-certified Coreboards'],
    hardware: 'Blum Legrabox (German-engineered soft close)'
  },
  {
    id: 'japandi-forest',
    name: 'Japandi Forest',
    tagline: 'Wabi-sabi peace meets deep forest tones',
    description: 'A serene hybrid of Japanese minimalism and Scandinavian function. Featuring luxurious matte forest green cabinets paired with light ash wood accents and natural concrete surfaces.',
    image: '/src/assets/images/luxury_kitchen_japandi_1783190186206.jpg',
    features: [
      'Anti-fingerprint matte forest green panels',
      'Solid light ash wood open shelving',
      'Micro-cement waterfall countertops',
      'Sleek integrated black architectural fixtures'
    ],
    materials: ['Matte Polyurethane', 'Solid Ash Wood', 'Polished Micro-cement'],
    hardware: 'Hettich Sensys (Premium concealed hinges)'
  },
  {
    id: 'obsidian-brass',
    name: 'Obsidian & Brass',
    tagline: 'Bold, dark dramatic luxury',
    description: 'An ultra-luxurious, statement design featuring deep charcoal matte lacquer cabinets, exquisite Nero Marquina black marble with gold veining, and hand-brushed solid brass hardware.',
    image: '/src/assets/images/luxury_kitchen_obsidian_1783190201969.jpg',
    features: [
      'Deep obsidian black lacquered doors',
      'Nero Marquina book-matched marble island',
      'Solid brushed brass accents and handles',
      'Fluted timber backsplashes with warm ambient glow'
    ],
    materials: ['Satin Lacquer', 'Nero Marquina Marble', 'Solid Brushed Brass'],
    hardware: 'Grass Nova Pro Scala (Austrian luxury slides)'
  }
];

export const TRUST_FACTORS = [
  { label: '10+ Years Experience', icon: 'Award' },
  { label: 'Factory Manufactured', icon: 'Cpu' },
  { label: 'German Hardware', icon: 'Settings' },
  { label: 'Lifetime Service Support', icon: 'HeartHandshake' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Personal Design Consultation',
    description: 'Collaborate with our senior designers to explore luxury layouts, materials, and custom finishes aligned with your home architecture.'
  },
  {
    step: '02',
    title: '3D Photorealistic Renderings',
    description: 'Experience your kitchen before it is built. We produce bespoke 3D virtual walkthroughs complete with custom lighting and hardware.'
  },
  {
    step: '03',
    title: 'Precision German Fabrication',
    description: 'Your modular kitchen is crafted to exact millimeters in our fully automated German factory, ensuring perfect structural alignment.'
  },
  {
    step: '04',
    title: 'Master-Crafted Installation',
    description: 'Our in-house certified artisans handle white-glove delivery, flawless counter joining, and precision appliance integration.'
  }
];

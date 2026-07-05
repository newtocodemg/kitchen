import React from 'react';

// Common visual styling helpers
const GradientsAndFilters = () => (
  <defs>
    {/* Metallic & Gold Gradients */}
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#DFBA6B" />
      <stop offset="50%" stopColor="#C5A059" />
      <stop offset="100%" stopColor="#9E7D3B" />
    </linearGradient>
    <linearGradient id="brass-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#EAD2AC" />
      <stop offset="100%" stopColor="#9C7A4A" />
    </linearGradient>
    <linearGradient id="copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#E28F6B" />
      <stop offset="100%" stopColor="#A75130" />
    </linearGradient>
    <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#E4E4E7" />
      <stop offset="50%" stopColor="#F4F4F5" />
      <stop offset="100%" stopColor="#A1A1AA" />
    </linearGradient>

    {/* Ambient Glows */}
    <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FFF7ED" stopOpacity="1" />
      <stop offset="40%" stopColor="#FDBA74" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#FDBA74" stopOpacity="0" />
    </radialGradient>
    <linearGradient id="led-glow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
    </linearGradient>

    {/* Marble Textures & Veins */}
    <linearGradient id="marble-base" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FAFAF9" />
      <stop offset="100%" stopColor="#E7E5E4" />
    </linearGradient>
    <linearGradient id="black-marble-base" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1C1917" />
      <stop offset="100%" stopColor="#0C0A09" />
    </linearGradient>

    {/* Drop Shadows */}
    <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.15" />
    </filter>
    <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#000000" floodOpacity="0.25" />
    </filter>
    <filter id="ambient-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
);

// 1. HERO KITCHEN ILLUSTRATION
export const HeroKitchen = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Dark Forest Luxury Backdrop */}
    <rect width="800" height="600" fill="#14211D" />
    
    {/* Warm Sunbeam/Window Glow */}
    <path d="M0 0 L450 0 L250 600 L0 600 Z" fill="url(#led-glow)" opacity="0.15" />

    {/* Tall Modern Window (Left) */}
    <rect x="40" y="50" width="160" height="420" rx="4" fill="#0D1614" />
    <line x1="120" y1="50" x2="120" y2="470" stroke="#1F332E" strokeWidth="3" />
    <line x1="40" y1="200" x2="200" y2="200" stroke="#1F332E" strokeWidth="2" />
    <line x1="40" y1="350" x2="200" y2="350" stroke="#1F332E" strokeWidth="2" />
    {/* Window Sill */}
    <rect x="30" y="470" width="180" height="12" fill="#1c1917" rx="2" />

    {/* Potted Tall Fiddle Leaf Fig on Window Sill */}
    <path d="M100 470 L95 440 L125 440 L120 470 Z" fill="#78350F" />
    <path d="M110 440 Q110 370 120 350" stroke="#047857" strokeWidth="3" fill="none" />
    {/* Leaves */}
    <path d="M110 420 C90 410 95 390 110 405 Z" fill="#065F46" />
    <path d="M112 400 C130 390 125 370 112 385 Z" fill="#047857" />
    <path d="M110 380 C95 370 100 350 110 365 Z" fill="#065F46" />
    <path d="M112 360 C125 350 120 330 112 345 Z" fill="#047857" />

    {/* Back Cabinets (Emerald Green / Charcoal) */}
    <rect x="260" y="120" width="500" height="350" fill="#1C2E29" rx="8" filter="url(#soft-shadow)" />
    
    {/* Cabinet Grid Lines & Handles */}
    {/* Overhead Rows */}
    <rect x="270" y="130" width="110" height="100" fill="#243C35" rx="4" />
    <rect x="390" y="130" width="110" height="100" fill="#243C35" rx="4" />
    <rect x="510" y="130" width="110" height="100" fill="#243C35" rx="4" />
    <rect x="630" y="130" width="115" height="100" fill="#243C35" rx="4" />
    {/* Brass handle accents */}
    <line x1="325" y1="220" x2="325" y2="225" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" />
    <line x1="445" y1="220" x2="445" y2="225" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" />
    <line x1="565" y1="220" x2="565" y2="225" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" />
    <line x1="685" y1="220" x2="685" y2="225" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" />

    {/* Built-in Premium Black Glass Refrigerator (Right Side) */}
    <rect x="630" y="245" width="115" height="215" fill="#0A0F0D" rx="4" />
    <line x1="640" y1="260" x2="640" y2="380" stroke="url(#gold-grad)" strokeWidth="2.5" />

    {/* Built-in Double Oven (Center-Right) */}
    <rect x="510" y="245" width="110" height="100" fill="#0F172A" rx="4" />
    <rect x="520" y="255" width="90" height="50" fill="#1E293B" rx="2" />
    <circle cx="565" cy="325" r="8" fill="#475569" />
    <line x1="535" y1="325" x2="595" y2="325" stroke="#334155" strokeWidth="2" />

    <rect x="510" y="355" width="110" height="105" fill="#0F172A" rx="4" />
    <rect x="520" y="365" width="90" height="55" fill="#1E293B" rx="2" />

    {/* Elegant Golden Backsplash Tile Lines */}
    <line x1="270" y1="245" x2="500" y2="245" stroke="#1F332E" strokeWidth="1" />
    <line x1="270" y1="300" x2="500" y2="300" stroke="#1F332E" strokeWidth="1" />
    <line x1="270" y1="350" x2="500" y2="350" stroke="#1F332E" strokeWidth="1" />

    {/* Countertop Kettle & Accessories */}
    <path d="M300 350 L320 350 L315 320 L305 320 Z" fill="url(#chrome-grad)" />
    <path d="M315 320 Q330 320 325 335" stroke="#1E293B" strokeWidth="3" fill="none" />

    {/* LOWER CABINETS (Left side counter) */}
    <rect x="270" y="355" width="230" height="105" fill="#152722" rx="4" />
    <line x1="385" y1="355" x2="385" y2="460" stroke="#1F332E" strokeWidth="1.5" />
    <line x1="270" y1="410" x2="500" y2="410" stroke="#1F332E" strokeWidth="1.5" />

    {/* GRAND CENTRAL KITCHEN ISLAND (Luxury Calacatta Marble & Wood Slat Side) */}
    <g filter="url(#card-shadow)">
      {/* Wooden Slatted Base on Right Side */}
      <path d="M300 480 L620 480 L610 570 L330 570 Z" fill="#451A03" />
      {/* Slat Details */}
      {Array.from({ length: 24 }).map((_, i) => {
        const xStart = 310 + i * 12;
        const xEnd = 340 + i * 11.1;
        return (
          <line key={i} x1={xStart} y1="480" x2={xEnd} y2="570" stroke="#1C0A00" strokeWidth="2" />
        );
      })}

      {/* Marble Island Top (Calacatta) */}
      <path d="M240 400 L680 400 L720 480 L200 480 Z" fill="url(#marble-base)" />
      {/* Beautiful Marble Veins */}
      <path d="M280 410 Q320 430 350 420 T480 460 T580 430" stroke="#D6D3D1" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M320 415 Q340 420 380 450 T500 470" stroke="#A8A29E" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M520 410 Q580 425 610 460" stroke="#A8A29E" strokeWidth="2.5" fill="none" opacity="0.5" />
      {/* Gold Vein Highlights */}
      <path d="M310 412 Q330 425 360 418 T490 462" stroke="url(#gold-grad)" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Island Front Face (Marble apron front edge) */}
      <path d="M200 480 L720 480 L700 495 L180 495 Z" fill="#D6D3D1" />
    </g>

    {/* Modern Under-mount Sink & Faucet on Island */}
    <ellipse cx="320" cy="440" rx="40" ry="15" fill="#78716C" />
    <ellipse cx="320" cy="440" rx="36" ry="12" fill="#44403C" />
    {/* Faucet (Elegant Curved Gold Gooseneck) */}
    <path d="M310 440 Q310 395 320 395 T325 410" stroke="url(#gold-grad)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
    <circle cx="300" cy="445" r="5" fill="url(#gold-grad)" />

    {/* Potted Herb on the Island */}
    <ellipse cx="580" cy="435" rx="15" ry="7" fill="#78350F" />
    <path d="M570 435 C565 420 575 410 580 425 Z" fill="#10B981" />
    <path d="M580 435 C580 415 590 415 585 428 Z" fill="#059669" />
    <path d="M590 435 C595 420 585 410 582 425 Z" fill="#10B981" />

    {/* Two Luxury Hanging Pendant Lights */}
    {/* Left Lamp */}
    <line x1="380" y1="0" x2="380" y2="180" stroke="url(#gold-grad)" strokeWidth="2" />
    {/* Cone/Dome shade */}
    <path d="M350 180 Q380 160 410 180 Z" fill="url(#brass-grad)" filter="url(#soft-shadow)" />
    {/* Bulb */}
    <circle cx="380" cy="183" r="8" fill="#FFEDD5" />
    {/* Glow */}
    <ellipse cx="380" cy="205" rx="70" ry="40" fill="url(#lamp-glow)" opacity="0.8" />

    {/* Right Lamp */}
    <line x1="560" y1="0" x2="560" y2="180" stroke="url(#gold-grad)" strokeWidth="2" />
    {/* Cone/Dome shade */}
    <path d="M530 180 Q560 160 590 180 Z" fill="url(#brass-grad)" filter="url(#soft-shadow)" />
    {/* Bulb */}
    <circle cx="560" cy="183" r="8" fill="#FFEDD5" />
    {/* Glow */}
    <ellipse cx="560" cy="205" rx="70" ry="40" fill="url(#lamp-glow)" opacity="0.8" />

    {/* Two Elegant Bar Stools */}
    {/* Left Stool */}
    <g filter="url(#soft-shadow)">
      {/* Legs */}
      <line x1="350" y1="500" x2="330" y2="590" stroke="#78716C" strokeWidth="4.5" />
      <line x1="390" y1="500" x2="410" y2="590" stroke="#78716C" strokeWidth="4.5" />
      <line x1="370" y1="495" x2="370" y2="590" stroke="#44403C" strokeWidth="3" />
      {/* Footrest ring */}
      <ellipse cx="370" cy="555" rx="25" ry="6" fill="none" stroke="url(#gold-grad)" strokeWidth="3" />
      {/* Leather Cushion */}
      <ellipse cx="370" cy="495" rx="30" ry="12" fill="#1C1917" />
      <path d="M340 495 L340 503 Q370 515 400 503 L400 495 Z" fill="#292524" />
    </g>

    {/* Right Stool */}
    <g filter="url(#soft-shadow)">
      {/* Legs */}
      <line x1="490" y1="500" x2="470" y2="590" stroke="#78716C" strokeWidth="4.5" />
      <line x1="530" y1="500" x2="550" y2="590" stroke="#78716C" strokeWidth="4.5" />
      <line x1="510" y1="495" x2="510" y2="590" stroke="#44403C" strokeWidth="3" />
      {/* Footrest ring */}
      <ellipse cx="510" cy="555" rx="25" ry="6" fill="none" stroke="url(#gold-grad)" strokeWidth="3" />
      {/* Leather Cushion */}
      <ellipse cx="510" cy="495" rx="30" ry="12" fill="#1C1917" />
      <path d="M480 495 L480 503 Q510 515 540 503 L540 495 Z" fill="#292524" />
    </g>

    {/* Flooring Accent Line */}
    <line x1="0" y1="580" x2="800" y2="580" stroke="#0F1F1B" strokeWidth="3" />
  </svg>
);

// 2. L-SHAPED MODULAR KITCHEN
export const LShapeKitchen = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Cozy Warm Off-White / Greige Wall */}
    <rect width="800" height="600" fill="#F5F5F4" />
    
    {/* Geometric Shadow Overlay */}
    <path d="M0 0 L250 0 L150 600 L0 600 Z" fill="#000" opacity="0.03" />

    {/* Left Wall Cabinet (Turning Corner) */}
    <path d="M0 80 L180 120 L180 320 L0 280 Z" fill="#D7C49E" opacity="0.9" filter="url(#soft-shadow)" />
    <line x1="90" y1="100" x2="90" y2="300" stroke="#BCA374" strokeWidth="2" />

    {/* Main Back Wall Cabinets (Sleek Beige Matte) */}
    <rect x="220" y="80" width="540" height="150" fill="#EAE3D2" rx="6" filter="url(#soft-shadow)" />
    {/* Cabinet Vertical Partitions */}
    <line x1="355" y1="80" x2="355" y2="230" stroke="#C5BA9E" strokeWidth="1.5" />
    <line x1="490" y1="80" x2="490" y2="230" stroke="#C5BA9E" strokeWidth="1.5" />
    <line x1="625" y1="80" x2="625" y2="230" stroke="#C5BA9E" strokeWidth="1.5" />
    
    {/* Under-cabinet LED Strip Glow */}
    <rect x="220" y="230" width="540" height="15" fill="url(#led-glow)" />

    {/* Elegant Fluted Glass Backsplash Section */}
    <rect x="220" y="245" width="540" height="155" fill="#FAF9F6" />
    {/* Fluted Vertical Lines */}
    {Array.from({ length: 45 }).map((_, i) => (
      <line key={i} x1={232 + i * 12} y1="245" x2={232 + i * 12} y2="400" stroke="#E7E5E4" strokeWidth="1.5" />
    ))}

    {/* Left L-Shape Countertop extending out */}
    <path d="M0 360 L220 400 L180 560 L0 520 Z" fill="url(#marble-base)" filter="url(#card-shadow)" />
    <ellipse cx="100" cy="440" rx="35" ry="12" fill="#78716C" />
    <ellipse cx="100" cy="440" rx="30" ry="9" fill="#292524" />

    {/* Main Back Countertop */}
    <rect x="200" y="385" width="580" height="30" fill="url(#marble-base)" rx="2" filter="url(#soft-shadow)" />
    
    {/* Seamless L-Corner joint line */}
    <line x1="200" y1="385" x2="220" y2="400" stroke="#D6D3D1" strokeWidth="3" />

    {/* Cooktop and Pan (Back Counter) */}
    <rect x="420" y="380" width="120" height="8" fill="#1E293B" rx="2" />
    <circle cx="450" cy="384" r="10" fill="#334155" />
    <circle cx="510" cy="384" r="12" fill="#334155" />
    {/* Copper Skillet */}
    <circle cx="450" cy="378" r="14" fill="url(#copper-grad)" />
    <line x1="450" y1="378" x2="390" y2="378" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />

    {/* Faucet (Sleek Swan Neck Faucet on Left Counter) */}
    <path d="M100 440 Q100 370 115 370 T125 390" stroke="url(#chrome-grad)" strokeWidth="6" strokeLinecap="round" fill="none" />

    {/* Lower Cabinets (Sleek Pull-Out Drawers) */}
    <rect x="220" y="415" width="540" height="155" fill="#DFD3C3" rx="6" />
    {/* Drawers Panels */}
    <line x1="490" y1="415" x2="490" y2="570" stroke="#C5BA9E" strokeWidth="2" />
    <line x1="220" y1="490" x2="760" y2="490" stroke="#C5BA9E" strokeWidth="2" />
    {/* Minimal Gold Integrated Profile Handles */}
    <rect x="250" y="445" width="200" height="5" fill="url(#gold-grad)" rx="1" />
    <rect x="520" y="445" width="200" height="5" fill="url(#gold-grad)" rx="1" />
    <rect x="250" y="520" width="200" height="5" fill="url(#gold-grad)" rx="1" />
    <rect x="520" y="520" width="200" height="5" fill="url(#gold-grad)" rx="1" />

    {/* Hanging Potted String of Pearls (Top Right) */}
    <circle cx="710" cy="60" r="10" fill="#A8A29E" />
    <line x1="710" y1="0" x2="710" y2="60" stroke="#57534E" strokeWidth="1.5" />
    <path d="M710 60 Q690 120 700 180" stroke="#059669" strokeWidth="2" fill="none" />
    <path d="M710 60 Q725 100 715 150" stroke="#10B981" strokeWidth="2" fill="none" />
    <path d="M710 60 Q735 140 725 210" stroke="#047857" strokeWidth="1.5" fill="none" />

    {/* Wooden Floor Board Lines */}
    {Array.from({ length: 6 }).map((_, i) => (
      <line key={i} x1="0" y1={550 + i * 15} x2="800" y2={550 + i * 15} stroke="#E7E5E4" strokeWidth="1.5" />
    ))}
  </svg>
);

// 3. U-SHAPED COZY KITCHEN
export const UShapeKitchen = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Soft Muted Sage Green Wall */}
    <rect width="800" height="600" fill="#EAECE9" />

    {/* Central Window overlooking nature */}
    <rect x="280" y="40" width="240" height="240" fill="#D0E3E8" rx="8" filter="url(#soft-shadow)" />
    {/* Outdoor mountain/tree silhouettes */}
    <path d="M280 220 Q340 180 400 210 T520 200 L520 280 L280 280 Z" fill="#9FC1C4" />
    <path d="M320 280 L350 210 L380 280 Z" fill="#60969A" opacity="0.6" />
    <path d="M420 280 L460 190 L500 280 Z" fill="#60969A" opacity="0.8" />
    {/* Window Pane Lines */}
    <rect x="280" y="40" width="240" height="240" rx="8" stroke="#FAF9F6" strokeWidth="8" fill="none" />
    <line x1="400" y1="40" x2="400" y2="280" stroke="#FAF9F6" strokeWidth="4" />

    {/* Left Arm of U (Cabinet & Counter) */}
    <path d="M0 150 L160 180 L160 550 L0 550 Z" fill="#4B5E51" filter="url(#soft-shadow)" />
    {/* Floating Shelves on Left Wall */}
    <path d="M0 100 L120 120 L120 135 L0 115 Z" fill="#8C7A5F" />
    {/* Cute Mugs on Shelf */}
    <rect x="30" y="80" width="15" height="20" rx="2" fill="url(#copper-grad)" />
    <rect x="70" y="90" width="18" height="18" rx="3" fill="#FAF9F6" />

    {/* Right Arm of U (Cabinet & Counter with built-in appliances) */}
    <path d="M800 150 L640 180 L640 550 L800 550 Z" fill="#4B5E51" filter="url(#soft-shadow)" />
    <rect x="670" y="240" width="100" height="140" fill="#0A0A0A" rx="4" />
    <line x1="680" y1="260" x2="760" y2="260" stroke="url(#gold-grad)" strokeWidth="3" />

    {/* Countertops (Sleek White Quartz with oak veneer edge trim) */}
    {/* Back Wall Countertop */}
    <rect x="140" y="300" width="520" height="35" fill="url(#marble-base)" rx="3" filter="url(#soft-shadow)" />
    
    {/* Left Countertop extending forward */}
    <path d="M0 320 L160 300 L160 550 L0 550 Z" fill="url(#marble-base)" />
    
    {/* Right Countertop extending forward */}
    <path d="M800 320 L640 300 L640 550 L800 550 Z" fill="url(#marble-base)" />

    {/* Oak edge details */}
    <path d="M160 300 L160 550" stroke="#78350F" strokeWidth="3" />
    <path d="M640 300 L640 550" stroke="#78350F" strokeWidth="3" />

    {/* Centered Sink under the window */}
    <ellipse cx="400" cy="320" rx="55" ry="14" fill="#57534E" />
    <ellipse cx="400" cy="320" rx="48" ry="10" fill="#292524" />
    {/* Faucet */}
    <path d="M400 315 Q400 260 415 260 T425 285" stroke="url(#brass-grad)" strokeWidth="5.5" strokeLinecap="round" fill="none" />

    {/* Cutting Board with Lemon */}
    <path d="M220 320 L270 315 L280 340 L230 345 Z" fill="#B45309" />
    <circle cx="255" cy="332" r="6" fill="#FACC15" />

    {/* Hanging Copper Pots Above (Left Side) */}
    <line x1="80" y1="0" x2="80" y2="100" stroke="#57534E" strokeWidth="2" />
    <path d="M60 100 Q80 90 100 100 Z" fill="url(#copper-grad)" />
    <circle cx="80" cy="115" r="22" fill="url(#copper-grad)" />
    {/* Pan Handle */}
    <line x1="80" y1="115" x2="80" y2="160" stroke="#292524" strokeWidth="4" strokeLinecap="round" />

    {/* Floating Light Bulb in center */}
    <line x1="400" y1="0" x2="400" y2="120" stroke="#1E293B" strokeWidth="1.5" />
    <circle cx="400" cy="130" r="12" fill="#FEF3C7" opacity="0.9" />
    <ellipse cx="400" cy="140" rx="60" ry="30" fill="url(#lamp-glow)" opacity="0.6" />

    {/* Cozy Lower Cabinet Face Plates */}
    <rect x="200" y="350" width="400" height="200" fill="#3D4F43" rx="4" />
    <line x1="300" y1="350" x2="300" y2="550" stroke="#2D3C32" strokeWidth="2" />
    <line x1="400" y1="350" x2="400" y2="550" stroke="#2D3C32" strokeWidth="2" />
    <line x1="500" y1="350" x2="500" y2="550" stroke="#2D3C32" strokeWidth="2" />
    {/* Little round brass knobs */}
    <circle cx="285" cy="400" r="4" fill="url(#gold-grad)" />
    <circle cx="315" cy="400" r="4" fill="url(#gold-grad)" />
    <circle cx="385" cy="400" r="4" fill="url(#gold-grad)" />
    <circle cx="415" cy="400" r="4" fill="url(#gold-grad)" />
    <circle cx="485" cy="400" r="4" fill="url(#gold-grad)" />
    <circle cx="515" cy="400" r="4" fill="url(#gold-grad)" />
  </svg>
);

// 4. PARALLEL GALLEY KITCHEN
export const ParallelKitchen = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Premium Light Grey Tiled Backdrop */}
    <rect width="800" height="600" fill="#E7E5E4" />
    {/* Tile Seams */}
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" stroke="#D6D3D1" strokeWidth="1" />
    ))}
    {Array.from({ length: 6 }).map((_, i) => (
      <line key={`h-${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} stroke="#D6D3D1" strokeWidth="1" />
    ))}

    {/* Left Run of Cabinets (Prep Area) */}
    <path d="M0 100 L220 160 L220 540 L0 460 Z" fill="#2E4C5E" filter="url(#soft-shadow)" />
    <path d="M0 280 L220 310 L220 540 L0 540 Z" fill="#1F3542" />

    {/* Left Countertop */}
    <path d="M0 270 L220 300 L200 325 L0 290 Z" fill="url(#marble-base)" />

    {/* Floating wooden shelving on Left side */}
    <path d="M0 160 L140 200 L140 215 L0 175 Z" fill="#A16207" />
    <circle cx="40" cy="145" r="10" fill="#3B82F6" />
    <circle cx="80" cy="165" r="12" fill="#EF4444" />

    {/* Right Run of Cabinets (Cooking & Appliances) */}
    <path d="M800 100 L580 160 L580 540 L800 460 Z" fill="#2E4C5E" filter="url(#soft-shadow)" />
    <path d="M800 280 L580 310 L580 540 L800 540 Z" fill="#1F3542" />

    {/* Right Countertop */}
    <path d="M800 270 L580 300 L600 325 L800 290 Z" fill="url(#marble-base)" />

    {/* Integrated Professional Cooktop & Oven on Right side */}
    <path d="M620 290 L740 270 L750 285 L630 305 Z" fill="#0F172A" />
    <circle cx="665" cy="288" r="8" fill="#334155" />
    <circle cx="705" cy="280" r="10" fill="#334155" />

    {/* Cooktop Backsplash Chimney (Stainless Steel look) */}
    <path d="M640 120 L720 100 L720 230 L640 250 Z" fill="url(#chrome-grad)" opacity="0.9" />

    {/* Central Walkway Flooring perspective */}
    <path d="M220 310 L580 310 L800 600 L0 600 Z" fill="#57534E" opacity="0.3" />
    {/* Dark Wooden Planks Perspective lines */}
    <line x1="300" y1="310" x2="150" y2="600" stroke="#44403C" strokeWidth="3" />
    <line x1="400" y1="310" x2="400" y2="600" stroke="#44403C" strokeWidth="3.5" />
    <line x1="500" y1="310" x2="650" y2="600" stroke="#44403C" strokeWidth="3" />

    {/* Floating modern ring light in central ceiling space */}
    <ellipse cx="400" cy="80" rx="90" ry="25" stroke="url(#gold-grad)" strokeWidth="6" fill="none" filter="url(#soft-shadow)" />
    <ellipse cx="400" cy="80" rx="90" ry="25" stroke="#FFF" strokeWidth="1.5" fill="none" opacity="0.8" />
    <ellipse cx="400" cy="95" rx="140" ry="40" fill="url(#lamp-glow)" opacity="0.4" />
  </svg>
);

// 5. OBSIDIAN / MIDNIGHT MINIMALIST
export const ObsidianMinimalist = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Luxe Dark Slate / Charcoal Background */}
    <rect width="800" height="600" fill="#1C1A1A" />

    {/* Linear Gold Architectural Trim (Vertical) */}
    <line x1="150" y1="0" x2="150" y2="600" stroke="#9E7D3B" strokeWidth="1" opacity="0.25" />
    <line x1="650" y1="0" x2="650" y2="600" stroke="#9E7D3B" strokeWidth="1" opacity="0.25" />

    {/* Sleek Overhead Charcoal Cabinets */}
    <rect x="180" y="50" width="440" height="130" fill="#2E2B2B" rx="4" filter="url(#soft-shadow)" />
    <line x1="326" y1="50" x2="326" y2="180" stroke="#1C1A1A" strokeWidth="2" />
    <line x1="472" y1="50" x2="472" y2="180" stroke="#1C1A1A" strokeWidth="2" />
    
    {/* Amber LED strip backlighting */}
    <rect x="180" y="180" width="440" height="15" fill="url(#led-glow)" />

    {/* Nero Marquina Black Marble Backsplash (Dramatic white and gold veins) */}
    <rect x="180" y="195" width="440" height="165" fill="url(#black-marble-base)" />
    {/* Veins */}
    <path d="M190 200 Q260 280 320 260 T480 340" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
    <path d="M280 200 Q330 250 360 210 T520 290" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M420 200 Q480 290 530 270" stroke="url(#gold-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.65" />
    <path d="M300 240 Q315 255 350 250" stroke="url(#gold-grad)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />

    {/* Premium Countertop with induction stove hob embedded */}
    <rect x="160" y="360" width="480" height="25" fill="#1C1A1A" rx="2" filter="url(#soft-shadow)" />
    <rect x="300" y="357" width="200" height="4" fill="url(#gold-grad)" rx="1" />

    {/* Golden Bowl / Abstract Sculpture on the side */}
    <ellipse cx="230" cy="350" rx="20" ry="10" fill="url(#gold-grad)" />
    <ellipse cx="230" cy="347" rx="18" ry="7" fill="#1C1A1A" />

    {/* Lower Matte Black Cabinets with warm accent lighting at base */}
    <rect x="180" y="385" width="440" height="165" fill="#262323" rx="4" />
    <line x1="326" y1="385" x2="326" y2="550" stroke="#1C1A1A" strokeWidth="2" />
    <line x1="472" y1="385" x2="472" y2="550" stroke="#1C1A1A" strokeWidth="2" />
    {/* Minimal golden vertical channels for handles */}
    <rect x="323" y="410" width="6" height="110" fill="url(#gold-grad)" rx="1.5" />
    <rect x="469" y="410" width="6" height="110" fill="url(#gold-grad)" rx="1.5" />

    {/* Warm LED Toe-Kick Wash at the base of cabinets */}
    <rect x="180" y="550" width="440" height="10" fill="url(#led-glow)" opacity="0.8" />
  </svg>
);

// 6. JAPANDI ORGANIC MINIMALISM
export const JapandiMinimalism = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Soft Sand/Cream Background */}
    <rect width="800" height="600" fill="#F2ECE4" />

    {/* Light Wooden Slats Back Wall (Vertical lines representing Zen aesthetic) */}
    <g opacity="0.15">
      {Array.from({ length: 40 }).map((_, i) => (
        <line key={i} x1={20 + i * 20} y1="0" x2={20 + i * 20} y2="600" stroke="#78350F" strokeWidth="4" />
      ))}
    </g>

    {/* Premium Light Oak Floating Shelves */}
    <rect x="250" y="100" width="300" height="20" fill="#E8DCD0" rx="3" filter="url(#soft-shadow)" />
    <rect x="250" y="220" width="300" height="20" fill="#E8DCD0" rx="3" filter="url(#soft-shadow)" />

    {/* Elegant Zen Stoneware Kettle & Cups on Top Shelf */}
    <path d="M300 100 Q300 70 320 70 T330 90 L330 100 Z" fill="#44403C" />
    <circle cx="345" cy="95" r="5" fill="#E7E5E4" />
    <circle cx="360" cy="95" r="5" fill="#E7E5E4" />

    {/* Minimal Bonsai Plant on Bottom Shelf */}
    <path d="M460 220 L455 200 L485 200 L480 220 Z" fill="#57534E" />
    {/* Organic Twisting Trunk */}
    <path d="M470 200 Q450 160 480 150" stroke="#44403C" strokeWidth="4.5" fill="none" strokeLinecap="round" />
    <circle cx="480" cy="150" r="14" fill="#047857" opacity="0.85" />
    <circle cx="455" cy="170" r="10" fill="#065F46" opacity="0.9" />

    {/* Lower Limestone Countertop */}
    <rect x="180" y="380" width="440" height="30" fill="#FAF9F6" rx="4" filter="url(#card-shadow)" />

    {/* Handleless Oak Cabinets below */}
    <rect x="200" y="410" width="400" height="150" fill="#EADCC9" rx="6" />
    <line x1="333" y1="410" x2="333" y2="560" stroke="#DFCCA7" strokeWidth="2.5" />
    <line x1="466" y1="410" x2="466" y2="560" stroke="#DFCCA7" strokeWidth="2.5" />

    {/* Flat Paper Lantern Pendant Light in corner */}
    <line x1="120" y1="0" x2="120" y2="180" stroke="#44403C" strokeWidth="1.5" />
    <ellipse cx="120" cy="205" rx="30" ry="25" fill="#FFFBEB" filter="url(#soft-shadow)" />
    <ellipse cx="120" cy="205" rx="20" ry="25" stroke="#78350F" strokeWidth="1" fill="none" opacity="0.3" />
    <line x1="120" y1="180" x2="120" y2="230" stroke="#78350F" strokeWidth="1.5" />
    <ellipse cx="120" cy="225" rx="70" ry="30" fill="url(#lamp-glow)" opacity="0.6" />
  </svg>
);

// 7. MINIMAL WHITE & CALACATTA MARBLE
export const MinimalWhiteKitchen = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Airy Bright White Background */}
    <rect width="800" height="600" fill="#FAFAF9" />

    {/* Linear Architectural Shadows */}
    <rect x="0" y="0" width="800" height="50" fill="#F5F5F4" />
    <line x1="0" y1="50" x2="800" y2="50" stroke="#E7E5E4" strokeWidth="1.5" />

    {/* Dramatic Calacatta Marble Backsplash Slab */}
    <rect x="180" y="110" width="440" height="240" fill="url(#marble-base)" rx="4" filter="url(#soft-shadow)" />
    {/* Striking Grey & Soft Gold Veins */}
    <path d="M200 350 C310 280 290 180 420 150 S580 120 600 110" stroke="#78716C" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
    <path d="M250 350 Q300 290 350 320 T480 230" stroke="#A8A29E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
    <path d="M410 350 Q480 280 520 290" stroke="url(#gold-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45" />

    {/* High-End Built-in Chrome Espresso Maker */}
    <rect x="220" y="200" width="70" height="90" fill="#18181B" rx="2" />
    <rect x="230" y="240" width="50" height="8" fill="url(#chrome-grad)" />
    <circle cx="255" cy="275" r="5" fill="#EF4444" />

    {/* White Backlash LED strip lighting */}
    <rect x="180" y="340" width="440" height="10" fill="url(#led-glow)" opacity="0.5" />

    {/* Sleek Touchless Chrome Swan Faucet & Under-mount sink */}
    <ellipse cx="400" cy="350" rx="50" ry="12" fill="#E7E5E4" />
    <ellipse cx="400" cy="350" rx="44" ry="9" fill="#A8A29E" opacity="0.5" />
    <path d="M400 348 Q400 290 412 290 T420 315" stroke="url(#chrome-grad)" strokeWidth="5" strokeLinecap="round" fill="none" />

    {/* Pure Gloss White Handleless Lower Cabinets */}
    <rect x="180" y="362" width="440" height="188" fill="#FFFFFF" rx="6" filter="url(#card-shadow)" />
    <line x1="326" y1="362" x2="326" y2="550" stroke="#F5F5F4" strokeWidth="2.5" />
    <line x1="472" y1="362" x2="472" y2="550" stroke="#F5F5F4" strokeWidth="2.5" />

    {/* Floating single orchid vase on the side */}
    <rect x="550" y="280" width="20" height="60" fill="none" stroke="#E7E5E4" strokeWidth="2" rx="4" />
    <path d="M560 280 Q560 220 540 200" stroke="#047857" strokeWidth="2" fill="none" />
    <circle cx="540" cy="200" r="6" fill="#F472B6" />
    <circle cx="536" cy="195" r="5" fill="#F472B6" />
  </svg>
);

// 8. COZY WALNUT FAMILY KITCHEN
export const CozyWalnutKitchen = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Warm Terracotta / Autumn Beige Backdrop */}
    <rect width="800" height="600" fill="#EFECE6" />

    {/* Hanging Copper Pan Rack (Classic culinary feel) */}
    <line x1="200" y1="50" x2="600" y2="50" stroke="#78350F" strokeWidth="3" />
    {/* Hanging Hooks and Pots */}
    <line x1="280" y1="50" x2="280" y2="100" stroke="#57534E" strokeWidth="2" />
    <circle cx="280" cy="115" r="20" fill="url(#copper-grad)" />
    <path d="M280 115 L280 70" stroke="#292524" strokeWidth="3.5" />

    <line x1="400" y1="50" x2="400" y2="100" stroke="#57534E" strokeWidth="2" />
    <circle cx="400" cy="120" r="25" fill="#44403C" />
    <path d="M400 120 L400 70" stroke="#292524" strokeWidth="3.5" />

    <line x1="520" y1="50" x2="520" y2="100" stroke="#57534E" strokeWidth="2" />
    <circle cx="520" cy="110" r="16" fill="url(#brass-grad)" />
    <path d="M520 110 L520 70" stroke="#292524" strokeWidth="3.5" />

    {/* Beautiful Rich Walnut Cabinets (With fine wood grain lines) */}
    <rect x="180" y="180" width="440" height="150" fill="#3F2305" rx="6" filter="url(#soft-shadow)" />
    {/* Grain lines */}
    <line x1="180" y1="210" x2="620" y2="210" stroke="#271502" strokeWidth="1" />
    <line x1="180" y1="240" x2="620" y2="240" stroke="#271502" strokeWidth="1.5" />
    <line x1="180" y1="270" x2="620" y2="270" stroke="#271502" strokeWidth="1" />
    <line x1="180" y1="300" x2="620" y2="300" stroke="#271502" strokeWidth="1" />
    
    {/* Cabinet Panels */}
    <line x1="326" y1="180" x2="326" y2="330" stroke="#1F1101" strokeWidth="2" />
    <line x1="472" y1="180" x2="472" y2="330" stroke="#1F1101" strokeWidth="2" />

    {/* Cream Stone Countertop */}
    <rect x="160" y="330" width="480" height="30" fill="#F5F5F4" rx="3" filter="url(#card-shadow)" />

    {/* Basket of Lemons on Counter */}
    <ellipse cx="240" cy="325" rx="22" ry="10" fill="#D97706" />
    <circle cx="230" cy="320" r="6" fill="#FACC15" />
    <circle cx="242" cy="322" r="5.5" fill="#FACC15" />
    <circle cx="250" cy="318" r="6.5" fill="#FACC15" />

    {/* Stack of Ceramic Plates */}
    <ellipse cx="540" cy="325" rx="25" ry="5" fill="#FAFAF9" stroke="#E7E5E4" />
    <ellipse cx="540" cy="322" rx="25" ry="5" fill="#FAFAF9" stroke="#E7E5E4" />
    <ellipse cx="540" cy="319" rx="25" ry="5" fill="#FAFAF9" stroke="#E7E5E4" />

    {/* Walnut Lower Drawers */}
    <rect x="180" y="360" width="440" height="190" fill="#321B04" rx="6" />
    <line x1="180" y1="450" x2="620" y2="450" stroke="#1F1101" strokeWidth="2" />
    <line x1="400" y1="360" x2="400" y2="550" stroke="#1F1101" strokeWidth="2" />
    
    {/* Antique Brass Shell Pull Handles */}
    <path d="M280 400 C280 412 300 412 300 400 Z" fill="url(#brass-grad)" />
    <path d="M500 400 C500 412 520 412 520 400 Z" fill="url(#brass-grad)" />
    <path d="M280 490 C280 502 300 502 300 490 Z" fill="url(#brass-grad)" />
    <path d="M500 490 C500 502 520 502 520 490 Z" fill="url(#brass-grad)" />
  </svg>
);

// 9. OUTDATED KITCHEN BEFORE RENOVATION
export const KitchenBefore = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dated mustard yellow/pale beige backdrop */}
    <rect width="800" height="600" fill="#E8D8C8" />
    
    {/* Mismatched Outdated 90s Tile pattern on backsplash */}
    <g opacity="0.4">
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="#A78B71" strokeWidth="1" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#A78B71" strokeWidth="1" />
      ))}
    </g>

    {/* Cluttered Old Wooden Cabinets (Traditional panel design) */}
    <rect x="150" y="60" width="500" height="140" fill="#A16207" rx="2" stroke="#451A03" strokeWidth="4" />
    {/* Door frames and traditional center panels */}
    {Array.from({ length: 4 }).map((_, i) => {
      const x = 160 + i * 120;
      return (
        <g key={i}>
          <rect x={x} y="70" width="100" height="120" fill="#B45309" stroke="#451A03" strokeWidth="2.5" />
          <rect x={x + 15} y="85" width="70" height="90" fill="#A16207" stroke="#451A03" strokeWidth="1" />
          {/* Unmatched hardware */}
          <circle cx={x + 85} cy="130" r="5" fill="#78716C" />
        </g>
      );
    })}

    {/* Brown laminate countertop with visible seam */}
    <rect x="120" y="350" width="560" height="35" fill="#78350F" stroke="#451A03" strokeWidth="3" />
    <line x1="380" y1="350" x2="380" y2="385" stroke="#451A03" strokeWidth="3" />

    {/* Clutter on the Countertop */}
    {/* Old steel kettle */}
    <path d="M220 350 L250 350 L245 315 L225 315 Z" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
    <path d="M245 315 Q265 315 260 330" stroke="#334155" strokeWidth="3" fill="none" />

    {/* Messy pile of bowls */}
    <path d="M460 350 C460 335 500 335 500 350 Z" fill="#F87171" stroke="#B91C1C" strokeWidth="2" />
    <path d="M465 344 C465 332 495 332 495 344 Z" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="2" />

    {/* Mismatched tiled Lower traditional cabinets */}
    <rect x="150" y="385" width="500" height="165" fill="#78350F" stroke="#451A03" strokeWidth="4" />
    {Array.from({ length: 4 }).map((_, i) => {
      const x = 160 + i * 120;
      return (
        <rect key={i} x={x} y="395" width="100" height="145" fill="#B45309" stroke="#451A03" strokeWidth="2" />
      );
    })}

    {/* Crooked Kitchen Calendar on the wall */}
    <rect x="680" y="100" width="70" height="90" fill="#FFF" stroke="#444" strokeWidth="2.5" transform="rotate(-7, 715, 145)" />
    <rect x="690" y="110" width="50" height="30" fill="#F87171" transform="rotate(-7, 715, 145)" />
    <line x1="690" y1="150" x2="740" y2="150" stroke="#DDD" strokeWidth="2" transform="rotate(-7, 715, 145)" />
    <line x1="690" y1="160" x2="740" y2="160" stroke="#DDD" strokeWidth="2" transform="rotate(-7, 715, 145)" />
    <line x1="690" y1="170" x2="740" y2="170" stroke="#DDD" strokeWidth="2" transform="rotate(-7, 715, 145)" />

    {/* Outdated hanging fluorescent bulb */}
    <rect x="350" y="0" width="100" height="15" fill="#E2E8F0" stroke="#475569" />
    <line x1="370" y1="15" x2="370" y2="60" stroke="#64748B" />
    <line x1="430" y1="15" x2="430" y2="60" stroke="#64748B" />
    <rect x="360" y="60" width="80" height="12" rx="4" fill="#F1F5F9" stroke="#94A3B8" />
  </svg>
);

// 10. LUXURY RENOVATED KITCHEN AFTER
export const KitchenAfter = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Luxurious, bright modern off-white background */}
    <rect width="800" height="600" fill="#FAF9F6" />

    {/* Sleek, Royal Forest Green Overhead Cabinets */}
    <rect x="150" y="50" width="500" height="130" fill="#132E27" rx="6" filter="url(#soft-shadow)" />
    {/* Brass Trim Accent Line */}
    <line x1="150" y1="175" x2="650" y2="175" stroke="url(#gold-grad)" strokeWidth="2" />
    <line x1="275" y1="50" x2="275" y2="170" stroke="#0E1E1A" strokeWidth="1.5" />
    <line x1="400" y1="50" x2="400" y2="170" stroke="#0E1E1A" strokeWidth="1.5" />
    <line x1="525" y1="50" x2="525" y2="170" stroke="#0E1E1A" strokeWidth="1.5" />

    {/* Warm LED Backlight washing the backsplash */}
    <rect x="150" y="180" width="500" height="15" fill="url(#led-glow)" />

    {/* Seamless Premium Quartz Backsplash */}
    <rect x="150" y="195" width="500" height="155" fill="#FAF9F6" stroke="#E7E5E4" strokeWidth="1" />
    {/* Abstract modern botanical line art frame */}
    <path d="M220 330 C220 280 240 250 250 220" stroke="url(#gold-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M250 220 Q270 230 260 250 T230 290" stroke="url(#gold-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />

    {/* Integrated high-end minimalist design cooktop */}
    <rect x="320" y="347" width="160" height="5" fill="#0A0A0A" rx="1" />

    {/* High-end Gooseneck Mixer Tap and undermount sink */}
    <ellipse cx="560" cy="350" rx="40" ry="10" fill="#E7E5E4" />
    <ellipse cx="560" cy="350" rx="35" ry="7" fill="#8C8A87" />
    <path d="M560 348 Q560 295 572 295 T580 320" stroke="url(#chrome-grad)" strokeWidth="5.5" strokeLinecap="round" fill="none" />

    {/* Premium White Quartz Countertop with soft beveled edge */}
    <rect x="120" y="350" width="560" height="28" fill="url(#marble-base)" rx="4" filter="url(#soft-shadow)" />

    {/* Royal Forest Green Lower modular drawers */}
    <rect x="150" y="378" width="500" height="172" fill="#17362E" rx="6" />
    <line x1="150" y1="460" x2="650" y2="460" stroke="#0E1E1A" strokeWidth="2" />
    <line x1="400" y1="378" x2="400" y2="550" stroke="#0E1E1A" strokeWidth="2" />

    {/* Elegant Gold Accent T-Bar Handles */}
    <rect x="230" y="415" width="80" height="5" fill="url(#gold-grad)" rx="1.5" />
    <rect x="490" y="415" width="80" height="5" fill="url(#gold-grad)" rx="1.5" />
    <rect x="230" y="500" width="80" height="5" fill="url(#gold-grad)" rx="1.5" />
    <rect x="490" y="500" width="80" height="5" fill="url(#gold-grad)" rx="1.5" />

    {/* Fresh Potted Rosemary herb */}
    <ellipse cx="230" cy="342" rx="12" ry="6" fill="#78350F" />
    <path d="M225 340 C220 320 225 310 230 325 Z" fill="#10B981" />
    <path d="M235 340 C240 320 235 310 232 328 Z" fill="#047857" />
  </svg>
);

// 11. INDIAN COUPLE AVATAR
export const CoupleAvatar = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Premium Soft Champagne/Gold Gradient Circle */}
    <circle cx="100" cy="100" r="95" fill="url(#gold-grad)" />
    
    {/* Minimal Elegant Couple Silhouettes */}
    {/* Female Profile (Left, slightly in front) */}
    <g filter="url(#soft-shadow)">
      {/* Hair Bun */}
      <circle cx="70" cy="90" r="22" fill="#1C1917" />
      <path d="M50 110 C50 70 90 70 90 110 L100 160 L40 160 Z" fill="#292524" />
      {/* Neck */}
      <path d="M65 120 L75 120 L72 150 L68 150 Z" fill="#E7C09D" />
      {/* Face profile overlay */}
      <circle cx="70" cy="105" r="18" fill="#F5CBB0" />
      {/* Sleek Golden Earring */}
      <circle cx="76" cy="115" r="4" stroke="url(#brass-grad)" strokeWidth="2.5" fill="none" />
    </g>

    {/* Male Profile (Right, slightly behind) */}
    <g filter="url(#soft-shadow)">
      {/* Neck */}
      <path d="M125 120 L135 120 L132 150 L128 150 Z" fill="#C99E7F" />
      {/* Face profile overlay */}
      <circle cx="125" cy="102" r="20" fill="#DCAB89" />
      {/* Short clean cropped hair */}
      <path d="M105 100 C105 75 145 75 145 100 Z" fill="#1C1917" />
      {/* Clean modern glasses */}
      <rect x="110" y="98" width="14" height="10" rx="1.5" stroke="#1C1917" strokeWidth="2" fill="none" />
      <line x1="124" y1="103" x2="132" y2="103" stroke="#1C1917" strokeWidth="2" />
      <rect x="132" y="98" width="14" height="10" rx="1.5" stroke="#1C1917" strokeWidth="2" fill="none" />
      {/* Smart Beard */}
      <path d="M110 110 C110 130 140 130 140 110 Z" fill="#292524" opacity="0.9" />
    </g>
  </svg>
);

// 12. AVATAR MEERA
export const AvatarMeera = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Rich Emerald Background */}
    <circle cx="100" cy="100" r="95" fill="#155E75" />
    
    {/* Woman Silhouette with bun and spectacles */}
    <g filter="url(#soft-shadow)">
      {/* Shoulders / Turtleneck */}
      <path d="M50 160 L150 160 L140 130 Q100 110 60 130 Z" fill="#1E293B" />
      <ellipse cx="100" cy="120" rx="15" ry="10" fill="#0F172A" />
      {/* Neck */}
      <rect x="92" y="110" width="16" height="20" fill="#F1C2AA" />
      {/* Face */}
      <circle cx="100" cy="90" r="22" fill="#F3C8B2" />
      {/* Hair Bun */}
      <circle cx="100" cy="58" r="12" fill="#1C1917" />
      {/* Hair overlay */}
      <path d="M78 90 C78 68 122 68 122 90 Z" fill="#1C1917" />
      {/* Elegant Glasses */}
      <rect x="88" y="85" width="10" height="8" rx="1" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" />
      <line x1="98" y1="89" x2="102" y2="89" stroke="url(#gold-grad)" strokeWidth="1.5" />
      <rect x="102" y="85" width="10" height="8" rx="1" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

// 13. AVATAR RAJIV
export const AvatarRajiv = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Warm Terracotta Background */}
    <circle cx="100" cy="100" r="95" fill="#C2410C" />
    
    {/* Bearded Man Silhouette */}
    <g filter="url(#soft-shadow)">
      {/* Shoulders */}
      <path d="M45 160 L155 160 L145 125 Q100 115 55 125 Z" fill="#334155" />
      {/* Neck */}
      <rect x="92" y="105" width="16" height="25" fill="#E2A98C" />
      {/* Face */}
      <circle cx="100" cy="85" r="24" fill="#E4AE92" />
      {/* Slicked Back Hair */}
      <path d="M76 80 C76 56 124 56 124 80 Z" fill="#1C1917" />
      {/* Beard & Mustache */}
      <path d="M76 85 C76 112 124 112 124 85 Z" fill="#292524" />
      {/* Skin cutout inside beard */}
      <circle cx="100" cy="82" r="20" fill="#E4AE92" />
      {/* Neat Glasses */}
      <rect x="86" y="78" width="12" height="10" rx="1.5" stroke="#1C1917" strokeWidth="2" fill="none" />
      <line x1="98" y1="83" x2="102" y2="83" stroke="#1C1917" strokeWidth="2" />
      <rect x="102" y="78" width="12" height="10" rx="1.5" stroke="#1C1917" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

// 14. AVATAR PRIYA
export const AvatarPriya = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Soft Blush/Rose Background */}
    <circle cx="100" cy="100" r="95" fill="#DB2777" />
    
    {/* Female Portrait with curly hair and earrings */}
    <g filter="url(#soft-shadow)">
      {/* Shoulders / White shirt */}
      <path d="M50 160 L150 160 L140 130 Q100 120 60 130 Z" fill="#FAF9F6" />
      <path d="M90 130 L100 145 L110 130 Z" fill="#E0F2FE" />
      {/* Neck */}
      <rect x="92" y="110" width="16" height="20" fill="#ECC0A8" />
      {/* Face */}
      <circle cx="100" cy="90" r="22" fill="#EFC3AB" />
      {/* Massive Curly Hair */}
      <circle cx="76" cy="80" r="16" fill="#1C1917" />
      <circle cx="124" cy="80" r="16" fill="#1C1917" />
      <circle cx="100" cy="68" r="18" fill="#1C1917" />
      <circle cx="82" cy="65" r="15" fill="#1C1917" />
      <circle cx="118" cy="65" r="15" fill="#1C1917" />
      {/* Golden Earrings */}
      <circle cx="76" cy="104" r="5" fill="url(#gold-grad)" />
      <circle cx="124" cy="104" r="5" fill="url(#gold-grad)" />
    </g>
  </svg>
);

// 15. AVATAR KARAN
export const AvatarKaran = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Indigo Blue Background */}
    <circle cx="100" cy="100" r="95" fill="#4F46E5" />
    
    {/* Modern Undercut Guy */}
    <g filter="url(#soft-shadow)">
      {/* Shoulders / Casual denim jacket */}
      <path d="M45 160 L155 160 L140 125 Q100 115 60 125 Z" fill="#1E3A8A" />
      <path d="M85 125 L100 145 L115 125 Z" fill="#0F172A" />
      {/* Neck */}
      <rect x="92" y="105" width="16" height="25" fill="#E8BCA5" />
      {/* Face */}
      <circle cx="100" cy="85" r="23" fill="#E8BCA5" />
      {/* Trendy Undercut Hair (Shaved sides) */}
      <path d="M77 82 C77 58 123 58 123 82 Z" fill="#1C1917" />
      <path d="M77 85 C77 65 123 65 123 85 Z" fill="#292524" opacity="0.4" />
      <path d="M82 72 Q100 60 118 72 Z" fill="#1C1917" />
    </g>
  </svg>
);

// 16. AVATAR NEHA
export const AvatarNeha = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Creative Deep Teal Background */}
    <circle cx="100" cy="100" r="95" fill="#0D9488" />
    
    {/* Female Creator Silhouette with bangs and retro spectacles */}
    <g filter="url(#soft-shadow)">
      {/* Rust Jacket shoulders */}
      <path d="M50 160 L150 160 L140 130 Q100 115 60 130 Z" fill="#C2410C" />
      {/* Neck */}
      <rect x="92" y="110" width="16" height="20" fill="#E5B299" />
      {/* Face */}
      <circle cx="100" cy="90" r="22" fill="#E5B299" />
      {/* Hair bangs overlay */}
      <path d="M78 85 C78 62 122 62 122 85 Z" fill="#1C1917" />
      <rect x="78" y="70" width="44" height="15" fill="#1C1917" />
      {/* Retro Round Glasses */}
      <circle cx="90" cy="88" r="8" stroke="#1C1917" strokeWidth="2.5" fill="none" />
      <line x1="98" y1="88" x2="102" y2="88" stroke="#1C1917" strokeWidth="2.5" />
      <circle cx="110" cy="88" r="8" stroke="#1C1917" strokeWidth="2.5" fill="none" />
    </g>
  </svg>
);

// 17. CONTACT LOCATION MAP REPLACEMENT
export const ContactLocationMap = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <GradientsAndFilters />
    {/* Deep Royal Charcoal Map Base */}
    <rect width="800" height="600" fill="#141E1B" />

    {/* Abstract Grid Roads (Map design feel) */}
    <g stroke="#1C2F29" strokeWidth="3" opacity="0.8">
      {/* Horizontal roads */}
      <line x1="0" y1="120" x2="800" y2="120" />
      <line x1="0" y1="260" x2="800" y2="260" />
      <line x1="0" y1="420" x2="800" y2="420" strokeWidth="5" />
      <line x1="0" y1="520" x2="800" y2="520" />

      {/* Vertical roads */}
      <line x1="180" y1="0" x2="180" y2="600" />
      <line x1="360" y1="0" x2="360" y2="600" strokeWidth="5" />
      <line x1="580" y1="0" x2="580" y2="600" />

      {/* Diagonal stylish expressway */}
      <line x1="-50" y1="650" x2="850" y2="-50" stroke="url(#gold-grad)" strokeWidth="6" opacity="0.35" />
    </g>

    {/* Flowing river segment */}
    <path d="M0 480 Q150 490 300 440 T600 480 T800 450" stroke="#1E463C" strokeWidth="25" strokeLinecap="round" fill="none" opacity="0.5" />

    {/* Location Pulsing Wave */}
    <circle cx="360" cy="260" r="50" fill="url(#lamp-glow)" opacity="0.4" className="animate-pulse" />
    <circle cx="360" cy="260" r="25" fill="url(#lamp-glow)" opacity="0.6" />

    {/* Elegant Golden Pointer (Luxury pin) */}
    <g filter="url(#soft-shadow)">
      <path d="M360 260 C340 230 330 210 330 190 A30 30 0 0 1 390 190 C390 210 380 230 360 260 Z" fill="url(#gold-grad)" />
      <circle cx="360" cy="190" r="10" fill="#141E1B" />
    </g>

    {/* Stylish Floating HUD Marker Overlay */}
    <g filter="url(#card-shadow)">
      <rect x="420" y="140" width="280" height="110" rx="16" fill="#111B18" stroke="url(#gold-grad)" strokeWidth="2" />
      <text x="445" y="178" fill="#DFBA6B" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif" letterSpacing="1">
        KITCHENSPACE STUDIO
      </text>
      <text x="445" y="202" fill="#E2E8F0" fontSize="12" fontFamily="Inter, sans-serif">
        Premium Experience Center
      </text>
      <text x="445" y="222" fill="#94A3B8" fontSize="11" fontFamily="Inter, sans-serif">
        Plot 42, Sector 5, Bangalore
      </text>
    </g>
  </svg>
);

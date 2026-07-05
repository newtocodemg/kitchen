import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Sparkles, Calendar, Check, ArrowRight } from 'lucide-react';

interface EstimateYourKitchenProps {
  onOpenConsultation: (notes?: string) => void;
}

const STEPS = [
  { id: 1, label: 'Kitchen Shape' },
  { id: 2, label: 'Kitchen Size' },
  { id: 3, label: 'Finish Preference' },
  { id: 4, label: 'Target Budget' }
];

const SHAPE_OPTIONS = [
  { value: 'L-Shaped', label: 'L-Shaped', desc: 'Maximizes corners, great for small-to-medium rooms.', icon: '📐', multiplier: 1.0 },
  { value: 'U-Shaped', label: 'U-Shaped', desc: 'Continuous prep counter, perfect for cooking enthusiasts.', icon: '🚪', multiplier: 1.25 },
  { value: 'Parallel', label: 'Parallel', desc: 'Highly efficient galley-style design with twin counters.', icon: '🔁', multiplier: 1.15 },
  { value: 'Island', label: 'Island', desc: 'Ultimate luxury with central prep, dining, or washing zone.', icon: '🏝️', multiplier: 1.45 },
  { value: 'Open Kitchen', label: 'Open Kitchen', desc: 'Blends seamlessly into your dining or living areas.', icon: '🏠', multiplier: 1.35 }
];

const SIZE_OPTIONS = [
  { value: 'Small', label: 'Small (Under 80 sq.ft)', desc: 'Optimized for compact, high-efficiency city living.', basePrice: 280000 },
  { value: 'Medium', label: 'Medium (80 - 150 sq.ft)', desc: 'Perfect balance of storage space and movement freedom.', basePrice: 460000 },
  { value: 'Large', label: 'Large (Above 150 sq.ft)', desc: 'Generous dimensions with full pantry and double counter capability.', basePrice: 690000 }
];

const FINISH_OPTIONS = [
  { value: 'Laminate', label: 'Laminate (High Gloss/Matte)', desc: 'Highly durable, easy to maintain, scratch-resistant.', multiplier: 1.0 },
  { value: 'Acrylic', label: 'Acrylic Premium', desc: 'Stunning mirror-like high gloss reflective surface.', multiplier: 1.25 },
  { value: 'PU Finish', label: 'PU Lacquer Finish', desc: 'Seamless, luxurious satin painted look with zero edges.', multiplier: 1.4 },
  { value: 'Veneer', label: 'Natural Wood Veneer', desc: 'Rich, organic timber aesthetics for premium classic styling.', multiplier: 1.55 },
  { value: 'Glass', label: 'Tinted / Back-painted Glass', desc: 'Ultra-modern, highly resistant, and easy to clean.', multiplier: 1.65 }
];

const BUDGET_OPTIONS = [
  { value: '3-5L', label: '₹3 – 5 Lakhs', rangeLabel: '₹3 - 5 Lakhs' },
  { value: '5-8L', label: '₹5 – 8 Lakhs', rangeLabel: '₹5 - 8 Lakhs' },
  { value: '8-12L', label: '₹8 – 12 Lakhs', rangeLabel: '₹8 - 12 Lakhs' },
  { value: '12L+', label: '₹12 Lakhs+', rangeLabel: 'Above ₹12 Lakhs' }
];

export default function EstimateYourKitchen({ onOpenConsultation }: EstimateYourKitchenProps) {
  const [step, setStep] = useState(1);
  const [selectedShape, setSelectedShape] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetEstimator = () => {
    setSelectedShape('');
    setSelectedSize('');
    setSelectedFinish('');
    setSelectedBudget('');
    setStep(1);
  };

  // Helper validation for each step to enable NEXT button
  const isStepValid = () => {
    if (step === 1) return selectedShape !== '';
    if (step === 2) return selectedSize !== '';
    if (step === 3) return selectedFinish !== '';
    if (step === 4) return selectedBudget !== '';
    return false;
  };

  // Calculate dynamic indicative cost based on choices
  const calculateEstimate = () => {
    const sizeObj = SIZE_OPTIONS.find((s) => s.value === selectedSize);
    const shapeObj = SHAPE_OPTIONS.find((s) => s.value === selectedShape);
    const finishObj = FINISH_OPTIONS.find((f) => f.value === selectedFinish);

    if (!sizeObj || !shapeObj || !finishObj) return { min: 300000, max: 400000 };

    const base = sizeObj.basePrice;
    const shapeMultiplier = shapeObj.multiplier;
    const finishMultiplier = finishObj.multiplier;

    const price = base * shapeMultiplier * finishMultiplier;
    
    // Add ±10% range buffer
    const min = Math.round((price * 0.93) / 10000) * 10000;
    const max = Math.round((price * 1.07) / 10000) * 10000;

    return { min, max };
  };

  const formatLakhs = (val: number) => {
    const lakhs = val / 100000;
    return `₹${lakhs.toFixed(2)} Lakhs`;
  };

  const { min, max } = calculateEstimate();

  const handleBookConsultation = () => {
    const notesStr = `Customer dynamically ran instant estimate. Selections: Shape: ${selectedShape}, Size: ${selectedSize}, Finish: ${selectedFinish}, Target Budget: ${selectedBudget}. Generated indicative estimate: ${formatLakhs(min)} - ${formatLakhs(max)}`;
    onOpenConsultation(notesStr);
  };

  return (
    <section id="estimator" className="py-28 sm:py-36 bg-[#F7F4EF]/70 relative z-10 border-t border-stone-200/40">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-accent/20 animate-pulse pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-primary/25 animate-ping pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="flex justify-center">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              FREE ESTIMATE
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Get an Instant Kitchen Estimate
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
            Answer a few simple questions to receive a rough estimate before booking your consultation.
          </p>
        </div>

        {/* MAIN ESTIMATOR COMPOSURE CARD */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-stone-200/55 rounded-[24px] shadow-xl overflow-hidden p-8 sm:p-10 relative"
          >
            {/* Absolute sparkle badge */}
            <div className="absolute top-6 right-6 text-accent/25">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Stepper Progress Indicator */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-400">
                <span>Step {step} of 4: <span className="text-primary">{STEPS[step - 1].label}</span></span>
                <span className="text-accent">{Math.round((step / 4) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-primary h-full"
                  initial={{ width: '25%' }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* STEP CAROUSEL TRANSITIONS */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: SHAPE */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-xl text-primary">Select layout shape or countertop style</h3>
                      <p className="text-xs text-stone-500 max-w-[65ch]">The layout shape influences material waste and hardware cabinet config.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {SHAPE_OPTIONS.map((item) => {
                        const isSelected = selectedShape === item.value;
                        return (
                          <button
                            key={item.value}
                            onClick={() => setSelectedShape(item.value)}
                            className={`p-5 text-left rounded-[20px] border transition-all duration-300 relative group flex gap-4 cursor-pointer focus:outline-none ${
                              isSelected
                                ? 'border-primary bg-primary/5 shadow-md'
                                : 'border-stone-200 bg-white hover:border-secondary hover:shadow-sm'
                            }`}
                          >
                            <span className="text-2xl pt-1">{item.icon}</span>
                            <div className="space-y-1">
                              <p className={`font-display font-bold text-sm ${isSelected ? 'text-primary' : 'text-stone-800'}`}>
                                {item.label}
                              </p>
                              <p className="text-stone-500 text-xs leading-relaxed max-w-[65ch]">
                                {item.desc}
                              </p>
                            </div>
                            {isSelected && (
                              <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: SIZE */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-xl text-primary">Determine approximate kitchen size</h3>
                      <p className="text-xs text-stone-500 max-w-[65ch]">Sizing is the primary contributor to hardware count and cabinet volumes.</p>
                    </div>

                    <div className="space-y-4">
                      {SIZE_OPTIONS.map((item) => {
                        const isSelected = selectedSize === item.value;
                        return (
                          <button
                            key={item.value}
                            onClick={() => setSelectedSize(item.value)}
                            className={`w-full p-5 text-left rounded-[20px] border transition-all duration-300 relative group flex items-center justify-between cursor-pointer focus:outline-none ${
                              isSelected
                                ? 'border-primary bg-primary/5 shadow-md'
                                : 'border-stone-200 bg-white hover:border-secondary hover:shadow-sm'
                            }`}
                          >
                            <div className="space-y-1">
                              <p className={`font-display font-bold text-sm ${isSelected ? 'text-primary' : 'text-stone-800'}`}>
                                {item.label}
                              </p>
                              <p className="text-stone-500 text-xs leading-relaxed max-w-[65ch]">
                                {item.desc}
                              </p>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                              {isSelected && (
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: FINISHES */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-xl text-primary">Choose custom front cabinet finishes</h3>
                      <p className="text-xs text-stone-500 max-w-[65ch]">The finish defines both tactile luxuriousness and structural scratch-resistance.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {FINISH_OPTIONS.map((item) => {
                        const isSelected = selectedFinish === item.value;
                        return (
                          <button
                            key={item.value}
                            onClick={() => setSelectedFinish(item.value)}
                            className={`p-5 text-left rounded-[20px] border transition-all duration-300 relative group flex flex-col justify-between cursor-pointer focus:outline-none ${
                              isSelected
                                ? 'border-primary bg-primary/5 shadow-md'
                                : 'border-stone-200 bg-white hover:border-secondary hover:shadow-sm'
                            }`}
                          >
                            <div className="space-y-1 pb-2">
                              <p className={`font-display font-bold text-sm ${isSelected ? 'text-primary' : 'text-stone-800'}`}>
                                {item.label}
                              </p>
                              <p className="text-stone-500 text-xs leading-relaxed max-w-[65ch]">
                                {item.desc}
                              </p>
                            </div>
                            {isSelected && (
                              <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: BUDGET PREFERENCE */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-xl text-primary">Provide comfortable budget range</h3>
                      <p className="text-xs text-stone-500 max-w-[65ch]">This helps calibrate proposed appliances, countertop brands, and layout tiers.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {BUDGET_OPTIONS.map((item) => {
                        const isSelected = selectedBudget === item.value;
                        return (
                          <button
                            key={item.value}
                            onClick={() => setSelectedBudget(item.value)}
                            className={`p-6 text-center rounded-[20px] border transition-all duration-300 relative group flex flex-col items-center justify-center cursor-pointer focus:outline-none ${
                              isSelected
                                ? 'border-primary bg-primary/5 shadow-md'
                                : 'border-stone-200 bg-white hover:border-secondary hover:shadow-sm'
                            }`}
                          >
                            <span className={`font-display font-bold text-base ${isSelected ? 'text-primary' : 'text-stone-800'}`}>
                              {item.label}
                            </span>
                            {isSelected && (
                              <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* DYNAMIC INSTANT ESTIMATE PREVIEW */}
                    {isStepValid() && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-stone-50 border border-stone-100 rounded-[14px] flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2 text-stone-500 font-medium">
                          <Sparkles className="w-4 h-4 text-accent" />
                          <span>Calculated estimate preview ready:</span>
                        </div>
                        <span className="font-display font-bold text-stone-800 text-sm">
                          {formatLakhs(min)} - {formatLakhs(max)}
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* BUTTON CONTROLS */}
            <div className="flex items-center justify-between pt-8 border-t border-stone-100 mt-8">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border border-stone-200 rounded-[14px] text-stone-600 font-semibold text-xs hover:text-primary hover:border-primary hover:scale-[1.03] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className={`px-6 py-3 rounded-[14px] font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                    isStepValid()
                      ? 'bg-primary text-white hover:bg-primary-light hover:scale-[1.03] hover:shadow-md'
                      : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div />
              )}
            </div>

          </motion.div>

          {/* DYNAMIC SUMMARY OVERLAY MODAL IF FINISHED */}
          <AnimatePresence>
            {step === 4 && selectedBudget && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="mt-8 bg-primary text-white rounded-[24px] border border-stone-800/20 shadow-2xl overflow-hidden p-8 sm:p-10 relative"
              >
                {/* Background gold graphic pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,138,90,0.12),transparent_50%)] pointer-events-none" />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent">INDICATIVE BUDGET GENERATED</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    {/* Dynamic Range display */}
                    <div className="space-y-2">
                      <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Estimated Range</p>
                      <h4 className="font-display font-bold text-3xl sm:text-4xl text-accent tracking-tight">
                        {formatLakhs(min)} – {formatLakhs(max)}
                      </h4>
                      <p className="text-[10px] text-white/50 italic leading-relaxed">
                        *This is only an indicative estimate based on core manufacturing units, excluding custom premium built-in appliances and tax.
                      </p>
                    </div>

                    {/* Choice recap lists */}
                    <div className="space-y-3 bg-white/5 border border-white/10 p-5 rounded-[20px] text-xs">
                      <span className="block text-[9px] uppercase tracking-wider text-white/40 font-bold border-b border-white/10 pb-1.5">
                        Selected Configurations
                      </span>
                      <div className="grid grid-cols-2 gap-y-2.5 text-white/80">
                        <div>
                          <span className="block text-[8px] text-white/40 uppercase font-bold">Layout Shape</span>
                          <span className="font-semibold text-white">{selectedShape}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] text-white/40 uppercase font-bold">Kitchen Size</span>
                          <span className="font-semibold text-white">{selectedSize}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] text-white/40 uppercase font-bold">Cabinet Finish</span>
                          <span className="font-semibold text-white">{selectedFinish}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] text-white/40 uppercase font-bold">Target Range</span>
                          <span className="font-semibold text-accent">{BUDGET_OPTIONS.find(b => b.value === selectedBudget)?.rangeLabel}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={handleBookConsultation}
                      className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-white text-primary-dark hover:text-primary hover:scale-[1.03] transition-all duration-300 font-bold text-sm tracking-wide rounded-[14px] flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98]"
                    >
                      <Calendar className="w-4.5 h-4.5" />
                      <span>Book Free Design Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={resetEstimator}
                      className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-xs font-semibold rounded-[14px] flex items-center justify-center gap-2 text-white cursor-pointer active:scale-[0.98]"
                    >
                      <span>Recalculate Estimate</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}

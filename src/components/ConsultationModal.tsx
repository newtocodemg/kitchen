import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Check, Calendar, Clock, User, Phone, Mail, FileText, Sparkles, AlertCircle } from 'lucide-react';
import { KITCHEN_STYLES } from '../data';
import { ConsultationLead } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedStyleId?: string;
}

export default function ConsultationModal({ isOpen, onClose, preSelectedStyleId }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [selectedStyleId, setSelectedStyleId] = useState(preSelectedStyleId || 'scandinavian-oak');
  const [layoutShape, setLayoutShape] = useState('island');
  const [budgetRange, setBudgetRange] = useState('ultra-luxury');
  const [timeline, setTimeline] = useState('1-3-months');
  
  // Contact details
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [dateSlot, setDateSlot] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  
  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadCreated, setLeadCreated] = useState<ConsultationLead | null>(null);

  // Sync pre-selected style when it changes
  useEffect(() => {
    if (preSelectedStyleId) {
      setSelectedStyleId(preSelectedStyleId);
    }
  }, [preSelectedStyleId]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Listen to escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const layouts = [
    { id: 'island', name: 'Luxury Island Layout', desc: 'Central workspace perfect for entertaining & culinary prep.' },
    { id: 'l-shape', name: 'L-Shape layout', desc: 'Sleek, corner-optimizing design for open-plan living.' },
    { id: 'u-shape', name: 'U-Shape layout', desc: 'Maximum counter space and ultimate workflow efficiency.' },
    { id: 'parallel', name: 'Parallel Galley layout', desc: 'Professional chef setup with dual workspaces.' },
    { id: 'straight', name: 'Straight Wall layout', desc: 'Ultra-minimal space-saving aesthetic for loft environments.' }
  ];

  const budgets = [
    { id: 'premium', name: 'Premium Craft', range: 'From $15,000', desc: 'High-end modular cabinets with premium soft-close & marble.' },
    { id: 'ultra-luxury', name: 'Ultra Luxury Bespoke', range: 'From $30,000', desc: 'Custom veneers, waterfall quartz, and fully integrated appliances.' },
    { id: 'presidential', name: 'Presidential Signature', range: 'From $60,000', desc: 'Book-matched stone, fully automated cabinetry, luxury brand hardware.' }
  ];

  const timelines = [
    { id: 'immediate', name: 'Immediate Project', desc: 'Looking to commence engineering and production within 30 days.' },
    { id: '1-3-months', name: '1 to 3 Months', desc: 'Ideal for homes currently under renovation or construction.' },
    { id: '3-6-months', name: '3 to 6 Months', desc: 'Planning and designing ahead for upcoming builds.' }
  ];

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 4) {
      if (!fullName.trim()) newErrors.fullName = 'Full name is required';
      
      if (!phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[+0-9\s-]{8,15}$/.test(phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }

      if (!email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Please enter a valid email';
      }

      if (!dateSlot) newErrors.dateSlot = 'Please select a preferred date';
      if (!timeSlot) newErrors.timeSlot = 'Please select a preferred hour slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);

    // Simulate luxury booking processing
    setTimeout(() => {
      const newLead: ConsultationLead = {
        id: 'LEAD-' + Math.floor(100000 + Math.random() * 900000),
        fullName,
        email,
        phone,
        preferredStyleId: selectedStyleId,
        layoutShape,
        timeline,
        notes,
        submittedAt: new Date().toISOString(),
        dateSlot,
        timeSlot
      };

      // Store in localStorage to make it real
      const existingLeadsRaw = localStorage.getItem('kitchenspace_leads');
      const existingLeads = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
      existingLeads.unshift(newLead);
      localStorage.setItem('kitchenspace_leads', JSON.stringify(existingLeads));

      setIsSubmitting(false);
      setLeadCreated(newLead);
      setStep(5); // Success step
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setLeadCreated(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setDateSlot('');
    setTimeSlot('');
    setErrors({});
  };

  const handleClose = () => {
    onClose();
    // After closing modal, wait a bit then reset form so they can open clean next time
    setTimeout(() => {
      resetForm();
    }, 300);
  };

  const selectedStyle = KITCHEN_STYLES.find(s => s.id === selectedStyleId) || KITCHEN_STYLES[0];
  const selectedLayoutObj = layouts.find(l => l.id === layoutShape);
  const selectedBudgetObj = budgets.find(b => b.id === budgetRange);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="consultation-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200/50 z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-stone-100 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-primary text-base sm:text-lg">
                    Kitchen Design Consultation
                  </h3>
                  <p className="text-xs text-stone-500">Bespoke 3D Architectural Consultation</p>
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-all duration-200 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Steps Progress Bar (Hide on success page) */}
            {step <= 4 && (
              <div className="bg-stone-50 px-8 py-3.5 flex items-center justify-between border-b border-stone-100 text-xs text-stone-500 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">Step {step} of 4</span>
                  <span className="text-stone-300">|</span>
                  <span className="text-stone-600 font-medium">
                    {step === 1 && 'Select Kitchen Aesthetic'}
                    {step === 2 && 'Choose Layout configuration'}
                    {step === 3 && 'Define Timeline & Scope'}
                    {step === 4 && 'Schedule Consultation'}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-24 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {/* Scrollable Form Content */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-stone-50/30">
              <form onSubmit={handleSubmit} className="h-full">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: STYLE SELECTION */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div className="text-center sm:text-left">
                        <h4 className="font-display font-medium text-lg text-primary">
                          Which design aesthetic inspires your lifestyle?
                        </h4>
                        <p className="text-sm text-stone-500">
                          Select a base style. Our designers will fully customize materials, layouts, and colors.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        {KITCHEN_STYLES.map((style) => (
                          <div
                            key={style.id}
                            onClick={() => setSelectedStyleId(style.id)}
                            className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 bg-white flex flex-col h-full ${
                              selectedStyleId === style.id
                                ? 'border-primary ring-2 ring-primary/10 shadow-md'
                                : 'border-stone-200 hover:border-stone-400 hover:shadow-sm'
                            }`}
                          >
                            <div className="h-28 overflow-hidden relative">
                              <img
                                src={style.image}
                                alt={style.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {selectedStyleId === style.id && (
                                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                                  <Check className="w-3.5 h-3.5" />
                                </div>
                              )}
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                              <div>
                                <h5 className="font-display font-semibold text-stone-800 text-sm">{style.name}</h5>
                                <p className="text-xs text-stone-400 font-medium mt-0.5">{style.tagline}</p>
                                <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                                  {style.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: LAYOUT SELECTION */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div className="text-center sm:text-left">
                        <h4 className="font-display font-medium text-lg text-primary">
                          What is your preferred layout or kitchen shape?
                        </h4>
                        <p className="text-sm text-stone-500">
                          Based on your room shape, select your optimal architectural configuration.
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        {layouts.map((layout) => (
                          <div
                            key={layout.id}
                            onClick={() => setLayoutShape(layout.id)}
                            className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 bg-white flex items-center justify-between ${
                              layoutShape === layout.id
                                ? 'border-primary ring-2 ring-primary/10 shadow-sm'
                                : 'border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-sm ${
                                layoutShape === layout.id ? 'bg-primary text-white' : 'bg-stone-100 text-stone-500'
                              }`}>
                                {layout.id.slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h5 className="font-display font-semibold text-stone-800 text-sm">{layout.name}</h5>
                                <p className="text-xs text-stone-500 mt-0.5">{layout.desc}</p>
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              layoutShape === layout.id ? 'border-primary bg-primary text-white' : 'border-stone-300'
                            }`}>
                              {layoutShape === layout.id && <Check className="w-3 h-3" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: SCOPE, BUDGET & TIMELINE */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center sm:text-left">
                        <h4 className="font-display font-medium text-lg text-primary">
                          Define your kitchen project scope & budget
                        </h4>
                        <p className="text-sm text-stone-500">
                          We accommodate premium and ultra-luxury projects. Sharing budget targets helps us tailor the stone and mechanism suggestions.
                        </p>
                      </div>

                      <div className="space-y-4 pt-2">
                        {/* Budget Section */}
                        <div>
                          <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                            Aesthetic & Fabrication Class
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {budgets.map((b) => (
                              <div
                                key={b.id}
                                onClick={() => setBudgetRange(b.id)}
                                className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 bg-white flex flex-col justify-between ${
                                  budgetRange === b.id
                                    ? 'border-primary ring-2 ring-primary/10 shadow-sm'
                                    : 'border-stone-200 hover:border-stone-400'
                                }`}
                              >
                                <div>
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-display font-semibold text-stone-800 text-xs sm:text-sm">{b.name}</h5>
                                    {budgetRange === b.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                                  </div>
                                  <p className="text-xs text-secondary font-semibold mt-1">{b.range}</p>
                                  <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">{b.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="pt-2">
                          <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                            When would you like to begin installation?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {timelines.map((t) => (
                              <div
                                key={t.id}
                                onClick={() => setTimeline(t.id)}
                                className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 bg-white flex flex-col text-left ${
                                  timeline === t.id
                                    ? 'border-primary ring-2 ring-primary/10 shadow-sm'
                                    : 'border-stone-200 hover:border-stone-400'
                                }`}
                              >
                                <span className="font-semibold text-stone-800 text-xs sm:text-sm">{t.name}</span>
                                <span className="text-[11px] text-stone-400 mt-1 leading-normal">{t.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: CONTACT & SLOT SELECTION */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center sm:text-left">
                        <h4 className="font-display font-medium text-lg text-primary">
                          Select your consultation appointment & details
                        </h4>
                        <p className="text-sm text-stone-500">
                          Complete your contact registration and choose a convenient slot for our senior architect to call or present the virtual designs.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        {/* Left column: Name, Email, Phone */}
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5" /> Full Name
                            </label>
                            <input
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. Eleanor Vance"
                              className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm focus:outline-none transition-all duration-300 ${
                                errors.fullName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary/20'
                              }`}
                            />
                            {errors.fullName && (
                              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5" /> Mobile Phone
                            </label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="e.g. +1 555-0199"
                              className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm focus:outline-none transition-all duration-300 ${
                                errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary/20'
                              }`}
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5" /> Email Address
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="e.g. eleanor@luxuryhomes.com"
                              className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm focus:outline-none transition-all duration-300 ${
                                errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary/20'
                              }`}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Right column: Slots, notes */}
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" /> Target Date
                              </label>
                              <input
                                type="date"
                                value={dateSlot}
                                onChange={(e) => setDateSlot(e.target.value)}
                                min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // from tomorrow onwards
                                className={`w-full px-4 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none transition-all duration-300 ${
                                  errors.dateSlot ? 'border-red-500 focus:ring-1' : 'border-stone-200 focus:border-primary'
                                }`}
                              />
                              {errors.dateSlot && <p className="text-red-500 text-[10px] mt-1">{errors.dateSlot}</p>}
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" /> Hour Slot
                              </label>
                              <select
                                value={timeSlot}
                                onChange={(e) => setTimeSlot(e.target.value)}
                                className={`w-full px-4 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none transition-all duration-300 ${
                                  errors.timeSlot ? 'border-red-500 focus:ring-1' : 'border-stone-200 focus:border-primary'
                                }`}
                              >
                                <option value="">Select slot</option>
                                <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                                <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                                <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                                <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                              </select>
                              {errors.timeSlot && <p className="text-red-500 text-[10px] mt-1">{errors.timeSlot}</p>}
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5" /> Project Notes (Optional)
                            </label>
                            <textarea
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                              placeholder="Share details such as space measurements or custom materials (e.g., waterfall stone finish, integrated pantry drawers)."
                              rows={3}
                              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 5: SUCCESS PORTFOLIO */}
                  {step === 5 && leadCreated && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 space-y-6 max-w-lg mx-auto"
                    >
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                        <Check className="w-8 h-8 stroke-[2.5]" />
                      </div>

                      <div>
                        <h4 className="font-display font-bold text-2xl text-primary tracking-tight">
                          Consultation Confirmed
                        </h4>
                        <p className="text-sm text-stone-500 mt-2">
                          Thank you, <span className="font-semibold text-stone-800">{leadCreated.fullName}</span>. Your bespoke design profile has been cataloged. Our Senior Design Architect will connect with you shortly.
                        </p>
                      </div>

                      {/* Customized Kitchen Profile Summary Card */}
                      <div className="bg-white p-5 rounded-2xl border border-stone-200/60 shadow-sm text-left divide-y divide-stone-100">
                        <div className="pb-3 text-center">
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2.5 py-1 rounded-full">
                            Draft Portfolio {leadCreated.id}
                          </span>
                        </div>
                        <div className="py-2.5 flex justify-between items-center text-xs">
                          <span className="text-stone-400">Design Aesthetic:</span>
                          <span className="font-semibold text-stone-800">{selectedStyle.name}</span>
                        </div>
                        <div className="py-2.5 flex justify-between items-center text-xs">
                          <span className="text-stone-400">Hardware spec:</span>
                          <span className="font-semibold text-stone-800">{selectedStyle.hardware}</span>
                        </div>
                        <div className="py-2.5 flex justify-between items-center text-xs">
                          <span className="text-stone-400">Layout Shape:</span>
                          <span className="font-semibold text-stone-800">
                            {selectedLayoutObj?.name || layoutShape}
                          </span>
                        </div>
                        <div className="py-2.5 flex justify-between items-center text-xs">
                          <span className="text-stone-400">Class & Budget:</span>
                          <span className="font-semibold text-stone-800">
                            {selectedBudgetObj?.name} ({selectedBudgetObj?.range})
                          </span>
                        </div>
                        <div className="py-2.5 flex justify-between items-center text-xs">
                          <span className="text-stone-400">Appointment Slot:</span>
                          <span className="font-semibold text-primary flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-accent" />
                            {leadCreated.dateSlot} at {leadCreated.timeSlot?.split(' ')[0]}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 hover:scale-[1.03] rounded-[14px] text-sm font-medium shadow-md transition-all duration-300"
                        >
                          Return to Studio
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                </AnimatePresence>
              </form>
            </div>

            {/* Footer Buttons (Hide on success page) */}
            {step <= 4 && (
              <div className="p-6 sm:p-8 border-t border-stone-100 bg-stone-50 flex items-center justify-between shrink-0">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors focus:outline-none"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div className="w-2" />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 bg-primary text-white hover:bg-primary-light hover:scale-[1.03] font-medium rounded-[14px] text-sm flex items-center gap-2 shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-8 py-3.5 bg-primary text-white font-medium rounded-[14px] text-sm flex items-center gap-2 shadow-md transition-all duration-300 cursor-pointer ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed bg-stone-700' : 'hover:bg-primary-light hover:scale-[1.03]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Reserving Slot...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>Confirm Consultation</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

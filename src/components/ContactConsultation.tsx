import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Check, AlertCircle, ShieldCheck, Calendar, Sparkles, Map } from 'lucide-react';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  kitchenType: string;
  budgetRange: string;
  consultationDate: string;
  message: string;
  agreeToPolicy: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  agreeToPolicy?: string;
}

export default function ContactConsultation() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    kitchenType: 'L-Shaped Modular Kitchen',
    budgetRange: '₹5 - 8 Lakhs',
    consultationDate: '',
    message: '',
    agreeToPolicy: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (form.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters long';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!phoneRegex.test(form.phone.replace(/[\s-+]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.city.trim()) {
      newErrors.city = 'Please enter your city';
    }

    if (!form.agreeToPolicy) {
      newErrors.agreeToPolicy = 'You must agree to the privacy policy to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      if (name === 'agreeToPolicy' && checked) {
        setErrors((prev) => ({ ...prev, agreeToPolicy: undefined }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server side API ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setForm({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      kitchenType: 'L-Shaped Modular Kitchen',
      budgetRange: '₹5 - 8 Lakhs',
      consultationDate: '',
      message: '',
      agreeToPolicy: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#FAF8F5] border-t border-stone-200/40 relative z-10 overflow-hidden">
      
      {/* FLOATING DECORATIONS */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#B88A5A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Let's Design Your Dream Kitchen
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-[65ch] mx-auto">
            Book your free premium consultation slot today. Our senior design advisors will visit your site, provide custom 3D models, and offer complete material estimates.
          </p>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Contact details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* FREE SITE VISIT BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#1E4D3D]/10 border border-[#1E4D3D]/25 px-4.5 py-2.5 rounded-[14px] text-xs font-bold text-[#1E4D3D] shadow-xs uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Free Site Visit & Consultation Available</span>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-5 rounded-[20px] border border-stone-200/40 shadow-xs space-y-2.5 hover:border-stone-300 hover:shadow-md transition-all duration-300">
                <div className="w-9 h-9 rounded-[14px] bg-[#1E4D3D]/10 text-primary flex items-center justify-center">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-400">Phone Support</h4>
                  <p className="text-primary font-bold text-sm sm:text-base mt-0.5">1800-123-5482</p>
                  <p className="text-[11px] text-stone-500 font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-[20px] border border-stone-200/40 shadow-xs space-y-2.5 hover:border-stone-300 hover:shadow-md transition-all duration-300">
                <div className="w-9 h-9 rounded-[14px] bg-[#1E4D3D]/10 text-primary flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-400">Email Address</h4>
                  <p className="text-primary font-bold text-sm sm:text-base mt-0.5">design@kitchenspace.in</p>
                  <p className="text-[11px] text-stone-500 font-medium">info@kitchenspacestudio.com</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-[20px] border border-stone-200/40 shadow-xs space-y-2.5 hover:border-stone-300 hover:shadow-md transition-all duration-300 sm:col-span-2">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-[14px] bg-[#1E4D3D]/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-400">Studio Address</h4>
                    <p className="text-primary font-bold text-sm">KitchenSpace Design HQ & Experience Center</p>
                    <p className="text-xs text-stone-500 leading-relaxed max-w-[65ch]">
                      Plot 45, Sector 44, Near Huda City Centre, Gurugram, Haryana - 122003
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-[20px] border border-stone-200/40 shadow-xs space-y-2.5 hover:border-stone-300 hover:shadow-md transition-all duration-300 sm:col-span-2">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-[14px] bg-[#1E4D3D]/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-400">Working Hours</h4>
                    <p className="text-primary font-bold text-sm">Experience Center Timings</p>
                    <p className="text-xs text-stone-500 leading-relaxed max-w-[65ch]">
                      Monday to Sunday: 10:00 AM – 8:00 PM (Prior appointment recommended)
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* GOOGLE MAPS PLACEHOLDER */}
            <div className="bg-white p-4 rounded-[24px] border border-stone-200/50 shadow-md space-y-3">
              <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-stone-100 border border-stone-100 flex flex-col justify-between p-4 select-none">
                
                {/* Simulated Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-80 z-0" />
                
                {/* Styled Map HUD */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="text-[10px] bg-primary/90 text-white font-mono uppercase px-2.5 py-1 rounded-[14px] flex items-center gap-1">
                    <Map className="w-3.5 h-3.5" /> Studio Coordinates
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">28.4595° N, 77.0266° E</span>
                </div>

                {/* Simulated Location Anchor */}
                <div className="relative z-10 flex flex-col items-center justify-center mx-auto my-auto -translate-y-2">
                  <motion.div 
                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="absolute w-12 h-12 rounded-full bg-secondary/20 z-0"
                  />
                  <div className="w-5 h-5 rounded-full bg-secondary border-2 border-white shadow-md z-10 relative" />
                  <span className="bg-white text-[10px] font-bold text-primary px-3 py-1 rounded-[14px] shadow-md border border-stone-100 mt-2 z-10">
                    KitchenSpace Studio HQ
                  </span>
                </div>

                {/* Map Bottom Hud */}
                <div className="relative z-10 flex items-center justify-between w-full bg-stone-50/90 backdrop-blur-md px-3 py-2 rounded-[14px] border border-stone-200/50">
                  <div className="text-[10px] text-stone-600 font-medium">Sector 44, Gurugram, India</div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[10px] font-bold text-secondary hover:underline cursor-pointer"
                  >
                    Open in Maps
                  </a>
                </div>

              </div>
              <p className="text-[11px] text-stone-400 text-center font-medium max-w-[65ch] mx-auto">
                📍 Situated just 2 minutes away from the Huda City Centre metro station. Valet parking is available.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: CONSULTATION FORM */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[24px] border border-stone-200/50 shadow-xl relative overflow-hidden">
            
            {/* Ambient aesthetic light */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/5 blur-xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="consultation-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-stone-100 pb-4">
                    <h3 className="font-display font-bold text-lg text-primary">Luxury Site Request & 3D Estimation</h3>
                    <p className="text-xs text-stone-400">Receive custom sketches and exact material costs from our team.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* FULL NAME */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-[14px] border text-sm text-primary font-medium focus:outline-none focus:ring-4 transition-all ${
                          errors.fullName
                            ? 'border-red-300 focus:ring-red-100'
                            : 'border-stone-200 focus:border-secondary focus:ring-secondary/15'
                        }`}
                        placeholder="e.g. Ananya Sen"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-[14px] border text-sm text-primary font-medium focus:outline-none focus:ring-4 transition-all ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-100'
                            : 'border-stone-200 focus:border-secondary focus:ring-secondary/15'
                        }`}
                        placeholder="e.g. 9876543210"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-[14px] border text-sm text-primary font-medium focus:outline-none focus:ring-4 transition-all ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-100'
                            : 'border-stone-200 focus:border-secondary focus:ring-secondary/15'
                        }`}
                        placeholder="e.g. ananya@gmail.com"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* CITY */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="city">
                        City *
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-[14px] border text-sm text-primary font-medium focus:outline-none focus:ring-4 transition-all ${
                          errors.city
                            ? 'border-red-300 focus:ring-red-100'
                            : 'border-stone-200 focus:border-secondary focus:ring-secondary/15'
                        }`}
                        placeholder="e.g. Gurugram"
                      />
                      {errors.city && (
                        <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>

                    {/* KITCHEN TYPE */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="kitchenType">
                        Kitchen Type
                      </label>
                      <select
                        id="kitchenType"
                        name="kitchenType"
                        value={form.kitchenType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[14px] border border-stone-200 text-sm text-primary font-medium bg-white focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 transition-all cursor-pointer"
                      >
                        <option>L-Shaped Modular Kitchen</option>
                        <option>U-Shaped Cozy Kitchen</option>
                        <option>Parallel Galley Kitchen</option>
                        <option>Island Modular Layout</option>
                        <option>Straight Minimal Layout</option>
                        <option>Open Studio Kitchen</option>
                      </select>
                    </div>

                    {/* BUDGET RANGE */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="budgetRange">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={form.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[14px] border border-stone-200 text-sm text-primary font-medium bg-white focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 transition-all cursor-pointer"
                      >
                        <option>₹3 - 5 Lakhs</option>
                        <option>₹5 - 8 Lakhs</option>
                        <option>₹8 - 12 Lakhs</option>
                        <option>₹12+ Lakhs</option>
                      </select>
                    </div>

                  </div>

                  {/* PREFERRED CONSULTATION DATE */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="consultationDate">
                      Preferred Consultation Date *
                    </label>
                    <div className="relative">
                      <input
                        id="consultationDate"
                        type="date"
                        name="consultationDate"
                        value={form.consultationDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-[14px] border border-stone-200 text-sm text-primary font-medium focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider" htmlFor="message">
                      Tell Us About Your Space (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[14px] border border-stone-200 text-sm text-primary font-medium focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 transition-all resize-none"
                      placeholder="e.g. Dimensions of my kitchen, layout preferences, and timing for construction..."
                    />
                  </div>

                  {/* PRIVACY AGREEMENT CHECKBOX */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <input
                        id="agreeToPolicy"
                        type="checkbox"
                        name="agreeToPolicy"
                        checked={form.agreeToPolicy}
                        onChange={handleChange}
                        className="h-4.5 w-4.5 rounded text-secondary border-stone-300 focus:ring-secondary/20 cursor-pointer mt-0.5"
                      />
                      <label htmlFor="agreeToPolicy" className="text-xs text-stone-500 leading-relaxed cursor-pointer select-none">
                        I agree to the privacy policy. I understand KitchenSpace Studio will contact me to arrange physical site surveys and designs.
                      </label>
                    </div>
                    {errors.agreeToPolicy && (
                      <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 pl-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.agreeToPolicy}</span>
                      </p>
                    )}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-[14px] bg-primary text-white font-bold text-sm tracking-wider uppercase hover:bg-primary-light hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Reserving Your Slot...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4.5 h-4.5 text-accent" />
                        <span>Book My Free Consultation</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-stone-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your data is confidential and secured with E2E encryption</span>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center justify-center h-full min-h-[450px]"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center shadow-md">
                    <Check className="w-10 h-10 stroke-[2.5]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-primary">Consultation Confirmed!</h3>
                    <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-primary">{form.fullName}</span>. Your free design consultation is successfully scheduled. Our Gurugram Experience Center has reserved your slot for <span className="font-bold text-secondary">{form.consultationDate}</span>.
                    </p>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-[20px] border border-stone-100 w-full max-w-md text-left space-y-3">
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest block border-b border-stone-200/50 pb-2">
                      Next Step Blueprint
                    </span>
                    <div className="space-y-2.5 text-xs text-stone-600">
                      <p className="flex gap-2">
                        <span className="font-bold text-secondary">Step 1:</span>
                        <span>A senior design consultant will call you within 2-4 hours to verify space details.</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-secondary">Step 2:</span>
                        <span>We will prepare 3D floor plan structures based on your chosen layout ({form.kitchenType}).</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-[14px] border border-stone-200 text-xs font-semibold text-stone-500 hover:text-primary hover:border-stone-400 hover:scale-[1.03] transition-all cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}

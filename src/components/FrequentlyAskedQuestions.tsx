import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How long does installation take?',
    answer: 'Our precision-engineered modular kitchens are manufactured in our high-tech automated facility, which takes about 4 to 6 weeks. Once delivered to your home, the physical on-site installation by our certified white-glove technicians is completed in just 3 to 5 days, minimizing disruption to your daily routine.'
  },
  {
    question: 'Do you provide 3D kitchen designs?',
    answer: 'Yes, absolutely. We provide fully immersive, detailed 3D design visualizations and floor plans as part of our consultation process. This allows you to walk through your kitchen layout, test different finish combinations (like walnut, oak, acrylic), and finalize hardware selections before we begin manufacturing.'
  },
  {
    question: 'Can you customize designs for small kitchens?',
    answer: 'Yes, customization is our core strength. Whether you have a compact apartment kitchen or a large villa space, our design team specializes in space optimization. We integrate smart storage solutions like corner carousels, magic pull-outs, and vertical pantry units to maximize every square inch.'
  },
  {
    question: 'What materials do you use?',
    answer: 'We use only premium, eco-certified materials. Our cabinet cores are built from high-density, moisture-resistant (MR) boards and E1-grade plywood to prevent warping. For finishes, we offer imported walnut veneers, high-gloss acrylics, premium laminates, and anti-fingerprint thermal foils paired with world-class Blum and Hettich hardware.'
  },
  {
    question: 'Is there a warranty?',
    answer: 'Yes, all KitchenSpace Studio kitchens come with a comprehensive 10-year warranty on our cabinetry and a lifetime warranty on premium hardware (such as Blum hinges and drawer slides). This ensures complete peace of mind and long-term durability for your investment.'
  },
  {
    question: 'Do you work outside your city?',
    answer: 'Yes, we actively undertake premium modular kitchen projects in major metropolitan areas and adjacent Tier-1/Tier-2 hubs. Contact our team to confirm service availability for your specific location; our measurement and design consultation experts can coordinate visits accordingly.'
  },
  {
    question: 'Can I renovate my existing kitchen?',
    answer: 'Yes, we specialize in complete end-to-end transformations. We manage the dismantling of your outdated kitchen, plumbing adjustments, electrical rewiring, countertop installation, and final modular cabinet integration, turning your old space into a premium luxury masterpiece.'
  },
  {
    question: 'How do I book a consultation?',
    answer: 'Booking is simple and free. You can fill out our online consultation form on this website, click any of our "Book Free Consultation" buttons, or reach out to us via our floating WhatsApp chat. Our team will contact you within 24 hours to schedule your virtual or physical session.'
  }
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-white relative overflow-hidden z-10 border-t border-stone-200/40">
      {/* Decorative premium elements */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#1E4D3D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-32 w-80 h-80 bg-[#B88A5A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* GRID LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        
        {/* LEFT COLUMN: FAQ Intro details */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-4 py-2 rounded-[14px]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              FAQ
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-tight">
              Everything You Need to Know
            </h2>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-[65ch]">
              Have questions about process, timeline, materials, or warranties? Read through our frequently asked questions, or reach out to our team directly.
            </p>
          </div>

          <div className="bg-stone-50 p-6 rounded-[20px] border border-stone-200/50 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[14px] bg-secondary/10 flex items-center justify-center text-secondary">
                <HelpCircle className="w-5 h-5" />
              </div>
              <p className="font-display font-bold text-primary text-sm sm:text-base">Still have questions?</p>
            </div>
            <p className="text-stone-500 text-xs sm:text-sm max-w-[65ch]">
              Our design managers are available every day for custom inquiries. Chat with us to resolve any spatial or material doubts instantly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-secondary-light transition-colors group"
            >
              <MessageSquare className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span className="relative">
                Message our Design Studio
                <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-secondary/40 origin-left transition-transform scale-x-0 group-hover:scale-x-100" />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: ACCORDION LAYOUT */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[20px] border transition-all duration-300 ${
                  isOpen
                    ? 'border-secondary/40 bg-white shadow-md'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                {/* Trigger head button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 rounded-[20px] cursor-pointer group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-display font-bold text-primary text-sm sm:text-base tracking-tight group-hover:text-secondary transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-secondary text-white border-secondary'
                        : 'bg-stone-50 text-stone-600 border-stone-200'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.span>
                </button>

                {/* Answer body panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-stone-100 mt-1">
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed pt-4 font-sans max-w-[65ch]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

/* FAQ — Accordion Q&A page */
import { useState } from "react";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const BOUQUET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-bouquet-mBkjemLEznxx2FvxU8KnpF.webp";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend 1–2 weeks in advance for all decoration bookings. Last-minute bookings under 5 days are accepted with a $100 late booking fee. The earlier you book, the more availability we can offer for your preferred date and time.",
  },
  {
    question: "Do you set up at hotels, homes, and Airbnbs?",
    answer: "Yes! We set up at hotels, apartments, homes, and Airbnbs across Perth, WA. We're flexible with locations and will work with you to ensure the setup is perfect regardless of the venue. Please ensure your accommodation is confirmed before booking.",
  },
  {
    question: "How do payments work?",
    answer: "A 50% deposit via bank transfer secures your booking. The remaining balance is due 24 hours before your event. Once the deposit is received, we'll send an invoice to your preferred contact with all the details.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Please refer to our Cancellation & Reschedule Policy page for full details. In short: cancellations within 48 hours of the reservation forfeit the full non-refundable deposit along with any additional payments made. We encourage you to contact us as soon as possible if your plans change.",
  },
  {
    question: "What if I need to change my booking location or theme?",
    answer: "All changes to location or theme/colour must be made at least 72 hours prior to your booking. This gives us enough time to adjust our preparations and ensure everything is perfect for your event.",
  },
  {
    question: "Do you offer a cleaning service?",
    answer: "Yes, we offer a next-day cleaning add-on for $85. Otherwise, the client is responsible for cleanup after the event. Please note that the hotel or Airbnb may charge extra for leaving the room uncleaned.",
  },
  {
    question: "Is there a late fee if I'm not ready on time?",
    answer: "Yes, a $20 late window fee applies for every 15 minutes past the agreed set-up time. We allow a 15-minute grace period from the arranged meet-up time. The late window fee is due upon arrival before setup begins.",
  },
  {
    question: "Do you travel outside of Perth?",
    answer: "We primarily service the Perth metropolitan area. A travel fee will be included in your invoice depending on the booking location. For locations outside of Perth, please contact us to discuss availability and pricing.",
  },
  {
    question: "How do I enter your giveaways?",
    answer: "Follow us on Instagram and TikTok @kimzheartsandroses and watch for giveaway posts! We regularly host competitions with amazing prizes including full room setups and luxury bouquets. Check our Giveaways page for current and past competitions.",
  },
  {
    question: "Can I add a cleaning service to my booking?",
    answer: "Yes, contact us to add the $85 next-day cleaning service to your booking. We'll come back the following day to clean up the décor, petals, candles, and any other items from your setup so you don't have to worry about a thing.",
  },
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-start gap-4 pr-4">
          <span className="text-[#C9A96E] text-xs font-sans tracking-wider mt-1 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-lg lg:text-xl group-hover:text-[#C0002A] transition-colors">
            {item.question}
          </h3>
        </div>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 flex-shrink-0 text-gray-400 ${open ? "rotate-180 text-[#C0002A]" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-10 pb-6">
              <p className="text-gray-600 font-light leading-relaxed mb-4">{item.answer}</p>
              <a
                href="mailto:kimzheartsandroses@outlook.com"
                className="inline-flex items-center gap-2 text-[#C0002A] text-sm hover:underline"
              >
                Still have questions? Contact us <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={BOUQUET_IMG} alt="FAQ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Help</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-white">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gray-600 font-light leading-relaxed text-center mb-12">
              Find answers to our most commonly asked questions below. If you can't find what you're looking for, feel free to reach out to us directly.
            </p>
          </ScrollReveal>

          <div>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <FAQAccordion item={faq} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center mt-16 bg-[#faf8f6] p-12">
              <h3 className="font-serif text-2xl mb-3">Still Have Questions?</h3>
              <p className="text-gray-500 font-light mb-6">We'd love to hear from you. Get in touch and we'll get back to you as soon as possible.</p>
              <a
                href="mailto:kimzheartsandroses@outlook.com"
                className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-8 py-3 text-sm tracking-wider hover:bg-[#8B001E] transition-colors"
              >
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

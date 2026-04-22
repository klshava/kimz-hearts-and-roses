/* Policies — 7 accordion sections with crimson headers */
import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-romantic-room-PEnY77myoPNMhj4etqxDna.webp";

interface PolicySection {
  title: string;
  items: string[];
}

const policies: PolicySection[] = [
  {
    title: "Decoration Service Policy: Bookings",
    items: [
      "1–2 weeks notice is required in advance for all decoration bookings.",
      "Last minute bookings (less than 5 days) are welcome; however, an additional **late booking fee of $100** will be charged.",
      "Payments must be made in advance — **same day payments are not accepted**.",
      "Kim Luxury Events is available to set up at your hotel, apartment, home, or Airbnb in Perth, WA.",
      "All changes to location or theme/colour must be made **72 hours prior** to the booked time. Ensure your accommodation is confirmed before making a booking, and ensure the hotel is fully aware that you have booked a decorating service with us.",
    ],
  },
  {
    title: "Set-up Duration",
    items: [
      "Depending on the package booked, please allow the required set-up duration.",
      "We will arrange a meet-up time; once we arrive, a **15-minute late window** applies.",
      "A **late window fee of $20** will apply after every 15 minutes past the booking time.",
      "The late window fee is due upon arrival and must be deposited before set-up begins.",
    ],
  },
  {
    title: "Cancellation & Reschedule Policy",
    items: [
      "Please contact us immediately if you need to cancel your reservation.",
      "If a client cancels within **5 days** of booking, a reschedule can be done within 14 days, and 50% of the non-refundable deposit will be transferred to the new booking.",
      "If a client cancels within **2 days or less**, 50% of the deposit is not transferable and non-refundable.",
      "If a client cancels within **48 hours** of the reservation for any reason, they forfeit the non-refundable deposit along with any additional payments made. We will not transfer the original deposit to a new booking.",
      "If a client wishes to reschedule within **24 hours**, they will be subject to a **$100 rebooking fee**. The reschedule is dependent upon Kim Luxury Events' availability.",
    ],
  },
  {
    title: "Payments & Invoicing",
    items: [
      "A **50% deposit** is required to secure your booking. Payments are via bank transfer.",
      "The remaining balance is due **24 hours before** your booking.",
      "Once the deposit is received, an invoice will be sent to your preferred contact. Please read your invoice carefully and ensure all details are correct.",
      "Please note: a **travel fee** will be included in your invoice depending on the location of the booking.",
    ],
  },
  {
    title: "Hotel Check-in Policy",
    items: [
      "Please ensure you have checked into your hotel before our arrival.",
      "We are unable to check in on your behalf.",
      "To gain access to your room, you may either: **Meet us in the lobby** 10 minutes before your set-up time and provide us with the key, or **Notify front desk staff** to add our decorator's name to your booking prior to the appointment. Kim Luxury Events will provide you with a name in advance.",
      "Once set-up is complete, the key will be left in the room as arranged.",
    ],
  },
  {
    title: "Cleaning Service Policy",
    items: [
      "Your booking is confirmed with the understanding that Kim Luxury Events is **not responsible** for any cleaning or damages upon client departure.",
      "You are solely responsible for cleaning up, unless you have booked our **next-day cleaning service** (additional fee of **$85**).",
      "Please note: the hotel or Airbnb may charge extra for leaving the room uncleaned — Kim Luxury Events is not liable for those charges.",
      "Kim Luxury Events is not liable for any injury, damage, loss, accident, or delay that may occur.",
    ],
  },
  {
    title: "Cleanliness (Home, Apartment & Airbnb)",
    items: [
      "The room being decorated must be **clean and neat** prior to our arrival.",
      "Please ensure there are **minimal people** in the space during set-up to minimise distractions.",
      "All **pets must be in a separate room** once we arrive for set-up.",
      "**No smoking** is allowed in the room before or during set-up.",
    ],
  },
];

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-[#C0002A] font-medium">{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function PolicyAccordion({ section, index }: { section: PolicySection; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
          open ? "bg-[#C0002A] text-white" : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className={`text-xs font-sans tracking-wider ${open ? "text-white/60" : "text-[#C9A96E]"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-lg lg:text-xl">{section.title}</h3>
        </div>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
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
            <div className="px-6 py-6 bg-white">
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-light leading-relaxed">
                    <span className="text-[#C9A96E] mt-0.5 flex-shrink-0">&#10022;</span>
                    <span>{renderBoldText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Policies() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Policies" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Important Information</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-white">Our Policies</h1>
        </div>
      </section>

      {/* Policies Accordion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gray-600 font-light leading-relaxed text-center mb-12 max-w-2xl mx-auto">
              Please review our policies carefully before booking. These ensure a smooth and enjoyable experience for everyone. If you have any questions, don't hesitate to reach out.
            </p>
          </ScrollReveal>

          <div className="space-y-3">
            {policies.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <PolicyAccordion section={section} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center mt-12 pt-12 border-t border-gray-100">
              <p className="text-gray-500 font-light mb-4">Have a question about our policies?</p>
              <a
                href="mailto:kimzheartsandroses@outlook.com"
                className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-8 py-3 text-sm tracking-wider hover:bg-[#8B001E] transition-colors"
              >
                <Mail size={16} />
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

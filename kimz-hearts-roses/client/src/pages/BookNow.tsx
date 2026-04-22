/* BookNow — Multi-step package builder / mini store */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, MapPin, ShoppingBag, ArrowRight, ArrowLeft, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-proposal-setup-PEnY77myoPNMhj4etqxDna.webp";

// Step 1: Event Types
const eventTypes = [
  "Romantic Proposal", "Anniversary Celebration", "Birthday Party",
  "Date Night", "Valentine's Day", "Engagement Party",
  "Bridal Shower", "Baby Shower", "Graduation Celebration",
  "Welcome Home", "Just Because", "Other",
];

// Step 2: Theme Colors
const themeColors = [
  { name: "Classic Red", hex: "#C0002A" },
  { name: "Blush Pink", hex: "#F5C6D0" },
  { name: "Rose Gold", hex: "#B76E79" },
  { name: "Pure White", hex: "#FFFFFF" },
  { name: "Matte Gold", hex: "#C9A96E" },
  { name: "Deep Burgundy", hex: "#800020" },
  { name: "Soft Lavender", hex: "#C8A2C8" },
  { name: "Midnight Black", hex: "#1A1A1A" },
  { name: "Royal Purple", hex: "#7851A9" },
  { name: "Champagne", hex: "#F7E7CE" },
  { name: "Sage Green", hex: "#9CAF88" },
  { name: "Dusty Blue", hex: "#6699CC" },
];

// Step 3: Add-ons
const addOns = [
  { name: "Balloons", price: 80, emoji: "🎈" },
  { name: "Confetti", price: 30, emoji: "🎊" },
  { name: "Love Hearts", price: 50, emoji: "❤️" },
  { name: "Red Roses (50 stems)", price: 150, emoji: "🌹" },
  { name: "Red Roses (100 stems)", price: 280, emoji: "🌹" },
  { name: "Rose Petals", price: 60, emoji: "🌸" },
  { name: "Wine / Champagne Bottle", price: 65, emoji: "🍾" },
  { name: "Chocolate Box", price: 45, emoji: "🍫" },
  { name: "Fairy Lights", price: 70, emoji: "✨" },
  { name: "Candle Display", price: 90, emoji: "🕯️" },
  { name: "LED Letter Sign", price: 120, emoji: "💡" },
  { name: "Teddy Bear", price: 40, emoji: "🧸" },
  { name: "Balloon Arch", price: 200, emoji: "🎈" },
  { name: "Photo Frame Display", price: 55, emoji: "🖼️" },
  { name: "Fabric Draping", price: 100, emoji: "🎀" },
  { name: "Next-Day Cleaning", price: 85, emoji: "🧹" },
];

// Step 5: Venue Types
const venueTypes = [
  "Hotel Room", "Hotel Suite / Penthouse", "Home / Apartment",
  "Airbnb", "Outdoor / Garden", "Restaurant / Venue", "Other",
];

const stepLabels = ["Event Type", "Theme Colors", "Extras", "Date", "Venue", "Review"];

export default function BookNow() {
  const [step, setStep] = useState(0);
  const [eventType, setEventType] = useState("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState("");
  const [venueType, setVenueType] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const toggleAddOn = (addon: string) => {
    if (selectedAddOns.includes(addon)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a !== addon));
    } else {
      setSelectedAddOns([...selectedAddOns, addon]);
    }
  };

  const basePrice = 250;
  const addOnTotal = useMemo(() => {
    return addOns
      .filter((a) => selectedAddOns.includes(a.name))
      .reduce((sum, a) => sum + a.price, 0);
  }, [selectedAddOns]);
  const totalPrice = basePrice + addOnTotal;

  const canProceed = () => {
    switch (step) {
      case 0: return eventType !== "";
      case 1: return selectedColors.length > 0;
      case 2: return true;
      case 3: return eventDate !== "";
      case 4: return venueType !== "" && name !== "" && email !== "";
      default: return true;
    }
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`New Booking Request — ${eventType}`);
    const body = encodeURIComponent(
      `BOOKING REQUEST\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nEvent Type: ${eventType}\nTheme Colors: ${selectedColors.join(", ")}\nExtras: ${selectedAddOns.join(", ") || "None"}\nDate: ${eventDate}\nVenue: ${venueType}\nAddress: ${address || "Not provided"}\n\nEstimated Total: $${totalPrice} AUD\n\nNotes: ${notes || "None"}\n\n---\nSent from Kimz Hearts & Roses website`
    );
    window.location.href = `mailto:kimzheartsandroses@outlook.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 bg-[#C0002A] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-white" />
          </div>
          <h2 className="font-serif text-3xl mb-4">Reservation Sent!</h2>
          <p className="text-gray-600 font-light mb-8">
            Your booking details have been sent to our email. We'll get back to you within 24 hours to confirm your reservation and arrange payment.
          </p>
          <a href="tel:0499785293" className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-8 py-3 text-sm tracking-wider hover:bg-[#8B001E] transition-colors">
            Call Us: 0499 785 293
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C0002A] to-[#8B001E]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Build Your Package</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-white">Book Your Experience</h1>
          <p className="text-white/70 font-light mt-4 max-w-xl">
            Design your perfect event in just a few steps. Choose your event type, colours, extras, and we'll handle the rest.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-gray-100 bg-white sticky top-[60px] z-30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center text-xs font-sans transition-colors ${
                    i < step ? "bg-[#C0002A] text-white" :
                    i === step ? "bg-[#C0002A] text-white" :
                    "bg-gray-100 text-gray-400"
                  }`}
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className={`text-xs tracking-wider hidden sm:block ${i <= step ? "text-[#C0002A]" : "text-gray-400"}`}>
                  {label}
                </span>
                {i < stepLabels.length - 1 && (
                  <div className={`w-8 lg:w-16 h-[1px] mx-2 ${i < step ? "bg-[#C0002A]" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-16 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* Step 0: Event Type */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-serif text-3xl mb-2">What are you celebrating?</h2>
                <p className="text-gray-500 font-light mb-8">Select the type of event you're planning.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setEventType(type)}
                      className={`p-4 text-left text-sm font-light transition-all border ${
                        eventType === type
                          ? "border-[#C0002A] bg-[#C0002A]/5 text-[#C0002A]"
                          : "border-gray-200 hover:border-[#C0002A]/30"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1: Theme Colors */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-serif text-3xl mb-2">Choose your theme colours</h2>
                <p className="text-gray-500 font-light mb-8">Select up to 3 colours for your event theme.</p>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {themeColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={`p-4 flex flex-col items-center gap-3 transition-all border ${
                        selectedColors.includes(color.name)
                          ? "border-[#C0002A] bg-[#C0002A]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-full border border-gray-200 relative"
                        style={{ backgroundColor: color.hex }}
                      >
                        {selectedColors.includes(color.name) && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Check size={16} className={color.hex === "#FFFFFF" || color.hex === "#F7E7CE" || color.hex === "#F5C6D0" ? "text-[#C0002A]" : "text-white"} />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-gray-600">{color.name}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">{selectedColors.length}/3 colours selected</p>
              </motion.div>
            )}

            {/* Step 2: Add-ons */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-serif text-3xl mb-2">Add extras to your package</h2>
                <p className="text-gray-500 font-light mb-8">Customise your setup with these premium add-ons.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {addOns.map((addon) => (
                    <button
                      key={addon.name}
                      onClick={() => toggleAddOn(addon.name)}
                      className={`p-4 text-left transition-all border ${
                        selectedAddOns.includes(addon.name)
                          ? "border-[#C0002A] bg-[#C0002A]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{addon.emoji}</span>
                      <p className="text-sm font-light">{addon.name}</p>
                      <p className="text-xs text-[#C0002A] mt-1">${addon.price}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Date */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-serif text-3xl mb-2">When is your event?</h2>
                <p className="text-gray-500 font-light mb-8">Select the date for your celebration.</p>
                <div className="max-w-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={20} className="text-[#C0002A]" />
                    <span className="text-sm text-gray-600">Event Date</span>
                  </div>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-gray-400 mt-3">
                    Remember: bookings with less than 5 days notice incur a $100 late booking fee.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 4: Venue + Contact */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-serif text-3xl mb-2">Where and who?</h2>
                <p className="text-gray-500 font-light mb-8">Tell us about the venue and your contact details.</p>

                <div className="space-y-6">
                  <div>
                    <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Venue Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {venueTypes.map((v) => (
                        <button
                          key={v}
                          onClick={() => setVenueType(v)}
                          className={`p-3 text-sm font-light transition-all border ${
                            venueType === v
                              ? "border-[#C0002A] bg-[#C0002A]/5 text-[#C0002A]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Address (if known)</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g., Crown Towers Perth, 1 Burswood Rd"
                      className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Your Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="04XX XXX XXX"
                      className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Special Requests / Notes</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      placeholder="Any special requests or details..."
                      className="w-full border border-gray-200 px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Review / Invoice */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="font-serif text-3xl mb-2">Review Your Booking</h2>
                <p className="text-gray-500 font-light mb-8">Please review your selections before submitting.</p>

                <div className="border border-gray-200 divide-y divide-gray-100">
                  <div className="p-6 flex justify-between items-start">
                    <div>
                      <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">Event Type</p>
                      <p className="font-serif text-lg">{eventType}</p>
                    </div>
                    <ShoppingBag size={20} className="text-[#C9A96E]" />
                  </div>

                  <div className="p-6">
                    <p className="text-xs tracking-wider uppercase text-gray-400 mb-2">Theme Colours</p>
                    <div className="flex gap-2">
                      {selectedColors.map((c) => {
                        const color = themeColors.find((tc) => tc.name === c);
                        return (
                          <div key={c} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full border border-gray-200" style={{ backgroundColor: color?.hex }} />
                            <span className="text-sm text-gray-600">{c}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs tracking-wider uppercase text-gray-400 mb-2">Date & Venue</p>
                    <p className="text-sm text-gray-600">{eventDate} — {venueType}</p>
                    {address && <p className="text-sm text-gray-400 mt-1">{address}</p>}
                  </div>

                  <div className="p-6">
                    <p className="text-xs tracking-wider uppercase text-gray-400 mb-2">Contact</p>
                    <p className="text-sm text-gray-600">{name} — {email}</p>
                    {phone && <p className="text-sm text-gray-400 mt-1">{phone}</p>}
                  </div>

                  {selectedAddOns.length > 0 && (
                    <div className="p-6">
                      <p className="text-xs tracking-wider uppercase text-gray-400 mb-3">Extras</p>
                      <div className="space-y-2">
                        {addOns.filter((a) => selectedAddOns.includes(a.name)).map((a) => (
                          <div key={a.name} className="flex justify-between text-sm">
                            <span className="text-gray-600">{a.emoji} {a.name}</span>
                            <span className="text-gray-800">${a.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-6 bg-[#faf8f6]">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Base setup fee</span>
                      <span>${basePrice}</span>
                    </div>
                    {addOnTotal > 0 && (
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Extras</span>
                        <span>${addOnTotal}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Travel fee</span>
                      <span className="text-gray-400">TBC</span>
                    </div>
                    <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between">
                      <span className="font-serif text-lg">Estimated Total</span>
                      <span className="font-serif text-2xl text-[#C0002A]">${totalPrice} AUD</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">* Travel fee will be confirmed after booking. Final price may vary.</p>
                  </div>
                </div>

                {notes && (
                  <div className="mt-4 p-4 bg-gray-50 border border-gray-100">
                    <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">Notes</p>
                    <p className="text-sm text-gray-600 font-light">{notes}</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 text-gray-500 text-sm tracking-wider hover:text-[#C0002A] transition-colors"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-8 py-3 text-sm tracking-wider transition-colors ${
                  canProceed()
                    ? "bg-[#C0002A] text-white hover:bg-[#8B001E]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-8 py-3 text-sm tracking-wider hover:bg-[#8B001E] transition-colors"
              >
                <Send size={16} />
                Reserve Now
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

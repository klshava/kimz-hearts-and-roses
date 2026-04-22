/* Services — Expanded service detail page with large image slots and descriptions */
import { Phone, Mail, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-romantic-room-PEnY77myoPNMhj4etqxDna.webp";
const PROPOSAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-proposal-setup-PN2XhtiNwFUCx2VjKkJJQC.webp";
const ANNIVERSARY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-anniversary-Y98R996jMx52Z5YvtPwMPU.webp";
const BALLOON_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-balloon-decor-cHoAgUzNejNrmmgiFzn79U.webp";
const BOUQUET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-bouquet-mBkjemLEznxx2FvxU8KnpF.webp";

const services = [
  {
    title: "Hotel & Room Décor",
    desc: "Transform any hotel room, suite, or penthouse into a breathtaking romantic sanctuary. We specialise in creating immersive experiences with hundreds of fresh roses, scattered petals, warm candlelight, fairy lights, and premium fabrics. Whether it's a surprise for your partner or a special occasion, we handle every detail so you can focus on the moment.",
    includes: ["Fresh rose arrangements & scattered petals", "Candle displays (LED & real flame options)", "Fairy light installations", "Premium fabric draping & styling", "Champagne & chocolate setup (on request)", "Custom signage & personalised touches"],
    img: HERO_IMG,
  },
  {
    title: "Romantic Proposals",
    desc: "Your proposal should be as extraordinary as your love story. We create bespoke proposal setups featuring illuminated letter signs, balloon arches, rose pathways, and candlelit walkways. From intimate hotel room proposals to grand rooftop moments, we design every element to ensure that perfect 'yes.'",
    includes: ["Illuminated MARRY ME / WILL YOU letter signs", "Balloon arches & garlands (custom colours)", "Rose petal pathways & heart designs", "Candle arrangements & fairy lights", "Photography-ready styling", "Coordination with hotel/venue staff"],
    img: PROPOSAL_IMG,
  },
  {
    title: "Anniversary Setups",
    desc: "Celebrate your milestone with an intimate and elegant setup designed to honour your journey together. From romantic dinner-for-two arrangements to full room transformations, we create the perfect atmosphere for you to reconnect and celebrate your love.",
    includes: ["Intimate dinner table styling", "Fresh floral centrepieces", "Candle & fairy light ambiance", "Custom colour themes", "Champagne & wine setup", "Personalised anniversary signage"],
    img: ANNIVERSARY_IMG,
  },
  {
    title: "Birthday Celebrations",
    desc: "Make their birthday unforgettable with a luxury celebration setup. We create stunning balloon arches, floral arrangements, and themed décor that turns any space into a party-ready paradise. From elegant and sophisticated to fun and festive — we tailor every setup to the birthday star's personality.",
    includes: ["Custom balloon arches & garlands", "Themed colour palettes", "Floral arrangements & centrepieces", "Happy Birthday signage & banners", "Gift display styling", "Confetti & table décor"],
    img: BALLOON_IMG,
  },
  {
    title: "Rose Bouquets & Floristry",
    desc: "Our hand-tied premium rose bouquets are crafted with the freshest blooms and wrapped in luxury packaging. Whether you need a classic dozen red roses, a lavish 100-stem arrangement, or a custom colour palette, our floristry team creates stunning bouquets for every occasion.",
    includes: ["Classic red rose bouquets (12, 24, 50, 100 stems)", "Custom colour palette bouquets", "Luxury gift wrapping & ribbon", "Delivery across Perth metro", "Add-on: chocolate, champagne, teddy bear", "Corporate & bulk orders available"],
    img: BOUQUET_IMG,
  },
  {
    title: "In-Home & Airbnb Décor",
    desc: "We bring the luxury experience directly to your doorstep. Whether it's your own home, a rented apartment, or an Airbnb, we transform your space into a romantic haven. Perfect for date nights, surprise celebrations, or simply showing someone you care.",
    includes: ["Full room transformation", "Rose & candle arrangements", "Fairy light installations", "Balloon décor & arches", "Custom themes & colour schemes", "Setup & styling included"],
    img: HERO_IMG,
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={PROPOSAL_IMG} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">What We Offer</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-white">Our Services</h1>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section key={service.title} className={`py-20 lg:py-28 ${i % 2 === 1 ? "bg-[#faf8f6]" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#C0002A] text-white px-4 py-1 text-xs tracking-wider font-sans">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div>
                  <h2 className="font-serif text-3xl lg:text-4xl mb-6">{service.title}</h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">{service.desc}</p>

                  <h4 className="text-xs tracking-[0.3em] uppercase text-[#C0002A] mb-4 font-sans">What's Included</h4>
                  <ul className="space-y-2 mb-8">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-600 text-sm font-light">
                        <span className="text-[#C9A96E] mt-1">&#10022;</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:kimzheartsandroses@outlook.com"
                      className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-6 py-3 text-sm tracking-wider hover:bg-[#8B001E] transition-colors"
                    >
                      <Mail size={14} />
                      Enquire Now
                    </a>
                    <a
                      href="tel:0499785293"
                      className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 text-sm tracking-wider hover:border-[#C0002A] hover:text-[#C0002A] transition-colors"
                    >
                      <Phone size={14} />
                      Call Us
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              Ready to Create Your <span className="italic text-[#C0002A]">Dream Setup</span>?
            </h2>
            <p className="text-white/60 font-light mb-8 max-w-lg mx-auto">
              Every event is unique. Tell us your vision and we'll bring it to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0499785293" className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-8 py-4 text-sm tracking-wider hover:bg-[#8B001E] transition-colors">
                <Phone size={16} /> Call 0499 785 293
              </a>
              <a href="mailto:kimzheartsandroses@outlook.com" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm tracking-wider hover:bg-white/10 transition-colors">
                <Mail size={16} /> Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

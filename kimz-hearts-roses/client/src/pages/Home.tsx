/* Home — Hero, About, Services Grid, USP Strip, Gallery Preview, Testimonials, Social, Contact CTA */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Mail, Star, ArrowRight, Heart, Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776913381/kim1_ixwj62.jpg"
// "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-romantic-room-PEnY77myoPNMhj4etqxDna.webp";
const BOUQUET_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776913752/flower_yqem34.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-bouquet-mBkjemLEznxx2FvxU8KnpF.webp";
const PROPOSAL_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776915984/proposal_wlz1br.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-proposal-setup-PN2XhtiNwFUCx2VjKkJJQC.webp";
const ANNIVERSARY_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776916058/annivs_ibamf4.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-anniversary-Y98R996jMx52Z5YvtPwMPU.webp";
const BALLOON_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776916873/hbds_tdsyux.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-balloon-decor-cHoAgUzNejNrmmgiFzn79U.webp";

const services = [
  { title: "Hotel & Room Décor", desc: "Transform any hotel room into a breathtaking romantic sanctuary with roses, candles, and fairy lights.", img: HERO_IMG },
  { title: "Romantic Proposals", desc: "Create the perfect proposal moment with custom setups featuring MARRY ME signs, balloons, and florals.", img: PROPOSAL_IMG },
  { title: "Anniversary Setups", desc: "Celebrate your milestone with an intimate dinner setup, complete with candles, roses, and champagne.", img: ANNIVERSARY_IMG },
  { title: "Birthday Celebrations", desc: "Make their birthday unforgettable with luxury balloon arches, florals, and personalised décor.", img: BALLOON_IMG },
  { title: "Rose Bouquets & Floristry", desc: "Hand-tied premium rose bouquets crafted with love — from classic reds to custom colour palettes.", img: BOUQUET_IMG },
  { title: "In-Home & Airbnb Décor", desc: "We bring the luxury to you — transforming your home, apartment, or Airbnb into a romantic escape.", img: HERO_IMG },
];

const usps = [
  "Perth-based & locally loved",
  "Custom luxury setups for every occasion",
  "Fresh florals & premium décor",
  "Proposals, birthdays, anniversaries & more",
];

const testimonials = [
  { name: "Taji  K.", text: "Truly recommend this business. Nyasha was so professional and the process was seamless and stress-free. The bouquet was deliver just in time for a surprise. As for the bouquet itself? Pure luxury. You can immediately tell the difference in quality; the roses were fresh, vibrant, and arranged to perfection. Most importantly, my wife loved the flowers so much. They truly made her feel special and adored. Thank you, Nyasha, for helping me make her feel so loved! I will definitely be back", rating: 5 },
  { name: "Shaddy.", text: "My girl really, really loved the flowers. The whole experience was unforgettable the smile on her face, how speechless she was when I pulled out that bouquet... it meant everything to me. Seeing her that happy honestly made my entire day/month. Thank you so much for helping create such a beautiful moment. I’ll never forget it.", rating: 5 },
  { name: "Lexy.", text: "Hi Nyasha, thank you so much for the beautiful decoration setup for my partner’s birthday. She absolutely loved it, and it made the day even more special. Your team’s attention to detail and the creativity put into the event was truly outstanding, and I can’t thank you enough for making the occasion unforgettable. I’m looking forward to working with you again in the future for more celebrations. Thank you once again for the excellent service. Warm regards!", rating: 5 },
];

const galleryPreviews = [
  { img: HERO_IMG, label: "Romantic Suite" },
  { img: PROPOSAL_IMG, label: "Proposal Setup" },
  { img: ANNIVERSARY_IMG, label: "Anniversary Dinner" },
  { img: BALLOON_IMG, label: "Birthday Celebration" },
  { img: BOUQUET_IMG, label: "Rose Bouquet" },
  { img: HERO_IMG, label: "Hotel Décor" },
];

export default function Home() {
  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Luxury romantic room decoration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Perth, Western Australia</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              Where Every Moment Becomes a{" "}
              <span className="italic text-[#C0002A]">Memory</span>
            </h1>
            <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Luxury romantic décor, proposals & floristry — crafted with passion in Perth, Western Australia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0499785293"
                className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-8 py-4 text-sm tracking-wider hover:bg-[#8B001E] transition-colors font-sans"
              >
                <Phone size={16} />
                Book Your Experience
              </a>
              <Link href="/gallery">
                <span className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm tracking-wider hover:bg-white/10 transition-colors font-sans">
                  Explore Our Work
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-white/30" />
        </motion.div>
      </section>

      {/* ═══════════════════ ABOUT / BRAND STORY ═══════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={BOUQUET_IMG}
                  alt="Premium rose bouquet"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C9A96E] hidden lg:block" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[1px] bg-[#C0002A]" />
                  <span className="text-[#C0002A] text-xs tracking-[0.4em] font-sans uppercase">Our Story</span>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
                  Crafting Love Stories,<br />
                  <span className="italic text-[#C0002A]">One Detail at a Time</span>
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  At Kimz Hearts & Roses, we believe love deserves to be celebrated with intention. From hand-tied rose bouquets to fully transformed hotel suites, every detail we craft tells your unique story.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  Based in Perth, WA — we set up at your hotel, apartment, home, or Airbnb. Whether it's a surprise proposal, a milestone anniversary, or a birthday to remember, we pour our hearts into creating moments that take your breath away.
                </p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-serif text-3xl text-[#C0002A]">500+</p>
                    <p className="text-xs text-gray-500 tracking-wider uppercase mt-1">Events Styled</p>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-200" />
                  <div className="text-center">
                    <p className="font-serif text-3xl text-[#C0002A]">5.0</p>
                    <p className="text-xs text-gray-500 tracking-wider uppercase mt-1">Star Rating</p>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-200" />
                  <div className="text-center">
                    <p className="font-serif text-3xl text-[#C0002A]">Perth</p>
                    <p className="text-xs text-gray-500 tracking-wider uppercase mt-1">Based & Loved</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES GRID ═══════════════════ */}
      <section className="py-24 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#C0002A] text-xs tracking-[0.4em] font-sans uppercase">What We Do</span>
              <h2 className="font-serif text-4xl lg:text-5xl mt-4">Our Services</h2>
              <div className="w-16 h-[2px] bg-[#C9A96E] mx-auto mt-6" />
            </div>
          </ScrollReveal>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1} className={i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
                <a
                  href="mailto:kimzheartsandroses@outlook.com"
                  className="group block relative overflow-hidden bg-black h-full"
                  style={{ minHeight: i === 0 ? "500px" : "280px" }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed mb-4 max-w-md">{service.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[#C9A96E] text-sm tracking-wider group-hover:gap-3 transition-all">
                      Enquire Now <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ USP STRIP ═══════════════════ */}
      <section className="bg-[#C0002A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] text-lg mt-0.5">&#10022;</span>
                  <p className="text-white font-light text-sm leading-relaxed">{usp}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY PREVIEW ═══════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[#C0002A] text-xs tracking-[0.4em] font-sans uppercase">Portfolio</span>
                <h2 className="font-serif text-4xl lg:text-5xl mt-4">Our Work</h2>
              </div>
              <Link href="/gallery">
                <span className="inline-flex items-center gap-2 text-[#C0002A] text-sm tracking-wider hover:gap-3 transition-all border-b border-[#C0002A]">
                  View Full Gallery <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Masonry-style grid */}
          <div className="columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryPreviews.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative overflow-hidden break-inside-avoid">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1" }}
                  />
                  <div className="absolute inset-0 bg-[#C0002A]/0 group-hover:bg-[#C0002A]/60 transition-colors duration-300 flex items-center justify-center">
                    <Heart className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Testimonials</span>
              <h2 className="font-serif text-4xl lg:text-5xl mt-4">What Our Clients Say</h2>
              <div className="w-16 h-[2px] bg-[#C0002A] mx-auto mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="border border-white/10 p-8 relative">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />
                    ))}
                  </div>
                  <p className="text-white/70 font-light leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C0002A] flex items-center justify-center font-serif text-white">
                      {t.name[0]}
                    </div>
                    <p className="text-sm font-light">{t.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ INSTAGRAM / SOCIAL STRIP ═══════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#C0002A] text-xs tracking-[0.4em] font-sans uppercase">Social</span>
              <h2 className="font-serif text-3xl mt-4">Follow Our Latest Creations</h2>
              <a
                href="https://www.instagram.com/kimzheartsandroses/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C0002A] text-sm mt-3 hover:underline"
              >
                <Instagram size={16} />
                @kimzheartsandroses
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[HERO_IMG, PROPOSAL_IMG, ANNIVERSARY_IMG, BALLOON_IMG, BOUQUET_IMG, HERO_IMG].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <a
                  href="https://www.instagram.com/kimzheartsandroses/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square overflow-hidden"
                >
                  <img src={img} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#C0002A]/0 group-hover:bg-[#C0002A]/50 transition-colors flex items-center justify-center">
                    <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT CTA BANNER ═══════════════════ */}
      <section className="bg-[#C0002A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">
              Let's Create Something <span className="italic">Beautiful</span>
            </h2>
            <p className="text-white/70 font-light mb-10 max-w-lg mx-auto">
              Ready to make your moment unforgettable? Get in touch with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0499785293"
                className="inline-flex items-center gap-2 bg-white text-[#C0002A] px-8 py-4 text-sm tracking-wider hover:bg-gray-100 transition-colors font-sans font-medium"
              >
                <Phone size={16} />
                0499 785 293
              </a>
              <a
                href="mailto:kimzheartsandroses@outlook.com"
                className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white/10 transition-colors font-sans"
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

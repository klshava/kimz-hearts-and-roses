/* Giveaways — Current giveaway banner + past giveaway archive cards */
import { Instagram, ExternalLink, Gift } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-romantic-room-PEnY77myoPNMhj4etqxDna.webp";
const BALLOON_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-balloon-decor-cHoAgUzNejNrmmgiFzn79U.webp";
const BOUQUET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-bouquet-mBkjemLEznxx2FvxU8KnpF.webp";
const PROPOSAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-proposal-setup-PN2XhtiNwFUCx2VjKkJJQC.webp";
const ANNIVERSARY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-anniversary-Y98R996jMx52Z5YvtPwMPU.webp";

const pastGiveaways = [
  {
    title: "Valentine's Day Giveaway 2025 — Winner Announced!",
    date: "February 14, 2025",
    prize: "Full romantic hotel room setup with 200 roses, candles, fairy lights, and champagne — valued at $850.",
    winner: "Winner: @sarah_loves_perth",
    img: HERO_IMG,
  },
  {
    title: "Mother's Day Bouquet Giveaway 2025",
    date: "May 11, 2025",
    prize: "Luxury 100-stem red rose bouquet in premium black wrapping with gold ribbon — valued at $350.",
    winner: "Winner: Jessica M.",
    img: BOUQUET_IMG,
  },
  {
    title: "New Year's Romance Giveaway 2025",
    date: "January 1, 2025",
    prize: "Anniversary dinner setup for two with candles, roses, and fairy lights — valued at $600.",
    winner: "Winner: @perth_couple_goals",
    img: ANNIVERSARY_IMG,
  },
  {
    title: "Christmas Love Giveaway 2024",
    date: "December 25, 2024",
    prize: "Birthday celebration package with balloon arch, florals, and themed décor — valued at $500.",
    winner: "Winner: Aisha K.",
    img: BALLOON_IMG,
  },
];

export default function Giveaways() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={BALLOON_IMG} alt="Giveaways" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Community</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-white">Giveaways & Competitions</h1>
          <p className="text-white/60 font-light mt-4 max-w-xl">
            Spreading Love, One Winner at a Time
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              At Kimz Hearts & Roses, we love giving back to our community. We regularly host giveaways and competitions on our Instagram and TikTok pages — from full romantic décor setups to stunning rose bouquets. Check back here for upcoming giveaways, and browse the history of our past winners below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Current Giveaway Banner */}
      <section className="bg-[#C0002A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Gift size={20} className="text-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Current Giveaway</span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
                  Winter Romance Giveaway 2026
                </h2>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  Win a complete romantic hotel room transformation valued at $1,000! Includes 300 fresh roses, candle displays, fairy lights, champagne setup, and a luxury rose bouquet to take home. Enter now on our Instagram page!
                </p>
                <a
                  href="https://www.instagram.com/kimzheartsandroses/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#C0002A] px-8 py-4 text-sm tracking-wider hover:bg-gray-100 transition-colors font-medium"
                >
                  <Instagram size={16} />
                  Enter Now on Instagram
                </a>
              </div>
              <div className="relative">
                <img
                  src={PROPOSAL_IMG}
                  alt="Current giveaway"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#C9A96E] text-black px-4 py-1 text-xs tracking-wider font-sans font-medium">
                  LIVE NOW
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Past Giveaways */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#C0002A] text-xs tracking-[0.4em] font-sans uppercase">Archive</span>
              <h2 className="font-serif text-3xl lg:text-4xl mt-4">Past Giveaways</h2>
              <div className="w-16 h-[2px] bg-[#C9A96E] mx-auto mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastGiveaways.map((giveaway, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={giveaway.img}
                      alt={giveaway.title}
                      className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-xs tracking-wider">
                      COMPLETED
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-400 tracking-wider mb-2">{giveaway.date}</p>
                    <h3 className="font-serif text-xl mb-3">{giveaway.title}</h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{giveaway.prize}</p>
                    <p className="text-[#C0002A] text-sm font-medium mb-4">{giveaway.winner}</p>
                    <a
                      href="https://www.instagram.com/kimzheartsandroses/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-[#C0002A] transition-colors"
                    >
                      <ExternalLink size={14} />
                      See Post
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-white mb-4">
              Don't Miss Our Next Giveaway
            </h2>
            <p className="text-white/60 font-light mb-8 max-w-lg mx-auto">
              Follow us on Instagram and TikTok to be the first to know about our next giveaway!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/kimzheartsandroses/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-6 py-3 text-sm tracking-wider hover:bg-[#8B001E] transition-colors"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@kimzheartsandroses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 text-sm tracking-wider hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z"/></svg>
                TikTok
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

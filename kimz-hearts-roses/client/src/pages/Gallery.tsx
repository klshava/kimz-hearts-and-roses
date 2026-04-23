/* Gallery — Masonry photo gallery with filter bar and lightbox */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776913381/kim1_ixwj62.jpg"
const HERO_IMG2 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776916058/annivs_ibamf4.jpg"
const HERO_IMG3 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776977892/prop_idcm2k.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-romantic-room-PEnY77myoPNMhj4etqxDna.webp";
const PROPOSAL_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776977168/proposal_ffsmtg.jpg"
const PROPOSAL_IMG2 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776975812/propo_rz5v9f.jpg"
const PROPOSAL_IMG3 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776976332/kimzheartsandroses_1763438454_3767125155484240586_27755518903_7_g2fzbe.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-proposal-setup-PN2XhtiNwFUCx2VjKkJJQC.webp";
const ANNIVERSARY_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776975515/decor_ons5sr.jpg"
const ANNIVERSARY_IMG2 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776975640/anniv_juyzdz.jpg"
const ANNIVERSARY_IMG3 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776975244/anniversa_toyl2t.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-anniversary-Y98R996jMx52Z5YvtPwMPU.webp";
const BALLOON_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776974986/hotel_duf5ue.jpg"
const BALLOON_IMG2 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776916873/hbds_tdsyux.jpg"
const BALLOON_IMG3 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776976798/hbd_bgq5ix.jpg"
// "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-balloon-decor-cHoAgUzNejNrmmgiFzn79U.webp";
const BOUQUET_IMG = "https://res.cloudinary.com/drz47afmg/image/upload/v1776976697/flo_qaowyk.jpg"
const BOUQUET_IMG2 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776976391/flo2_hq4s3k.jpg"
const BOUQUET_IMG3 = "https://res.cloudinary.com/drz47afmg/image/upload/v1776913752/flower_yqem34.jpg"
//"https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-bouquet-mBkjemLEznxx2FvxU8KnpF.webp";

type Category = "All" | "Proposals" | "Anniversaries" | "Birthdays" | "Bouquets" | "Hotel Décor" | "Home & Airbnb";

const categories: Category[] = ["All", "Proposals", "Anniversaries", "Birthdays", "Bouquets", "Hotel Décor", "Home & Airbnb"];

interface GalleryItem {
  img: string;
  label: string;
  category: Category;
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  { img: HERO_IMG, label: "Luxury Hotel Suite — Rose Petal Bed", category: "Hotel Décor", aspect: "3/4" },
  { img: PROPOSAL_IMG3, label: "MARRY ME Proposal Setup", category: "Proposals", aspect: "3/4" },
  { img: ANNIVERSARY_IMG, label: "Anniversary Dinner for Two", category: "Anniversaries", aspect: "3/4" },
  { img: BALLOON_IMG, label: "Birthday Balloon Arch", category: "Birthdays", aspect: "3/4" },
  { img: BOUQUET_IMG, label: "Premium Red Rose Bouquet", category: "Bouquets", aspect: "3/4" },
  { img: HERO_IMG2, label: "Anniversary Celebration", category: "Hotel Décor", aspect: "3/4" },
  { img: PROPOSAL_IMG, label: "Rooftop Proposal with Balloons", category: "Proposals", aspect: "3/4" },
  { img: ANNIVERSARY_IMG2, label: "Romantic Table Setting", category: "Anniversaries", aspect: "3/4" },
  { img: ANNIVERSARY_IMG3, label: "Elegant Anniversary Setup", category: "Anniversaries", aspect: "3/4" },
  { img: BALLOON_IMG2, label: "Gold & Crimson Birthday Setup", category: "Birthdays", aspect: "3/4" },
  { img: BALLOON_IMG3, label: "Birthday Balloon Decor", category: "Birthdays", aspect: "3/4" },
  { img: BOUQUET_IMG2, label: "Luxury Wrapped Bouquet", category: "Bouquets", aspect: "3/4" },
  { img: BOUQUET_IMG3, label: "Elegant Flower Arrangement", category: "Bouquets", aspect: "3/4" },
  { img: HERO_IMG3, label: "Airbnb Romantic Makeover", category: "Hotel Décor", aspect: "3/4" },
  { img: PROPOSAL_IMG2, label: "Hotel Suite Proposal", category: "Proposals", aspect: "3/4" },

];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => {
    if (lightbox !== null) setLightbox(lightbox > 0 ? lightbox - 1 : filtered.length - 1);
  };
  const nextImage = () => {
    if (lightbox !== null) setLightbox(lightbox < filtered.length - 1 ? lightbox + 1 : 0);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ANNIVERSARY_IMG} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Portfolio</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-white">Our Gallery</h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-gray-100 sticky top-[60px] bg-white z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-sans tracking-wider transition-all ${
                  filter === cat
                    ? "bg-[#C0002A] text-white"
                    : "text-gray-500 hover:text-[#C0002A] border border-gray-200 hover:border-[#C0002A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.label + i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  <div
                    className="group relative overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ aspectRatio: item.aspect }}
                    />
                    <div className="absolute inset-0 bg-[#C0002A]/0 group-hover:bg-[#C0002A]/60 transition-colors duration-300 flex flex-col items-center justify-center">
                      <Heart className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" size={28} />
                      <p className="text-white text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-light">No items in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/60 hover:text-white z-10">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10"
            >
              <ChevronRight size={36} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filtered[lightbox]?.img}
              alt={filtered[lightbox]?.label}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-light">
              {filtered[lightbox]?.label} — {lightbox + 1} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

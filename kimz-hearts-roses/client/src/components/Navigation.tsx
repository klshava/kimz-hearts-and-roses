/* Navigation — Sticky nav with transparent→solid transition, mobile hamburger, Book Now CTA */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/giveaways", label: "Giveaways" },
  { href: "/policies", label: "Policies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <svg width="32" height="40" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30 L25 10 L35 25 L40 5 L45 25 L55 10 L65 30 Z" fill={scrolled ? "#C0002A" : "#C0002A"} />
                <rect x="15" y="28" width="50" height="6" rx="1" fill="#C9A96E" />
                <path d="M30 45 L30 85 M30 65 L50 45 M35 65 L55 85" stroke={scrolled ? "#C0002A" : "#C0002A"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col">
                <span className={`font-serif text-lg tracking-[0.2em] font-bold transition-colors ${scrolled ? "text-black" : "text-white"}`}>
                  KIMZ
                </span>
                <span className={`text-[8px] tracking-[0.35em] font-sans font-light transition-colors ${scrolled ? "text-[#C9A96E]" : "text-[#C9A96E]"}`}>
                  LUXURY EVENTS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-sans font-light tracking-wider transition-colors hover:text-[#C0002A] relative ${
                    location === link.href
                      ? scrolled ? "text-[#C0002A]" : "text-white"
                      : scrolled ? "text-gray-700" : "text-white/80"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#C0002A]"
                    />
                  )}
                </span>
              </Link>
            ))}
            <a
              href="tel:0499785293"
              className="flex items-center gap-2 bg-[#C0002A] text-white px-5 py-2.5 text-sm font-sans tracking-wider hover:bg-[#8B001E] transition-colors"
            >
              <Phone size={14} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-black" : "text-white"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-white p-2"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`font-serif text-2xl tracking-wider transition-colors ${
                        location === link.href ? "text-[#C0002A]" : "text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="tel:0499785293"
                  className="flex items-center gap-2 bg-[#C0002A] text-white px-8 py-3 font-sans tracking-wider mt-4"
                >
                  <Phone size={16} />
                  Book Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

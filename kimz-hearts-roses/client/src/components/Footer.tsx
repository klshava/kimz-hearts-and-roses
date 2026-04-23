/* Footer — Dark footer with logo, links, social icons, contact info */
import { Link } from "wouter";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/giveaways", label: "Giveaways" },
  { href: "/policies", label: "Policies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/kimzheartsandroses/", label: "Instagram", icon: Instagram },
  { href: "https://www.tiktok.com/@kimzheartsandroses", label: "TikTok", icon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z"/></svg>
  )},
  { href: "https://www.twitter.com", label: "X", icon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { href: "https://www.youtube.com", label: "YouTube", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <img 
              src="https://res.cloudinary.com/drz47afmg/image/upload/v1776973529/logo_omsgcm.png"
              alt="Logo"
              width="158"
              height="190"
              className="object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-[#C9A96E]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/60 text-sm font-light hover:text-[#C0002A] transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-[#C9A96E]">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:0499785293" className="flex items-center gap-3 text-white/60 hover:text-[#C0002A] transition-colors text-sm">
                <Phone size={16} />
                0499 785 293
              </a>
              <a href="mailto:kimzheartsandroses@outlook.com" className="flex items-center gap-3 text-white/60 hover:text-[#C0002A] transition-colors text-sm">
                <Mail size={16} />
                kimzheartsandroses@outlook.com
              </a>
              <p className="text-white/40 text-sm font-light mt-4">
                Perth, Western Australia
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-[#C9A96E]">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#C0002A] hover:border-[#C0002A] hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            &copy; 2026 Kimz Hearts & Roses. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <span>Perth, Western Australia</span>
            <span className="text-[#C0002A] mx-1">&hearts;</span>
            <span>ABN on request</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

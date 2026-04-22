/* Contact — Contact information, form, and map placeholder */
import { Phone, Mail, MapPin, Clock, Instagram, Send } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/o434Vq6diTUqHrtEvgeypi/hero-anniversary-Y98R996jMx52Z5YvtPwMPU.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Type: ${formData.eventType}\n\nMessage:\n${formData.message}\n\n---\nSent from Kimz Hearts & Roses website`
    );
    window.location.href = `mailto:kimzheartsandroses@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.4em] font-sans uppercase">Get in Touch</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-white">Contact Us</h1>
          <p className="text-white/60 font-light mt-4 max-w-xl">
            We'd love to hear from you. Let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-3xl mb-8">Let's Talk</h2>
                <p className="text-gray-600 font-light leading-relaxed mb-10">
                  Whether you're planning a surprise proposal, celebrating a milestone, or simply want to make someone's day special — we're here to help. Reach out to us via phone, email, or fill in the form and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <a href="tel:0499785293" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#C0002A]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C0002A] transition-colors">
                      <Phone size={18} className="text-[#C0002A] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">Phone</p>
                      <p className="text-gray-800 group-hover:text-[#C0002A] transition-colors">0499 785 293</p>
                    </div>
                  </a>

                  <a href="mailto:kimzheartsandroses@outlook.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#C0002A]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C0002A] transition-colors">
                      <Mail size={18} className="text-[#C0002A] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">Email</p>
                      <p className="text-gray-800 group-hover:text-[#C0002A] transition-colors">kimzheartsandroses@outlook.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C0002A]/5 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#C0002A]" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">Location</p>
                      <p className="text-gray-800">Perth, Western Australia</p>
                      <p className="text-gray-400 text-sm font-light mt-1">We service the entire Perth metro area</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C0002A]/5 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#C0002A]" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">Hours</p>
                      <p className="text-gray-800">Monday – Sunday</p>
                      <p className="text-gray-400 text-sm font-light mt-1">By appointment only</p>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/kimzheartsandroses/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#C0002A]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C0002A] transition-colors">
                      <Instagram size={18} className="text-[#C0002A] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">Instagram</p>
                      <p className="text-gray-800 group-hover:text-[#C0002A] transition-colors">@kimzheartsandroses</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="bg-[#faf8f6] p-8 lg:p-10">
                <h3 className="font-serif text-2xl mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="04XX XXX XXX"
                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Event Type</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors"
                    >
                      <option value="">Select an event type</option>
                      <option value="Romantic Proposal">Romantic Proposal</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Hotel Room Décor">Hotel Room Décor</option>
                      <option value="Rose Bouquet">Rose Bouquet</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs tracking-wider uppercase text-gray-500 mb-2 block">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your event, preferred date, and any special requests..."
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-light focus:border-[#C0002A] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C0002A] text-white py-4 text-sm tracking-wider hover:bg-[#8B001E] transition-colors"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100 h-[400px] flex items-center justify-center">
        <div className="text-center">
          <MapPin size={32} className="text-[#C0002A] mx-auto mb-4" />
          <p className="font-serif text-xl text-gray-600">Perth, Western Australia</p>
          <p className="text-gray-400 text-sm font-light mt-2">Servicing the entire Perth metro area</p>
        </div>
      </section>
    </div>
  );
}

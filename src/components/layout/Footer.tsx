"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Hem", href: "/" },
  { name: "Blogg", href: "/blogg" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Om oss", href: "/om-oss" },
];

const services = [
  { name: "Löneadministration", href: "/tjanster/loneadministration" },
  { name: "Löpande bokföring & redovisning", href: "/tjanster/lopande-bokforing" },
  { name: "Bokslut, årsredovisning och deklaration", href: "/tjanster/bokslut-arsredovisning" },
  { name: "Rådgivning inom ekonomi, skatt och bolagsfrågor", href: "/tjanster/radgivning" },
  { name: "Digitalisering", href: "/tjanster/digitalisering" },
];

interface FooterProps {
  onOpenModal?: () => void;
  variant?: 'default' | 'homepage';
}

export default function Footer({ onOpenModal, variant = 'default' }: FooterProps) {
  return (
    <footer>
      {/* Contact & Booking Section - Copied from Homepage */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Contact Form */}
          <div className="flex flex-col items-center lg:items-center">
            <h2 className="text-3xl md:text-4xl text-[#1a1a1a] uppercase tracking-tight font-aboreto font-medium text-center mb-6">
              Kontakta oss idag
            </h2>

            <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed text-center mb-12 max-w-md mx-auto font-geist">
              Vi vägleder dig med ett kostnadsfritt och förutsättningslöst möte där vi hjälper
              dig svara på frågor och funderingar du har kring redovisning och bokföring vad
              gäller ditt företag.
            </p>

            <form className="w-full max-w-md space-y-5">
              {/* Namn */}
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-geist">
                  Namn <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ditt namn"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm font-light font-geist text-gray-700 placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Mail */}
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-geist">
                  Mail <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Din mail"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm font-light font-geist text-gray-700 placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Telefon */}
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-geist">
                  Telefon <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Din telefon"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm font-light font-geist text-gray-700 placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Företag */}
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-geist">
                  Företag <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ditt företag"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm font-light font-geist text-gray-700 placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Meddelande */}
              <div>
                <label className="block text-xs text-gray-500 mb-2 font-geist">
                  Meddelande <span className="text-red-400">*</span>
                </label>
                <textarea
                  placeholder="Ditt meddelande"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm font-light font-geist text-gray-700 placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-4 mt-2 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors font-geist rounded"
              >
                Skicka
              </button>
            </form>
          </div>

          {/* Right Column: Calendar Widget */}
          <div className="w-full h-full relative">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 bg-white">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/kUXaaSqKbJuIlATWcy7m"
                style={{ width: "100%", border: "none", overflow: "auto", minHeight: "900px" }}
                scrolling="yes"
                id="footer-booking-widget"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Footer Section */}
      <div className="bg-[#1a1a1a] text-white">

      {/* Google Maps Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
          <h3 className="text-xl text-white font-playfair font-medium mb-6">
            Hitta till oss
          </h3>
          
          {variant === 'homepage' ? (
            // Homepage: 3-square grid layout with images and map
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {/* Left Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/assets/vasteras-domkyrka.jpg"
                  alt="Västerås Domkyrka - historisk katedral och ikonisk landmärke i Västerås stad, belägen i centrala Västerås City. Den medeltida domkyrkan är en av Sveriges mest framträdande kyrkobyggnader och symbol för Västerås lokala historia och kulturarv."
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Center Map */}
              <div className="relative w-full aspect-square bg-white/5 rounded-xl overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Convextra Redovisning - Västerås"
                  scrolling="no"
                  src="https://maps.google.com/maps?q=M%C3%A4larparksv%C3%A4gen%2011%2C%20723%2056%2C%20V%C3%A4ster%C3%A5s&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                />
              </div>
              
              {/* Right Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/assets/vasteras-stadshus.jpg"
                  alt="Västerås Stadshus - officiellt kommunhus och arkitektoniskt landmärke i Västerås stad, beläget i hjärtat av Västerås City. Stadhuset är en central byggnad för kommunal förvaltning och ett välkänt kännetecken för Västerås lokala identitet."
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            // Default: Full-width map
            <div className="w-full h-[350px] bg-white/5 rounded-xl overflow-hidden relative grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Convextra Redovisning - Västerås"
                scrolling="no"
                src="https://maps.google.com/maps?q=M%C3%A4larparksv%C3%A4gen%2011%2C%20723%2056%2C%20V%C3%A4ster%C3%A5s&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              />
            </div>
          )}
        </div>
      </div>

      {/* Contact Info & Links Grid */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Contact Info */}
            <div>
              <h4 className="text-lg text-white mb-6 font-playfair font-medium tracking-tight">
                Kontaktuppgifter
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-[#cbbba0] mt-1 flex-shrink-0" />
                  <span className="text-sm font-light text-white/70 font-geist">
                    Mälarparksvägen 11, 723 56, Västerås
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-[#cbbba0] mt-1 flex-shrink-0" />
                  <a
                    href="mailto:info@convextraredovisning.se"
                    className="text-sm text-white/70 font-light font-geist break-all hover:text-[#cbbba0] transition-colors"
                  >
                    info@convextraredovisning.se
                  </a>
                </div>
                <div className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-[#cbbba0] mt-1 flex-shrink-0" />
                  <a
                    href="tel:+46736277977"
                    className="text-sm text-white/70 font-light font-geist hover:text-[#cbbba0] transition-colors"
                  >
                    (+46) 73 - 627 79 77
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Öppettider */}
            <div>
              <h4 className="text-lg text-white mb-6 font-playfair font-medium tracking-tight">
                Öppettider
              </h4>
              <ul className="space-y-2 text-sm text-white/70 font-light font-geist">
                <li>Måndag - Fredag: 08:00 - 16:00</li>
                <li>Lördag - Söndag: Stängt</li>
              </ul>
            </div>

            {/* Column 3: Snabblänkar */}
            <div>
              <h4 className="text-lg text-white mb-6 font-playfair font-medium tracking-tight">
                Snabblänkar
              </h4>
              <ul className="space-y-2 text-sm text-white/70 font-light font-geist">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#cbbba0] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Tjänster */}
            <div>
              <h4 className="text-lg text-white mb-6 font-playfair font-medium tracking-tight">
                Tjänster
              </h4>
              <ul className="space-y-2 text-sm text-white/70 font-light font-geist">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="hover:text-[#cbbba0] transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Branding Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logo-footer.png"
              alt="Convextra Redovisning AB"
              width={400}
              height={100}
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex text-white/60 gap-5 items-center">
            <a
              href="https://www.facebook.com/people/Convextra-Redovisning-AB/61584857013590/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cbbba0] transition-colors transform hover:-translate-y-0.5 duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" fill="currentColor" stroke="none" />
            </a>
            <a
              href="https://www.linkedin.com/company/convextra-redovisning-ab/posts/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cbbba0] transition-colors transform hover:-translate-y-0.5 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" fill="currentColor" stroke="none" />
            </a>
            <a
              href="https://www.instagram.com/convextraredovisning_ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cbbba0] transition-colors transform hover:-translate-y-0.5 duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-8 py-3 border border-[#cbbba0] text-[#cbbba0] bg-transparent text-[0.65rem] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#cbbba0] hover:text-[#1a1a1a] font-normal font-geist"
          >
            Boka kostnadsfri konsultation
          </button>
        </div>

        {/* Copyright */}
        <div className="text-[0.65rem] text-white/40 font-geist text-center mt-10 pt-8 border-t border-white/10">
          © 2025 Convextra Redovisning AB. Alla rättigheter förbehållna. &nbsp;|&nbsp; Organisationsnummer: 559560-1773
        </div>
      </div>
      </div>
    </footer>
  );
}

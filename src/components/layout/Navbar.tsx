"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { name: "Löpande bokföring", href: "/tjanster/lopande-bokforing" },
  { name: "Bokslut & Årsredovisning", href: "/tjanster/bokslut-arsredovisning" },
  { name: "Löneadministration", href: "/tjanster/loneadministration" },
  { name: "Rådgivning", href: "/tjanster/radgivning" },
  { name: "Digitalisering", href: "/tjanster/digitalisering" },
];

const navLinks = [
  { name: "Hem", href: "/" },
  { name: "Blogg", href: "/blogg" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Om Oss", href: "/om-oss" },
];

interface NavbarProps {
  onOpenModal?: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    if (onOpenModal) {
      onOpenModal();
    }
  };

  return (
    <nav
      className={`z-50 fixed top-0 right-0 left-0 transition-all duration-500 ${isScrolled
          ? "bg-[#1a1a1a]/45 backdrop-blur-[30px] border-b border-white/10"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="flex h-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center select-none cursor-pointer group">
          <Image
            src="/assets/lying down white.png"
            alt="Convextra Redovisning"
            width={420}
            height={105}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.15em] text-[#cbbba0]/80 font-normal py-2 hover:text-[#cbbba0] transition-colors font-geist group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cbbba0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </Link>
          ))}

          {/* Dropdown Menu */}
          <div className="group relative flex items-center h-full cursor-pointer">
            <div className="flex items-center gap-1 text-[#cbbba0]/80 group-hover:text-[#cbbba0] transition-colors py-2 relative">
              <span className="text-xs uppercase tracking-[0.15em] font-normal font-geist">
                Tjänster
              </span>
              <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cbbba0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </div>

            {/* Dropdown Content */}
            <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-72 z-50">
              <div className="bg-[#1a1a1a] border border-[#cbbba0]/20 flex flex-col p-2 shadow-2xl">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-xs uppercase tracking-wider text-[#cbbba0]/70 hover:text-[#cbbba0] hover:bg-[#cbbba0]/10 hover:translate-x-1 transition-all duration-300 font-geist"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button & Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+46736277977"
            aria-label="Ring oss"
            className="inline-flex items-center justify-center w-11 h-11 border border-[#cbbba0] text-[#cbbba0] bg-transparent transition-all duration-700 hover:bg-[#cbbba0] hover:text-[#1a1a1a] hover:-translate-y-1"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center px-8 py-3 border border-[#cbbba0] text-[#cbbba0] bg-transparent text-[0.65rem] uppercase tracking-[0.2em] transition-all duration-700 hover:bg-[#cbbba0] hover:text-[#1a1a1a] hover:-translate-y-1 font-normal font-geist cursor-pointer"
          >
            Kostnadsfri Konsultation
          </button>
        </div>

        {/* Mobile: Phone & Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href="tel:+46736277977"
            aria-label="Ring oss"
            className="text-[#cbbba0] transition-colors hover:text-[#cbbba0]/80"
          >
            <Phone className="w-6 h-6" />
          </a>
          <button
            className="text-[#cbbba0]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1a1a]/95 backdrop-blur-[30px] border-t border-[#cbbba0]/20 px-6 py-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-[#cbbba0]/80 hover:text-[#cbbba0] transition-colors font-geist py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown Mobile */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#cbbba0]/80 hover:text-[#cbbba0] transition-colors font-geist py-2 w-full"
              >
                Tjänster
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l border-[#cbbba0]/20">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-xs uppercase tracking-wider text-[#cbbba0]/70 hover:text-[#cbbba0] transition-colors font-geist py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="inline-flex items-center justify-center px-6 py-3 border border-[#cbbba0] text-[#cbbba0] bg-transparent text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#cbbba0] hover:text-[#1a1a1a] font-geist mt-4"
            >
              Kostnadsfri Konsultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

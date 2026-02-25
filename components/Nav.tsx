"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-primary/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/CRecTech_logo.png"
            alt="CRecTech"
            width={120}
            height={40}
            className="h-[144px] w-auto transition-all duration-300"
            style={!scrolled ? { filter: "brightness(0) invert(1)" } : undefined}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-dark/70 hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors animate-cta-pulse"
          >
            Book a Meeting →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-dark" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-primary/10 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-dark/70 border-b border-primary/5 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold"
          >
            Book a Meeting →
          </a>
        </div>
      )}
    </motion.nav>
  );
}

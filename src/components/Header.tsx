"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { REQUEST_ACCESS_EVENT } from "@/lib/constants";

const Logo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform group-hover:scale-105"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00FFC6" />
        <stop offset="100%" stopColor="#00D4AA" />
      </linearGradient>
    </defs>
    {/* Bottom diamond */}
    <rect
      x="20"
      y="30"
      width="24"
      height="24"
      rx="3"
      transform="rotate(45 32 42)"
      fill="#00D4AA"
      opacity="0.9"
    />
    {/* Top diamond */}
    <rect
      x="18"
      y="12"
      width="26"
      height="26"
      rx="3.5"
      transform="rotate(45 31 25)"
      fill="url(#logo-gradient)"
    />
  </svg>
);

const navigationLinks = [
  { href: "#how-it-works", label: "Pipeline", section: "how-it-works" },
  { href: "#proof", label: "Proof", section: "proof" },
  { href: "#performance", label: "Performance", section: "performance" },
  { href: "#technology", label: "Technology", section: "technology" },
  { href: "#team", label: "Team", section: "team" },
  { href: "#roadmap", label: "Roadmap", section: "roadmap" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const openRequestAccess = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(REQUEST_ACCESS_EVENT));
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => link.section);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass" role="navigation" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Logo />
              <span className="font-semibold text-[16px] tracking-tight">
                QuantsEdge
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    "nav-link",
                    activeSection === link.section && "active"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://quantsedge.gitbook.io/quantsedge-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary px-4 py-2 rounded-lg"
              >
                Documentation
              </a>
              <button
                onClick={openRequestAccess}
                className="btn btn-primary px-6 py-2.5 rounded-lg glow"
              >
                Request Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-nav-button lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  animate={isMenuOpen ? { d: "M6 18L18 6" } : { d: "M4 6h16" }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1, d: "M4 12h16" }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  animate={isMenuOpen ? { d: "M6 6l12 12" } : { d: "M4 18h16" }}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu lg:hidden"
            >
              <div className="glass border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4">
                  <div className="space-y-4">
                    {/* Navigation Links */}
                    <div className="space-y-3">
                      {navigationLinks.map((link) => (
                        <button
                          key={link.section}
                          onClick={() => handleLinkClick(link.href)}
                          className="mobile-nav-link block w-full text-left"
                        >
                          {link.label}
                        </button>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <a
                        href="https://quantsedge.gitbook.io/quantsedge-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary w-full py-3 rounded-lg text-center"
                      >
                        Documentation
                      </a>
                      <button
                        onClick={openRequestAccess}
                        className="btn btn-primary w-full py-3 rounded-lg text-center glow"
                      >
                        Request Access
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

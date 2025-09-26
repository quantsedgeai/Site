"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

import { REQUEST_ACCESS_EVENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
      const sections = navigationLinks.map((link) => link.section);
      const currentSection = sections.find((section) => {
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
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="glass overflow-visible lg:overflow-hidden"
        role="navigation"
        aria-label="Primary"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center space-x-2">
              <Logo />
              <span className="text-[16px] font-semibold tracking-tight">QuantsEdge</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex">
              {navigationLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn("nav-link", activeSection === link.section && "active")}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden items-center space-x-3 lg:flex">
              <a
                href="https://quantsedge.gitbook.io/quantsedge-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary rounded-lg px-4 py-2"
              >
                Documentation
              </a>
              <button
                onClick={openRequestAccess}
                className="btn btn-primary glow rounded-lg px-6 py-2.5"
              >
                Request Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-nav-button rounded-lg p-2 transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16"
                  animate={isMenuOpen ? { d: "M6 18L18 6" } : { d: "M4 6h16" }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1, d: "M4 12h16" }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 18h16"
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
              className="mobile-menu lg:hidden left-0 right-0 top-full mt-3 px-4"
            >
              <div className="rounded-2xl border border-white/10 bg-[rgba(4,8,20,0.92)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div className="mx-auto max-w-7xl px-6 py-4">
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
                    <div className="space-y-3 border-t border-white/10 pt-4">
                      <a
                        href="https://quantsedge.gitbook.io/quantsedge-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary w-full rounded-lg py-3 text-center"
                      >
                        Documentation
                      </a>
                      <button
                        onClick={openRequestAccess}
                        className="btn btn-primary glow w-full rounded-lg py-3 text-center"
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

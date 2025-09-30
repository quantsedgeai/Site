"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

import { REQUEST_ACCESS_EVENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Logo = () => (
  <svg
    height="24"
    viewBox="0 0 517.9 90.49"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform group-hover:scale-105"
  >
    <defs>
      <style>{`.cls-1 { fill: #00ffc6; fill-rule: evenodd; } .cls-2 { fill: #fff; }`}</style>
    </defs>
    <g>
      <g>
        <path
          className="cls-1"
          d="M40.64,2.17l27.94,27.94c2.9,2.9,2.9,7.64,0,10.53l-12.36,12.36-16.68-16.68c-2.29-2.29-6.03-2.29-8.32,0l-16.68,16.68-12.36-12.36c-2.9-2.9-2.9-7.64,0-10.53L30.11,2.17c2.9-2.9,7.64-2.9,10.53,0"
        />
        <path
          className="cls-1"
          d="M56.22,53.01l5.38,5.38c2.29,2.29,2.29,6.03,0,8.32l-22.06,22.06c-2.29,2.29-6.03,2.29-8.32,0l-22.06-22.06c-2.29-2.29-2.29-6.03,0-8.32l22.06-22.06-16.68,16.68,1.61,1.61c10.58,10.58,27.89,10.58,38.47,0l1.61-1.61Z"
        />
      </g>
      <path
        className="cls-2"
        d="M145.02,55.49c2.06-3.9,3.12-8.22,3.12-13.04,0-3.9-.71-7.51-2.06-10.85-1.35-3.33-3.26-6.17-5.74-8.65-2.48-2.48-5.39-4.39-8.72-5.74-3.33-1.35-6.88-1.98-10.7-1.98s-7.37.64-10.7,1.98c-3.33,1.35-6.17,3.26-8.65,5.74-2.48,2.48-4.47,5.32-5.81,8.65-1.35,3.33-2.06,6.95-2.06,10.85s.71,7.51,2.13,10.85c1.35,3.33,3.26,6.24,5.74,8.72,2.48,2.48,5.32,4.32,8.65,5.67,3.33,1.42,6.88,2.06,10.7,2.06,3.05,0,6.03-.5,8.86-1.42l4.39,6.95h9l-6.52-10.28c3.47-2.41,6.31-5.6,8.36-9.5ZM132.4,58.32l-6.59-10.56h-8.93l8.65,13.82c-1.49.35-2.98.5-4.61.5-3.62,0-6.88-.85-9.71-2.62-2.84-1.7-5.03-4.04-6.66-7.02-1.63-2.91-2.48-6.24-2.48-9.99s.78-7.02,2.41-9.99c1.63-2.91,3.83-5.25,6.73-7.02,2.84-1.77,6.1-2.62,9.71-2.62s6.88.85,9.78,2.62c2.84,1.77,5.1,4.11,6.73,7.02,1.63,2.98,2.41,6.31,2.41,9.99,0,3.33-.64,6.31-1.98,9.07-1.35,2.76-3.12,5.03-5.46,6.8Z"
      />
      <path
        className="cls-2"
        d="M170.39,69.73c-2.91,0-5.39-.64-7.58-1.98-2.2-1.28-3.83-3.12-5.03-5.46-1.21-2.34-1.84-5.03-1.84-8.08v-23.68h8.01v22.97c0,2.62.78,4.75,2.34,6.38,1.56,1.63,3.62,2.41,6.1,2.41s4.54-.85,6.17-2.48c1.63-1.63,2.41-3.83,2.41-6.66v-22.61h7.94v38.35h-7.58v-4.68c-1.06,1.77-2.55,3.19-4.47,4.11-1.91.92-4.11,1.42-6.45,1.42Z"
      />
      <path
        className="cls-2"
        d="M227.87,36.06c-1.35-1.98-3.12-3.54-5.46-4.68-2.34-1.13-4.96-1.7-8.01-1.7-2.41,0-4.68.43-6.88,1.21-2.2.85-4.04,1.98-5.6,3.4-1.63,1.49-2.76,3.12-3.47,4.96l6.66,3.33c.71-1.77,1.84-3.19,3.47-4.32,1.63-1.06,3.47-1.63,5.6-1.63,2.27,0,4.11.64,5.53,1.84,1.42,1.21,2.13,2.76,2.13,4.61v1.49l-12.19,1.98c-4.47.78-7.73,2.2-9.78,4.32-2.13,2.2-3.19,4.82-3.19,7.87,0,3.33,1.21,6.03,3.62,8.01,2.41,1.98,5.53,2.98,9.43,2.98,2.62,0,5.03-.43,7.16-1.42,2.13-.92,3.9-2.2,5.32-3.9v4.47h7.66v-25.8c0-2.62-.64-4.96-1.98-7.02ZM221.85,52.93c0,1.91-.42,3.69-1.35,5.32-.92,1.63-2.2,2.84-3.83,3.76-1.63.92-3.54,1.42-5.67,1.42-1.77,0-3.19-.5-4.25-1.42-1.13-.92-1.7-2.06-1.7-3.54s.5-2.69,1.49-3.69c.99-.99,2.55-1.7,4.68-2.06l10.63-1.84v2.06Z"
      />
      <path
        className="cls-2"
        d="M239.21,68.88V30.54h7.66v4.68c1.06-1.77,2.55-3.19,4.47-4.11,1.91-.92,4.04-1.42,6.38-1.42,2.76,0,5.25.64,7.44,1.84,2.2,1.21,3.9,2.91,5.17,5.1,1.2,2.2,1.84,4.68,1.84,7.44v24.81h-7.94v-22.61c0-2.84-.78-5.1-2.34-6.73-1.63-1.63-3.69-2.41-6.17-2.41s-4.54.78-6.1,2.41c-1.63,1.63-2.41,3.9-2.41,6.73v22.61h-8.01Z"
      />
      <path
        className="cls-2"
        d="M297.33,69.31c-4.04,0-7.16-1.13-9.36-3.4s-3.33-5.46-3.33-9.57v-18.57h-6.73v-7.23h1.06c1.77,0,3.12-.5,4.18-1.56.99-.99,1.49-2.41,1.49-4.25v-2.98h8.01v8.79h8.72v7.23h-8.72v18.22c0,1.98.5,3.54,1.49,4.61.92,1.06,2.55,1.63,4.89,1.63.85,0,1.7-.07,2.62-.21v6.88c-1.49.28-2.91.43-4.32.43Z"
      />
      <path
        className="cls-2"
        d="M323.63,69.73c-3.97,0-7.44-.99-10.35-2.91-2.91-1.91-4.96-4.54-6.17-7.8l6.17-2.91c1.06,2.2,2.48,3.97,4.32,5.17,1.77,1.28,3.83,1.91,6.03,1.91,1.91,0,3.4-.43,4.61-1.28,1.2-.85,1.77-1.98,1.77-3.47,0-1.35-.57-2.41-1.63-3.12-1.06-.64-2.27-1.13-3.47-1.49l-6.03-1.7c-3.33-.92-5.74-2.34-7.37-4.25-1.63-1.91-2.48-4.11-2.48-6.73,0-2.27.57-4.25,1.77-6.03,1.21-1.7,2.84-3.05,4.89-4.04,2.06-.92,4.39-1.42,7.02-1.42,3.47,0,6.59.85,9.36,2.55,2.76,1.77,4.68,4.18,5.81,7.23l-6.17,2.91c-.78-1.84-1.98-3.33-3.62-4.39-1.63-1.06-3.47-1.63-5.46-1.63-1.77,0-3.19.43-4.18,1.21-1.06.85-1.56,1.91-1.56,3.26s.5,2.34,1.56,2.98c.99.64,2.13,1.21,3.33,1.56l6.24,1.84c3.12.92,5.53,2.27,7.3,4.18,1.7,1.91,2.55,4.25,2.55,6.88,0,2.27-.57,4.25-1.77,5.95-1.21,1.77-2.91,3.12-5.03,4.04-2.13.99-4.61,1.49-7.44,1.49Z"
      />
      <polygon
        className="cls-2"
        points="346.52 68.88 346.52 16.08 381.32 16.08 381.32 23.52 354.88 23.52 354.88 38.69 379.9 38.69 379.9 46.13 354.88 46.13 354.88 61.44 381.32 61.44 381.32 68.88 346.52 68.88"
      />
      <path
        className="cls-2"
        d="M418.53,15.22v19.78c-1.49-1.7-3.26-3.05-5.39-3.97-2.13-.92-4.54-1.35-7.16-1.35-3.61,0-6.88.85-9.78,2.62-2.91,1.77-5.25,4.11-6.88,7.16-1.7,3.05-2.55,6.45-2.55,10.21s.85,7.16,2.55,10.21c1.63,3.05,3.97,5.39,6.88,7.16,2.91,1.77,6.17,2.69,9.85,2.69,2.62,0,5.1-.5,7.37-1.49,2.2-.99,4.04-2.41,5.46-4.25v4.89h7.58V15.22h-7.94ZM416.97,56.2c-1.06,1.91-2.41,3.4-4.18,4.47-1.77,1.06-3.76,1.63-5.95,1.63s-4.25-.57-6.03-1.63c-1.77-1.06-3.19-2.55-4.18-4.47-.99-1.91-1.49-4.04-1.49-6.52s.5-4.54,1.49-6.45c.99-1.91,2.41-3.4,4.18-4.47,1.77-1.06,3.76-1.63,6.03-1.63s4.18.57,5.95,1.63c1.77,1.06,3.12,2.55,4.18,4.47,1.06,1.91,1.56,4.04,1.56,6.45s-.5,4.61-1.56,6.52Z"
      />
      <path
        className="cls-2"
        d="M465.31,30.54v4.89c-1.49-1.84-3.33-3.26-5.39-4.25-2.13-.99-4.47-1.49-7.02-1.49-3.62,0-6.8.85-9.57,2.48-2.84,1.63-5.03,3.9-6.66,6.73-1.63,2.91-2.41,6.1-2.41,9.71s.85,6.8,2.48,9.71c1.63,2.91,3.83,5.17,6.66,6.8,2.76,1.63,5.95,2.48,9.57,2.48,2.48,0,4.75-.43,6.8-1.35,2.06-.92,3.76-2.2,5.17-3.9v4.75c0,3.19-.99,5.6-3.05,7.37-2.06,1.7-4.61,2.55-7.66,2.55-2.62,0-4.75-.57-6.52-1.77-1.77-1.21-3.05-2.69-3.69-4.47l-7.37,3.05c1.21,3.19,3.4,5.74,6.59,7.73,3.19,1.91,6.88,2.91,11.06,2.91,3.61,0,6.81-.71,9.64-2.2,2.76-1.49,4.96-3.54,6.59-6.17,1.56-2.62,2.34-5.67,2.34-9V30.54h-7.58ZM463.54,54.49c-.99,1.77-2.34,3.12-3.97,4.11-1.7,1.06-3.62,1.56-5.67,1.56-2.2,0-4.11-.5-5.81-1.56-1.7-.99-3.05-2.34-3.97-4.11-.99-1.7-1.49-3.62-1.49-5.81s.5-4.11,1.49-5.88c.92-1.77,2.27-3.12,3.97-4.18,1.7-.99,3.61-1.49,5.81-1.49,2.06,0,3.97.5,5.6,1.49,1.63,1.06,2.98,2.41,3.97,4.18.99,1.77,1.49,3.69,1.49,5.88s-.5,4.11-1.42,5.81Z"
      />
      <path
        className="cls-2"
        d="M515.77,39.04c-1.49-2.76-3.54-5.03-6.31-6.8-2.76-1.7-6.03-2.55-9.85-2.55-3.62,0-6.81.85-9.64,2.55-2.91,1.77-5.17,4.11-6.8,7.09-1.63,3.05-2.48,6.45-2.48,10.28s.85,7.16,2.48,10.21c1.63,3.05,3.97,5.46,6.95,7.23,2.91,1.77,6.31,2.69,10.14,2.69s7.3-.92,10.21-2.69c2.91-1.77,4.96-4.04,6.17-6.8l-6.52-3.19c-.99,1.63-2.27,2.98-3.9,4.04-1.63,1.06-3.54,1.56-5.88,1.56-3.05,0-5.6-.99-7.73-2.91-2.2-1.91-3.4-4.47-3.61-7.73h28.57c.14-.57.21-1.2.28-1.84.07-.64.07-1.28.07-1.91,0-3.33-.71-6.38-2.13-9.21ZM489.19,45.63c.5-2.91,1.7-5.17,3.61-6.8,1.91-1.63,4.18-2.41,6.81-2.41s4.89.85,6.8,2.55c1.84,1.77,2.84,3.97,2.98,6.66h-20.2Z"
      />
    </g>
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
            <Link href="/" className="group flex items-center">
              <Logo />
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

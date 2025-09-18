"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePersonalization } from "@/hooks/usePersonalization";

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform group-hover:scale-105"
  >
    <defs>
      <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00FFC6" />
        <stop offset="100%" stopColor="#00D4AA" />
      </linearGradient>
    </defs>
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
    <rect
      x="18"
      y="12"
      width="26"
      height="26"
      rx="3.5"
      transform="rotate(45 31 25)"
      fill="url(#footer-logo-gradient)"
    />
  </svg>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink = ({ href, children, external = false }: FooterLinkProps) => (
  <motion.div
    whileHover={{ x: 4 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    {external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium flex items-center group"
      >
        {children}
        <svg
          className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    ) : (
      <Link
        href={href}
        className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium"
      >
        {children}
      </Link>
    )}
  </motion.div>
);

const SocialIcon = ({ href, icon, name }: { href: string; icon: React.ReactNode; name: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-accent transition-colors group"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    aria-label={name}
  >
    {icon}
  </motion.a>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { greeting, localTime, region } = usePersonalization();

  const regionLabel = {
    us: "United States",
    eu: "Europe",
    apac: "Asia-Pacific",
    latam: "Latin America",
    global: "Worldwide",
  }[region];

  return (
    <footer className="relative border-t border-white/5 bg-black/50 backdrop-blur-sm">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <Logo />
              <div>
                <h3 className="font-bold text-xl">QuantsEdge</h3>
                <p className="text-xs text-accent font-mono">AI-POWERED ALPHA</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Institutional-grade quantitative trading platform delivering consistent alpha through 
              advanced AI strategies and non-custodial architecture.
            </p>
            <p className="text-xs text-text-tertiary font-mono uppercase tracking-wide mb-6">
              {greeting}! Local time {localTime} • Region focus: {regionLabel}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <SocialIcon
                href="https://twitter.com/quantsedge"
                name="Twitter"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                }
              />
              <SocialIcon
                href="https://linkedin.com/company/quantsedge"
                name="LinkedIn"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }
              />
              <SocialIcon
                href="https://github.com/quantsedgeai"
                name="GitHub"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                }
              />
              <SocialIcon
                href="https://t.me/quantsedge"
                name="Telegram"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.49 2.27a1.5 1.5 0 0 0-1.62-.2L2.78 9.53a1.46 1.46 0 0 0 .12 2.78l3.7 1.19 1.5 4.8a1.49 1.49 0 0 0 1.34 1.04h.08a1.48 1.48 0 0 0 1.33-.85l1.9-4.06 4.63 3.41a1.5 1.5 0 0 0 2.36-.86l2.45-12.1a1.5 1.5 0 0 0-.8-1.71ZM10 20.32l-1.46-4.7 8.59-7.6-9.92 6.46L4.6 12 20 4.73Z" />
                  </svg>
                }
              />
              <SocialIcon
                href="https://www.crunchbase.com/organization/quantsedge"
                name="Crunchbase"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10a9.96 9.96 0 0 0 7.07-2.93l-1.768-1.768A7.96 7.96 0 0 1 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8a7.96 7.96 0 0 1 5.302 2.018l1.773-1.78A9.96 9.96 0 0 0 12 2Zm0 5a5 5 0 0 0-5 5c0 2.757 2.243 5 5 5a4.98 4.98 0 0 0 3.953-1.94l-1.57-1.23A2.982 2.982 0 0 1 12 15a3 3 0 0 1 0-6 2.98 2.98 0 0 1 2.377 1.153l1.577-1.237A4.98 4.98 0 0 0 12 7Z" />
                  </svg>
                }
              />
            </div>
          </motion.div>

          {/* Platform */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-6">Platform</h4>
            <div className="space-y-4">
              <FooterLink href="#performance">Performance</FooterLink>
              <FooterLink href="#technology">Technology</FooterLink>
              <FooterLink href="#roadmap">Roadmap</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-6">Resources</h4>
            <div className="space-y-4">
              <FooterLink href="/guides" external>Trading Guides</FooterLink>
              <FooterLink href="/community" external>Community</FooterLink>
              <FooterLink href="/support" external>Support Center</FooterLink>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-6">Company</h4>
            <div className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/press" external>Press Kit</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="#early-access">Partnerships</FooterLink>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <FooterLink href="/privacy.html">Privacy Policy</FooterLink>
              <FooterLink href="/terms.html">Terms of Service</FooterLink>
              <FooterLink href="/risk.html">Risk Disclosure</FooterLink>
              <FooterLink href="/cookies" external>Cookie Policy</FooterLink>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-text-secondary">
              <p className="mb-1">Questions? <span className="text-accent">info@quantsedge.ai</span></p>
            </div>
          </div>

          {/* Copyright & Disclaimers */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
              <div className="text-sm text-text-tertiary">
                <p>© {currentYear} QuantsEdge Inc. All rights reserved.</p>
                <p className="mt-1 text-xs">
                  QuantsEdge® is a registered trademark.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-text-tertiary">
                <span className="flex items-center space-x-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  <span>All systems operational</span>
                </span>
                <span className="font-mono">v2.1.4</span>
              </div>
            </div>
          </div>

          {/* Risk Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 p-4 rounded-lg bg-grey/10 border border-white/5"
          >
            <p className="text-xs text-text-tertiary leading-relaxed">
              <strong className="text-text-secondary">Risk Disclosure:</strong> Trading involves substantial risk and may not be suitable for all investors. 
              Past performance does not guarantee future results. Cryptocurrency and digital asset trading involves additional risks including volatility, 
              regulatory uncertainty, and technology risks. QuantsEdge provides algorithmic trading tools and does not provide investment advice. 
              Users should conduct their own research and consider their financial situation before trading.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

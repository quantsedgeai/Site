"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { usePersonalization } from "@/hooks/usePersonalization";

const Logo = () => (
  <svg
    height="32"
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

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink = ({ href, children, external = false }: FooterLinkProps) => (
  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
    {external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent"
      >
        {children}
        <svg
          className="ml-1 size-3 opacity-0 transition-opacity group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    ) : (
      <Link
        href={href}
        className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent"
      >
        {children}
      </Link>
    )}
  </motion.div>
);

const SocialIcon = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: React.ReactNode;
  name: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="glass group flex size-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-accent"
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
  const { greeting, localTime } = usePersonalization();

  return (
    <footer className="relative border-t border-white/5 bg-black/50 backdrop-blur-sm">
      {/* Gradient line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="group mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-text-secondary">
              AI-powered trading platform delivering consistent alpha through advanced strategies
              and non-custodial architecture.
            </p>
            <p className="mb-6 font-mono text-xs uppercase tracking-wide text-text-tertiary">
              {greeting}! Local time {localTime}
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <SocialIcon
                href="https://twitter.com/quantsedge"
                name="Twitter"
                icon={
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                }
              />
              <SocialIcon
                href="https://linkedin.com/company/quantsedge"
                name="LinkedIn"
                icon={
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />
              <SocialIcon
                href="https://t.me/quantsedge"
                name="Telegram"
                icon={
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21.49 2.27a1.5 1.5 0 0 0-1.62-.2L2.78 9.53a1.46 1.46 0 0 0 .12 2.78l3.7 1.19 1.5 4.8a1.49 1.49 0 0 0 1.34 1.04h.08a1.48 1.48 0 0 0 1.33-.85l1.9-4.06 4.63 3.41a1.5 1.5 0 0 0 2.36-.86l2.45-12.1a1.5 1.5 0 0 0-.8-1.71ZM10 20.32l-1.46-4.7 8.59-7.6-9.92 6.46L4.6 12 20 4.73Z" />
                  </svg>
                }
              />
              <SocialIcon
                href="https://www.crunchbase.com/organization/quantsedge"
                name="Crunchbase"
                icon={
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10a9.96 9.96 0 0 0 7.07-2.93l-1.768-1.768A7.96 7.96 0 0 1 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8a7.96 7.96 0 0 1 5.302 2.018l1.773-1.78A9.96 9.96 0 0 0 12 2Zm0 5a5 5 0 0 0-5 5c0 2.757 2.243 5 5 5a4.98 4.98 0 0 0 3.953-1.94l-1.57-1.23A2.982 2.982 0 0 1 12 15a3 3 0 0 1 0-6 2.98 2.98 0 0 1 2.377 1.153l1.577-1.237A4.98 4.98 0 0 0 12 7Z" />
                  </svg>
                }
              />
            </div>
          </motion.div>

          {/* Platform */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 font-semibold text-text-primary">Platform</h4>
            <div className="space-y-4">
              <FooterLink href="#performance">Performance</FooterLink>
              <FooterLink href="#technology">Technology</FooterLink>
              <FooterLink href="#roadmap">Roadmap</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 font-semibold text-text-primary">Resources</h4>
            <div className="space-y-4">
              <FooterLink href="https://quantsedge.gitbook.io/quantsedge-docs" external>
                Trading Guides
              </FooterLink>
              <FooterLink href="https://twitter.com/quantsedge" external>
                Community
              </FooterLink>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 font-semibold text-text-primary">Company</h4>
            <div className="space-y-4">
              <FooterLink href="#proof">About Us</FooterLink>
              <FooterLink href="mailto:support@quantsedge.ai" external>
                Contact
              </FooterLink>
              <FooterLink href="#early-access">Partnerships</FooterLink>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col items-start justify-between space-y-6 md:flex-row md:items-center md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <FooterLink href="/privacy.html">Privacy Policy</FooterLink>
              <FooterLink href="/terms.html">Terms of Service</FooterLink>
              <FooterLink href="/risk.html">Risk Disclosure</FooterLink>
              <FooterLink href="/cookies" external>
                Cookie Policy
              </FooterLink>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-text-secondary">
              <p className="mb-1">
                Questions? <span className="text-accent">support@quantsedge.ai</span>
              </p>
            </div>
          </div>

          {/* Copyright & Disclaimers */}
          <div className="mt-8 border-t border-white/5 pt-6">
            <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="text-sm text-text-tertiary">
                <p>© {currentYear} QuantsEdge Technologies. All rights reserved.</p>
                <p className="mt-1 text-xs">QuantsEdge® is a registered trademark.</p>
              </div>

              <div className="flex items-center space-x-4 text-xs text-text-tertiary">
                <span className="font-mono">v0.02</span>
              </div>
            </div>
          </div>

          {/* Risk Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 rounded-lg border border-white/5 bg-grey/10 p-4"
          >
            <p className="text-xs leading-relaxed text-text-tertiary">
              <strong className="text-text-secondary">Risk Disclosure:</strong> Trading involves
              substantial risk and may not be suitable for all investors. Past performance does not
              guarantee future results. Cryptocurrency and digital asset trading involves additional
              risks including volatility, regulatory uncertainty, and technology risks. QuantsEdge
              provides algorithmic trading tools and does not provide investment advice. Users
              should conduct their own research and consider their financial situation before
              trading.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

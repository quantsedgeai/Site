"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  placeholder = "blur",
  blurDataURL,
  sizes,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Generate a simple blur data URL if none provided
  const defaultBlurDataURL = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#2a2a2a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" />
      <circle cx="50%" cy="50%" r="20" fill="#00ffc6" fill-opacity="0.1" />
    </svg>`
  ).toString("base64")}`;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-grey ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-text-tertiary">
          <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-white/5">
            <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-xs">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 rounded-lg bg-grey"
          >
            {/* Loading skeleton with shimmer */}
            <div className="shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="size-8 rounded-full border-2 border-accent/20 border-t-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05,
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className="object-cover"
          {...props}
        />
      </motion.div>
    </div>
  );
}

// Enhanced image with hover effects
export function InteractiveImage({
  children,
  hoverScale = 1.05,
  hoverRotation = 0,
  className = "",
  ...props
}: OptimizedImageProps & {
  children?: React.ReactNode;
  hoverScale?: number;
  hoverRotation?: number;
}) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotation,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`magnetic ${className}`}
    >
      <OptimizedImage {...props} />
      {children}
    </motion.div>
  );
}

// Avatar component with ring animation
export function Avatar({
  src,
  alt,
  size = 128,
  ringColor = "ring-accent/20",
  className = "",
  ...props
}: Omit<OptimizedImageProps, "width" | "height"> & {
  size?: number;
  ringColor?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`relative ${className}`}
    >
      <div className={`overflow-hidden rounded-full ring-2 ${ringColor} magnetic touch-feedback`}>
        <OptimizedImage
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="transition-all duration-300 hover:scale-110"
          {...props}
        />
      </div>

      {/* Animated ring on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 ring-2 ring-accent"
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

// Logo component with brand-specific animations
export function Logo({
  variant = "default",
  animated = true,
  className = "",
  ...props
}: Omit<OptimizedImageProps, "alt"> & {
  variant?: "default" | "small" | "large";
  animated?: boolean;
}) {
  const sizes = {
    small: { width: 24, height: 24 },
    default: { width: 32, height: 32 },
    large: { width: 64, height: 64 },
  };

  return (
    <motion.div
      whileHover={animated ? { scale: 1.05, rotate: 5 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`magnetic ${className}`}
    >
      <OptimizedImage alt="QuantsEdge Logo" {...sizes[variant]} {...props} priority />
    </motion.div>
  );
}

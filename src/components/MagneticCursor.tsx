"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useGesture } from "@use-gesture/react";

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  hoverType: 'default' | 'button' | 'link' | 'chart';
}

export function MagneticCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    hoverType: 'default'
  });
  
  // Always call hooks at the top level
  useCursorHide();
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring animation for cursor
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      
      setCursorState(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }));
    };
    
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      let hoverType: CursorState['hoverType'] = 'default';
      
      if (target.matches('button, .btn')) {
        hoverType = 'button';
      } else if (target.matches('a, .nav-link')) {
        hoverType = 'link';
      } else if (target.closest('.trading-chart, .chart-container')) {
        hoverType = 'chart';
      }
      
      setCursorState(prev => ({
        ...prev,
        isHovering: true,
        hoverType
      }));
    };
    
    const handleMouseLeave = () => {
      setCursorState(prev => ({
        ...prev,
        isHovering: false,
        hoverType: 'default'
      }));
    };
    
    // Add magnetic effect to interactive elements
    const magneticElements = document.querySelectorAll('button, .btn, a, .nav-link');
    
    magneticElements.forEach(element => {
      const el = element as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        if (!cursorState.isHovering) return;
        
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        
        if (distance < 80) {
          const strength = Math.max(0, 1 - distance / 80);
          const magnetX = deltaX * strength * 0.3;
          const magnetY = deltaY * strength * 0.3;
          
          el.style.transform = `translate(${magnetX}px, ${magnetY}px) scale(${1 + strength * 0.1})`;
        } else {
          el.style.transform = 'translate(0px, 0px) scale(1)';
        }
      };
      
      const resetTransform = () => {
        el.style.transform = 'translate(0px, 0px) scale(1)';
      };
      
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mouseleave', resetTransform);
      document.addEventListener('mousemove', handleMouseMove);
    });
    
    document.addEventListener('mousemove', updateCursor);
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      magneticElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [x, y, cursorState.isHovering]);
  
  // Custom cursor variants
  const getCursorVariant = () => {
    switch (cursorState.hoverType) {
      case 'button':
        return {
          scale: 2.5,
          backgroundColor: 'rgba(0, 255, 198, 0.8)',
          border: '2px solid #00FFC6',
        };
      case 'link':
        return {
          scale: 1.8,
          backgroundColor: 'transparent',
          border: '2px solid #00FFC6',
        };
      case 'chart':
        return {
          scale: 1.5,
          backgroundColor: 'rgba(0, 255, 198, 0.3)',
          border: '1px solid #00FFC6',
        };
      default:
        return {
          scale: 1,
          backgroundColor: '#00FFC6',
          border: 'none',
        };
    }
  };
  
  return (
    <div className={isDesktop ? 'block' : 'hidden'}>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: 10,
          height: 10,
          left: -5,
          top: -5,
        }}
        animate={getCursorVariant()}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      <AnimatePresence>
        {cursorState.isHovering && (
          <motion.div
            className="fixed pointer-events-none z-[9998] rounded-full border border-accent/30"
            style={{
              x: cursorX,
              y: cursorY,
              width: 40,
              height: 40,
              left: -20,
              top: -20,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        )}
      </AnimatePresence>
      
      {/* Trailing particles */}
      <AnimatePresence>
        {cursorState.hoverType === 'button' && (
          <motion.div
            className="fixed pointer-events-none z-[9997]"
            style={{
              x: cursorX,
              y: cursorY,
              left: -2,
              top: -2,
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-accent"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 40 - 20,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Custom hook to hide default cursor
export function useCursorHide() {
  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth > 768) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = 'auto';
      }
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('resize', checkDevice);
    };
  }, []);
}

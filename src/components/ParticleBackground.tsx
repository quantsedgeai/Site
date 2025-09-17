"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Mouse tracking for interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles(currentParticles => {
        return currentParticles.map(particle => {
          // Update position
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Bounce off edges
          if (newX < 0 || newX > canvas.width) particle.vx *= -1;
          if (newY < 0 || newY > canvas.height) particle.vy *= -1;

          // Keep within bounds
          newX = Math.max(0, Math.min(canvas.width, newX));
          newY = Math.max(0, Math.min(canvas.height, newY));

          // Mouse interaction
          const dx = mouseRef.current.x - newX;
          const dy = mouseRef.current.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let opacity = particle.opacity;
          if (distance < 100) {
            opacity = Math.min(0.8, particle.opacity + (100 - distance) / 500);
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 198, ${opacity})`;
          ctx.fill();

          // Draw connections to nearby particles
          currentParticles.forEach(otherParticle => {
            if (otherParticle.id <= particle.id) return;

            const dx2 = newX - otherParticle.x;
            const dy2 = newY - otherParticle.y;
            const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            if (distance2 < 100) {
              ctx.beginPath();
              ctx.moveTo(newX, newY);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              const lineOpacity = (100 - distance2) / 500;
              ctx.strokeStyle = `rgba(0, 255, 198, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas-based particle system */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: 'transparent' }}
      />
      
    </>
  );
}

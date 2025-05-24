"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTAButton } from "./cta-button";
import { SocialProofCounter } from "./social-proof-counter";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  // Parallax effect for background elements
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = container.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    const elements = container.querySelectorAll('.parallax-element');
    elements.forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset.speed || "1");
      const xOffset = x * speed * 20;
      const yOffset = y * speed * 20;
      (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8436981/pexels-photo-8436981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Yoga practice"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
              Transform Your Life Through{" "}
              <span className="text-primary">Yoga</span>
            </h1>
            <p className="text-xl text-white/90 max-w-xl drop-shadow-md">
              Empowering your body, mind, and spirit for holistic wellness. Join our community of dedicated practitioners and experienced instructors.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <CTAButton />
            </div>
            <div className="mt-12">
              <SocialProofCounter />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
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
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-in-a-studio-4894-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="parallax-element absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-xl" 
          data-speed="2.5"
        ></div>
        <div 
          className="parallax-element absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-indigo-500/20 blur-xl" 
          data-speed="3"
        ></div>
        <div 
          className="parallax-element absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-pink-500/20 blur-xl" 
          data-speed="2"
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Transform Your</span>
            <span className="block mt-2 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Body & Mind
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-white/80 max-w-3xl mx-auto"
          >
            Experience the perfect balance of strength, flexibility, and mindfulness with our premium fitness programs designed for all levels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton />
            
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 group">
              <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Watch Preview
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <SocialProofCounter />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
        >
          <ChevronRight size={24} className="text-white rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
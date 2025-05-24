"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, Dumbbell, Users, Cog as Yoga } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    popular: boolean;
  };
  isYearly: boolean;
}

export function ServiceCard({ service, isYearly }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Card 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Update motion values
    x.set(mouseX);
    y.set(mouseY);
  };
  
  const handleMouseLeave = () => {
    // Reset position and rotation
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  const currentPrice = isYearly ? service.yearlyPrice : service.monthlyPrice;
  
  const getIcon = () => {
    switch (service.icon) {
      case "dumbbell":
        return <Dumbbell className="h-6 w-6" />;
      case "users":
        return <Users className="h-6 w-6" />;
      case "yoga":
        return <Yoga className="h-6 w-6" />;
      default:
        return <Dumbbell className="h-6 w-6" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative h-full rounded-2xl border bg-card p-6 shadow-lg transition-all duration-300",
        service.popular ? "border-primary/50" : "border-border",
        isHovered && "shadow-xl"
      )}
    >
      {/* Popular badge */}
      {service.popular && (
        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute -top-4 right-4 rounded-full bg-gradient-to-r from-primary to-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-lg"
        >
          <span className="animate-pulse">Most Popular</span>
        </div>
      )}

      <div style={{ transform: "translateZ(30px)" }}>
        {/* Icon */}
        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
          {getIcon()}
        </div>

        {/* Title and Description */}
        <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
        <p className="mb-6 text-sm text-muted-foreground">{service.description}</p>

        {/* Price */}
        <div className="mb-6">
          <p className="text-3xl font-bold">
            ${currentPrice}
            <span className="text-base font-normal text-muted-foreground">
              /mo
            </span>
          </p>
          {isYearly && (
            <p className="text-sm text-green-500">Save ${(service.monthlyPrice - service.yearlyPrice) * 12} yearly</p>
          )}
        </div>

        {/* Features */}
        <ul className="mb-8 space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div style={{ transform: "translateZ(50px)" }} className="mt-auto">
        <Button
          variant={service.popular ? "default" : "outline"}
          className={cn(
            "w-full transition-all duration-300",
            service.popular && "bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700"
          )}
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}
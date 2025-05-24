"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import { PricingToggle } from "./pricing-toggle";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Heart, 
  Brain, 
  Dumbbell, 
  Sparkles, 
  Moon, 
  Sun 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Hatha Yoga",
    description: "Traditional yoga practice focusing on physical postures and breathing techniques for overall wellness.",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    icon: Brain,
    title: "Meditation",
    description: "Guided meditation sessions to reduce stress and enhance mental clarity.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Dumbbell,
    title: "Power Yoga",
    description: "Dynamic and energetic yoga style that builds strength and flexibility.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Sparkles,
    title: "Prenatal Yoga",
    description: "Specialized classes for expectant mothers to maintain fitness and prepare for childbirth.",
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    icon: Moon,
    title: "Yin Yoga",
    description: "Slow-paced style focusing on deep stretching and relaxation.",
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    icon: Sun,
    title: "Vinyasa Flow",
    description: "Fluid movement between poses synchronized with breath for a dynamic practice.",
    color: "from-orange-500/20 to-orange-500/5",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
          <motion.div
          ref={ref}
            initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Services
            </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of yoga programs designed to meet your unique needs and goals.
            </p>
          </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${service.color})`,
              }}
            >
              <div className="relative z-10">
                <service.icon className="h-12 w-12 mb-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
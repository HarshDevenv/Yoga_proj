"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { 
    value: "10K+",
    label: "Active Members",
    description: "Join our growing community",
  },
  { 
    value: "50+",
    label: "Expert Instructors",
    description: "Learn from the best",
  },
  { 
    value: "100+",
    label: "Classes Weekly",
    description: "Find your perfect fit",
  },
];

export function SocialProofCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid gap-8 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-3xl font-bold text-primary"
          >
            {stat.value}
          </motion.div>
          <div className="mt-2 text-sm font-medium">{stat.label}</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {stat.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
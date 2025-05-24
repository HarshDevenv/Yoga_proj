"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award } from 'lucide-react';

const stats = [
  { 
    id: 1, 
    icon: Users, 
    label: 'Members', 
    startValue: 0, 
    endValue: 5000, 
    prefix: '+' 
  },
  { 
    id: 2, 
    icon: Star, 
    label: 'Reviews', 
    startValue: 0, 
    endValue: 4.8, 
    suffix: '/5' 
  },
  { 
    id: 3, 
    icon: Award, 
    label: 'Expert Trainers', 
    startValue: 0, 
    endValue: 25, 
    prefix: '' 
  },
];

export function SocialProofCounter() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('social-proof-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="social-proof-section" className="flex flex-wrap justify-center gap-8 md:gap-16">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 * stat.id }}
          className="flex flex-col items-center"
        >
          <div className="mb-2 rounded-full bg-white/10 p-3 backdrop-blur-sm">
            <stat.icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <CounterAnimation
                inView={inView}
                startValue={stat.startValue}
                endValue={stat.endValue}
                duration={2}
                prefix={stat.prefix || ''}
                suffix={stat.suffix || ''}
              />
            </div>
            <p className="text-sm text-white/70">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

interface CounterAnimationProps {
  inView: boolean;
  startValue: number;
  endValue: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

function CounterAnimation({
  inView,
  startValue,
  endValue,
  duration,
  prefix = '',
  suffix = '',
}: CounterAnimationProps) {
  const [count, setCount] = useState(startValue);
  const isDecimal = Number.isInteger(endValue) === false;

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const currentCount = startValue + progress * (endValue - startValue);
      
      setCount(isDecimal ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, startValue, endValue, duration, isDecimal]);

  return (
    <h3 className="text-2xl font-bold text-white">
      {prefix}
      {count}
      {suffix}
    </h3>
  );
}
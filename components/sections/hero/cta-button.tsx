"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, text: 'Get Started' },
  { id: 2, text: 'Book Free Trial' },
  { id: 3, text: 'Confirm Booking' },
];

export function CTAButton() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleClick = () => {
    if (currentStep === 1) {
      // Scroll to contact form
      const el = document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setCurrentStep(2);
      return;
    }
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setComplete(true);
      // Reset after 2 seconds
      setTimeout(() => {
        setComplete(false);
        setCurrentStep(1);
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        variant="outline"
        className={cn(
          "group relative overflow-hidden px-8 py-6 text-lg font-semibold text-primary dark:text-white border-2 border-primary dark:border-white bg-transparent shadow-none transition-all duration-300 hover:border-blue-600 dark:hover:border-blue-400 focus:ring-0 focus:outline-none",
          complete && "text-green-600 dark:text-green-400 border-green-600 dark:border-green-400 hover:border-green-700 dark:hover:border-green-500"
        )}
        size="lg"
      >
        <span className="relative z-10 flex items-center gap-2">
          {complete ? (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Check className="mr-2 h-5 w-5" />
              <span>Booked Successfully!</span>
            </motion.div>
          ) : (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <span>{steps[currentStep - 1].text}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          )}
        </span>
      </Button>
      {/* Progress indicator */}
      {!complete && (
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={cn(
                "h-1 w-2 rounded-full transition-all duration-300",
                step.id === currentStep
                  ? "w-4 bg-primary dark:bg-white"
                  : step.id < currentStep
                  ? "bg-primary/60 dark:bg-white/60"
                  : "bg-gray-300 dark:bg-gray-700"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
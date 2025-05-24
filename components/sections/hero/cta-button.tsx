"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        className={cn(
          "relative overflow-hidden group bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 transition-all duration-300",
          complete && "bg-green-600 hover:bg-green-700"
        )}
        size="lg"
      >
        <AnimatePresence mode="wait">
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
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          )}
        </AnimatePresence>
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
                  ? "w-4 bg-primary"
                  : step.id < currentStep
                  ? "bg-primary/60"
                  : "bg-gray-300 dark:bg-gray-700"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
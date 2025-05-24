"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dumbbell, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const journeySteps = [
  {
    id: 1,
    title: "Assessment",
    description:
      "Begin with a comprehensive fitness assessment to identify your strengths, weaknesses, and goals.",
    icon: <Dumbbell className="h-6 w-6" />,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  },
  {
    id: 2,
    title: "Custom Plan",
    description:
      "Receive a personalized workout and nutrition plan tailored to your specific needs and objectives.",
    icon: <Dumbbell className="h-6 w-6" />,
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400",
  },
  {
    id: 3,
    title: "Training",
    description:
      "Work with our expert trainers to perfect your form and maximize results while preventing injury.",
    icon: <Dumbbell className="h-6 w-6" />,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  },
  {
    id: 4,
    title: "Progress Tracking",
    description:
      "Track your progress through regular assessments and adjustments to your program as you advance.",
    icon: <Dumbbell className="h-6 w-6" />,
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
  },
  {
    id: 5,
    title: "Achievement",
    description:
      "Celebrate your fitness milestones and set new goals for continued growth and development.",
    icon: <Trophy className="h-6 w-6" />,
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
  },
];

export function FitnessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Your Fitness Journey
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Follow our proven path to achieve your fitness goals
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Journey line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/60 via-primary to-primary/60"></div>

          {/* Timeline steps */}
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="w-1/2 px-8">
                <div
                  className={`rounded-lg p-6 shadow-md ${
                    index % 2 === 0 ? "mr-4" : "ml-4"
                  } bg-card`}
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${step.color}`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Center marker */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  {step.id}
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="w-1/2"></div>
            </motion.div>
          ))}

          {/* Direction indicators */}
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <ChevronDown className="h-6 w-6 animate-bounce text-primary" />
          </div>
          <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <ChevronUp className="h-6 w-6 animate-bounce text-primary" />
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
}
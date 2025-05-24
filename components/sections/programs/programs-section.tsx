"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Target, Users, ArrowRight, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    title: "Beginner's Journey",
    description: "Perfect for those new to yoga. Learn fundamental poses and breathing techniques in a supportive environment.",
    level: "Beginner",
    duration: "60 min",
    schedule: "Mon, Wed, Fri - 9:00 AM",
    benefits: [
      "Build strong foundation",
      "Learn proper alignment",
      "Develop breathing awareness",
      "Gain confidence in practice"
    ],
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Intermediate Flow",
    description: "Take your practice to the next level with more challenging sequences and advanced techniques.",
    level: "Intermediate",
    duration: "75 min",
    schedule: "Tue, Thu - 10:30 AM",
    benefits: [
      "Deepen your practice",
      "Master complex poses",
      "Enhance flexibility",
      "Build core strength"
    ],
    image: "https://images.pexels.com/photos/3822626/pexels-photo-3822626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Advanced Mastery",
    description: "For experienced practitioners seeking to refine their skills and explore advanced techniques.",
    level: "Advanced",
    duration: "90 min",
    schedule: "Mon, Wed, Fri - 6:00 PM",
    benefits: [
      "Perfect advanced poses",
      "Explore inversions",
      "Deep meditation practice",
      "Personal guidance"
    ],
    image: "https://images.pexels.com/photos/3822628/pexels-photo-3822628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured programs designed to guide you through your yoga journey, from beginner to advanced levels.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid gap-8 md:grid-cols-2 items-center"
            >
              <div className={`order-2 md:order-${index % 2 === 0 ? '1' : '2'}`}>
                <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src={program.image}
                  alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                </div>
              </div>
              
              <div className={`order-1 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.level}</span>
                      </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.duration}</span>
                      </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.schedule}</span>
                      </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Small Groups</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full sm:w-auto">
                    Join Program
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const workshops = [
  {
    title: "Weekend Yoga Retreat",
    description: "Immerse yourself in a transformative weekend of yoga, meditation, and self-discovery.",
    date: "June 15-17, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Mountain View Resort",
    capacity: "20 participants",
    price: "$299",
    image: "https://images.pexels.com/photos/3822629/pexels-photo-3822629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Daily yoga sessions",
      "Guided meditation",
      "Healthy meals included",
      "Nature walks",
      "Workshop materials"
    ],
    featured: true
  },
  {
    title: "Advanced Inversion Workshop",
    description: "Master the art of inversions with expert guidance and personalized attention.",
    date: "May 25, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Main Studio",
    capacity: "12 participants",
    price: "$89",
    image: "https://images.pexels.com/photos/3822630/pexels-photo-3822630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Handstand techniques",
      "Shoulder stand variations",
      "Safety practices",
      "Progression strategies",
      "Personal feedback"
    ],
    featured: false
  },
  {
    title: "Meditation Masterclass",
    description: "Deep dive into advanced meditation techniques and mindfulness practices.",
    date: "June 8, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Zen Garden",
    capacity: "15 participants",
    price: "$75",
    image: "https://images.pexels.com/photos/3822631/pexels-photo-3822631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Breathing techniques",
      "Mindfulness practices",
      "Stress reduction",
      "Guided sessions",
      "Take-home resources"
    ],
    featured: false
  }
];

export function WorkshopsSection() {
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
            Upcoming Workshops
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our specialized workshops and retreats to deepen your practice and connect with like-minded individuals.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-background shadow-lg transition-all duration-300 hover:shadow-xl",
                workshop.featured && "md:col-span-2 lg:col-span-3"
              )}
            >
              <div className={cn(
                "grid gap-8",
                workshop.featured ? "md:grid-cols-2" : "flex flex-col"
              )}>
                <div className={cn(
                  "relative overflow-hidden",
                  workshop.featured ? "md:aspect-auto" : "aspect-video"
                )}>
                <img
                  src={workshop.image}
                  alt={workshop.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {workshop.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
                        Featured Event
                      </span>
                  </div>
                )}
              </div>
              
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{workshop.title}</h3>
                    <p className="text-muted-foreground">{workshop.description}</p>
                </div>
                
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm">{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">{workshop.capacity}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {workshop.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      {workshop.price}
                    </div>
                    <Button className="group/btn">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
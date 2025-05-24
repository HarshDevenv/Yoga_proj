"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import { PricingToggle } from "./pricing-toggle";

const services = [
  {
    id: 1,
    title: "Personal Training",
    description: "One-on-one personalized training sessions tailored to your specific fitness goals and needs.",
    icon: "dumbbell",
    monthlyPrice: 79,
    yearlyPrice: 69,
    features: [
      "Personalized fitness assessment",
      "Custom workout plans",
      "Nutritional guidance",
      "Progress tracking",
      "Flexible scheduling",
    ],
    popular: false,
  },
  {
    id: 2,
    title: "Premium Yoga",
    description: "Transform your body and mind with our premium yoga classes led by expert instructors.",
    icon: "yoga",
    monthlyPrice: 99,
    yearlyPrice: 89,
    features: [
      "All styles of yoga classes",
      "Meditation sessions",
      "Advanced pose workshops",
      "Breathing technique training",
      "Mindfulness practices",
      "Access to exclusive retreats",
    ],
    popular: true,
  },
  {
    id: 3,
    title: "Group Fitness",
    description: "Energetic group classes that combine strength, cardio, and flexibility training in a motivating environment.",
    icon: "users",
    monthlyPrice: 59,
    yearlyPrice: 49,
    features: [
      "Unlimited group classes",
      "Variety of workout styles",
      "Community support",
      "Beginner-friendly options",
      "Monthly fitness challenges",
    ],
    popular: false,
  },
];

export function ServicesSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Premium Fitness Services
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose the perfect plan to achieve your fitness goals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <ServiceCard
                service={service}
                isYearly={isYearly}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
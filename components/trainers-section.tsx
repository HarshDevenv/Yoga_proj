"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const trainers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    bio: "Sarah specializes in Vinyasa and Hatha yoga with 10+ years of experience. Her classes focus on mindfulness and proper alignment.",
    image: "https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialMedia: {
      instagram: "#",
      twitter: "#",
    },
    specialties: ["Vinyasa Flow", "Meditation", "Hatha Yoga"],
    certifications: ["RYT-500", "Yoga Alliance Certified"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Strength Coach",
    bio: "Michael has trained professional athletes and specializes in functional strength training and HIIT workouts for all fitness levels.",
    image: "https://images.pexels.com/photos/4057058/pexels-photo-4057058.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialMedia: {
      instagram: "#",
      twitter: "#",
    },
    specialties: ["Strength Training", "HIIT", "Functional Fitness"],
    certifications: ["NASM-CPT", "CSCS"],
  },
  {
    id: 3,
    name: "Emily Chang",
    role: "Pilates Expert",
    bio: "Emily's approach combines classical Pilates with modern techniques to improve core strength, posture, and overall body awareness.",
    image: "https://images.pexels.com/photos/7005034/pexels-photo-7005034.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialMedia: {
      instagram: "#",
      twitter: "#",
    },
    specialties: ["Mat Pilates", "Reformer", "Pre/Post Natal"],
    certifications: ["Balanced Body Certified", "PMA-CPT"],
  },
  {
    id: 4,
    name: "David Williams",
    role: "Nutrition Coach",
    bio: "David helps clients optimize their nutrition to support fitness goals, focusing on sustainable habits rather than restrictive diets.",
    image: "https://images.pexels.com/photos/4058347/pexels-photo-4058347.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialMedia: {
      instagram: "#",
      twitter: "#",
    },
    specialties: ["Sports Nutrition", "Meal Planning", "Weight Management"],
    certifications: ["Precision Nutrition Level 2", "NASM-CNC"],
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Dance Fitness",
    bio: "Olivia brings energy and fun to her dance-based workouts, combining cardio with choreography for an effective full-body workout.",
    image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialMedia: {
      instagram: "#",
      twitter: "#",
    },
    specialties: ["Zumba", "Hip Hop Fitness", "Cardio Dance"],
    certifications: ["Zumba Certified", "AFAA Group Fitness"],
  },
];

export function TrainersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="trainers" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet Our Expert Trainers
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Learn from the best in fitness and wellness
          </p>
        </motion.div>

        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-6xl"
        >
          <CarouselContent>
            {trainers.map((trainer) => (
              <CarouselItem key={trainer.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="h-64 w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{trainer.name}</h3>
                    <p className="mb-4 text-sm font-medium text-primary">
                      {trainer.role}
                    </p>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {trainer.bio}
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                          asChild
                        >
                          <a href={trainer.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                          asChild
                        >
                          <a href={trainer.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
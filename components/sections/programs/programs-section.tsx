"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const programs = [
  {
    id: 1,
    title: "Power Yoga",
    description: "Build strength and flexibility through dynamic yoga sequences",
    duration: "60 mins",
    level: "All Levels",
    capacity: "15 students",
    image: "https://images.pexels.com/photos/8436741/pexels-photo-8436741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Meditation",
    description: "Find inner peace and mental clarity through guided meditation",
    duration: "45 mins",
    level: "Beginner",
    capacity: "20 students",
    image: "https://images.pexels.com/photos/8436620/pexels-photo-8436620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-blue-500 to-teal-500",
  },
  {
    id: 3,
    title: "Ashtanga Yoga",
    description: "Master traditional Ashtanga sequences with expert guidance",
    duration: "90 mins",
    level: "Advanced",
    capacity: "12 students",
    image: "https://images.pexels.com/photos/8436727/pexels-photo-8436727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-amber-500 to-red-500",
  },
  {
    id: 4,
    title: "Prenatal Yoga",
    description: "Safe and nurturing yoga practice designed for expectant mothers",
    duration: "60 mins",
    level: "All Levels",
    capacity: "10 students",
    image: "https://images.pexels.com/photos/8436457/pexels-photo-8436457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-green-500 to-emerald-500",
  }
];

export function ProgramsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Specialized Programs
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Transform your practice with our expert-led programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredId(program.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundImage: `linear-gradient(to right, ${program.color})` }}
                ></div>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-white/90 mb-6">{program.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        <span>{program.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        <span>{program.capacity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch Preview
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
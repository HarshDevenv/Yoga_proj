"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const workshops = [
  {
    id: 1,
    title: "Advanced Asana Workshop",
    description: "Master complex poses with proper alignment and technique",
    date: "April 15, 2024",
    location: "Main Studio",
    spots: "8 spots left",
    image: "https://images.pexels.com/photos/8436981/pexels-photo-8436981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Advanced", "Technique", "Alignment"],
    featured: true,
  },
  {
    id: 2,
    title: "Mindfulness & Meditation",
    description: "Learn essential meditation techniques for daily practice",
    date: "April 22, 2024",
    location: "Zen Room",
    spots: "12 spots left",
    image: "https://images.pexels.com/photos/8436595/pexels-photo-8436595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Meditation", "Mindfulness", "Beginner"],
    featured: false,
  },
  {
    id: 3,
    title: "Yoga Philosophy Series",
    description: "Explore the ancient wisdom and philosophy of yoga",
    date: "May 1, 2024",
    location: "Library",
    spots: "15 spots left",
    image: "https://images.pexels.com/photos/8436781/pexels-photo-8436781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Philosophy", "History", "Theory"],
    featured: false,
  }
];

export function WorkshopsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Upcoming Workshops
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Deepen your practice with our specialized workshops
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredId(workshop.id)}
              onHoverEnd={() => setHoveredId(null)}
              className={cn(
                "group rounded-2xl border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg",
                workshop.featured && "md:col-span-2 md:row-span-2"
              )}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {workshop.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {workshop.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-muted-foreground mb-6">{workshop.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{workshop.spots}</span>
                  </div>
                </div>
                
                <Button className="w-full group/btn">
                  Reserve Your Spot
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
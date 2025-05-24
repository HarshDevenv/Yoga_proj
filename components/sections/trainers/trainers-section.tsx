"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trainers = [
  {
    name: "Sarah Johnson",
    role: "Lead Instructor",
    specialties: ["Vinyasa", "Power Yoga", "Meditation"],
    bio: "With over 15 years of experience, Sarah brings a dynamic and mindful approach to her classes. Her teaching style combines traditional yoga philosophy with modern techniques.",
    image: "https://images.pexels.com/photos/3822632/pexels-photo-3822632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      instagram: "https://instagram.com/sarahyoga",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      website: "https://sarahyoga.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Senior Instructor",
    specialties: ["Hatha", "Yin Yoga", "Breathwork"],
    bio: "Michael's gentle yet challenging classes focus on alignment and breath awareness. He has trained in India and brings authentic yoga wisdom to his teachings.",
    image: "https://images.pexels.com/photos/3822633/pexels-photo-3822633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      instagram: "https://instagram.com/michaelchenyoga",
      linkedin: "https://linkedin.com/in/michaelchen",
      website: "https://michaelchenyoga.com"
    }
  },
  {
    name: "Emma Rodriguez",
    role: "Specialist Instructor",
    specialties: ["Prenatal Yoga", "Restorative", "Yoga Therapy"],
    bio: "Emma specializes in therapeutic yoga and prenatal care. Her nurturing approach helps students find balance and healing through mindful movement.",
    image: "https://images.pexels.com/photos/3822634/pexels-photo-3822634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      instagram: "https://instagram.com/emmayoga",
      linkedin: "https://linkedin.com/in/emmarodriguez",
      website: "https://emmayoga.com"
    }
  },
  {
    name: "David Kim",
    role: "Advanced Instructor",
    specialties: ["Ashtanga", "Inversions", "Philosophy"],
    bio: "David's dynamic teaching style challenges students to explore their edge while maintaining mindfulness. He's known for his detailed alignment cues and philosophical insights.",
    image: "https://images.pexels.com/photos/3822635/pexels-photo-3822635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      instagram: "https://instagram.com/davidkimyoga",
      linkedin: "https://linkedin.com/in/davidkim",
      website: "https://davidkimyoga.com"
    }
  }
];

export function TrainersSection() {
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
            Our Expert Instructors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our team of experienced and passionate yoga instructors, each bringing their unique expertise and teaching style to our community.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-background shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                  <p className="text-sm text-white/80">{trainer.role}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={trainer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={trainer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={trainer.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="group">
            Meet All Instructors
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 
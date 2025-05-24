"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ExpandablePanel } from "./expandable-panel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    category: "membership",
    question: "What types of memberships do you offer?",
    answer: "We offer various membership options including monthly, quarterly, and annual plans. Each plan comes with different benefits and pricing tiers, from basic to premium. All memberships include access to our state-of-the-art facilities, group classes, and basic fitness assessments.",
    relatedQuestions: [2, 3],
  },
  {
    id: 2,
    category: "membership",
    question: "Can I freeze my membership temporarily?",
    answer: "Yes, you can freeze your membership for up to 3 months per year. A small administrative fee may apply. This is perfect for vacations, business trips, or other temporary circumstances that prevent you from using the facility.",
    relatedQuestions: [1, 3],
  },
  {
    id: 3,
    category: "membership",
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy requires a 30-day written notice before your next billing cycle. There are no cancellation fees if this notice period is honored. For annual memberships, different terms may apply based on how long you've been a member.",
    relatedQuestions: [1, 2],
  },
  {
    id: 4,
    category: "classes",
    question: "How do I sign up for classes?",
    answer: "You can sign up for classes through our mobile app, website, or at the front desk. We recommend booking classes at least 24 hours in advance as they tend to fill up quickly. You can also join waiting lists for full classes in case of cancellations.",
    relatedQuestions: [5, 6],
  },
  {
    id: 5,
    category: "classes",
    question: "What if I need to cancel a class reservation?",
    answer: "Class cancellations should be made at least 6 hours before the scheduled start time to avoid a late cancellation fee. You can cancel through our app, website, or by calling the front desk. This policy helps ensure that waitlisted members have a chance to join the class.",
    relatedQuestions: [4, 6],
  },
  {
    id: 6,
    category: "classes",
    question: "Are classes included in all membership types?",
    answer: "Most group classes are included in all membership types. However, specialty classes, workshops, and private sessions may incur additional fees. Premium memberships include credits that can be applied toward these specialty offerings.",
    relatedQuestions: [1, 4],
  },
  {
    id: 7,
    category: "facilities",
    question: "What amenities are available at your facility?",
    answer: "Our facility includes state-of-the-art cardio and strength equipment, group exercise studios, locker rooms with showers and saunas, a functional training area, and a recovery zone with foam rollers and stretching equipment. Premium members also have access to towel service and executive locker rooms.",
    relatedQuestions: [8, 9],
  },
  {
    id: 8,
    category: "facilities",
    question: "Do you provide towels and toiletries?",
    answer: "We provide shower towels for all members and workout towels for premium members. Basic toiletries such as shampoo, conditioner, and body wash are available in all shower facilities. Premium locker rooms include additional amenities like hair dryers, moisturizer, and mouthwash.",
    relatedQuestions: [7, 9],
  },
  {
    id: 9,
    category: "facilities",
    question: "What are your hours of operation?",
    answer: "Our facility is open Monday through Friday from 5:00 AM to 11:00 PM, and Saturday and Sunday from 7:00 AM to 9:00 PM. Hours may vary on holidays, so please check our website or app for the most current information.",
    relatedQuestions: [7, 8],
  },
];

const categories = [
  { id: "all", name: "All Questions" },
  { id: "membership", name: "Membership" },
  { id: "classes", name: "Classes" },
  { id: "facilities", name: "Facilities" },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFaqById = (id: number) => {
    return faqs.find((faq) => faq.id === id);
  };

  const getSuggestions = () => {
    if (!searchQuery || searchQuery.length < 2) return [];
    
    return faqs
      .filter((faq) => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "all" || faq.category === selectedCategory)
      )
      .slice(0, 3)
      .map((faq) => faq.question);
  };

  const suggestions = getSuggestions();

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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our classes, policies, and facilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${index}`}
                className="border-b border-border/40"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
              <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
            >
              Contact us
            </a>
              </p>
        </motion.div>
      </div>
    </section>
  );
}
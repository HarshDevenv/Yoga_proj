"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ExpandablePanel } from "./expandable-panel";

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
    <section id="faq" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Find answers to common questions about our services and facilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl"
        >
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for questions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            {/* Search suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full rounded-md border bg-card shadow-lg">
                <ul className="py-1">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="cursor-pointer px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <ExpandablePanel
                  question={faq.question}
                  answer={faq.answer}
                  relatedQuestions={faq.relatedQuestions.map((id) => {
                    const relatedFaq = getFaqById(id);
                    return relatedFaq
                      ? {
                          id,
                          question: relatedFaq.question,
                        }
                      : null;
                  }).filter(Boolean) as { id: number; question: string }[]}
                  onRelatedQuestionClick={(id) => {
                    const faq = getFaqById(id);
                    if (faq) {
                      setSelectedCategory(faq.category);
                      setSearchQuery(faq.question);
                    }
                  }}
                />
              </motion.div>
            ))
          ) : (
            <div className="rounded-lg border bg-card p-6 text-center">
              <p className="text-muted-foreground">
                No questions found matching your search. Try a different query or
                category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
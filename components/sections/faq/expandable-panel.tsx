"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExpandablePanelProps {
  question: string;
  answer: string;
  relatedQuestions?: {
    id: number;
    question: string;
  }[];
  onRelatedQuestionClick?: (id: number) => void;
}

export function ExpandablePanel({
  question,
  answer,
  relatedQuestions = [],
  onRelatedQuestionClick,
}: ExpandablePanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between p-4 text-left transition-colors",
          isOpen && "bg-muted/50"
        )}
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-semibold">{question}</h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t px-4 py-3 text-muted-foreground">
              {answer}

              {relatedQuestions.length > 0 && (
                <div className="mt-4">
                  <p className="mb-2 flex items-center text-sm font-medium text-foreground">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Related Questions
                  </p>
                  <div className="space-y-2">
                    {relatedQuestions.map((related) => (
                      <Button
                        key={related.id}
                        variant="ghost"
                        size="sm"
                        className="h-auto w-full justify-start p-2 text-left text-sm font-normal"
                        onClick={() => {
                          if (onRelatedQuestionClick) {
                            onRelatedQuestionClick(related.id);
                          }
                        }}
                      >
                        {related.question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
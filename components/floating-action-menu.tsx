"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, X, Calendar, Phone, MessageSquare, User, ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

export function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actions: ActionItem[] = [
    {
      id: "book",
      icon: <Calendar className="h-5 w-5" />,
      label: "Book a Class",
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => {
        console.log("Book a class clicked");
        setIsOpen(false);
      },
    },
    {
      id: "call",
      icon: <Phone className="h-5 w-5" />,
      label: "Call Us",
      color: "bg-green-500 hover:bg-green-600",
      onClick: () => {
        console.log("Call us clicked");
        setIsOpen(false);
      },
    },
    {
      id: "chat",
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Live Chat",
      color: "bg-purple-500 hover:bg-purple-600",
      onClick: () => {
        console.log("Live chat clicked");
        setIsOpen(false);
      },
    },
    {
      id: "account",
      icon: <User className="h-5 w-5" />,
      label: "My Account",
      color: "bg-amber-500 hover:bg-amber-600",
      onClick: () => {
        console.log("My account clicked");
        setIsOpen(false);
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-20 right-0"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={scrollToTop}
                    size="icon"
                    className="rounded-full bg-secondary shadow-lg hover:bg-secondary/80"
                  >
                    <ArrowUp className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Back to top</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          )}

          {isOpen &&
            actions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.05 * (actions.length - index),
                }}
                className="absolute right-0"
                style={{ bottom: `${(index + 1) * 70}px` }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={action.onClick}
                      size="icon"
                      className={`rounded-full shadow-lg text-white ${action.color}`}
                    >
                      {action.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{action.label}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
        </AnimatePresence>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className={`rounded-full shadow-lg transition-all duration-300 ${
            isOpen
              ? "bg-destructive hover:bg-destructive/90 rotate-45"
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </Button>
      </TooltipProvider>
    </div>
  );
}
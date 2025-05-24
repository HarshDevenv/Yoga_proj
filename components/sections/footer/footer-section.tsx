"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
    { name: "Schedule", href: "/schedule" },
    { name: "Instructors", href: "/instructors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Hatha Yoga", href: "/classes/hatha" },
    { name: "Vinyasa Flow", href: "/classes/vinyasa" },
    { name: "Power Yoga", href: "/classes/power" },
    { name: "Meditation", href: "/classes/meditation" },
    { name: "Private Sessions", href: "/private-sessions" },
    { name: "Workshops", href: "/workshops" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/yogastudio",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/yogastudio",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yogastudio",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/yogastudio",
      icon: Youtube,
    },
  ],
};

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand and Newsletter */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold">Yoga Studio</h2>
              <p className="mt-2 text-muted-foreground">
                Transform your life through the practice of yoga. Join our community and start your journey to wellness.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Subscribe to our newsletter</h3>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-semibold">Connect With Us</h3>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                123 Yoga Street, Wellness District
              </p>
              <p className="text-muted-foreground">City, State 12345</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">info@yogastudio.com</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yoga Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 
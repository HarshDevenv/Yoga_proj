import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                YogaFlex
              </span>
            </h2>
            <p className="text-muted-foreground">
              Transform your body and mind with our premium fitness and wellness programs designed for all levels.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#classes" className="text-muted-foreground transition-colors hover:text-foreground">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="#trainers" className="text-muted-foreground transition-colors hover:text-foreground">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    123 Fitness Street, Wellness City, 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">info@yogaflex.com</span>
                </li>
              </ul>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for fitness tips, promotions, and exclusive content.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-secondary/50" 
                required 
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} YogaFlex. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
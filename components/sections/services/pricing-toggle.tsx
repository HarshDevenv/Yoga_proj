"use client";

import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PricingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export function PricingToggle({ isYearly, setIsYearly }: PricingToggleProps) {
  return (
    <div className="relative flex items-center gap-2 rounded-full border bg-card p-1 px-3 shadow-sm">
      <Label
        htmlFor="pricing-toggle"
        className={`cursor-pointer py-2 text-sm font-medium transition-colors ${
          !isYearly ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Monthly
      </Label>
      
      <Switch
        id="pricing-toggle"
        checked={isYearly}
        onCheckedChange={setIsYearly}
        className="data-[state=checked]:bg-primary"
      />
      
      <Label
        htmlFor="pricing-toggle"
        className={`cursor-pointer py-2 text-sm font-medium transition-colors ${
          isYearly ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Yearly
      </Label>
      
      {isYearly && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -right-12 -top-3 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400"
        >
          Save 20%
        </motion.div>
      )}
    </div>
  );
}
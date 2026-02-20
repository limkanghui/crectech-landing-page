"use client";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  accentColor?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  accentColor,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hover ? { scale: 1.02, y: -2 } : undefined}
      className={`rounded-2xl p-6 bg-white border border-primary/10 shadow-sm ${className}`}
      style={
        accentColor
          ? {
              borderTopColor: accentColor,
              borderTopWidth: "3px",
              boxShadow: `0 4px 24px 0 ${accentColor}18`,
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}

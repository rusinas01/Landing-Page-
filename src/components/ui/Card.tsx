"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`rounded-xl border border-border bg-bg-surface p-6 md:p-8 ${
        hover ? "transition-all duration-200 hover:border-border-hover hover:bg-bg-surface-hover" : ""
      } ${className}`}
      variants={fadeInUp}
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

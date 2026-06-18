"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export function AnimatedTile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
      whileHover={{
        scale: 1.015,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <div className="relative group">
        {children}
        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-sm" />
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6"
    >
      {children}
    </motion.section>
  );
}
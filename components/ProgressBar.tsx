"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
        initial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.3,
        }}
      />
    </div>
  );
}
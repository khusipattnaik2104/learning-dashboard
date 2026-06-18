"use client";

import { motion } from "framer-motion";

function TileSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#12121a] border border-white/5 p-5 ${className || ""}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative z-10 flex flex-col gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/5" />
        <div className="w-3/4 h-4 rounded bg-white/5" />
        <div className="w-full h-2 rounded-full bg-white/5 mt-2" />
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
      {/* Hero skeleton */}
      <div className="col-span-full lg:col-span-2">
        <div className="relative overflow-hidden rounded-2xl bg-[#12121a] border border-white/5 p-6 md:p-8">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="w-1/2 h-8 rounded bg-white/5" />
            <div className="w-1/3 h-4 rounded bg-white/5" />
            <div className="flex gap-4 mt-4">
              <div className="w-32 h-16 rounded-xl bg-white/5" />
              <div className="w-32 h-16 rounded-xl bg-white/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Course skeletons */}
      <TileSkeleton />
      <TileSkeleton />
      <TileSkeleton />
      <TileSkeleton />

      {/* Activity skeleton */}
      <div className="col-span-full lg:col-span-1">
        <div className="relative overflow-hidden rounded-2xl bg-[#12121a] border border-white/5 p-5 md:p-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="w-20 h-5 rounded bg-white/5" />
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-2.5 h-2.5 rounded-sm bg-white/5" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
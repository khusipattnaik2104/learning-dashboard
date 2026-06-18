"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";
import { Search, BookOpen, Star } from "lucide-react";

const allCourses = [
  { id: 1, title: "Advanced React Patterns", progress: 75, rating: 4.8, image: "from-violet-500 to-purple-500" },
  { id: 2, title: "Next.js 14 - The Complete Guide", progress: 45, rating: 4.9, image: "from-blue-500 to-cyan-500" },
  { id: 3, title: "TypeScript Mastery", progress: 90, rating: 4.7, image: "from-amber-500 to-orange-500" },
  { id: 4, title: "Framer Motion Animations", progress: 30, rating: 4.6, image: "from-pink-500 to-rose-500" },
  { id: 5, title: "Supabase & PostgreSQL", progress: 60, rating: 4.8, image: "from-emerald-500 to-teal-500" },
  { id: 6, title: "Tailwind CSS Pro", progress: 100, rating: 4.5, image: "from-indigo-500 to-blue-500" },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        <div className="p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
            <p className="text-white/40 text-sm">Continue learning and track your progress</p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-96 pl-12 pr-4 py-3 rounded-xl bg-[#12121a] border border-white/5 text-white placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
          </motion.div>

          {/* Courses List */}
          <div className="space-y-4">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="rounded-2xl bg-[#12121a] border border-white/5 p-5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.image} flex items-center justify-center shrink-0`}>
                    <BookOpen size={24} className="text-white" />
                  </div>

                  {/* Course Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm md:text-base mb-1 truncate">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-3 text-white/40 text-xs">
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="flex items-center gap-3 min-w-[140px]">
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${course.image} rounded-full`}
                      />
                    </div>
                    <span className="text-white font-semibold text-sm min-w-[45px] text-right">
                      {course.progress}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <BookOpen size={48} className="text-white/20 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">No courses found</h3>
              <p className="text-white/40 text-sm">Try adjusting your search</p>
            </motion.div>
          )}
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
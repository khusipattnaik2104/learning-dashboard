"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  Target,
} from "lucide-react";

const stats = [
  {
    title: "Total Courses",
    value: "12",
    change: "+2 this month",
    icon: BookOpen,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Hours Learned",
    value: "48.5",
    change: "+12.3 this week",
    icon: Clock,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Certificates",
    value: "5",
    change: "2 in progress",
    icon: Award,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Avg. Score",
    value: "87%",
    change: "+5% improvement",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
  },
];

const weeklyActivity = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 2.2 },
  { day: "Sat", hours: 5.5 },
  { day: "Sun", hours: 3.8 },
];

const recentAchievements = [
  { title: "React Master", date: "2 days ago", icon: "🏆" },
  { title: "7-Day Streak", date: "1 week ago", icon: "🔥" },
  { title: "Fast Learner", date: "2 weeks ago", icon: "⚡" },
];

export default function AnalyticsPage() {
  const maxHours = Math.max(...weeklyActivity.map((a) => a.hours));

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
          >
            <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
            <p className="text-white/40 text-sm mb-8">
              Track your learning progress and performance
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-[#12121a] border border-white/5 p-6 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-white/40 text-sm mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-emerald-400">{stat.change}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl bg-[#12121a] border border-white/5 p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">
                  Weekly Activity
                </h2>
                <p className="text-white/40 text-sm">
                  Hours spent learning this week
                </p>
              </div>
              <Calendar size={20} className="text-white/40" />
            </div>
            <div className="flex items-end justify-between gap-2 h-48">
              {weeklyActivity.map((activity) => (
                <div key={activity.day} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(activity.hours / maxHours) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t-lg min-h-[8px]"
                  />
                  <span className="text-xs text-white/40">{activity.day}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Goals and Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl bg-[#12121a] border border-white/5 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target size={20} className="text-violet-400" />
                <h2 className="text-xl font-semibold text-white">
                  Weekly Goal
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Learning Hours</span>
                    <span className="text-white font-semibold">18.5 / 20 hrs</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92.5%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Courses Completed</span>
                    <span className="text-white font-semibold">2 / 3</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "66.6%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl bg-[#12121a] border border-white/5 p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-6">
                Recent Achievements
              </h2>
              <div className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm">
                        {achievement.title}
                      </h3>
                      <p className="text-white/40 text-xs">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
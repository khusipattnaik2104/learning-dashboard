"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  ThumbsUp,
  Share2,
  BookOpen,
  Award,
  TrendingUp,
  Plus,
} from "lucide-react";

const communityStats = [
  { label: "Active Learners", value: "2,847", icon: Users },
  { label: "Discussions", value: "1,234", icon: MessageSquare },
  { label: "Study Groups", value: "56", icon: BookOpen },
  { label: "Top Contributors", value: "128", icon: Award },
];

const discussions = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "SC",
    title: "Best practices for React Server Components?",
    replies: 24,
    likes: 45,
    time: "2 hours ago",
    tags: ["React", "Next.js"],
  },
  {
    id: 2,
    author: "Alex Kumar",
    avatar: "AK",
    title: "How to optimize Supabase queries for large datasets?",
    replies: 18,
    likes: 32,
    time: "5 hours ago",
    tags: ["Supabase", "Performance"],
  },
  {
    id: 3,
    author: "Priya Sharma",
    avatar: "PS",
    title: "Framer Motion vs CSS animations - which is better?",
    replies: 42,
    likes: 67,
    time: "1 day ago",
    tags: ["Framer Motion", "CSS"],
  },
  {
    id: 4,
    author: "Rahul Verma",
    avatar: "RV",
    title: "Tips for acing technical interviews at FAANG",
    replies: 89,
    likes: 156,
    time: "2 days ago",
    tags: ["Career", "Interviews"],
  },
];

const topContributors = [
  { name: "Sarah Chen", points: 2450, badge: "🥇" },
  { name: "Alex Kumar", points: 2100, badge: "🥈" },
  { name: "Priya Sharma", points: 1850, badge: "🥉" },
  { name: "Rahul Verma", points: 1620, badge: "⭐" },
  { name: "Neha Singh", points: 1480, badge: "⭐" },
];

const studyGroups = [
  { name: "React Advanced Patterns", members: 45, active: true },
  { name: "System Design Prep", members: 32, active: true },
  { name: "TypeScript Masters", members: 28, active: false },
  { name: "DSA Daily Practice", members: 67, active: true },
];

export default function CommunityPage() {
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
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold text-white">Community</h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium"
              >
                <Plus size={18} />
                New Post
              </motion.button>
            </div>
            <p className="text-white/40 text-sm">
              Connect, learn, and grow with fellow learners
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-[#12121a] border border-white/5 p-4"
                >
                  <Icon size={20} className="text-violet-400 mb-2" />
                  <p className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Discussions */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  Recent Discussions
                </h2>
                <div className="space-y-3">
                  {discussions.map((discussion, index) => (
                    <motion.div
                      key={discussion.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="rounded-2xl bg-[#12121a] border border-white/5 p-5 hover:border-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
                          <span className="text-white text-sm font-semibold">
                            {discussion.avatar}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium text-sm mb-1 truncate">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-white/60 text-xs">
                              {discussion.author}
                            </span>
                            <span className="text-white/30 text-xs">•</span>
                            <span className="text-white/40 text-xs">
                              {discussion.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            {discussion.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 rounded-lg bg-violet-500/10 text-violet-400 text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-white/40">
                            <div className="flex items-center gap-1">
                              <MessageSquare size={14} />
                              <span className="text-xs">{discussion.replies}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp size={14} />
                              <span className="text-xs">{discussion.likes}</span>
                            </div>
                            <button className="flex items-center gap-1 hover:text-white/60 transition-colors">
                              <Share2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Contributors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl bg-[#12121a] border border-white/5 p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={18} className="text-amber-400" />
                  <h3 className="text-white font-semibold text-sm">
                    Top Contributors
                  </h3>
                </div>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div
                      key={contributor.name}
                      className="flex items-center gap-3"
                    >
                      <span className="text-lg">{contributor.badge}</span>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">
                          {contributor.name}
                        </p>
                        <p className="text-white/40 text-xs">
                          {contributor.points} points
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Study Groups */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-2xl bg-[#12121a] border border-white/5 p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={18} className="text-blue-400" />
                  <h3 className="text-white font-semibold text-sm">
                    Study Groups
                  </h3>
                </div>
                <div className="space-y-3">
                  {studyGroups.map((group, index) => (
                    <div
                      key={group.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium mb-1">
                          {group.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <Users size={12} className="text-white/40" />
                          <span className="text-white/40 text-xs">
                            {group.members} members
                          </span>
                        </div>
                      </div>
                      {group.active && (
                        <span className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs">
                          Active
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
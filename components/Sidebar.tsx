"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "courses", label: "My Courses", icon: BookOpen, href: "/courses" },
  { id: "analytics", label: "Analytics", icon: BarChart3, href: "/analytics" },
  { id: "community", label: "Community", icon: Users, href: "/community" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkWidth = () => {
      const w = window.innerWidth;
      if (w >= 768 && w < 1024) setCollapsed(true);
      else if (w >= 1024) setCollapsed(false);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <nav
      className={`relative flex flex-col bg-[#0a0a0f] border-r border-white/5 transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-6 border-b border-white/5 min-h-[68px]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">N</span>
        </div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-semibold text-sm tracking-tight"
          >
            NextLearn
          </motion.span>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-1 px-3 py-4 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 shrink-0">
                <Icon size={20} />
              </span>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative z-10"
                >
                  {item.label}
                </motion.span>
              )}
            </Link>
          );
        })}
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden lg:flex items-center justify-center py-3 border-t border-white/5 text-white/30 hover:text-white/60 transition-colors"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </nav>
  );
}
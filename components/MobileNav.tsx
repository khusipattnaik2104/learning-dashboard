"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "/courses" },
  { id: "analytics", label: "Analytics", icon: BarChart3, href: "/analytics" },
  { id: "community", label: "Community", icon: Users, href: "/community" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-white/5">
      <div className="flex items-center justify-around w-full py-2 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex flex-col items-center gap-1 py-1 px-3"
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActiveNav"
                  className="absolute inset-0 bg-white/5 rounded-xl border border-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] leading-tight ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
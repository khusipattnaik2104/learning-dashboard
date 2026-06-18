"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

const settingsSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Profile Settings", desc: "Update your personal information" },
      { icon: Bell, label: "Notifications", desc: "Manage email and push notifications" },
      { icon: Shield, label: "Privacy & Security", desc: "Password, 2FA, and data settings" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Palette, label: "Appearance", desc: "Theme, fonts, and display options" },
      { icon: Globe, label: "Language", desc: "English (US)" },
      { icon: HelpCircle, label: "Help & Support", desc: "FAQs, contact us, and feedback" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        <div className="p-6 md:p-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-white/40 text-sm mb-8">
              Manage your account preferences and settings
            </p>
          </motion.div>

          <div className="space-y-8">
            {settingsSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <h2 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <div className="rounded-2xl bg-[#12121a] border border-white/5 overflow-hidden">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                        className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-white/60" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-white font-medium text-sm">
                            {item.label}
                          </h3>
                          <p className="text-white/40 text-xs">{item.desc}</p>
                        </div>
                        <ChevronRight size={18} className="text-white/30" />
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {/* Logout Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                  <LogOut size={20} className="text-red-400" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-red-400 font-medium text-sm">Log Out</h3>
                  <p className="text-red-400/60 text-xs">Sign out of your account</p>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
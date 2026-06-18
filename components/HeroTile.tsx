"use client";

import { Flame, GraduationCap } from "lucide-react";

export default function HeroTile() {
  return (
    <article className="relative col-span-full lg:col-span-2 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#12121a] to-[#0d0d14] border border-white/5 p-6 md:p-8">
    
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Welcome back
            </h1>
            <p className="text-white/40 text-sm">
              Ready to continue your learning journey?
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
            <Flame size={16} className="text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">7-day streak</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">
            <GraduationCap size={18} className="text-violet-400" />
            <div>
              <p className="text-white/60 text-xs">Courses in progress</p>
              <p className="text-white font-semibold text-lg">4</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600" />
            <div>
              <p className="text-white/60 text-xs">Completed</p>
              <p className="text-white font-semibold text-lg">12</p>
            </div>
          </div>
          <div className="sm:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
            <Flame size={16} className="text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">7-day streak</span>
          </div>
        </div>
      </div>
    </article>
  );
}
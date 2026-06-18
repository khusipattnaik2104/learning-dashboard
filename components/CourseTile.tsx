"use client";

import {
  Code2,
  Palette,
  Database,
  Globe,
  BookOpen,
  Brain,
  type LucideIcon,
} from "lucide-react";
import ProgressBar from "./ProgressBar";
import type { Course } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Database,
  Globe,
  BookOpen,
  Brain,
};

export default function CourseTile({ course }: { course: Course }) {
  const IconComponent = iconMap[course.icon_name] || BookOpen;

  return (
    <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12121a] to-[#0d0d14] border border-white/5 p-5 group">
      {/* Abstract gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-fuchsia-500/20 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
          <IconComponent size={20} className="text-violet-400" />
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-sm leading-tight">
          {course.title}
        </h3>

        {/* Progress */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/40">Progress</span>
            <span className="text-white/60 font-medium">{course.progress}%</span>
          </div>
          <ProgressBar value={course.progress} />
        </div>
      </div>
    </article>
  );
}
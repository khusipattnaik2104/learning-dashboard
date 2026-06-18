"use client";

import BentoGrid, { AnimatedTile } from "@/components/BentoGrid";
import HeroTile from "@/components/HeroTile";
import CourseTile from "@/components/CourseTile";
import ActivityTile from "@/components/ActivityTile";
import type { Course } from "@/lib/types";

interface DashboardContentProps {
  courses: Course[];
}

export default function DashboardContent({ courses }: DashboardContentProps) {
  return (
    <BentoGrid>
      <AnimatedTile className="col-span-full lg:col-span-2">
        <HeroTile />
      </AnimatedTile>

      {courses.length > 0 ? (
        courses.map((course) => (
          <AnimatedTile key={course.id}>
            <CourseTile course={course} />
          </AnimatedTile>
        ))
      ) : (
        <AnimatedTile className="col-span-full">
          <div className="rounded-2xl bg-[#12121a] border border-white/5 p-6 text-center">
            <p className="text-white/40 text-sm">
              No courses available. Make sure your Supabase database is set up with a `courses` table.
            </p>
          </div>
        </AnimatedTile>
      )}

      <AnimatedTile className="col-span-full lg:col-span-1">
        <ActivityTile />
      </AnimatedTile>
    </BentoGrid>
  );
}
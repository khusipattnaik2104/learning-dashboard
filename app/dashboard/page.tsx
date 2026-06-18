import { Suspense } from "react";
import { createSupabaseServerClient } from "@/lib/supabase";
import type { Course } from "@/lib/types";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import DashboardSkeleton from "@/components/SkeletonLoader";
import DashboardContent from "../DashboardContent";

async function getCourses(): Promise<Course[]> {
  try {
    const supabase = await createSupabaseServerClient();
    if (!supabase) {
      console.error("Supabase client not initialized - missing environment variables");
      return [];
    }

    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Supabase error:", error.message);
      return [];
    }

    return (data as Course[]) || [];
  } catch (err) {
    console.error("Failed to fetch courses:", err);
    return [];
  }
}

export default async function DashboardPage() {
  const courses = await getCourses();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardContent courses={courses} />
        </Suspense>
      </main>
      <MobileNav />
    </div>
  );
}
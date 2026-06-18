import DashboardSkeleton from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="flex h-screen overflow-hidden">
      <nav className="hidden md:flex w-[240px] bg-[#0a0a0f] border-r border-white/5" />
      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        <DashboardSkeleton />
      </main>
      {/* Mobile nav placeholder */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-16 bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-white/5" />
    </div>
  );
}
"use client";

const colorMap: Record<number, string> = {
  0: "bg-white/5",
  1: "bg-violet-500/30",
  2: "bg-violet-500/50",
  3: "bg-violet-500/80",
};

// Deterministic pattern based on indices — no Math.random()
function getActivityLevel(weekIndex: number, dayIndex: number): number {
  const val = (weekIndex * 7 + dayIndex * 3 + weekIndex * dayIndex) % 4;
  return val;
}

export default function ActivityTile() {
  const weeks = Array.from({ length: 20 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => getActivityLevel(w, d))
  );

  return (
    <article className="relative col-span-full lg:col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#12121a] to-[#0d0d14] border border-white/5 p-5 md:p-6">
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="text-white font-semibold text-sm">Activity</h3>

        <div className="flex gap-1">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day, di) => (
                <div
                  key={`${wi}-${di}`}
                  className={`w-2.5 h-2.5 rounded-sm ${colorMap[day]} transition-colors duration-300`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-white/30">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
          <div className="w-2.5 h-2.5 rounded-sm bg-violet-500/30" />
          <div className="w-2.5 h-2.5 rounded-sm bg-violet-500/50" />
          <div className="w-2.5 h-2.5 rounded-sm bg-violet-500/80" />
          <span>More</span>
        </div>
      </div>
    </article>
  );
}
"use client";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  void _error;
  return (
    <div className="flex h-screen items-center justify-center bg-[#050508]">
      <div className="max-w-md text-center px-6">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">
          Something went wrong
        </h2>
        <p className="text-white/40 text-sm mb-6">
          We could not load your dashboard data. Please check your Supabase connection and try again.
        </p>
        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
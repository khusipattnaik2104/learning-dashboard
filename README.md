# NextLearn - Next-Gen Learning Dashboard

A futuristic, animated Student Dashboard built with Next.js (App Router), Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Architecture

### Server Components vs Client Components

- **Server Components:** `app/page.tsx`, `app/courses/page.tsx` — Fetch course data from Supabase on the server and pass it down
- **Client Components:** All tiles (HeroTile, CourseTile, ActivityTile), Sidebar, MobileNav, ProgressBar, BentoGrid, and SkeletonLoader use `"use client"` because they rely on Framer Motion animations and React state

### Data Flow

1. Next.js Server Components call Supabase using `@supabase/ssr` (`createSupabaseServerClient`)
2. Course data is fetched server-side and passed as props to client components
3. `DashboardContent` / `CoursesContent` renders the Bento grid with staggered entrance animations via Framer Motion
4. Loading states use `loading.tsx` with skeleton loaders (shimmer animation)
5. Error handling is done via `error.tsx` boundary with a retry button

### Routing

| Route | Page | Description |
|---|---|---|
| `/` | Dashboard | Bento grid with Hero tile, courses, activity graph |
| `/courses` | My Courses | Full-width course grid |
| `/analytics` | Analytics | Stats cards |
| `/community` | Community | Member directory |
| `/settings` | Settings | Account preferences |

Navigation uses `next/link` with `usePathname` for active state detection. Framer Motion `layoutId` animates the active indicator.

---

## ✅ Step-by-Step: How to Connect Supabase

### Step 1: Create a Supabase Project

1. Go to **[https://supabase.com](https://supabase.com)** and sign up / log in
2. Click **"New project"**
3. Enter a name (e.g. `nextlearn-dashboard`)
4. Set a secure database password (save it somewhere)
5. Choose a region close to you
6. Click **"Create new project"** (takes ~1-2 minutes)

### Step 2: Run the Setup SQL

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Open the file `SUPABASE_SETUP.sql` from this project
4. Copy the entire content and paste it into the SQL Editor
5. Click **"Run"** — this will:
   - Create the `courses` table
   - Enable Row Level Security
   - Allow public read access
   - Insert 5 sample courses

### Step 3: Get Your API Credentials

1. In your Supabase dashboard, go to **Project Settings** → **API** (left sidebar)
2. Under **"Project API keys"** you'll find:
   - **`Project URL`** — looks like `https://xxxxxxxxxxxxxxxxxxxx.supabase.co`
   - **`anon public`** key — a long base64 string starting with `eyJ...`

### Step 4: Create `.env.local`

1. In the project root (`nextjssite/`), copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(On Windows: copy the file manually and rename to `.env.local`)*

2. Open `.env.local` and paste your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
   ```

### Step 5: Run the App

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — your courses will load from Supabase!

---

## Animations

- **Staggered page load:** Bento tiles fade in and translate upward sequentially using Framer Motion's `staggerChildren`
- **Card hover:** Tiles scale up 1.5% with spring physics (`type: "spring", stiffness: 300, damping: 20`)
- **Border glow:** A subtle gradient border glow appears on hover using `opacity` transitions (zero layout shifts)
- **Sidebar navigation:** Active nav item uses `layoutId` for smooth snap animation
- **Progress bars:** Animate from 0% to the fetched value on load
- **Skeleton loaders:** Shimmer effect using CSS `translate` animated across the skeleton

## Responsive Design

- **Desktop (>1024px):** Full Bento grid (3 columns) with sidebar visible
- **Tablet (768-1024px):** Sidebar auto-collapses to icons-only (72px). Grid adjusts to 2 columns
- **Mobile (<768px):** Sidebar hidden, bottom navigation bar appears. Grid stacks to single column
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  // During static generation (build time), cookies() is not available
  // We handle this gracefully by creating a client without cookie handlers
  try {
    const cookieStore = await cookies().catch(() => null);

    if (!cookieStore) {
      // Build time or no request context — return basic client
      return createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
          getAll() { return []; },
          setAll() {},
        },
      });
    }

    return createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    });
  } catch {
    // Absolute fallback if everything fails
    return createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() { return []; },
        setAll() {},
      },
    });
  }
}
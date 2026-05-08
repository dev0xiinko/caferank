import { createBrowserClient } from "@supabase/ssr";

import { requireSupabaseEnv } from "@/lib/supabase/env";
import type { Database } from "@/types/database";

export function createClient() {
  const env = requireSupabaseEnv();

  return createBrowserClient<Database>(
    env.url,
    env.publishableKey,
  );
}

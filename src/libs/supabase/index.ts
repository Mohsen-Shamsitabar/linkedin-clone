"use server";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types.ts";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const supabaseAnonPublicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_PUBLIC_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonPublicKey);

export { supabase };

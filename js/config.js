const CONFIG = {
  SUPABASE_URL: "https://wwznqqpycxopmvzlbseo.supabase.co",
  SUPABASE_ANON_KEY: "Sb_publishable_9AJk-4e4H0Tus3_zzquPew_OyGhrCBE"
};

const supabaseClient = window.supabase ? window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY) : null;

import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("company").select();
  return {
    companies: data ?? [],
  };
}
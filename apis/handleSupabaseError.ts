import { PostgrestResponse } from "@supabase/supabase-js";

const handleSupabaseError = async <P extends any[], R> (process: (...rest: P) => Promise<PostgrestResponse<R>>, ...rest: P) => {
  const { data, error } = await process(...rest);
  
  if (error) {
    throw error;
  }
  return data;
}

export default handleSupabaseError;

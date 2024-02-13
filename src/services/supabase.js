import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dqyghhnujehejlpeggvg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxeWdoaG51amVoZWpscGVnZ3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MjAyNjIsImV4cCI6MjAyMzI5NjI2Mn0.VBAoOKnJf_cTw12adBe11kdWDRpUM8cMHZfhXWS3cKQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

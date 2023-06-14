import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jdoltvgozavvnhbcxsfx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkb2x0dmdvemF2dm5oYmN4c2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2MzQzNDEsImV4cCI6MTk5NzIxMDM0MX0.IDDjVhVY_XWQlCFKSnlNBaNm - LcxEGc6YbmmzDzH26k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

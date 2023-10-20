import { createClient } from "@supabase/supabase-js";
import { Database } from "./database";

export const supabase = createClient<Database>(
  "https://vugnrsaphmsezwbolrao.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1Z25yc2FwaG1zZXp3Ym9scmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMyMzUwMTksImV4cCI6MTk3ODgxMTAxOX0.oJ6Lq_h6SCLKiE6blDWnMNf5wVNZjdtD5jQdqWeFkLc"
);
//sbp_6485b37142278f44e6adf1b3736b163d0cc1f197

import { paginate } from "../../../lib/pagination";
import { supabase } from "../../../lib/supabase";
import { Database } from "../../../lib/supabase/database";
import { NestedDefects } from "../../../types/defects";

export const fetchDefects = async (page: number) => {
  const { from, to } = paginate(page, 10);
  const { data, error } = await supabase
    .from("defects")
    .select("*, products(*), places(*), packaging_type(*), defects_type(*)")
    .order("date", { ascending: true })
    .range(from, to)
    .returns<Array<NestedDefects>>();

  if (error) throw new Error("Something went wrong");
  return data;
};

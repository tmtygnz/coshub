import { paginate } from "../../../lib/pagination";
import { supabase } from "../../../lib/supabase";

export const fetchDefects = async (page: number) => {
  const { from, to } = paginate(page, 10);
  const { data, error } = await supabase
    .from("defects")
    .select("*, products(*), places(*), packaging_type(*), defects_type(*)")
    .order("date", { ascending: true })
    .range(from, to);
  if (error) throw new Error("Something went wrong");
  return data;
};

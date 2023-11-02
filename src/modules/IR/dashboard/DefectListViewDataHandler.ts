import { paginate } from "../../../lib/pagination";
import { supabase } from "../../../lib/supabase";
import { stringIsNullOrWhitespace } from "../../../lib/usefull";
import { NestedDefects } from "../../../types/defects";

export const fetchDefects = async (page: number, searchQuery: string) => {
  const { from, to } = paginate(page, 10);
  const query = supabase
    .from("defects")
    .select("*, product!inner(*), packaging!inner(*), places(*)", {
      count: "exact",
    })
    .order("date", { ascending: false })
    .range(from, to);

  const { data, count, error } = await (!stringIsNullOrWhitespace(searchQuery)
    ? query.textSearch("product.productName", searchQuery, {
        type: "websearch",
      })
    : query
  ).returns<Array<NestedDefects>>();

  console.log(data);

  if (error) throw new Error("something went wrong");
  return { data, count };
};

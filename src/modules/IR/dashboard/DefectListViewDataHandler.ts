import { paginate } from "../../../lib/pagination";
import { supabase } from "../../../lib/supabase";
import { stringIsNullOrWhitespace } from "../../../lib/usefull";
import { NestedDefects } from "../../../types/defects";
import { match } from "ts-pattern";

export const fetchDefects = async (
  page: number,
  searchQuery: string,
  searchBy: number
) => {
  const { from, to } = paginate(page, 10);
  const query = supabase
    .from("defects")
    .select("*, product!inner(*), packaging!inner(*), places(*)", {
      count: "exact",
    })
    .order("date", { ascending: false })
    .range(from, to);
  const searchWith = match(searchBy)
    .with(0, () => "product.productName")
    .with(1, () => "defectDescription")
    .with(2, () => "packaging.name")
    .with(3, () => "encodedBy")
    .otherwise(() => "product.productName");
  console.log(searchBy);
  console.log(searchWith);
  const { data, count, error } = await (!stringIsNullOrWhitespace(searchQuery)
    ? query.textSearch(searchWith, searchQuery, {
        type: "websearch",
      })
    : query
  ).returns<Array<NestedDefects>>();

  console.log(data);

  if (error) throw new Error("something went wrong");
  return { data, count };
};

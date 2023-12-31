import { paginate } from "../../../lib/pagination";
import { supabase } from "../../../lib/supabase";
import { stringIsNullOrWhitespace } from "../../../lib/useful";
import { ReadableDefects } from "../../../types/defects";
import { match } from "ts-pattern";

export const fetchDefects = async (
	page: number,
	searchQuery: string,
	searchBy: number
): Promise<{ data: Array<ReadableDefects>; count: number | null }> => {
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
	const { data, count, error } = await (!stringIsNullOrWhitespace(searchQuery)
		? query.textSearch(searchWith, searchQuery, {
				type: "websearch",
		  })
		: query
	).returns<Array<ReadableDefects>>();

	if (error)
		throw new Error(
			`Something went wrong | ${error.message} at | ${error.code}`
		);
	return { data, count };
};

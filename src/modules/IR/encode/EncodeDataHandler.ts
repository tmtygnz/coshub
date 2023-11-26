import { supabase } from "../../../lib/supabase";
import {
	DefectType,
	PackagingType,
	Places,
	Products,
} from "../../../types/defects";

const fetchFromSupabase = async <T>(from: string): Promise<Array<T>> => {
	const { data, error } = await supabase.from(from).select("*");
	if (error) throw new Error(`Error ${error.message}`);
	return data;
};

export const fetchNecessaryData = async () => {
	const [defPrebTp, packaging, places, products] = await Promise.all([
		fetchFromSupabase<DefectType>("defects_type"),
		fetchFromSupabase<PackagingType>("packaging_type"),
		fetchFromSupabase<Places>("places"),
		fetchFromSupabase<Products>("products"),
	]);

	return {
		defectTypes: defPrebTp,
		packaging,
		places,
		products,
	};
};

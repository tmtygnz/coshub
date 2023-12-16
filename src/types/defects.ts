import { Database, Tables } from "../lib/supabase/database";
import { z } from "zod";
import { stringIsNullOrWhitespace } from "../lib/useful";

export type Defects = z.infer<typeof defectSchema>;
export type PackagingType =
	Database["public"]["Tables"]["packaging_type"]["Row"];
export type DefectType = Tables<"defects_type">;
export type Places = Tables<"places">;
export type Products = Tables<"products">;
export type ReadableDefects = Defects & {
	defPrebTp: DefectType;
	packaging: PackagingType;
	places: Places;
	product: Products;
};

// I really hate supabase's typescript types

export const defectSchema = z.object({
	app_version: z.number({ required_error: "App version required" }),
	batch: z.string(),
	date: z.string({ required_error: "Defect date is missing" }),
	dateEncoded: z.string(),
	defectDescription: z
		.string()
		.refine((value) => !stringIsNullOrWhitespace(value), {
			message: "Defect description missing!",
		}),
	defPrebTp: z
		.number()
		.nullish()
		.refine((value) => value != 0, {
			message: "Invalid defect type value. Please check and correct.",
		}),
	encodedBy: z.string().refine((value) => !stringIsNullOrWhitespace(value), {
		message: "[LGI] Encoded by is missing",
	}),
	id: z.number().optional(),
	isDev: z.boolean({ required_error: "[LGI] Is dev is missing" }),
	packaging: z
		.number({ required_error: "Packaging Missing" })
		.refine((value) => value != 0, {
			message: "Invalid packaging value. Please check and correct.",
		}),
	placeid: z
		.number({ required_error: "Area Missing" })
		.refine((value) => value != 0, {
			message: "Invalid place or area value. Please check and correct.",
		}),
	product: z
		.number({ required_error: "Product Missing" })
		.refine((value) => value != 0, {
			message: "Invalid product value. Please check and correct.",
		}),
	quantity: z
		.number({ required_error: "[LGI] Quantity value is missing" })
		.refine((value) => value != 0, {
			message: "Hola, quantity shoudn't be 0.",
		}),
});

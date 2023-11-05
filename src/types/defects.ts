import { Database } from "../lib/supabase/database";

export type Defects = Database["public"]["Tables"]["defects"]["Row"];
export type PackagingType =
  Database["public"]["Tables"]["packaging_type"]["Row"];
export type DefectType = Database["public"]["Tables"]["defects_type"]["Row"];
export type Places = Database["public"]["Tables"]["places"]["Row"];
export type Products = Database["public"]["Tables"]["products"]["Row"];
export type NestedDefects = Defects & {
  defPrebTp: DefectType;
  packaging: PackagingType;
  places: Places;
  product: Products;
};
// I really hate supabase's typescript types

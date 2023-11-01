import { Database } from "../lib/supabase/database";

type Defects = Database["public"]["Tables"]["defects"]["Row"];
type DefectType = Database["public"]["Tables"]["defects_type"]["Row"];
type PackagingType = Database["public"]["Tables"]["packaging_type"]["Row"];
type Places = Database["public"]["Tables"]["places"]["Row"];
type Products = Database["public"]["Tables"]["products"]["Row"];
export type NestedDefects = Defects & {
  defects_type: DefectType;
  packaging_type: PackagingType;
  places: Places;
  products: Products;
};
// I really hate supabase's typescript types
//TODO: Rename supabase columns e.g. packaging -> packacingRefId. This change will make `NestedDefect` less confusing. This will only be implemented after IR is finsihed.

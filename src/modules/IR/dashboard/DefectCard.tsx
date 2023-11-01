import { Database } from "../../../lib/supabase/database";
import { NestedDefects } from "../../../types/defects";

export const DefectCard = ({ data }: { data: NestedDefects }) => {
  return (
    <div className="border-b py-4 px-3 grid grid-cols-6 grid-rows-1 p-2">
      {data.packaging_type.name}
    </div>
  );
};

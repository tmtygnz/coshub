import { Database } from "../../../lib/supabase/database";

export const DefectCard = ({
  data,
}: {
  data: Database["public"]["Tables"]["defects"]["Row"];
}) => {
  return <div className="border-b py-4 px-3">{data.id}</div>;
};

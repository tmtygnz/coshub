import { useEffect, useState } from "react";
import { Database } from "../../../lib/supabase/database";
import { fetchDefects } from "./DefectListViewDataHandler";
import { DefectCard } from "./DefectCard";

export const DefectListView = () => {
  const [defects, setDefects] = useState<
    Array<Database["public"]["Tables"]["defects"]["Row"]>
  >([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDefects(page);
      setDefects(result);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      {defects.map((data) => (
        <DefectCard data={data} />
      ))}
    </div>
  );
};

import { useEffect, useState } from "react";
import { fetchDefects } from "./DefectListViewDataHandler";
import { DefectCard } from "./DefectCard";
import { NestedDefects } from "../../../types/defects";

export const DefectListView = () => {
  const [defects, setDefects] = useState<Array<NestedDefects>>([]);
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

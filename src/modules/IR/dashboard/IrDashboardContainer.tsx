import { useEffect, useState } from "react";
import { ChartData } from "../../../components/BarChart";
import { getNecessaryData } from "./ChartDataHandler";
import { ChartComponent } from "./ChartComponent";
import { Calendar, ListChecks } from "lucide-react";
import { DefectListView } from "./DefectsListView";

export const IrDashboardContainer = () => {
  const [graphData, setGraphData] = useState<{
    sumDef: {
      summarizedDefects: ChartData[];
      average: number;
      percentageDifference: number;
    };
    sumEnc: {
      summarizedEncodes: ChartData[];
      average: number;
      percentageDifference: number;
    };
  }>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNecessaryData();
      setGraphData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="h-full w-full px-5 py-5 overflow-auto">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="h-3/5 flex gap-2 mt-5">
        {graphData && (
          <>
            <ChartComponent
              data={graphData.sumDef.summarizedDefects}
              title={
                <>
                  <Calendar size={16} />
                  <h2 className="font-bold text-sm">Defects Encoded</h2>
                </>
              }
            />
            <ChartComponent
              data={graphData.sumEnc.summarizedEncodes}
              title={
                <>
                  <ListChecks size={16} />
                  <h2 className="font-bold text-sm">Encode Throughput</h2>
                </>
              }
            />
          </>
        )}
      </div>
      <div className="grid grid-cols-6 grid-rows-1 p-2 bg-neutral-300 rounded-md font-bold text-neutral-600 mt-3">
        <span className="col-span-2">Product with Defect</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Description</span>
        <span>Encoded by</span>
      </div>
      <DefectListView />
    </div>
  );
};

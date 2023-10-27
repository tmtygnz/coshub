import { useEffect, useState } from "react";
import { getNecessaryData } from "./ChartDataHandler";
import { BarChartData } from "../../../components/BarChart";
import { ChartContainer } from "./ChartContainter";
export const IRDashboard = () => {
  const [data, setData] = useState<{
    sumDef: {
      summarizedDefects: BarChartData[];
      average: number;
      percentageDifference: number;
    };
    sumEnc: {
      summarizedEncodes: BarChartData[];
      average: number;
      percentageDifference: number;
    };
  }>();
  useEffect(() => {
    const doAsync = async () => {
      const data = await getNecessaryData();
      setData(data);
    };
    doAsync();
  }, []);
  return (
    <div className="flex h-full w-full flex-col">
      <div className="px-5 py-5 font-medium border-b">Dashboard</div>
      <div className="w-full grid xl:grid-cols-2 xl:grid-rows-1 md:grid-cols-1 md:grid-rows-2 gap-5 xl:p-5 md:p-2">
        <ChartContainer data={data} />
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { ChartData } from "../../../components/BarChart";
import { getNecessaryData } from "./ChartDataHandler";
import { ChartComponent } from "./ChartComponent";

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
    <div className="h-full w-full px-5 py-5">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <ChartComponent data={graphData?.sumDef.summarizedDefects!}/>
    </div>
  );
};

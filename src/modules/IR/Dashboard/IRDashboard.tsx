import React, { useEffect, useState } from "react";
import { getNecessaryData } from "./ChartDataHandler";
import { ChartHandler } from "./ChartHandler";
import { BarChartData } from "../../../components/BarChart";
import { BarChartIcon, CalendarIcon } from "lucide-react";
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
        <div className="h-full w-full bg-neutral-50 border rounded-xl p-5 flex gap-3 flex-col ">
          <div className="flex gap-2 items-center text-base font-semibold ">
            <BarChartIcon />
            <span>Defects Encode Throughput</span>
          </div>
          <hr className="h-px my-2" />
          {data?.sumEnc.summarizedEncodes && (
            <ChartHandler
              data={data.sumEnc.summarizedEncodes}
              meaning="Encode Count Last Month"
            />
          )}
        </div>
        <div className="h-full w-full bg-neutral-50 border rounded-xl p-5 flex gap-3 flex-col ">
          <div className="flex gap-2 items-center text-base font-semibold ">
            <CalendarIcon />
            <span>Defects Weekly Average</span>
          </div>
          <hr className="h-px my-2" />
          {data?.sumDef.summarizedDefects && (
            <ChartHandler
              data={data.sumDef.summarizedDefects}
              meaning="Encode Count Last Month"
            />
          )}
        </div>
      </div>
    </div>
  );
};

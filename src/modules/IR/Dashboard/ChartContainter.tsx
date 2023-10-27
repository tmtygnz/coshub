import { BarChartIcon, CalendarIcon } from "lucide-react";
import React from "react";
import { BarChartData } from "../../../components/BarChart";
import { ChartHandler } from "./ChartHandler";

export const ChartContainer = ({
  data,
}: {
  data?: {
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
  };
}) => {
  return (
    <>
      <div className="h-full w-full bg-neutral-50 border rounded-xl p-5 flex gap-1 flex-col ">
        <div className="flex gap-2 items-center text-base font-semibold ">
          <BarChartIcon size={16} />
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
      <div className="h-full w-full bg-neutral-50 border rounded-xl p-5 flex gap-1 flex-col ">
        <div className="flex gap-2 items-center text-base font-semibold ">
          <CalendarIcon size={16} />
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
    </>
  );
};

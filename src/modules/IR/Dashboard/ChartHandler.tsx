import React, { useState } from "react";
import { BarChartData, BarChartResponsive } from "../../../components/BarChart";

export const ChartHandler = ({
  data,
  meaning,
}: {
  data: Array<BarChartData>;
  meaning: string;
}) => {
  const [hoverValue, setHoverValue] = useState<number>(0);
  return (
    <>
      <div className="h-80 mb-5">
        <BarChartResponsive
          data={data}
          onHover={(data) => setHoverValue(data.value)}
        />
      </div>
      <div className="flex w-full justify-between">
        <p className="font-bold">{hoverValue}</p>
        <p className="text-blue-500 font-bold">{meaning}</p>
      </div>
    </>
  );
};

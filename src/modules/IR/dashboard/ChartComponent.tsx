import React from "react";
import { ChartData } from "../../../components/BarChart";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";

export const ChartComponent = ({
  data,
  title,
}: {
  data: Array<ChartData>;
  title: React.ReactNode;
}) => {
  return (
    <div className="h-full w-full border rounded-xl py-4 px-4 flex flex-col gap-4">
      <div className="flex gap-4 items-center">{title}</div>
      <ResponsiveContainer width="99%" >
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FF6E0E"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
          />
          <Tooltip />
          <XAxis dataKey="label" interval={7} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

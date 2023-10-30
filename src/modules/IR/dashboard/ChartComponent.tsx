import React from "react";
import { ChartData } from "../../../components/BarChart";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export const ChartComponent = ({ data }: { data: Array<ChartData> }) => {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width={700}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

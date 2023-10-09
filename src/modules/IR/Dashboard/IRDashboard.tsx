import React from "react";
import { useWorker } from "react-hooks-worker";

const worker = new Worker(
  new URL("./WebWorker/ChartDataWorker.ts", import.meta.url),
  { type: "module" }
);

export const IRDashboard = () => {
  const { as, error } = useWorker(worker, "");
  if (error)
    return (
      <div>
        Error:{as} {error}
      </div>
    );
  return (
    <div className="flex h-full w-full flex-col">
      <div className="px-5 py-5 font-medium border-b">Dashboard</div>
      <div></div>
    </div>
  );
};

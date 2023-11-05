import React, { useEffect } from "react";
import { fetchNecessaryData } from "./EncodeDataHandler";

export const IREncodeContainer = () => {
  useEffect(() => {
    const fetchSomething = async () => {
      await fetchNecessaryData();
    };

    fetchSomething();
  }, []);
  return (
    <div className="p-2 flex gap-2 h-full w-full">
      <div className="h-full w-1/4 shrink-0 border rounded-md grid-rows-1 grid-cols-5"></div>
      <div className="h-full w-full rounded-md border">a</div>
    </div>
  );
};

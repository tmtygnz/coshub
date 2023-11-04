import React, { useEffect } from "react";
import { fetchNecessaryData } from "./EncodeDataHandler";

export const IREncodeContainer = () => {
  useEffect(() => {
    const fetchSomething = async () => {
      await fetchNecessaryData();
    };

    fetchSomething();
  }, []);
  return <div></div>;
};

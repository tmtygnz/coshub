import { exposeWorker } from "react-hooks-worker";

export const doStuffs = () => {
  console.log("Hello World from Worker");
};

exposeWorker(doStuffs);

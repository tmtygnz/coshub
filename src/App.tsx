import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { observer, useObservable } from "@legendapp/state/react";
import { ObservablePrimitiveBaseFns } from "@legendapp/state";

const Count = observer(
  ({ numero }: { numero: ObservablePrimitiveBaseFns<number> }) => {
    return <div>{numero.get()}</div>;
  }
);

const App = () => {
  const count = useObservable(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => count.set(count.get() + 1)}>inc</button>
        <Count numero={count} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;

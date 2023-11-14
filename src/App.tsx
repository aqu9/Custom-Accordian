import { useState } from "react";
import CustomAccordian from "./components/Accordian";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          gap: 5,
        }}>
        <button onClick={() => setCount(count + 1)}>
          click me and icrease count
        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount(0)}>click me and Reset count</button>
      </div>
      <CustomAccordian data={{}} />
    </>
  );
};

export default App;

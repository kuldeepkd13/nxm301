import "./App.css";
import { useState, useEffect } from "react";
import Paginated from "./Paginated";

function App() {
  const [counter, setCounter] = useState({
    name: "S",
    email: "s@gmail.com",
  });
  // ! sideeffect
  useEffect(() => {
    // 1. Fetching data from Database
    // 2. Timer
    // 3. Pagination
    return () => {
      console.log("Unmount");
    };
  }, [counter]);

  console.log("OK");
  return (
    <div className="App">
      <h1 className="red">{counter.name}</h1>
      <button
        onClick={() => {
          // counter.name = "A";
          setCounter({ ...counter, name: "A" });
          // ! primitive -> Value
          // ! non-primitive -> Address of the Memory
        }}
      >
        +
      </button>
      <Paginated />
    </div>
  );
}

export default App;

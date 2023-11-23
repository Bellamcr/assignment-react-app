import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    console.log("useEffect starting");
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setCount((c) => c + 1);
      }, 3000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
      <div className="buttons">
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
      </div>
    </>
  );
}

export default App;

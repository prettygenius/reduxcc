import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter((prevCount) => prevCount + 1);
  }
  function handleDecrement() {
    setCounter((prevCount) => prevCount - 1);
  }
  return (
    <div style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}>
      <h3> {`Count: ${counter}`} </h3>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
}

export default Counter;

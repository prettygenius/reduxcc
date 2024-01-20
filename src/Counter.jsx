import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()
  function handleIncrement() {
    dispatch(increment())
  }
  function handleDecrement() {
    dispatch(decrement())
  }
  return (
    <div style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}>
      <h3> {`Count: ${count}`} </h3>
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

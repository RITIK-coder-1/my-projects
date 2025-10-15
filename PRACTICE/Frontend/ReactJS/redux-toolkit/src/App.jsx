import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="text-center mt-5">
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="border border-black border-solid mr-5 p-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="border border-black border-solid p-1"
      >
        Decrement
      </button>
      <div className="mt-5">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
          className="border border-black border-solid p-1"
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          className="border border-black border-solid p-1"
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default App;

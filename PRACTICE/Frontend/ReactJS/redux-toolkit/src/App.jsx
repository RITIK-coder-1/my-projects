import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./redux/features/counterSlice.js";
import useLocalStorage from "./useLocalStorage.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");

  useLocalStorage();
  return (
    <div className="text-center mt-5">
      <h1 className="text-white">Counter: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="border border-white border-solid mr-5 p-1 text-white"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="border border-white border-solid p-1 text-white"
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
          setAmount1((amount1) => (amount1 = ""));
          setAmount2((amount2) => (amount2 = ""));
        }}
        className="border border-white border-solid p-1 ml-5 text-white"
      >
        Reset
      </button>
      <div className="mt-5">
        <input
          type="text"
          value={amount1}
          onChange={(e) => {
            setAmount1((amount1) => (amount1 = Number(e.target.value)));
            if (e.target.value < 0) {
              setAmount1((amount1) => (amount1 = "0"));
            }
          }}
          placeholder="Enter amount"
          className="border border-white border-solid p-1 text-white"
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount1))}
          className="border border-white border-solid p-1 text-white"
        >
          Add Amount
        </button>
      </div>
      <div className="mt-5">
        <input
          type="text"
          value={amount2}
          onChange={(e) => {
            setAmount2((amount2) => (amount2 = Number(e.target.value)));
            if (e.target.value < 0) {
              setAmount2((amount2) => (amount2 = "0"));
            }
          }}
          placeholder="Enter amount"
          className="border border-white border-solid p-1 text-white"
        />
        <button
          onClick={() => dispatch(decrementByAmount(amount2))}
          className="border border-white border-solid p-1 text-white"
        >
          Deduct Amount
        </button>
      </div>
    </div>
  );
}

export default App;

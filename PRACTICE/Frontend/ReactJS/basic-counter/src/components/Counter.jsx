import { useState } from "react";
import Button from "./Button";

function Counter() {
  let [counter, setCounter] = useState(0);

  function increment() {
    if (counter < 20) {
      setCounter((counter) => counter + 1);
    } else {
      alert("The value can't exceed 20!");
    }
  }

  function decrement() {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    } else {
      alert("The value can't be negative!");
    }
  }

  return (
    <>
      <h1>Basic Counter: {counter}</h1>
      <Button content="Increase" onClick={increment} />
      <Button content="Decrease" onClick={decrement} />
      <p>Another Counter: {counter}</p>
    </>
  );
}

export default Counter;

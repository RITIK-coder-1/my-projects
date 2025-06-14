import Button from "./Button";
import { useState } from "react";

function Demo() {
  const [counter, setCounter] = useState(0);

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
      <h1 className="text-2xl">Counter: {counter}</h1>
      <Button content="Increase" onClick={increment} />
      <Button content="Decrease" onClick={decrement} />
    </>
  );
}

export default Demo;

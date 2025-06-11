import { useState } from "react";
import Button from "./Button";

function Counter() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter) => counter + 1);

    if (counter >= 20) {
      alert("The value will not exceed 20!");
      counter = 20;
      setCounter(counter);
    }

    console.log(counter);
  };

  const decrement = () => {
    setCounter((counter) => counter - 1);
    if (counter <= 0) {
      alert("The value will not be negative!");
      counter = 0;
      setCounter(counter);
    }
  };

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

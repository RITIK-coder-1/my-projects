import { useState } from "react";
import Button from "./Button";

function Counter() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    counter = counter + 1;
    setCounter(counter);
    if (counter >= 20) {
      counter = 20;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Basic Counter: {counter}</h1>
      <Button onClick={increment} />
      <Button />
      <p>Another Counter: {counter}</p>
    </>
  );
}

export default Counter;

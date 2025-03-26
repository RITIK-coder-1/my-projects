import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    counter = counter + 1;
    setCounter(counter);
    if (counter > 20) {
      alert("The value can't be more than 20!");
      counter = 20;
      setCounter(counter);
    }
  };

  const decreaseValue = () => {
    counter = counter - 1;
    setCounter(counter);
    if (counter < 0) {
      alert("The value can't be negative!");
      counter = 0;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1 style={{ color: "aliceblue" }}>Basic Counter: {counter}</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <p style={{ color: "aliceblue" }}>Another Counter: {counter}</p>
    </>
  );
}

export default App;

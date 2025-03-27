import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");

  const changeColor = (color) => {
    return function innerFunction() {
      setColor(color);
    };
  };

  return (
    <div
      className={"h-full w-full flex items-end justify-center pb-10"}
      style={{ backgroundColor: color }}
    >
      <Cart changeColor={changeColor} />
    </div>
  );
}

export default App;

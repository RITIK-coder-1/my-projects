import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");

  const changeColor = (color) => {
    return function innerFunction() {
      setColor(color);
    };
  };
  /*
  This is a higher order function. I need a reference to the color name from the cart component so that I can manipulate the background color of this page accordingly. As I can't pass down a parameter to the event attribute, I've used it to take the reference of the color that will be passed down to the returned inner function which will act as the function body for the onClick event attribute. In this way, I'm getting the color reference and also providing an entire funciton to the onClick method
  */

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

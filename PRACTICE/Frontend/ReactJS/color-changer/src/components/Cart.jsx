import Button from "./Button.jsx";

function Cart({ changeColor }) {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "brown",
    "yellow",
    "violet",
    "purple",
    "indigo",
    "skyblue",
    "black",
  ];

  return (
    <div
      className="flex gap-3 mx-5 rounded p-2"
      style={{
        backgroundColor: "yellowgreen",
      }}
    >
      {colors.map((ele, index) => {
        return <Button color={ele} key={index} onClick={changeColor(ele)} />;
        /* changeColor is a higher-order function that returns a function. I called it here because "ele" gets passed as the argument, allowing it to change the background color of the entire page in the App Component. */
      })}
    </div>
  );
}

export default Cart;

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
      })}
    </div>
  );
}

export default Cart;

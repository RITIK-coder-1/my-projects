import Button from "./Button.jsx";

function Cart({ changeColor }) {
  const colors = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "blue" },
    { id: 4, name: "orange" },
    { id: 5, name: "brown" },
    { id: 6, name: "yellow" },
    { id: 7, name: "violet" },
    { id: 8, name: "purple" },
    { id: 9, name: "indigo" },
    { id: 10, name: "skyblue" },
    { id: 11, name: "black" },
  ];

  return (
    <div
      className="flex gap-3 mx-5 rounded p-2"
      style={{
        backgroundColor: "yellowgreen",
      }}
    >
      {colors.map(({ id, name }) => {
        return <Button color={name} key={id} onClick={changeColor(name)} />;
        /* changeColor is a higher-order function that returns a function. I called it here because "name" gets passed as the argument, allowing it to change the background color of the entire page in the App Component (Its Parent). */
      })}
    </div>
  );
}

export default Cart;

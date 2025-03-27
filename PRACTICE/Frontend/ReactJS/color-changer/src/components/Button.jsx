import clsx from "clsx";

function Button({ color, onClick }) {
  return (
    <button
      className={
        "border border-solid border-white h-3 w-24 rounded text-white p-5 flex justify-center items-center font-bold cursor-pointer"
      }
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {color}
    </button>
  );
}

export default Button;

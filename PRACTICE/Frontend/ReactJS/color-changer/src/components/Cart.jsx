/**
 * ============================================
 * Problem Statement:
 * - The color names are **defined inside `Cart.jsx`**, but I need access to them in `App.jsx` to change the background color.
 * - Since the colors exist only inside `Cart`, `App` has no direct way to reference them.
 * - I could define everything inside `App.jsx`, but I want to maintain **modularity** and keep `Cart` a separate component.
 *
 * Solution Approach:
 * - I pass a function (`changeColor`) as a prop from `App` to `Cart`, so `Cart` can send back the selected color.
 * - However, React’s event handlers **don’t take arguments directly**—they expect a **function reference**, not a direct function call.
 * - To solve this, I leveraged **closures** and **higher-order functions**:
 *   - I created a function (`changeColor`) that **takes a color name as a parameter**.
 *   - It **returns another function**, which is then executed when the button is clicked.
 *   - The inner function retains access to the color **via closure**, allowing it to change the background in `App`.
 *
 * Why This Works Well:
 * - **Encapsulation** – `Cart.jsx` doesn’t need to know anything about `App`; it only sends data upward.
 * - **Proper Function Handling** – By returning a function, React’s `onClick` gets a valid reference while still accessing the correct color.
 * - **No Extra Re-renders** – The function is only called when needed, keeping performance efficient.
 *
 * Conclusion:
 * By using **higher-order functions and closures**, I successfully allowed `Cart` to "communicate" color changes to `App`, while keeping everything modular and efficient.
 * ============================================
 */

import Button from "./Button.jsx";

function Cart({ changeColor }) {
  // the array of color names to loop over. I have explicitly defined unique IDs for each element so that React renders only the specific component when in use
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
      })}
    </div>
  );
}

export default Cart;

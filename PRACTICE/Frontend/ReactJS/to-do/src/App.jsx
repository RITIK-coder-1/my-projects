import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { add } from "./features/todoSlice";
import { useEffect, useState } from "react";

function App() {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const [todoInput, setInput] = useState("");

  // if (todos.length !== 0) {
  //   todos.map((ele, key) => {
  //     localStorage.setItem(`Todo ${key + 1}`, ele);
  //   });
  // }

  // localStorage.clear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-10 px-4 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-wide mb-6 text-center text-white">
        📝 TO-DO LIST
      </h1>

      {/* Input Section */}
      <form
        action="#"
        className="flex justify-center items-center gap-3 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Type your task..."
          className="flex-1 bg-transparent border border-gray-500 focus:border-blue-400 rounded-lg px-4 py-2 placeholder-gray-400 text-white outline-none transition duration-200"
          onChange={(e) => setInput((input) => (input = e.target.value))}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 border border-transparent rounded-lg px-4 py-2 font-semibold shadow-md cursor-pointer"
          onClick={() => {
            dispatch(add(todoInput));
          }}
        >
          Add
        </button>
      </form>

      {/* To-Do Container */}
      <div className="w-full max-w-2xl bg-gray-800 mt-8 rounded-xl shadow-lg p-6 overflow-y-auto h-80">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Your To-Dos
        </h2>

        {/* Placeholder for list */}
        <div className="flex flex-col justify-start items-center h-full text-gray-400">
          {todos.length === 0 ? (
            <p>No tasks yet. Add your first one above!</p>
          ) : (
            <p></p>
          )}
          <ul className="flex flex-col justify-center items-start gap-3 w-full">
            {todos.map((ele, key) => (
              <li
                key={key}
                className="text-black font-black p-1 rounded-md bg-amber-200"
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

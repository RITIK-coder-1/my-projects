import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { add, del } from "./features/todoSlice";
import { useState } from "react";

function App() {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const [todoInput, setInput] = useState("");

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
            <ul className="flex flex-col justify-center items-start gap-3 w-full p-4 rounded-xl shadow-2xl">
              {todos.map((ele, key) => (
                <li
                  key={key}
                  className="w-full px-4 py-2 bg-white/80 text-gray-800 font-semibold rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 flex items-center gap-2 border border-amber-200"
                >
                  <div className="w-full flex items-center justify-start gap-3">
                    <label>{`${key + 1}.`}</label>
                    <input
                      type="text"
                      value={ele}
                      className="p-1 w-full outline-0 caret-transparent cursor-default"
                    />
                  </div>
                  <button
                    className="flex-shrink-0 w-4 h-4 bg-yellow-500 rounded-full cursor-pointer"
                    title="Update Todo"
                  ></button>
                  <button
                    className="flex-shrink-0 w-4 h-4 bg-red-950 rounded-full cursor-pointer"
                    title="Delete Todo"
                    onClick={() => dispatch(del(key))}
                  ></button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

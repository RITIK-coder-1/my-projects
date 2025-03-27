import { useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [passwordLength, setPasswordLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(true);
  let [charAllowed, setCharAllowed] = useState(true);

  let str = "abcdefghijklmnopqrstwvuxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
  let num = "0123456789";
  let char = "_+-*/$%^&*@!~";

  for (let i = 0; i <= passwordLength; i++) {
    const newChar = Math.floor(Math.random() * str.length + 1);
    password = password.concat(str.charAt(newChar));
  }

  const check = (param, func) => {
    return () => {
      func(() => !param);
    };
  };
  return (
    <>
      <h1 className="text-white text-5xl font-bold">Password Generator</h1>
      <div className="h-56 w-84 bg-red-700 p-5 flex flex-col gap-5">
        <input
          type="text"
          className="border border-red border-solid bg-white rounded outline-none p-2"
          value={password}
          placeholder="Password"
          readOnly
        />
        <div className="flex justify-between items-center">
          <label>Length: ({passwordLength})</label>
          <input type="range" className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center">
          <label>Allow Numbers: </label>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={numberAllowed}
            onClick={check(numberAllowed, setNumberAllowed)}
          />
        </div>
        <div className="flex justify-between items-center">
          <label>Allow Special Characters: </label>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={charAllowed}
            onClick={check(charAllowed, setCharAllowed)}
          />
        </div>
      </div>
    </>
  );
}

export default App;

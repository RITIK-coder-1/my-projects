import { useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [passwordLength, setPasswordLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(true);
  let [charAllowed, setCharAllowed] = useState(true);

  let str = "abcdefghijklmnopqrstwvuxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
  let num = "0123456789";
  let char = "_+-*/$%^&*@!~";

  const checkNumber = () => {
    setNumberAllowed((numberAllowed) => !numberAllowed);
  };

  const checkChar = () => {
    setCharAllowed((charAllowed) => !charAllowed);
  };

  const setLength = () => {
    setPasswordLength((passwordLength) => event.target.value);
  };

  if (numberAllowed) {
    str = str.concat(num);
  }

  if (charAllowed) {
    str = str.concat(char);
  }

  const generate = () => {
    let newPassword = "";
    setPassword((password) => {
      return password.replace(password, "");
    });
    for (let i = 0; i < passwordLength; i++) {
      const newChar = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(newChar);
    }

    setPassword((password) => {
      return password.concat(newPassword);
    });
  };

  const copyText = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <h1 className="text-white text-5xl font-bold">Password Generator</h1>
      <div className="h-64 w-84 bg-red-700 p-5 flex flex-col gap-5">
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border border-red border-solid bg-white rounded outline-none p-2"
            value={password}
            placeholder="Password"
            readOnly
          />
          <span
            className="bg-purple-800 p-2 rounded font-bold cursor-pointer"
            onClick={copyText}
          >
            Copy
          </span>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-amber-200 font-bold">
            Length: {passwordLength}
          </label>
          <input
            type="range"
            className="cursor-pointer"
            onChange={setLength}
            value={passwordLength}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-amber-200 font-bold">Allow Numbers: </label>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={numberAllowed}
            onChange={checkNumber}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-amber-200 font-bold">
            Allow Special Characters:{" "}
          </label>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={charAllowed}
            onChange={checkChar}
          />
        </div>
        <button onClick={generate} className="bg-purple-600 ">
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;

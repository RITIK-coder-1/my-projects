import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [passwordLength, setPasswordLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(true);
  let [charAllowed, setCharAllowed] = useState(true);

  const passwordRef = useRef(null);

  const checkNumber = useCallback(() => {
    setNumberAllowed((numberAllowed) => !numberAllowed);
  }, [numberAllowed]);

  const checkChar = useCallback(() => {
    setCharAllowed((charAllowed) => !charAllowed);
  }, [charAllowed]);

  const setLength = useCallback((event) => {
    setPasswordLength(event.target.value);
  }, []);

  const generate = useCallback(() => {
    let str = "abcdefghijklmnopqrstwvuxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    let num = "0123456789";
    let char = "_+-*/$%^&*@!~";
    let newPassword = "";

    if (numberAllowed) {
      str = str.concat(num);
    }

    if (charAllowed) {
      str = str.concat(char);
    }

    for (let i = 0; i < passwordLength; i++) {
      const newChar = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(newChar);
    }

    setPassword(newPassword);
  }, [numberAllowed, charAllowed, passwordLength]);

  useEffect(() => {
    generate();
  }, [numberAllowed, charAllowed, passwordLength]);

  const copyText = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password]);

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
            ref={passwordRef}
          />
          <button
            className="bg-purple-800 p-2 rounded font-bold cursor-pointer hover:bg-purple-950"
            onClick={copyText}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-amber-200 font-bold" htmlFor="password-length">
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
        <button
          onClick={generate}
          className="bg-purple-600 rounded-md p-1 font-bold text-white cursor-pointer hover:bg-purple-800"
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;

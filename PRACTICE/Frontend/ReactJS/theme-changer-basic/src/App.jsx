import "./App.css";
import Button from "./components/Button";
import Toggle from "./components/Toggle";
import ThemeContext from "./context/ThemeContext";
import Paragraph from "./components/Paragraph";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Toggle />
      <h1 className="text-3xl dark:text-blue-300 duration-500">hey</h1>
      <Button />
      <Paragraph />
    </ThemeContext.Provider>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/themeContext";
import Theme from "./components/Theme";
import Demo from "./components/Demo";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const dark = () => {
    setCurrentTheme("dark");
  };

  const light = () => {
    setCurrentTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(currentTheme);
    console.log(currentTheme);
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider
        value={{ theme: currentTheme, darkMode: dark, lightMode: light }}
      >
        <h1 className="text-2xl text-blue-900 text-center dark:text-shadow-blue-950">
          Theme
        </h1>
        <Theme />
      </ThemeProvider>
      <Demo />
    </>
  );
}

export default App;

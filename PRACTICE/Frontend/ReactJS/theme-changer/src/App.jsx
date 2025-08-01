import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/themeContext";
import Theme from "./components/Theme";
import Demo from "./components/Demo";

function App() {
  const [currentTheme, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(currentTheme);
    console.log(currentTheme);
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider value={{ theme: currentTheme, darkMode, lightMode }}>
        <h1 className="text-2xl text-blue-900 text-center dark:text-shadow-blue-950">
          Theme
        </h1>
        <Theme />
        <Demo />
      </ThemeProvider>
    </>
  );
}

export default App;

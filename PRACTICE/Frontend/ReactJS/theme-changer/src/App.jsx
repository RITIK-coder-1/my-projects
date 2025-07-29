import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/themeContext";
import Theme from "./components/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <h1 className="text-2xl text-blue-900 text-center bg-[ritik-blue]">
        Theme
      </h1>
      <Theme />
    </ThemeProvider>
  );
}

export default App;

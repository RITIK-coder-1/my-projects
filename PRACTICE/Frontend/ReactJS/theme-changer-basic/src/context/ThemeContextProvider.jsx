import React from "react";
import ThemeContext from "./ThemeContext";
import { useState, useEffect } from "react";

function ThemeContextProvider({ children }) {
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
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

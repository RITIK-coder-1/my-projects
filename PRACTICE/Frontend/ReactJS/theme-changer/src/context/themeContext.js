import { createContext, useContext } from "react";

const themeContext = createContext({
  theme: "light",
  darkMode: () => {},
  lightMode: () => {},
});

const ThemeProvider = themeContext.Provider;

const useTheme = () => {
  return useContext(themeContext);
};

export { themeContext, ThemeProvider, useTheme };

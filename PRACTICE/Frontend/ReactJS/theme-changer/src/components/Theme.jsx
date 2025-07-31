import React from "react";
import { useTheme } from "../context/themeContext";

function Theme() {
  const { theme, lightMode, darkMode } = useTheme();
  return (
    <>
      <label className="dark:text-white">Change Theme: </label>
      <input
        type="checkbox"
        className="w-5"
        onChange={function (e) {
          const darkModeStatus = e.currentTarget.checked;
          if (darkModeStatus) {
            darkMode();
          } else {
            lightMode();
          }
        }}
        checked={theme === "dark"}
      />
    </>
  );
}

export default Theme;

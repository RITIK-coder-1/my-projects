import React from "react";
import { useTheme } from "../context/themeContext";

function Demo() {
  const { theme } = useTheme(); // won't work if Demo is outside the Provider
  return <div className="text-blue-900 dark:text-red-900">{theme}</div>;
}

export default Demo;

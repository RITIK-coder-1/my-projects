import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Paragraph() {
  const themeObject = useContext(ThemeContext);
  const theme = themeObject.theme;
  return <div className="dark:text-red-500">Current theme: {theme}</div>;
}

export default Paragraph;

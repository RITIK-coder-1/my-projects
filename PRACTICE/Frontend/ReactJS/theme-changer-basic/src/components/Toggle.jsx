import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const Toggle = () => {
  const themeObject = useContext(ThemeContext);
  const changeTheme = themeObject.changeTheme;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    changeTheme();
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center gap-2">
        <span className="dark:text-white">
          {themeObject.theme === "light" ? "Dark Mode:" : "Light Mode"}
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`block h-8 w-14 rounded-full transition-colors duration-300 ${
              isChecked ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`dot absolute top-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 ${
              isChecked ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Toggle;

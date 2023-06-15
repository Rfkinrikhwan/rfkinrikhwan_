import "./Button.css";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../Context/Theme";

export default function Button() {
  const themeContext = useTheme();
  const { theme, setDarkMode, setLightMode } = themeContext;

  //   console.log(theme);

  return (
    <div className="wrap-btn">
      {theme === "light" ? (
        <button
          onClick={setDarkMode}
          className="mode"
          style={{ color: theme === "light" ? "#000" : "#000" }}
        >
          <FaMoon />
        </button>
      ) : (
        <button
          onClick={setLightMode}
          className="mode"
          style={{ color: theme === "dark" ? "#fff" : "#fff" }}
        >
          <FaSun />
        </button>
      )}
    </div>
  );
}

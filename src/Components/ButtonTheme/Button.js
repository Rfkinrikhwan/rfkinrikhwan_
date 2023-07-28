import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../Context/Theme";
import "./Button.css";

export default function Button() {
  const themeContext = useTheme();
  const { theme, setDarkMode, setLightMode } = themeContext;

  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    setTimeout(() => {
      if (theme === "light") {
        setDarkMode();
      } else {
        setLightMode();
      }
    }, 300);
  };

  return (
    <div className="wrap-btn">
      <button
        onClick={handleClick}
        className={`mode ${isRotated ? "rotate" : ""}`}
        style={{ color: theme === "light" ? "#000" : "#fff" }}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

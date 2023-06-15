import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // console.log(`theme provider`, theme);
  }, [theme]);

  const setDarkMode = () => setTheme("dark");
  const setLightMode = () => setTheme("light");

  return (
    <ThemeContext.Provider value={{ theme, setDarkMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

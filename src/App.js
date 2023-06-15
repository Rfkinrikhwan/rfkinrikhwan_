import "./App.css";
import ThemeProvider from "./Context/Theme";
import Portfolio from "./Pages/Portfolio";

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

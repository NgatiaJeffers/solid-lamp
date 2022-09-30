import { useState } from 'react';
import '../styles/globals.css';

import Navbar from '../components/Navbar';
import ThemeContext from '../components/themeContext';

const themes = {
  dark: {
    background: "black",
    color: "white"
  },
  light: {
    background: "white",
    color: "black"
  }
};

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{
        widht: "100%",
        miniHeight: "100vh",
        ...themes[theme]
      }}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp

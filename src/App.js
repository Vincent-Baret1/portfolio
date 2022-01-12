import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from "styled-components";
import TopRectangle from './components/TopRectangle';
import UseSwitchesCustom from './components/MUISwitch';

function App() {

  // App.js
  const [theme, setTheme] = useState('light');
  const [checked, setChecked] = useState(false);

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  const handleChange = () => {
    toggleTheme();
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <UseSwitchesCustom onChange={() => toggleTheme()} className="switch-button"/>
        <TopRectangle className="topRectangle" />
      </ThemeProvider>
    </div>
  );
}

export default App;

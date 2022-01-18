import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from "styled-components";
import TopRectangle from './components/TopRectangle';
import { Button } from 'react-bootstrap';
import MonParcoursRectangle from './components/MonParcoursRectangle';

function App() {

  // App.js
  const [theme, setTheme] = useState('light');
  const [checked, setChecked] = useState(false);

  const label = "Changer la couleur"

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



  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Button variant="outline-dark" onClick={toggleTheme} className="switch-button">Changer la couleur</Button>{' '}
        <TopRectangle className="topRectangle" />
        <MonParcoursRectangle className="MonParcoursRectangle" />
      </ThemeProvider>
    </div>
  );
}

export default App;

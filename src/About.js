import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { lightTheme, darkTheme } from "./theme.js"
import './App.css';

function About() {
  // const [visibile, setVisibility] = useState[false]
  
  // const visibilityToggler = () => {
  //   visibile === false ? setVisibility(true) : setVisibility(false);
  // }

  

 


  // const [lightButton, setButton] = useState("☽");
  // const [theme, setTheme] = useState('light');
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  //   theme === 'light' ? setButton('☼') : setButton('☽')
  // }



  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
        <button onclick={visibilityToggler}>
          About me
        </button>
          {/* <button onClick={themeToggler} id="theme-button">{lightButton}</button> */}
           
        </div>
      </>
    // </ThemeProvider>
  )
}

export default About;
import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { lightTheme, darkTheme } from "./theme.js"
import './App.css';

function App() {
  const [lightButton, setButton] = useState("☽");
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    theme === 'light' ? setButton('☼') : setButton('☽')
  }



  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <header className="App-header">
            <div className="profile-img-container">
              <img src="/images/sbell.png" className="picture" alt="picture" />
            </div>
            <h1>
              Sophia Bell
            </h1>
            <nav>
              <a href="https://github.com/Kittaru87" add target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/sophia-bell-1a945a2b/" add target="_blank">LinkedIn</a>
              <a href="https://medium.com/@sophbell87" add target="_blank">Blog</a>
              <a href="mailto:sophbell87@gmail.com" add target="_blank">Email</a>
              <button onClick={() => setButton("☼"), themeToggler} id="theme-button">{lightButton}</button>
            </nav>
          </header>
          <div className="github-calendar">
            <GitHubCalendar username="kittaru87" />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

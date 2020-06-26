import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { lightTheme, darkTheme } from "./theme.js"
import About from "./About.js"
import './App.css';

function App() {
  const [mode, setButton] = useState("☽");
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
              <img src="/images/sbell.png" className="picture" alt="profile" />
            </div>
            <h1>
              Sophia Bell
            </h1>
            <nav>
              <a href="https://github.com/Kittaru87" add target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://www.linkedin.com/in/sophia-bell-1a945a2b/" add target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://medium.com/@sophbell87" add target="_blank" rel="noopener noreferrer">Blog</a>
              <a href="mailto:sophbell87@gmail.com" add target="_blank" rel="noopener noreferrer">Email</a>
              <button onClick={themeToggler} id="theme-button">{mode}</button>
            </nav>
          </header>
          <div className="currently-looking-tag">
            <span className="tag tag-primary">Currently looking</span>
          </div>
          <blockquote>
            Junior Full-Stack Engineer and graduate of <a href="https://makers.tech/" add target="_blank" rel="noopener noreferrer">Makers Academy bootcamp</a>; current Freelance Web Developer and Sub-Editor. Former Digital Content Manager at the 
            <a href="https://www.litrg.org.uk" add target="_blank" rel="noopener noreferrer"> Low Incomes Tax Reform Group</a>. 
          </blockquote>
          <About />
            {/* <div className="github-calendar">
              <GitHubCalendar username="kittaru87" />
            </div> */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

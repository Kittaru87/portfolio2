import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { lightTheme, darkTheme } from "./theme.js"
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Calendar from "./components/Calendar";
import './App.css';

function App() {
  const [mode, setButton] = useState("☽");
  const [theme, setTheme] = useState('light');
  const [github, setGithub] = useState("/images/github-dark.png");
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    theme === 'light' ? setButton('☼') : setButton('☽');
    theme === 'light' ? setGithub("/images/github-light.png") : setGithub("/images/github-dark.png");
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="app">
          <header className="app-header">
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
        <div>
        <Router>
          <Link to="/about" className="tag link">About me</Link>
          <Link to="/projects" className="tag link">Projects</Link>
          <Link to="/resume" className="tag link">Resume</Link>
          <Link to="/calendar" style={{border: "none"}}>
            <img to="/calendar" src={github} alt="github-contributions" className="github-contributions"/>
          </Link>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/calendar" component={Calendar} />
        </Router> 
        </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { lightTheme, darkTheme } from "./theme.js";
import ScrollIntoView from "react-scroll-into-view";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Calendar from "./components/Calendar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const [mode, setButton] = useState("☽");
  const [theme, setTheme] = useState("light");
  const [github, setGithub] = useState("/images/github-dark.png");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light" ? setButton("☼") : setButton("☽");
    theme === "light"
      ? setGithub("/images/github-light.png")
      : setGithub("/images/github-dark.png");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="app">
          <Hero themeToggler={themeToggler} mode={mode} />
          <div>
            <Router>
              <Link to="/about" className="tag link">
                <ScrollIntoView selector="#about">About me</ScrollIntoView>
              </Link>
              <Link to="/projects" className="tag link">
                <ScrollIntoView selector="#projects">Projects</ScrollIntoView>
              </Link>
              <Link to="/resume" className="tag link">
                <ScrollIntoView selector="#resume">Resume</ScrollIntoView>
              </Link>
              <Link to="/calendar" className="calendar-view">
                <img
                  to="/calendar"
                  src={github}
                  alt="github-contributions"
                  className="github-contributions"
                />
              </Link>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/calendar" component={Calendar} />
            </Router>
          </div>
          <footer>Sophia Bell, 2020</footer>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

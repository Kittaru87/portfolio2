import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles.js";
import { lightTheme, darkTheme } from "../theme.js"
import './Home.css';

function Resume() {

  return (  
    <div>
    <blockquote>
      Current resume is on <a href="https://github.com/Kittaru87/CV/blob/master/README.md" add target="_blank" rel="noopener noreferrer">Github</a>
    </blockquote>
    </div>
  )
}

export default Resume;
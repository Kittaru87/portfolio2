import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import '../App.css';

function Projects() {
  const animateList = [
    <a href="https://github.com/KG700/mix-tape" add target="_blank" rel="noopener noreferrer">Mix Tape</a>, 
    <a href="https://github.com/Kittaru87/Innercise" add target="_blank" rel="noopener noreferrer">Innercise</a>, 
    <a href="https://github.com/Kittaru87/acebook-theUndefinedMethod" add target="_blank" rel="noopener noreferrer">Acebook</a>, 
    <a href="https://github.com/Kittaru87/bank-tech-test" add target="_blank" rel="noopener noreferrer">Bank Tech Test</a>
  ];
  

  return (

      <>
    <div>
      <blockquote>
        A selection of current and finished projects
      </blockquote>
    </div>
    <Fragment>
      {animateList.map((item, key) => (
        <div key={key}>
          <Fade top>
            <blockquote>
              {item}
            </blockquote>
          </Fade>
        </div>
      ))}
    </Fragment>
     </>

 
  )
}

export default Projects;
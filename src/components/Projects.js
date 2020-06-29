import React from 'react';
import Fade from 'react-reveal/Fade';


function Projects() {

  return (

    <>
      <div>
        <blockquote>
          A selection of current and finished projects
        </blockquote>
      </div>

      <Fade top>
        <div>
          <blockquote>
            <a href="https://github.com/KG700/mix-tape" add target="_blank" rel="noopener noreferrer">Mix Tape</a>
          </blockquote>
        </div>
        <div>
          <blockquote>
            <a href="https://github.com/Kittaru87/Innercise" add target="_blank" rel="noopener noreferrer">Innercise</a>
          </blockquote>
        </div>
        <div>
          <blockquote>
            <a href="https://github.com/Kittaru87/acebook-theUndefinedMethod" add target="_blank" rel="noopener noreferrer">Acebook</a>
          </blockquote> 
        </div>
        <div>
          <blockquote>
            <a href="https://github.com/Kittaru87/bank-tech-test" add target="_blank" rel="noopener noreferrer">Bank Tech Test</a>
          </blockquote>
        </div>
      </Fade>

    </>

  )
}

export default Projects;
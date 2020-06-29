import React from 'react';
import Fade from 'react-reveal/Fade';
import './Projects.css';


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
        <div className="project">
        <p> Mix Tape utilises the Spotify API to mix and produce playlists with your friends. The app stores a user's top 50 most played tracks 
        and allows you to select other users' tracks to produce a randomised 25 track playlist. This playlist can then either be played in-app or
        via Spotify.
        </p>
        </div>
        <div className="project-gif">
          <img src="/images/MixTape.png" alt="mixtape" />
        </div>
        
        <div>
          <blockquote>
            <a href="https://github.com/Kittaru87/Innercise" add target="_blank" rel="noopener noreferrer">Innercise</a>
          </blockquote>
        </div>
        <div className="project">
        <p> Innercise is an app to help people focus their at home exercise routines. Innericse utilises the YouTube API to pull videos based on a 
          selected area of the body. If a user likes the video they can add it to their profile. A user can also record whether they have completed
          the exercise video and their profile with record which exercises they have done in the week/month/all time.
        </p>
        </div>
        <div className="project-gif">
          <img src="/images/Portfolio-Innercise.gif" alt="innercise" />
        </div>

        <div>
          <blockquote>
            <a href="https://github.com/Kittaru87/acebook-theUndefinedMethod" add target="_blank" rel="noopener noreferrer">Acebook</a>
          </blockquote> 
        </div>
        <div className="project">
        <p> Acebook is a project loosely based on Facebook. Users can post messages and like or comment on those messages. Posts are displayed
          in reverse chronological order (newest first).
        </p>
        </div>
        <div className="project-gif">
          <img src="/images/Acebook.png" alt="acebook" />
        </div>

        <div>
          <blockquote>
            <a href="https://github.com/Kittaru87/bank-tech-test" add target="_blank" rel="noopener noreferrer">Bank Tech Test</a>
          </blockquote>
        </div>
        <div className="project">
        <p> This is an example of a tech test to write a program that can be used via irb to simulate a user's interaction with their bank account.
        </p>
        </div>
        <div className="project-gif">
          <img src="/images/BTT.png" alt="bank-tech-test" />
        </div>
      </Fade>

    </>

  )
}

export default Projects;
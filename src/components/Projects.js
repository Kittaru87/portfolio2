import React from 'react';
import Fade from 'react-reveal/Fade';
import ScrollUp from './Scroll.js';
import './Projects.css';


function Projects() {
  const Scroll = ScrollUp()

  return (
    <>
      <div>
        <blockquote>
          A selection of current and finished projects
          <p style={{fontSize: "16px"}}>(available on Github)</p>
        </blockquote>
      </div>

      <Fade top>
          
        <div>
          <blockquote>
            <a href="https://github.com/KG700/mix-tape" add target="_blank" rel="noopener noreferrer">Mix Tape</a>
          </blockquote>
        </div>
        <div className="project">
          <p> Mix Tape utilises the Spotify API to mix and produce playlists with your friends. The app stores a user&apos;s top 50 most played tracks 
          and allows you to select other users&apos; tracks to produce a randomised 25 track playlist. This playlist can then either be played in-app or
          via Spotify.
          </p>
          <div className="tag tag-secondary">
            Ruby on Rails
          </div>
          <div className="tag tag-secondary">
            React
          </div>
          <div className="tag tag-secondary">
            PostgreSQL
          </div>
          <div className="tag tag-secondary">
            Rspec
          </div>
          <div className="tag tag-secondary">
            Capybara
          </div>
          <div className="tag tag-secondary">
            Heroku
          </div>
        </div>
        <div className="project-gif right">
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
            the exercise video and their profile will record which exercises they have done in the week/month/all time.
          </p>
          <div className="tag tag-secondary">
            Ruby on Rails
          </div>
          <div className="tag tag-secondary">
            Javascript
          </div>
          <div className="tag tag-secondary">
            jQuery
          </div>
          <div className="tag tag-secondary">
            PostgreSQL
          </div>
          <div className="tag tag-secondary">
            Rspec
          </div>
          <div className="tag tag-secondary">
            Capybara
          </div>
          <div className="tag tag-secondary">
            Heroku
          </div>
        </div>
        <div className="project-gif right">
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
          <div className="tag tag-secondary">
            Ruby on Rails
          </div>
          <div className="tag tag-secondary">
            Javascript
          </div>
          <div className="tag tag-secondary">
            jQuery
          </div>
          <div className="tag tag-secondary">
            PostgreSQL
          </div>
          <div className="tag tag-secondary">
            Rspec
          </div>
          <div className="tag tag-secondary">
            Capybara
          </div>
          <div className="tag tag-secondary">
            Heroku
          </div>
        </div>
        <div className="project-gif right">
          <img src="/images/Acebook.png" alt="acebook" />
        </div>

        <div>
          <blockquote>
            <a href="https://github.com/Kittaru87/bank-tech-test" add target="_blank" rel="noopener noreferrer">Bank Tech Test</a>
          </blockquote>
        </div>
        <div className="project">
        <p> This is an example of a tech test to write a program that can be used via irb to simulate a user&apos;s interaction with their bank account.
        </p>
        <div className="tag tag-secondary">
          Ruby
        </div>
        </div>
        <div className="project-gif right" style={{marginBottom: "70px"}}>
          <img src="/images/BTT.png" alt="bank-tech-test" />
        </div>

      </Fade>
      <div>
        {Scroll}
      </div>

    </>

  )
}

export default Projects;
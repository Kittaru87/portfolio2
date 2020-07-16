import React from "react";

function Hero(props) {
  return (
    <>
      <header className="app-header">
        <div className="profile-img-container">
          <img src="/images/sbell.png" className="picture" alt="profile" />
        </div>
        <h1>Sophia Bell</h1>
        <nav>
          <a
            href="https://github.com/Kittaru87"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sophia-bell-1a945a2b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@sophbell87"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="mailto:sophbell87@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <button onClick={props.themeToggler} id="theme-button">
            {props.mode}
          </button>
        </nav>
      </header>
      <div className="currently-looking-tag">
        <span className="tag tag-primary">Currently looking</span>
      </div>
      <blockquote>
        Software Engineer and graduate of{" "}
        <a
          href="https://makers.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Makers Academy bootcamp
        </a>
        ; current Freelance Web Developer and Sub-Editor. Former Digital Content
        Manager at the
        <a
          href="https://www.litrg.org.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Low Incomes Tax Reform Group
        </a>
        .
      </blockquote>
    </>
  );
}

export default Hero;

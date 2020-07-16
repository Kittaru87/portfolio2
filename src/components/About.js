import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import Fade from "react-reveal/Fade";
import ScrollUp from "./Scroll.js";
import "./About.css";

function About() {
  const Scroll = ScrollUp();
  const bounceAnimation = keyframes`${bounce}`;
  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  return (
    <div>
      <blockquote id="about">
        <BouncyDiv>
          Hello{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </BouncyDiv>
        <div>Welcome to my portfolio!</div>
      </blockquote>
      <div>Stay a while and listen...</div>
      <div>
        <img
          src="https://vignette.wikia.nocookie.net/median-xl/images/9/96/Deckard_Cain_npc.gif"
          id="cain"
          alt="deckard-cain"
        ></img>
      </div>
      <Fade top>
        <div className="container">
          <div className="likes">
            <h2> Games </h2>
            As my friend Deckard Cain here will tell you, I'm an avid gamer
            (when I have the time). My all-time favourite game has to be Diablo
            2 (although I really enjoyed the most recent God of War too). I'm
            currently getting through a bunch of nasties in The Last of Us 2.
          </div>
        </div>
        <div>
          <img
            className="round-pics"
            src="/images/GoW.png"
            alt="God-of-War"
          ></img>
        </div>

        <div className="container">
          <div className="likes">
            <h2> Sci-Fi</h2>
            It's pretty much all I read. I highly recommend the Hyperion Cantos
            by Dan Simmons, or the Expanse series by James S. A. Corey (which is
            also a very good tv series out at the moment).
            <br />
            I've been fascinated by all things space since a young age, and I'd
            like to think that I'd make a great astronaut or space cowboy.
          </div>
        </div>
        <div>
          <img className="round-pics" src="/images/space.png" alt="space"></img>
        </div>

        <div className="container">
          <div className="likes">
            <h2> Pottery </h2>
            Up until recently I was a member of a ceramic studio and enjoyed
            producing a wide variety of ceramic beauties (but mostly mugs). I
            hope to pick this up again soon so that I don't have buy anyone
            presents anymore.
          </div>
        </div>
        <div>
          <img className="round-pics" src="/images/cup.png" alt="cup"></img>
        </div>

        <div className="container">
          <div className="likes">
            <h2> Marbles </h2>
            This is my cat, Marbles. She's a delightfully spicy beanbag who
            loves to chew plastic under the bed at 4 in the morning.
          </div>
        </div>
        <div>
          <img
            className="round-pics"
            src="/images/cat.png"
            alt="marbles"
            style={{ marginBottom: "70px" }}
          ></img>
        </div>
      </Fade>
      <div>{Scroll}</div>
    </div>
  );
}

export default About;

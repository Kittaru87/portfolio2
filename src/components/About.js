import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import '../App.css';

function About() {  
  const bounceAnimation = keyframes`${bounce}`;
  const BouncyDiv = styled.div`
                    animation: 2s ${bounceAnimation};
                    `;

  return (
    <div>
    <blockquote>
      <BouncyDiv>Hello <span role="img" aria-label="wave">👋</span></BouncyDiv>
    </blockquote>
    </div>
 
  )
}

export default About;
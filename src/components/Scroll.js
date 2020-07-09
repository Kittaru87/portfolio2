import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './Scroll.css';

const ScrollUp = () =>{

  const [scroll, setScroll] = useState(false)

  const checkScrollTop = () => {
    if (!scroll && window.pageYOffset > 400){
      setScroll(true)
    } else if (scroll && window.pageYOffset <= 400){
      setScroll(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <FaArrowCircleUp className="scrollTop" onClick={scrollToTop} style={{height: 40, marginBottom: "20px", display: scroll ? 'flex' : 'none'}} />
        );
}

export default ScrollUp;
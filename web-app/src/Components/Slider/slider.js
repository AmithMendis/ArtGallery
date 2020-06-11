import React from "react";
import "./slider.css";

const Slider = () => {
  
  const auto = true; // Auto scroll
  const intervalTime = 5000;
  let slideInterval;

  const nextSlide = () => {
    const slides = document.querySelectorAll(".slide");
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add("current");
    } else {
      slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
  };

  const prevSlide = () => {
    const slides = document.querySelectorAll(".slide");
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add("current");
    } else {
      slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
  };

  // Button events
  const nextButtonClick = () => {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  const prevButtonClick = () => {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  
  return (
    <div>
      <div className="slider">
        <div className="slide current">
          <div className="content">
            <h1>Slide One</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
              maxime, voluptatibus labore doloremque vero!
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h1>Slide Six</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
              maxime, voluptatibus labore doloremque vero!
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h1>Slide Six</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
              maxime, voluptatibus labore doloremque vero!
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h1>Slide Six</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
              maxime, voluptatibus labore doloremque vero!
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h1>Slide Six</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
              maxime, voluptatibus labore doloremque vero!
            </p>
          </div>
        </div>
        
      </div>
      <div className="buttons">
        <button id="prev" onClick={prevButtonClick}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button id="next" onClick={nextButtonClick}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );

  
};

export default Slider;

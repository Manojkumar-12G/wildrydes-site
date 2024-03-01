import React, { useState,useEffect } from 'react';
import './Carousel.css'; // Import the CSS file

function Carousel({ items })  {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      // Start automatic scrolling when not hovered
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      }, 3000); // Adjust the interval as needed (in milliseconds)
    }

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount or hover
    };
  }, [isHovered, items.length]);

  const handleHover = () => {
    setIsHovered((prev) => !prev);
  };


  function handleDotClick  (index)  {
    setActiveIndex(index);
  };

  function handlePrev()  {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  function handleNext(){
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handleReadMoreClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

 const descriptionbody=activeIndex === expandedIndex ? items[activeIndex].body : (items[activeIndex].body).slice(0,150);

  return (
    <div className={`carousel ${isHovered ? 'paused' : ''}`} onMouseOver={handleHover} onMouseOut={handleHover}>
      <div className="carousel-header">{items[activeIndex].header}</div>
      <div className="carousel-body">{descriptionbody}</div>
      <button className="read-more" onClick={() => handleReadMoreClick(activeIndex)}>
        {activeIndex === expandedIndex ? 'Read Less' : 'Read More'}
      </button>
      <div className="carousel-dots" onMouseEnter={handleHover} onMouseLeave={handleHover} >
        {items.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''} carousel-item`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
         &larr;
      </button>
      <button className="next" onClick={handleNext}>
       &rarr;
      </button>
    </div>
  );
};

export default Carousel;

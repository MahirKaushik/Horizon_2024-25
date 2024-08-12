/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Card from './Card'; // Import your existing Card component


const Carousel = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cardData.length - 1));
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < cardData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className=" text-slate-600 carousel-container relative overflow-hidden flex">
      <button className="carousel-button left absolute top-1/2 -translate-y-1/2 cursor-pointer w-[88px] h-[88px] z-[10] left-[2.8%]" onClick={goLeft}>
        <img src="public\Group 35794.png" alt="<" />
      </button>
     
        <div className="carousel-content w-screen  flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 5*(100 / cardData.length)}%)` }}>
          {cardData.map(( index) => (
            <div className="carousel-myitem  my-[150px] flex justify-center " key={index}>
              <Card /> 
            </div>
          ))}
        </div>
      
      <button className="carousel-button right absolute top-1/2 -translate-y-1/2 cursor-pointer w-[88px] h-[88px] z-[10] right-[2.8%]" onClick={goRight}>
        <img src="public\Group 35793.png" alt=">" />
      </button>
    </div>
  );
};

export default Carousel;

import React from "react";
import { useState } from "react";
import Left from "../../../assets/img/Left.svg";
import Right from "../../../assets/img/Right.svg";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  /*ternaire*/

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="SliderStyle">
      <div
        style={{ display: slides.length === 1 ? "none" : "block" }}
        id="LeftArrow"
        className="LeftArrow"
        onClick={goToPrevious}
      >
        <img src={Left} alt="Gauche" />
      </div>
      <div
        style={{ display: slides.length === 1 ? "none" : "block" }}
        id="RightArrow"
        className="RightArrow"
        onClick={goToNext}
      >
        <img src={Right} alt="Droite" />
      </div>
      <div style={slideStyles} className="slideStyles"></div>
      <p
        style={{ display: slides.length === 1 ? "none" : "block" }}
        id="Compteur"
        className="CompteurImg"
      >
        {currentIndex + 1}/{slides.length}
      </p>
    </div>
  );
};

export default ImageSlider;

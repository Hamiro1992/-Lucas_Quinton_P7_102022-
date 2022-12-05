import React from "react";
import ImageSlider from "./ImageSlider";

const SlideShow = ({ logement }) => {
  let slides = [];
  for (let picture of logement.pictures) {
    slides.push({ url: picture });
  }

  return (
    <div>
      <div className="slideShow">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default SlideShow;

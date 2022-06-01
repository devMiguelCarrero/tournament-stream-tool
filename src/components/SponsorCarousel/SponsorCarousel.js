import "./SponsorCarousel.scss";

import React, { useState, useEffect } from "react";
import { ImageData } from "./ImagesData";

const SponsorCarousel = (props) => {
  const [imageCarousel, setImageCarousel] = useState(
    ImageData.map((image, index) => {
      return { image: image, selected: index === 0 };
    })
  );
  const [imageCounter, setImageCounter] = useState(0);

  useEffect(() => {
    const dataInterval = setInterval(async () => {
      setImageCounter((prevCounter) => {
        let newCounter = prevCounter >= ImageData.length - 1 ? -1 : prevCounter;
        newCounter++;
        return newCounter;
      });
    }, props.transitionTime);
    return () => clearInterval(dataInterval);
  }, [imageCounter, setImageCounter]);

  useEffect(() => {
    setImageCarousel((prevCarousel) => {
      const counter = imageCounter >= 0 ? imageCounter : 0;
      const newCarousel = [...prevCarousel];
      const prevSelectedIndex = newCarousel.findIndex(
        (image) => image.selected === true
      );
      newCarousel[prevSelectedIndex].selected = false;
      newCarousel[counter].selected = true;

      return newCarousel;
    });
  }, [setImageCarousel, imageCounter]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 4000,
    //adaptiveHeight: true,
  };

  return (
    <div className="sponsor-carousel">
      {imageCarousel.map((image) => {
        return (
          <img
            src={image.image}
            className={`sponsor-carousel__image ${
              image.selected && `sponsor-carousel__image--selected`
            }`}
          />
        );
      })}
    </div>
  );
};
export default SponsorCarousel;

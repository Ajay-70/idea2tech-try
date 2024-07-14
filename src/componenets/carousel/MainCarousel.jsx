import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./MainCarousel.css"; // Import the CSS file

const MainCarousel = ({ images }) => {
  const items = images.map((image, index) => (
    <div className="item" data-value={index + 1} key={index}>
      <img
        src={image}
        alt={`Carousel item ${index + 1}`}
        className="carousel-image"
      />
    </div>
  ));

  return (
    <div className="p-5">
      <AliceCarousel
        // mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;

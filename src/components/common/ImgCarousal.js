import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImgCarousal = ({ images, alt }) => {
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      stopOnHover={true}
      dynamicHeight={false}
      showStatus={false}
    >
      {images.map((img) => (
        <div key={img}>
          <img className="rounded" src={img} alt={alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousal;

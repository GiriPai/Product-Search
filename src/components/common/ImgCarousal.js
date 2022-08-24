import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <img
            className="rounded"
            src={img}
            alt={alt}
            height={"280px"}
            width={"auto"}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousal;

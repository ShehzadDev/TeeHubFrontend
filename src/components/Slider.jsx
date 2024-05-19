import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "./Heading";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://source.unsplash.com/random",
  },

  //Second image url
  {
    url: "https://source.unsplash.com/random",
  },
  //Third image url
  {
    url: "https://source.unsplash.com/random",
  },

  //Fourth image url
  {
    url: "https://source.unsplash.com/random",
  },
];
const Slider = () => {
  return (
    <div className="parent container mx-auto mt-44">
      <div className="mb-28">
        <Heading text="Products to Customize" />
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        className="mb-16 filter drop-shadow-md"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider h-full py-10" key={index}>
              <img
                className="h-72 w-52 mx-auto rounded-2xl"
                height={120}
                src={imageUrl.url}
                alt="image"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;

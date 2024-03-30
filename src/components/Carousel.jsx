/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images]);

  // Check if images is not an array or if it's empty
  if (!Array.isArray(images) || images.length === 0) {
    console.error("Images prop must be a non-empty array.");
    return null;
  }

  return (
    <div
      id="controls-carousel"
      className="relative px-4 sm:px-6 lg:px-20 h-80 sm:h-96 md:h-128 rounded-lg pt-12" // Adjusted height to be 3/4 of total height
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-80 sm:h-96 md:h-128 overflow-hidden rounded-lg">
        {" "}
        {/* Adjusted height to be 3/4 of total height */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "" : "opacity-0"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
            style={{ height: "75%" }} // Adjusted image height to be 3/4 of the carousel wrapper height
          >
            <img
              src={image}
              className="absolute block w-full h-full object-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" // Adjusted image size
              alt={`Carousel ${index + 1}`}
            />
          </div>
        ))}
        {/* Slider controls */}
        <button
          type="button"
          className="text-purple-500 absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          <MdNavigateBefore size={40} />
          {/* Previous button icon */}
        </button>
        <button
          type="button"
          className="text-purple-500 absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          <MdNavigateNext size={40} />
          {/* Next button icon */}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute mt-6 z-30 flex -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex
                ? "bg-purple-500"
                : "bg-gray-300 border-[1px] border-purple-500"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

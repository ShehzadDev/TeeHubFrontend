import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    title: "Lead Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt fugit rem veritatis expedita reiciendis aliquid omnis autem impedit maxime, itaque facere voluptates unde, officia doloribus magni saepe non similique dicta eos fuga, a temporibus enim inventore. Inventore, culpa tempora? Officia consectetur animi ratione doloribus praesentium laborum eum accusamus, ",
    imageUrl: "https://source.unsplash.com/random", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Haider Ali",
    title: "Student",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius laudantium vero, sequi veritatis vel maxime iusto. Consectetur voluptas iure, perferendis neque harum fuga molestiae rem pariatur sunt necessitatibus corrupti enim molestias earum sit nesciunt, nisi dignissimos sapiente asperiores nulla similique distinctio commodi! Eligendi, ut, magnam aut quibusdam impedit soluta officiis ex, dolorem nihil quas doloribus qui nesciunt sunt neque corrupti.",
    imageUrl: "https://source.unsplash.com/random", // Replace with actual image URL
  },

  // Add more testimonials as needed
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-900 my-20">
        Testimonials
      </h2>
      <div className="relative flex items-center shadow-inner rounded-md p-20 ">
        <button
          onClick={previousTestimonial}
          className="absolute left-10 text-3xl text-basic transition-all hover:bg-black hover:bg-opacity-30 rounded-3xl px-4 py-1"
        >
          ❮
        </button>
        <div className="w-full flex flex-col items-center">
          <img
            src={testimonials[index].imageUrl}
            alt={testimonials[index].name}
            className="w-36 h-36 rounded-full object-cover shadow-lg mx-auto absolute top-28"
          />
          <div className="flex flex-col items-center justify-start mt-28 h-96 px-48 text-sm">
            <h3 className="font-semibold text-xl text-gray-800 mt-24">
              {testimonials[index].name}
            </h3>
            <p className="text-sm text-gray-600 my-4">
              {testimonials[index].title}
            </p>
            <p className="text-md text-gray-700 mt-4 px-6 text-center">
              {testimonials[index].text}
            </p>
            <div className="w-4/6 h-4-2/6 absolute m-auto mt-6 rounded-2xl drop-shadow-lg-1 -z-30 bg-white"></div>
            <div className="w-4-1/6 h-4-1/6 absolute m-auto mt-3 rounded-2xl drop-shadow-lg-1 -z-20 bg-white"></div>
            <div className="w-4-2/6 h-4/6 absolute m-auto rounded-2xl drop-shadow-lg-1 -z-10 bg-white"></div>
            <div className="w-basic-circle h-basic-circle absolute top-0 -z-50 right-20 rounded-full bg-basic"></div>
          </div>
        </div>
        <button
          onClick={nextTestimonial}
          className="absolute right-10 text-3xl text-basic hover:bg-black hover:bg-opacity-30 rounded-3xl px-4 py-1"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Testimonials;

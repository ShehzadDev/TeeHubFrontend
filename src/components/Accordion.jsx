import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    { title: "Size and Fit Guide", content: "Content for Size and Fit Guide" },
    {
      title: "Quality and Materials",
      content: "Content for Quality and Materials",
    },
    {
      title: "Return and Exchange Policy",
      content: "Content for Return and Exchange Policy",
    },
    { title: "Courier Service", content: "Content for Courier Service" },
  ];

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Faqs</h2>
      {data.map((item, index) => (
        <div key={index} className="mb-4 rounded-md overflow-hidden ">
          <button
            className="w-full bg-purple-600 text-white py-3 px-4 text-left flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <svg
              className={`w-6 h-6 transform transition-transform duration-500 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="bg-gray-100 p-4">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

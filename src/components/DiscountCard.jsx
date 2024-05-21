import React from "react";

const BulkOrdersDiscount = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md my-16">
      <h2 className="text-2xl font-bold text-center mb-6">
        Bulk Orders and Discounts
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <img
          src="../../public/Blue Yellow Modern Dynamic Sale Discount Campaign Online Shoping Instagram Post 1.png" // Replace with actual image source
          alt="Discount"
          className="w-60 h-60 rounded-md mb-4 md:mb-0"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Unlock Exclusive Discounts
          </h3>
          <p className="text-gray-700">
            Planning to order in quantity? Enjoy significant savings with our
            exclusive bulk order discounts. Design with ease in Figma and
            explore the benefits of ordering in larger quantities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BulkOrdersDiscount;

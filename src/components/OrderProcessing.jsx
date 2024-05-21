import React from "react";

const OrderProcessing = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-center mb-10">Order Processing</h2>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="mt-2 text-sm">1. Receive Order</p>
          </div>
          <div className="w-8 h-0.5 bg-purple-600"></div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="mt-2 text-sm">2. Process JIT</p>
          </div>
          <div className="w-8 h-0.5 bg-purple-600"></div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-purple-600 text-purple-600 rounded-full">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            </div>
            <p className="mt-2 text-sm">3. Packing</p>
          </div>
          <div className="w-8 h-0.5 bg-gray-300"></div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 text-gray-300 rounded-full">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
            <p className="mt-2 text-sm">4. Shipment</p>
          </div>
          <div className="w-8 h-0.5 bg-gray-300"></div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 text-gray-300 rounded-full">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
            <p className="mt-2 text-sm">5. Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessing;

import { useState, useEffect } from "react";

function HeroServies() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-24">
        <div className="mx-80">
          <h2 className="text-3xl text-center">Custom Designs Services</h2>
          <div className="grid grid-cols-2 mx-auto pt-14 gap-10">
            <div className="flex flex-col items-start justify-center gap-10">
              <h2 className="text-3xl font-light">T-Shirt Design Studio</h2>
              <p className="text-sm">
                Engage in real-time design sessions to bring your ideas to life.
              </p>
            </div>
            <img
              src="../../public/t-shirt-hanger.png"
              alt="t shirt with hanger"
              className="w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroServies;

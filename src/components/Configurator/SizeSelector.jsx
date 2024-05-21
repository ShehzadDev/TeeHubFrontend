import React, { useState } from "react";
import Heading from "../Heading";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";

const SizeSelector = ({ onAddToCart, onDiscard }) => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(10000, e.target.value));
    setQuantity(value);
  };

  const handleDiscard = () => {
    setSize("");
    setQuantity(1);
    onDiscard();
  };

  const handleAddToCart = () => {
    onAddToCart({ size, quantity });
  };

  return (
    <div className="container max-w-md mx-auto p-4">
      <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md">
        <Heading className="text-center" text="Size Selector" />
        <div className="w-full p-2 border rounded">
          <label htmlFor="size" className="block mb-2">
            Select T-shirt Size:
          </label>
          <select
            id="size"
            value={size}
            onChange={handleSizeChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a size</option>
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
          </select>
        </div>
        <div className="w-full p-2 border rounded">
          <label htmlFor="quantity" className="block mb-2">
            Number of T-shirts:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full p-2 border rounded"
            min="1"
            max="10000"
            placeholder="Enter quantity"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleDiscard}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FiTrash2 className="mr-2" />
            Discard
          </button>
          <a
            href="/payment"
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

SizeSelector.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
};

export default SizeSelector;

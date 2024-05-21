import React from "react";

const OrderSummary = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Order</h2>
      <p className="text-gray-600 mb-4">
        Get started by choosing one of the actions below.
      </p>
      <div className="border-t border-b py-4">
        <div className="flex justify-between mb-2">
          <span>Vintage Sport Jacket</span>
          <span>$165.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Size: Medium</span>
          <span>Color: Red</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Quantity: 2</span>
          <span>$330.00</span>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$330.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$44.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Vat.tax</span>
          <span>$64.00</span>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>$438.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

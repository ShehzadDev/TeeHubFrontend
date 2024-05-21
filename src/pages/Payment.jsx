import React from "react";
import ContactInformation from "../components/Checkout/ContactInformation";
import DeliveryInformation from "../components/Checkout/DeliveryInformation";
import OrderSummary from "../components/Checkout/OrderSummary";
import Button from "../components/Sign/Button";

const Payment = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <div className="flex">
        <div className="w-2/3 pr-8">
          <ContactInformation />
          <DeliveryInformation />
          <Button
            text="Buy"
            styleClass="bg-purple-600 text-white w-full mt-4"
          />
        </div>
        <div className="w-1/3 pl-8">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Payment;

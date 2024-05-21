import React from "react";
import TextInput from "../Sign/TextInput";

const DeliveryInformation = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <TextInput label="Delivery Date" type="text" placeholder="DD/MM/YYYY" />
        <TextInput label="Convenient Time" type="text" placeholder="1pm-9pm" />
        <TextInput label="City" type="text" placeholder="Alabama" />
        <TextInput
          label="Address"
          type="text"
          placeholder="Click to find Address"
        />
        <TextInput label="Zip Code" type="text" placeholder="00000" />
      </div>
    </div>
  );
};

export default DeliveryInformation;

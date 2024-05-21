import React from "react";
import TextInput from "../Sign/TextInput";

const ContactInformation = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Contact Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <TextInput label="First Name" type="text" placeholder="First Name" />
        <TextInput
          label="Last Name"
          type="text"
          placeholder="Last Name e.g John, Mary"
        />
        <TextInput
          label="Email Address"
          type="email"
          placeholder="Your email@gmail.com"
        />
        <TextInput
          label="Phone Number"
          type="tel"
          placeholder="+1-(0000 000 0000)"
        />
      </div>
    </div>
  );
};

export default ContactInformation;

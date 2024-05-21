import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm("service_5rh203d", "template_u8rgmno", form.current, {
        publicKey: "OE0SD-WANcV3_9uFl",
      })
      .then(
        () => {
          toast.success("SUCCESS!");
          console.log("SUCCESS!");
        },
        error => {
          toast.error("FAILED...");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full bg-gray-200 p-8 rounded-lg shadow-md max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">Contact us</h2>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col justify-center"
      >
        <div className="mb-4">
          <input
            name="from_name"
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="from_name"
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            name="message"
          />
        </div>
        <div className="text-center self-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-basic-100 transition duration-500 text-white py-3 px-9 rounded-xl flex items-center justify-center"
          >
            <span>Send</span>
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;

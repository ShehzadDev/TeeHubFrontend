import React from "react";
import TextInput from "../components/Sign/TextInput";
import Button from "../components/Sign/Button";
import Link from "../components/Link";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Password reset email sent successfully!");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-purple-200 flex flex-col justify-center items-center p-8">
        <h1 className="text-white text-4xl mb-4">
          Need Custom T-Shirt Designs for your business?
        </h1>
        <h2 className="text-white text-2xl mb-4">
          Design Space will help you.
        </h2>
        <div className="text-white text-xl">Tee Hub</div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <Button
            text="Send Email"
            styleClass="bg-purple-600 text-white w-full mt-4"
          />
          <div className="text-center mt-4">
            Remember your password?{" "}
            <Link href="/signin" text="Login Here" isStyled />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

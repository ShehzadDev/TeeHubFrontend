import React, { useState } from "react";
import TextInput from "../components/Sign/TextInput";
import Button from "../components/Sign/Button";
import SocialButton from "../components/Sign/SocialButton";
import Divider from "../components/Sign/Divider";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import Link from "../components/Link";
import { loginUser } from "../api";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      if (response) {
        toast.success("Login successful!");
        // Handle successful login (e.g., redirect to another page)
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
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
        <h2 className="text-2xl font-bold mb-6">Sign-in</h2>
        <SocialButton
          text="Sign in with Google"
          icon={<FaGoogle className="text-blue-500" />}
        />
        <SocialButton
          text="Sign in with Facebook"
          icon={<FaFacebook className="text-blue-800" />}
        />
        <Divider />
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between items-center mb-4">
            <Link href="/reset-password" text="Reset Password" isStyled />
          </div>
          <Button text="Login" styleClass="bg-purple-600 text-white w-full" />
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link href="/signup" text="Signup Here" isStyled />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

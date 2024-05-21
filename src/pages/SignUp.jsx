import React, { useState } from "react";
import TextInput from "../components/Sign/TextInput";
import Button from "../components/Sign/Button";
import SocialButton from "../components/Sign/SocialButton";
import Divider from "../components/Sign/Divider";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "../components/Link";
import { signUpUser } from "../api";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(0); // Assuming 0 is the default user type

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(userName, email, password, userType);
      if (response) {
        toast.success("Sign up successful!");
        // Handle successful sign-up (e.g., redirect to login page)
      } else {
        toast.error("Sign up failed. Please try again.");
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
        <h2 className="text-2xl font-bold mb-6">Sign up</h2>
        <SocialButton
          text="Sign up with Google"
          icon={<FaGoogle className="text-blue-500" />}
        />
        <SocialButton
          text="Sign up with Facebook"
          icon={<FaFacebook className="text-blue-800" />}
        />
        <Divider />
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />
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
          <Button
            text="Sign Up"
            styleClass="bg-purple-600 text-white w-full mt-4"
          />
          <div className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/signin" text="Login Here" isStyled />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

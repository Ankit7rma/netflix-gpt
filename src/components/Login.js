import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form className="text-white bg-opacity-80 w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 rounded-lg">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-4 my-3 w-full bg-gray-700 "
        />}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 "
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered Sign In Now"} 
        </p>
      </form>
    </div>
  );
};

export default Login;

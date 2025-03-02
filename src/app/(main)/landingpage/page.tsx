import React from "react";
import backgroundImage from "@/assets/images/background1.jpg";

const Page = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Empower Law PH
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Your go-to platform for legal research and insights.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Page;

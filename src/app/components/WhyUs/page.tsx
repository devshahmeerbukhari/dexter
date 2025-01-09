'use client';
import React from "react";
import Image from "next/image";
import { CheckCircleOutline } from "@mui/icons-material";

function WhyUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-16 bg-white-100 relative">
      {/* Left Section */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/assets/images/team.jpeg" // Replace with your image path
          alt="Office Environment"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 p-6 md:pl-16">
        <p className="text-blue-500 uppercase font-bold tracking-widest text-sm">
          Why Choose Us
        </p>
        <h2 className="text-4xl font-extrabold mt-4 mb-6">
          Elevate Your Achievements Using Premier IT Solutions
        </h2>
        <p className="text-gray-700 mb-8">
          At Dexterz Sol, we are committed to helping you achieve your goals
          through cutting-edge software and IT services. Our dedication to
          quality and innovation sets us apart.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <CheckCircleOutline className="text-blue-500 mr-4" />
            <p className="font-semibold">Quality Materials</p>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <CheckCircleOutline className="text-blue-500 mr-4" />
            <p className="font-semibold">Best Services</p>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <CheckCircleOutline className="text-blue-500 mr-4" />
            <p className="font-semibold">24/7 Call Support</p>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <CheckCircleOutline className="text-blue-500 mr-4" />
            <p className="font-semibold">Proven Excellence</p>
          </div>
        </div>
      </div>

      {/* Decorative Text */}
      {/* <p className="absolute text-gray-300 text-9xl max-h-[50] font-bold top-1/4 left-8 transform rotate-90 hidden md:block">
        Dexterz Sol.
      </p> */}
    </div>
  );
}

export default WhyUs;

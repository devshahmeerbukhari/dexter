"use client";
import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

const WhoWeAre = () => {
  return (
    <section className="container mx-auto px-5 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <Image
            src="/assets/images/logo/building.jpg"
            alt="Building"
            className="rounded-lg shadow-lg"
            width={500} // Set width
            height={300} // Set height
            style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
            priority
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-blue-500 font-semibold mb-2 uppercase text-sm">
            Who We Are
          </p>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug mb-4">
            Ensuring Your Success Through Reliable IT Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            At Dexterz Sol, our focus is on delivering IT solutions that ensure
            your success. We prioritize clarity, precision, and effectiveness in
            every project we undertake.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">&#10003;</span>
              <p className="text-gray-600">Accurate Testing Processes</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">&#10003;</span>
              <p className="text-gray-600">100+ Successful Projects Done</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">&#10003;</span>
              <p className="text-gray-600">100% Satisfaction Guarantee</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">&#10003;</span>
              <p className="text-gray-600">Technology Consultancy</p>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-1">Quality Services</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{
                  width: "0%",
                  animation: "fillProgress 2s forwards",
                }}
              ></div>
            </div>
            <p className="text-gray-500 text-sm mt-1 text-right">100%</p>
          </div>

          {/* Button */}
          <a
            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
            href="/about"
          >
            About Us →
          </a>
        </div>
      </div>
      {/* Define the animation in a style tag */}
      <style jsx>{`
        @keyframes fillProgress {
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;

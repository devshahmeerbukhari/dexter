"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { VerifiedUser } from "@mui/icons-material";
import WhoWeAre from "./components/whoWeAre/page";
import { useEffect } from "react";
import ServicesPage from "./components/services/page";
import WhyUs from "./components/WhyUs/page";
import ScheduleACall from "./components/scheduleACall/page";


function HomePage() {
  const countRef = useRef(null);

  // Start the count-up animation when the page loads
  const startCountUp = () => {
    const target = 5; // Target number
    const duration = 2000; // Duration in milliseconds
    const interval = 50; // Update interval in milliseconds
    const steps = duration / interval;
    const increment = target / steps;

    let currentValue = 0;

    const updateCounter = () => {
      currentValue += increment;
      if (countRef.current) {
        countRef.current.textContent = `${Math.min(Math.ceil(currentValue), target)}+`;
      }
      if (currentValue < target) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  };

  useEffect(() => {
    startCountUp(); // Trigger the animation on mount
  }, []);

  return (
    <>
      <div
        className="relative z-40 min-h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/logo/home2-bg.jpg')",
        }}
      >
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left section */}
          <div className="flex-1 mt-20 text-white p-6 flex flex-col items-start justify-center md:pl-24">
            <p
              className="uppercase font-bold"
              style={{ letterSpacing: "0.5em" }}
            >
              Turning ideas into digital reality.
            </p>
            <h1 className="font-bold text-4xl md:text-6xl mt-4 mb-4">
              We convert concepts into technology
            </h1>
            <p className="font-bold mt-4">
              From visionary ideas to fully realized software solutions, Dexterz
              Sol transforms your concepts into cutting-edge technology that
              drives growth and innovations.
            </p>
            <Link
              href="/components/contact"
              className="px-4 py-2 mt-10 bg-blue-50 bg-opacity-80 text-black rounded-lg shadow-2xl hover:bg-slate-500 hover:text-white hover:bg-opacity-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              Schedule strategy call
            </Link>
          </div>

          {/* Right section */}
          <div className="flex-1 text-center text-white p-6 flex items-center justify-center">
            {/* Content for the right section */}
            <div className="flex flex-row p-10 bg-blue-500 rounded-lg bg-opacity-50">
              <VerifiedUser sx={{ fontSize: "5rem" }} />
              <p className="flex font-bold flex-col">
                <span
                  ref={countRef}
                  className="text-4xl"
                  style={{ display: "inline-block" }}
                >
                  0+
                </span>
                <span>Years Working Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <div className="bg-gray-100 rounded-lg pb-20 shadow-md">
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-3xl font-bold mb-6">Exclusive Services</h1>
          <div className="w-3/4 text-center">
            <p className="text-lg mb-6">
              Explore our wide range of services tailored to meet your needs and
              drive your success.
            </p>
          </div>
          <ServicesPage viewType="Home" />
        </div>
      </div>
      <WhyUs />
      {/* <div className="bg-gray-100 rounded-lg pb-20 shadow-md">
        <div className="flex flex-col items-center justify-center pt-10 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Explore Our Recent Projects
          </h1>
          <div className="w-3/4 text-center">
            <p className="text-lg mb-6">
              Crafting success through software, here’s what we’ve built so far.
            </p>
          </div>
        </div>
        <div>
          <ProjectPage viewType="Home" />
        </div>
      </div> */}
      <ScheduleACall />
    </>
  );
}

export default HomePage;

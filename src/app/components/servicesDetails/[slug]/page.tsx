"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { servicesArr } from "../../services/page";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ServicesType } from "../../../../../types/types";
import Link from "next/link";

function Page() {
  const [Slug, setSlug] = useState<string | null>(null);
  const [Arr, setArr] = useState<ServicesType[]>(); // State to hold services data

  const setServicesDataAndSlug = async () => {
    await setArr(servicesArr);
    const slugFromPath = pathname?.split("/").pop();
    await setSlug(slugFromPath || null);
  };

  const pathname = usePathname(); // Get the current pathname
  useEffect(() => {
    setServicesDataAndSlug();
  }, [pathname]);

  const currentService = Arr?.find((items) => items.slug === Slug); // Find the matching service

  return (
    <>
      {/* Service Header Section */}
      <div className="flex flex-col lg:flex-row bg-white mx-4 lg:mx-20 min-h-[40vh] justify-center items-center gap-8 lg:gap-16 py-10">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">
            {currentService?.title}
          </h1>
          <p className="mt-5 text-lg lg:text-2xl max-w-[550px] mx-auto lg:mx-0">
            {currentService?.miniDetails}
          </p>
        </div>
        <div className="max-w-7xl lg:w-1/3 flex justify-center">
          <DotLottieReact
            src={currentService?.lottieImg} // Provide a default fallback URL if needed
            loop
            autoplay
            width={501}
            height={501}
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService?.benefits?.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center"
              >
                {/* Benefit Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-4xl mb-4">
                  {benefit.icon}
                </div>
                {/* Benefit Heading */}
                <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                  {benefit.heading}
                </h3>
                {/* Benefit Details */}
                <p className="text-gray-600 text-sm lg:text-base">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 bg-gray-50">
        <Link
          href={"/components/contact"}
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 py-3 px-8 rounded-full text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 10c0 3.866-3.582 7-8 7a8.767 8.767 0 01-3.536-.728L2 17l1.5-3.872A8.091 8.091 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
          </svg>
          Get in Touch
        </Link>
      </div>
    </>
  );
}

export default Page;

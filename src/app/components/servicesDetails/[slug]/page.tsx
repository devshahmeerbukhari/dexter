"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { servicesArr } from "../../services/page";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ServicesType } from "../../../../../types/types";

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
          <h1 className="text-4xl lg:text-6xl font-bold">{currentService?.title}</h1>
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
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">Key Benefits</h2>
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
                <h3 className="text-xl lg:text-2xl font-semibold mb-4">{benefit.heading}</h3>
                {/* Benefit Details */}
                <p className="text-gray-600 text-sm lg:text-base">{benefit.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

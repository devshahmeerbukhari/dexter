import React from "react";
import Image from "next/image"; // Using Next.js Image component for optimized images
import DevelopmentProcess from "../developmentProcess/page";
import WhyChooseUs from "../whyChooseUs/page";

function AboutPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-[90vh] mx-auto px-4 w-full max-w-[85%]">
        <div className="flex flex-col my-10 lg:flex-row items-center md:items-center gap-10 w-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-full md:w-2/5">
            <Image
              src="/assets/images/logo/deal-done.jpg"
              alt="Deal-done Logo"
              className="h-auto object-contain mx-auto md:mx-0"
              width={800} // Maintain the current size
              height={600} // Maintain the current size
              style={{ width: "auto", height: "auto" }} // Ensure aspect ratio is maintained
              priority // Optimize LCP performance
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left w-full px-4 md:px-8 lg:px-0">
            <p className="text-blue-600 uppercase font-bold mb-2 text-sm md:text-base">
              About Us
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
              Choosing the Right IT Partner
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              At Dexterz Sol, we believe in more than just delivering IT
              services; we build solutions that drive real business growth. Our
              team is dedicated to transforming your vision into innovative and
              impactful software that meets your unique needs.
            </p>
            <div className="space-y-6 w-full">
              {/* Business Growth */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <Image
                  src="/assets/images/logo/growth-icon.png"
                  alt="Growth Icon"
                  className="h-auto max-h-10"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
                    Business Growth
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                    With our expertise and commitment to excellence, we empower
                    businesses to scale and achieve their goals through tailored
                    software solutions.
                  </p>
                </div>
              </div>
              {/* Technology Consultancy */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <Image
                  src="/assets/images/logo/technology-icon.png"
                  alt="Technology Icon"
                  className="h-auto max-h-10"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
                    Technology Consultancy
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                    Our consultancy services provide you with strategic insights
                    and cutting-edge technology advice, ensuring your business
                    stays ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <DevelopmentProcess />
    </>
  );
}

export default AboutPage;

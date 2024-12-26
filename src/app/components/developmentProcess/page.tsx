import React from "react";

const DevelopmentProcess = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h4 className="text-blue-600 font-medium uppercase">Working Process</h4>
        <h2 className="text-3xl font-bold">Our Development Process</h2>
      </div>
      <div className="flex justify-center items-start gap-8 px-6">
        {/* Step 1 */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
              <span className="text-xl text-blue-600 font-bold">1</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Define Requirements</h3>
          <p className="text-gray-600 mt-2">
            In this crucial phase, we collaborate with you to understand your
            unique needs and challenges, ensuring every requirement is clearly
            defined and aligned with your vision.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
              <span className="text-xl text-blue-600 font-bold">2</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Design & Prototyping</h3>
          <p className="text-gray-600 mt-2">
            We bring your ideas to life through intuitive design and interactive
            prototypes, creating a user-centric experience that reflects your
            brand and goals.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
              <span className="text-xl text-blue-600 font-bold">3</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Final Solution</h3>
          <p className="text-gray-600 mt-2">
            Our expert developers transform prototypes into robust, scalable
            software solutions, delivering a final product that is secure,
            reliable, and tailored to your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;

import React from "react";

function WhyChooseUs() {
  const features = [
    {
      icon: "🗂️", // Replace with your actual icons or images
      title: "Commercial Service",
      description:
        "Unlocking business potential with tailored software solutions.",
    },
    {
      icon: "🎯",
      title: "Mission Statement Dexterz Sol.",
      description:
        "Driving innovation and excellence to empower your digital transformation.",
    },
    {
      icon: "🛡️",
      title: "Safety And Reliability",
      description:
        "Built on trust, secured by design—your peace of mind is our priority.",
    },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#0a0a23] to-[#3b5bff]">
      <div className="container mx-auto px-8 py-16">
        <div className="text-center">
          <p className="text-blue-400 font-semibold tracking-wide mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl font-bold text-white mb-8">
            What’s Make Us Different
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-[#1a1a2e] p-6 rounded-lg shadow-lg"
            >
              <div className="text-5xl text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

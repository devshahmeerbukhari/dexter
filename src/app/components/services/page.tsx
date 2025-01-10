"use client";
import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "../sercivesCard/page";
import { client } from "@/sanity/lib/client";
import { Service } from "../../../../types/types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

interface ServicesPageProps {
  viewType: "Home" | "Services"; // Prop to determine the layout (Home or Services view)
}

interface ServiceType {
  title: string;
  tags: string[];
  lottieImg: string;
  url: string;
}

function ServicesPage({ viewType = "Services" }: ServicesPageProps) {
  const [services, setServices] = useState<Service[]>([]); // State to store the list of services
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the horizontal scrolling carousel

  const ser: ServiceType[] = [
    {
      title: "App Development",
      tags: ["Custom Apps", "iOS & Android", "User-Friendly"],
      lottieImg:
        "https://lottie.host/61621bcf-2bca-443c-9a5d-0a955f562bf8/ad85gOTX4h.lottie",
      url: "/components/servicesDetails/AppDevelopment",
    },
    {
      title: "Generative AI",
      tags: ["AI-Powered Solutions", "Machine Learning", "Cutting-Edge Tech"],
      lottieImg:
        "https://lottie.host/18c67767-e41a-477f-93cf-790920be4def/3qw6cOiCXq.lottie",
      url: "/components/servicesDetails/GenerativeAI",
    },
    {
      title: "Web Development",
      tags: ["Responsive Design", "SEO-Optimized", "Fast Loading"],
      lottieImg:
        "https://lottie.host/21454b07-1152-4135-9d23-148900b7812b/uDxNM1EnZt.lottie",
      url: "/components/servicesDetails/WebDevelopment",
    },
    {
      title: "Database Security",
      tags: ["Data Encryption", "Access Control", "Secure Architecture"],
      lottieImg:
        "https://lottie.host/0d1fcf45-e2cb-447d-ad2b-98c40c8a1fb9/sg9mYTAEsp.lottie",
      url: "/components/servicesDetails/DatabaseSecurity",
    },
    {
      title: "Blockchain Development",
      tags: ["Smart Contracts", "Decentralized Apps", "Secure Transactions"],
      lottieImg:
        "https://lottie.host/0bbca5ce-f628-4e5d-a730-29b4f8c0c8d0/eSsaAJGhLZ.lottie",
      url: "/components/servicesDetails/BlockchainDevelopment",
    },
    {
      title: "UI/UX Design",
      tags: ["Intuitive Design", "Enhanced Usability", "Modern Aesthetics"],
      lottieImg:
        "https://lottie.host/5ec4fda7-7e1b-4bd7-b811-85c9c6da83c2/5Eo8m30kcz.lottie",
      url: "/components/servicesDetails/UIUXDesign",
    },
    {
      title: "Game Development",
      tags: ["Immersive Experiences", "Cross-Platform", "Advanced Graphics"],
      lottieImg:
        "https://lottie.host/d54fad76-4ee7-4210-9dbb-24d27764fb59/Am6ob0nDN0.lottie",
      url: "/components/servicesDetails/GameDevelopment",
    },
  ];

  // Cache settings
  const CACHE_KEY = "servicesCache"; // Key to store/retrieve data in localStorage
  const CACHE_DURATION = 5 * 60 * 1000; // Cache duration (5 minutes in milliseconds)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY); // Check if data exists in cache
        const cache = cachedData ? JSON.parse(cachedData) : null;

        if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
          // If cache is valid, use cached data
          setServices(cache.data);
        } else {
          // Otherwise, fetch fresh data from the Sanity API
          const data = await client.fetch(`*[_type == "servicesSchema"]`);
          const enrichedServices = data.map((service: Service) => {
            const match = ser.find((item) => item.title === service.name); // Match by name
            return {
              ...service,
              tags: match ? match.tags : [],
              lottieImg: match ? match.lottieImg : "",
            };
          });
          setServices(enrichedServices); // Set the enriched services

          // Store the fetched data in localStorage with a timestamp
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data: enrichedServices, timestamp: Date.now() })
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      {viewType === "Home" ? (
        // Home view: Horizontal scrolling carousel
        <div className="relative max-w-screen-xl mx-auto px-4">
          {services.length > 0 ? (
            <div
              ref={carouselRef} // Reference to the carousel container
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {/* Map through the services and render each one as a card */}
              {services.map((service: Service, index: number) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] h-auto p-4 rounded-lg"
                >
                  <ServicesCard
                    name={service.name} // Service name
                    description={service.description} // Service description
                    image={service.image} // Service image
                    slug={service.slug?.current} // Slug for navigation
                  />
                </div>
              ))}
            </div>
          ) : (
            // Display loading indicator while data is being fetched
            <div className="flex items-center justify-center w-full text-xl font-bold text-blue-500">
              Loading...
            </div>
          )}
        </div>
      ) : viewType === "Services" && services.length > 0 ? (
        <div className="from-blue-100 to-blue-50 bg-gradient-to-r min-h-[100vh] py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold mb-10">
              Our services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 flex items-center"
                >
                  {/* Service Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex gap-2 mb-4">
                      {/* Match and display tags */}
                      {ser
                        .find((item) => item.title === service.name)
                        ?.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="bg-black text-white px-4 py-2 rounded">
                        <Link href={"/components/contact"}>Let&apos;s chat</Link>
                      </button>
                      <button className="bg-gray-200 text-black px-4 py-2 rounded">
                        <Link
                          href={
                            ser.find((item) => item.title === service.name)
                              ?.url || "default-lottie-file-url" // Provide a default fallback URL if needed
                          }
                        >
                          Learn more
                        </Link>
                      </button>
                    </div>
                  </div>

                  {/* Lottie Animation */}
                  <div className="w-1/3 flex justify-center">
                    <DotLottieReact
                      src={
                        ser.find((item) => item.title === service.name)
                          ?.lottieImg || "default-lottie-file-url" // Provide a default fallback URL if needed
                      }
                      loop
                      autoplay
                      width={502}
                      height={502}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full text-xl font-bold text-blue-500">
          Loading...
        </div>
      )}
    </div>
  );
}

export default ServicesPage;

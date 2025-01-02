'use client';
import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "../sercivesCard/page";
import { client } from "@/sanity/lib/client";
import { Service } from "../../../../types/types";

interface ServicesPageProps {
  viewType: "Home" | "Services"; // Prop to determine the layout (Home or Services view)
}

function ServicesPage({ viewType = "Services" }: ServicesPageProps) {
  const [services, setServices] = useState<Service[]>([]); // State to store the list of services
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the horizontal scrolling carousel

  // Cache settings
  const CACHE_KEY = "servicesCache"; // Key for caching services data in localStorage
  const CACHE_DURATION = 5 * 60 * 1000; // Cache duration (5 minutes in milliseconds)

  useEffect(() => {
    // Function to fetch services data and handle caching
    const fetchData = async () => {
      try {
        // Retrieve cached data from localStorage
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cache = cachedData ? JSON.parse(cachedData) : null;

        if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
          // Use cached data if it's valid (within the cache duration)
          setServices(cache.data);
        } else {
          // Fetch fresh data from the Sanity API
          const data = await client.fetch(`*[_type == "servicesSchema"]`);
          setServices(data);

          // Store the fetched data in localStorage with a timestamp
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data, timestamp: Date.now() })
          );
        }
      } catch (error) {
        // Log any errors encountered during data fetching
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData on component mount
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
      ) : (
        // Services view: Grid layout for displaying services
        <div className="max-w-screen-xl mx-auto px-4 my-10 min-h-[100vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.length > 0 ? (
              // Map through the services and render each one as a card in a grid
              services.map((service: Service, index: number) => (
                <ServicesCard
                  key={index}
                  name={service.name} // Service name
                  description={service.description} // Service description
                  image={service.image} // Service image
                  slug={service.slug?.current} // Slug for navigation
                />
              ))
            ) : (
              // Display loading indicator if no services are available yet
              <div className="flex items-center justify-center w-full text-xl font-bold text-blue-500">
                Loading...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;

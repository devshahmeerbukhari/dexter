'use client'
import React, { useEffect, useState } from "react";
import ServicesCard from "../sercivesCard/page";
import { client } from "@/sanity/lib/client";
import { Service } from "../../../../types/types";

function ServicesPage() {
  const [projects, setProjects] = useState<Service[]>([]); // Initialize with an empty array
  const CACHE_KEY = "servicesCache";
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve cached data
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cache = cachedData ? JSON.parse(cachedData) : null;

        if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
          // Use cached data if it's still valid
          setProjects(cache.data);
          console.log("Using cached data");
        } else {
          // Fetch new data from the server
          const data = await client.fetch(`*[_type == "servicesSchema"]`);
          setProjects(data);

          // Save fetched data to cache with a timestamp
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data, timestamp: Date.now() })
          );
          console.log("Fetched new data and updated cache");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("PP: ", projects);

  return (
    <div>
      <div className="grid min-h-[70vh] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-20 m-28">
        {projects.length > 0 ? (
          projects.map((project: Service, index: number) => (
            <ServicesCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              slug={project.slug?.current}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full text-xl font-bold text-blue-500">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesPage;

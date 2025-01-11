"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { Service } from "../../../../types/types";
import { ImageSource } from "../../../../types/types";
import Image from "next/image";

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

const ServicesDetails = () => {
  const [project, setProject] = useState<Service | null>(null);
  const [projects, setProjects] = useState<Service[]>([]);
  const [slug, setSlug] = useState<string | null>(null);

  const CACHE_KEY = "servicesDetailsCache";
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  const pathname = usePathname(); // Get the current pathname (which includes the slug)

  // Fetching the services and caching them
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

  // Extract slug from the pathname or search params
  useEffect(() => {
    const slugFromPath = pathname?.split("/").pop();
    setSlug(slugFromPath || null);
  }, [pathname]);

  // Update the project state when 'slug' or 'projects' change
  useEffect(() => {
    if (slug && projects.length > 0) {
      const dataFind = projects.find(
        (data: Service) => data.slug.current === slug
      );
      setProject(dataFind || null); // Set the project or null if not found
    }
  }, [slug, projects]);

  const urlFor = (source: ImageSource) =>
    builder.image(source).width(800).url();

  return (
    <div className="p-6 mt-20 lg:p-12 min-h-[80vh]">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6 lg:p-12">
        {/* Responsive Layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              {project?.name || "The cornerstone of a digital enterprise"}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {project?.description ||
                "Gain a competitive edge in today’s fast-paced world of innovation, and meet business objectives effectively through advanced data platforms. We help businesses tackle issues related to data fragmentation, silos, scalability, and inefficient warehousing."}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project?.detail ||
                "With our data modernization solutions, organizations can unify, mobilize, govern, understand their data, and create a single source of truth."}
            </p>
          </div>
  
          {/* Image Content */}
          <div className="flex-1 flex justify-center items-center">
            {project?.image?.asset ? (
              <div className="relative w-auto h-auto overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={urlFor(project.image.asset)}
                  alt={project?.name || "Service Image"}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ) : (
              <div className="bg-gray-200 rounded-lg shadow-lg w-full h-96 flex items-center justify-center">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default ServicesDetails;
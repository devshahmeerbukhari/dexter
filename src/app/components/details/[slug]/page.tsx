"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageSource } from "../../../../../types/types";
import Image from "next/image";
import ServicesSideBar from "../../servicesSideBar/page";
// Importing types
import { Project } from "../../../../../types/types";

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

const Details = () => {
  const [project, setProject] = useState<Project | null>(null); // Type for single project
  const [projects, setProjects] = useState<Project[]>([]); // Type for multiple projects
  const [slug, setSlug] = useState<string | null>(null);

  const CACHE_KEY = "projectsDetailsCache";
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  const pathname = usePathname(); // Get the current pathname (which includes the slug)

  // Fetching the projects and caching them
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
          const data = await client.fetch(`*[_type == "projectSchema"]`);
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
        (data: Project) => data.slug.current === slug
      );
      setProject(dataFind || null); // Set the project or null if not found
    }
  }, [slug, projects]);

  // The urlFor function with proper typing
  const urlFor = (source: ImageSource) =>
    builder.image(source).width(800).url();

  return (
    <div className="min-h-screen m-5 my-20 flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-10">
        <div className="bg-white min-h-[70vh] shadow-md rounded-lg p-4 lg:p-6">
          {project ? (
            <div>
              <h2 className="text-lg lg:text-2xl font-semibold text-gray-700 mb-4">
                {project.name}
              </h2>
              {project.image?.asset ? (
                <div className="relative overflow-hidden rounded-lg mb-6 w-full sm:w-[400px] sm:h-[400px] lg:w-[40%] lg:h-auto">
                  <Image
                    src={urlFor(project.image.asset)}
                    alt={project?.name || "Project Image"}
                    width={400} // You can set this as per your design
                    height={400} // You can set this as per your design
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    priority // This prioritizes the image loading
                  />
                </div>
              ) : (
                <p className="text-red-500">Image not available</p>
              )}

              <p className="text-gray-600 text-sm lg:text-base mb-6">
                {project?.description}
              </p>

              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                  Details:
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {project?.detail}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-lg lg:text-xl text-gray-600">
              Loading...
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <ServicesSideBar />
    </div>
  );
};

export default Details;

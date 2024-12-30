"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { Service } from "../../../../../types/types";
import { ImageSource } from "../../../../../types/types";
import Image from "next/image";
import ServicesSideBar from "../../servicesSideBar/page";

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

const ServicesDetails = () => {
  const [project, setProject] = useState<Service | null>(null);
  const [projects, setProjects] = useState<Service[]>([]);
  const [slug, setSlug] = useState<string | null>(null);

  const pathname = usePathname(); // Get the current pathname (which includes the slug)

  // Fetching the projects and setting them in state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "servicesSchema"]`);
        setProjects(data); // Set the projects in state
      } catch (error) {
        console.error(error);
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
  console.log("POPOP: ", projects);
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
                    src={urlFor(project.image.asset)} // Passing the asset object
                    alt={project?.name || "Service Image"}
                    width={800} // Set the width according to your design
                    height={600} // Set the height according to your design
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
      <ServicesSideBar/>
    </div>
  );
};

export default ServicesDetails;

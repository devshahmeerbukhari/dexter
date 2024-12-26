"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageSource } from "../../../../../types/types";
import Image from "next/image";
// Importing types
import { Project } from "../../../../../types/types";

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

const Details = () => {
  const [project, setProject] = useState<Project | null>(null); // Type for single project
  const [projects, setProjects] = useState<Project[]>([]); // Type for multiple projects
  const [slug, setSlug] = useState<string | null>(null);

  const pathname = usePathname(); // Get the current pathname (which includes the slug)

  // Fetching the projects and setting them in state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "projectSchema"]`);
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
      <aside className="w-full lg:w-1/4 bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg m-4 lg:m-4">
        <h2 className="text-lg lg:text-xl font-bold mb-6">Services</h2>
        <ul className="space-y-4">
          {[
            "Web Development",
            "App Development",
            "Game Development",
            "BlockChain Development",
            "Generative AI",
            "UI/UX Design",
            "Database Security",
          ].map((service, index) => (
            <li
              key={index}
              className="cursor-pointer bg-blue-500 p-3 rounded-lg hover:bg-blue-400 transition text-sm lg:text-base"
            >
              <span className="flex items-center justify-between">
                {service} <span>&raquo;</span>
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Details;

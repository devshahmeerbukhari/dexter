'use client';
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../projectsCard/page";
import { client } from "@/sanity/lib/client";
import { Project } from "../../../../types/types";

interface ProjectPageProps {
  viewType: "Home" | "Projects"; // Prop to determine the layout (Home or Projects view)
}

function ProjectPage({ viewType = "Projects" }: ProjectPageProps) {
  const [projects, setProjects] = useState<Project[]>([]); // State to store the list of projects
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the horizontal scrolling carousel

  // Cache settings
  const CACHE_KEY = "projectsCache"; // Key to store/retrieve data in localStorage
  const CACHE_DURATION = 5 * 60 * 1000; // Cache duration (5 minutes in milliseconds)

  useEffect(() => {
    // Fetch project data and implement caching
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY); // Check if data exists in cache
        const cache = cachedData ? JSON.parse(cachedData) : null;

        if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
          // If cache is valid, use cached data
          setProjects(cache.data);
        } else {
          // Otherwise, fetch fresh data from the Sanity API
          const data = await client.fetch(`*[_type == "projectSchema"]`);
          setProjects(data);
          // Store the fetched data in localStorage with a timestamp
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data, timestamp: Date.now() })
          );
        }
      } catch (error) {
        // Log errors during data fetching
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
          {projects.length > 0 ? (
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {/* Render each project as a card */}
              {projects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] h-auto p-4 rounded-lg"
                >
                  <ProjectCard
                    name={project.name} // Project name
                    description={project.description} // Project description
                    image={project.image} // Project image
                    slug={project.slug?.current} // Project slug for linking
                  />
                </div>
              ))}
            </div>
          ) : (
            // Loading indicator while data is being fetched
            <div className="flex items-center justify-center w-full text-xl font-bold text-blue-500">
              Loading...
            </div>
          )}
        </div>
      ) : (
        // Projects view: Grid layout for displaying projects
        <div className="max-w-screen-xl mx-auto px-4 my-10 min-h-[100vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              // Render each project as a card in the grid
              projects.map((project: Project, index: number) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  slug={project.slug?.current}
                />
              ))
            ) : (
              // Loading indicator for Projects view
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

export default ProjectPage;

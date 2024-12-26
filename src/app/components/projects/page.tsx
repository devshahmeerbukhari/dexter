'use client'
import React, { useEffect, useState } from "react";
import ProjectCard from "../projectsCard/page";
import { client } from "@/sanity/lib/client";
import { Project } from "../../../../types/types";

function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "projectSchema"]`);
        setProjects(data); // Set the projects in context
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log("PP: ", projects);

  return (
    <div>
      <div className="grid grid-cols-1 min-h-[70vh] sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-20 m-28">
        {projects.length > 0 ? (
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
          <div className="flex items-center justify-center w-full text-xl font-bold text-blue-500">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;

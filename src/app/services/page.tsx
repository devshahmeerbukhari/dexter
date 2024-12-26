'use client'
import React, { useEffect, useState } from "react";
import ServicesCard from "../sercivesCard/page";
import { client } from "@/sanity/lib/client";
import { Service } from "../../../../types/types";

function ProjectPage() {
  const [projects, setProjects] = useState<Service[]>([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "servicesSchema"]`);
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

export default ProjectPage;

import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { ProjectCardProps } from "../../../../types/types";
import { ImageSource } from "../../../../types/types";
import Link from "next/link";

const builder = imageUrlBuilder(client);

const urlFor = (source: ImageSource) => builder.image(source).width(800).url();

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  slug,
}) => {
  return (
    <div className="relative w-full max-w-[100vh] mx-auto">
      {/* Card Background with Hover Scaling */}
      <div className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl p-8 shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        {/* Floating Image */}
        {image?.asset && (
          <div className="lg:absolute relative rotate-0 top-0 right-0 lg:-top-20 lg:-right-20 w-32 h-40 transform lg:rotate-6 overflow-hidden transition-transform duration-500 hover:rotate-0">
            <img
              src={urlFor(image.asset)}
              alt={name}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        )}

        {/* Card Content */}
        <div className="z-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-4">
            {name}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            {description}
          </p>
          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Apply Now Button with Gradient */}
            <Link
              href={`/components/details/${slug}`}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

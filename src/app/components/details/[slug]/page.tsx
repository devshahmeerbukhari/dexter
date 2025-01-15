"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

const ProjectsFeatures = [
  {
    title: "Study.com",
    slug: "KeyFeaturesStudyCom",
    miniDetails:
      "Discover the comprehensive and accessible educational features of Study.com designed for learners of all levels.",
    benefits: [
      {
        icon: "🎓",
        heading: "Comprehensive Educational Content",
        details:
          "Offers thousands of video lessons, quizzes, and interactive tools across a wide range of subjects, catering to students from K-12 to professional certifications.",
      },
      {
        icon: "⏳",
        heading: "Flexible, Self-Paced Learning",
        details:
          "Empowers learners to study at their own convenience, making it ideal for those preparing for exams or looking to improve specific skills.",
      },
      {
        icon: "📚",
        heading: "Extensive Subject Coverage",
        details:
          "Includes subjects like math, science, history, literature, and more, ensuring a wide range of academic needs are met.",
      },
      {
        icon: "🎥",
        heading: "Bite-Sized Video Lessons",
        details:
          "Simplifies complex topics through short and engaging video content, making learning easier and more enjoyable.",
      },
      {
        icon: "📊",
        heading: "Personalized Learning Paths",
        details:
          "Provides tailored study plans and progress tracking to help users stay organized and motivated.",
      },
      {
        icon: "📝",
        heading: "Test Preparation",
        details:
          "Specialized courses and practice exams for standardized tests like the SAT, ACT, and GRE, supporting effective exam preparation.",
      },
      {
        icon: "💻",
        heading: "Teacher Resources",
        details:
          "Offers lesson plans, classroom tools, and resources to support effective teaching practices.",
      },
      {
        icon: "💰",
        heading: "Affordable Accessibility",
        details:
          "Subscription model ensures quality education is accessible to a broad audience, empowering learners at all levels.",
      },
      {
        icon: "🔍",
        heading: "User-Friendly Design",
        details:
          "Intuitive navigation and engaging content make the platform easy to use for students, educators, and lifelong learners.",
      },
    ],
  },
  {
    title: "Art Generator",
    slug: "KeyFeaturesMarvanArtifyWeb",
    miniDetails:
      "Explore the innovative and design-driven features of Marvan Artify Web, blending creativity with technology for captivating digital experiences.",
    benefits: [
      {
        icon: "🎨",
        heading: "Creative Web Design and Development",
        details:
          "Tailored web solutions for personal portfolios, business websites, and more, blending creativity with technology.",
      },
      {
        icon: "📱",
        heading: "Responsive Design",
        details:
          "Ensures websites function seamlessly across devices, delivering a smooth and consistent user experience.",
      },
      {
        icon: "⚙️",
        heading: "Modern Frameworks and Tools",
        details:
          "Leverages cutting-edge technologies to build high-performance, SEO-optimized websites.",
      },
      {
        icon: "✨",
        heading: "Custom Features and Functionalities",
        details:
          "Integrates unique and interactive features, helping clients stand out in the digital space.",
      },
      {
        icon: "🎥",
        heading: "Immersive Visual Content",
        details:
          "Enhances engagement with high-quality graphics, animations, and multimedia integration.",
      },
      {
        icon: "💡",
        heading: "Design-Driven Development",
        details:
          "Focuses on innovative and professional presentation, ideal for businesses and creatives.",
      },
      {
        icon: "🤝",
        heading: "Client-Centric Approach",
        details:
          "Collaborates closely with clients to ensure their vision is realized with care and precision.",
      },
      {
        icon: "🔧",
        heading: "End-to-End Services",
        details:
          "Provides complete support from concept design to launch and maintenance, ensuring a stress-free experience.",
      },
      {
        icon: "🌟",
        heading: "Creative Excellence",
        details:
          "Delivers visually captivating websites, reflecting a perfect blend of art and technology.",
      },
    ],
  },

  {
    title: "PROSPECTX",
    slug: "KeyFeaturesProspectx",
    miniDetails:
      "Discover how Prospectx revolutionizes customer acquisition and lead generation with advanced analytics and AI-driven strategies.",
    benefits: [
      {
        icon: "📊",
        heading: "Advanced Data Analytics",
        details:
          "Leverages data analytics and AI to identify high-potential prospects and optimize outreach strategies.",
      },
      {
        icon: "⚡",
        heading: "Automated Lead Management",
        details:
          "Automates key processes like lead scoring, segmentation, and follow-up, enabling sales teams to focus on relevant prospects.",
      },
      {
        icon: "📈",
        heading: "Real-Time Insights",
        details:
          "Provides real-time tracking and market insights to help businesses understand trends and customer behavior.",
      },
      {
        icon: "💌",
        heading: "Personalized Outreach at Scale",
        details:
          "Uses AI to tailor communication across channels like email and social media, increasing engagement and conversion rates.",
      },
      {
        icon: "🔄",
        heading: "Flexible CRM Integration",
        details:
          "Easily integrates with CRM systems to streamline customer data management and track interactions.",
      },
      {
        icon: "📋",
        heading: "User-Friendly Campaign Management",
        details:
          "Offers an intuitive interface for managing campaigns, tracking performance, and making data-driven decisions.",
      },
      {
        icon: "🚀",
        heading: "Optimized Sales Pipeline",
        details:
          "Streamlines the sales pipeline to ensure more efficient conversions and higher ROI.",
      },
      {
        icon: "🤝",
        heading: "Stronger Customer Connections",
        details:
          "Fosters long-term customer relationships through tailored and meaningful engagement strategies.",
      },
      {
        icon: "🌟",
        heading: "Enhanced ROI",
        details:
          "Drives higher returns on investment through efficient and targeted prospect management.",
      },
    ],
  },

  {
    title: "IRTIQA AI",
    slug: "KeyFeaturesIrtiqaAI",
    miniDetails:
      "Learn how IRTIQA AI empowers businesses with AI-driven solutions for automation, content generation, and process optimization.",
    benefits: [
      {
        icon: "🤖",
        heading: "AI-Powered Automation",
        details:
          "Streamlines business processes, automating repetitive tasks to improve efficiency and save time.",
      },
      {
        icon: "📊",
        heading: "Advanced Data Analysis",
        details:
          "Uses machine learning models to provide deep insights for informed decision-making and strategic planning.",
      },
      {
        icon: "✍️",
        heading: "Content Generation",
        details:
          "Generates high-quality text, images, and chatbot conversations, enabling businesses to create content faster.",
      },
      {
        icon: "🔄",
        heading: "Scalable AI Solutions",
        details:
          "Adapts to growing business needs, providing solutions that evolve with your company.",
      },
      {
        icon: "🌐",
        heading: "Industry Versatility",
        details:
          "Designed for diverse industries, including marketing, finance, healthcare, and education.",
      },
      {
        icon: "📈",
        heading: "Continuous Learning Models",
        details:
          "Improves over time with machine learning models that adapt and optimize solutions as data grows.",
      },
      {
        icon: "📋",
        heading: "Workflow Optimization",
        details:
          "Enhances productivity by integrating AI into business processes for seamless operations.",
      },
      {
        icon: "🚀",
        heading: "Future-Ready Innovation",
        details:
          "Empowers businesses to thrive in the digital age with intelligent automation and creative AI solutions.",
      },
      {
        icon: "💡",
        heading: "Custom AI Solutions",
        details:
          "Offers tailored AI integrations to meet the specific needs of your business.",
      },
    ],
  },

  {
    title: "Lazaza",
    slug: "KeyFeaturesLazazaAI",
    miniDetails:
      "Simplify digital advertising with Lazaza.ai, an AI-powered platform for creating, managing, and optimizing ad campaigns.",
    benefits: [
      {
        icon: "🎯",
        heading: "AI-Driven Ad Creation",
        details:
          "Automates ad creation by generating visuals and copy tailored to resonate with target audiences.",
      },
      {
        icon: "🤖",
        heading: "Automated Targeting and Budgeting",
        details:
          "Uses AI to optimize ad targeting and allocate budgets for maximum performance.",
      },
      {
        icon: "📊",
        heading: "Real-Time Campaign Optimization",
        details:
          "Adjusts campaigns dynamically based on performance data to ensure optimal results.",
      },
      {
        icon: "📋",
        heading: "Analytics Dashboard",
        details:
          "Provides actionable insights to monitor and improve campaign effectiveness.",
      },
      {
        icon: "🌐",
        heading: "Seamless Integration",
        details:
          "Integrates with major ad networks like Google Ads and Facebook for centralized campaign management.",
      },
      {
        icon: "⚙️",
        heading: "A/B Testing",
        details:
          "Includes built-in A/B testing to refine ads and identify the best-performing strategies.",
      },
      {
        icon: "🚀",
        heading: "Scalable for All Businesses",
        details:
          "Designed to meet the needs of both small businesses and large corporations.",
      },
      {
        icon: "💡",
        heading: "User-Friendly Interface",
        details:
          "Simplifies digital advertising, allowing users to create and manage campaigns without marketing expertise.",
      },
      {
        icon: "🌟",
        heading: "Performance Optimization",
        details:
          "Maximizes ad effectiveness through continuous AI-driven enhancements.",
      },
    ],
  },
];

const Details = () => {
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [slug, setSlug] = useState(null);
  const [projectFeatures, setProjectFeatures] = useState(null);

  const CACHE_KEY = "projectsDetailsCache";
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cache = cachedData ? JSON.parse(cachedData) : null;

        if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
          setProjects(cache.data);
        } else {
          const data = await client.fetch(`*[_type == "projectSchema"]`);
          setProjects(data);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data, timestamp: Date.now() })
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const slugFromPath = pathname?.split("/").pop();
    setSlug(slugFromPath || null);
  }, [pathname]);

  useEffect(() => {
    if (slug && projects.length > 0) {
      const dataFind = projects.find((data) => data.slug.current === slug);
      setProject(dataFind || null);

      if (dataFind) {
        const matchingFeatures = ProjectsFeatures.find(
          (feature) => feature.title === dataFind.name
        );
        setProjectFeatures(matchingFeatures || null);
      }
    }
  }, [slug, projects]);

  const urlFor = (source) => builder.image(source).width(800).url();

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row bg-white mx-4 lg:mx-20 min-h-[40vh] justify-center items-center gap-8 lg:gap-16 py-10">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">{project?.name}</h1>
          <p className="mt-5 text-lg lg:text-2xl max-w-[550px] mx-auto lg:mx-0">
            {projectFeatures?.miniDetails ||
              "Discover the features and details of this amazing project."}
          </p>
        </div>
        <div className="max-w-7xl lg:w-1/3 flex justify-center">
          {project?.image?.asset ? (
            <Image
              src={urlFor(project.image.asset)}
              alt={project?.name || "Project Image"}
              width={400}
              height={400}
              className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              priority
            />
          ) : (
            <p className="text-red-500">Image not available</p>
          )}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectFeatures?.benefits?.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center"
              >
                {/* Feature Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-4xl mb-4">
                  {benefit.icon}
                </div>
                {/* Feature Heading */}
                <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                  {benefit.heading}
                </h3>
                {/* Feature Details */}
                <p className="text-gray-600 text-sm lg:text-base">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center py-10 bg-gray-50">
        <Link
          href={"/components/contact"}
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 py-3 px-8 rounded-full text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 10c0 3.866-3.582 7-8 7a8.767 8.767 0 01-3.536-.728L2 17l1.5-3.872A8.091 8.091 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
          </svg>
          Get in Touch
        </Link>
      </div>
    </>
  );
};

export default Details;

"use client";
import React, { useEffect, useState } from "react";
import ServicesCard from "../sercivesCard/page";
import { client } from "@/sanity/lib/client";
import { Service } from "../../../../types/types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { ServicesType } from "../../../../types/types";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional styles for navigation
import "swiper/css/pagination"; // Optional styles for pagination
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import { Autoplay } from "swiper/modules";

interface ServicesPageProps {
  viewType: "Home" | "Services"; // Prop to determine the layout (Home or Services view)
}

export const servicesArr: ServicesType[] = [
  {
    title: "App Development",
    slug: "AppDevelopment",
    tags: ["Custom Apps", "iOS & Android", "User-Friendly"],
    lottieImg:
      "https://lottie.host/61621bcf-2bca-443c-9a5d-0a955f562bf8/ad85gOTX4h.lottie",
    url: "/components/servicesDetails/AppDevelopment",
    miniDetails:
      "Create custom, user-friendly mobile apps for iOS and Android that meet your specific business needs.",
    benefits: [
      {
        icon: "🚀",
        heading: "Customizable Solutions",
        details:
          "Our app development services offer tailored solutions designed specifically for your business goals. Whether you need a unique design, specialized functionality, or integration with existing systems, we ensure that the final product aligns perfectly with your needs. Our expertise helps deliver an app that stands out in the competitive market.",
      },
      {
        icon: "📱",
        heading: "Cross-Platform Compatibility",
        details:
          "We develop mobile apps that work seamlessly on both iOS and Android platforms, allowing your business to reach a broader audience. By using efficient frameworks, we minimize development time while maximizing compatibility, ensuring cost-effective solutions for your cross-platform needs.",
      },
      {
        icon: "🎨",
        heading: "User-Centric Design",
        details:
          "Our design philosophy revolves around creating intuitive and user-friendly interfaces. We carefully analyze user behavior to ensure the app is easy to navigate, visually appealing, and engaging, which enhances user satisfaction and boosts retention rates.",
      },
      {
        icon: "📈",
        heading: "Scalable Architecture",
        details:
          "Our apps are built to scale as your business grows. Whether your user base expands or your functionality requirements change, the app's architecture is designed to handle increasing demand seamlessly. This ensures long-term viability and reduces future development costs.",
      },
    ],
  },
  {
    title: "Generative AI",
    slug: "GenerativeAI",
    tags: ["AI-Powered Solutions", "Machine Learning", "Cutting-Edge Tech"],
    lottieImg:
      "https://lottie.host/18c67767-e41a-477f-93cf-790920be4def/3qw6cOiCXq.lottie",
    url: "/components/servicesDetails/GenerativeAI",
    miniDetails:
      "Harness AI-powered tools and machine learning to create innovative, cutting-edge solutions.",
    benefits: [
      {
        icon: "🤖",
        heading: "Advanced Automation",
        details:
          "Generative AI enables automation of complex tasks, such as data analysis, content creation, and customer support. By reducing human effort in repetitive tasks, businesses can focus on strategic goals and innovation, leading to improved efficiency and productivity.",
      },
      {
        icon: "📊",
        heading: "Data-Driven Insights",
        details:
          "Leverage AI to analyze large datasets and extract actionable insights. Our generative AI solutions identify patterns, trends, and anomalies that can empower businesses to make informed decisions, improve forecasting, and stay competitive in dynamic markets.",
      },
      {
        icon: "🌟",
        heading: "Innovative Product Development",
        details:
          "With generative AI, we help you build innovative products tailored to customer preferences. From creating unique designs to developing intelligent recommendation systems, AI unlocks endless possibilities for enhancing customer experience and engagement.",
      },
      {
        icon: "🎯",
        heading: "Personalized Experiences",
        details:
          "Our AI solutions enable real-time personalization of customer interactions. By adapting to user preferences and behavior, businesses can provide highly customized services, increasing customer satisfaction and loyalty.",
      },
    ],
  },
  {
    title: "Web Development",
    slug: "WebDevelopment",
    tags: ["Responsive Design", "SEO-Optimized", "Fast Loading"],
    lottieImg:
      "https://lottie.host/21454b07-1152-4135-9d23-148900b7812b/uDxNM1EnZt.lottie",
    url: "/components/servicesDetails/WebDevelopment",
    miniDetails:
      "Build responsive, fast-loading, and SEO-optimized websites tailored to your audience.",
    benefits: [
      {
        icon: "📐",
        heading: "Responsive Design",
        details:
          "Our web development services focus on creating responsive designs that adapt seamlessly to all devices, including desktops, tablets, and smartphones. This ensures your website offers a consistent and professional user experience across platforms.",
      },
      {
        icon: "🔍",
        heading: "SEO Optimization",
        details:
          "We integrate the latest SEO strategies into your website to improve its visibility in search engines. From optimizing site speed to crafting search-friendly content, we ensure your website ranks higher and attracts more organic traffic.",
      },
      {
        icon: "⚡",
        heading: "High Performance",
        details:
          "Speed matters when it comes to websites. We optimize loading times, server performance, and resource management to deliver a fast, efficient, and smooth browsing experience for your users.",
      },
      {
        icon: "⚙️",
        heading: "Custom Features",
        details:
          "Our team develops tailored features, whether it's e-commerce functionality, interactive tools, or a content management system. These customizations make your website unique and better aligned with your business objectives.",
      },
    ],
  },
  {
    title: "Database Security",
    slug: "DatabaseSecurity",
    tags: ["Data Encryption", "Access Control", "Secure Architecture"],
    lottieImg:
      "https://lottie.host/0d1fcf45-e2cb-447d-ad2b-98c40c8a1fb9/sg9mYTAEsp.lottie",
    url: "/components/servicesDetails/DatabaseSecurity",
    miniDetails:
      "Ensure secure database architecture with encryption and robust access control measures.",
    benefits: [
      {
        icon: "🔒",
        heading: "Advanced Encryption",
        details:
          "We use cutting-edge encryption techniques to secure your data both at rest and in transit. This ensures that sensitive information remains protected from unauthorized access or breaches, safeguarding your business reputation.",
      },
      {
        icon: "🔑",
        heading: "Access Control",
        details:
          "Our solutions include role-based access controls to ensure only authorized personnel can access specific data. This minimizes risks of insider threats and enhances overall system security.",
      },
      {
        icon: "📜",
        heading: "Regulatory Compliance",
        details:
          "We help you achieve compliance with data protection regulations such as GDPR, HIPAA, or CCPA. Meeting these standards not only protects your business legally but also builds trust with customers and stakeholders.",
      },
      {
        icon: "🛡️",
        heading: "Real-Time Threat Monitoring",
        details:
          "Our systems continuously monitor for potential threats, such as malware or unauthorized access attempts. Proactive threat detection ensures your database remains secure, reducing the likelihood of data breaches.",
      },
    ],
  },
  {
    title: "Blockchain Development",
    slug: "BlockchainDevelopment",
    tags: ["Smart Contracts", "Decentralized Apps", "Secure Transactions"],
    lottieImg:
      "https://lottie.host/0bbca5ce-f628-4e5d-a730-29b4f8c0c8d0/eSsaAJGhLZ.lottie",
    url: "/components/servicesDetails/BlockchainDevelopment",
    miniDetails:
      "Develop decentralized apps, smart contracts, and secure blockchain solutions.",
    benefits: [
      {
        icon: "🔗",
        heading: "Secure Transactions",
        details:
          "Our blockchain solutions ensure secure and tamper-proof transactions by leveraging cryptographic protocols. This guarantees data integrity and protects your business from fraud and unauthorized access, creating a trusted environment for all stakeholders.",
      },
      {
        icon: "🛠️",
        heading: "Smart Contract Development",
        details:
          "We specialize in developing self-executing smart contracts that automate processes and reduce the need for intermediaries. These contracts are highly secure, transparent, and reliable, ensuring efficient operations and minimizing risks.",
      },
      {
        icon: "🌐",
        heading: "Decentralized Applications (dApps)",
        details:
          "Our team builds decentralized applications tailored to your business needs. dApps enhance transparency, security, and user control by operating on blockchain networks, offering a more robust and resilient solution compared to traditional apps.",
      },
      {
        icon: "📈",
        heading: "Scalable Blockchain Solutions",
        details:
          "Our blockchain architecture is designed to scale with your business. Whether you're handling thousands of transactions or expanding your user base, our solutions can seamlessly adapt to meet growing demands without compromising performance.",
      },
    ],
  },
  {
    title: "UI/UX Design",
    slug: "UIUXDesign",
    tags: ["Intuitive Design", "Enhanced Usability", "Modern Aesthetics"],
    lottieImg:
      "https://lottie.host/5ec4fda7-7e1b-4bd7-b811-85c9c6da83c2/5Eo8m30kcz.lottie",
    url: "/components/servicesDetails/UIUXDesign",
    miniDetails:
      "Design an engaging product that is easy-to-use, attractive, and functional.",
    benefits: [
      {
        icon: "🎨",
        heading: "Modern Aesthetic Designs",
        details:
          "Our UI/UX designs focus on creating modern and visually appealing interfaces that align with your brand's identity. We ensure that every design element complements the overall theme, making your product stand out while maintaining user engagement and satisfaction.",
      },
      {
        icon: "🧩",
        heading: "Enhanced Usability",
        details:
          "We prioritize usability by conducting thorough user research and testing. By focusing on ease of navigation and accessibility, we create interfaces that cater to users of all skill levels, reducing friction and increasing user retention.",
      },
      {
        icon: "🚀",
        heading: "Improved User Engagement",
        details:
          "Our designs include intuitive features and interactive elements that encourage users to explore your product. By optimizing workflows and reducing complexities, we ensure that users can easily achieve their goals, leading to increased satisfaction and loyalty.",
      },
      {
        icon: "📈",
        heading: "Conversion-Optimized Design",
        details:
          "Our team specializes in creating designs that drive conversions. From strategic placement of CTAs to seamless checkout experiences, we focus on turning visitors into loyal customers while providing a hassle-free experience.",
      },
    ],
  },
  {
    title: "Game Development",
    slug: "GameDevelopment",
    tags: ["Immersive Experiences", "Cross-Platform", "Advanced Graphics"],
    lottieImg:
      "https://lottie.host/d54fad76-4ee7-4210-9dbb-24d27764fb59/Am6ob0nDN0.lottie",
    url: "/components/servicesDetails/GameDevelopment",
    miniDetails:
      "Create immersive, cross-platform games with advanced graphics and engaging gameplay.",
    benefits: [
      {
        icon: "🎮",
        heading: "Immersive Gameplay",
        details:
          "Our game development services focus on creating immersive gameplay experiences that captivate players. From compelling storylines to intricate game mechanics, we ensure every aspect of your game keeps users engaged for hours.",
      },
      {
        icon: "🌍",
        heading: "Cross-Platform Compatibility",
        details:
          "We develop games that are compatible across multiple platforms, including PC, consoles, and mobile devices. This ensures a seamless experience for players, regardless of their device, maximizing your game's reach and impact.",
      },
      {
        icon: "🖥️",
        heading: "Advanced Graphics and Visuals",
        details:
          "Our team utilizes cutting-edge tools and technologies to create stunning visuals and realistic graphics. From 3D rendering to advanced lighting effects, we make your game visually appealing and technically impressive.",
      },
      {
        icon: "⚙️",
        heading: "Custom Game Mechanics",
        details:
          "We design unique and innovative game mechanics tailored to your vision. Whether it's action-packed combat, engaging puzzles, or simulation-based interactions, our developers bring your ideas to life with precision and creativity.",
      },
    ],
  },
];

function ServicesPage({ viewType = "Services" }: ServicesPageProps) {
  const [services, setServices] = useState<Service[]>([]); // State to store the list of services
  // const carouselRef = useRef<HTMLDivElement>(null); // Ref for the horizontal scrolling carousel

  // Cache settings
  const CACHE_KEY = "servicesCache"; // Key to store/retrieve data in localStorage
  const CACHE_DURATION = 5 * 60 * 1000; // Cache duration (5 minutes in milliseconds)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY); // Check if data exists in cache
        const cache = cachedData ? JSON.parse(cachedData) : null;

        if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
          // If cache is valid, use cached data
          setServices(cache.data);
        } else {
          // Otherwise, fetch fresh data from the Sanity API
          const data = await client.fetch(`*[_type == "servicesSchema"]`);
          const enrichedServices = data.map((service: Service) => {
            const match = servicesArr.find(
              (item) => item.title === service.name
            ); // Match by name
            return {
              ...service,
              tags: match ? match.tags : [],
              lottieImg: match ? match.lottieImg : "",
            };
          });
          setServices(enrichedServices); // Set the enriched services

          // Store the fetched data in localStorage with a timestamp
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data: enrichedServices, timestamp: Date.now() })
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const isMdScreen = useMediaQuery((theme: Theme) =>
  //   theme.breakpoints.down("lg")
  // );

  return (
    <div className="w-full">
      {viewType === "Home" ? (
        // Home view: Horizontal scrolling carousel
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Use required Swiper modules
          spaceBetween={0} // Space between slides
          navigation // Enables navigation buttons
          pagination={{ clickable: true }} // Enables pagination
          className="lg:w-[100vh] w-full" // Ensure Swiper takes full container width
          autoplay={{ delay: 2000 }} // Autoplay with 2 seconds delay
          loop
          breakpoints={{
            // When screen width is >= 640px (small screens, like mobile)
            640: {
              slidesPerView: 1, // 1 slide per view
            },
            // When screen width is >= 768px (medium screens, like tablets)
            768: {
              slidesPerView: 2, // 2 slides per view
            },
            // When screen width is >= 1024px (large screens, like desktops)
            1024: {
              slidesPerView: 2, // 3 slides per view
            },
          }}
        >
          {/* Map through the services and render each one as a SwiperSlide */}
          {services.map((service: Service, index: number) => (
            <SwiperSlide
              key={index}
              className="flex-shrink-0" // Prevent slide from shrinking
            >
              <div className="w-[300px] h-auto m-4 mx-20 pb-20 rounded-lg">
                <ServicesCard
                  name={service.name} // Service name
                  description={service.description} // Service description
                  image={service.image} // Service image
                  slug={service.slug?.current} // Slug for navigation
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : viewType === "Services" && services.length > 0 ? (
        <div className="from-blue-100 to-blue-50 bg-gradient-to-r min-h-[100vh] py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold mb-10">
              Our services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 flex items-center"
                >
                  {/* Service Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex gap-2 mb-4">
                      {/* Match and display tags */}
                      {servicesArr
                        .find((item) => item.title === service.name)
                        ?.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="bg-black text-white px-4 py-2 rounded">
                        <Link href={"/components/contact"}>
                          Let&apos;s chat
                        </Link>
                      </button>
                      <button className="bg-gray-200 text-black px-4 py-2 rounded">
                        <Link
                          href={
                            servicesArr.find(
                              (item) => item.title === service.name
                            )?.url //  || "default-lottie-file-url" Provide a default fallback URL if needed
                          }
                        >
                          See Details
                        </Link>
                      </button>
                    </div>
                  </div>

                  {/* Lottie Animation */}
                  <div className="w-1/3 flex justify-center">
                    <DotLottieReact
                      src={
                        servicesArr.find((item) => item.title === service.name)
                          ?.lottieImg //  || "default-lottie-file-url" Provide a default fallback URL if needed
                      }
                      loop
                      autoplay
                      width={502}
                      height={502}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[90vh] w-full text-xl font-bold text-blue-500">
          Loading...
        </div>
      )}
    </div>
  );
}

export default ServicesPage;

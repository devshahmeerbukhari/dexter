'use client';
import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "../sercivesCard/page";
import { client } from "@/sanity/lib/client";
import { Service } from "../../../../types/types";
import styles from './ServicesPage.module.css'; // Import your CSS Module

interface ServicesPageProps {
  viewType: "Home" | "Services"; // Prop to determine layout
}

function ServicesPage({ viewType = "Services" }: ServicesPageProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null); // React ref for carousel container

  const CACHE_KEY = "servicesCache";
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
  const ITEM_WIDTH = 300; // Width of a single item including margin
  const AUTO_SCROLL_INTERVAL = 3000; // Auto-scroll every 3 seconds

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cache = cachedData ? JSON.parse(cachedData) : null;

        if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
          setServices(cache.data);
          console.log("Using cached data");
        } else {
          const data = await client.fetch(`*[_type == "servicesSchema"]`);
          setServices(data);
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

  // Auto-scroll logic for "Home" view
  useEffect(() => {
    if (viewType === "Home" && !isPaused) {
      const autoScroll = setInterval(() => {
        handleNext();
      }, AUTO_SCROLL_INTERVAL);

      return () => clearInterval(autoScroll); // Cleanup on unmount
    }
  }, [isPaused, viewType]);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= ITEM_WIDTH; // Move one item width to the left
    }
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000); // Resume auto-scroll after 1 second
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const maxScrollLeft =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      if (carouselRef.current.scrollLeft >= maxScrollLeft) {
        carouselRef.current.scrollLeft = 0; // Reset to the beginning
      } else {
        carouselRef.current.scrollLeft += ITEM_WIDTH; // Move one item width to the right
      }
    }
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000); // Resume auto-scroll after 1 second
  };

  return (
    <div>
      {viewType === "Home" ? (
        <div className={styles.carouselContainer}>
          {services.length > 0 ? (
            <div className={styles.carouselWrapper}>
              <button className={styles.arrowLeft} onClick={handlePrev}>
                &#8592;
              </button>
              <div
                ref={carouselRef} // Attach ref to the carousel container
                className={styles.carousel}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {services.map((service: Service, index: number) => (
                  <div key={index} className={styles.carouselItem}>
                    <ServicesCard
                      name={service.name}
                      description={service.description}
                      image={service.image}
                      slug={service.slug?.current}
                    />
                  </div>
                ))}
              </div>
              <button className={styles.arrowRight} onClick={handleNext}>
                &#8594;
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full text-xl font-bold text-blue-500">
              Loading...
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="grid min-h-[70vh] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-20 m-28">
            {services.length > 0 ? (
              services.map((service: Service, index: number) => (
                <ServicesCard
                  key={index}
                  name={service.name}
                  description={service.description}
                  image={service.image}
                  slug={service.slug?.current}
                />
              ))
            ) : (
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

export default ServicesPage;

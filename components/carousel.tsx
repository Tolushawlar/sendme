"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
  {
    title: "Redefining Logistics Excellence.",
    subtitle:
      "With award-winning services and cutting-edge solutions, we set the standard for fast, reliable, and efficient deliveries.",
  },
  {
    title: "Real-Time Tracking at Your Fingertips.",
    subtitle:
      "Know the exact location of your shipments every second. Transparency and efficiency, all in one platform.",
  },
  {
    title: "Seamless Supply Chain Solutions.",
    subtitle:
      "From freight forwarding to warehousing and last-mile delivery, we handle it all—so you don’t have to.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 8000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto text-left  py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          <h1 className="text-white text-5xl lg:text-[80px]  md:text-[60px] lg:text-6xl font-bold tracking-tight fontTomorrow">
            {carouselData[index].title}
          </h1>
          <p className="text-white text-2xl md:text-2xl mt-6 max-w-[600px]">
            {carouselData[index].subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

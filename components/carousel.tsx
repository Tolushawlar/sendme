"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
  {
    title: "Leading Logistics in Nigeria.",
    subtitle:
      "With extensive coverage across all 36 states and reliable last-mile delivery solutions, we connect businesses and customers nationwide.",
  },
  {
    title: "Track Deliveries Pan-Nigeria.",
    subtitle:
      "Monitor your shipments in real-time from Lagos to Kano, Port Harcourt to Abuja. Complete visibility across Nigeria's terrain.",
  },
  {
    title: "End-to-End Nigerian Supply Chain.",
    subtitle:
      "From interstate freight movement to warehousing in major cities and local deliveries, we understand Nigeria's unique logistics needs.",
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const missionVisionData = [
  {
    imageSrc: "/f1.jpeg",
    imageSrc2: "/f2.jpeg",
    title: "Our Mission",
    description:
      "At Sendme Deliveries, our mission is to bridge distances and connect people seamlessly. We are committed to providing innovative, reliable, and efficient delivery services that empower businesses and individuals. Through cutting-edge technology and a customer-first approach, we make logistics simple, fast, and hassle-free.",
  },
  {
    imageSrc: "/f4.jpeg",
    imageSrc2: "/f5.jpeg",
    title: "Our Vision",
    description:
      "We envision a world where logistics is no longer a barrier but a seamless experience. Our goal is to be the most trusted and efficient logistics provider, setting the standard for excellence. We are driven to expand our reach, enhance customer experiences, and revolutionize delivery solutions globally.",
  },
];

export function MissionVision() {
  return (
    <div id="mission-vision" className="w-full bg-[#F9F5E8] py-16 mb-10 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 lg:px-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {missionVisionData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 lg:p-12 shadow-md rounded-xl flex flex-col md:flex-row items-center"
            >
              {/* Image Section */}
              <div className="hidden md:flex md:flex-col md:justify-center md:items-center space-y-6">
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  width={250}
                  height={180}
                  className="border-4 border-orange-400 rounded-xl shadow-md"
                />
                <Image
                  src={section.imageSrc2}
                  alt={section.title}
                  width={200}
                  height={150}
                  className="border-4 border-blue-400 rounded-xl shadow-md relative top-6 right-6"
                />
              </div>

              {/* Text Section */}
              <div className="md:ml-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F17E2E]">
                  {section.title}
                </h2>
                <p className="text-gray-600 mt-6 md:text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

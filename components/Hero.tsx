"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "./carousel";

export const Hero = () => {
  return (
    <div className="bg-[#F17E2E]">
      <div className="container mx-auto px-4 py-8 md:py-12 mt-20 md:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 h-[800px] lg:h-[85vh] items-center place-items-center mt-12 lg:mt-0">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 md:space-y-6 w-full"
          >
            <Carousel />
          </motion.div>

          {/* Right Column */}
          <div className="w-full relative">
            {/* Decorative elements - made responsive */}
            <div className="absolute top-[100px] left-[20px] h-[30px] md:h-[50px] opacity-30 bg-green-800 w-[30px] md:w-[50px] rounded-full hidden lg:block"></div>
            <div className="absolute top-[120px] left-[26px] h-[30px] md:h-[50px] opacity-30 bg-black w-[30px] md:w-[50px] rounded-full hidden lg:block"></div>
            <div className="absolute top-[94px] left-[40px] h-[30px] md:h-[50px] opacity-30 bg-blue-800 w-[30px] md:w-[50px] rounded-full hidden lg:block"></div>

            {/* Main content container */}
            <div className="relative z-10 space-y-3 mt-4 md:mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="border-white border-2 rounded-2xl md:rounded-3xl p-3 md:p-5 shadow-lg"
              >
                <Image
                  src="/bg2.jpg"
                  alt="Donation Image"
                  width={800}
                  height={300}
                  className="w-full h-auto aspect-video object-cover rounded-xl md:rounded-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-[#F9F5E8]">
      <div className="container mx-auto px-4 py-12 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* <span className="text-sm font-medium">
              Unlock Opportunities with Flexible, Fast Financing
            </span> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fontTomorrow">
              Grow with Us
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fontTomorrow">
              Fund Your Dreams 
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Unlock your financial potential with tailored funding solutions
              designed to help you achieve your goals. Whether you&apos;re
              looking to invest, grow your business, or secure your future,
              we&apos;re here to support you every step of the way. Grow with us
              – fund your dreams today!
            </p>

            {/* Stats */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-tr-[50px] -left-[100vw]"></div>
              <div className="relative grid grid-cols-3 gap-4 py-8 px-6 text-white">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm">Clients Satifaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">120+</div>
                  <div className="text-sm">Application Received</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">4+</div>
                  <div className="text-sm">Years in Operation</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="w-full h-full lg:h-[600px]">
            <div className="absolute top-0 right-0 h-[60vh] 3xl:h-[732px] w-1/3 3xl:w-[718px] bg-blue-500 hidden xl:block"></div>
            <div className="relative z-10 space-y-6 lg:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-3xl p-6 shadow-lg space-y-4 max-w-md mx-auto"
              >
                <Image
                  src="/bg2.jpg"
                  alt="Donation Image"
                  width={400}
                  height={300}
                  className="w-full h-96 object-cover rounded-2xl mb-4"
                />
                {/* <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-semibold">$20/MON</span>
                    <span className="text-gray-500 text-sm">
                      Or Make One Time Donation
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    There&apos;s no need to be stranded
                  </h3>
                  <p className="text-gray-600">
                    Live your dreams, don‘t be head back by financial constriants .
                  </p>
                  <div className="bg-gray-100 rounded-full h-2">
                    <div className="bg-red-400 w-2/3 h-2 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Serviced Client: 69</span>
                    <span>Goal: 1000</span>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600">
                   Join Us
                  </button>
                </div> */}
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -right-12 bottom-12 bg-white rounded-2xl shadow-lg p-4 w-64"
              >
                <Image
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                  alt="Share Food"
                  width={250}
                  height={150}
                  className="w-full h-32 object-cover rounded-2xl mb-4"
                />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-semibold">$20/MON</span>
                    <span className="text-gray-500 text-sm">
                      Or Make One Time Donation
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    There&apos;s no need to be stranded
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consecpsum dolortet.
                  </p>
                  <div className="bg-gray-100 rounded-full h-2">
                    <div className="bg-red-400 w-2/3 h-2 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Serviced Client: 69</span>
                    <span>Goal: 100</span>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600">
                    Donate Now
                  </button>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

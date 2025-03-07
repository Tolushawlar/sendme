"use client";

import { motion } from "framer-motion";
import { Users2, HandHeart, Smile } from "lucide-react";
import Image from "next/image";

// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ColumnSection from "./ui/columnItem";
import LocalColumnSection from "./ui/localColumnItem";

const cardData = [
  {
    imageSrc: "/f5.jpeg",
    imageSrc2: "/bg1.jpg",
    imageSrc3: "/f9.jpg",
    title: "Local and Inter-state Shipping for Personal and Business use",
    description:
      "We offer doorstep delivery not only to states within Nigeria but also worldwide.",
  },
];

export function CardFeature() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      id="about"
      className="w-full bg-[#F9F5E8] space-y-0"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="w-[100vw] "
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-[100vw]">
          {cardData.map((card) => (
            // eslint-disable-next-line react/jsx-key
            <div className="grid grid-col-1 md:grid-col-0 gap-4">
              <div
                key={card.title}
                className="bg-white p-[60px] lg:h-[700px] shadow-sm w-[100vw] md:w-[100vw] flex flex-row"
              >
                <div className="mb-4 flex flex-row w-[90vw] items-center justify-between rounded-2xl">
                  <div className=" flex-row hidden md:flex">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={400}
                      height={10}
                      className="border-4 border-orange-400 w-[20vw] h-96 object-cover z-10 rounded-2xl"
                    />
                    <Image
                      src={card.imageSrc2}
                      alt={card.title}
                      width={400}
                      height={10}
                      className="border-4 border-blue-400 w-[20vw] h-96 relative top-12 right-[170px]  object-cover rounded-2xl"
                    />
                    <Image
                      src={card.imageSrc3}
                      alt={card.title}
                      width={400}
                      height={10}
                      className="border-4 border-orange-400 w-[20vw] h-96 relative top-[100px] right-[260px] ml-[20px] object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col w-[550px] mr-[30px]">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fontTomorrow">
                      {card.title}
                    </h2>
                    {/* <p className="text-gray-500 mt-10 md:text-lg">
                      {card.description}
                    </p> */}
                    <LocalColumnSection/>
                  </div>
                </div>

                {/* <a href="#" className="text-blue-500 text-sm font-semibold">
                  Read Post →
                </a> */}
              </div>
            </div>
          ))}
        </div>

        {/* <motion.div variants={fadeInUp} className="mt-8">
          <Card className="overflow-hidden rounded-3xl border-none bg-blue-500 p-8 text-white">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold">
                  How To Start Using Boslight
                </h2>
                <p className="mt-2 text-blue-100">
                  In deliverying out their duties to provide you with top notch
                  financial services
                </p>
              </div>
              <motion.div
                variants={staggerChildren}
                className="grid gap-8 md:grid-cols-3"
              >
                {[
                  {
                    icon: Users2,
                    title: "Register Yourself",
                    description:
                      "Sign up to join and be part of the people who love to use Boslight",
                  },
                  {
                    icon: HandHeart,
                    title: "Select Plan & Send Application",
                    description:
                      "There are many plans you can choose to from which identifies with with your need",
                  },
                  {
                    icon: Smile,
                    title: "Customer Relations",
                    description:
                      "Our team reaches out to you about your application and your loan is disbursed.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-blue-100">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Card>
        </motion.div> */}
      </motion.div>
    </div>
  );
}

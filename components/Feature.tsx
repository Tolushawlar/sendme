"use client";

import { motion } from "framer-motion";
import { Users2, HandHeart, Smile } from "lucide-react";
import Image from "next/image";

// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const cardData = [
  {
    imageSrc: "/bg7.jpeg",
    imageSrc2: "/f2.jpeg",
    imageSrc3: "/f4.jpeg",
    title: "Boslight is an innovative lending company",
    description:
      "Offers fast, unsecured loans without the need for collateral. Once your application is completed, we can disburse funds within just minutes, with a maximum processing time of 24 hours, depending on your profile. Whether you need quick access to up to N5,000,000, Boslight is here to provide reliable financial solutions tailored to your needs. Experience the ease of Smart Money Solutions with Boslight.",
  },
];

export function Feature() {
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
      className="w-full bg-[#F9F5E8] space-y-8 py-12 md:py-16 lg:py-20"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="container px-4 md:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cardData.map((card) => (
            // eslint-disable-next-line react/jsx-key
            <div className="grid grid-col-1 md:grid-col-0 gap-4">
              <div
                key={card.title}
                className="bg-white rounded-3xl p-6 shadow-sm max-h-[500px] w-[91vw] md:w-[96vw] flex flex-row"
              >
                <div className="mb-4 flex flex-row w-[90vw] items-center justify-between rounded-2xl">
                  <div className=" flex-row hidden md:flex">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={400}
                      height={10}
                      className="w-[10vw] h-96 object-cover rounded-2xl"
                    />
                    <Image
                      src={card.imageSrc2}
                      alt={card.title}
                      width={400}
                      height={10}
                      className="w-[10vw] h-96 ml-5 object-cover rounded-2xl"
                    />
                    <Image
                      src={card.imageSrc3}
                      alt={card.title}
                      width={400}
                      height={10}
                      className="w-[10vw] h-96 ml-[20px] object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col w-[550px] mr-[30px]">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fontTomorrow">
                      {card.title}
                    </h2>
                    <p className="text-gray-500 mt-10 md:text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* <a href="#" className="text-blue-500 text-sm font-semibold">
                  Read Post →
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-8">
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
        </motion.div>
      </motion.div>
    </div>
  );
}

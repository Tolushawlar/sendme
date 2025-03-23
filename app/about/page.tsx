"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Feature } from "@/components/Feature";
import { MissionVision } from "@/components/ui/missionVisonData";
import { motion } from "framer-motion";
import { TruckIcon, GlobeIcon, UsersIcon, AwardIcon } from "lucide-react";
import TeamSection from "@/components/TeamSection";

const AboutPage = () => {
  const stats = [
    { number: "5+", label: "Years Experience", icon: <AwardIcon className="w-6 h-6" /> },
    { number: "10k+", label: "Successful Deliveries", icon: <TruckIcon className="w-6 h-6" /> },
    { number: "50+", label: "Team Members", icon: <UsersIcon className="w-6 h-6" /> },
    { number: "20+", label: "Cities Covered", icon: <GlobeIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="overflow-x-hidden min-h-screen bg-[#F9F5E8]">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-[120px] lg:mt-0 h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            layout="fill"
            objectFit="cover"
            alt="Sendme Deliveries Hero"
            className="brightness-50"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Logistics Through Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Redefining the future of delivery services with cutting-edge technology
            and customer-centric solutions.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-3 text-[#F17E2E]">
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-blue-900 tracking-tighter sm:text-4xl md:text-5xl fontTomorrow  leading-tight">
                About <span className="text-[#F17E2E]">Sendme</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established in 2019 in Nigeria, Sendme Deliveries has grown from a
                local courier service to a comprehensive logistics solution provider.
                We combine innovative technology with exceptional customer service to
                deliver reliable and efficient shipping solutions.
              </p>
              <div className="pt-4">
                <button className="bg-[#F17E2E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e06718] transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/delivery man.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="Logistics Team"
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F17E2E] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Feature />

      {/* Team Section */}
      <TeamSection />

      {/* Mission & Vision Section */}
      <MissionVision />

      <Footer />
    </div>
  );
};

export default AboutPage;

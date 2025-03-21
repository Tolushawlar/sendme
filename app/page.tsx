/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { DonationCard } from "@/components/DonationCard";
import { Faq } from "@/components/Faq";
import { ContactSection } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { TestimonalCard } from "@/components/TestimonialCard";
import { AiFillHome, AiFillPhone, AiFillSignature } from "react-icons/ai";
import PartnersCarousel from "@/components/ui/partners";
import Testimonials from "@/components/ui/testimonial";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plane, Clock, Shield, Globe, FileCheck, Package, ArrowRight } from "lucide-react";

const Home = () => {
  const donationCards = [
    {
      title: "Empowering Customers",
      headline: "Achieve Your Dreams, Simplified",
      description:
        "We simplify your financial journey by consolidating your loans into one, more manageable payment. Enjoy lower interest rates and extended repayment terms, giving you the freedom to pursue your goals.",
      image: "/bg3.jpg",
      amount: "2",
      goal: "$5,000",
      progress: "$3,200",
    },
    {
      title: "Rapid Disbursement",
      headline: "Funds in Your Account, Fast",
      description:
        "Don't let bureaucratic delays hinder you. Our streamlined approval process ensures you receive your loan funds quickly. We understand the urgency of your needs, and we're committed to delivering timely financial solutions.",
      image: "/f4.jpeg",
      amount: "3",
      goal: "$10,000",
      progress: "$6,500",
    },
    {
      title: "Expert Professional Support",
      headline: "Expert Guidance, Every Step of the Way",
      description:
        "Our team of experienced professionals is dedicated to providing personalized support. From loan application to repayment, we're here to guide you through the process.",
      image: "/bg4.jpg",
      amount: "4",
      goal: "$8,000",
      progress: "$4,200",
    },
    {
      title: "Data Protection & Transparency",
      headline: "Transparent Security Practices",
      description:
        "Rest easy knowing your financial information is safe with us, our services ensure your data is protected from unauthorized access and privacy to safeguard your sensitive information.",
      image: "/bg5.jpg",
      amount: "5",
      goal: "$12,000",
      progress: "$7,800",
    },
    {
      title: "Flexible Repayment Plans",
      headline: "Tailored Repayment Solutions",
      description:
        "We believe in flexibility. Our repayment plans are designed to adapt to your specific financial situation. Whether you need shorter-term solutions or longer-term support, we've got you covered.",
      image: "/bg6.jepg",
      amount: "6",
      goal: "$6,000",
      progress: "$3,500",
    },
    {
      title: "Dedicated Account Manager",
      headline: "Personal Financial Advisor",
      description:
        "Your success is our priority. That's why we assign a dedicated account manager to each client. They'll be your go-to person for any questions, concerns, or financial advice.",
      image: "/f1.jpeg",
      amount: "7",
      goal: "$9,000",
      progress: "$5,100",
    },
  ];

  return (
    <div className="overflow-x-hidden h-full bg-[#F9F5E8]">
      {/* Hero Section */}
      <Header />
      <Hero />

      {/* Feature Section */}
      <Feature />

      <PartnersCarousel />

      {/* <Testimonal />> */}
      <Testimonials />

      {/* Donation Cards */}
      {/* <section id="features" className="py-24 bg-[#F9F5E8]">
        <div className="container px-4 mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            How We <span className="text-blue-500">Stand Out</span> From Others
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {donationCards.map((card, index) => (
              <DonationCard key={index} {...card} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      <Faq />

      {/* <ContactSection /> */}

      {/* CTA Section */}
      <div className="relative bottom-14 max-w-7xl border-blue-900  mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Ship Internationally?
          </h2>
          <p className="text-blue-900/80 mb-8 text-lg">
            Get started with our international shipping services today. Our team
            is ready to assist you with any questions.
          </p>
          <Link
            href="/dashboard/users"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

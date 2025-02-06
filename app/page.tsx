"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { DonationCard } from "@/components/DonationCard";
import { Faq } from "@/components/Faq";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { TestimonalCard } from "@/components/TestimonialCard";
import { AiFillHome, AiFillPhone, AiFillSignature } from "react-icons/ai";

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

  const testimonials = [
    {
      name: "Folashade Olaniyan",
      title: "Happy Homeowner",
      headline: "A Dream Come True",
      description:
        "Your easy application process and competitive interest rates made my homeownership dream a reality. Thank you for making it so simple.",
      image: "/testimonial2.jpg",
    },
    {
      name: "Kunle Adeyemi",
      title: "Satisfied Customer",
      headline: "Professional and Efficient",
      description:
        "The team at Boslight was incredibly helpful and knowledgeable. They guided me through the entire process and ensured I got the best deal.",
      image: "/testimonial3.jpg",
    },
    {
      name: "John Emeka",
      title: "Thriving Entrepreneur",
      headline: "A Game-Changer",
      description:
        "Your quick loan approval and flexible repayment terms gave my business the boost it needed. I'm grateful for your support.",
      image: "/testimonial4.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F5E8]">
      {/* Hero Section */}
      <Header />
      <Hero />

      {/* Feature Section */}
      <Feature />

      {/* Donation Cards */}
      <section id="features" className="py-24 bg-[#F9F5E8]">
        {/* <NewDonationCard /> */}
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
      </section>

      <Faq />

      {/* <Testimonal />> */}
      <section className="py-24 bg-[#F9F5E8]">
        {/* <NewDonationCard /> */}
        <div className="container px-4 mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Hear What Our <span className="text-blue-500">Customers Say</span>{" "}
            About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((card, index) => (
              <TestimonalCard key={index} {...card} index={index} />
            ))}
          </div>
        </div>

        <div className="subContact mt-[100px] p-10  bg-white w-full">
          <div className="text-left lg:ml-[100px]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to take the next step?
            </h1>
            <p className="text-sm text-gray-600 mb-12">
              Reach out today and let us help you achieve your financial goals.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col items-start lg:justify-evenly">
            <div className="flex flex-row items-start lg:mb-0 mb-5 ">
              <div className="p-5 rounded-10 rounded-md border-[2px] border-blue-500">
                <AiFillHome
                  color="blue"
                  size={100}
                  className="w-8 h-8 mt-1"
                />
              </div>{" "}
              <div className="flex flex-col ml-2">
                <p className="font-bold text-2xl">Address</p>
                <p className="lg:max-w-[400px]">
                  Aminu Street, opposite former lotto central hospital, Lotto
                  busstop Ogun State
                </p>{" "}
              </div>
            </div>
            <div className="flex flex-row items-start lg:mb-0 mb-5">
              <div className="p-5 rounded-10 rounded-md border-[2px] border-blue-500">
                <AiFillSignature
                  color="blue"
                  size={100}
                  className="w-8 h-8 mt-1"
                />
              </div>{" "}
              <div className="flex flex-col ml-2">
                <p className="font-bold text-2xl">Email</p>
                <p>contact@boslightmulti-serviceslimited.com</p>
              </div>
            </div>
            <div className="flex flex-row items-start ">
              <div className="p-5 rounded-10 rounded-md border-[2px] border-blue-500">
                <AiFillPhone color="blue" size={100} className="w-8 h-8 mt-1" />
              </div>{" "}
              <div className="flex flex-col ml-2">
                <p className="font-bold text-2xl">Phone Number</p>
                <p>+234 906 642 8296</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;

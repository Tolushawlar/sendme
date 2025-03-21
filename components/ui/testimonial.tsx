"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

const testimonials = [
    {
      name: "Chioma Okeke",
      location: "Lagos, Nigeria", 
      title: "Small Business Owner",
      headline: "Reliable & Affordable",
      description:
        "Your delivery services have been a game-changer for my business! Fast, secure, and always on time. I can now reach my customers effortlessly.",
    //   image: "https://source.unsplash.com/200x200/?african,woman",
    },
    {
      name: "James Carter",
      location: "New York, USA",
      title: "E-commerce Entrepreneur", 
      headline: "Seamless International Shipping",
      description:
        "I've tried many logistics services, but none compare. My shipments arrive quickly, and tracking is so easy. Absolutely hassle-free!",
    //   image: "https://source.unsplash.com/200x200/?american,man",
    },
    {
      name: "Amara Daniels",
      location: "Toronto, Canada",
      title: "Frequent Online Shopper",
      headline: "Fast & Secure Delivery",
      description:
        "I order packages from Nigeria often, and your service ensures I get them in record time! No delays, no hidden fees—just excellent service.",
    //   image: "https://source.unsplash.com/200x200/?canadian,woman",
    },
    {
      name: "Liam Wilson",
      location: "London, UK",
      title: "Corporate Client",
      headline: "Exceptional Service", 
      description:
        "From warehouse storage to last-mile delivery, your logistics solutions have been top-notch. Efficient, professional, and reliable every time!",
    //   image: "https://source.unsplash.com/200x200/?british,man",
    },
    {
      name: "Sofia Rodriguez",
      location: "Madrid, Spain",
      title: "Import/Export Manager",
      headline: "Outstanding Global Reach",
      description: 
        "Managing international shipments has never been easier. The customs clearance process is smooth, and the delivery times are consistently impressive.",
    //   image: "https://source.unsplash.com/200x200/?spanish,woman",
    },
    {
      name: "Ahmed Hassan",
      location: "Dubai, UAE",
      title: "Retail Chain Owner",
      headline: "Premium Logistics Partner",
      description:
        "Their logistics expertise has helped scale my business across multiple locations. Temperature-controlled shipping and real-time tracking make them invaluable.",
    //   image: "https://source.unsplash.com/200x200/?middle-eastern,man",
    }
  ];
  

export default function Testimonials() {
  return (
    <section className="relative bottom-[80px] py-24 bg-white text-blue-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fontTomorrow text-center mb-16">
          Hear What Our <span className="text-orange-500">Customers Say</span>{" "}
          About Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8 place-self-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* <Image
                src={testimonial.image}
                width={80}
                height={80}
                alt={testimonial.name}
                className="rounded-full border-4 border-orange-500 shadow-lg"
              /> */}
              <h3 className="text-xl font-semibold mt-4 text-blue-900">{testimonial.name}</h3>
              <p className="text-orange-500 text-sm">{testimonial.title}</p>
              <h4 className="text-lg font-medium mt-2 text-gray-700">{testimonial.headline}</h4>
              <p className="text-md text-black mt-2 text-left">{testimonial.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

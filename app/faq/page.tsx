"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FaqPage() {
  const faqItems = [
    {
      question: "How does your logistics service work?",
      answer:
        "We provide fast, secure, and reliable delivery solutions for individuals and businesses. Simply book a shipment, track it in real-time, and receive it at your doorstep. Our advanced logistics network ensures timely deliveries with optimized routes and real-time monitoring.",
    },
    {
      question: "Which locations do you deliver to?",
      answer:
        "We deliver locally within Nigeria and internationally to the USA, UK, Canada, and over 200 other countries. Our global partnerships allow seamless international logistics solutions with customs clearance assistance.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your package in real-time using our tracking portal. Just enter your tracking ID, and you'll see its current status, estimated delivery time, and any transit updates.",
    },
    {
      question: "What are your delivery timeframes?",
      answer:
        "Local deliveries take 24-48 hours, while international shipments arrive within 3-5 business days, depending on the destination. Express services are available for urgent shipments.",
    },
    {
      question: "Do you offer express or same-day delivery?",
      answer:
        "Yes, we provide express and same-day delivery options for urgent shipments within select cities. You can select the priority delivery option at checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, bank transfers, and mobile payment options. For business accounts, we offer invoicing and flexible payment terms.",
    },
    {
      question: "Is my package insured?",
      answer:
        "Yes, all shipments include basic insurance. Additional insurance options are available for high-value items to ensure full coverage against loss or damage.",
    },
  ];

  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <>
      <div className="h-min-screen bg-black text-white pt-36 px-6 md:px-16">
        <Header />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-lg border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-blue-400"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${openItem === index
                      ? "rotate-180 text-blue-400"
                      : "text-gray-300"
                    }`}
                />
              </button>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-gray-300 text-sm">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative top-[200px]">
        <Footer />
      </div>
    </>
  );
}

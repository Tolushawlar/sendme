"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Faq() {
  const faqItems = [
    {
      question: "How does your logistics service work?",
      answer:
        "We provide fast, secure, and reliable delivery solutions for individuals and businesses. Simply book a shipment, track it in real-time, and receive it at your doorstep.",
    },
    {
      question: "Which locations do you deliver to?",
      answer:
        "We deliver locally within Nigeria and internationally to the USA, UK, Canada, and over 200 other countries.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your package in real-time using our tracking portal. Just enter your tracking ID, and you'll see its current status.",
    },
    {
      question: "What are your delivery timeframes?",
      answer:
        "Local deliveries take 24-48 hours, while international shipments arrive within 3-5 business days, depending on the destination.",
    },
    {
      question: "Do you offer express or same-day delivery?",
      answer:
        "Yes, we provide express and same-day delivery options for urgent shipments within select cities.",
    },
  ];

  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="relative bottom-[150px] py-24 bg-black text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-lg border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-blue-400"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openItem === index ? "rotate-180 text-blue-400" : "text-gray-300"
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
    </section>
  );
}

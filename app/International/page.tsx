// "use client";

// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, Plane, Clock, Shield, Globe, FileCheck, Package } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function InternationalPage() {
//     // Service Cards Data
//     const serviceCards = [
//         {
//             icon: <Plane className="w-8 h-8 text-blue-500" />,
//             title: "Global Express Delivery",
//             description: "Fast and reliable shipping to over 200 countries with priority handling and express customs clearance.",
//         },
//         {
//             icon: <Clock className="w-8 h-8 text-blue-500" />,
//             title: "Time-Definite Services",
//             description: "Guaranteed delivery times with multiple shipping speeds to meet your schedule and budget.",
//         },
//         {
//             icon: <Shield className="w-8 h-8 text-blue-500" />,
//             title: "Secure Shipping",
//             description: "Enhanced security measures and insurance options for valuable international shipments.",
//         },
//         {
//             icon: <Globe className="w-8 h-8 text-blue-500" />,
//             title: "Worldwide Coverage",
//             description: "Comprehensive network covering major global markets with local expertise.",
//         },
//         {
//             icon: <FileCheck className="w-8 h-8 text-blue-500" />,
//             title: "Customs Expertise",
//             description: "Professional customs clearance support and documentation assistance.",
//         },
//         {
//             icon: <Package className="w-8 h-8 text-blue-500" />,
//             title: "Specialized Handling",
//             description: "Custom solutions for sensitive, high-value, and specialized cargo requirements.",
//         },
//     ];

//     const internationalFaqItems = [
//         {
//             question: "What countries do you ship to internationally?",
//             answer:
//                 "We provide comprehensive international shipping services to over 200 countries worldwide, with strong presence in the USA, UK, Canada, EU countries, UAE, Australia, and major Asian markets. Each destination has specific shipping requirements and timeframes.",
//         },
//         {
//             question: "What documents are required for international shipping?",
//             answer:
//                 "Required documents include: commercial invoice, packing list, certificate of origin (when applicable), customs declaration forms, and any specific documentation required by the destination country. For certain items, you may need additional permits or certificates.",
//         },
//         {
//             question: "How are international shipping rates calculated?",
//             answer:
//                 "International shipping rates are calculated based on several factors: package weight, dimensions, destination country, delivery speed, and type of service selected. We offer various service levels from standard to express delivery to meet different budget needs.",
//         },
//         {
//             question: "What are the customs and duties policies?",
//             answer:
//                 "Customs duties and taxes are determined by the destination country and are typically paid by the recipient. We provide customs clearance assistance and can help estimate potential duties, but final charges are set by customs authorities.",
//         },
//         {
//             question: "What are the delivery timeframes for international shipping?",
//             answer:
//                 "Standard international delivery typically takes 5-10 business days, while express services can deliver within 2-4 business days depending on the destination. Specific transit times vary by country and service level selected.",
//         },
//         {
//             question: "Do you offer international package tracking?",
//             answer:
//                 "Yes, we provide real-time tracking for all international shipments through our online portal. You'll receive detailed updates at every major checkpoint, including customs clearance status and expected delivery times.",
//         },
//         {
//             question: "What items are restricted for international shipping?",
//             answer:
//                 "Restricted items vary by country but generally include: dangerous goods, perishables, precious metals, currency, live animals, and certain electronics. We recommend checking specific country restrictions before shipping.",
//         },
//         {
//             question: "What insurance options are available for international shipments?",
//             answer:
//                 "All international shipments include basic coverage up to $100. Additional insurance is available for purchase, covering up to the full declared value of your items. We recommend extra coverage for high-value shipments.",
//         },
//         {
//             question: "How do you handle lost or damaged international packages?",
//             answer:
//                 "We have a comprehensive claims process for lost or damaged packages. Claims must be filed within 30 days of the shipping date. Our international shipping insurance covers verified claims according to the selected coverage level.",
//         },
//         {
//             question: "Do you offer special handling for sensitive items?",
//             answer:
//                 "Yes, we offer specialized handling for temperature-sensitive items, fragile goods, and high-value packages. These services include climate-controlled shipping, extra padding, and enhanced security measures where available.",
//         },
//     ];

//     const [openItem, setOpenItem] = useState<number | null>(null);


//     return (
//         <>
//             <div className="min-h-screen bg-black text-white pt-24 md:pt-36 px-4 md:px-16">
//                 <Header />

//                 {/* Hero Section */}
//                 <div className="max-w-4xl mx-auto text-center mb-12 mt-[120px]">
//                     <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                         International{" "}
//                         <span className="text-blue-500">Shipping Services</span>
//                     </h1>
//                     <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
//                         Reliable and efficient international shipping solutions connecting you
//                         to over 200 countries worldwide. Experience seamless global logistics
//                         with our expert service.
//                     </p>
//                 </div>

//                 {/* Service Cards Section */}
//                 <div className="max-w-7xl mx-auto mb-16">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                         {serviceCards.map((card, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                                 className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group"
//                             >
//                                 <div className="flex flex-col h-full">
//                                     <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-all duration-300">
//                                         {card.icon}
//                                     </div>
//                                     <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400">
//                                         {card.title}
//                                     </h3>
//                                     <p className="text-gray-300 text-base flex-grow">
//                                         {card.description}
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="max-w-7xl mx-auto mb-16">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center"
//                         >
//                             <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">200+</h3>
//                             <p className="text-gray-300">Countries Served</p>
//                         </motion.div>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.1 }}
//                             className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center"
//                         >
//                             <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">24/7</h3>
//                             <p className="text-gray-300">Support Available</p>
//                         </motion.div>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center"
//                         >
//                             <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">99%</h3>
//                             <p className="text-gray-300">On-Time Delivery</p>
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* FAQ Section */}
//                 <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
//                     <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
//                         Frequently Asked Questions
//                     </h2>
//                     <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
//                         {internationalFaqItems.map((item, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="bg-white bg-opacity-10 p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-lg border border-white/20"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                             >
//                                 <button
//                                     className="w-full flex justify-between items-center text-left text-base md:text-lg font-medium text-blue-400"
//                                     onClick={() => setOpenItem(openItem === index ? null : index)}
//                                 >
//                                     <span>{item.question}</span>
//                                     <ChevronDown
//                                         className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${openItem === index
//                                             ? "rotate-180 text-blue-400"
//                                             : "text-gray-300"
//                                             }`}
//                                     />
//                                 </button>
//                                 <AnimatePresence>
//                                     {openItem === index && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             transition={{ duration: 0.4 }}
//                                             className="overflow-hidden mt-3"
//                                         >
//                                             <p className="text-gray-300 text-sm md:text-base">
//                                                 {item.answer}
//                                             </p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Call to Action Section */}
//                 <div className="max-w-4xl mx-auto mt-12 md:mt-16 text-center">
//                     <div className="bg-blue-500 bg-opacity-20 rounded-xl p-6 md:p-8 backdrop-blur-lg">
//                         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//                             Ready to Ship Internationally?
//                         </h2>
//                         <p className="text-gray-300 mb-6">
//                             Get started with our international shipping services today. Our team
//                             is ready to assist you with any questions.
//                         </p>
//                         <Link
//                             href="/contact"
//                             className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
//                         >
//                             Contact Our Team
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="relative top-[200px]">
//                 <Footer />
//             </div>
//         </>
//     );
// }


"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plane, Clock, Shield, Globe, FileCheck, Package, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function InternationalPage() {
    const serviceCards = [
        {
            icon: <Plane className="w-8 h-8 text-orange-500" />,
            title: "Global Express Delivery",
            description: "Fast and reliable shipping to over 200 countries with priority handling and express customs clearance.",
        },
        {
            icon: <Clock className="w-8 h-8 text-orange-500" />,
            title: "Time-Definite Services",
            description: "Guaranteed delivery times with multiple shipping speeds to meet your schedule and budget.",
        },
        {
            icon: <Shield className="w-8 h-8 text-orange-500" />,
            title: "Secure Shipping",
            description: "Enhanced security measures and insurance options for valuable international shipments.",
        },
        {
            icon: <Globe className="w-8 h-8 text-orange-500" />,
            title: "Worldwide Coverage",
            description: "Comprehensive network covering major global markets with local expertise.",
        },
        {
            icon: <FileCheck className="w-8 h-8 text-orange-500" />,
            title: "Customs Expertise",
            description: "Professional customs clearance support and documentation assistance.",
        },
        {
            icon: <Package className="w-8 h-8 text-orange-500" />,
            title: "Specialized Handling",
            description: "Custom solutions for sensitive, high-value, and specialized cargo requirements.",
        },
    ];

    const internationalFaqItems = [
        {
            question: "What countries do you ship to internationally?",
            answer:
                "We provide comprehensive international shipping services to over 200 countries worldwide, with strong presence in the USA, UK, Canada, EU countries, UAE, Australia, and major Asian markets. Each destination has specific shipping requirements and timeframes.",
        },
        {
            question: "What documents are required for international shipping?",
            answer:
                "Required documents include: commercial invoice, packing list, certificate of origin (when applicable), customs declaration forms, and any specific documentation required by the destination country. For certain items, you may need additional permits or certificates.",
        },
        {
            question: "How are international shipping rates calculated?",
            answer:
                "International shipping rates are calculated based on several factors: package weight, dimensions, destination country, delivery speed, and type of service selected. We offer various service levels from standard to express delivery to meet different budget needs.",
        },
        {
            question: "What are the customs and duties policies?",
            answer:
                "Customs duties and taxes are determined by the destination country and are typically paid by the recipient. We provide customs clearance assistance and can help estimate potential duties, but final charges are set by customs authorities.",
        },
        {
            question: "What are the delivery timeframes for international shipping?",
            answer:
                "Standard international delivery typically takes 5-10 business days, while express services can deliver within 2-4 business days depending on the destination. Specific transit times vary by country and service level selected.",
        },
        {
            question: "Do you offer international package tracking?",
            answer:
                "Yes, we provide real-time tracking for all international shipments through our online portal. You'll receive detailed updates at every major checkpoint, including customs clearance status and expected delivery times.",
        },
        {
            question: "What items are restricted for international shipping?",
            answer:
                "Restricted items vary by country but generally include: dangerous goods, perishables, precious metals, currency, live animals, and certain electronics. We recommend checking specific country restrictions before shipping.",
        },
        {
            question: "What insurance options are available for international shipments?",
            answer:
                "All international shipments include basic coverage up to $100. Additional insurance is available for purchase, covering up to the full declared value of your items. We recommend extra coverage for high-value shipments.",
        },
        {
            question: "How do you handle lost or damaged international packages?",
            answer:
                "We have a comprehensive claims process for lost or damaged packages. Claims must be filed within 30 days of the shipping date. Our international shipping insurance covers verified claims according to the selected coverage level.",
        },
        {
            question: "Do you offer special handling for sensitive items?",
            answer:
                "Yes, we offer specialized handling for temperature-sensitive items, fragile goods, and high-value packages. These services include climate-controlled shipping, extra padding, and enhanced security measures where available.",
        },
    ];

    const [openItem, setOpenItem] = useState<number | null>(null);

    return (
        <>
            <div className="lg:min-h-screen bg-gradient-to-b from-white to-blue-50">
                <Header />

                {/* Hero Section */}
                <motion.div
      initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full px-30 sm:px-6 lg:px-32 pt-32 pb-32 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat"
                >
                    <div className="text-center space-y-8 mt-[120px] bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-blue-600">
                            International{" "}
                            <span className="text-orange-500">Shipping Services</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-14">
                            Reliable and efficient international shipping solutions connecting you
                            to over 200 countries worldwide. Experience seamless global logistics
                            with our expert service.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/dashboard/users"
                                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
                {/* Service Cards Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="mb-4 p-4 bg-blue-50 rounded-xl w-fit">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-blue-600">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 flex-grow">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-xl"
                            >
                                <h3 className="text-4xl font-bold text-orange-500 mb-2">200+</h3>
                                <p className="text-blue-600 font-medium">Countries Served</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-xl"
                            >
                                <h3 className="text-4xl font-bold text-orange-500 mb-2">24/7</h3>
                                <p className="text-blue-600 font-medium">Support Available</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-xl"
                            >
                                <h3 className="text-4xl font-bold text-orange-500 mb-2">99%</h3>
                                <p className="text-blue-600 font-medium">On-Time Delivery</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {internationalFaqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100"
                            >
                                <button
                                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                                    onClick={() => setOpenItem(openItem === index ? null : index)}
                                >
                                    <span className="text-xl text-blue-600">{item.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${openItem === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openItem === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-4"
                                        >
                                            <p className="text-md text-gray-600">{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-bg-[#F9F5E8] to-bg-[#e4e0d1] rounded-3xl p-8 md:p-12 text-center shadow-xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                            Ready to Ship Internationally?
                        </h2>
                        <p className="text-blue-900/80 mb-8 text-lg">
                            Get started with our international shipping services today. Our team
                            is ready to assist you with any questions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                        >
                            Contact Our Team
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div> */}
            </div>
            <Footer />
        </>
    );
}

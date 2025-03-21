'use client';

import { motion } from 'framer-motion';
import { Truck, Package, Globe, ShieldCheck, Users, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Supply Chain Consistency',
    description: 'Are you interested in leveraging logistics to work efficiently for your business? We offer uniquely tailored expert advice and analysis that can work for your business.',
  },
  {
    icon: Package,
    title: 'Fast & Secure Delivery',
    description: 'Our efficient logistics network ensures that your packages are delivered safely and on time, with tracking options available.',
  },
  {
    icon: Globe,
    title: 'Global Shipping',
    description: 'Seamless international logistics solutions to help you ship products worldwide with ease.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Handling',
    description: 'We take extreme care in handling fragile and valuable goods, ensuring they arrive in perfect condition.',
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: '24/7 customer support to assist you with any inquiries or issues related to your shipments.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Rates',
    description: 'Cost-effective shipping solutions tailored to your budget without compromising on quality.',
  },
];

export default function DedicatedServices() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-12"> Services</h2> */}
      <h2 className="text-3xl text-center mb-12 font-bold text-blue-900 tracking-tighter sm:text-4xl md:text-5xl fontTomorrow">
        We Offer <span className="text-orange-500">Dedicated </span> Delivery Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col items-left hover:shadow-xl"
          >
            <div className="p-4 rounded-full text-white mb-4 ">
              <service.icon size={50} color='blue' />
            </div>
            <h3 className="text-xl font-semibold text-[#F17E2E] my-2">{service.title}</h3>
            <p className="text-gray-600 mt-2 text-justify">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

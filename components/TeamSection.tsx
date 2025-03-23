// components/TeamSection.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/f3.jpg", // Add your image path
    bio: "10+ years of experience in logistics and supply chain management",
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    image: "/f3.jpg",
    bio: "Former Tech Lead at Amazon with expertise in logistics technology",
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      github: "https://github.com/michaelchen",
    },
  },
  {
    name: "Amanda Peters",
    role: "Operations Director",
    image: "/f3.jpg",
    bio: "Specialized in optimizing delivery networks and customer satisfaction",
    social: {
      linkedin: "https://linkedin.com/in/amandapeters",
      twitter: "https://twitter.com/amandapeters",
      github: "https://github.com/amandapeters",
    },
  },
  {
    name: "David Wilson",
    role: "Customer Success Lead",
    image: "/f3.jpg",
    bio: "Dedicated to ensuring exceptional service delivery and client relations",
    social: {
      linkedin: "https://linkedin.com/in/davidwilson",
      twitter: "https://twitter.com/davidwilson",
      github: "https://github.com/davidwilson",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 tracking-tighter sm:text-4xl md:text-5xl fontTomorrow  leading-tight">
            Meet Our <span className="text-[#F17E2E]">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals working together to revolutionize
            the delivery industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Glass Effect Card */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-4">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-200 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.bio}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#F17E2E] transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#F17E2E] transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#F17E2E] transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

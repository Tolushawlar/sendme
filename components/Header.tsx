"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { push } = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleRoute = () => {
    if (user) {
      return push("/dashboard/users");
    }
    push("/login");
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: hasScrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: hasScrolled ? "blur(10px)" : "blur(0px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Logo /> */}
          <p>Logo</p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-6"
        >

          {/* <Link href="/" className="text-sm font-medium">
            Home
          </Link> */}
          <Link href="#about" className="text-sm font-medium fontTomorrow">
            About Us
          </Link>
          <Link href="#features" className="text-sm font-medium fontTomorrow">
            Features
          </Link>
          <Link href="#services" className="text-sm font-medium fontTomorrow">
            Services
          </Link>
          <Link href="#faq" className="text-sm font-medium fontTomorrow">
            FAQ‘s
          </Link>
          <Link href="#contact" className="text-sm font-medium fontTomorrow">
            Contact Us
          </Link>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            className="bg-[#E97B5F] hover:bg-[#E97B5F]/90 text-white fontTomorrow"
            onClick={handleRoute}
          >
            {user ? "Dashboard" : "Get Started →"}
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}

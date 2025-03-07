"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/local", label: "Local" },
    { href: "/International", label: "International" },
    { href: "/faq", label: "FAQ's" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: hasScrolled || isMenuOpen
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: hasScrolled || isMenuOpen ? "blur(10px)" : "blur(0px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>logo</p>
        </motion.div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span
              className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-12"
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md font-medium fontTomorrow"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        {/* Mobile Navigation */}
        <motion.div
          className={`fixed inset-0 bg-white/95 flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? "flex md:hidden" : "hidden"
            }`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "100%" },
          }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-medium fontTomorrow"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className="bg-[#E97B5F] hover:bg-[#E97B5F]/90 text-white fontTomorrow mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Button>
        </motion.div>

        {/* Desktop Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Button className="bg-[#E97B5F] hover:bg-[#E97B5F]/90 text-white fontTomorrow">
            Get Started
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { GetQuoteButton } from "./GetQuote";
// import { Logo } from "./Logo";
import Image from "next/image";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { push } = useRouter();
  const { user } = useUser();

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
    { href: "/termsCondition", label: "T&C's" },
  ];

  const handleRoute = () => {
    if (user) {
      return push("/dashboard/users");
    }
    push("/login");
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-xl"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: hasScrolled || isMenuOpen
          ? "white"
          : "white",
        backdropFilter: hasScrolled || isMenuOpen ? "blur(0px)" : "blur(0px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between ">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={150}
          height={150}
          className="object-contain"
        />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

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
          <div className="flex items-center gap-4">
            <GetQuoteButton />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white fontTomorrow" onClick={handleRoute}>
              {user ? "Dashboard" : "Get Started →"}
            </Button>
          </div>
        </motion.div>

        {/* Desktop Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <div className="flex items-center gap-4">
            <GetQuoteButton />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white fontTomorrow" onClick={handleRoute}>
              {user ? "Dashboard" : "Get Started →"}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}

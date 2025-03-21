import Link from "next/link";
import { Logo } from "./Logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative bottom">
          <div className="flex items-start gap-2 relative  lg:bottom-8">
            <Logo />
            {/* <p className="text-xl font-semibold">Logo</p> */}
          </div>

          {/* Brand Section */}
          <div className="flex-1">
            {/* Logo and Tagline */}
            <div className="mb-6">

            </div>

            {/* Address Section */}
            <div className="mb-6">
              <h4 className="text-xl md:text-2xl font-bold mb-3">Address</h4>
              <p className="text-gray-600 text-base md:text-lg max-w-md">
                Oda Road, opposite stalion filling station, Akure
                Ondo State
              </p>
            </div>

            {/* Contact Section */}
            <div className="mb-6">
              <h4 className="text-xl md:text-2xl font-bold mb-3">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-600 text-base md:text-lg">
                  contact@sendmedeliveries.com
                </p>
                <p className="text-gray-600 text-base md:text-lg">
                  +234 906 6426 3590
                </p>
              </div>
            </div>

            {/* Desktop Copyright */}
            <div className="hidden lg:block text-gray-500 text-sm">
              © 2025 SendMe. All rights reserved.
            </div>
          </div>

          {/* Navigation and Social Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
            {/* Navigation Links */}
            <nav className="flex-shrink-0">
              <h4 className="text-xl font-bold mb-4">Home</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#" },
                  { label: "Features", href: "#" },
                  { label: "FAQ's", href: "#" },
                  { label: "Contact Us", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <nav className="flex-shrink-0">
              <h4 className="text-xl font-bold mb-4">Social</h4>
              <ul className="space-y-3">
                {[
                  { name: "Facebook", Icon: FaFacebook },
                  { name: "Instagram", Icon: FaInstagram },
                  { name: "Twitter", Icon: FaTwitter }
                ].map(({ name, Icon }) => (
                  <li key={name}>
                    <button
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span className="sr-only">{name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Copyright */}
          <div className="lg:hidden text-gray-500 text-sm mt-8">
            © 2025 SendMe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Specialty",
      href: "#",
      dropdown: [
        { name: "Anorectal Disorders", href: "/anorectal-disorders" },
        { name: "Spine and Joint Disease", href: "/spine-and-joint-disease" },
        { name: "Infertility", href: "/infertility" },
        { name: "Metabolic Disorders", href: "/metabolic-disorders" },
        { name: "Chronic Skin Disorders", href: "/chronic-skin-disorders" },
      ],
    },
    {
      name: "Treatments",
      href: "#",
      dropdown: [
        { name: "Kshar Sutra", href: "/kshar-sutra" },
        { name: "Agni Karma", href: "/agnikarma" },
        { name: "Panchkarma", href: "/panchkarma" },
        { name: "Swarn Prashana", href: "/swarn-prashana" },
        { name: "Pumsvan Karma", href: "/pumsvan-karma" },
        { name: "Adarsh Sansthan Sadhana", href: "/adarsh-sansthan-sadhana" },
      ],
    },
    { name: "Ayurshop", href: "/ayurshop" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#194229] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <span>Welcome to </span>
          <span className="font-bold mx-1">Care Ayurveda Clinic!</span>
          <span className="mx-2">Got Questions? Call Us</span>
          <a href="tel:+918859819975" className="font-semibold hover:underline flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            +91 98270 89853
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://ext.same-assets.com/1201089955/2492350029.png"
              alt="Care Ayurveda Clinic Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-gray-700 hover:text-[#194229] font-medium flex items-center transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] border">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-[#194229] hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Book Appointment Button */}
            <Link
              href="/contact"
              className="bg-[#194229] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#0f2a1a] transition-colors hidden sm:block"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="max-w-7xl mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[#194229] font-medium"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 border-l-2 border-[#194229] ml-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1.5 text-gray-600 hover:text-[#194229] text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block mt-4 bg-[#194229] text-white px-6 py-2.5 rounded-md font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

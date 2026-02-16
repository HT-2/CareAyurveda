"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const treatments = [
    { name: "Kshar Sutra", href: "/kshar-sutra" },
    { name: "Agni Karma Treatments", href: "/agnikarma" },
    { name: "Panchkarma Treatments", href: "/panchkarma" },
    { name: "Swarn Prashana", href: "/swarn-prashana" },
    { name: "Pumsvan Karma", href: "/pumsvan-karma" },
    { name: "Adarsh Sansthan Sadhana", href: "/adarsh-sansthan-sadhana" },
  ];

  const specialties = [
    { name: "Anorectal Disorders", href: "/anorectal-disorders" },
    { name: "Spine & Joint Disorders", href: "/spine-and-joint-disease" },
    { name: "Infertility", href: "/infertility" },
    { name: "Metabolic Disorders", href: "/metabolic-disorders" },
    { name: "Skin Disorders", href: "/chronic-skin-disorders" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Research & Awards", href: "/research-awards" },
    { name: "Ayurshop", href: "/ayurshop" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#194229] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Treatments */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Treatments</h3>
            <ul className="space-y-2">
              {treatments.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Specialty</h3>
            <ul className="space-y-2">
              {specialties.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact information</h3>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <span className="font-semibold text-sm">Call Us</span>
                </div>
                <a href="tel:+918859819975" className="text-gray-300 hover:text-white text-sm block">
                  +91 98270 89853
                </a>
                <a href="tel:+911227960016" className="text-gray-300 hover:text-white text-sm block">
                  +91 70494 86093
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-gray-300" />
                  <span className="font-semibold text-sm">Email Us</span>
                </div>
                <a href="mailto:care.ayurveda.clinic@gmail.com" className="text-gray-300 hover:text-white text-sm">
                care.ayurveda.clinic@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-300" />
                  <span className="font-semibold text-sm">Address</span>
                </div>
                <p className="text-gray-300 text-sm">
                  169,Shrinagar,Railway Road,Hapur,<br />
                  Uttar Pradesh, India-245101
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.0089873762474!2d77.77!3d28.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQzJzQ4LjAiTiA3N8KwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Care Ayurveda Clinic Location"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <img
              src="https://ext.same-assets.com/1201089955/2492350029.png"
              alt="Care Ayurveda Clinic Logo"
              className="h-14 w-auto object-contain brightness-0 invert"
            />

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              © 2023 Care. All rights reserved. Designed By{" "}
              <a
                href="https://pacewalk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Pacewalk
              </a>
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/CareAYURVEDA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/Careayurvedahapur/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://in.linkedin.com/in/Care-tyagi-b791b974"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/user/Caretyagi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

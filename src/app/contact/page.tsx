"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-[#194229]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://ext.same-assets.com/1201089955/2668801950.jpeg")' }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Link href="/" className="hover:text-[#c4d94c] transition-colors">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#194229] mb-2">
              Care <span className="text-[#228B22]">AYURVEDA</span>
            </h2>
            <p className="text-gray-600 uppercase tracking-widest text-sm">
              AN AYURVEDA SPECIALTY CLINIC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Call Us */}
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-[#194229] mb-4" />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <a href="tel:+918859819975" className="text-gray-600 hover:text-[#194229] block">
                +91 98270 89853
              </a>
              <a href="tel:+911227960016" className="text-gray-600 hover:text-[#194229] block">
                +91 70494 86093
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#194229] mb-4" />
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-gray-600 max-w-xs">
                169,Shrinagar,Railway Road,Hapur,<br />
                Uttar Pradesh, 245101 India
              </p>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-[#194229] mb-4" />
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <a href="mailto:care.ayurveda.clinic@gmail.com" className="text-gray-600 hover:text-[#194229]">
                care.ayurveda.clinic@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Form Section */}
      <section className="py-16 px-4 bg-[#f8faf8]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#194229] mb-4">Get In Touch</h2>
            <p className="text-gray-600 italic">
              "Connect with us for seamless communication. Your queries matter—
              reach out today for personalized support and a rewarding customer experience."
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-100 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#194229] outline-none"
              />
              <input
                type="email"
                placeholder="Your e-mail"
                className="w-full bg-gray-100 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#194229] outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full bg-gray-100 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#194229] outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-100 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#194229] outline-none"
              />
            </div>
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full bg-gray-100 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#194229] outline-none resize-none"
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-[#194229] text-white font-bold py-3 px-6 rounded-md hover:bg-[#0f2a1a] transition-colors"
            >
              Send a message
            </button>
          </form>
        </div>
      </section>

      {/* Alert Notice Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#194229] mb-6">Alert Notice</h2>
          <p className="text-gray-600 leading-relaxed">
            This has came to our notice that, there are some peoples, imitating the name of Care AYURVEDA in different cities. This is for kind information that, Care Ayurveda Clinic is not operating any clinic/consultation chamber ,out of Hapur till the date. if any, planned to start, the information will be putted on our official website. If any claim comes to you notice, kindly, inform us.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { User, Clock, ArrowRight } from "lucide-react";

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "गुदा रोग:सही जानकारी सही इलाज",
    excerpt: "गुदा मार्ग में दर्द, जलन, खुजली, खून आना, मांस का बाहर निकलना, पस या मवाद आना, बार-बार फुंसी होना आदि सभी को सामान्य जनता....",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2600&auto=format&fit=crop",
    category: "Ano rectal problems",
    author: "Care Ayurveda Clinic",
    date: "March 19, 2025",
    slug: "guda-rog-sahi-jankari",
  },
  {
    id: 2,
    title: "कमर के निचले हिस्से पर मवाद वाली गाँठ- पूरी जानकारी",
    excerpt: "To Read this article in English Click hereपिलोनिडल साइनस, कमर के निचले हिस्से (पूँछ वाली हड्डी के ऊपर ) के पास एक दर्दनाक गाँठ....",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2600&auto=format&fit=crop",
    category: "Ano rectal problems",
    author: "Care Ayurveda Clinic",
    date: "December 9, 2024",
    slug: "pilonidal-sinus-hindi",
  },
  {
    id: 3,
    title: "Pilonidal Sinus: Kshar Sutra Therapy, full details",
    excerpt: "Pilonidal sinus, a painful cyst near the tailbone, often filled with hair and debris. this cyst bursts at regular intervals and causes great discomfort. ....",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2600&auto=format&fit=crop",
    category: "Ano rectal problems",
    author: "Care Ayurveda Clinic",
    date: "December 9, 2024",
    slug: "pilonidal-sinus-details",
  },
  {
    id: 4,
    title: "भंगदर और पाइल्स ऑपरेशन के बाद भी क्यों लौट आते हैं – जानिए स्थायी समाधान",
    excerpt: "बहुत से लोग मानते हैं कि सर्जरी के बाद पाइल्स/भगंदर हमेशा के लिए खत्म हो जाते हैं, पर कई बार...",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2600&auto=format&fit=crop",
    category: "Uncategorized",
    author: "Care Ayurveda Clinic",
    date: "November 15, 2024",
    slug: "piles-fistula-recurrence",
  },
  {
    id: 5,
    title: "पेट की रहस्यमयी गांठें – जानिए पूरी जानकारी – धन्वंतरि आयुर्वेद",
    excerpt: "पेट की रहस्यमयी गांठें, अगर पेट में बार बार दर्द, दस्त होना, पेट खराब रहना, बार बार जुकाम -बुखार -...",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2574&auto=format&fit=crop",
    category: "Disease knowledge",
    author: "Care Ayurveda Clinic",
    date: "October 20, 2024",
    slug: "stomach-lumps-info",
  },
  {
    id: 6,
    title: "गुदा रोग:सही जानकारी सही इलाज",
    excerpt: "गुदा मार्ग में दर्द, जलन, खुजली, खून आना, मांस का बाहर निकलना, पस या मवाद आना, बार-बार फुंसी होना आदि...",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2572&auto=format&fit=crop",
    category: "Ano rectal problems",
    author: "Care Ayurveda Clinic",
    date: "September 5, 2024",
    slug: "guda-rog-info",
  },
];

const categories = [
  "All",
  "Anorectal Disorders",
  "Gynecology Ayurveda",
  "Disease knowledge",
  "Panchkarma",
  "Kshar Sutra",
  "Metabolic disorders",
  "Skin Disorders",
  "Infertility",
  "Adarsh Sansthan Sadhana",
  "Agni Karma",
  "Seasonal Health Updates",
  "Herbs & Minerals",
  "Spine and Joint disorders",
  "Swarna Prashana",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => {
          // Mapping "Ano rectal problems" to "Anorectal Disorders" for demo purposes if needed,
          // but for now let's just do a simple inclusion check or exact match if categories matched perfectly.
          // Since the dummy data has "Ano rectal problems" and the filter has "Anorectal Disorders",
          // I'll add a loose check or just update the dummy data to match.
          // Updating logic:
          if (activeCategory === "Anorectal Disorders" && post.category === "Ano rectal problems") return true;
          return post.category === activeCategory;
        });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero / Title Section */}
      <section className="bg-[#194229] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Explore the latest insights, treatments, and health tips from Care Ayurveda Clinic.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#194229] text-center mb-8">Read By Category</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#194229] text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="pb-20 max-w-7xl mx-auto px-4">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#dcfce7] text-[#166534] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#194229] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <div className="flex items-center text-gray-500 text-xs mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span className="uppercase">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center bg-[#194229] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0f2a1a] transition-colors group w-fit"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-600">No posts found in this category.</h3>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-[#194229] font-medium hover:underline"
            >
              View all posts
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

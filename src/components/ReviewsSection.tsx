"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Sakir Saifi",
    date: "30 April 2025",
    avatar: "https://ext.same-assets.com/1201089955/3099821553.png",
    rating: 5,
    text: "Mujhe 5 saal se liver ki samsya thi, maine bahut allopathic medicine li lekin koi labh nahi hua. Maine yahan ilaaj karaya, aj 3 saal tak bhi mai theek hu.",
  },
  {
    name: "TahiR KhaN",
    date: "30 April 2025",
    avatar: "https://ext.same-assets.com/1201089955/1266329818.png",
    rating: 5,
    text: "Dhanvantari Ayurveda Mein Maine treatment karaya tha aur mera treatment bahut successful Raha yah Maine 2021 Mein karaya tha Yahan Ke upchar se mujhe bahut hi fayda mila hai...",
  },
  {
    name: "Akshaya Kumar",
    date: "16 April 2025",
    avatar: "https://ext.same-assets.com/1201089955/2465402685.png",
    rating: 5,
    text: "Good emergency treatment with ayurveda. Much better efficiency than allopathy.",
  },
  {
    name: "sweta tyagi",
    date: "14 April 2025",
    avatar: "https://ext.same-assets.com/1201089955/1472089442.png",
    rating: 5,
    text: "I am completely satisfied with the treatment.",
  },
  {
    name: "Shahanshah Alam",
    date: "14 April 2025",
    avatar: "https://ext.same-assets.com/1201089955/2506002323.png",
    rating: 5,
    text: "Mai pichle 6 mahine se dhanvantari ayurveda ka treatment le rha hu, or mari sehat mai bhut sudhar hai, doctor bhut anubhavi hai or staff bhi sahyogi hai.",
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsToShow = 2;

  const nextReviews = () => {
    setCurrentIndex((prev) =>
      prev + reviewsToShow >= reviews.length ? 0 : prev + 1
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - reviewsToShow : prev - 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsToShow);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Rating Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center lg:min-w-[200px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">EXCELLENT</h3>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-3">
              Based on <span className="font-semibold">116 reviews</span>
            </p>
            <img
              src="https://ext.same-assets.com/1201089955/683437208.svg"
              alt="Google"
              className="mx-auto w-20 h-auto"
            />
          </div>

          {/* Reviews Carousel */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleReviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-white p-5 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                        <img
                          src="https://ext.same-assets.com/1201089955/3288692796.svg"
                          alt="Google"
                          className="w-5 h-5"
                        />
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <img
                      src="https://ext.same-assets.com/1201089955/854507047.svg"
                      alt="Verified"
                      className="w-4 h-4 ml-1"
                    />
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">{review.text}</p>
                  <button type="button" className="text-[#228B22] text-sm font-medium mt-2 hover:underline">
                    Read more
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevReviews}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden lg:block"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              type="button"
              onClick={nextReviews}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden lg:block"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-6 lg:hidden">
          <button
            type="button"
            onClick={prevReviews}
            className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            type="button"
            onClick={nextReviews}
            className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

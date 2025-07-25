"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/app/constants/testimonials";

// Testimonials data for each tab

const TAB_LABELS = {
  cart: "سبد خرید",
  transactions: "تراکنش‌ها",
  stats: "آمار",
  calculation: "محاسبه هزینه",
  gold: "قیمت طلا و ارز",
};

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("cart");
  const [currentSlides, setCurrentSlides] = useState({
    cart: 0,
    transactions: 0,
    stats: 0,
    calculation: 0,
    gold: 0,
  });

  const currentTestimonials = TESTIMONIALS_DATA[activeTab];
  const currentSlide = currentSlides[activeTab];

  const nextSlide = () => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] + 1) % currentTestimonials.length,
    }));
  };

  const prevSlide = () => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]:
        prev[activeTab] === 0
          ? currentTestimonials.length - 1
          : prev[activeTab] - 1,
    }));
  };

  const goToSlide = (index) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: index,
    }));
  };

  const currentTestimonial = currentTestimonials[currentSlide];

  return (
    <section className=" py-20 bg-gradient-to-br from-gray-50 to-blue-50 mt-128">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            نظرات <span className="custom-underline mt-2">کاربران</span> درباره
            مالیکو
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-12">
            ببین کاربران واقعی درباره هر بخش مالیکو چی می‌گن
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-white p-2 rounded-full shadow-lg border border-gray-200 flex-wrap justify-center">
            {Object.entries(TAB_LABELS).map(([key, label]) => (
              <button
                key={key}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap hover:cursor-pointer ${
                  activeTab === key
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Display */}
        <div className="  overflow-hidden">
          <div className="relative">
            {/* Current Testimonial */}
            <div className="grid grid-cols-1  gap-8 items-center pb-8 ">
              {/* Mockup image */}
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src={currentTestimonial.mockup}
                    alt={`موکاپ ${currentTestimonial.title}`}
                    className="w-64 h-128 object-cover rounded-2xl  "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Feature title */}
              <div className=" mx-auto p-4">
                <h5 className="font-bold text-blue-800 text-xl ">
                  {currentTestimonial.title}
                </h5>
              </div>

              {/* User testimonial content */}
              <div className="space-y-6">
                {/* Comment */}
                <blockquote className="text-gray-700 text-lg leading-relaxed italic  pr-4 bg-white px-6 py-8 rounded-3xl text-center relative border border-gray-200">
                  "{currentTestimonial.comment}"
                  <div className="absolute bg-white size-8 rotate-45 -bottom-4 rounded-md right-1/2 border-2 border-gray-200 border-t-0 border-l-0"></div>
                </blockquote>

                {/* User info */}
                <div className="flex items-center gap-4 justify-center">
                  <Image
                    src={currentTestimonial.logo}
                    alt={`${currentTestimonial.user}-img`}
                    className="w-16 h-16 rounded-full outline-4 outline-primary outline-offset-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {currentTestimonial.user}
                    </h4>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-5 ${
                            i < currentTestimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            {currentTestimonials.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 left-4 -translate-y-32 bg-[#f3f3f3] border border-[#d3d3d3] hover:cursor-pointer hover:bg-gray-50 shadow-lg rounded-xl  p-3 z-10 transition-colors"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  className="absolute top-1/2 right-4 -translate-y-32 bg-[#f3f3f3] border border-[#d3d3d3] hover:cursor-pointer hover:bg-gray-50 shadow-lg rounded-xl  p-3 z-10 transition-colors"
                  onClick={nextSlide}
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </>
            )}
          </div>

          {/* Slide indicators */}
          {/* {currentTestimonials.length > 1 && (
            <div className="flex justify-center gap-2 py-6">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-200"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}

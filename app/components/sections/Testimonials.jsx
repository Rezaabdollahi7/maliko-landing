"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/app/constants/testimonials";

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

  const [direction, setDirection] = useState(0);

  const currentTestimonials = TESTIMONIALS_DATA[activeTab];
  const currentSlide = currentSlides[activeTab];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] + 1) % currentTestimonials.length,
    }));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]:
        prev[activeTab] === 0
          ? currentTestimonials.length - 1
          : prev[activeTab] - 1,
    }));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: index,
    }));
  };

  const currentTestimonial = currentTestimonials[currentSlide];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="py-32 bg-white ">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-2xl lg:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            نظرات <span className="custom-underline mt-2">کاربران</span> درباره
            مالیکو
          </h2>
          <p className="lg:text-xl text-gray-600 max-w-3xl mx-auto mt-12">
            ببین کاربران واقعی درباره هر بخش مالیکو چی می‌گن
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="flex gap-2 bg-white p-2 rounded-full shadow-lg border border-gray-200 flex-wrap justify-center">
            {Object.entries(TAB_LABELS).map(([key, label]) => (
              <motion.button
                key={key}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap hover:cursor-pointer ${
                  activeTab === key
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                }`}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={activeTab === key ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Display */}
        <motion.div className="overflow-hidden" variants={itemVariants}>
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              {/* Current Testimonial */}
              <motion.div
                key={`${activeTab}-${currentSlide}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 gap-8 items-center pb-8"
              >
                {/* Mockup image */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: -50, rotateY: -15 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative">
                    <Image
                      src={currentTestimonial.mockup}
                      alt={`تصویر موکاپ گوشی از بخش ${currentTestimonial.title} در اپلیکیشن مالی‌کو`}
                      width={256}
                      height={512}
                      className="w-64 h-128 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                  </div>
                </motion.div>

                {/* Feature title */}
                <motion.div
                  className="mx-auto p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                >
                  <h5 className="font-bold text-blue-800 text-xl">
                    {currentTestimonial.title}
                  </h5>
                </motion.div>

                {/* User testimonial content */}
                <div className="space-y-6 px-4">
                  {/* Comment */}
                  <motion.blockquote
                    className="text-gray-700 text-lg leading-relaxed italic pr-4 bg-white px-6 py-8 rounded-3xl text-center relative border border-gray-200"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        delay: 0.4,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    "{currentTestimonial.comment}"
                    <motion.div
                      className="absolute bg-white size-8 rotate-45 -bottom-4 rounded-md right-1/2 border-2 border-gray-200 border-t-0 border-l-0"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.6, duration: 0.3 },
                      }}
                    />
                  </motion.blockquote>

                  {/* User info */}
                  <motion.div
                    className="flex items-center gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.5, duration: 0.5 },
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Image
                        src={currentTestimonial.logo}
                        alt={`عکس پروفایل ${currentTestimonial.user}`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full outline-4 outline-primary outline-offset-4"
                      />
                    </motion.div>
                    <div>
                      <motion.h4
                        className="font-bold text-gray-900 text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.6, duration: 0.4 },
                        }}
                      >
                        {currentTestimonial.user}
                      </motion.h4>
                      <motion.div
                        className="flex items-center gap-1 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { delay: 0.7, duration: 0.4 },
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              transition: {
                                delay: 0.8 + i * 0.1,
                                duration: 0.3,
                                type: "spring",
                                stiffness: 200,
                              },
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                              transition: { duration: 0.3 },
                            }}
                          >
                            <Star
                              className={`size-5 ${
                                i < currentTestimonial.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            {currentTestimonials.length > 1 && (
              <>
                <motion.button
                  className="absolute top-1/2 left-4 -translate-y-32 bg-[#f3f3f3] border border-[#d3d3d3] hover:cursor-pointer hover:bg-gray-50 shadow-lg rounded-xl p-3 z-10 transition-colors"
                  onClick={prevSlide}
                  whileHover={{
                    scale: 1.1,
                    x: -5,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous Testimonial"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </motion.button>
                <motion.button
                  className="absolute top-1/2 right-4 -translate-y-32 bg-[#f3f3f3] border border-[#d3d3d3] hover:cursor-pointer hover:bg-gray-50 shadow-lg rounded-xl p-3 z-10 transition-colors"
                  onClick={nextSlide}
                  whileHover={{
                    scale: 1.1,
                    x: 5,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next Testimonial"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

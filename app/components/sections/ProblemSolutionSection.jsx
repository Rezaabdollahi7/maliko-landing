"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/icons/logo2.png";
import img2 from "@/public/images/money-tracking.webp";
import img3 from "@/public/images/expense-recording.webp";
import img4 from "@/public/images/shopping-list.webp";

const ProblemSolutionSection = () => {
  const problemSolutions = [
    {
      image: img2,
      userProblem: {
        name: "سارا",
        text: "هر ماه که حساب می‌کنم پولم کجا رفته سردرگم میشم!",
      },
      malikoSolution: {
        text: "نگران نباش! من خودم SMS بانکیت رو می‌خونم و همه تراکنش‌هات رو ثبت می‌کنم. دیگه هیچ چی گم نمیشه.",
      },
      imagePosition: "right",
    },
    {
      image: img3,
      userProblem: {
        name: "احمد",
        text: "هر بار میخوام خرجم رو یادداشت کنم یا یادم میره یا حوصله ندارم!",
      },
      malikoSolution: {
        text: "دیگه نیازی به یادداشت نیست! فقط یه نوتیف بهت میدم، روش کلیک کن و تو ۵ ثانیه علت خرجت رو بنویس.",
      },
      imagePosition: "left",
    },
    {
      image: img4,
      userProblem: {
        name: "مینا",
        text: "لیست خریدم همیشه گم میشه! یا روی کاغذ می‌نویسم گم میشه یا تو گوشی یادم میره کجا نوشتم.",
      },
      malikoSolution: {
        text: "آروم باش! تو من می‌تونی لیست خریدت رو بسازی، ویرایش کنی و همیشه در دسترس داشته باشی. دیگه هیچی گم نمیشه!",
      },
      imagePosition: "right",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 mt-42">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            داستان‌های واقعی من و تو
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ببین چطور مالیکو مشکلات روزمره مون رو حل می‌کنه و زندگی کاربراش رو
            راحت‌تر می‌کنه!
          </p>
        </motion.div>

        {/* Problem-Solution Stories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-42"
        >
          {problemSolutions.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                story.imagePosition === "right" ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                variants={imageVariants}
                className={`relative ${
                  story.imagePosition === "right" ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={story.image}
                    alt={`مشکل ${story.userProblem.name}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0  bg-gradient-to-t  from-black/10 to-transparent"></div>
                </div>
              </motion.div>

              {/* Content */}
              <div
                className={`space-y-6 ${
                  story.imagePosition === "right"
                    ? "lg:col-start-1 lg:row-start-1"
                    : ""
                }`}
              >
                {/* User Problem */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: story.imagePosition === "right" ? 50 : -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-red-50 border-r-4 border-red-400  rounded-l-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {story.userProblem.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">
                        {story.userProblem.name}
                      </h4>
                      <p className="text-gray-700 leading-relaxed italic">
                        "{story.userProblem.text}"
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Maliko Solution */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: story.imagePosition === "right" ? 50 : -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-green-50 border-r-4 border-green-400 rounded-l-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        alt="maliko-logo"
                        src={Logo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold  mb-2 text-green-700">مالیکو</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {story.malikoSolution.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              تو هم مثل این دوستان مشکل داری؟
            </h3>
            <p className="text-lg mb-6 opacity-90">
              مالیکو آماده‌ست تا همه مشکلات مالیت رو حل کنه!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";
import faqAnimation from "@/public/animations/Faq.json";
import { FAQ_DATA } from "@/app/constants/faq";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-32 bg-white min-w-screen min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Right Side - FAQ Content */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                سوالات <span className="custom-underline">متداول</span>
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {FAQ_DATA.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-transparent hover:border hover:border-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item.id * 0.1 }}
                >
                  {/* Question Header */}
                  <motion.button
                    className="w-full px-6 py-5 text-right flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 hover:cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                    whileHover={{ backgroundColor: "rgb(243 244 246)" }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-lg font-semibold text-gray-900 flex-1 text-right">
                      {item.question}
                    </span>
                    <motion.div
                      className="mr-4 flex-shrink-0"
                      animate={{ rotate: openItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openItem === item.id ? (
                        <Minus className="w-6 h-6 text-blue-500" />
                      ) : (
                        <Plus className="w-6 h-6 text-gray-500" />
                      )}
                    </motion.div>
                  </motion.button>

                  {/* Answer Content */}
                  <AnimatePresence>
                    {openItem === item.id && (
                      <motion.div
                        className="px-6 pb-5"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: {
                            height: { duration: 0.4, ease: "easeOut" },
                            opacity: { duration: 0.3, delay: 0.1 },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: {
                            height: { duration: 0.3, ease: "easeIn" },
                            opacity: { duration: 0.2 },
                          },
                        }}
                      >
                        <div className="border-t border-gray-200 pt-4">
                          <motion.p
                            className="text-gray-700 leading-relaxed text-lg"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{
                              y: 0,
                              opacity: 1,
                              transition: { delay: 0.2, duration: 0.3 },
                            }}
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-12 text-center">
              <motion.button
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                مشاهده همه سوالات
              </motion.button>
            </div>
          </div>

          {/* Left Side - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-12">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Main Image */}
              <AnimationWrapper
                animationSrc={faqAnimation}
                width={"100%"}
                height={"100%"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

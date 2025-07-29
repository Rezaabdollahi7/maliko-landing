"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import icon2 from "@/public/icons/golds.png";
import icon3 from "@/public/icons/reason.png";
import icon4 from "@/public/icons/analysis.png";
import icon5 from "@/public/icons/challanges.png";
import icon6 from "@/public/icons/cart.png";
import icon7 from "@/public/icons/check-list.png";
import icon8 from "@/public/icons/search.png";
import icon9 from "@/public/icons/chart2.png";
import icon10 from "@/public/icons/reminder.png";
import icon11 from "@/public/icons/category.png";
import icon12 from "@/public/icons/management.png";

const features = [
  {
    id: 1,
    title: "ثبت خودکار تراکنش",
    icon: icon7,
  },
  {
    id: 2,
    title: "دسته‌بندی تراکنش‌ها",
    icon: icon11,
  },
  {
    id: 3,
    title: "نمودارهای تحلیلی مالی",
    icon: icon9,
  },
  {
    id: 4,
    title: "علت‌یابی تراکنش",
    icon: icon3,
  },
  {
    id: 5,
    title: "مدیریت حساب بانکی",
    icon: icon12,
  },
  {
    id: 6,
    title: "فیلتر و جستجو",
    icon: icon8,
  },
  {
    id: 7,
    title: "مدیریت لیست خرید",
    icon: icon6,
  },
  {
    id: 8,
    title: "یادآوری تراکنش‌ها",
    icon: icon10,
  },
  {
    id: 9,
    title: "چالش‌های مالی",
    icon: icon5,
  },
  {
    id: 10,
    title: "تحلیل هوشمند مالی",
    icon: icon4,
  },
  {
    id: 11,
    title: "قیمت طلا و ارز",
    icon: icon2,
  },
];

// Container Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Feature Card Animation Variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Icon Animation Variants
const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

// Text Animation Variants
const textVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Header Animation Variants
const headerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Subtitle Animation Variants
const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="w-full bg-gray-200 flex min-h-screen py-16 lg:py-0"
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-y-12">
        {/* Animated Header */}
        <motion.h2
          className="text-4xl font-bold text-black/80"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          امکانات{" "}
          <motion.span
            className="custom-underline"
            initial={{ backgroundSize: "0% 2px" }}
            whileInView={{ backgroundSize: "100% 2px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            مالیکو
          </motion.span>
        </motion.h2>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg text-gray-400 font-semibold"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          مهم ترین چیز هایی که با ما به دست میاری
        </motion.p>

        {/* Animated Features Grid */}
        <motion.div
          className="features-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feat, index) => (
            <motion.div
              key={feat.id}
              className="col-span-1 rounded-3xl bg-white flex items-center justify-start py-4 pe-20 ps-4 gap-4 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Animated Icon */}
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <Image
                  className="size-12 rounded-xl"
                  alt={`${feat.title}-icon`}
                  src={feat.icon}
                />
              </motion.div>

              {/* Animated Text */}
              <motion.span
                className="font-normal text-gray-700"
                variants={textVariants}
              >
                {feat.title}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

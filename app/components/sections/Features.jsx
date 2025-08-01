"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import features from "@/app/constants/features";

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

        <motion.p
          className="text-lg text-gray-400 font-semibold"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          مهم ترین چیز هایی که با ما به دست میاری
        </motion.p>

        <motion.div
          className="features-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feat) => (
            <motion.div
              key={feat.id}
              className="col-span-1 rounded-3xl bg-white flex items-center justify-start py-4 pe-20 ps-4 gap-4 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="flex-shrink-0"
              >
                <Image
                  className="size-12 rounded-xl"
                  alt={`آیکون ویژگی ${feat.title}`}
                  src={feat.icon}
                  width={48}
                  height={48}
                />
              </motion.div>

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

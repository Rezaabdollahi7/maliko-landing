"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Assets
import bg from "@/public/images/Card.png";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const ANIMATION_CONFIG = {
  zoom: {
    // Note: GSAP's `scale` property on elements with `perspective` works by modifying
    // the transform matrix. Using `translateZ` directly in CSS can sometimes be
    // inconsistent. GSAP handles this gracefully, but we'll stick to a scale-based
    // animation for better cross-browser compatibility if needed.
    // For this specific effect, `transform: 'translateZ(1800px)'` is a common technique
    // that works well with a perspective container.
    scale: "translateZ(1800px)",
    textOffset: -800,
  },
};

export default function ZoomEffect() {
  // Refs
  const refs = {
    background: useRef(null),
    imageContainer: useRef(null),
    zoomImage: useRef(null),
    titleText: useRef(null),
    subtitleText: useRef(null),
  };

  // GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin background
      ScrollTrigger.create({
        trigger: refs.background.current,
        pin: refs.background.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      });

      // Main zoom timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: refs.imageContainer.current,
          pin: refs.imageContainer.current,
          scrub: 1,
          start: "0% 0%",
        },
      });

      // Zoom image effect
      timeline.to(
        refs.zoomImage.current,
        {
          transform: ANIMATION_CONFIG.zoom.scale,
        },
        0
      );

      // Slide texts up
      timeline.to(
        refs.titleText.current,
        {
          y: ANIMATION_CONFIG.zoom.textOffset,
        },
        0.05
      );

      timeline.to(
        refs.subtitleText.current,
        {
          y: ANIMATION_CONFIG.zoom.textOffset,
        },
        0.08
      );
    }, refs.imageContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Fixed Background */}
      <div
        ref={refs.background}
        className="bg bg-primary absolute h-screen w-screen z-[-1]"
      />

      <section>
        {/* Hero Section with Zoom Effect */}
        <div
          ref={refs.imageContainer}
          className="img-container prespective flex items-center justify-center h-screen w-screen"
        >
          <Image
            ref={refs.zoomImage}
            className="zoom-img opacity-80 size-72"
            src={bg}
            alt="صندوق مالیکو"
            width={288}
            height={288}
          />

          <div className="absolute text-white flex flex-col items-center justify-center">
            <h1
              ref={refs.titleText}
              className="text-5xl lg:text-[150px] font-bold"
            >
              <span className="text-stroke">داستان</span>
              <span className="text-white font-extrabold"> مالیکو</span>
            </h1>
            <p
              ref={refs.subtitleText}
              className="font-semibold opacity-75 text-md lg:text-lg text-center bg-white text-primary px-8 py-2 rounded-4xl mt-12"
            >
              یه سفر رویایی به دل دغدغه های مالی مون
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

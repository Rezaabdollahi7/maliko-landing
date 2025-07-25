"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Assets
import bg from "@/public/images/Card.png";

// Components
import AnimationWrapper from "./AnimationWrapper";

gsap.registerPlugin(ScrollTrigger);

// Constants
import { FEATURES } from "@/app/constants/features";

const ANIMATION_CONFIG = {
  zoom: {
    scale: "translateZ(2200px)",
    textOffset: -800,
    duration: 1,
  },
  container: {
    yPercent: { from: 100, to: 0 },
    scaleY: { from: 2, to: 1 },
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
    container: useRef(null),
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

      // Set initial container position
      gsap.set(refs.container.current, {
        marginTop: -refs.container.current.offsetHeight,
      });

      // Main zoom timeline
      createZoomTimeline();
    });

    return () => ctx.revert();
  }, []);

  const createZoomTimeline = () => {
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

    // Container entrance
    timeline.fromTo(
      refs.container.current,
      {
        yPercent: ANIMATION_CONFIG.container.yPercent.from,
        scaleY: ANIMATION_CONFIG.container.scaleY.from,
      },
      {
        yPercent: ANIMATION_CONFIG.container.yPercent.to,
        scaleY: ANIMATION_CONFIG.container.scaleY.to,
      }
    );
  };

  const renderFeatureCard = (feature, isLast = false) => (
    <div
      key={feature.id}
      className={`card flex flex-col items-center justify-center ${
        isLast ? "last" : ""
      }`}
    >
      <AnimationWrapper
        animationSrc={feature.animation}
        width={feature.animationSize}
        height={feature.animationSize}
      />
      <h6 className="text-xl font-bold text-white mt-12">{feature.title}</h6>
      <p className="text-gray-300 text-lg font-medium mt-2 text-center">
        {feature.description}
      </p>
    </div>
  );

  const renderFeatureColumn = (side) => {
    const sideFeatures = FEATURES.filter((feature) => feature.side === side);
    const hasOffset = side === "right";

    return (
      <div
        className={`col-span-1 flex flex-col gap-64 ${
          hasOffset ? "lg:translate-y-[40%] pb-8" : ""
        }`}
      >
        {sideFeatures.map((feature, index) =>
          renderFeatureCard(feature, index === sideFeatures.length - 1)
        )}
      </div>
    );
  };

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
            alt="قاوصندوق مالیکو"
          />

          <div className="absolute text-white flex flex-col items-center justify-center">
            <h1 ref={refs.titleText} className="text-[150px] font-bold">
              <span className="text-stroke">راه حل‌هات با</span>
              <span className="text-white font-extrabold"> مالیکو</span>
            </h1>
            <p
              ref={refs.subtitleText}
              className="font-semibold opacity-75 text-lg text-center bg-white text-primary px-8 py-2 rounded-4xl mt-12"
            >
              یه سفر رویایی به دل فیچرهای برنامه‌مون
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div
          ref={refs.container}
          className="container py-12 grid grid-cols-1 lg:grid-cols-2 mx-auto"
        >
          {renderFeatureColumn("right")}
          {renderFeatureColumn("left")}
        </div>
      </section>
    </div>
  );
}

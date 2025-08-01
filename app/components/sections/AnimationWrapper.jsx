"use client";
import React from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
      </div>
    ),
  }
);

export default function AnimationWrapper({ animationSrc, width, height }) {
  return (
    <div className="container mx-auto">
      <Player
        autoplay
        loop
        src={animationSrc}
        style={{ width: width, height: height }}
      />
    </div>
  );
}

"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

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

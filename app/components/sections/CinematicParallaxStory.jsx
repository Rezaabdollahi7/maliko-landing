"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";

// Import animations
import smsAnimation from "@/public/animations/Verify code.json";
import chart from "@/public/animations/chart.json";
import signIn from "@/public/animations/Signin.json";
import transactionsAnimation from "@/public/animations/Transactions.json";
import Alert from "@/public/animations/Alert.json";
import friendAnimation from "@/public/animations/Friend.json";

const CinematicParallaxStory = () => {
  const containerRef = useRef(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [particles, setParticles] = useState([]); // State برای particles

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for different layers based on scroll
  const characterY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Scene transitions
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scene2Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.35],
    [0, 1, 0]
  );
  const scene3Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.55],
    [0, 1, 0]
  );
  const scene4Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.75],
    [0, 1, 0]
  );
  const scene5Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.85, 0.95],
    [0, 1, 0]
  );
  const scene6Opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  // Character positions
  const aliX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [200, 300, 500, 400, 350, 300]
  );
  const aliScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  // تولید particles فقط در کلاینت
  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress < 0.15) setCurrentScene(0);
      else if (progress < 0.35) setCurrentScene(1);
      else if (progress < 0.55) setCurrentScene(2);
      else if (progress < 0.75) setCurrentScene(3);
      else if (progress < 0.95) setCurrentScene(4);
      else setCurrentScene(5);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scenes = [
    {
      id: 0,
      title: "اولش فقط یه SMS بود...",
      subtitle: "ای بابا پولم کجا رفت ؟",
      background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      narration:
        "داشتم لای ریلز های اینستاگرام میچرخیدم که یه SMS اومد... 🏦 *برداشت ۱،۳۷۰،۰۰۰ تومان از حساب شما.* قلبم افتاد تو پام 😰 کی برداشتم ؟  کجا خرج کردم باز ؟زدم روش و یکم فکر کردم  ولی چیزی یادم نیومد. تا اینکه... ✨ مالیکو ✨ اومد تو زندگیم!",
      animationSrc: smsAnimation,
    },
    {
      id: 1,
      title: "آشنایی با مالیکو 👀",
      subtitle: "رابطه جدید شروع شد!",
      background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      narration:
        "اولش فکر کردم یه برنامه ست دیگه  دو روز دیگه پاکش میکنم. ولی اون گفت: «بیا حالا شروع کن ...» حسابهای بانکیمو وارد کردم و گفتم: «آقا جان، SMSهای بانکی من از این شمارهها میان، حواست باشه!» اونم گفت: «اوکی داداش، از این به بعد خودم میفهمم چی به چیه!» 🤓",
      animationSrc: signIn,
    },
    {
      id: 2,
      title: "بزن بریم شنود! 🎧",
      subtitle: "مالیکو شد دوست فضول ولی مفید",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      narration:
        "از اون لحظه، مالیکو شد مثل یه دوست فضول ولی مفید! هر وقت SMS بانکی میاد، فوراً میپره وسط: 🔔 « ۲۲۰ تومن برداشتی ؟ برای چی آخه؟ » منم میگم: «داداش نون و پنیر گرفتم. نگران نباش ؟» 😎 و اون مینویسه: «ثبت شد! برو حال کن!» دیگه هیچ تراکنشی قایم نمیمونه ازم!",
      animationSrc: Alert,
    },
    {
      id: 3,
      title: "تراکنشات؟ مث آبِ تو لیوان! 🍹",
      subtitle: "همه چی شفاف و مرتب",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      narration:
        "در ضمن  نیازی نیست هی وارد اپ بانک بشم تا تراکنشامو ببینم یا به روش سنتی بشینم وارد دفتر کنم ، همه تراکنشام خودکار تو مالیکو صف کشیدن! الان میتونم بگم: «پولام کجا رفتن؟ کی خرجشون کردم؟ کی واریز کرد؟» انگار یه آینه گذاشتن جلوی حساب کتابام! میتونم فیلتر کنم، سرچ کنم، دسته‌بندی کنم. همه چی مثل آب توی لیوان، شفاف و واضح!",
      animationSrc: transactionsAnimation,
    },
    {
      id: 4,
      title: "آمار و نمودار؟ بیا وسط! 📊",
      subtitle: "حقایق تلخ و شیرین مالی!",
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      narration:
        "مالیکو گراف کشیده، نمودار درآورده، میگه: «بیشترین پولتو تو ماه گذشته دادی به قهوه، کتاب و اسنپ!» ☕📚🚕 منم گفتم: «عه! از خودم خبر نداشتم!» اونم گفت: «مالی شدی، برار! مالی!».",
      animationSrc: chart,
    },
    {
      id: 5,
      title: "مالیکو، رفیق مالی من ❤️",
      subtitle: "رابطه جدی و ماندگار!",
      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      narration:
        "الان یه رابطه جدی بین ماست. من خرج میکنم، اون میفهمه. اون میپرسه، من جواب میدم. وقتی دارم بی پول میشم، اون یادآوری میکنه بودجه بندیمو ! تازه یه تقویم داره که توش وام و چک و یادداشتامو نوشتم که جلو چشمم باشن .  خلاصه بگم: **مالیکو فقط یه اپ نیست که... نیمه ی حسابدار گمشدهمه!** 💕!",
      animationSrc: friendAnimation,
    },
  ];

  return (
    <section className="relative">
      {/* Story Container */}
      <div ref={containerRef} className="relative h-[600vh]">
        {/* Sticky Viewport */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {/* Progress Bar */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 z-50 w-full"
            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          />

          {/* Scene Backgrounds */}
          <div className="absolute inset-0 w-full h-full">
            {scenes.map((scene, index) => (
              <motion.div
                key={scene.id}
                className="absolute inset-0 w-full h-full"
                style={{
                  background: scene.background,
                  opacity:
                    index === 0
                      ? scene1Opacity
                      : index === 1
                      ? scene2Opacity
                      : index === 2
                      ? scene3Opacity
                      : index === 3
                      ? scene4Opacity
                      : index === 4
                      ? scene5Opacity
                      : scene6Opacity,
                }}
              />
            ))}
          </div>

          {/* Floating Particles - اصلاح شده */}
          <motion.div
            className="absolute inset-0 w-full h-screen pointer-events-none z-10"
            style={{ y: foregroundY }}
          >
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </motion.div>

          {/* Character Layer */}
          <motion.div
            className="absolute inset-0 w-full h-screen pointer-events-none z-20"
            style={{ y: characterY }}
          >
            <motion.div
              className="absolute bottom-20"
              style={{
                x: aliX,
                scale: aliScale,
              }}
            >
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-4xl shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: currentScene === 1 ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity },
                  rotate: {
                    duration: 1,
                    repeat: currentScene === 1 ? Infinity : 0,
                  },
                }}
              >
                {currentScene === 0
                  ? "😱"
                  : currentScene === 1
                  ? "🤝"
                  : currentScene === 2
                  ? "🎧"
                  : currentScene === 3
                  ? "😎"
                  : currentScene === 4
                  ? "📊"
                  : "❤️"}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Lottie Animations Layer */}
          <motion.div
            className="absolute inset-0 w-full h-screen pointer-events-none z-30"
            style={{ y: foregroundY }}
          >
            <div className="relative w-full h-full">
              {scenes.map((scene, index) => (
                <motion.div
                  key={`lottie-${scene.id}`}
                  className="absolute top-1/4 right-20 w-80 h-80"
                  style={{
                    opacity: index === currentScene ? 1 : 0,
                  }}
                  animate={{
                    scale: index === currentScene ? [0.8, 1, 0.8] : 0.8,
                    rotate: index === currentScene ? [0, 2, -2, 0] : 0,
                  }}
                  transition={{
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <AnimationWrapper
                    animationSrc={scene.animationSrc}
                    width="80%"
                    height="80%"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content Layer */}
          <div className="absolute inset-0 w-full h-screen flex items-center justify-center z-40 pointer-events-none">
            <div className="text-center text-white px-8">
              <motion.h1
                className="text-3xl lg:text-6xl font-bold mb-6"
                key={`title-${currentScene}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {scenes[currentScene]?.title}
              </motion.h1>

              <motion.h2
                className="text-xl lg:text-2xl mb-8 text-black"
                key={`subtitle-${currentScene}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {scenes[currentScene]?.subtitle}
              </motion.h2>

              <motion.p
                className="lg:text-xl max-w-4xl mx-auto leading-loose bg-black/30 backdrop-blur-sm p-8 rounded-2xl text-right font-normal"
                key={`narration-${currentScene}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {scenes[currentScene]?.narration}
              </motion.p>
            </div>
          </div>

          {/* Scene Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex space-x-3">
              {scenes.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentScene
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          {currentScene === 5 && (
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                مالیکویی شو
              </motion.button>
            </motion.div>
          )}

          {/* Scroll Hint */}
          {currentScene === 0 && (
            <motion.div
              className="absolute bottom-8 right-8 text-white/70 z-50"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm mb-2">اسکرول کن</span>
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <motion.div
                    className="w-1 h-3 bg-white/70 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CinematicParallaxStory;

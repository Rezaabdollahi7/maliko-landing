import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import ProblemSolutionSection from "./components/sections/ProblemSolutionSection";
import AnimationWrapper from "./components/sections/AnimationWrapper";
import ZoomEffect from "./components/sections/ZoomEffect";
import Testimonials from "./components/sections/Testimonials";
import FAQSection from "./components/sections/faq";
import Footer from "./components/sections/Footer";
import CinematicParallaxStory from "./components/sections/CinematicParallaxStory";
export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <ZoomEffect />
      <CinematicParallaxStory />

      <div className="relative z-50">
        <Testimonials />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

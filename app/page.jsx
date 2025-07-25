import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import ProblemSolutionSection from "./components/sections/ProblemSolutionSection";
import AnimationWrapper from "./components/sections/AnimationWrapper";
import ZoomEffect from "./components/sections/ZoomEffect";
import Testimonials from "./components/sections/Testimonials";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <ProblemSolutionSection /> */}
      {/* <AnimationWrapper /> */}
      <ZoomEffect />
      <Testimonials />
    </>
  );
}

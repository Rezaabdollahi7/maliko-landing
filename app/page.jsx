import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import ZoomEffect from "./components/sections/ZoomEffect";
import Testimonials from "./components/sections/Testimonials";
import FAQSection from "./components/sections/faq";
import Footer from "./components/sections/Footer";
import CinematicParallaxStory from "./components/sections/CinematicParallaxStory";
import DownloadCta from "./components/sections/DownloadCta";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <ZoomEffect />
      <CinematicParallaxStory />

      <Testimonials />
      <DownloadCta />
      <FAQSection />
      <Footer />
    </>
  );
}

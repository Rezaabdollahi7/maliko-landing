import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import ZoomEffect from "./components/sections/ZoomEffect";
import Testimonials from "./components/sections/Testimonials";
import FAQSection from "./components/sections/faq";
import Footer from "./components/sections/Footer";
import CinematicParallaxStory from "./components/sections/CinematicParallaxStory";
import DownloadCta from "./components/sections/DownloadCta";
import Features from "./components/sections/Features";
import ArticlesPage from "./components/sections/ArticlesPage";
export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <ZoomEffect />
      <CinematicParallaxStory />

      <Testimonials />
      <DownloadCta />
      <ArticlesPage />
      <FAQSection />
      <Footer />
    </>
  );
}

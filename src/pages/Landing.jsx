import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopNav from "../components/Landing/TopNav";
import HeroSection from "../components/Landing/HeroSection";
import BenefitsStrip from "../components/Landing/BenefitsStrip";
import KeyFeaturesGrid from "../components/Landing/KeyFeaturesGrid";
import HowItWorks from "../components/Landing/HowItWorks";
import ScreenshotsCarousel from "../components/Landing/ScreenshotsCarousel";
import PricingCard from "../components/Landing/PricingCard";
import AppDownloadSection from "../components/Landing/AppDownloadSection";
import PartnersSection from "../components/Landing/PartnersSection";
import Testimonials from "../components/Landing/Testimonials";
import FAQAccordion from "../components/Landing/FAQAccordion";
import Footer from "../components/Landing/Footer";
import CallToActionBar from "../components/Landing/CallToActionBar";

const Landing = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <TopNav isSticky={isSticky} />

      <main id="main-content">
        <HeroSection />
        <BenefitsStrip />
        <KeyFeaturesGrid />
        <HowItWorks />
        <ScreenshotsCarousel />
        <PricingCard />
        <AppDownloadSection />
        <PartnersSection />
        <Testimonials />
        <FAQAccordion />
      </main>

      <Footer />
      {/* <CallToActionBar /> */}
    </div>
  );
};

export default Landing;

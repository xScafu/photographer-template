import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function PhotographerLandingPage() {
  return (
    <div className="bg-cream text-dark font-sans">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

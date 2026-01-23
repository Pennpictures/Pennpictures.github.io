import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

// Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/your-form-id/viewform";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <HeroSection googleFormUrl={GOOGLE_FORM_URL} />
      <AboutSection />
      <GallerySection />
      <FooterSection googleFormUrl={GOOGLE_FORM_URL} />
    </div>
  );
};

export default Index;

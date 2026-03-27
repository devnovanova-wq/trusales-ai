import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CRMCarouselSection from "@/components/landing/CRMCarouselSection";
import VideoSection from "@/components/landing/VideoSection";
import CalculatorSection from "@/components/landing/CalculatorSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import PricingSection from "@/components/landing/PricingSection";
import ActivationSection from "@/components/landing/ActivationSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import AudienceSection from "@/components/landing/AudienceSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import PopupDemo from "@/components/landing/PopupDemo";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CRMCarouselSection />
      <VideoSection />
      <CalculatorSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PricingSection />
      <BeforeAfterSection />
      <AudienceSection />
      <ActivationSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <PopupDemo />
      <WhatsAppButton />
    </div>
  );
}

export const metadata = {
  title: "Cómo funciona Tru Sales",
  description: "Descubre cómo Tru Sales detecta leads perdidos en tu CRM y mejora el rendimiento de tu equipo comercial.",
};
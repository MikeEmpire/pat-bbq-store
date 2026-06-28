import AboutSection from "../components/AboutSection/AboutSection";
import BookingCTA from "../components/BookingCTA/BookingCTA";
import HeroSection from "../components/HeroSection/HeroSection";
import MenuSection from "../components/MenuSection/MenuSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import Ticker from "../components/Ticker/Ticker";
import TrustBar from "../components/TrustBar/TrustBar";

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <Ticker />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <Ticker />
      <TestimonialsSection />
      <span id="contact" aria-hidden="true" />
      <BookingCTA />
    </>
  );
}

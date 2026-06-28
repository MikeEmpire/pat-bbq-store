import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Ticker from "../components/Ticker/Ticker";

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <Ticker />
      <AboutSection />
    </>
  );
}

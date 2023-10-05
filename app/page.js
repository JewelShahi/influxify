import Image from "next/image";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import GlobalPromotion from "./components/GlobalPromotion";
import CTA from "./components/CTA";
import Packages from "./components/Packages";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HowItWorks/>
      <About />
      <GlobalPromotion />
      <Packages />
      <CTA />
    </main>
  );
}

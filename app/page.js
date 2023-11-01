import Image from "next/image";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import GlobalPromotion from "./components/GlobalPromotion";
import Packages from "./components/Packages";
import Loading from "./loading";
import InternalServerError from "./500"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HowItWorks />
      <About />
      <Packages />
      <GlobalPromotion />
      <Loading />
      <InternalServerError />
    </main>
  );
}

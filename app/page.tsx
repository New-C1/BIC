import Image from "next/image";
import Hero from "./components/hero";
import CaroselSection from "./components/CaroselSection";
import Features from "./components/features";
import Offre from "./components/Offre";
import Tarifs from './components/tarifs'
import About from "./components/About";
import Contact from "./components/contact";
export default function Home() {
  return <>
  <Hero/>
  <CaroselSection/>
  <Features />
  <Offre/>
  <Tarifs/>
  <About/>
  <Contact/>
  </>;
}

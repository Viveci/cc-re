import Hero from "./hero";
import About from "./about";
import Service from "./ourService";
import PianoHero from "./pianoHero";
import Studios from "./studios";
import BottomHero from "./bottomHero";
import Address from "../../shared/address";
import SectionWOS from "../../shared/sectionWOS";

const CCLanding = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <PianoHero />
      <Studios />
      <SectionWOS />
      <Address />
      <BottomHero />
    </>
  );
};

export default CCLanding;

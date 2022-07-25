import React from "react";
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  About,
  AreasOfConservation,
  Map,
  Footer
} from "../src/Components/MainPageComponents";
import Navbar from "../src/Components/Navbar";
export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-[#000107] font-syne">
        <Navbar />
        <HeroSection />
        <About />
        <PlanningVisa />
        <FeaturedDestination />
        <AreasOfConservation />
        <Map />
        <Footer />
      </div>
    </React.Fragment>
  );
}

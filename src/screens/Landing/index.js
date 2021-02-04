import React from "react";
import Navigation from "../../components/Nav";
import Hero from './hero';
import Discover from './discover';
import MainSection from './main-section';

export default function Landing() {
  return (
    <div className="hero">
      <Navigation />
      <Hero />
      <Discover />
      <MainSection />
    </div>
  );
}

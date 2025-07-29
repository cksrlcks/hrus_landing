import React from "react";
import About from "@/components/main/About";
import Features from "@/components/main/Features";
import Hero from "@/components/main/Hero";
import Motivation from "@/components/main/Motivation";
import Pricing from "@/components/main/Pricing";

export default function page() {
  return (
    <>
      <Hero />
      <Motivation />
      <About />
      <Features />
      <Pricing />
    </>
  );
}

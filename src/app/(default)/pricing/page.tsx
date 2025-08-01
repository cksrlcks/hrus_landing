import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pricing/Hero";
import Pricing from "@/components/pricing/Pricing";
import { siteUrl } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "원하는 기능만 골라서 시작해 보세요| HRUS",
  description: "월 최소 30,000원으로대표님은 경영에만 집중하세요.",
};

export default function PricePage() {
  return (
    <>
      <Hero />
      <Pricing />
    </>
  );
}

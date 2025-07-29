import React, { PropsWithChildren } from "react";
import CTASection from "@/components/layout/CTASection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <CTASection />
      <Footer />
    </>
  );
}

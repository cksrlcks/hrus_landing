import React, { PropsWithChildren } from "react";
import CTASection from "@/components/layout/CTASection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <div className="flex h-[40vh] items-center justify-center">샘플본문</div>
      <CTASection />
      <Footer />
    </>
  );
}

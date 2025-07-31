import React, { PropsWithChildren } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Inner from "@/components/layout/Inner";

export default function EtcLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Inner>
        <div className="py-30 lg:mb-40 lg:py-50">{children}</div>
      </Inner>
      <Footer />
    </>
  );
}

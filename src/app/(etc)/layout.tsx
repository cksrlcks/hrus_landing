import React, { PropsWithChildren } from "react";
import Header from "@/components/layout/Header";
import Inner from "@/components/layout/Inner";

export default function EtcLayout({ children }: PropsWithChildren) {
  return (
    <div className="py-40">
      <Header />
      <Inner>{children}</Inner>
    </div>
  );
}

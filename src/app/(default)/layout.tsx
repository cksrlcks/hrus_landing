import React, { PropsWithChildren } from "react";
import Header from "@/components/layout/Header";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

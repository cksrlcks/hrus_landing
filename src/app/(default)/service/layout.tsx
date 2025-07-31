import { ReactNode } from "react";
import Faq from "@/components/service/Faq";
import SubNav from "@/components/service/Nav";

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SubNav />
      {children}
      <Faq />
    </>
  );
}

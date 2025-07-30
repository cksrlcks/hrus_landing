import { ReactNode } from "react";
import Faq from "@/components/service/Faq";

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Faq />
    </div>
  );
}

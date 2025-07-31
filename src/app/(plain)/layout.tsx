import React, { PropsWithChildren } from "react";
import Inner from "@/components/layout/Inner";

export default function PlainLayout({ children }: PropsWithChildren) {
  return (
    <div className="py-20 lg:py-40">
      <Inner className="max-w-7xl">{children}</Inner>
    </div>
  );
}

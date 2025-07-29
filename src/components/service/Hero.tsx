import React, { PropsWithChildren } from "react";

export default function Hero({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-[#F4FEFF]">
      {children}
    </div>
  );
}

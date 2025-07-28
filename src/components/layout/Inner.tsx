import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type InnerProps = PropsWithChildren<{
  className?: string;
}>;

export default function Inner({ children, className }: InnerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-9", className)}>
      {children}
    </div>
  );
}

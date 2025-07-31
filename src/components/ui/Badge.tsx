import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Badge({ variant = "primary", children }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-primary inline-flex h-5 items-center justify-center rounded-[3px] bg-[#EFF0FF] px-1.5 text-xs leading-5 font-semibold",
        {
          "text-primary bg-[#EFF0FF]": variant === "primary",
          "bg-[#F0F0F0] text-gray-700": variant === "secondary",
        },
      )}
    >
      {children}
    </span>
  );
}

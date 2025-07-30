"use client";

import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Inner from "../layout/Inner";
import CheckIcon from "../ui/CheckIcon";
import { useColorContext } from "./ColorProvider";

export function ServiceHero({ children }: PropsWithChildren) {
  const { bg } = useColorContext();

  return (
    <>
      <div
        className="relative overflow-hidden lg:h-[800px]"
        style={{ backgroundColor: bg }}
      >
        <Inner className="pt-40 lg:pt-60">{children}</Inner>
      </div>
    </>
  );
}

export function ServiceHeader({ children }: PropsWithChildren) {
  return (
    <div className="mb-10 flex h-full flex-1 flex-col items-start justify-center lg:mb-0 lg:w-1/2">
      {children}
    </div>
  );
}

export function ServiceTop({ children }: PropsWithChildren) {
  return <div className="mb-5 flex items-center gap-4">{children}</div>;
}

export function ServiceIcon({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} className="h-6 w-auto" />;
}

export function ServiceName({ children }: PropsWithChildren) {
  const { text } = useColorContext();
  return (
    <div className="font-bold" style={{ color: text }}>
      {children}
    </div>
  );
}

export function ServiceTitle({ children }: PropsWithChildren) {
  return (
    <div className="mb-8 text-2xl font-semibold lg:text-[40px]/[51px]">
      {children}
    </div>
  );
}

export function ServiceFeatures({ data }: { data: string[] }) {
  const { text } = useColorContext();

  return (
    <ul className="mb-14 space-y-2.5">
      {data.map((feature, index) => (
        <li key={index} className="flex gap-4">
          <span className="flex h-6 items-center">
            <CheckIcon color={text} />
          </span>
          <span className="font-medium text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function ServicePreview({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full items-end justify-center overflow-hidden lg:absolute lg:bottom-0 lg:left-[calc(50%+80px)] lg:h-full lg:w-1/2 lg:justify-start">
      {children}
    </div>
  );
}

export function ServicePreviewFrame({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-5 shadow-[0px_4px_80px_rgba(0,0,0,0.02)]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-xl">{children}</div>
    </div>
  );
}

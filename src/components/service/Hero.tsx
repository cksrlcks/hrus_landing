import React, { PropsWithChildren } from "react";
import Image from "next/image";
import CheckIcon from "@/assets/images/icon-check-green.svg";
import Inner from "../layout/Inner";

export default function Hero({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[100vh] max-h-[800px] min-h-[600px] items-center justify-center bg-[#F4FEFF]">
      {children}
    </div>
  );
}

export function ServiceHero({ children }: PropsWithChildren) {
  return (
    <div className="h-[100vh] max-h-[800px] min-h-[600px] bg-[#F4FEFF]">
      <Inner className="flex h-full items-center justify-between">
        {children}
      </Inner>
    </div>
  );
}

export function ServiceHeader({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full flex-1 flex-col items-start justify-center">
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
  return <div className="text-point font-bold">{children}</div>;
}

export function ServiceTitle({ children }: PropsWithChildren) {
  return (
    <div className="mb-8 text-[40px]/[51px] font-semibold">{children}</div>
  );
}

export function ServiceFeatures({ data }: { data: string[] }) {
  return (
    <ul className="mb-14 space-y-2.5">
      {data.map((feature, index) => (
        <li key={index} className="flex gap-4">
          <Image src={CheckIcon} alt="기능" />
          <span className="font-medium text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function ServicePreview({ children }: PropsWithChildren) {
  return <div className="h-full overflow-hidden">{children}</div>;
}

export function ServicePreviewFrame({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0px_4px_80px_rgba(0,0,0,0.02)]">
      <div className="overflow-hidden rounded-xl">{children}</div>
    </div>
  );
}

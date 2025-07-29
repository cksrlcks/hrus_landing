import { PropsWithChildren } from "react";
import Image from "next/image";
import FeatureBackground from "@/assets/images/main/feature-bg.svg";

export function FeatureButton({ children }: PropsWithChildren) {
  return <button className="px-10 text-left">{children}</button>;
}

export function FeatureButtonLabel({ children }: PropsWithChildren) {
  return <h4 className="mb-2 text-xl font-semibold">{children}</h4>;
}

export function FeatureButtonDescription({ children }: PropsWithChildren) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}

export function FeatureCard({ children }: PropsWithChildren) {
  return (
    <div className="relative aspect-[680/640] w-full max-w-[680px] flex-1 overflow-hidden rounded-2xl bg-white">
      <div className="relative z-1">{children}</div>
      <Image
        src={FeatureBackground}
        alt="Feature Background"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export function FeatureContent({ children }: PropsWithChildren) {
  return (
    <div className="absolute inset-0 space-y-4 p-15 tracking-tighter">
      {children}
    </div>
  );
}

export function FeatureCategory({ children }: PropsWithChildren) {
  return <div className="text-primary text-lg font-bold">{children}</div>;
}

export function FeatureTitle({ children }: PropsWithChildren) {
  return <div className="text-[32px]/[40px] font-semibold">{children}</div>;
}

export function FeatureDescription({ children }: PropsWithChildren) {
  return <div className="text-lg/[28px] text-gray-500">{children}</div>;
}

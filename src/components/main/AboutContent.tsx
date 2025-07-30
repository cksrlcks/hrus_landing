import { PropsWithChildren } from "react";
import Image from "next/image";
import FeatureBackground from "@/assets/images/main/feature-bg.svg";

export function FeatureButton({ children }: PropsWithChildren) {
  return (
    <button className="flex-1 py-4 lg:px-10 lg:py-2 lg:text-left">
      {children}
    </button>
  );
}

export function FeatureButtonLabel({ children }: PropsWithChildren) {
  return (
    <h4 className="text-sm font-semibold md:text-lg lg:mb-2 lg:text-xl">
      {children}
    </h4>
  );
}

export function FeatureButtonDescription({ children }: PropsWithChildren) {
  return (
    <p className="text-muted-foreground hidden text-sm lg:block">{children}</p>
  );
}

export function FeatureCard({ children }: PropsWithChildren) {
  return (
    <div className="relative mt-6 w-full flex-1 overflow-hidden rounded-2xl bg-white lg:mt-0 lg:max-w-[680px]">
      <div className="relative z-1">{children}</div>
      <Image
        src={FeatureBackground}
        alt="Feature Background"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
    </div>
  );
}

export function FeatureContent({ children }: PropsWithChildren) {
  return (
    <div className="-mb-[40px] space-y-4 p-[8vw] pb-6 tracking-tighter lg:p-15 lg:pb-0">
      {children}
    </div>
  );
}

export function FeatureCategory({ children }: PropsWithChildren) {
  return (
    <div className="text-primary text-sm font-bold lg:text-lg">{children}</div>
  );
}

export function FeatureTitle({ children }: PropsWithChildren) {
  return (
    <div className="text-xl font-semibold lg:text-[32px]/[40px]">
      {children}
    </div>
  );
}

export function FeatureDescription({ children }: PropsWithChildren) {
  return <div className="text-gray-500 lg:text-lg/[28px]">{children}</div>;
}

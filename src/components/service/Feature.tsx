"use client";

import { PropsWithChildren, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import DownIcon from "@/assets/images/icon-down.svg";
import ExcelIcon from "@/assets/images/icon-excel.svg";
import PrintIcon from "@/assets/images/icon-print.svg";
import FeatureBackgroundWarm from "@/assets/images/service/feature-bg-warm.svg";
import FeatureBackground from "@/assets/images/service/feature-bg.svg";
import { cn } from "@/lib/utils";
import Inner from "../layout/Inner";
import CheckIcon from "../ui/CheckIcon";
import FadeInStagger from "../ui/FadeInUp";
import { useColorContext } from "./ColorProvider";

export function Feature({
  children,
  reverse,
}: PropsWithChildren<{ reverse?: boolean }>) {
  return (
    <FadeInStagger delayStep={0.06}>
      <div
        className={cn(
          "flex flex-col gap-10 lg:flex-row lg:gap-24",
          reverse && "lg:flex-row-reverse",
        )}
      >
        {children}
      </div>
    </FadeInStagger>
  );
}

export function FeatureContent({ children }: PropsWithChildren) {
  return <div className="flex-1 pt-10">{children}</div>;
}

export function FeatureTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="mb-8 text-xl font-semibold tracking-tight lg:mb-[50px] lg:text-[30px]/[42px]">
      {children}
    </h3>
  );
}

export function FeatureList({
  features,
}: {
  features: (string | ReactNode)[];
}) {
  const { text } = useColorContext();
  return (
    <ul className="space-y-3 lg:space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-4">
          <span className="flex h-6 items-center">
            <CheckIcon color={text} />
          </span>
          <span className="leading-1.2 tracking-tight whitespace-pre-wrap text-gray-500">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function FeatureSupport({ children }: PropsWithChildren) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-1">{children}</div>
  );
}

export function SupportBadge({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "flex h-[38px] items-center gap-1.5 rounded-full pr-5 pl-3 text-sm font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SupportExcel() {
  return (
    <SupportBadge className="bg-[#29C27F]/7 text-[#129652]">
      <Image src={ExcelIcon} alt="Excel 다운로드 지원" />
      Excel 다운로드 지원
    </SupportBadge>
  );
}

export function SupportPrint() {
  return (
    <SupportBadge className="bg-[#9CCFFF]/30 text-[#0E2E81]">
      <Image src={PrintIcon} alt="프린트 기능 지원" />
      프린트 기능 지원
    </SupportBadge>
  );
}

export function SupportDownload() {
  return (
    <SupportBadge className="bg-[#9CCFFF]/30 text-[#0E2E81]">
      <Image src={DownIcon} alt="다운로드 지원" />
      다운로드 지원
    </SupportBadge>
  );
}

export function FeatureImage({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  const { name } = useColorContext();
  const isWarm = ["red", "yellow"].includes(name);

  return (
    <div className="lg:max-w-auto relative mx-auto max-w-[500px] overflow-hidden rounded-2xl lg:aspect-[440/500]">
      <Image src={src} alt={alt} className="relative z-1 h-full w-full" />
      <Image
        src={isWarm ? FeatureBackgroundWarm : FeatureBackground}
        alt="기능 배경"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export function FeatureSection({ children }: PropsWithChildren) {
  return (
    <section className="py-6 lg:py-20">
      <Inner>{children}</Inner>
    </section>
  );
}

export function FeatureSectionWrapper({ children }: PropsWithChildren) {
  return <div className="py-6 lg:mt-12 lg:py-20">{children}</div>;
}

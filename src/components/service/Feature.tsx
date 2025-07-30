import { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import CheckIcon from "@/assets/images/icon-check.svg";
import ExcelIcon from "@/assets/images/icon-excel.svg";
import PrintIcon from "@/assets/images/icon-print.svg";
import FeatureBackground from "@/assets/images/service/feature-bg.svg";
import { cn } from "@/lib/utils";
import Inner from "../layout/Inner";

export function Feature({
  children,
  reverse,
}: PropsWithChildren<{ reverse?: boolean }>) {
  return (
    <div className={cn("flex gap-24", reverse && "flex-row-reverse")}>
      {children}
    </div>
  );
}

export function FeatureContent({ children }: PropsWithChildren) {
  return <div className="flex-1 pt-10">{children}</div>;
}

export function FeatureTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="mb-[50px] text-[30px]/[42px] font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-4">
          <span className="flex h-6 items-center">
            <Image src={CheckIcon} alt="기능" />
          </span>
          <span className="leading-1.2 tracking-tight text-gray-500">
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

export function FeatureImage({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <div className="relative aspect-[440/500] overflow-hidden rounded-2xl">
      <Image src={src} alt={alt} className="relative z-1" />
      <Image
        src={FeatureBackground}
        alt="기능 배경"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export function FeatureSection({ children }: PropsWithChildren) {
  return (
    <section className="py-20">
      <Inner>{children}</Inner>
    </section>
  );
}

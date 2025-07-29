import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { cva } from "class-variance-authority";
import LogoImage from "@/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type SectionProps = PropsWithChildren<{ className?: string }>;
export const SectionHeader = ({ children, className }: SectionProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

type SectionContentProps = PropsWithChildren<{ className?: string }>;
export const SectionLogo = ({ className }: SectionContentProps) => {
  return (
    <div
      className={cn(
        "mb-6 flex items-center justify-center text-center",
        className,
      )}
    >
      <Image src={LogoImage} alt="HRUS" className="h-4 w-auto" />
    </div>
  );
};

type SectionTextProps = PropsWithChildren<{
  className?: string;
  size?: "default" | "md" | "lg";
}>;
export const SectionTitle = ({
  children,
  className,
  size = "default",
}: SectionTextProps) => {
  const titleVariants = cva("font-semibold tracking-tight", {
    variants: {
      variant: {
        default:
          "text-[24px]/[32px] md:text-[32px]/[40px] lg:text-[40px]/[51px]",
        md: "text-[26px]/[36px] md:text-[36px]/[48px] lg:text-[48px]/[60px]",
        lg: "text-[28px]/[40px] md:text-[40px]/[56px] lg:text-[56px]/[65px]",
      },
    },
  });
  return (
    <h2 className={cn(titleVariants({ variant: size }), className)}>
      {children}
    </h2>
  );
};

type SectionDescriptionProps = PropsWithChildren<{ className?: string }>;
export const SectionDescription = ({
  children,
  className,
}: SectionDescriptionProps) => {
  return (
    <p
      className={cn(
        "text-md mt-4 text-center tracking-tight text-gray-500 md:text-xl/[30px]",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CTAButton = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <Button size="lg" asChild>
        <Link href="/inquiry">도입문의</Link>
      </Button>
    </div>
  );
};

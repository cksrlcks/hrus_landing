import { PropsWithChildren } from "react";
import Link from "next/link";
import {
  SectionDescription,
  SectionHeader,
  SectionLogo,
  SectionTitle,
} from "@/components/main/Section";

export function FormLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">{children}</div>
  );
}

export function FormHeader({ children }: PropsWithChildren) {
  return (
    <div className="flex-1">
      <SectionHeader className="items-start">
        <Link href="/">
          <SectionLogo />
        </Link>
        {children}
      </SectionHeader>
    </div>
  );
}

export function FormBody({ children }: PropsWithChildren) {
  return <div className="lg:w-[670px]">{children}</div>;
}

export function FormTitle({ children }: PropsWithChildren) {
  return <SectionTitle className="text-left">{children}</SectionTitle>;
}

export function FormDescription({ children }: PropsWithChildren) {
  return (
    <SectionDescription className="md:text-lg">{children}</SectionDescription>
  );
}

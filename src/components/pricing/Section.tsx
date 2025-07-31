import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type PersonCounterProps = PropsWithChildren<{
  className?: string;
}>;

export function Section({ children, className }: PersonCounterProps) {
  return <section className={cn("", className)}>{children}</section>;
}

export function SectionHeader({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <header className={cn("mb-8 flex items-center justify-between", className)}>
      {children}
    </header>
  );
}

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="flex items-center gap-3 text-xl font-semibold">
      {children}
    </h3>
  );
}

export function SectionContent({ children }: PropsWithChildren) {
  return <div className="flex-1">{children}</div>;
}

export function SectionContentFrame({ children }: PropsWithChildren) {
  return (
    <div className="space-y-5 rounded-3xl bg-[#F7FBFD] p-5">{children}</div>
  );
}

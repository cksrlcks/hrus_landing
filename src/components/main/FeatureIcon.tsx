import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function FeatureIcon({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "h-25 w-25 rounded-full border border-white/50 bg-white/40 p-2.5 shadow-[0px_20px_27px_rgba(0,0,0,0.0.05)] backdrop-blur-[2px]",
        className,
      )}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full border border-white/50 bg-white shadow-[0px_20px_27px_rgba(0,0,0,0.0.05)]">
        {children}
      </div>
    </div>
  );
}

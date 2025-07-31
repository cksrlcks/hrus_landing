import { PropsWithChildren } from "react";

export default function GradientText({ children }: PropsWithChildren) {
  return (
    <span className="bg-gradient-to-r from-[#5766FF] to-[#AC7CFF] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { cn } from "@/lib/utils";

type AccordionContextProps = {
  isOpen: boolean;
  onToggle: () => void;
  disabled: boolean;
};

export const AccordionContext = createContext<
  AccordionContextProps | undefined
>(undefined);

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("아코디언 provider내에서 사용해주세요");
  }
  return context;
}

type AccordionProps = PropsWithChildren<{
  defaultOpen?: boolean;
  className?: string;
  disabled?: boolean;
}>;
export function Accordion({
  children,
  className,
  defaultOpen,
  disabled = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  return (
    <AccordionContext.Provider
      value={{ isOpen, onToggle: () => setIsOpen(!isOpen), disabled }}
    >
      <div className={cn("group", className)} data-opened={isOpen}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionTriggerProps = PropsWithChildren<{
  className?: string;
}>;
export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const { onToggle, disabled } = useAccordionContext();

  const handleClick = () => {
    if (disabled) return;
    onToggle();
  };

  return (
    <button className={cn("w-full", className)} onClick={handleClick}>
      {children}
    </button>
  );
}

type AccordionContentProps = PropsWithChildren<{
  className?: string;
}>;
export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const { isOpen } = useAccordionContext();

  return (
    <div
      className={cn("grid overflow-hidden transition-all", {
        "grid-rows-[1fr] opacity-100": isOpen,
        "grid-rows-[0fr] opacity-0": !isOpen,
      })}
    >
      <div className="overflow-hidden">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}

"use client";

import useToc from "@/hooks/useToc";
import { cn } from "@/lib/utils";

export default function Toc() {
  const { headings, scrollToHeading, activeId } = useToc();

  return (
    <nav className="space-y-2">
      {headings.map((h) => (
        <a
          key={h.id}
          data-active={activeId === h.id}
          className={cn(
            "data-[active='true']:text-primary block cursor-pointer text-sm text-gray-600 transition-colors hover:text-gray-900 data-[active='true']:font-semibold",
          )}
          href={`#${h.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToHeading(h.id);
          }}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}

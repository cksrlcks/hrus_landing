import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { MENUS } from "./constants";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.setAttribute("data-scroll-lock", "true");

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeAttribute("data-scroll-lock");
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-200 overflow-y-auto bg-white p-6 transition-all duration-300 ease-out lg:hidden",
        isOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-full opacity-0",
      )}
    >
      <div className="">
        <header className="flex items-center justify-end">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X />
          </Button>
        </header>
        <div
          className={cn(
            "space-y-6 transition-all duration-300 ease-out",
            isOpen
              ? "pointer-events-auto translate-x-0 opacity-100 delay-100"
              : "pointer-events-none -translate-x-full opacity-0 delay-0",
          )}
        >
          {MENUS.map((menu) => (
            <div
              key={menu.id}
              className="md:text-default space-y-2 border-b pb-6 text-sm last:border-none"
            >
              <div className="opacity-50">{menu.label}</div>
              <ul className="space-y-2 font-semibold">
                {menu.children?.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={child.path || "#"}
                      className="hover:underline"
                      onClick={onClose}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

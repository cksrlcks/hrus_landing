"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../ui/button";
import { MENUS } from "./constants";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.setAttribute("data-scroll-locked", "true");
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeAttribute("data-scroll-locked");
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-200 overflow-y-auto bg-white p-6 lg:hidden"
        >
          <header className="flex items-center justify-end">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X />
            </Button>
          </header>

          <motion.div
            key="nav-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="space-y-6"
          >
            {MENUS.map((menu) => (
              <div
                key={menu.id}
                className="md:text-default space-y-4 border-b pb-6 last:border-none"
              >
                <div className="opacity-50">{menu.label}</div>
                <ul className="space-y-2 font-semibold">
                  {menu.children?.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={child.path || "#"}
                        className="text-lg hover:underline"
                        onClick={() => onClose()}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

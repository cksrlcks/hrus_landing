"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "motion/react";

export default function GoTopButton() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleClick}
          className="fixed right-4 bottom-6 z-150 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-gray-200 ring-offset-2 ring-offset-white transition-colors hover:bg-gray-100"
        >
          <ArrowUp className="w-1/2" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

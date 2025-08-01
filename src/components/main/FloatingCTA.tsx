"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "motion/react";
import LogoWhite from "@/assets/images/logo-white.svg";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  useEffect(() => {
    const footerEl = document.querySelector("#footer");
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  const isShow = scrolled && !footerVisible;

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="from-primary to-point fixed bottom-4 left-1/2 z-120 flex -translate-x-1/2 scale-80 items-center gap-4 rounded-full bg-gradient-to-tr py-3 pr-3 pl-8 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
        >
          <Image
            src={LogoWhite}
            alt="HRUS"
            className="shrink-0 brightness-0 invert"
          />
          <span className="hidden font-semibold text-white lg:block">
            지금 바로 시작하세요!
          </span>

          <Link
            href="/pricing"
            className="ml-4 flex h-full cursor-pointer items-center justify-center rounded-full bg-[#0F1335] px-4 py-2 font-semibold text-white shadow-sm"
          >
            시작하기
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

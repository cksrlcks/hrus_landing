"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Logo from "@/assets/images/logo.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Inner from "./Inner";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 0);
  });

  return (
    <>
      <header
        id="header"
        className={cn(
          "header",
          "fixed top-0 right-0 left-0 z-200 flex h-[76px] items-center justify-between transition-[height] lg:h-[138px]",
          scrolled && "h-[64px] border-b border-gray-200 bg-white lg:h-[84px]",
        )}
      >
        <Inner className="flex items-center gap-4 lg:gap-10">
          <Link href="/">
            <Image src={Logo} alt="HRUS" />
          </Link>
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="ml-auto flex h-[18px] origin-right scale-80 items-center gap-1.5 md:scale-none">
            <Button variant="ghost" className="hidden lg:flex">
              로그인
            </Button>
            <Separator
              orientation="vertical"
              className="mr-2 ml-2 hidden lg:block"
            />
            <Button variant="outline" asChild>
              <Link href="/inquiry">도입문의</Link>
            </Button>
            <Button asChild>
              <Link href="/solution">서비스 소개서</Link>
            </Button>
          </div>

          {/* mobile */}
          <div className="-mr-4 flex h-[18px] items-center gap-2 lg:hidden">
            <Separator orientation="vertical" />
            <button
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm hover:bg-gray-200"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={16} />
            </button>
          </div>
        </Inner>
      </header>

      <MobileNav
        isOpen={isOpen && !isDesktop}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

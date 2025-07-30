"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "@/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Inner from "./Inner";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "header",
          "fixed top-0 right-0 left-0 z-200 flex items-center justify-between py-8 transition-[padding] md:py-[50px]",
          isScrolled && "border-b border-gray-200 bg-white py-5 md:py-6",
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

      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

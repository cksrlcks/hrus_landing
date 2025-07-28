"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Inner from "./Inner";
import Nav from "./Nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-100 flex items-center justify-between py-[50px] transition-[padding]",
        isScrolled && "border-b border-gray-200 bg-white py-6",
      )}
    >
      <Inner className="flex items-center gap-10">
        <Image src={Logo} alt="Logo" />
        <Nav />
        <div className="ml-auto flex h-[18px] items-center gap-1.5">
          <Button variant="ghost">로그인</Button>
          <Separator orientation="vertical" className="mr-2 ml-2" />
          <Button variant="outline">도입문의</Button>
          <Button>서비스 소개서</Button>
        </div>
      </Inner>
    </header>
  );
}

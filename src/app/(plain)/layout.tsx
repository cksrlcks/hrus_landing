import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/images/logo.svg";
import Inner from "@/components/layout/Inner";

export default function PlainLayout({ children }: PropsWithChildren) {
  return (
    <div className="py-40">
      <Inner className="max-w-7xl">
        <header className="mb-10">
          <Link href="/">
            <Image src={LogoImage} alt="HRUS" />
          </Link>
        </header>
        {children}
      </Inner>
    </div>
  );
}

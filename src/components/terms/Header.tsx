import { PropsWithChildren } from "react";
import Image from "next/image";
import LogoImage from "@/assets/images/logo.svg";

export default function Header({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-6 flex items-center gap-2 text-xl font-bold">
      <Image src={LogoImage} alt="HRUS" />
      {children}
    </h1>
  );
}

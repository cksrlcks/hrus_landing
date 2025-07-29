import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LogoImage from "@/assets/images/logo.svg";
import PromotionImage from "@/assets/images/menu-bg.svg";
import { Promotion as PromotionType } from "./type";

type PromotionProps = {
  promotion?: PromotionType | null;
};

export default function Promotion({ promotion }: PromotionProps) {
  if (!promotion) {
    return null;
  }

  return (
    <div className="relative flex w-full max-w-[210px] flex-col justify-end overflow-hidden rounded-md bg-gradient-to-b from-[#F4FDFA] to-[#E4F9F4]">
      <Image
        src={PromotionImage}
        alt="Promotion"
        className="absolute top-0 left-0 w-full"
      />
      <div className="p-5">
        <Image src={LogoImage} alt="HRUS" className="mb-2.5 h-2.5 w-auto" />
        <div className="mt-2 flex items-center justify-between gap-8">
          <span className="color-[#002A2D] text-[13px] tracking-tight">
            {promotion.title}
          </span>
          <Link
            href={promotion.path || "#"}
            className="bg-point hover:bg-point-hover flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-white"
          >
            <ArrowRight size={14} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </div>
  );
}

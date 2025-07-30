import Image from "next/image";
import LogoWhite from "@/assets/images/logo-white.svg";

export default function FloatingCTA() {
  return (
    <div className="from-primary to-point fixed bottom-4 left-1/2 z-120 flex -translate-x-1/2 scale-80 items-center gap-4 rounded-full bg-gradient-to-tr py-3 pr-3 pl-8 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
      <Image
        src={LogoWhite}
        alt="HRUS"
        className="shrin-0 brightness-0 invert"
      />
      <span className="hidden font-semibold text-white lg:block">
        지금 바로 시작하세요!
      </span>

      <button className="ml-4 flex h-full cursor-pointer items-center justify-center rounded-full bg-[#0F1335] px-4 py-2 font-semibold text-white shadow-sm">
        시작하기
      </button>
    </div>
  );
}

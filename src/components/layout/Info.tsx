import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/images/logo-white.svg";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, MENUS } from "./constants";

export default function Info() {
  return (
    <>
      <div className="space-y-10">
        <div className="space-y-4">
          <Image src={LogoImage} alt="HRUS" />
          <span className="font-medium opacity-50">
            기업맞춤형 인사경영혁신 솔루션
          </span>
        </div>
        <div className="space-y-2.5 text-sm">
          <div className="font-semibold">{COMPANY_INFO.company_name}</div>
          <ul className="space-y-1 font-light opacity-40">
            {COMPANY_INFO.info.map((info) => (
              <li key={info.label} className="flex gap-2 leading-[20px]">
                <span className="w-[9em] shrink-0">{info.label}</span>
                <span>{info.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 [grid-template-rows:1fr_2fr] gap-x-18 whitespace-nowrap">
        {MENUS.map((menu, index) => (
          <div
            key={menu.id}
            className={cn(
              "flex w-[50%] flex-col space-y-2.5",
              index === 0 && "row-span-2",
            )}
          >
            <div className="opacity-40">{menu.label}</div>
            <ul className="space-y-1.5 opacity-80">
              {menu.children?.map((child) => (
                <li key={child.id}>
                  <Link href={child.path || "#"} className="hover:underline">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

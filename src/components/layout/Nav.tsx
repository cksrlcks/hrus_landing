import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LogoImage from "@/assets/images/logo.svg";
import PromotionImage from "@/assets/images/menu-bg.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const MENUS = [
  {
    id: "service",
    label: "서비스 소개",
    children: [
      {
        id: "dashboard",
        label: "대시보드",
        path: "/service/dashboard",
        description: "HRUS의 모든 기능을 한눈에 확인할 수 있습니다.",
      },
      {
        id: "recruit",
        label: "인재채용",
        path: "/service/recruit",
        description: "인재를 효율적으로 채용할 수 있는 솔루션입니다.",
      },
      {
        id: "organization",
        label: "조직",
        path: "/service/organization",
        description: "조직도를 시각적으로 관리할 수 있습니다.",
      },
      {
        id: "attendance",
        label: "근태",
        path: "/service/attendance",
        description: "근태를 효율적으로 관리할 수 있는 솔루션입니다.",
      },
      {
        id: "goals",
        label: "목표",
        path: "/service/goals",
        description: "조직과 개인의 목표를 관리할 수 있습니다.",
      },
      {
        id: "salary-design",
        label: "임금설계",
        path: "/service/salary-design",
        description: "임금설계를 효율적으로 관리할 수 있는 솔루션입니다.",
        isUpcoming: true,
      },
      {
        id: "approval-document",
        label: "전자결제&문서관리",
        path: "/service/approval-document",
        description:
          "전자결제와 문서를 효율적으로 관리할 수 있는 솔루션입니다.",
        isUpcoming: true,
      },
    ],
  },
  {
    id: "pricing",
    label: "구독 요금",
    path: "/pricing",
  },
  {
    id: "support",
    label: "고객지원",
    children: [
      {
        id: "inquiry",
        label: "1:1 문의",
        path: "/inquiry",
        description: "도입관련 문의를 하실 수 있습니다.",
      },
      {
        id: "solution",
        label: "서비스 소개서",
        path: "/solution",
        description: "HR US 솔루션에 대해 궁금하신가요?",
      },
    ],
  },
];

export default function Nav() {
  return (
    <NavigationMenu viewport={false} delayDuration={0}>
      <NavigationMenuList>
        {MENUS.map((menu) => (
          <NavigationMenuItem key={menu.id}>
            {menu.children ? (
              <>
                <NavigationMenuTrigger
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  {menu.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex gap-5">
                    <ul
                      className={cn(
                        "grid w-[500px] grid-cols-2 gap-4",
                        menu.id === "support" && "flex flex-col gap-0",
                      )}
                    >
                      {menu.children.map((child) => (
                        <li
                          key={child.id}
                          className="mb-1.5 border-b border-gray-100 pb-1.5 last:mb-0 last:border-0 last:pb-0"
                        >
                          <NavigationMenuLink asChild>
                            <Link href={child.path}>
                              <span className="flex items-center gap-2">
                                {child.label}
                                {child.isUpcoming && (
                                  <span className="text-muted-foreground origin-left-center scale-95 rounded bg-gray-100 px-1 py-1 text-xs">
                                    도입예정
                                  </span>
                                )}
                              </span>
                              {"description" in child && child.description && (
                                <div className="text-muted-foreground text-sm font-normal">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    {menu.id === "support" && (
                      <div className="relative w-full max-w-[210px]">
                        <Image
                          src={PromotionImage}
                          alt="Promotion"
                          className="w-full"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-5">
                          <Image
                            src={LogoImage}
                            alt="HRUS"
                            className="mb-2.5 h-2.5 w-auto"
                          />
                          <div className="mt-2 flex items-center justify-between gap-8">
                            <span className="color-[#002A2D] text-[13px] tracking-tight">
                              원하는 기능만 골라서 지금 시작해보세요
                            </span>
                            <Link
                              href="/pricing"
                              className="bg-primary flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-white"
                            >
                              <ArrowRight size={14} strokeWidth={3} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href={menu.path}>{menu.label}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FeatureIconAttendance from "@/assets/images/main/icon-feature-attendance.svg";
import FeatureIconDashboard from "@/assets/images/main/icon-feature-dashboard.svg";
import FeatureIconDocs from "@/assets/images/main/icon-feature-docs.svg";
import FeatureIconEval from "@/assets/images/main/icon-feature-eval.svg";
import FeatureIconGoal from "@/assets/images/main/icon-feature-goal.svg";
import FeatureIconOrganization from "@/assets/images/main/icon-feature-organization.svg";
import FeatureIconRecruit from "@/assets/images/main/icon-feature-recruit.svg";
import FeatureIconSalary from "@/assets/images/main/icon-feature-salary.svg";
import { cn } from "@/lib/utils";
import Inner from "../layout/Inner";

const MENUS = [
  {
    name: "대시보드",
    path: "/service/dashboard",
    icon: FeatureIconDashboard,
  },
  {
    name: "인재채용",
    path: "/service/recruit",
    icon: FeatureIconRecruit,
  },
  {
    name: "조직",
    path: "/service/organization",
    icon: FeatureIconOrganization,
  },
  {
    name: "근태",
    path: "/service/attendance",
    icon: FeatureIconAttendance,
  },
  {
    name: "목표",
    path: "/service/goals",
    icon: FeatureIconGoal,
  },
  {
    name: "종합평가",
    path: "/service/evaluation",
    icon: FeatureIconEval,
  },
  {
    name: "임금설계",
    path: "/service/salary-design",
    icon: FeatureIconSalary,
  },
  {
    name: "결재/문서",
    path: "/service/docs",
    icon: FeatureIconDocs,
  },
];

export default function SubNav() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const stuck = !entry.isIntersecting;
        setIsSticky(stuck);
      },
      { root: null, threshold: 0, rootMargin: "-10px 0px 0px 0px" },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-[1px]"></div>
      <div
        ref={navRef}
        className="sticky top-[59px] z-100 border-b border-gray-200 bg-white shadow-[0_4px_46px_rgba(0,0,0,0.03)] md:top-[67px] lg:top-22"
      >
        <Inner>
          <ul className="flex">
            {MENUS.map((menu) => (
              <li
                key={menu.name}
                className="flex-1"
                data-active={pathname === menu.path}
              >
                <Link
                  href={menu.path}
                  className={cn(
                    "flex flex-col items-center justify-center gap-3 border-b-2 border-transparent py-5 opacity-30",
                    {
                      // "gap-2 py-3": isSticky,
                      "border-point opacity-100": pathname === menu.path,
                    },
                  )}
                >
                  <Image
                    src={menu.icon}
                    alt={menu.name}
                    className={cn("h-6 w-auto", {
                      //"h-5": isSticky,
                    })}
                  />
                  <span
                    className={cn("text-sm", {
                      //"text-xs": isSticky,
                      "font-semibold": pathname === menu.path,
                    })}
                  >
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Inner>
      </div>
    </>
  );
}

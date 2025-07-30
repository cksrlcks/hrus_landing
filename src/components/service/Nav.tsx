"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useInView } from "motion/react";
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
import { Color, getColorObject } from "./ColorProvider";

const MENUS: {
  name: string;
  path: string;
  icon: StaticImageData;
  color: Color;
}[] = [
  {
    name: "대시보드",
    path: "/service/dashboard",
    icon: FeatureIconDashboard,
    color: "green",
  },
  {
    name: "인재채용",
    path: "/service/recruit",
    icon: FeatureIconRecruit,
    color: "blue",
  },
  {
    name: "조직",
    path: "/service/organization",
    icon: FeatureIconOrganization,
    color: "red",
  },
  {
    name: "근태",
    path: "/service/attendance",
    icon: FeatureIconAttendance,
    color: "blue",
  },
  {
    name: "목표",
    path: "/service/goals",
    icon: FeatureIconGoal,
    color: "yellow",
  },
  {
    name: "종합평가",
    path: "/service/evaluation",
    icon: FeatureIconEval,
    color: "green",
  },
  {
    name: "임금설계",
    path: "/service/salary-design",
    icon: FeatureIconSalary,
    color: "red",
  },
  {
    name: "결재/문서",
    path: "/service/docs",
    icon: FeatureIconDocs,
    color: "yellow",
  },
];

export default function SubNav() {
  const navRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(navRef);
  const pathname = usePathname();

  const color = MENUS.find((menu) => menu.path === pathname)?.color || "green";
  const { border } = getColorObject(color);
  const menuLength = MENUS.length;
  return (
    <>
      <div
        ref={navRef}
        className={cn(
          "absolute top-[800px] right-0 left-0 z-100 hidden border-b border-gray-200 bg-white shadow-[0_4px_46px_rgba(0,0,0,0.03)] lg:block",
        )}
      >
        <Inner>
          <div className="relative">
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
                      "flex flex-col items-center justify-center gap-3 py-5 opacity-30",
                      {
                        "opacity-100": pathname === menu.path,
                      },
                    )}
                  >
                    <Image
                      src={menu.icon}
                      alt={menu.name}
                      className={cn("h-6 w-auto", {})}
                    />
                    <span
                      className={cn("text-sm", {
                        "font-semibold": pathname === menu.path,
                      })}
                    >
                      {menu.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <span
              className="absolute bottom-0 left-0 z-1 h-[2px] transition-all"
              style={{
                width: `${100 / menuLength}%`,
                backgroundColor: border,
                left: `${(100 / menuLength) * MENUS.findIndex((menu) => menu.path === pathname)}%`,
              }}
            ></span>
          </div>
        </Inner>
      </div>
      <AnimatePresence>
        {!isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "fixed top-[88px] right-0 left-0 z-100 hidden border-b border-gray-200 bg-white shadow-[0_4px_46px_rgba(0,0,0,0.03)] lg:flex",
            )}
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
                        "flex flex-col items-center justify-center gap-3 border-b-2 border-transparent py-4 opacity-30",
                        {
                          "border-black opacity-100": pathname === menu.path,
                        },
                      )}
                    >
                      <span
                        className={cn("text-sm", {
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

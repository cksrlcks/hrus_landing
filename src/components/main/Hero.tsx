import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import AttendanceImage from "@/assets/images/icon-feature-attendance.svg";
import EvalImage from "@/assets/images/icon-feature-eval.svg";
import GoalsImage from "@/assets/images/icon-feature-goals.svg";
import SalaryImage from "@/assets/images/icon-feature-salary.svg";
import DashboardImage from "@/assets/images/main/hero-1.svg";
import GoalImage from "@/assets/images/main/hero-2.svg";
import PayImage from "@/assets/images/main/hero-3.svg";
import { cn } from "@/lib/utils";
import AnimatedCanvas from "../layout/AnimatedCanvas";
import { Button } from "../ui/button";
import FeatureIcon from "./FeatureIcon";
import {
  SectionCTA,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "./Section";

export default function Hero() {
  return (
    <div className="relative flex min-h-[800px] flex-col justify-end overflow-hidden pt-50 pb-30 lg:mb-10">
      <div className="relative z-1 flex flex-col items-center gap-16">
        <SectionHeader>
          <SectionTitle size="lg">
            중소기업 인사경영혁신 솔루션
            <br />
            함께하는 <span className="text-primary">HR</span>, 나아가는{" "}
            <span className="text-primary">우리</span>
          </SectionTitle>
          <SectionDescription>
            중소기업을 위한 인사경영혁신 솔루션
            <br />
            함께 성장하고 나아가는 조직을 만듭니다.
          </SectionDescription>
          <SectionCTA>
            <Button size="lg" asChild>
              <Link href="/solution">서비스 소개서</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/inquiry">도입문의</Link>
            </Button>
          </SectionCTA>
        </SectionHeader>

        <div className="relative z-2 inline-block px-10">
          <ScreenFrame>
            <Image src={DashboardImage} alt="Dashboard" />
            <FeatureIcon className="absolute top-0 right-0 hidden translate-x-1/2 -translate-y-1/2 lg:flex">
              <Image src={EvalImage} alt="Salary" />
            </FeatureIcon>
            <FeatureIcon className="absolute top-0 left-0 hidden translate-x-[100%] -translate-y-1/2 lg:flex">
              <Image src={AttendanceImage} alt="Salary" />
            </FeatureIcon>
          </ScreenFrame>
          <ScreenFrame className="absolute right-4 bottom-0 h-auto w-[30vw] translate-y-1/10 lg:right-0 lg:w-auto lg:translate-x-1/4">
            <Image src={GoalImage} alt="Goals" />
            <FeatureIcon className="absolute top-0 right-0 hidden translate-x-1/2 -translate-y-1/2 lg:flex">
              <Image src={SalaryImage} alt="Salary" />
            </FeatureIcon>
          </ScreenFrame>
          <ScreenFrame className="absolute bottom-0 left-4 h-auto w-[40vw] translate-y-1/10 lg:left-0 lg:w-auto lg:-translate-x-1/10">
            <Image src={PayImage} alt="Payments" />
            <FeatureIcon className="absolute top-1/2 left-0 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
              <Image src={GoalsImage} alt="Salary" />
            </FeatureIcon>
          </ScreenFrame>
        </div>
      </div>

      <AnimatedCanvas className="absolute inset-0" />
      <div className="absolute right-0 bottom-0 left-0 h-[50%] w-full translate-y-1/2 bg-[#57EEFF] opacity-[0.08] mix-blend-multiply blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 left-0 h-50 w-full bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF]/0"></div>
    </div>
  );
}

function ScreenFrame({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-[18px] border border-white bg-white/50 p-2 shadow-[0px_-3px_20px_rgba(0,0,0,0.07)] backdrop-blur-[2px] lg:p-4",
        className,
      )}
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-[0px_-3px_20px_rgba(0,0,0,0.07)]">
        {children}
      </div>
    </div>
  );
}

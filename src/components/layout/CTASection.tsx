import React, { PropsWithChildren } from "react";
import Image from "next/image";
import AttendanceImage from "@/assets/images/icon-feature-attendance.svg";
import EvalImage from "@/assets/images/icon-feature-eval.svg";
import GoalsImage from "@/assets/images/icon-feature-goals.svg";
import SalaryImage from "@/assets/images/icon-feature-salary.svg";
import { cn } from "@/lib/utils";
import FeatureIcon from "../main/FeatureIcon";
import {
  CTAButton,
  SectionDescription,
  SectionHeader,
  SectionLogo,
  SectionTitle,
} from "../main/Section";
import AnimatedCanvas from "./AnimatedCanvas";
import Inner from "./Inner";

export default function CTASection() {
  return (
    <div className="relative h-[640px] w-full overflow-hidden">
      <AnimatedCanvas className="absolute top-1/2 left-1/2 z-1 h-full w-full -translate-x-1/2 -translate-y-1/2 transform" />
      <Inner className="relative z-3 flex h-full w-full flex-col items-center justify-center text-center">
        <SectionHeader>
          <SectionLogo />
          <SectionTitle>
            지금 바로 우리 회사 인사관리를 <br />
            혁신하고 싶다면?
          </SectionTitle>
          <SectionDescription>
            지금 바로 HR US로 시작해 보세요
          </SectionDescription>
          <CTAButton />
        </SectionHeader>
      </Inner>
      <div className="absolute inset-0 z-2 h-full w-full">
        <div className="absolute -top-3/4 right-0 left-0 h-[70%] w-full bg-[#57EEFF] opacity-[0.08] mix-blend-multiply blur-[100px]"></div>
        <div className="absolute right-0 -bottom-3/4 left-0 h-[70%] w-full bg-[#5766FF] opacity-[0.08] mix-blend-multiply blur-[100px]"></div>
      </div>
      <div className="hidden md:block">
        <FeatureIcon className="absolute top-[160px] left-1/2 z-1 -translate-x-[27vw] -translate-y-1/2">
          <Image src={SalaryImage} alt="Salary" />
        </FeatureIcon>
        <FeatureIcon className="absolute bottom-[10%] left-1/2 z-1 -translate-x-[35vw] -translate-y-1/2">
          <Image src={EvalImage} alt="Evaluation" />
        </FeatureIcon>
        <FeatureIcon className="absolute right-1/2 bottom-[22%] z-1 translate-x-[28.5vw] -translate-y-1/2">
          <Image src={GoalsImage} alt="Goals" />
        </FeatureIcon>
        <FeatureIcon className="absolute top-[24%] right-1/2 z-1 translate-x-[37vw] -translate-y-1/2">
          <Image src={AttendanceImage} alt="Attendance" />
        </FeatureIcon>
      </div>
    </div>
  );
}
